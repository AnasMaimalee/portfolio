import FadeIn from "../ui/FadeIn";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 mt-4">
      <div className="max-w-4xl text-center">
        <FadeIn delay={0}>
          <img
            src="/code-bridge.jpeg"
            alt="CodeBridge Technology"
            className="h-56 mx-auto mb-8 border rounded-full"
          />
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-extrabold mb-6 leading-tight">
            Building modern web products
            <br />
            at <span className="text-primary">CodeBridge Technology</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.4}>
          <p className="text-xs sm:text-sm md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto">
            We design and develop high-quality web applications using React, Vue, Laravel, and PHP — focused on performance, scalability, and business impact.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a
              href="#projects"
              className="px-6 py-2 sm:px-8 sm:py-4 rounded-xl bg-primary text-white font-semibold text-sm sm:text-base transition hover:scale-[1.03] hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.6)]"
            >
              View Our Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 sm:px-8 sm:py-4 rounded-xl border border-primary text-primary font-semibold text-sm sm:text-base transition hover:bg-primary hover:text-white"
            >
              Work With Us
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
