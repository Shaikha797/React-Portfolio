
const projects = [
  {
    number: "01",
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A modern personal portfolio website to showcase my skills, experience and creative work.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
    color: "from-red-900 to-[#211418]",
    link: "#",
  },
  {
    number: "02",
    title: "E-Commerce Website",
    category: "Frontend Development",
    description:
      "A stylish online shopping experience with a clean interface and responsive product layouts.",
    technologies: ["React", "CSS", "JavaScript"],
    color: "from-purple-900 to-[#211418]",
    link: "#",
  },
  {
    number: "03",
    title: "Creative Landing Page",
    category: "UI Design",
    description:
      "A beautiful landing page focused on modern design, smooth layouts and user experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    color: "from-rose-900 to-[#211418]",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#160d10] px-6 py-24 text-white md:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-red-500">
            My Recent Work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured <span className="text-red-500">Projects</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
            Here are some projects that showcase my creativity,
            development skills and passion for building websites.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.number}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#211418] transition duration-300 hover:-translate-y-2 hover:border-red-500/50"
            >

              {/* Project Preview */}
              <div
                className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${project.color}`}
              >
                <span className="text-7xl font-bold text-white/10">
                  {project.number}
                </span>

                <span className="absolute bottom-5 left-5 rounded-full bg-black/30 px-4 py-2 text-xs font-semibold text-white">
                  {project.category}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-7">

                <h3 className="mb-3 text-2xl font-bold transition group-hover:text-red-500">
                  {project.title}
                </h3>

                <p className="mb-6 leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-7 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs text-red-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5 border-t border-white/10 pt-5">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 font-semibold text-white transition hover:text-red-500"
                  >
Live Demo                  </a>

                  <a
                    href="#"
                    className="flex items-center gap-2 font-semibold text-white transition hover:text-red-500"
                  >
GitHub                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}