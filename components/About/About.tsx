import Image from "next/image";
import { about } from "@/content/content";
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
              {about.title}
            </h2>

            <div className={sectionAccent} />

            <p className={`mt-6 max-w-xl text-lg leading-8 ${bodyTextGray}`}>
              {about.paragraphs[0]}
            </p>

            {about.paragraphs.slice(1).map((paragraph) => (
              <p
                key={paragraph}
                className={`mt-4 max-w-xl leading-8 ${bodyTextGray}`}
              >
                {paragraph}
              </p>
            ))}

            <div className="mt-6">
              <h3 className={subsectionTitle}>
                {about.industryExperience.title}
              </h3>

              <p className={`mt-2 ${bodyTextGray}`}>
                {about.industryExperience.industries}
              </p>

              <p className={`mt-2 ${mutedText}`}>
                {about.industryExperience.description}
              </p>
            </div>

            <ul className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
              {about.skills.map((skill) => (
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
