const skills = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    title: "Backend",
    items: ["Laravel", "PHP", "REST APIs", "Authentication"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git & GitHub", "Vite", "Vercel", "Figma"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-neutral-50 dark:bg-neutral-900/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <p className="section-subtitle mb-4">Skills</p>
          <h2 className="section-title">
            Technologies I work with
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            I focus on modern, scalable technologies that help businesses build
            fast, secure, and maintainable products.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div
              key={group.title}
              className="relative rounded-3xl p-8 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-xl transition"
            >
              <div className="absolute -top-6 right-6 bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                {group.title}
              </div>

              <ul className="space-y-4 mt-6">
                {group.items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
