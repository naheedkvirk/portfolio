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
              experience designing and building enterprise web applications that
              are accessible, scalable, and user-centered. I enjoy transforming
              complex business requirements into intuitive digital experiences
              using modern front-end technologies.
            </p>

            <p className={`mt-4 max-w-xl leading-8 ${bodyTextGray}`}>
              I specialize in React, Next.js, TypeScript, Material UI,
              Storybook, and Tailwind CSS, with expertise in design systems,
              reusable component libraries, accessibility (WCAG), and
              performance optimization. I focus on creating maintainable
              front-end architectures that deliver exceptional user experiences
              across enterprise applications.
            </p>

            <div className="mt-6">
              <h3 className={subsectionTitle}>Industry Experience</h3>

              <p className={`mt-2 ${bodyTextGray}`}>
                Automotive • Banking • Travel Insurance • Academic • Digital
                Publishing
              </p>

              <p className={`mt-2 ${mutedText}`}>
                Building enterprise applications across complex, regulated
                industries.
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
