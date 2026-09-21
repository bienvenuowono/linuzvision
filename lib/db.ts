import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

export type Insight = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  published: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type Inquiry = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export type AdminAccount = {
  id: number;
  email: string;
  displayName: string;
  createdAt: string;
};

type StoredAdminAccount = AdminAccount & { passwordHash: string };

const isVercel = Boolean(process.env.VERCEL);
const defaultDataDir = isVercel ? "/tmp" : path.join(process.cwd(), "data");
const dataDirectory = process.env.DATABASE_DIRECTORY ? path.resolve(process.env.DATABASE_DIRECTORY) : defaultDataDir;
const databasePath = path.join(dataDirectory, "linuzvision.db");

declare global {
  var linuzvisionDb: DatabaseSync | undefined;
}

const fallbackInsights: Insight[] = [
  {
    id: 1,
    slug: "rise-of-autonomous-ai-agents-in-business",
    title: "The Rise of Autonomous AI Agents in Business",
    excerpt: "Exploring the shift from passive tools to active systems and how autonomous architectures are redefining enterprise workflows.",
    content: "Autonomous AI agents represent a shift from software that waits for instructions to governed systems that can participate in operational workflows. Effective deployment begins with defined permissions, reliable data, human oversight, and infrastructure designed for secure execution.",
    category: "Artificial Intelligence",
    image: "/images/ai-security-matrix.png",
    published: 1,
    publishedAt: "2024-10-24T00:00:00.000Z",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }
];

function createDatabase(): DatabaseSync | null {
  try {
    if (isVercel && !process.env.DATABASE_DIRECTORY) {
      console.error("Persistent backend disabled: configure DATABASE_DIRECTORY on a persistent volume.");
      return null;
    }
    fs.mkdirSync(dataDirectory, { recursive: true });

    // Copy seed DB to /tmp if running on Vercel and file doesn't exist yet in /tmp
    if (isVercel && databasePath.startsWith("/tmp")) {
      const seedDbPath = path.join(process.cwd(), "data", "linuzvision.db");
      if (!fs.existsSync(databasePath) && fs.existsSync(seedDbPath)) {
        try {
          fs.copyFileSync(seedDbPath, databasePath);
        } catch {
          // ignore copy error and let sqlite initialize fresh
        }
      }
    }

    const db = new DatabaseSync(databasePath);
    db.exec("PRAGMA busy_timeout = 10000;");
    try {
      db.exec("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;");
    } catch {
      // WAL mode might fail in certain container environments, fallback to DELETE journal mode
      try { db.exec("PRAGMA journal_mode = DELETE; PRAGMA foreign_keys = ON;"); } catch {}
    }

    db.exec(`
      CREATE TABLE IF NOT EXISTS insights (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        title TEXT NOT NULL,
        excerpt TEXT NOT NULL,
        content TEXT NOT NULL,
        category TEXT NOT NULL DEFAULT 'Intelligence',
        image TEXT NOT NULL DEFAULT '/images/ai-security-matrix.png',
        published INTEGER NOT NULL DEFAULT 0,
        publishedAt TEXT NOT NULL,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS inquiries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        fullName TEXT NOT NULL,
        email TEXT NOT NULL,
        subject TEXT NOT NULL,
        message TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'new',
        createdAt TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS admin_accounts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT NOT NULL UNIQUE COLLATE NOCASE,
        displayName TEXT NOT NULL,
        passwordHash TEXT NOT NULL,
        createdAt TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS app_metadata (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL
      );
      CREATE TABLE IF NOT EXISTS rate_limits (
        key TEXT PRIMARY KEY,
        count INTEGER NOT NULL,
        resetAt INTEGER NOT NULL
      );
    `);

    const bootstrap = db.prepare("SELECT value FROM app_metadata WHERE key = 'admin_bootstrapped'").get() as { value: string } | undefined;
    if (!bootstrap && process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
      db.exec("BEGIN IMMEDIATE");
      try {
        db.prepare("INSERT OR IGNORE INTO admin_accounts (email,displayName,passwordHash,createdAt) VALUES (?,?,?,?)").run(
        process.env.ADMIN_EMAIL.trim().toLowerCase(),
        process.env.ADMIN_NAME?.trim() || "LinuZvision Administrator",
        hashPassword(process.env.ADMIN_PASSWORD),
        new Date().toISOString(),
        );
        db.prepare("INSERT OR REPLACE INTO app_metadata (key,value) VALUES ('admin_bootstrapped',?)").run(new Date().toISOString());
        db.exec("COMMIT");
      } catch (error) { db.exec("ROLLBACK"); throw error; }
    }

    const count = db.prepare("SELECT COUNT(*) AS count FROM insights").get() as { count: number };
    if (count.count === 0) {
      const now = new Date().toISOString();
      db.prepare(`INSERT INTO insights
        (slug,title,excerpt,content,category,image,published,publishedAt,createdAt,updatedAt)
        VALUES (?,?,?,?,?,?,?,?,?,?)`).run(
        "rise-of-autonomous-ai-agents-in-business",
        "The Rise of Autonomous AI Agents in Business",
        "Exploring the shift from passive tools to active systems and how autonomous architectures are redefining enterprise workflows.",
        "Autonomous AI agents represent a shift from software that waits for instructions to governed systems that can participate in operational workflows. Effective deployment begins with defined permissions, reliable data, human oversight, and infrastructure designed for secure execution.",
        "Artificial Intelligence",
        "/images/ai-security-matrix.png",
        1,
        "2024-10-24T00:00:00.000Z",
        now,
        now,
      );
    }
    return db;
  } catch (err) {
    console.error("Failed to initialize SQLite database:", err);
    try {
      // Try in-memory fallback if file system database fails
      const memoryDb = new DatabaseSync(":memory:");
      memoryDb.exec(`
        CREATE TABLE IF NOT EXISTS insights (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          slug TEXT NOT NULL UNIQUE,
          title TEXT NOT NULL,
          excerpt TEXT NOT NULL,
          content TEXT NOT NULL,
          category TEXT NOT NULL DEFAULT 'Intelligence',
          image TEXT NOT NULL DEFAULT '/images/ai-security-matrix.png',
          published INTEGER NOT NULL DEFAULT 0,
          publishedAt TEXT NOT NULL,
          createdAt TEXT NOT NULL,
          updatedAt TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS inquiries (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          fullName TEXT NOT NULL,
          email TEXT NOT NULL,
          subject TEXT NOT NULL,
          message TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'new',
          createdAt TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS admin_accounts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT NOT NULL UNIQUE COLLATE NOCASE,
          displayName TEXT NOT NULL,
          passwordHash TEXT NOT NULL,
          createdAt TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS app_metadata (key TEXT PRIMARY KEY, value TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS rate_limits (key TEXT PRIMARY KEY, count INTEGER NOT NULL, resetAt INTEGER NOT NULL);
      `);
      return memoryDb;
    } catch {
      return null;
    }
  }
}

export const db = globalThis.linuzvisionDb ?? createDatabase() ?? undefined;
if (process.env.NODE_ENV !== "production" && db) globalThis.linuzvisionDb = db;

export function isDatabaseAvailable() { return Boolean(db); }

export function listInsights(includeDrafts = false): Insight[] {
  if (!db) return fallbackInsights;
  try {
    const sql = includeDrafts
      ? "SELECT * FROM insights ORDER BY publishedAt DESC"
      : "SELECT * FROM insights WHERE published = 1 ORDER BY publishedAt DESC";
    return (db.prepare(sql).all() as unknown as Insight[]).map((row) => ({ ...row }));
  } catch (err) {
    console.error("listInsights error:", err);
    return fallbackInsights;
  }
}

export function getInsightBySlug(slug: string): Insight | undefined {
  if (!db) return fallbackInsights.find((i) => i.slug === slug);
  try {
    return db.prepare("SELECT * FROM insights WHERE slug = ?").get(slug) as unknown as Insight | undefined;
  } catch (err) {
    console.error("getInsightBySlug error:", err);
    return fallbackInsights.find((i) => i.slug === slug);
  }
}

export function createInsight(input: Omit<Insight, "id" | "createdAt" | "updatedAt">): Insight {
  const now = new Date().toISOString();
  if (!db) throw new Error("Database unavailable");
  const result = db.prepare(`INSERT INTO insights
      (slug,title,excerpt,content,category,image,published,publishedAt,createdAt,updatedAt)
      VALUES (?,?,?,?,?,?,?,?,?,?)`).run(input.slug,input.title,input.excerpt,input.content,input.category,input.image,input.published,input.publishedAt,now,now);
  return db.prepare("SELECT * FROM insights WHERE id = ?").get(Number(result.lastInsertRowid)) as unknown as Insight;
}

export function updateInsight(id: number, input: Partial<Omit<Insight, "id" | "createdAt" | "updatedAt">>): Insight | undefined {
  if (!db) return undefined;
  try {
    const current = db.prepare("SELECT * FROM insights WHERE id = ?").get(id) as unknown as Insight | undefined;
    if (!current) return undefined;
    const next = { ...current, ...input, updatedAt: new Date().toISOString() };
    db.prepare(`UPDATE insights SET slug=?,title=?,excerpt=?,content=?,category=?,image=?,published=?,publishedAt=?,updatedAt=? WHERE id=?`).run(
      next.slug,next.title,next.excerpt,next.content,next.category,next.image,next.published,next.publishedAt,next.updatedAt,id,
    );
    return db.prepare("SELECT * FROM insights WHERE id = ?").get(id) as unknown as Insight;
  } catch (err) {
    console.error("updateInsight error:", err);
    return undefined;
  }
}

export function deleteInsight(id: number) {
  if (!db) return false;
  try {
    return db.prepare("DELETE FROM insights WHERE id = ?").run(id).changes > 0;
  } catch (err) {
    console.error("deleteInsight error:", err);
    return false;
  }
}

export function createInquiry(input: Inquiry) {
  if (!db) throw new Error("Database unavailable");
  const result = db.prepare("INSERT INTO inquiries (fullName,email,subject,message,createdAt) VALUES (?,?,?,?,?)").run(
      input.fullName,input.email,input.subject,input.message,new Date().toISOString(),
    );
  return Number(result.lastInsertRowid);
}

export function listInquiries() {
  if (!db) return [];
  try {
    return (db.prepare("SELECT * FROM inquiries ORDER BY createdAt DESC").all() as Array<Record<string, unknown>>).map((row) => ({ ...row }));
  } catch (err) {
    console.error("listInquiries error:", err);
    return [];
  }
}

function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function passwordMatches(password: string, stored: string) {
  const [salt, expected] = stored.split(":");
  if (!salt || !expected) return false;
  const actual = crypto.scryptSync(password, salt, 64);
  const expectedBuffer = Buffer.from(expected, "hex");
  return actual.length === expectedBuffer.length && crypto.timingSafeEqual(actual, expectedBuffer);
}

function publicAdmin(account: StoredAdminAccount): AdminAccount {
  const { passwordHash: _, ...safe } = account;
  return safe;
}

export function authenticateAdmin(email: string, password: string): AdminAccount | undefined {
  if (!db || !email || !password) return undefined;
  const account = db.prepare("SELECT * FROM admin_accounts WHERE email = ?").get(email.trim().toLowerCase()) as unknown as StoredAdminAccount | undefined;
  return account && passwordMatches(password, account.passwordHash) ? publicAdmin(account) : undefined;
}

export function getAdminAccount(id: number): AdminAccount | undefined {
  if (!db) return undefined;
  const account = db.prepare("SELECT * FROM admin_accounts WHERE id = ?").get(id) as unknown as StoredAdminAccount | undefined;
  return account ? publicAdmin(account) : undefined;
}

export function listAdminAccounts(): AdminAccount[] {
  if (!db) return [];
  return (db.prepare("SELECT id,email,displayName,createdAt FROM admin_accounts ORDER BY createdAt ASC").all() as unknown as AdminAccount[]).map((row) => ({ ...row }));
}

export function createAdminAccount(email: string, displayName: string, password: string): AdminAccount {
  if (!db) throw new Error("Database unavailable");
  const result = db.prepare("INSERT INTO admin_accounts (email,displayName,passwordHash,createdAt) VALUES (?,?,?,?)").run(
    email.trim().toLowerCase(), displayName.trim(), hashPassword(password), new Date().toISOString(),
  );
  const account = db.prepare("SELECT id,email,displayName,createdAt FROM admin_accounts WHERE id = ?").get(Number(result.lastInsertRowid)) as unknown as AdminAccount;
  return { ...account };
}

export function deleteAdminAccount(id: number) {
  if (!db) throw new Error("Database unavailable");
  return db.prepare("DELETE FROM admin_accounts WHERE id = ? AND EXISTS (SELECT 1 FROM admin_accounts WHERE id <> ?)").run(id, id).changes > 0;
}

export function consumeRateLimit(key: string, limit: number, windowMs: number) {
  if (!db) return false;
  const now = Date.now();
  db.exec("BEGIN IMMEDIATE");
  try {
    const current = db.prepare("SELECT count,resetAt FROM rate_limits WHERE key = ?").get(key) as { count: number; resetAt: number } | undefined;
    if (!current || current.resetAt <= now) {
      db.prepare("INSERT OR REPLACE INTO rate_limits (key,count,resetAt) VALUES (?,?,?)").run(key, 1, now + windowMs);
      db.exec("COMMIT");
      return true;
    }
    if (current.count >= limit) { db.exec("COMMIT"); return false; }
    db.prepare("UPDATE rate_limits SET count = count + 1 WHERE key = ?").run(key);
    db.exec("COMMIT");
    return true;
  } catch (error) { db.exec("ROLLBACK"); throw error; }
}
