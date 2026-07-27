/*
    Reusable card
*/
"use client";

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

import { Project } from "./projectData";

import {
  cardButtonBase,
  cardButtonPrimary,
  cardButtonSecondary,
  cardImage,
  cardImageOverlay,
  cardImageWrapper,
  defaultCard,
  featuredBadge,
  featuredCard,
  projectCard,
  technologyBadge,
  textLink,
} from "@/lib/styles";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      className={`${projectCard} ${
        project.featured ? featuredCard : defaultCard
      }`}
    >
      {/* Image Section */}
      <div className={cardImageWrapper}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={cardImage}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className={cardImageOverlay} />

        {project.featured && <div className={featuredBadge}>Featured</div>}
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

        {project.challenge && project.solution && project.impact && (
          <Link href={`/projects/${project.id}`} className={`${textLink} mt-4`}>
            View Case Study →
          </Link>
        )}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span key={technology} className={technologyBadge}>
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
              className={`${cardButtonBase} ${cardButtonPrimary}`}
            >
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardButtonBase} ${cardButtonSecondary}`}
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
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
