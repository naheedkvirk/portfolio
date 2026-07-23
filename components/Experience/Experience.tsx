import ExperienceItem from "./ExperienceItem";
import { experiences } from "./experienceData";

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-24 bg-gray-50 py-20 sm:py-24 lg:py-32 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2
            id="experience-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Experience
          </h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-blue-500" />

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Over 15 years of experience designing and developing accessible,
            responsive, and scalable web applications across healthcare,
            finance, automotive, manufacturing, and digital publishing.
          </p>
        </div>
        {/* Timeline */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          {experiences.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
