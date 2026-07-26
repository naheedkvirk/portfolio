/*
  Project model + data
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

  //case study fields
  challenge?: string;
  solution?: string;
  impact?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Design System",
    subtitle: "Component Library & UI Platform",
    description:
      "Designed and developed a scalable enterprise design system with reusable React components, documentation, accessibility standards, and Storybook integration.",
    technologies: ["React", "TypeScript", "Material UI", "Storybook", "Vite"],
    image: "/images/projects/design.jpg",
    featured: true,

    challenge:
      "Create a scalable component library supporting multiple enterprise applications and development teams.",

    solution:
      "Built reusable React components using Material UI, TypeScript, and Storybook with accessibility standards and documentation.",

    impact:
      "Improved UI consistency, development efficiency, and collaboration between designers and engineers.",
  },
  {
    id: 2,
    title: "Financial Services Platform",
    subtitle: "Enterprise Web Application",
    description:
      "Developed responsive enterprise applications improving usability, accessibility compliance, and frontend maintainability for financial workflows.",
    technologies: ["React", "Next.js", "TypeScript", "REST APIs", "Jest"],
    image: "/images/projects/financial.jpg",
  },
  {
    id: 3,
    title: "Healthcare Insurance Portal",
    subtitle: "Customer Experience Platform",
    description:
      "Developed user-focused healthcare applications improving digital experiences through responsive interfaces and modern frontend practices.",
    technologies: ["React", "JavaScript", "HTML", "CSS", "Accessibility"],
    image: "/images/projects/healthcare.jpg",
  },
  {
    id: 4,
    title: "Automotive Web Platform",
    subtitle: "Digital Experience Application",
    description:
      "Created scalable web solutions supporting automotive customer journeys with performance-focused frontend development.",
    technologies: ["React", "TypeScript", "Node.js", "Agile"],
    image: "/images/projects/automotive.jpg",
  },
  {
    id: 5,
    title: "Academic Search Platform",
    subtitle: "Research Discovery Application",
    description:
      "Contributed to building search-driven experiences that help users discover and interact with large-scale academic content.",
    technologies: ["React", "JavaScript", "APIs", "UI Development"],
    image: "/images/projects/academic.jpg",
  },
  {
    id: 6,
    title: "Portfolio Website",

    subtitle: "Senior Front-End Developer Portfolio",

    description:
      "A recruiter-focused portfolio showcasing senior frontend expertise through accessible UI, reusable components, responsive design, and modern Next.js architecture.",

    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],

    image: "/images/projects/portfolio.jpg",

    liveUrl: "https://naheedvirk-portfolio.vercel.app/",

    githubUrl: "https://github.com/naheedkvirk/portfolio",

    featured: true,

    challenge:
      "Create a modern recruiter-facing portfolio showcasing senior frontend expertise.",

    solution:
      "Built a responsive Next.js application with reusable components, accessibility-first design, and animation.",

    impact:
      "Improved personal branding and demonstrated production frontend architecture.",
  },
];

export function getProjectById(id: number) {
  return projects.find((project) => project.id === id);
}

/*
projects.ts — The data

This file should contain:

The Project interface (or type)
The array of project data

It answers:

"What projects should my portfolio display?"
*/
