export type ProjectCategory = "Non-Academic" | "Academic";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  domain: string;
  description: string;
  tags: string[];
  stack: string[];
  github: string;
  borderColor: string;
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
  description?: string;
}
