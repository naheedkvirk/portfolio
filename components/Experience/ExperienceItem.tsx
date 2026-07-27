import { motion } from "motion/react";
import { Experience } from "./experienceData";

import {
  achievementDot,
  achievementItem,
  currentRoleBadge,
  experienceCard,
  experienceCompany,
  experienceMeta,
  experienceRole,
  experienceText,
  technologyBadge,
  timelineDot,
  timelineLine,
} from "@/lib/styles";

//Props
interface ExperienceItemProps {
  experience: Experience;
  shouldReduceMotion: boolean;
  index: number;
}

export default function ExperienceItem({
  experience,
  shouldReduceMotion,
  index,
}: ExperienceItemProps) {
  return (
    <motion.article
      className={experienceCard}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: "easeOut",
      }}
    >
      {/* Timeline line */}
      <div className={timelineLine} />

      {/* Timeline dot */}
      <div className={timelineDot} />

      <div className="pb-12 sm:pb-16">
        {/* Header */}
        <header>
          <h3 className={experienceRole}>{experience.role}</h3>

          <p className={experienceCompany}>{experience.company}</p>

          <p className={experienceMeta}>
            {experience.duration} • {experience.location}
          </p>

          {experience.current && (
            <span className={currentRoleBadge}>Current Role</span>
          )}
        </header>

        {/* Summary */}
        <p className={`mt-5 leading-7 ${experienceText}`}>
          {experience.summary}
        </p>

        {/* Achievements */}
        <ul className={`mt-5 space-y-2 ${experienceText}`}>
          {experience.achievements.map((achievement) => (
            <li key={achievement} className={achievementItem}>
              <span aria-hidden="true" className={achievementDot} />
              {achievement}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span key={technology} className={technologyBadge}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
