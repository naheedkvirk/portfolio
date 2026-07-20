export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left Column */}
          <div>
            <h2
              id="about-heading"
              className="text-3xl font-bold tracking-tight"
            >
              About Me
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
              I&apos;m a Front-End Developer who enjoys building accessible,
              responsive, and high-performance web applications with modern
              JavaScript technologies.
            </p>
            <p className="mt-4 leading-8 text-gray-700 dark:text-gray-300">
              I specialize in React, Next.js, TypeScript, and modern CSS,
              creating scalable user interfaces with a strong focus on
              usability, performance, accessibility, and clean architecture.
            </p>
            <ul className="mt-8 space-y-3">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>Accessibility (WCAG)</li>
              <li>Responsive Web Design</li>
              <li>Design Systems & Component Libraries</li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="flex justify-center">
            <div className="flex h-80 w-80 items-center justify-center rounded-xl border-2 border-dashed">
              Image Placeholder
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
