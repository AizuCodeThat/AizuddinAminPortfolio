import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true) // default to dark, per your preference

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) setIsDark(saved === "dark")
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? "☀" : "🌙"}
    </button>
  )
}