export type TrainingModule = {
  number: number;
  title: string;
  description: string;
  duration: string;
  video: string;
  thumbnail: string;
};

export const aiEssentialsModules: TrainingModule[] = [
  { number: 1, title: "AI Foundations", description: "Understand what AI is, how it learns, and where human judgment remains essential.", duration: "6:29", video: "/training/ai-essentials/module-01.mp4", thumbnail: "/images/training/ai-essentials-module-01.jpg" },
  { number: 2, title: "Data and AI Systems", description: "Explore the data, models, applications, people, and controls behind an AI system.", duration: "3:46", video: "/training/ai-essentials/module-02.mp4", thumbnail: "/images/training/ai-essentials-module-02.jpg" },
  { number: 3, title: "Generative AI at Work", description: "Use generative AI for practical drafting, analysis, research, and review workflows.", duration: "3:58", video: "/training/ai-essentials/module-03.mp4", thumbnail: "/images/training/ai-essentials-module-03.jpg" },
  { number: 4, title: "Government and Public Services", description: "Apply AI to public services while protecting rights, accountability, and trust.", duration: "4:13", video: "/training/ai-essentials/module-04.mp4", thumbnail: "/images/training/ai-essentials-module-04.jpg" },
  { number: 5, title: "Institutions and Research", description: "Support knowledge discovery, research operations, and institutional memory.", duration: "4:11", video: "/training/ai-essentials/module-05.mp4", thumbnail: "/images/training/ai-essentials-module-05.jpg" },
  { number: 6, title: "AI in Education", description: "Support educators and learners while protecting privacy, equity, and academic integrity.", duration: "4:18", video: "/training/ai-essentials/module-06.mp4", thumbnail: "/images/training/ai-essentials-module-06.jpg" },
  { number: 7, title: "AI Across Business Functions", description: "Identify responsible applications across operations, finance, service, and growth.", duration: "4:11", video: "/training/ai-essentials/module-07.mp4", thumbnail: "/images/training/ai-essentials-module-07.jpg" },
  { number: 8, title: "Ethics and Responsible AI", description: "Turn responsible AI principles into practical decisions and safeguards.", duration: "4:11", video: "/training/ai-essentials/module-08.mp4", thumbnail: "/images/training/ai-essentials-module-08.jpg" },
  { number: 9, title: "Privacy and Cybersecurity", description: "Protect information, systems, and people throughout the AI lifecycle.", duration: "4:35", video: "/training/ai-essentials/module-09.mp4", thumbnail: "/images/training/ai-essentials-module-09.jpg" },
  { number: 10, title: "Governance and Policy", description: "Establish authority, controls, evidence, and oversight for organizational AI.", duration: "4:48", video: "/training/ai-essentials/module-10.mp4", thumbnail: "/images/training/ai-essentials-module-10.jpg" },
  { number: 11, title: "Adoption and Change", description: "Build skills, redesign work, and support people through AI adoption.", duration: "4:38", video: "/training/ai-essentials/module-11.mp4", thumbnail: "/images/training/ai-essentials-module-11.jpg" },
  { number: 12, title: "Strategy and Implementation", description: "Move from opportunity to an evidence-based 90-day implementation roadmap.", duration: "5:21", video: "/training/ai-essentials/module-12.mp4", thumbnail: "/images/training/ai-essentials-module-12.jpg" },
  { number: 13, title: "AI Leadership and Future Readiness", description: "Lead responsible adoption, workforce transition, and continuous organizational learning.", duration: "6:40", video: "/training/ai-essentials/module-13.mp4", thumbnail: "/images/training/ai-essentials-module-13.jpg" },
];

function seconds(duration: string) {
  const [minutes, rest] = duration.split(":").map(Number);
  return minutes * 60 + rest;
}

// "6:29" -> "6m 29s"
export function moduleDuration(duration: string) {
  const [minutes, rest] = duration.split(":");
  return `${Number(minutes)}m ${rest}s`;
}

// Real runtime of a module list, rounded to the minute: "61 minutes".
export function totalDuration(modules: TrainingModule[]) {
  return `${Math.round(modules.reduce((sum, module) => sum + seconds(module.duration), 0) / 60)} minutes`;
}

export const aiEssentialsCourse = {
  slug: "ai-essentials",
  title: "AI Essentials for Organizations",
  shortTitle: "AI Essentials",
  description: "A complete introduction to artificial intelligence for institutions, government, education, and business. Learn how AI works, where it creates value, and how to adopt it responsibly.",
  duration: totalDuration(aiEssentialsModules),
  level: "Foundational",
  language: "American English",
  creator: "LinuZvision",
  cover: "/images/ai-essentials-organizations-cover.png",
  modules: aiEssentialsModules,
  outcomes: [
    "Explain how modern AI systems work and where their limits matter.",
    "Identify valuable AI applications across public, educational, institutional, and business settings.",
    "Evaluate ethics, privacy, cybersecurity, and governance requirements.",
    "Build a practical roadmap for responsible adoption and organizational readiness.",
  ],
  requirements: [
    "No technical background is required: the course builds a clear foundation without unnecessary technical complexity.",
  ],
  audience: [
    "Leaders and managers shaping how their organization uses AI",
    "Public servants and government teams",
    "Educators and researchers",
    "Professionals who need a clear, practical foundation in AI",
  ],
  about: [
    "This course connects technical understanding with the decisions leaders and teams make in real organizations.",
    "It builds shared understanding across leadership, operations, education, public service, research, and technology teams, then moves from opportunity to an evidence-based implementation roadmap.",
  ],
};

export type Course = typeof aiEssentialsCourse;

export const courses: Course[] = [aiEssentialsCourse];
