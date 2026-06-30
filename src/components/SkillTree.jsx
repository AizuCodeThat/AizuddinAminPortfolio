import { useRef, useState, useEffect } from "react"
import { skillNodes, branchColors } from "../data/skillTree"

const IDLE_RESET_MS = 6000
const DEFAULT_TRANSFORM = { x: 0, y: 0, scale: 1 }

function getTouchDistance(touches) {
  const dx = touches[0].clientX - touches[1].clientX
  const dy = touches[0].clientY - touches[1].clientY
  return Math.sqrt(dx * dx + dy * dy)
}

function getTouchMidpoint(touches) {
  return {
    x: (touches[0].clientX + touches[1].clientX) / 2,
    y: (touches[0].clientY + touches[1].clientY) / 2,
  }
}

export default function SkillTree() {
  const containerRef = useRef(null)
  const lastPos = useRef({ x: 0, y: 0 })
  const idleTimer = useRef(null)
  const pinchStartDistance = useRef(null)
  const pinchStartScale = useRef(1)

  const [transform, setTransform] = useState(DEFAULT_TRANSFORM)
  const [dragging, setDragging] = useState(false)
  const [pinching, setPinching] = useState(false)
  const [hovered, setHovered] = useState(null)
  const [isInside, setIsInside] = useState(false)

  function recenter() {
    setTransform(DEFAULT_TRANSFORM)
  }

  function resetIdleTimer() {
    if (idleTimer.current) clearTimeout(idleTimer.current)
    idleTimer.current = setTimeout(() => {
      recenter()
    }, IDLE_RESET_MS)
  }

  useEffect(() => {
    resetIdleTimer()
    return () => clearTimeout(idleTimer.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleMouseDown(e) {
    setDragging(true)
    lastPos.current = { x: e.clientX, y: e.clientY }
    resetIdleTimer()
  }

  function handleMouseMove(e) {
    if (!dragging || !isInside) return
    const dx = e.clientX - lastPos.current.x
    const dy = e.clientY - lastPos.current.y
    lastPos.current = { x: e.clientX, y: e.clientY }
    setTransform((t) => ({ ...t, x: t.x + dx, y: t.y + dy }))
    resetIdleTimer()
  }

  function handleWheel(e) {
    if (!isInside) return
    e.preventDefault()
    e.stopPropagation()
    const delta = e.deltaY > 0 ? -0.05 : 0.05
    setTransform((t) => ({
      ...t,
      scale: Math.min(1.6, Math.max(0.4, t.scale + delta)),
    }))
    resetIdleTimer()
  }

  function handleTouchStart(e) {
    setIsInside(true)
    resetIdleTimer()

    if (e.touches.length === 2) {
      // two fingers down — start a pinch gesture, cancel any single-finger drag
      setDragging(false)
      setPinching(true)
      pinchStartDistance.current = getTouchDistance(e.touches)
      pinchStartScale.current = transform.scale
    } else if (e.touches.length === 1) {
      setDragging(true)
      setPinching(false)
      lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
  }

  function handleTouchMove(e) {
    e.preventDefault() // stop the page itself from scrolling/zooming during the gesture

    if (e.touches.length === 2 && pinching) {
      const newDistance = getTouchDistance(e.touches)
      const ratio = newDistance / pinchStartDistance.current
      const newScale = Math.min(1.6, Math.max(0.4, pinchStartScale.current * ratio))
      setTransform((t) => ({ ...t, scale: newScale }))
      resetIdleTimer()
      return
    }

    if (e.touches.length === 1 && dragging) {
      const touch = e.touches[0]
      const dx = touch.clientX - lastPos.current.x
      const dy = touch.clientY - lastPos.current.y
      lastPos.current = { x: touch.clientX, y: touch.clientY }
      setTransform((t) => ({ ...t, x: t.x + dx, y: t.y + dy }))
      resetIdleTimer()
    }
  }

  function handleTouchEnd(e) {
    if (e.touches.length === 0) {
      setDragging(false)
      setPinching(false)
    } else if (e.touches.length === 1) {
      // lifted one finger out of two — switch back to single-finger drag
      setPinching(false)
      setDragging(true)
      lastPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
    resetIdleTimer()
  }

  const nodeById = Object.fromEntries(skillNodes.map((n) => [n.id, n]))

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => {
        setIsInside(false)
        setDragging(false)
        setHovered(null)
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={() => setDragging(false)}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none touch-none min-w-0"
      style={{ background: "radial-gradient(circle at 50% 40%, #1c1c1e 0%, #0a0a0b 100%)" }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1000 640"
        style={{
          transform: `translate(${transform.x}px, ${transform.y}px) scale(${transform.scale})`,
          transformOrigin: "center center",
          transition: dragging || pinching ? "none" : "transform 0.6s ease-out",
        }}
      >
        {skillNodes
          .filter((n) => n.parent)
          .map((n) => {
            const parent = nodeById[n.parent]
            const color = branchColors[n.branch]
            const dimmed = hovered && hovered !== n.branch
            return (
              <line
                key={`line-${n.id}`}
                x1={parent.x}
                y1={parent.y}
                x2={n.x}
                y2={n.y}
                stroke={color}
                strokeWidth={hovered === n.branch ? 2.5 : 1.5}
                opacity={dimmed ? 0.15 : 0.6}
              />
            )
          })}

        {skillNodes.map((n) => {
          const color = branchColors[n.branch]
          const dimmed = hovered && hovered !== n.branch && n.branch !== "root"
          return (
            <g
              key={n.id}
              onMouseEnter={() => setHovered(n.branch)}
              onMouseLeave={() => setHovered(null)}
              style={{ cursor: "pointer" }}
            >
              <circle
                cx={n.x}
                cy={n.y}
                r={n.branch === "root" ? 28 : 22}
                fill="#1c1c1e"
                stroke={color}
                strokeWidth="2"
                opacity={dimmed ? 0.35 : 1}
                style={{
                  filter: dimmed ? "none" : `drop-shadow(0 0 8px ${color}99)`,
                  transition: "filter 0.2s, opacity 0.2s",
                }}
              />
              <text
                x={n.x}
                y={n.y + (n.branch === "root" ? 42 : 36)}
                textAnchor="middle"
                fontSize="12"
                fill="#f5f5f7"
                opacity={dimmed ? 0.4 : 1}
              >
                {n.label}
              </text>
            </g>
          )
        })}
      </svg>

      <button
        onClick={(e) => {
          e.stopPropagation()
          recenter()
          resetIdleTimer()
        }}
        className="absolute bottom-3 left-3 text-[11px] px-2.5 py-1 rounded-full border border-gray-600 text-gray-300 hover:bg-gray-800"
      >
        Recenter
      </button>

      <div className="absolute bottom-3 right-3 text-[11px] text-gray-400">
        Drag to pan · pinch or scroll to zoom
      </div>
    </div>
  )
}
