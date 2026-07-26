import { notFound } from "next/navigation";
import { getProjectById } from "@/components/Projects/projectData";
import Link from "next/link";
import Image from "next/image";

interface ProjectPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;

  const project = getProjectById(Number(id));
  console.log(project?.image);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      {/* Back Navigation */}
      <Link
        href="/#projects"
        className="
            mb-8
            inline-flex
            items-center
            rounded-md
            bg-teal-600
            px-5
            py-2.5
            text-sm
            font-semibold
            text-white
            hover:bg-teal-700
        "
      >
        ← Back to Projects
      </Link>

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        {project.title}
      </h1>

      <p className="mt-2 text-xl text-gray-600 dark:text-gray-300">
        {project.subtitle}
      </p>

      {project.image && (
        <div className="mt-8 flex justify-center">
          <div className="relative h-64 w-full max-w-3xl overflow-hidden rounded-xl shadow-lg">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      )}

      <div className="mt-10 space-y-10">
        {project.challenge && (
          <section>
            <h2 className="text-2xl font-semibold">Challenge</h2>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {project.challenge}
            </p>
          </section>
        )}

        {project.solution && (
          <section>
            <h2 className="text-2xl font-semibold">Solution</h2>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {project.solution}
            </p>
          </section>
        )}

        {project.impact && (
          <section>
            <h2 className="text-2xl font-semibold">Impact</h2>

            <p className="mt-3 text-gray-600 dark:text-gray-300">
              {project.impact}
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
