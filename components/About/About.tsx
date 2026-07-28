import Image from "next/image";
import {
  // Layout
  pageContainer,

  // Section
  section,
  sectionSpacing,
  gradientGray50White,
  sectionAccent,

  // Typography
  sectionTitle,
  subsectionTitle,
  bodyTextGray,
  mutedText,

  // About
  skillItem,
  skillDot,
  profileImage,
  profileImageCard,
} from "@/lib/styles";

export default function About() {
  const skills = [
    "React & Next.js",
    "TypeScript",
    "Material UI",
    "Storybook",
    "Design Systems & Component Libraries",
    "Tailwind CSS",
    "Accessibility (WCAG)",
    "Responsive Web Design",
    "Azure DevOps & Enterprise Workflows",
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className={`${section} ${sectionSpacing} ${gradientGray50White}`}
    >
      <div className={pageContainer}>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left Column */}
          <div>
            <h2 id="about-heading" className={sectionTitle}>
              About Me
            </h2>

            <div className={sectionAccent} />

            <p className={`mt-6 max-w-xl text-lg leading-8 ${bodyTextGray}`}>
              I&apos;m a Senior UI/UX Front-End Developer with 15+ years of
              experience designing and developing accessible, scalable, and
              user-centered web applications. I specialize in transforming
              complex business requirements into intuitive digital experiences
              through thoughtful design and modern front-end engineering.
            </p>

            <p className={`mt-4 max-w-xl leading-8 ${bodyTextGray}`}>
              My expertise includes React, Next.js, TypeScript, Material UI,
              Storybook, and Tailwind CSS, with a strong focus on design
              systems, reusable component libraries, accessibility (WCAG), and
              responsive application development. I build maintainable front-end
              architectures that improve consistency, collaboration, and product
              delivery across enterprise applications.
            </p>

            <p className={`mt-4 max-w-xl leading-8 ${bodyTextGray}`}>
              I have experience working with cross-functional teams including UX
              designers, product managers, and engineers using enterprise
              development workflows and tools such as Azure DevOps, Git, and
              Agile practices.
            </p>

            <div className="mt-6">
              <h3 className={subsectionTitle}>Industry Experience</h3>

              <p className={`mt-2 ${bodyTextGray}`}>
                Automotive • Banking • Travel Insurance • Academic Search •
                Digital Publishing • Enterprise Applications
              </p>

              <p className={`mt-2 ${mutedText}`}>
                Building accessible and scalable user experiences across complex
                enterprise environments.
              </p>
            </div>

            <ul className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
              {skills.map((skill) => (
                <li key={skill} className={skillItem}>
                  <span aria-hidden="true" className={skillDot} />

                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex justify-center lg:justify-end">
            <div className={profileImageCard}>
              <Image
                src="/images/profile/nv.jpg"
                alt="Portrait of Naheed Virk"
                fill
                className={profileImage}
                sizes="(max-width: 768px) 80vw, 288px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
