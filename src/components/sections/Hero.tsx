import FadeIn from "../ui/FadeIn"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <FadeIn>
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Hi, I’m <span className="text-primary">Anas Abdussalam (Maimalee)</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
            Frontend-focused full-stack developer working with
            React, Vue, Laravel, and PHP.
          </p>

          <a
            href="#contact"
            className="
              inline-flex items-center justify-center
              px-8 py-4 rounded-xl
              bg-primary text-white font-semibold
              transition
              hover:scale-[1.03]
              hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.6)]
            "
          >
            Get in Touch
          </a>
        </div>
      </FadeIn>
    </section>
  )
}
