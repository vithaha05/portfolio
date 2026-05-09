export type ProjectCategory = "Non-Academic" | "Academic";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  domain: string;
  problem: string;
  solution: string;
  stack: string[];
  github: string;
  accent: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface Activity {
  title: string;
  context: string;
}
