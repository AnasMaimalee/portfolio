import FadeIn from "../ui/FadeIn";

const education = [
  {
    period: "2025 — Present",
    title: "Master of Computer Science (AI & ML, Cyber Security)",
    institution: "Kalinga University, India",
    highlight: "Currently Studying",
  },
  {
    period: "2016 — 2023",
    title: "BSc Computer Science",
    institution: "Bayero University Kano",
    highlight: "First Class",
  },
  {
    period: "2013 — 2016",
    title: "Diploma in Computer Science",
    institution: "Kano State Polytechnic",
    highlight: "Distinction",
  },
  {
    period: "2007 — 2013",
    title: "Secondary School Education",
    institution: "GSS Shekar Barde",
  },
  {
    period: "2003 — 2007",
    title: "Primary School Education",
    institution: "Jaoji Special Primary School",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <p className="section-subtitle mb-4">Education</p>
          <h2 className="section-title">
            Academic background
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            A strong academic foundation in computer science, software engineering,
            and emerging technologies.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative border-l border-neutral-300 dark:border-neutral-700 ml-8">
            {education.map((edu, index) => (
                <FadeIn key={index}>
                <div className="mb-16 pl-8 relative">

                    {/* DOT (line fully masked) */}
                    <div className="absolute -left-[14px] top-1.5 w-7 h-7">
                    {/* line cover */}
                    <div className="absolute inset-0 rounded-full bg-white dark:bg-neutral-950" />

                    {/* blinking dot */}
                    <div
                        className="relative w-7 h-7 rounded-full 
                        bg-primary border-4 border-white dark:border-neutral-950 
                        animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.6)]"
                    />
                    </div>

                    <span className="text-sm font-semibold text-primary">
                    {edu.period}
                    </span>

                    <h3 className="text-2xl font-bold mt-2">
                    {edu.title}
                    </h3>

                    <p className="text-gray-500 dark:text-gray-400">
                    {edu.institution}
                    </p>

                    {edu.highlight && (
                    <span className="inline-block mt-3 px-4 py-1 rounded-full text-sm font-semibold bg-emerald-500/10 text-emerald-600">
                        {edu.highlight}
                    </span>
                    )}
                </div>
                </FadeIn>
            ))}
        </div>


      </div>
    </section>
  );
}
