import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        <span className="font-extrabold text-xl">
          <span className="text-emerald-600">Anas</span>.dev
        </span>

        <nav className="flex items-center gap-6">
          <a href="#projects" className="hover:text-emerald-500">Projects</a>
          <a href="#contact" className="hover:text-emerald-500">Contact</a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
