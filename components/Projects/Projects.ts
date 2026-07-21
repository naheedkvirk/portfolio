export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  descriptoin: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

/*
projects.ts — The data

This file should contain:

The Project interface (or type)
The array of project data

It answers:

"What projects should my portfolio display?"
*/
