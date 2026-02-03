import FadeIn from "../ui/FadeIn";

const packages = [
  {
    name: "Laravel API Response",
    status: "Stable",
    statusColor: "bg-emerald-500",
    description:
      "A lightweight Laravel package for building consistent and clean API responses. Designed to eliminate repetitive response logic and improve developer experience.",
    features: [
      "Standardized success & error responses",
      "Pagination helpers",
      "Clean and predictable JSON structure",
    ],
    tech: ["Laravel", "PHP"],
    link: "https://github.com/AnasMaimalee/laravel-api-response",
  },
  {
    name: "Laravel JWT Auth Kit",
    status: "In Development",
    statusColor: "bg-amber-500",
    description:
      "A modular authentication kit for Laravel applications, focused on secure JWT-based authentication with an extensible architecture.",
    features: [
      "JWT authentication system",
      "Role & permission handling",
      "Biometric & Face ID login (planned)",
    ],
    tech: ["Laravel", "JWT", "Security"],
    link: "https://github.com/AnasMaimalee/laravel-jwt-auth-kit",
  },
];

export default function OpenSource() {
  return (
    <section id="open-source" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <FadeIn>
          <div className="max-w-2xl mb-20">
            <p className="section-subtitle mb-4">Open Source</p>
            <h2 className="section-title">
              Developer tools & packages
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              I build reusable tools and packages to solve real-world problems
              and improve developer productivity.
            </p>
          </div>
        </FadeIn>

        {/* PACKAGES GRID */}
        <div className="grid md:grid-cols-2 gap-12">
          {packages.map((pkg, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-950 shadow-lg hover:shadow-xl transition">

                {/* STATUS BADGE */}
                <span
                  className={`absolute top-6 right-6 text-xs text-white px-3 py-1 rounded-full ${pkg.statusColor}`} 
                >
                  {pkg.status}
                </span>

                <h3 className="text-xl font-bold mb-4">
                  {pkg.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {pkg.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-emerald-500">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {pkg.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-sm
                      bg-emerald-500/10 text-primary"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINK */}
                <a
                  href={pkg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:underline"
                >
                  View on GitHub →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

