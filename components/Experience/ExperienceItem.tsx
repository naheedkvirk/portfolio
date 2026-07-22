import { Experience } from "./ExperienceData";

//Props
interface ExperienceItemProps {
  experience: Experience;
}
export default function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <article>
      {/* Timeline dot */}
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-blue-100 dark:ring-blue-900" />

      {/* Timeline line */}
      <div className="absolute left-[7px] top-6 h-full w-px bg-gray-300 dark:bg-gray-700" />

      <div className="pb-12">
        {/* Header */}
        <header>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {experience.role}
          </h3>

          <p className="mt-1 text-lg font-medium text-blue-600 dark:text-blue-400">
            {experience.company}
          </p>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {experience.duration} • {experience.location}
          </p>
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
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
