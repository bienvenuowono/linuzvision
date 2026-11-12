import { db } from "@/lib/db";
import { deleteUpload, sweepUploads } from "@/lib/media";
import { seedCourses, totalDuration, type Course, type TrainingModule } from "@/lib/training";
import { leadershipTeam } from "@/components/leadershipTeam";
import { defaultTexts, isTextId, type TextId, type TextOverrides } from "@/lib/page-texts";

/* Content managed from the dashboard: courses, site contact details and the leadership team. */

export type CourseInput = Omit<Course, "id" | "duration" | "modules" | "published"> & {
  published: number;
  modules: Array<Omit<TrainingModule, "id" | "number">>;
};

export type SiteSettings = {
  contactEmail: string;
  phone: string;
  address: string;
  whatsappNumber: string;
  linkedinUrl: string;
  facebookUrl: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  title: string;
  description: string;
  image: string;
  objectPosition: string;
  published: number;
};

export type TeamMemberInput = Omit<TeamMember, "id">;

export const defaultSettings: SiteSettings = {
  contactEmail: "contact@linuzvision.com",
  phone: "+1-443-248-8520",
  address: "PO BOX 224, Aberdeen, MD 21001",
  whatsappNumber: (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, ""),
  linkedinUrl: "https://www.linkedin.com/company/linuzvision",
  facebookUrl: "https://facebook.com/linuzvision",
};

const seedTeam: TeamMember[] = leadershipTeam.map((member, index) => ({
  id: index + 1,
  name: member.name,
  role: member.role,
  title: member.title,
  description: member.description,
  image: member.image,
  objectPosition: member.objectPosition,
  published: 1,
}));

function transaction<T>(work: () => T): T {
  if (!db) throw new Error("Database unavailable");
  db.exec("BEGIN IMMEDIATE");
  try {
    const result = work();
    db.exec("COMMIT");
    return result;
  } catch (error) {
    db.exec("ROLLBACK");
    throw error;
  }
}

function seedOnce(flag: string, seed: () => void) {
  if (!db) return;
  if (db.prepare("SELECT value FROM app_metadata WHERE key = ?").get(flag)) return;
  transaction(() => {
    seed();
    db!.prepare("INSERT OR REPLACE INTO app_metadata (key,value) VALUES (?,?)").run(flag, new Date().toISOString());
  });
}

function insertModules(courseId: number, modules: CourseInput["modules"]) {
  const statement = db!.prepare("INSERT INTO course_modules (courseId,position,title,description,duration,video,thumbnail) VALUES (?,?,?,?,?,?,?)");
  modules.forEach((module, index) => statement.run(courseId, index, module.title, module.description, module.duration, module.video, module.thumbnail));
}

function insertCourse(input: CourseInput) {
  const now = new Date().toISOString();
  const position = (db!.prepare("SELECT COALESCE(MAX(position),0) + 1 AS next FROM courses").get() as { next: number }).next;
  const result = db!.prepare(`INSERT INTO courses
    (slug,title,shortTitle,description,level,language,creator,cover,outcomes,requirements,audience,about,published,position,createdAt,updatedAt)
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`).run(
    input.slug, input.title, input.shortTitle, input.description, input.level, input.language, input.creator, input.cover,
    JSON.stringify(input.outcomes), JSON.stringify(input.requirements), JSON.stringify(input.audience), JSON.stringify(input.about),
    input.published, position, now, now,
  );
  const id = Number(result.lastInsertRowid);
  insertModules(id, input.modules);
  return id;
}

if (db) {
  try {
    db.exec(`
      CREATE TABLE IF NOT EXISTS courses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        shortTitle TEXT NOT NULL,
        description TEXT NOT NULL,
        level TEXT NOT NULL,
        language TEXT NOT NULL,
        creator TEXT NOT NULL,
        cover TEXT NOT NULL,
        outcomes TEXT NOT NULL DEFAULT '[]',
        requirements TEXT NOT NULL DEFAULT '[]',
        audience TEXT NOT NULL DEFAULT '[]',
        about TEXT NOT NULL DEFAULT '[]',
        published INTEGER NOT NULL DEFAULT 0,
        position INTEGER NOT NULL DEFAULT 0,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS course_modules (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        courseId INTEGER NOT NULL REFERENCES courses(id) ON DELETE CASCADE,
        position INTEGER NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        duration TEXT NOT NULL,
        video TEXT NOT NULL,
        thumbnail TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS site_settings (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS page_texts (
        id TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS team_members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        image TEXT NOT NULL,
        objectPosition TEXT NOT NULL DEFAULT 'center center',
        position INTEGER NOT NULL DEFAULT 0,
        published INTEGER NOT NULL DEFAULT 1
      );
    `);
    // The content that used to live in the code becomes the first rows, once.
    seedOnce("courses_seeded", () => seedCourses.forEach((course) => insertCourse({ ...course, published: 1 })));
    seedOnce("team_seeded", () => {
      const statement = db!.prepare("INSERT INTO team_members (name,role,title,description,image,objectPosition,position,published) VALUES (?,?,?,?,?,?,?,1)");
      seedTeam.forEach((member, index) => statement.run(member.name, member.role, member.title, member.description, member.image, member.objectPosition, index));
    });
  } catch (error) {
    console.error("Failed to prepare managed content tables:", error);
  }
}

function list(value: unknown) {
  try {
    const parsed = JSON.parse(String(value));
    return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
  } catch {
    return [];
  }
}

function hydrateCourse(row: Record<string, unknown>): Course {
  const modules = (db!.prepare("SELECT * FROM course_modules WHERE courseId = ? ORDER BY position, id").all(Number(row.id)) as Array<Record<string, unknown>>)
    .map((module, index) => ({
      id: Number(module.id),
      number: index + 1,
      title: String(module.title),
      description: String(module.description),
      duration: String(module.duration),
      video: String(module.video),
      thumbnail: String(module.thumbnail),
    }));
  return {
    id: Number(row.id),
    slug: String(row.slug),
    title: String(row.title),
    shortTitle: String(row.shortTitle),
    description: String(row.description),
    duration: totalDuration(modules),
    level: String(row.level),
    language: String(row.language),
    creator: String(row.creator),
    cover: String(row.cover),
    modules,
    outcomes: list(row.outcomes),
    requirements: list(row.requirements),
    audience: list(row.audience),
    about: list(row.about),
    published: Number(row.published),
  };
}

export function listCourses(includeDrafts = false): Course[] {
  if (!db) return seedCourses;
  try {
    const sql = includeDrafts
      ? "SELECT * FROM courses ORDER BY position, id"
      : "SELECT * FROM courses WHERE published = 1 ORDER BY position, id";
    return (db.prepare(sql).all() as Array<Record<string, unknown>>).map(hydrateCourse);
  } catch (error) {
    console.error("listCourses error:", error);
    return seedCourses;
  }
}

export function getCourseBySlug(slug: string): Course | undefined {
  if (!db) return seedCourses.find((course) => course.slug === slug);
  try {
    const row = db.prepare("SELECT * FROM courses WHERE slug = ? AND published = 1").get(slug) as Record<string, unknown> | undefined;
    return row ? hydrateCourse(row) : undefined;
  } catch (error) {
    console.error("getCourseBySlug error:", error);
    return seedCourses.find((course) => course.slug === slug);
  }
}

function getCourseById(id: number): Course | undefined {
  const row = db!.prepare("SELECT * FROM courses WHERE id = ?").get(id) as Record<string, unknown> | undefined;
  return row ? hydrateCourse(row) : undefined;
}

function courseMedia(course: Course | undefined) {
  return course ? [course.cover, ...course.modules.flatMap((module) => [module.video, module.thumbnail])] : [];
}

// Removes files sent from the dashboard once no course or team member points to them any more.
function releaseUploads(candidates: string[]) {
  if (!db) return;
  for (const value of new Set(candidates.filter((item) => item.startsWith("/media/")))) {
    const used = db.prepare(`SELECT 1 FROM courses WHERE cover = ?1
      UNION ALL SELECT 1 FROM course_modules WHERE video = ?1 OR thumbnail = ?1
      UNION ALL SELECT 1 FROM team_members WHERE image = ?1
      UNION ALL SELECT 1 FROM insights WHERE image = ?1 LIMIT 1`).get(value);
    if (!used) {
      try { deleteUpload(value); } catch (error) { console.error("Could not remove unused upload:", value, error); }
    }
  }
}

// Every file a saved course, team member or publication still points to.
function referencedUploads() {
  const rows = db!.prepare(`SELECT cover AS value FROM courses
    UNION SELECT video FROM course_modules UNION SELECT thumbnail FROM course_modules
    UNION SELECT image FROM team_members UNION SELECT image FROM insights`).all() as Array<{ value: string }>;
  return new Set(rows.map((row) => row.value));
}

// Clears files that were sent but never saved (replaced before saving, abandoned drafts).
export function cleanAbandonedUploads() {
  if (!db) return;
  try {
    sweepUploads(referencedUploads());
  } catch (error) {
    console.error("Could not clean abandoned uploads:", error);
  }
}

export function createCourse(input: CourseInput): Course {
  const id = transaction(() => insertCourse(input));
  return getCourseById(id)!;
}

export function updateCourse(id: number, input: CourseInput): Course | undefined {
  const before = db ? getCourseById(id) : undefined;
  if (!before) return undefined;
  transaction(() => {
    db!.prepare(`UPDATE courses SET slug=?,title=?,shortTitle=?,description=?,level=?,language=?,creator=?,cover=?,
      outcomes=?,requirements=?,audience=?,about=?,published=?,updatedAt=? WHERE id=?`).run(
      input.slug, input.title, input.shortTitle, input.description, input.level, input.language, input.creator, input.cover,
      JSON.stringify(input.outcomes), JSON.stringify(input.requirements), JSON.stringify(input.audience), JSON.stringify(input.about),
      input.published, new Date().toISOString(), id,
    );
    db!.prepare("DELETE FROM course_modules WHERE courseId = ?").run(id);
    insertModules(id, input.modules);
  });
  releaseUploads(courseMedia(before));
  return getCourseById(id);
}

export function deleteCourse(id: number) {
  const before = db ? getCourseById(id) : undefined;
  if (!before) return false;
  transaction(() => {
    db!.prepare("DELETE FROM course_modules WHERE courseId = ?").run(id);
    db!.prepare("DELETE FROM courses WHERE id = ?").run(id);
  });
  releaseUploads(courseMedia(before));
  return true;
}

export function getSiteSettings(): SiteSettings {
  if (!db) return defaultSettings;
  try {
    const stored = Object.fromEntries((db.prepare("SELECT key,value FROM site_settings").all() as Array<{ key: string; value: string }>).map((row) => [row.key, row.value]));
    return { ...defaultSettings, ...stored };
  } catch (error) {
    console.error("getSiteSettings error:", error);
    return defaultSettings;
  }
}

export function saveSiteSettings(input: SiteSettings): SiteSettings {
  transaction(() => {
    const statement = db!.prepare("INSERT OR REPLACE INTO site_settings (key,value) VALUES (?,?)");
    for (const key of Object.keys(defaultSettings) as Array<keyof SiteSettings>) statement.run(key, input[key]);
  });
  return getSiteSettings();
}

function hydrateMember(row: Record<string, unknown>): TeamMember {
  return {
    id: Number(row.id),
    name: String(row.name),
    role: String(row.role),
    title: String(row.title),
    description: String(row.description),
    image: String(row.image),
    objectPosition: String(row.objectPosition),
    published: Number(row.published),
  };
}

export function listTeam(includeHidden = false): TeamMember[] {
  if (!db) return seedTeam;
  try {
    const sql = includeHidden
      ? "SELECT * FROM team_members ORDER BY position, id"
      : "SELECT * FROM team_members WHERE published = 1 ORDER BY position, id";
    return (db.prepare(sql).all() as Array<Record<string, unknown>>).map(hydrateMember);
  } catch (error) {
    console.error("listTeam error:", error);
    return seedTeam;
  }
}

export function createTeamMember(input: TeamMemberInput): TeamMember {
  if (!db) throw new Error("Database unavailable");
  const position = (db.prepare("SELECT COALESCE(MAX(position),0) + 1 AS next FROM team_members").get() as { next: number }).next;
  const result = db.prepare("INSERT INTO team_members (name,role,title,description,image,objectPosition,position,published) VALUES (?,?,?,?,?,?,?,?)").run(
    input.name, input.role, input.title, input.description, input.image, input.objectPosition, position, input.published,
  );
  return hydrateMember(db.prepare("SELECT * FROM team_members WHERE id = ?").get(Number(result.lastInsertRowid)) as Record<string, unknown>);
}

export function updateTeamMember(id: number, input: TeamMemberInput): TeamMember | undefined {
  if (!db) throw new Error("Database unavailable");
  const before = db.prepare("SELECT * FROM team_members WHERE id = ?").get(id) as Record<string, unknown> | undefined;
  if (!before) return undefined;
  db.prepare("UPDATE team_members SET name=?,role=?,title=?,description=?,image=?,objectPosition=?,published=? WHERE id=?").run(
    input.name, input.role, input.title, input.description, input.image, input.objectPosition, input.published, id,
  );
  releaseUploads([String(before.image)]);
  return hydrateMember(db.prepare("SELECT * FROM team_members WHERE id = ?").get(id) as Record<string, unknown>);
}

export function deleteTeamMember(id: number) {
  if (!db) throw new Error("Database unavailable");
  const before = db.prepare("SELECT * FROM team_members WHERE id = ?").get(id) as Record<string, unknown> | undefined;
  if (!before) return false;
  db.prepare("DELETE FROM team_members WHERE id = ?").run(id);
  releaseUploads([String(before.image)]);
  return true;
}

// Rewrites the display order from a list of ids (first id is shown first).
export function reorderTeam(ids: number[]) {
  transaction(() => {
    const statement = db!.prepare("UPDATE team_members SET position = ? WHERE id = ?");
    ids.forEach((id, index) => statement.run(index, id));
  });
}

// Page texts changed from the dashboard. Rows for texts that no longer exist in the registry are ignored.
export function getTextOverrides(): TextOverrides {
  if (!db) return {};
  try {
    const rows = db.prepare("SELECT id,value FROM page_texts").all() as Array<{ id: string; value: string }>;
    const overrides: TextOverrides = {};
    for (const row of rows) if (isTextId(row.id) && row.value !== defaultTexts[row.id]) overrides[row.id] = row.value;
    return overrides;
  } catch (error) {
    console.error("getTextOverrides error:", error);
    return {};
  }
}

// Saves new wordings; null (or the original wording) restores the original text.
export function saveTextChanges(changes: Array<[TextId, string | null]>) {
  const now = new Date().toISOString();
  transaction(() => {
    const save = db!.prepare("INSERT OR REPLACE INTO page_texts (id,value,updatedAt) VALUES (?,?,?)");
    const reset = db!.prepare("DELETE FROM page_texts WHERE id = ?");
    for (const [id, value] of changes) {
      if (value === null || value === defaultTexts[id]) reset.run(id);
      else save.run(id, value, now);
    }
  });
  return getTextOverrides();
}
