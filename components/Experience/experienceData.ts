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
    location: "Remote",
    current: true,

    summary:
      "Develop scalable React-based enterprise applications and design system solutions using Material UI, Storybook, TypeScript, and modern front-end architecture. Build reusable components, improve accessibility, and collaborate with UX and engineering teams to deliver consistent user experiences across multiple product lines.",

    achievements: [
      "Develop reusable React components and shared UI patterns for enterprise design systems.",
      "Build scalable component libraries using React, TypeScript, Material UI, Styled Components, SASS, and Tailwind CSS.",
      "Create and maintain Storybook documentation with interactive components, theming, and developer guidelines.",
      "Implement accessible UI solutions following WCAG standards with automated validation using Playwright and Cypress.",
      "Develop Node.js utilities supporting component APIs, data transformation, and application integration.",
      "Contribute to CI/CD workflows, Docker-based development environments, and Agile engineering practices.",
    ],

    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Storybook",
      "Tailwind CSS",
      "Node.js",
      "Vite",
      "Docker",
      "Playwright",
      "Cypress",
      "Azure DevOps",
    ],
  },

  {
    id: 2,
    company: "HSBC",
    role: "Senior UI/UX Front-End Developer",
    duration: "2024 – 2025",
    location: "Remote",

    summary:
      "Designed and developed accessible enterprise financial applications using React, Angular, Vue.js, TypeScript, and modern cloud technologies. Collaborated with UX teams to deliver scalable interfaces while improving performance, accessibility, and application reliability.",

    achievements: [
      "Built scalable single-page applications using Angular, React, Vue.js, Redux, GraphQL, and TypeScript.",
      "Designed accessible financial interfaces using Figma while following WCAG and IEC 62304 standards.",
      "Improved application performance through lazy loading, code splitting, and front-end optimization.",
      "Supported cloud-native deployments using Docker, Kubernetes, GCP, AWS, and Azure DevOps workflows.",
      "Implemented automated testing and CI/CD pipelines using Jest, Selenium, AWS CodePipeline, and AWS CodeBuild.",
    ],

    technologies: [
      "Angular",
      "React",
      "Vue.js",
      "TypeScript",
      "Redux",
      "GraphQL",
      "Docker",
      "Kubernetes",
      "GCP",
      "AWS",
      "Azure DevOps",
      "Accessibility",
    ],
  },

  {
    id: 3,
    company: "International Medical Group",
    role: "Senior UI Web Developer",
    duration: "2022 – 2024",
    location: "Indianapolis, IN",

    summary:
      "Developed responsive healthcare and travel insurance applications using React, Angular, TypeScript, and modern front-end practices. Built reusable components, integrated APIs, and improved application performance while delivering accessible customer experiences.",

    achievements: [
      "Developed reusable React and Angular components using functional components, hooks, and modular architecture.",
      "Implemented Redux-based state management using actions, reducers, and selectors.",
      "Integrated RESTful APIs to support secure customer-facing insurance applications.",
      "Optimized application performance through code improvements, lazy loading, and efficient rendering.",
      "Collaborated with cross-functional Agile teams to deliver reliable production applications.",
    ],

    technologies: [
      "React",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Redux",
      "REST APIs",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Accessibility",
    ],
  },

  {
    id: 4,
    company: "Ford Motor Company",
    role: "UI Front-End Developer / UI/UX Developer",
    duration: "2015 – 2022",
    location: "Dearborn, MI",

    summary:
      "Developed enterprise front-end frameworks and reusable UI solutions for Ford's Web and Mobile Center of Excellence. Built scalable Angular applications, modernized legacy systems, and delivered accessible, responsive experiences across multiple business platforms.",

    achievements: [
      "Developed reusable Angular components and enterprise UI frameworks adopted across multiple applications.",
      "Built responsive applications using Angular, TypeScript, JavaScript ES6+, HTML5, CSS3, Bootstrap, and SASS.",
      "Created scalable front-end architecture using Angular Router, RxJS, NgRx, and modular design patterns.",
      "Integrated REST APIs with enterprise Java-based backend services.",
      "Supported modernization of AngularJS applications into component-based Angular architectures.",
      "Implemented testing practices using Jasmine, Karma, Cypress, and Agile development workflows.",
    ],

    technologies: [
      "Angular",
      "TypeScript",
      "JavaScript",
      "RxJS",
      "NgRx",
      "Bootstrap",
      "SASS",
      "REST APIs",
      "Jasmine",
      "Karma",
      "Cypress",
    ],
  },

  {
    id: 5,
    company: "JSTOR / ITHAKA",
    role: "UI UX Front-End Developer",
    duration: "2011 – 2015",
    location: "Remote",

    summary:
      "Designed and developed digital publishing and academic search experiences focused on usability, accessibility, and content discovery. Collaborated with UX, product, and marketing teams to improve user journeys and platform engagement.",

    achievements: [
      "Created responsive interfaces and front-end components for academic search platforms.",
      "Developed prototypes and wireframes using Axure RP and collaborated with UX teams.",
      "Improved accessibility compliance by applying WCAG standards and usability testing practices.",
      "Enhanced registration and login workflows using Optimizely experimentation tools.",
      "Supported redesign initiatives improving navigation, layouts, and content discovery.",
    ],

    technologies: [
      "JavaScript",
      "jQuery",
      "HTML5",
      "CSS3",
      "Axure RP",
      "Sketch",
      "WCAG",
      "APIs",
      "UserTesting",
    ],
  },
];
