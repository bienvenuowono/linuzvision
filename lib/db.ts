import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";

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

const dataDirectory = process.env.DATABASE_DIRECTORY ? path.resolve(process.env.DATABASE_DIRECTORY) : path.join(process.cwd(), "data");
const databasePath = path.join(dataDirectory, "linuzvision.db");

declare global {
  var linuzvisionDb: DatabaseSync | undefined;
}

function createDatabase() {
  fs.mkdirSync(dataDirectory, { recursive: true });
  const db = new DatabaseSync(databasePath);
  db.exec("PRAGMA journal_mode = WAL; PRAGMA foreign_keys = ON;");
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
  `);

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
}

export const db = globalThis.linuzvisionDb ?? createDatabase();
if (process.env.NODE_ENV !== "production") globalThis.linuzvisionDb = db;

export function listInsights(includeDrafts = false): Insight[] {
  const sql = includeDrafts
    ? "SELECT * FROM insights ORDER BY publishedAt DESC"
    : "SELECT * FROM insights WHERE published = 1 ORDER BY publishedAt DESC";
  return (db.prepare(sql).all() as unknown as Insight[]).map((row) => ({ ...row }));
}

export function getInsightBySlug(slug: string): Insight | undefined {
  return db.prepare("SELECT * FROM insights WHERE slug = ?").get(slug) as unknown as Insight | undefined;
}

export function createInsight(input: Omit<Insight, "id" | "createdAt" | "updatedAt">): Insight {
  const now = new Date().toISOString();
  const result = db.prepare(`INSERT INTO insights
    (slug,title,excerpt,content,category,image,published,publishedAt,createdAt,updatedAt)
    VALUES (?,?,?,?,?,?,?,?,?,?)`).run(input.slug,input.title,input.excerpt,input.content,input.category,input.image,input.published,input.publishedAt,now,now);
  return db.prepare("SELECT * FROM insights WHERE id = ?").get(Number(result.lastInsertRowid)) as unknown as Insight;
}

export function updateInsight(id: number, input: Partial<Omit<Insight, "id" | "createdAt" | "updatedAt">>): Insight | undefined {
  const current = db.prepare("SELECT * FROM insights WHERE id = ?").get(id) as unknown as Insight | undefined;
  if (!current) return undefined;
  const next = { ...current, ...input, updatedAt: new Date().toISOString() };
  db.prepare(`UPDATE insights SET slug=?,title=?,excerpt=?,content=?,category=?,image=?,published=?,publishedAt=?,updatedAt=? WHERE id=?`).run(
    next.slug,next.title,next.excerpt,next.content,next.category,next.image,next.published,next.publishedAt,next.updatedAt,id,
  );
  return db.prepare("SELECT * FROM insights WHERE id = ?").get(id) as unknown as Insight;
}

export function deleteInsight(id: number) {
  return db.prepare("DELETE FROM insights WHERE id = ?").run(id).changes > 0;
}

export function createInquiry(input: Inquiry) {
  const result = db.prepare("INSERT INTO inquiries (fullName,email,subject,message,createdAt) VALUES (?,?,?,?,?)").run(
    input.fullName,input.email,input.subject,input.message,new Date().toISOString(),
  );
  return Number(result.lastInsertRowid);
}

export function listInquiries() {
  return (db.prepare("SELECT * FROM inquiries ORDER BY createdAt DESC").all() as Array<Record<string, unknown>>).map((row) => ({ ...row }));
}
