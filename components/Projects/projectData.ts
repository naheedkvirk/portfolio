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
    subtitle: "Reusable React Components • Storybook • Material UI",
    description:
      "Designed and developed a scalable enterprise design system with reusable React components, shared UI patterns, and comprehensive Storybook documentation. Built accessible, themeable components that enabled development teams to deliver consistent, high-quality user experiences across multiple enterprise applications while accelerating development and reducing code duplication.",
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Storybook",
      "Tailwind CSS",
      "Playwright",
      "Cypress",
      "Node.js",
      "Vite",
    ],
    image: "/images/projects/enterpriseDS.jpg",
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
    title: "Enterprise Banking Platform",
    subtitle: "Digital Banking • Responsive Web Applications",
    description:
      "Developed secure, responsive web applications for a global banking platform, creating intuitive user experiences for financial services. Collaborated with UX designers to build accessible interfaces, optimized application performance, and implemented scalable front-end architecture using modern JavaScript frameworks and cloud-native development practices.",
    technologies: [
      "React",
      "Angular",
      "Angular JS",
      "Vue.js",
      "TypeScript",
      "GraphQl",
      "GCP",
      "Docker",
      "Kubernetes",
      "REST APIs",
      "Jest",
    ],
    image: "/images/projects/financialSP.jpg",
  },
  {
    id: 3,
    title: "Travel Insurance Platform",
    subtitle: "Customer Portal • Policy Management",
    description:
      "Built and enhanced customer-facing web applications for a global travel medical insurance provider. Developed reusable Angular components, improved application performance, and delivered responsive, accessible interfaces that supported policy management, member services, and digital self-service experiences.",
    technologies: [
      "Angular",
      "Angular JS",
      "Typesctipt",
      "JavaScript",
      "HTML",
      "CSS",
      "Accessibility",
    ],
    image: "/images/projects/travelIP.jpg",
  },
  {
    id: 4,
    title: "Enterprise Front-End Framework",
    subtitle: "Angular Framework • Internal Developer Platform",
    description:
      "Developed and maintained a scalable front-end framework that enabled internal engineering teams to build enterprise web applications more efficiently. Created reusable Angular components, modernized legacy applications, and established a maintainable architecture with state management, routing, API integration, and automated testing.",
    technologies: [
      "Angular",
      "TypeScript",
      "NgRx",
      "RxJS",
      "Bootstrap",
      "Jasmine",
      "Karma",
      "Agile",
    ],
    image: "/images/projects/autoWP.jpg",
  },
  {
    id: 5,
    title: "Digital Research Platform",
    subtitle: "Academic Search • Content Discovery",
    description:
      "Designed and developed intuitive search and discovery experiences for academic research and professional learning platforms. Improved content discovery, accessibility, responsive design, and usability through user-centered interfaces that helped researchers, students, and professionals efficiently access digital knowledge resources.",
    technologies: [
      "jQuery",
      "JavaScript",
      "APIs",
      "UI Development",
      "HTML",
      "CSS",
      "Accessibility",
    ],
    image: "/images/projects/academicSP.jpg",
  },
  {
    id: 6,
    title: "Personal Portfolio",

    subtitle: "Next.js • Modern UI • Motion",

    description:
      "Designed and developed a responsive personal portfolio showcasing enterprise front-end development expertise. Built with Next.js, React, Tailwind CSS, and Motion, the site emphasizes accessibility, performance, and clean, modern user experience while highlighting professional projects and technical skills.",

    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Motion"],

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
