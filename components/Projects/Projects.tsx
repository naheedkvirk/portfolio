import ProjectCard from "./ProjectCard";
import { projects } from "./projectData";
import {
  pageContainer,
  section,
  sectionAccent,
  sectionSpacingLarge,
  sectionTitle,
  whiteBgGray900,
  bodyTextGray,
} from "@/lib/styles";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className={`${section} ${sectionSpacingLarge} ${whiteBgGray900}`}
    >
      <div className={pageContainer}>
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2 id="projects-heading" className={sectionTitle}>
            Projects
          </h2>

          <div className={sectionAccent} />

          <p className={`mt-6 max-w-2xl text-lg leading-8 ${bodyTextGray}`}>
            A selection of enterprise and personal projects that showcase my
            experience building accessible, responsive, and scalable web
            applications using modern front-end technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          {/* Project cards will go here */}
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
