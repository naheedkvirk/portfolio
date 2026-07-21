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
