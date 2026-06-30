const stats = [
  { value: "3+", label: "Years building" },
  { value: "4", label: "Public installations" },
  { value: "4", label: "Google certifications" },
  { value: "8+", label: "Languages & tools" },
]

export default function Stats() {
  return (
    <section className="px-5 sm:px-8 py-2">
      <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-gray-200 dark:border-gray-800">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="py-5 text-center border-r border-gray-200 dark:border-gray-800 last:border-r-0"
          >
            <p className="text-xl text-[var(--text-main)]">{stat.value}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}