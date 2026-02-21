import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience"},
  { id: "projects", label: "Projects" },
  { id: "open-source", label: "Open Source"},
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  // Close menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
      }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-neutral-950 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <img
          src="/code-bridge.jpeg"
          alt="CodeBridge Technology"
          className="h-12 rounded-full border"
        />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
                key={item.id}
                href={`#${item.id}`}
                className={`
                    relative font-medium transition-colors
                    ${active === item.id
                    ? "text-emerald-500"
                    : "text-gray-800 dark:text-gray-100 hover:text-emerald-500"
                    }
                    after:content-['']
                    after:absolute after:left-0 after:-bottom-1
                    after:h-0.5 after:w-full after:rounded-full
                    after:bg-emerald-500
                    after:origin-left
                    after:transition-transform after:duration-300
                    ${active === item.id
                    ? "after:scale-x-100"
                    : "after:scale-x-0 hover:after:scale-x-100"
                    }
                `}
                >
                {item.label}
                </a>

          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-950 shadow-md flex flex-col items-start  py-6 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className={`text-lg font-medium ms-5 ${
                active === item.id
                  ? "text-emerald-500"
                  : "text-gray-800 dark:text-gray-100"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
