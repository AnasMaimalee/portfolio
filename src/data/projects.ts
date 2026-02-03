export type Project = {
  title: string
  description: string
  stack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: "Full-Stack Web Application",
    description:
      "A production-ready application built with Laravel backend and Vue.js frontend, including authentication and REST APIs.",
    stack: ["Laravel", "PHP", "Vue.js", "MySQL"]
  },
  {
    title: "Modern React Portfolio",
    description:
      "A clean, responsive portfolio website with dark/light mode and component-driven architecture.",
    stack: ["React", "TypeScript", "Tailwind CSS"]
  }
]
