import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column */}
          <div>
            <h2
              id="about-heading"
              className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
            >
              About Me
            </h2>
            <div className="mt-3 h-1 w-20 rounded-full bg-blue-500" />

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              I&apos;m a Front-End Developer who enjoys building accessible,
              responsive, and high-performance web applications with modern
              JavaScript technologies.
            </p>

            <p className="mt-4 max-w-xl leading-8 text-gray-600 dark:text-gray-300">
              I specialize in React, Next.js, TypeScript, and modern CSS,
              creating scalable user interfaces with a strong focus on
              usability, performance, accessibility, and clean architecture.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-3 text-base">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-blue-500"
                />
                React & Next.js
              </li>

              <li className="flex items-center gap-3 text-base">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-blue-500"
                />
                TypeScript
              </li>

              <li className="flex items-center gap-3 text-base">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-blue-500"
                />
                Tailwind CSS
              </li>

              <li className="flex items-center gap-3 text-base">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-blue-500"
                />
                Accessibility (WCAG)
              </li>

              <li className="flex items-center gap-3 text-base">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-blue-500"
                />
                Responsive Web Design
              </li>

              <li className="flex items-center gap-3 text-base">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-blue-500"
                />
                Design Systems & Component Libraries
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <div
              className="relative h-64 w-64 overflow-hidden rounded-2xl 
            border border-gray-200 shadow-xl md:h-72 transition-shadow duration-300 hover:shadow-2xl md:w-72 dark:border-gray-800"
            >
              <Image
                src="/images/profile/nv.jpg"
                alt="Portrait of Naheed Virk"
                fill
                className="object-cover object-center transition-transform duration-500 
                hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
                sizes="(max-width: 768px) 80vw, 288px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
