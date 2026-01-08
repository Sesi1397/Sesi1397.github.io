
export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  department?: string;
  points: string[];
}

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export interface Publication {
  year: string;
  title: string;
  journal: string;
  status?: string;
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  status?: string;
  details?: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  location: string;
  gradient: string;
}
