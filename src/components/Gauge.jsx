import { useEffect, useState } from "react"

const ARC_LENGTH = 125.6 // length of the semicircle path, used for the fill animation

function getColor(value) {
  if (value >= 70) return "#34c759" // green
  if (value >= 40) return "#ffcc00" // yellow
  return "#ff3b30" // red
}

export default function Gauge({ label, value }) {
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => setAnimatedValue(value), 100)
    return () => clearTimeout(timeout)
  }, [value])

  const filled = (animatedValue / 100) * ARC_LENGTH
  const color = getColor(value)

  return (
    <div className="text-center">
      <svg viewBox="0 0 100 56" className="w-full">
        <path
            d="M10,50 A40,40 0 0,1 90,50"
            fill="none"
            stroke="var(--gauge-track)"
            strokeWidth="8"
            strokeLinecap="round"
        />
        <path
          d="M10,50 A40,40 0 0,1 90,50"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={`${filled} ${ARC_LENGTH}`}
          style={{ transition: "stroke-dasharray 1s ease-out, stroke 1s ease-out" }}
        />
        <text x="50" y="44" textAnchor="middle" fontSize="15" fill="var(--gauge-text)">
         {Math.round(animatedValue)}%
        </text>
      </svg>
      <p className="text-xs text-gray-500 mt-0.5">{label}</p>
    </div>
  )
}