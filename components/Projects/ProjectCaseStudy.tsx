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
  return (
    <div className={caseStudyContainer}>
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
    </div>
  );
}
