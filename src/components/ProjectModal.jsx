import { useEffect } from "react"

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6"
      style={{ background: "rgba(0,0,0,0.7)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-2xl max-h-[92vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl"
        style={{ background: "#1c1c1e", border: "0.5px solid #3a3a3c" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-cover"
            style={{ maxHeight: 200, background: "#2c2c2e" }}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm"
            style={{ background: "#1c1c1e", border: "0.5px solid #3a3a3c", color: "#f5f5f7" }}
          >
            ✕
          </button>
        </div>

        <div className="p-5">
          <p className="text-[10px] uppercase tracking-wider mb-1" style={{ color: "#9a9a9c" }}>
            {project.year} · {project.client}
          </p>
          <h2 className="font-serif text-lg text-white leading-snug mb-1">
            {project.title}
          </h2>
          <p className="text-xs mb-4" style={{ color: "#9a9a9c" }}>
            {project.role} · {project.engine}
          </p>

          <div className="mb-4" style={{ borderTop: "0.5px solid #3a3a3c", paddingTop: 16 }}>
            <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: "#9a9a9c" }}>
              Overview
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#d0d0d2" }}>
              {project.overview}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-[10px] uppercase tracking-wider mb-3" style={{ color: "#9a9a9c" }}>
              My contributions
            </p>
            <div className="flex flex-col gap-3">
              {project.contributions.map((item, i) => (
                <div
                  key={i}
                  className="pl-3"
                  style={{ borderLeft: "2px solid #28c840" }}
                >
                  <p className="text-sm font-medium mb-1 text-white">{item.title}</p>
                  <p className="text-xs leading-relaxed" style={{ color: "#9a9a9c" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: "#9a9a9c" }}>
              Tech stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-3 py-1 rounded-full"
                  style={{ border: "0.5px solid #3a3a3c", color: "#d0d0d2" }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div style={{ borderTop: "0.5px solid #3a3a3c", paddingTop: 16 }}>
            <p className="text-[10px] uppercase tracking-wider mb-2" style={{ color: "#9a9a9c" }}>
              Project reel
            </p>
            <iframe
              src={project.reelUrl}
              title={`${project.title} reel`}
              className="w-full rounded-xl"
              style={{ height: 200, border: "0.5px solid #3a3a3c" }}
              allow="autoplay; fullscreen"
            />
            <button
              onClick={() => window.open(project.reelUrl, "_blank")}
              className="mt-3 text-xs px-4 py-2 rounded-full w-full text-center"
              style={{ border: "0.5px solid #3a3a3c", color: "#d0d0d2" }}
            >
              Open full project page →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
