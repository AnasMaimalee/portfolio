const projects = [
  {
    title: "HR Management System",
    category: "Enterprise Software",
    description:
      "A full-featured HR management platform designed to manage employee records, payroll workflows, attendance tracking, and internal operations for organizations.",
    tech: ["Vue", "Laravel", "PHP", "REST API"],
    metrics: ["Employee Records", "Payroll Automation", "Attendance Tracking"],
  },
  {
    title: "JAMB Third-Party Integration System",
    category: "Education & Government Services",
    description:
      "A third-party system built to integrate with JAMB-related services, enabling secure data handling, validation workflows, and seamless user interactions.",
    tech: ["React", "Laravel", "API Integration", "Payment Integration"],
    metrics: ["Secure Validation", "Live API Sync", "Payment Processing"],
  },
  {
    title: "Data Purchasing & E-Services Platform",
    category: "Fintech / Utility Services",
    description:
      "A digital services platform enabling users to purchase mobile data, pay NEPA bills, request newspaper change-of-name publications, and access other essential e-services.",
    tech: ["Vue", "Laravel", "Payment Integration"],
    metrics: ["Instant Fulfillment", "Utility Payments", "Digital Services"],
  },
  {
    title: "Notivio",
    category: "Productivity & Collaboration",
    featured: true,
    description:
      "A collaborative note-taking platform that allows users to create notes using text, voice recordings, and sketches. Notes can be shared with other users, reviewed collaboratively, and merged into a single unified version.",
    tech: [
      "React",
      "Laravel",
      "Web Audio API",
      "Canvas",
      "Real-time Collaboration",
    ],
    metrics: [
      "Voice → Note",
      "Sketch & Annotate",
      "Collaborative Review",
      "Note Merging",
    ],
  },
  {
    title: "CBT Exams Platform (JAMB Practice)",
    category: "EdTech / Assessment Systems",
    description:
      "A computer-based testing platform for JAMB exam preparation, allowing users to practice past questions, take timed exams, and instantly view results and performance analytics.",
    tech: ["Laravel", "Vue", "CBT Engine", "Result Analytics"],
    metrics: ["Timed Exams", "Instant Results", "Performance Insights"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-32 bg-neutral-50 dark:bg-neutral-900/30"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <p className="section-subtitle mb-4">Projects</p>
          <h2 className="section-title">Selected work & case studies</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            A selection of real-world software solutions built through
            CodeBridge Technology for businesses, institutions, and service
            providers.
          </p>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                group relative rounded-3xl p-8
                bg-white dark:bg-neutral-950
                border border-neutral-200 dark:border-neutral-800
                hover:-translate-y-2 hover:shadow-2xl
                transition-all duration-300
              "
            >
              {/* FEATURED BADGE */}
              {project.featured && (
                <span className="absolute top-6 right-6 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500 text-white">
                  Featured
                </span>
              )}

              {/* CATEGORY */}
              <span className="inline-block mb-4 text-sm font-semibold text-primary">
                {project.category}
              </span>

              {/* TITLE */}
              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* METRICS */}
              <ul className="space-y-2 mb-6 text-sm text-gray-500 dark:text-gray-400">
                {project.metrics.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-emerald-500">•</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm
                    bg-emerald-500/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="opacity-0 group-hover:opacity-100 transition">
                <span className="inline-flex items-center gap-2 text-emerald-600 font-semibold">
                  View case study →
                </span>
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
  );
}
