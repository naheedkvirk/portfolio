export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-white py-20 dark:bg-gray-950 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <h2
            id="contact-heading"
            className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
          >
            Get In Touch
          </h2>

          <div className="mt-3 h-1 w-20 rounded-full bg-teal-500" />

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            I&apos;m always interested in discussing new opportunities,
            interesting projects, and ways to create meaningful digital
            experiences.
          </p>

          {/* Contact Links */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="naheed.virk@gmail.com"
              className="
                inline-flex
                items-center
                justify-center
                rounded-md
                bg-teal-600
                px-6
                py-3
                text-sm
                font-semibold
                text-white
                transition
                hover:bg-teal-700
                focus:outline-none
                focus:ring-2
                focus:ring-teal-500
                focus:ring-offset-2
                dark:focus:ring-offset-gray-950
                "
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/naheed-virk"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-md
                border
                border-gray-300
                px-6
                py-3
                text-sm
                font-semibold
                text-gray-700
                transition
                hover:border-teal-600
                hover:text-teal-600
                dark:border-gray-700
                dark:text-gray-300
                dark:hover:border-teal-400
                dark:hover:text-teal-400
                "
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/naheedkvirk/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                rounded-md
                border
                border-gray-300
                px-6
                py-3
                text-sm
                font-semibold
                text-gray-700
                transition
                hover:border-teal-600
                hover:text-teal-600
                dark:border-gray-700
                dark:text-gray-300
                dark:hover:border-teal-400
                dark:hover:text-teal-400
                "
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
