import { experience } from "../data/experience"

export default function Experience() {
  return (
    <div className="overflow-x-hidden">
      <p className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-5">
        Experience
      </p>

      <div className="relative pl-6">
        <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-gray-300 dark:bg-gray-700" />

        <div className="flex flex-col gap-6">
          {experience.map((job) => (
            <div key={job.role} className="relative">
              <div
                className="absolute -left-6 top-1 w-2.5 h-2.5 rounded-full border-2 border-[var(--bg-page)] z-10"
                style={{ background: job.color }}
              />

              <div
                className={
                  job.current
                    ? "bg-gray-50 dark:bg-gray-800/60 rounded-xl p-3"
                    : ""
                }
              >
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">
                  {job.period}
                </p>
                <p className="text-sm font-medium text-[var(--text-main)]">
                  {job.role}
                  {job.current && (
                    <span className="ml-2 text-[10px] uppercase tracking-wide text-green-600 dark:text-green-400 align-middle">
                      Current
                    </span>
                  )}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{job.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}