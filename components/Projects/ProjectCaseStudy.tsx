import { Project } from "./projectData";

interface ProjectCaseStudyProps {
  project: Project;
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  return (
    <div className="mt-8 space-y-6">
      {project.challenge && (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Challenge
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {project.challenge}
          </p>
        </div>
      )}

      {project.solution && (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Solution
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {project.solution}
          </p>
        </div>
      )}

      {project.impact && (
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Impact
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {project.impact}
          </p>
        </div>
      )}
    </div>
  );
}
