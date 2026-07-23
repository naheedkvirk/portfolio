import { motion } from "motion/react";
import { Experience } from "./experienceData";

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
      className="relative pl-8 sm:pl-10"
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
      <div className="absolute left-[7px] top-6 bottom-0 z-0 w-px bg-gray-300 dark:bg-gray-700" />

      {/* Timeline dot */}
      <div
        className="
          absolute
          left-0
          top-2
          z-10
          h-3
          w-3
          rounded-full
          bg-blue-600
          ring-4
          ring-gray-50
          dark:ring-gray-900
        "
      />

      <div className="pb-12 sm:pb-16">
        {/* Header */}
        <header>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {experience.role}
          </h3>

          <p className="mt-1 text-lg font-semibold text-teal-600 dark:text-teal-400">
            {experience.company}
          </p>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {experience.duration} • {experience.location}
          </p>

          {experience.current && (
            <span
              className="
                mt-3
                inline-flex
                rounded-full
                bg-teal-100
                px-3
                py-1
                text-xs
                font-medium
                text-teal-700
                dark:bg-teal-900/40
                dark:text-teal-300
              "
            >
              Current Role
            </span>
          )}
        </header>

        {/* Summary */}
        <p className="mt-5 leading-7 text-gray-600 dark:text-gray-300">
          {experience.summary}
        </p>

        {/* Achievements */}
        <ul className="mt-5 list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-300">
          {experience.achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="mt-6 flex flex-wrap gap-2">
          {experience.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
