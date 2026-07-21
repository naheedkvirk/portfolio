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
        group overflow-hidden rounded-xl border border-slate-200
        bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
        dark:border-slate-700
        dark:bg-slate-800
      "
    ></article>
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
