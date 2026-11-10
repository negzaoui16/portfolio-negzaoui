export type ProjectCategory = "all" | "mobile" | "ai" | "fullstack" | "webar3d";

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  description: string;
  keyFeatures: string[];
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
  badge?: string;
  mockupType: "mobile" | "ide" | "webar" | "game";
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  color: string;
  skills: {
    name: string;
    level: number; // 1-100
    tag: string;
    featuredIn?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: "internship" | "education";
  description: string;
  highlights: string[];
  skills: string[];
  link?: string;
}
