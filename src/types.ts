export interface Project {
  id: string;
  title: string;
  category: 'AI / ML' | 'Full Stack' | 'Web Development';
  tagline: string;
  description: string;
  featured?: boolean;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  metrics?: { label: string; value: string }[];
  modalDetails: {
    problem: string;
    solution: string;
    keyFeatures: string[];
    techStackDetails: { category: string; tools: string[] }[];
    developmentProcess: string[];
    architectureHighlights: string[];
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  proficiency: 'Proficient' | 'Intermediate' | 'Core Focus' | 'Familiar';
  description: string;
  tags: string[];
  highlight?: boolean;
}

export interface JourneyMilestone {
  id: string;
  period: string;
  year: string;
  title: string;
  organization: string;
  location?: string;
  category: 'Education' | 'Award' | 'Leadership' | 'Project';
  description: string;
  achievements?: string[];
  badge?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: 'Google' | 'Microsoft' | 'Hackathon / Organization' | 'AWS' | 'Other';
  date: string;
  description: string;
  credentialUrl?: string;
  badgeCode?: string;
  skillsCovered: string[];
}

export interface GithubRepoInfo {
  name: string;
  description: string;
  stars: number;
  forks: number;
  language: string;
  url: string;
  topics: string[];
  updatedAt: string;
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
  username?: string;
}
