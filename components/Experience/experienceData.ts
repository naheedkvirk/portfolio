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
      "Build scalable React-based design system solutions for enterprise applications using Material UI and Storybook to create reusable, accessible, and maintainable UI components. Collaborate with product teams to deliver consistent user experiences through modern front-end architecture and engineering practices.",
    achievements: [
      "Develop and maintain reusable React components for an enterprise design system supporting multiple product lines.",
      "Build scalable UI components using React, TypeScript, Material UI (MUI), Styled Components, and SASS.",
      "Create modular component APIs using props and reusable patterns to improve maintainability and reduce code duplication.",
      "Use Storybook to develop, test, and document components with interactive props and light/dark theme support.",
      "Improve accessibility compliance through WCAG practices, automated testing, and end-to-end validation using Playwright and Cypress.",
      "Implement responsive UI layouts using Tailwind CSS and Material UI to improve consistency across applications.",
      "Collaborate in Agile development environments through sprint planning, stand-ups, retrospectives, and demos.",
      "Support cross-functional teams by troubleshooting UI integration issues and resolving front-end defects.",
      "Develop Node.js utilities and services to support component APIs, data transformation, and application integration.",
      "Contribute to CI/CD workflows, Docker-based development environments, and test-driven development practices.",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Material UI",
      "Storybook",
      "JavaScript",
      "Node.js",
      "Vite",
      "Figma",
      "Docker",
      "Playwright",
      "Cypress",
      "Azure DevOps",
    ],
  },
  {
    id: 2,
    company: "HSBC",
    role: "Senior Front-End Developer",
    duration: "2024 – 2025",
    location: "Remote",
    summary:
      "Designed and developed accessible, enterprise-scale financial applications by collaborating with UX teams and building modern front-end solutions using Angular, React, Vue.js, and TypeScript. Delivered responsive user experiences, optimized application performance, and supported cloud-based deployments through modern DevOps and CI/CD practices.",
    achievements: [
      "Collaborated with UX teams to design accessible, user-centered financial applications using Figma while meeting WCAG and IEC 62304 standards.",
      "Built scalable single-page applications using Angular, React, Vue.js, Redux, GraphQL, and TypeScript with modular and maintainable architecture.",
      "Developed responsive interfaces optimized for mobile, tablet, and desktop experiences with a focus on usability and accessibility.",
      "Improved application performance through lazy loading, code splitting, refactoring, and front-end optimization techniques.",
      "Deployed containerized applications using Docker and Kubernetes on GCP (GKE) while supporting cloud-based microservices delivery.",
      "Implemented CI/CD pipelines and automated testing workflows using AWS CodePipeline, AWS CodeBuild, Jest, and Selenium.",
      "Enhanced accessibility compliance using Lighthouse and Axe while mentoring developers and collaborating with cross-functional teams.",
    ],
    technologies: [
      "Angular",
      "React",
      "Vue.js",
      "TypeScript",
      "Redux",
      "GraphQL",
      "Figma",
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure DevOps",
      "Accessibility",
    ],
  },
  {
    id: 3,
    company: "International Medical Group",
    role: "Senior UI Developer",
    duration: "2022 – 2024",
    location: "Indianapolis, IN",
    summary:
      "Developed and enhanced React-based applications by building reusable components, implementing state management solutions, and optimizing front-end performance. Applied modern React practices including functional components, hooks, and component-driven architecture to create maintainable and efficient user interfaces.",
    achievements: [
      "Developed and maintained reusable React components using functional components and React Hooks.",
      "Improved component reliability through props validation and default property configurations.",
      "Managed project dependencies using NPM and Yarn while integrating third-party libraries.",
      "Debugged and resolved front-end issues to improve application stability and user experience.",
    ],
    technologies: [
      "React",
      "JavaScript",
      "Redux",
      "React Hooks",
      "HTML5",
      "CSS3",
      "NPM",
      "Yarn",
    ],
  },
  {
    id: 4,
    company: "Ford Motor Company",
    role: "Front-End Developer",
    duration: "2015 – 2022",
    location: "Dearborn, MI",
    summary:
      "Contributed to Ford's Web and Mobile Enablement (WaMe) team by developing and modernizing enterprise Angular applications with scalable front-end architecture, reusable UI components, and responsive user experiences. Collaborated with cross-functional Agile teams to deliver accessible, high-performance applications and modernize legacy systems using Angular, TypeScript, and RESTful services.",
    achievements: [
      "Contributed to Ford's Web and Mobile Enablement (WaMe) team, supporting the enterprise Reference Application (JAB) with Angular front-end and Java-based backend integration.",
      "Developed and enhanced reusable Angular components (Angular 8–15) for forms, event handling, and shared application modules.",
      "Designed responsive and accessible user interfaces using HTML5, CSS3, SASS, Bootstrap, TypeScript, and modern JavaScript (ES6+).",
      "Built scalable front-end architecture using Angular Router, RxJS, NgRx, and modular component design patterns.",
      "Integrated RESTful APIs with Angular HttpClient to support dynamic data retrieval and application workflows.",
      "Modernized legacy AngularJS applications by migrating to Angular 2+ using reactive forms, services, and component-based architecture.",
      "Implemented comprehensive testing using Jasmine, Karma, and Cypress to improve application quality and reliability.",
      "Performed browser remediation and ensured compatibility across Chrome, Firefox, Safari, and legacy Internet Explorer environments.",
      "Collaborated in Agile/Scrum teams, participating in sprint planning, stand-ups, retrospectives, and cross-functional development initiatives.",
    ],
    technologies: [
      "Angular",
      "TypeScript",
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
    company: "JSTOR",
    role: "UI Developer",
    duration: "2014 – 2016",
    location: "Remote",
    summary:
      "Designed and enhanced user-centered digital experiences by creating wireframes, prototypes, and responsive interfaces while collaborating with UX, product, and marketing teams. Focused on usability, accessibility, and continuous user experience improvements for academic research platforms.",
    achievements: [
      "Collaborated with UI/UX designers to develop and enhance front-end components based on approved design specifications.",
      "Partnered with product and marketing teams to deliver campaign-driven UI enhancements that supported user acquisition and engagement.",
      "Conducted usability testing and user experience analysis to improve navigation, content discovery, and interaction with academic resources.",
      "Ensured accessibility compliance by following WCAG standards and validating interfaces with accessibility testing tools.",
      "Optimized user registration and authentication workflows using Optimizely to reduce friction and improve conversion.",
      "Contributed to the redesign of JSTOR interfaces, improving layouts, navigation, and overall user experience.",
      "Created visual assets and promotional content using Canva while collaborating with cross-functional teams through Jira.",
    ],
    technologies: [
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS",
      "WCAG",
      "UserTesting",
      "APIs",
    ],
  },
];
