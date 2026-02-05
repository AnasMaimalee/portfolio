"use client";

import { useState } from "react";
import FadeIn from "../ui/FadeIn";

/* =======================
   TYPES
======================= */

interface InstallMethods {
  composer: string;
  manual: string[];
  docker?: string;
  publish?: string;
}

type InstallTab = keyof InstallMethods;

interface PackageItem {
  name: string;
  status: string;
  statusColor: string;
  description: string;
  features: string[];
  tech: string[];
  install: InstallMethods;
  link: string;
}

/* =======================
   DATA
======================= */

const packages: PackageItem[] = [
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
      publish: "php artisan vendor:publish --tag=jwt-auth-config",
    },
    link: "https://github.com/AnasMaimalee/laravel-jwt-auth-kit",
  },
];

/* =======================
   COMPONENT
======================= */

export default function OpenSource() {
  const [activeTab, setActiveTab] = useState<Record<number, InstallTab>>({});
  const [copied, setCopied] = useState<string | null>(null);

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
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="section-subtitle mb-4">Open Source</p>
            <h2 className="section-title">Developer tools & packages</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              I build reusable tools and packages to solve real-world problems
              and improve developer productivity.
            </p>
          </div>
        </FadeIn>

        {/* PACKAGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {packages.map((pkg, index) => {
            const tab: InstallTab = activeTab[index] ?? "composer";
            const tabs = Object.keys(pkg.install) as InstallTab[];
            const installValue = pkg.install[tab];

            return (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white dark:bg-neutral-950 shadow-lg hover:shadow-xl transition">

                  {/* STATUS */}
                  <span
                    className={`absolute top-6 right-6 text-xs text-white px-3 py-1 rounded-full ${pkg.statusColor}`}
                  >
                    {pkg.status}
                  </span>

                  <h3 className="text-xl font-bold mb-4 pr-12">
                    {pkg.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* FEATURES */}
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex gap-2 text-sm">
                        <span className="text-emerald-500">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* TECH */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {pkg.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-sm bg-emerald-500/10 text-emerald-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* INSTALL TABS */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {tabs.map((t) => (
                        <button
                          key={t}
                          onClick={() =>
                            setActiveTab({ ...activeTab, [index]: t })
                          }
                          className={`text-sm px-3 py-1.5 rounded-full capitalize transition
                            ${
                              tab === t
                                ? "bg-emerald-500 text-white"
                                : "bg-neutral-100 dark:bg-neutral-800 text-gray-500 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                            }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>

                    {/* INSTALL CONTENT */}
                    {tab === "manual" ? (
                      <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {pkg.install.manual.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ul>
                    ) : typeof installValue === "string" ? (
                      <div className="relative">
                        <pre className="rounded-2xl bg-neutral-100 dark:bg-neutral-900 px-4 py-3 text-sm overflow-x-auto">
                          <code className="text-emerald-600 break-all">
                            {installValue}
                          </code>
                        </pre>

                        <button
                          onClick={() =>
                            copy(installValue, `${index}-${tab}`)
                          }
                          className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
                        >
                          {copied === `${index}-${tab}` ? "✓" : "Copy"}
                        </button>
                      </div>
                    ) : null}

                    {/* PUBLISH */}
                    {pkg.install.publish && tab === "composer" && (
                      <div className="mt-4 relative">
                        <pre className="rounded-2xl bg-neutral-100 dark:bg-neutral-900 px-4 py-3 text-sm overflow-x-auto">
                          <code className="text-emerald-600 break-all">
                            {pkg.install.publish}
                          </code>
                        </pre>
                        <button
                          onClick={() =>
                            copy(pkg.install.publish!, `${index}-publish`)
                          }
                          className="absolute top-2 right-2 text-xs px-2 py-1 rounded-full bg-emerald-500 text-white hover:bg-emerald-600"
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
                    className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:underline"
                  >
                    View on GitHub →
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
