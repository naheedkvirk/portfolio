export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  summary: string;
  achievements: string[];
  technologies: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "John Deere",
    role: "Senior UI/UX Front-End Developer",
    duration: "2025 - Present",
    location: "Remot",
    current: true,
    summary:
      "Develop enterprise-scale web applications and reusable design system components that improve consistency, accessibility, and developer productivity.",
    achievements: [
      "Developed reusable React and TypeScript components for enterprise applications.",
      "Implemented accessible UI patterns aligned with WCAG standards.",
      "Collaborated with UX designers and product teams to deliver scalable solutions.",
      "Improved maintainability through component-driven architecture and design system adoption.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Storybook",
      "Vite",
      "Azure DevOps",
    ],
  },
  {
    id: 2,
    company: "HSBC",
    role: "Senior Front-End Developer",
    duration: "2020 – 2022",
    location: "Remote",
    summary:
      "Built responsive financial applications focused on usability, performance, and accessibility.",
    achievements: [
      "Developed modern React applications for enterprise banking platforms.",
      "Worked closely with cross-functional Agile teams.",
      "Integrated REST APIs into customer-facing applications.",
      "Delivered responsive experiences across desktop and mobile devices.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "REST APIs", "Jest"],
  },
  {
    id: 3,
    company: "International Medical Group",
    role: "Senior UI Developer",
    duration: "2018 – 2020",
    location: "Indianapolis, IN",
    summary:
      "Developed healthcare insurance applications with a strong focus on usability and accessibility.",
    achievements: [
      "Built responsive healthcare portals.",
      "Improved user experience through modern UI practices.",
      "Collaborated with business analysts and QA teams.",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "Accessibility"],
  },
  {
    id: 4,
    company: "Ford Motor Company",
    role: "Front-End Developer",
    duration: "2016 – 2018",
    location: "Dearborn, MI",
    summary:
      "Developed scalable web applications supporting automotive customer experiences.",
    achievements: [
      "Built reusable UI components.",
      "Optimized application performance.",
      "Worked within Agile delivery teams.",
    ],
    technologies: ["React", "JavaScript", "Node.js", "Agile"],
  },
  {
    id: 5,
    company: "JSTOR",
    role: "UI Developer",
    duration: "2014 – 2016",
    location: "Remote",
    summary:
      "Contributed to search and discovery experiences for digital academic content.",
    achievements: [
      "Developed responsive search interfaces.",
      "Collaborated with UX designers to improve usability.",
      "Maintained consistent UI across products.",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "APIs"],
  },
];
