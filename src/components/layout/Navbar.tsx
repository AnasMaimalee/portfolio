import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu when window resizes above md
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-neutral-950 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <img src="/code-bridge.jpg" alt="CodeBridge Technology" className="h-12 border rounded-full" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-gray-800 dark:text-gray-100 font-medium hover:text-emerald-500 transition">About</a>
          <a href="#projects" className="text-gray-800 dark:text-gray-100 font-medium hover:text-emerald-500 transition">Projects</a>
          <a href="#skills" className="text-gray-800 dark:text-gray-100 font-medium hover:text-emerald-500 transition">Skills</a>
          <a href="#education" className="text-gray-800 dark:text-gray-100 font-medium hover:text-emerald-500 transition">Education</a>
          <a href="#contact" className="text-gray-800 dark:text-gray-100 font-medium hover:text-emerald-500 transition">Contact</a>
          <ThemeToggle />
        </nav>

        {/* Mobile: theme + hamburger */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-950 shadow-md flex flex-col items-center py-6 space-y-6">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-800 dark:text-gray-100 font-medium text-lg">About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-gray-800 dark:text-gray-100 font-medium text-lg">Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="text-gray-800 dark:text-gray-100 font-medium text-lg">Skills</a>
          <a href="#education" onClick={() => setMenuOpen(false)} className="text-gray-800 dark:text-gray-100 font-medium text-lg">Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-800 dark:text-gray-100 font-medium text-lg">Contact</a>
        </div>
      )}
    </header>
  );
}
