import { useState, useRef } from "react"
import { toPng } from "html-to-image"
import Gauge from "./Gauge"

const skills = [
  { label: "Game dev", value: 90 },
  { label: "Full-stack", value: 80 },
  { label: "Networking", value: 65 },
  { label: "Security", value: 50 },
]

function statColor(value) {
  if (value >= 70) return "#34c759"
  if (value >= 40) return "#ffcc00"
  return "#ff3b30"
}

function CardBackContent() {
  return (
    <div
      className="rounded-2xl p-5 relative"
      style={{
        background: "linear-gradient(145deg, #3a3a3c 0%, #2c2c2e 45%, #1c1c1e 100%)",
        border: "1px solid #48484a",
        width: 320,
      }}
    >
      <div className="flex gap-1.5 absolute top-4 right-4">
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
        <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
      </div>

      <div className="flex gap-3">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-14 h-14 rounded-full object-cover border-2"
          style={{ borderColor: "#48484a" }}
        />
        <div>
          <p className="text-sm font-medium text-white">Dummy Name</p>
          <p className="text-[10px] uppercase tracking-wide mt-1" style={{ color: "#9a9a9c" }}>
            Job class
          </p>
          <h3 className="text-[13px] font-serif text-white leading-snug">
            Interactive media &amp; game developer
          </h3>
          <p className="text-[10px]" style={{ color: "#34c759" }}>
            Level 3 — Junior
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 mt-3">
        {skills.map((skill) => (
          <div key={skill.label}>
            <div className="flex justify-between text-[10px] mb-0.5" style={{ color: "#d0d0d2" }}>
              <span>{skill.label}</span>
              <span>{skill.value}</span>
            </div>
            <div className="h-1 rounded-full" style={{ background: "#48484a" }}>
              <div
                className="h-full rounded-full"
                style={{ width: `${skill.value}%`, background: statColor(skill.value) }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-3">
        <span className="text-[10px]" style={{ color: "#7a7a7c" }}>
          Portfolio business card
        </span>
        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=64x64&data=https://aizuddin-amin-portfolio.vercel.app/"
          alt="QR code to portfolio"
          className="w-10 h-10 rounded-md"
        />
      </div>
    </div>
  )
}

export default function Hero() {
  const [flipped, setFlipped] = useState(false)
  const downloadRef = useRef(null)

  function downloadCard() {
    if (!downloadRef.current) return
    toPng(downloadRef.current, { pixelRatio: 2 })
      .then((dataUrl) => {
        const link = document.createElement("a")
        link.download = "AizuddinAminBC.png"
        link.href = dataUrl
        link.click()
      })
      .catch((err) => console.error("Card export failed:", err))
  }

  return (
    <section className="grid md:grid-cols-[1.2fr_1fr] gap-6 md:gap-9 px-5 sm:px-8 py-10 md:py-16 items-center">
      <div>
        <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
          Software engineer — interactive systems
        </p>
        <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight mb-5">
          Building real-time software for large-scale public installations.
        </h1>
        <p className="text-sm text-gray-600 max-w-md mb-6">
          Full-stack and game developer specialising in cross-platform
          interactive media, network systems, and a growing focus on
          cybersecurity engineering.
        </p>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={() => document.getElementById("work").scrollIntoView({ behavior: "smooth" })}
            className="bg-black dark:bg-white text-white dark:text-black px-5 py-2 text-sm rounded-full"
          >
            View work
          </button>
          <button
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="border border-gray-300 dark:border-gray-600 dark:text-white px-5 py-2 text-sm rounded-full"
          >
            Download resume
          </button>
        </div>
      </div>

      <div
        className={`flip-card h-80 sm:h-72 cursor-pointer ${flipped ? "flipped" : ""}`}
        onClick={() => setFlipped(!flipped)}
      >
        <div className="flip-card-inner">

          <div
            className="flip-card-face rounded-2xl p-5"
            style={{
              background: "var(--gauge-card-gradient)",
              border: "1px solid var(--gauge-card-border)",
            }}
          >
            <div className="flex gap-1.5 absolute top-4 right-4">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
            </div>
            <p className="text-xs uppercase tracking-wide mb-4" style={{ color: "var(--gauge-label-color)" }}>
              Skill focus
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              {skills.map((skill) => (
                <Gauge key={skill.label} label={skill.label} value={skill.value} />
              ))}
            </div>
            <p className="text-[10px] text-center mt-3" style={{ color: "var(--gauge-label-color)" }}>
              Tap to flip
            </p>
          </div>

          <div
            className="flip-card-face flip-card-back rounded-2xl p-5"
            style={{
              background: "linear-gradient(145deg, #3a3a3c 0%, #2c2c2e 45%, #1c1c1e 100%)",
              border: "1px solid #48484a",
            }}
          >
            <div className="flex gap-1.5 absolute top-4 right-4">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
            </div>

            <div className="flex gap-3">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover border-2"
                style={{ borderColor: "#48484a" }}
              />
              <div>
                <p className="text-sm font-medium text-white">Aizuddin Amin</p>
                <p className="text-[10px] uppercase tracking-wide mt-1" style={{ color: "#9a9a9c" }}>
                  Job class
                </p>
                <h3 className="text-[13px] font-serif text-white leading-snug">
                  Interactive media &amp; game developer
                </h3>
                <p className="text-[10px]" style={{ color: "#34c759" }}>
                  Level 3 — Junior
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1.5 mt-3">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-[10px] mb-0.5" style={{ color: "#d0d0d2" }}>
                    <span>{skill.label}</span>
                    <span>{skill.value}</span>
                  </div>
                  <div className="h-1 rounded-full" style={{ background: "#48484a" }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${skill.value}%`, background: statColor(skill.value) }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-3">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  downloadCard()
                }}
                className="text-[10px] px-3 py-1.5 rounded-full border"
                style={{ color: "#d0d0d2", borderColor: "#48484a" }}
              >
                Download card
              </button>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=64x64&data=https://aizuddin-amin-portfolio.vercel.app/"
                alt="QR code to portfolio"
                className="w-10 h-10 rounded-md"
              />
            </div>
          </div>

        </div>
      </div>

      <div style={{ position: "absolute", left: "-9999px", top: 0 }}>
        <div ref={downloadRef}>
          <CardBackContent />
        </div>
      </div>
    </section>
  )
}
