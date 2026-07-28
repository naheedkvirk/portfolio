import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import { getProjectById } from "@/components/Projects/projectData";
import ProjectCaseStudy from "@/components/Projects/ProjectCaseStudy";

import {
  pageContainer,
  backLink,
  heroSection,
  eyebrow,
  title,
  subtitle,
  techBadgeContainer,
  techBadge,
  imageSection,
  imageWrapper,
  contentSection,
  sectionTitle,
  bodyText,
  technologySection,
  technologyContainer,
  technologyBadge,
  bottomNavigation,
  bottomLink,
} from "./styles";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  const project = getProjectById(Number(id));

  if (!project) {
    notFound();
  }

  return (
    <main className={pageContainer}>
      <Link href="/#projects" className={backLink}>
        ← Back to Projects
      </Link>

      <section className={heroSection}>
        <p className={eyebrow}>Case Study</p>

        <h1 className={title}>{project.title}</h1>

        <p className={subtitle}>{project.subtitle}</p>

        <div className={techBadgeContainer}>
          {project.technologies.map((tech) => (
            <span key={tech} className={techBadge}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className={imageSection}>
        <div className={imageWrapper}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>
      </section>

      <section className={contentSection}>
        <h2 className={sectionTitle}>Overview</h2>

        <p className={bodyText}>{project.description}</p>
      </section>

      <ProjectCaseStudy project={project} />

      <section className={technologySection}>
        <h2 className={sectionTitle}>Technology Stack</h2>

        <div className={technologyContainer}>
          {project.technologies.map((tech) => (
            <span key={tech} className={technologyBadge}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section className={bottomNavigation}>
        <Link href="/#projects" className={bottomLink}>
          ← View all projects
        </Link>
      </section>
    </main>
  );
}
