import Image from "next/image";
import {
  bodyText,
  gradientGray50White,
  pageContainer,
  profileImage,
  profileImageCard,
  section,
  sectionAccent,
  sectionSpacing,
  sectionTitle,
  skillItem,
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

            <p className={`mt-6 max-w-xl text-lg leading-8 ${bodyText}`}>
              I&apos;m a Senior UI/UX Front-End Developer who enjoys building
              accessible, responsive, and high-performance web applications with
              modern JavaScript technologies.
            </p>

            <p className={`mt-4 max-w-xl leading-8 ${bodyText}`}>
              I specialize in React, Next.js, TypeScript, Material UI, and
              modern CSS, creating scalable user interfaces and reusable
              component systems with a strong focus on usability, performance,
              accessibility, and clean architecture.
            </p>

            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-gray-100">
                Industry Experience
              </h3>

              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Healthcare • Finance • Automotive • Manufacturing • Digital
                Publishing
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                Building enterprise applications across regulated and complex
                business domains.
              </p>
            </div>

            <ul className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
              {skills.map((skill) => (
                <li key={skill} className={skillItem}>
                  <span
                    aria-hidden="true"
                    className="h-2 w-2 rounded-full bg-teal-500"
                  />
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
