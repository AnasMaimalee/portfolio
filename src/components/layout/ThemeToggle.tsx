import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") {
      document.documentElement.classList.add("dark")
      setDark(true)
    }
  }, [])

  function toggleTheme() {
    if (dark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    setDark(!dark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-xl px-4 py-2 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition"
    >
      {dark ? "☀ Light" : "🌙 Dark"}
    </button>
  )
}
