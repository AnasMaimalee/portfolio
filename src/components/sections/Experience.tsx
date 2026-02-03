const experiences = [
  {
    period: "2023 — Present",
    title: "Founder & Lead Developer",
    company: "CodeBridge Technology",
    description:
      "Leading the design and development of modern web applications for clients, focusing on performance, scalability, and clean architecture. Working closely with businesses to turn ideas into production-ready products.",
  },
  {
    period: "2022 — 2023",
    title: "Full Stack Developer",
    company: "Client Projects",
    description:
      "Delivered multiple frontend and backend solutions using React, Vue, Laravel, and PHP. Built dashboards, authentication systems, APIs, and responsive user interfaces.",
  },
  {
    period: "2021 — 2022",
    title: "Frontend Developer",
    company: "Freelance / Remote",
    description:
      "Specialized in building clean, responsive UIs with React and modern CSS frameworks. Collaborated with designers and backend teams to deliver polished user experiences.",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <p className="section-subtitle mb-4">Experience</p>
          <h2 className="section-title">
            Professional journey
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            A timeline of my work building real-world applications and leading
            projects through CodeBridge Technology.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-neutral-300 dark:border-neutral-700 ml-4">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 ml-10 relative">
              
              {/* DOT */}
              <div className="absolute -left-[14px] top-1.5 w-7 h-7 rounded-full bg-primary border-4 border-white dark:border-neutral-950" />

              <span className="text-sm font-semibold text-primary">
                {exp.period}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {exp.title}
              </h3>

              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {exp.company}
              </p>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
