export type ProjectCategory = "Non-Academic" | "Academic";

export interface Project {
  title: string;
  category: ProjectCategory;
  domain: string;
  description: string;
  stack: string[];
  github: string;
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
