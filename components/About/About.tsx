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

            <p className="mt-t">About section placeholder.</p>
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
