import { useState } from "react";
import FadeIn from "../ui/FadeIn";

// ✅ Type definitions
interface InstallMethods {
  composer: string;
  manual: string[];
  docker: string;
  publish?: string;
}



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
    install: {
      composer: "composer require maimalee/laravel-api-response",
      manual: [
        "Clone the repository",
        "Copy files into your Laravel project",
        "Register service provider if needed",
      ],
      // docker: "docker exec -it app composer require maimalee/laravel-api-response",
      publish: "php artisan vendor:publish --tag=api-response-config",
    },
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
    install: {
      composer: "composer require maimalee/laravel-jwt-auth-kit",
      manual: [
        "Clone the repository",
        "Run migrations",
        "Configure JWT secrets",
      ],
      // docker: "docker exec -it app composer require maimalee/laravel-jwt-auth-kit",
      publish: "php artisan vendor:publish --tag=jwt-auth-config",
    },
    link: "https://github.com/AnasMaimalee/laravel-jwt-auth-kit",
  },
];

export default function OpenSource() {
  const [activeTab, setActiveTab] = useState<Record<number, string>>({});
  const [copied, setCopied] = useState<string | null>(null);

  // ✅ Fixed: Typed parameters
  const copy = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };
return (
    <section id="open-source" className="py-12 sm:py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <FadeIn>
          <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="section-subtitle mb-4">Open Source</p>
            <h2 className="section-title">Developer tools & packages</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4 px-4 sm:px-0">
              I build reusable tools and packages to solve real-world problems
              and improve developer productivity.
            </p>
          </div>
        </FadeIn>

        {/* PACKAGES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {packages.map((pkg, index) => {
            const tab: string = activeTab[index] || "composer";

            return (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="relative rounded-2xl sm:rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 bg-white dark:bg-neutral-950 shadow-lg hover:shadow-xl transition-all duration-300 h-fit">
                  {/* STATUS */}
                  <span className={`absolute top-4 right-4 sm:top-6 sm:right-6 text-xs text-white px-2 sm:px-3 py-1 rounded-full ${pkg.statusColor}`}>
                    {pkg.status}
                  </span>

                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 line-clamp-2 pr-12 sm:pr-0">{pkg.name}</h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base line-clamp-3">
                    {pkg.description}
                  </p>

                  {/* FEATURES - Collapsible on mobile */}
                  <div className="mb-4 sm:mb-6">
                    <ul className="space-y-2">
                      {pkg.features.slice(0, 2).map((feature, i) => (
                        <li key={i} className="flex gap-2 text-sm">
                          <span className="text-emerald-500 mt-0.5">✓</span>
                          <span className="line-clamp-2">{feature}</span>
                        </li>
                      ))}
                      {pkg.features.length > 2 && (
                        <li className="text-xs text-gray-500 italic">+{pkg.features.length - 2} more features</li>
                      )}
                    </ul>
                  </div>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {pkg.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-full text-xs sm:text-sm bg-emerald-500/10 text-emerald-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* INSTALL TABS */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 -mx-1.5 sm:-mx-0">
                      {["composer", "manual", "docker"].map((t) => (
                        <button
                          key={t}
                          onClick={() => setActiveTab({ ...activeTab, [index]: t })}
                          className={`text-xs sm:text-sm px-3 py-1.5 rounded-full capitalize transition-all flex-1 sm:flex-none whitespace-nowrap
                            ${tab === t
                              ? "bg-emerald-500 text-white shadow-sm"
                              : "bg-neutral-100 dark:bg-neutral-800 text-gray-500 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                            }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    {/* TAB CONTENT */}
                    {tab !== "manual" ? (
                      <div className="relative">
                        <pre className="rounded-xl sm:rounded-2xl bg-neutral-100 dark:bg-neutral-900 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm overflow-x-auto max-h-20 sm:max-h-24 overflow-y-auto">
                          <code className="text-emerald-600 break-all">
                            {pkg.install[tab as keyof InstallMethods] as string}
                          </code>
                        </pre>

                        <button
                          onClick={() => copy(pkg.install[tab as keyof InstallMethods] as string, `${index}-${tab}`)}
                          className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-xs px-2 py-1 rounded-full bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 transition-colors"
                          title="Copy to clipboard"
                        >
                          {copied === `${index}-${tab}` ? "✓" : "Copy"}
                        </button>
                      </div>
                    ) : (
                      <ul className="list-disc pl-5 text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-h-20 overflow-y-auto space-y-1">
                        {pkg.install.manual.slice(0, 3).map((step, i) => (
                          <li key={i} className="line-clamp-1">{step}</li>
                        ))}
                        {/* {pkg.install.manual.length > 3 && (
                          <li className="text-xs italic text-gray-500">+{pkg.install.manual.length - 3} more steps</li>
                        )} */}
                      </ul>
                    )}

                    {/* PUBLISH */}
                    {pkg.install.publish && tab === "composer" && (
                      <div className="mt-3 sm:mt-4 relative">
                        <pre className="rounded-xl sm:rounded-2xl bg-neutral-100 dark:bg-neutral-900 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm overflow-x-auto max-h-16 sm:max-h-20 overflow-y-auto">
                          <code className="text-emerald-600 break-all">
                            {pkg.install.publish}
                          </code>
                        </pre>
                        <button
                          onClick={() => copy(pkg.install.publish!, `${index}-publish`)}
                          className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 text-xs px-2 py-1 rounded-full bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 transition-colors"
                          title="Copy to clipboard"
                        >
                          {copied === `${index}-publish` ? "✓" : "Copy"}
                        </button>
                      </div>
                    )}
                  </div>

                  {/* LINK */}
                  <a
                    href={pkg.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 font-semibold text-sm hover:underline transition-colors"
                  >
                    View on GitHub 
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14L14 10z" />
                    </svg>
                  </a>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}