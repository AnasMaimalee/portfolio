const projects = [
  {
    title: "HR Management System",
    category: "Enterprise Software",
    description:
      "A full-featured HR management platform designed to handle employee records, payroll workflows, attendance tracking, and internal operations for organizations.",
    tech: ["Vue", "Laravel", "PHP", "REST API"],
  },
  {
    title: "JAMB Third-Party Integration System",
    category: "Education & Government Services",
    description:
      "A third-party system built to integrate with JAMB-related services, enabling secure data handling, validation workflows, and seamless user interactions.",
    tech: ["React", "Laravel", "API Integration"],
  },
  {
    title: "Data Purchasing & E-Services Platform",
    category: "Fintech / Utility Services",
    description:
      "A digital services platform enabling users to purchase mobile data, pay NEPA bills, request newspaper change-of-name publications, and access other essential e-services.",
    tech: ["Vue", "Laravel", "Payment Integration"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <p className="section-subtitle mb-4">Projects</p>
          <h2 className="section-title">
            Selected work & case studies
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            A selection of real-world software solutions built through
            CodeBridge Technology for businesses and service providers.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group relative rounded-3xl p-8
                bg-white dark:bg-neutral-950
                border border-neutral-200 dark:border-neutral-800
                hover:shadow-2xl transition
              "
            >
              {/* TOP BAR */}
              <span className="inline-block mb-4 text-sm font-semibold text-primary">
                {project.category}
              </span>

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* TECH */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1 rounded-full text-sm
                      bg-emerald-500/10 text-primary
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GLOW */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none">
                <div className="absolute -inset-6 bg-emerald-500/10 blur-3xl rounded-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
