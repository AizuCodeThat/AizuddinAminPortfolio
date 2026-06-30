import { projects } from "../data/projects"

export default function Work() {
  return (
    <section id="work" className="px-5 sm:px-8 py-12">
      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-5">
        Selected work
      </p>
      <div className="flex flex-col">
        {projects.map((project) => (
          <div
            key={project.title}
            onClick={() => window.open(project.link, "_blank")}
            className="grid grid-cols-[80px_1fr_auto] sm:grid-cols-[120px_1fr_auto] gap-3 sm:gap-5 items-center py-5 border-t border-gray-200 dark:border-gray-800 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-14 sm:h-16 w-full object-cover rounded-xl bg-gray-100 dark:bg-gray-800 text-[0px]"
            />
            <div>
              <p className="text-sm font-medium text-[var(--text-main)]">{project.title}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{project.tag}</p>
            </div>
            <span className="text-[var(--text-main)]">→</span>
          </div>
        ))}
      </div>
    </section>
  )
}