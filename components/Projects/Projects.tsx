/*
    Section component
*/

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="scroll-mt-24 bg-white dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6 py-32">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2
            id="projects-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Projects
          </h2>

          <div className="mt-3 h-1 w-20 rounded-full bg-blue-500" />

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            A selection of enterprise and personal projects that showcase my
            experience building accessible, responsive, and scalable web
            applications using modern front-end technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-16">{/* Project cards will go here */}</div>
      </div>
    </section>
  );
}

/*
Projects.tsx — The section

This component should:

Import the projects array
Import ProjectCard
Loop through the projects
Render one card per project

It answers:

"How do I display all of my projects?"

The flow
projects.ts
    │
    ▼
Projects.tsx
    │
    ▼
projects.map(...)
    │
    ▼
ProjectCard.tsx
*/
