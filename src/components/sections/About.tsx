export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT — TEXT */}
        <div>
          <p className="section-subtitle mb-4">About Me</p>

          <h2 className="section-title mb-6">
            I turn ideas into
            <span className="text-emerald-600"> real, scalable products</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            I’m a full-stack developer who specializes in crafting high-quality,
            performance-focused web applications. My core strength is frontend
            development with React, but I also build robust backend systems using
            Laravel and PHP.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            I don’t just write code — I think about user experience, scalability,
            and long-term maintainability. Whether it’s a startup MVP or a production
            platform, I build solutions that grow with the business.
          </p>

          <div className="flex gap-4">
            <div className="px-6 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900">
              <p className="text-3xl font-bold text-emerald-600">3+</p>
              <p className="text-sm text-gray-500">Years Experience</p>
            </div>

            <div className="px-6 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900">
              <p className="text-3xl font-bold text-emerald-600">20+</p>
              <p className="text-sm text-gray-500">Projects Delivered</p>
            </div>
          </div>
        </div>

        {/* RIGHT — VISUAL */}
        <div className="relative">
          <div className="absolute -inset-8 bg-emerald-500/20 blur-3xl rounded-full" />
          
          <div className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-950 shadow-xl">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="text-emerald-600 text-xl">✓</span>
                <span>Modern React & component-driven UI design</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-600 text-xl">✓</span>
                <span>Strong backend experience with Laravel & PHP</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-600 text-xl">✓</span>
                <span>Vue.js knowledge for flexible frontend solutions</span>
              </li>
              <li className="flex gap-4">
                <span className="text-emerald-600 text-xl">✓</span>
                <span>Clean code, scalability & performance-first mindset</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
