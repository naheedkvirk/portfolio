/*
    Reusable card
*/

import Image from "next/image";
import { Project } from "./projectData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="
            group
            overflow-hidden
            rounded-xl
            border
            border-slate-200
            bg-white
            shadow-md
            transition-all
            duration-300
            hover:-translate-y-2
            hover:shadow-xl

            dark:border-slate-700
            dark:bg-slate-800
        "
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="
        object-cover
        transition-transform
        duration-300
        group-hover:scale-105
      "
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="mt-1 text-sm text-teal-600 dark:text-teal-400">
            {project.subtitle}
          </p>
        )}

        <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-700 dark:text-slate-200"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer" //prevents security issues when opening external links
              className="
                rounded-md
                bg-teal-600
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-teal-700
                hover:shadow-lg
                focus:outline-none
                focus:ring-2
                focus:ring-teal-500
                focus:ring-offset-2
                dark:focus:ring-offset-slate-800
            "
            >
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-md
                border
                border-slate-300
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-teal-600
                hover:text-teal-600
                hover:shadow-lg
                focus:outline-none
                focus:ring-2
                focus:ring-teal-500
                focus:ring-offset-2
                dark:border-slate-600
                dark:text-slate-200
                dark:hover:border-teal-400
                dark:hover:text-teal-400
                dark:focus:ring-offset-slate-800
            "
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/*
ProjectCard.tsx — The reusable card

This component should:

Accept a single project as a prop
Display the project's information
Know nothing about the rest of the portfolio

It answers:

"How does one project look?"
*/
