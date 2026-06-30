import { useState } from "react"
import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: "#work", label: "Work" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 relative">
      <div className="flex items-center justify-between px-5 sm:px-8 py-5">
        <span className="font-serif text-base text-[var(--text-main)]">Aizuddin Amin</span>

        <div className="hidden sm:flex items-center gap-7 text-sm text-gray-600 dark:text-gray-300">
          {links.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
          {/* <ThemeToggle /> */}
        </div>

        <div className="flex items-center gap-3 sm:hidden">
          {/* <ThemeToggle /> */}
          <button
            onClick={() => setOpen(!open)}
            className="text-[var(--text-main)] text-2xl leading-none w-9 h-9 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="sm:hidden flex flex-col gap-4 px-5 pb-5 text-sm text-gray-600 dark:text-gray-300">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}