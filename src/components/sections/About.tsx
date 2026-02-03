export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT — TEXT */}
        <div>
          <p className="section-subtitle mb-4">About the Founder</p>

          <h2 className="section-title mb-6">
            Building scalable products
            <span className="text-emerald-600"> with real business value</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
            I’m the founder of <strong>CodeBridge Technology</strong>, specializing in
            building modern, high-performance web applications. My expertise is
            frontend development with React, backed by solid backend systems using
            Laravel and PHP.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            I work closely with businesses to transform ideas into reliable,
            production-ready products that scale.
          </p>

          <div className="flex gap-6">
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

        {/* RIGHT — IMAGE + HIGHLIGHTS */}
        <div className="relative flex justify-center">
          <div className="absolute -inset-10 bg-emerald-500/20 blur-3xl rounded-full" />

          <div className="relative grid gap-6">
            {/* IMAGE */}
            {/* <div className="w-64 h-64 rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-xl mx-auto">
              <img
                src="/me."
                alt="Founder of CodeBridge Technology"
                className="w-full h-full object-cover"
              />
            </div> */}

            {/* HIGHLIGHTS */}
            <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950 shadow-xl">
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>React & modern UI architecture</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Laravel, PHP & secure APIs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <span>Product-focused, scalable solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
