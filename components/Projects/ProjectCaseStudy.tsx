import { Project } from "./projectData";

import {
  caseStudyContainer,
  caseStudyText,
  caseStudyTitle,
} from "@/lib/styles";

interface ProjectCaseStudyProps {
  project: Project;
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const caseStudy = project.caseStudy;

  return (
    <div className={caseStudyContainer}>
      {/* Quick Summary */}
      {project.challenge && (
        <div>
          <h3 className={caseStudyTitle}>Challenge</h3>
          <p className={caseStudyText}>{project.challenge}</p>
        </div>
      )}

      {project.solution && (
        <div>
          <h3 className={caseStudyTitle}>Solution</h3>
          <p className={caseStudyText}>{project.solution}</p>
        </div>
      )}

      {project.impact && (
        <div>
          <h3 className={caseStudyTitle}>Impact</h3>
          <p className={caseStudyText}>{project.impact}</p>
        </div>
      )}

      {/* Detailed Case Study */}
      {caseStudy && (
        <>
          {/* Overview */}
          {caseStudy.overview && (
            <section>
              <h3 className={caseStudyTitle}>Overview</h3>
              <p className={caseStudyText}>{caseStudy.overview}</p>
            </section>
          )}

          {/* Role */}
          {caseStudy.role?.length > 0 && (
            <section>
              <h3 className={caseStudyTitle}>Role</h3>

              <ul className="list-disc space-y-2 pl-5">
                {caseStudy.role.map((item) => (
                  <li key={item} className={caseStudyText}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Responsibilities */}
          {caseStudy.responsibilities?.length > 0 && (
            <section>
              <h3 className={caseStudyTitle}>Responsibilities</h3>

              <ul className="list-disc space-y-2 pl-5">
                {caseStudy.responsibilities.map((item) => (
                  <li key={item} className={caseStudyText}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Architecture */}
          {caseStudy.architecture && (
            <section>
              <h3 className={caseStudyTitle}>{caseStudy.architecture.title}</h3>

              <p className={caseStudyText}>
                {caseStudy.architecture.description}
              </p>

              <ul className="list-disc space-y-2 pl-5 mt-4">
                {caseStudy.architecture.items.map((item) => (
                  <li key={item} className={caseStudyText}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Process */}
          {caseStudy.process && (
            <section>
              <h3 className={caseStudyTitle}>{caseStudy.process.title}</h3>

              <p className={caseStudyText}>{caseStudy.process.description}</p>

              <ul className="list-disc space-y-2 pl-5 mt-4">
                {caseStudy.process.items.map((item) => (
                  <li key={item} className={caseStudyText}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Workflow */}
          {caseStudy.workflow && (
            <section>
              <h3 className={caseStudyTitle}>{caseStudy.workflow.title}</h3>

              <p className={caseStudyText}>{caseStudy.workflow.description}</p>

              <ul className="list-disc space-y-2 pl-5 mt-4">
                {caseStudy.workflow.items.map((item) => (
                  <li key={item} className={caseStudyText}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Accessibility */}
          {caseStudy.accessibility && caseStudy.accessibility.length > 0 && (
            <section>
              <h3 className={caseStudyTitle}>Accessibility</h3>

              <ul className="list-disc space-y-2 pl-5">
                {caseStudy.accessibility.map((item) => (
                  <li key={item} className={caseStudyText}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Results */}
          {caseStudy.results && caseStudy.results.length > 0 && (
            <section>
              <h3 className={caseStudyTitle}>Results</h3>

              <ul className="list-disc space-y-2 pl-5">
                {caseStudy.results.map((item) => (
                  <li key={item} className={caseStudyText}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          )}
        </>
      )}
    </div>
  );
}
