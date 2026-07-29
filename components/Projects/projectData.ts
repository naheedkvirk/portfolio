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

  caseStudy?: {
    overview: string;

    role: string[];

    responsibilities: string[];

    architecture?: {
      title: string;
      description: string;
      items: string[];
    };

    process?: {
      title: string;
      description: string;
      items: string[];
    };

    workflow?: {
      title: string;
      description: string;
      items: string[];
    };

    accessibility?: string[];

    results?: string[];

    screenshots?: {
      src: string;
      alt: string;
    }[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Design System",
    subtitle: "Enterprise Design System • React Components • Storybook",
    description:
      "Designed and developed an enterprise design system with reusable React components, shared UI patterns, and comprehensive Storybook documentation. Built accessible, themeable components using TypeScript and Material UI that improved consistency, collaboration, and development efficiency across multiple enterprise applications.",
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
    image: "/images/projects/design.jpg",
    featured: true,

    challenge:
      "Create a scalable component library supporting multiple enterprise applications and development teams.",

    solution:
      "Built reusable React components using Material UI, TypeScript, and Storybook with accessibility standards and documentation.",

    impact:
      "Improved UI consistency, development efficiency, and collaboration between designers and engineers.",

    caseStudy: {
      overview:
        "The organization needed a centralized design system to support multiple enterprise applications while maintaining consistent user experiences, accessibility standards, and efficient development workflows.",

      role: [
        "Senior Front-End Engineer / UI/UX Developer",
        "Component architecture and implementation",
        "Design-to-code collaboration",
        "Accessibility and usability improvements",
      ],

      responsibilities: [
        "Designed and developed reusable React components.",
        "Created scalable component APIs using TypeScript.",
        "Built Storybook documentation for developer and designer collaboration.",
        "Implemented accessible UI patterns following WCAG guidelines.",
        "Collaborated with UX teams to translate designs into production components.",
      ],

      architecture: {
        title: "Design System Architecture",

        description:
          "Created a reusable component ecosystem that allowed multiple enterprise applications to share consistent UI patterns.",

        items: [
          "Material UI theme customization",
          "Reusable React component library",
          "TypeScript-based component APIs",
          "Storybook component documentation",
          "Automated component testing",
        ],
      },

      process: {
        title: "Development Workflow",

        description:
          "Established a workflow connecting designers, developers, and product teams.",

        items: [
          "Reviewed UX designs and interaction patterns",
          "Converted designs into reusable components",
          "Documented components in Storybook",
          "Validated accessibility and responsive behavior",
        ],
      },

      accessibility: [
        "Keyboard navigation support",
        "Semantic HTML implementation",
        "Consistent focus states",
        "Color contrast validation",
        "Accessible component patterns",
      ],

      results: [
        "Improved UI consistency across enterprise applications",
        "Reduced duplicated component development",
        "Improved collaboration between design and engineering teams",
        "Enabled faster feature development through reusable patterns",
      ],

      screenshots: [
        {
          src: "/images/projects/design-system/components.png",
          alt: "Enterprise design system component examples",
        },
        {
          src: "/images/projects/design-system/storybook.png",
          alt: "Storybook documentation examples",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Enterprise Banking Platform",
    subtitle: "Financial Applications • React • Angular • Cloud",
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
    subtitle: "Healthcare Insurance • Customer Portal • React/Angular",
    description:
      "Built and enhanced customer-facing web applications for a global travel medical insurance provider. Developed reusable Angular components, improved application performance, and delivered responsive, accessible interfaces that supported policy management, member services, and digital self-service experiences.",
    technologies: [
      "Angular",
      "Angular JS",
      "Typescript",
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
    subtitle: "Automotive Enterprise Platform • Angular Framework",
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
    subtitle: "Academic Search • Digital Publishing • Accessibility",
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

    subtitle: "Next.js • React • TypeScript • Modern UI • Motion",

    description:
      "Designed and developed a recruiter-focused personal portfolio to showcase senior front-end UI/UX expertise and enterprise development experience. Built with Next.js, React, TypeScript, Tailwind CSS, and Motion, the application emphasizes accessibility, performance, responsive design, and reusable component architecture.",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Vercel",
      "GitHub",
      "Azure DevOps",
    ],

    image: "/images/projects/portfolio.jpg",

    liveUrl: "https://naheedvirk-portfolio.vercel.app/",

    githubUrl: "https://github.com/naheedkvirk/portfolio",

    featured: true,

    challenge:
      "Create a modern recruiter-facing portfolio that effectively communicates senior frontend engineering experience, UI/UX expertise, and enterprise application development skills.",

    solution:
      "Designed and developed a responsive Next.js application using reusable React components, TypeScript, Tailwind CSS, and Motion. Implemented accessibility-first patterns, responsive layouts, optimized images, and a component-driven architecture to create a maintainable production-ready portfolio.",

    impact:
      "Created a professional digital presence that demonstrates modern frontend architecture, accessibility practices, responsive design capabilities, and the ability to build scalable user interfaces.",

    caseStudy: {
      overview:
        "The goal was to create a modern portfolio experience that represents my background as a Senior Front-End Engineer / UI/UX Developer while demonstrating current React and Next.js development practices. The site was designed to balance visual design, performance, accessibility, and maintainability.",

      role: [
        "Senior Front-End Engineer / UI/UX Developer",
        "UX strategy and interface design",
        "Frontend architecture and implementation",
        "Accessibility and responsive design implementation",
      ],

      responsibilities: [
        "Designed the overall user experience and content structure.",
        "Developed reusable React components using TypeScript.",
        "Created responsive layouts optimized across desktop, tablet, and mobile devices.",
        "Implemented animations using Motion with reduced-motion accessibility support.",
        "Managed source control and development workflows using GitHub and Azure DevOps practices.",
        "Configured deployment workflow using Vercel.",
      ],

      architecture: {
        title: "Application Architecture",

        description:
          "Built a component-driven Next.js application focused on maintainability, scalability, and reusable UI patterns.",

        items: [
          "Next.js App Router architecture",
          "Reusable React components",
          "TypeScript-based data models",
          "Centralized project and experience data",
          "Reusable styling patterns",
          "Version control and enterprise development workflows",
        ],
      },

      process: {
        title: "Design & Development Process",

        description:
          "Focused on creating a clean, professional experience that allows recruiters and hiring managers to quickly understand technical skills and career experience.",

        items: [
          "Defined content hierarchy and user flow",
          "Designed responsive layouts",
          "Created reusable UI patterns",
          "Implemented accessibility best practices",
          "Validated responsive behavior across screen sizes",
        ],
      },

      workflow: {
        title: "Development Workflow",

        description:
          "Applied modern frontend development practices to build, maintain, and deploy a production-ready application.",

        items: [
          "Managed source control using GitHub",
          "Followed structured development workflows using Azure DevOps practices",
          "Maintained reusable component architecture",
          "Used iterative development and testing practices",
          "Configured deployment workflow through Vercel",
        ],
      },

      accessibility: [
        "Semantic HTML structure",
        "Accessible navigation patterns",
        "Keyboard-friendly interactions",
        "Reduced motion support",
        "Proper heading hierarchy",
        "Responsive typography and layouts",
      ],

      results: [
        "Created a professional recruiter-facing portfolio experience",
        "Demonstrated modern React and Next.js development practices",
        "Showcased reusable component architecture",
        "Highlighted accessibility-first frontend development",
        "Established a scalable foundation for future case studies and projects",
      ],

      screenshots: [
        {
          src: "/images/projects/portfolio/homepage.png",
          alt: "Personal portfolio homepage",
        },
        {
          src: "/images/projects/portfolio/projects.png",
          alt: "Portfolio projects section",
        },
      ],
    },
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
