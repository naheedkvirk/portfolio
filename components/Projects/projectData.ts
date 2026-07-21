/*
  Project modedl + data
*/
export interface Project {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Design System",
    subtitle: "Component Library & UI Platform",
    description:
      "Designed and developed a scalable enterprise design system with reusable React components, documentation, accessibility standards, and Storybook integration.",
    technologies: ["React", "Typescript", "Material UI", "Storybook", "Vite"],
    image: "/images/projects/ds.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Financial Services Platform",
    subtitle: "Enterprise Web Application",
    description:
      "Built responsive enterprise applications focused on usability, accessibility, and maintainable frontend architecture for financial services workflows.",
    technologies: ["React", "Next.js", "TypeScript", "REST APIs", "Jest"],
    image: "/images/projects/financial-platform.png",
  },
  {
    id: 3,
    title: "Healthcare Insurance Portal",
    subtitle: "Customer Experience Platform",
    description:
      "Developed user-focused healthcare applications improving digital experiences through responsive interfaces and modern frontend practices.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Accessibility"],
    image: "/images/projects/healthcare-portal.png",
  },
  {
    id: 4,
    title: "Automotive Web Platform",
    subtitle: "Digital Experience Application",
    description:
      "Created scalable web solutions supporting automotive customer journeys with performance-focused frontend development.",
    technologies: ["React", "TypeScript", "Node.js", "Agile"],
    image: "/images/projects/automotive-platform.png",
  },
  {
    id: 5,
    title: "Academic Search Platform",
    subtitle: "Research Discovery Application",
    description:
      "Contributed to building search-driven experiences that help users discover and interact with large-scale academic content.",
    technologies: ["React", "JavaScript", "APIs", "UI Development"],
    image: "/images/projects/academic-platform.png",
  },
  {
    id: 6,
    title: "Personal Portfolio Website",
    subtitle: "Modern Developer Portfolio",
    description:
      "Designed and developed a modern portfolio website showcasing projects, experience, and technical skills using Next.js and Tailwind CSS.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/portfolio.png",
    liveUrl: "#",
    featured: true,
  },
];

/*
projects.ts — The data

This file should contain:

The Project interface (or type)
The array of project data

It answers:

"What projects should my portfolio display?"
*/
