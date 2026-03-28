import { useState, useEffect, useRef, type CSSProperties } from 'react'

const DEFAULT_BEAM_COUNT = 60

interface Beam {
  id: number
  style: CSSProperties
}

function generateBeams(count: number): Beam[] {
  return Array.from({ length: count }, (_, i) => {
    const riseDur = Math.random() * 2 + 4
    const dropDur = Math.random() * 3 + 3
    return {
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        width: `${Math.floor(Math.random() * 3) + 1}px`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${riseDur}s, ${riseDur}s, ${dropDur}s`,
      },
    }
  })
}

export default function BackgroundScene({ beamCount = DEFAULT_BEAM_COUNT }: { beamCount?: number }) {
  const isMobile = useRef(window.matchMedia('(max-width: 768px)').matches)
  const effectiveCount = isMobile.current ? Math.min(beamCount, 20) : beamCount
  const [beams, setBeams] = useState<Beam[]>([])

  useEffect(() => {
    setBeams(generateBeams(effectiveCount))
  }, [effectiveCount])

  return (
    <div className="scene" role="img" aria-label="Animated digital data background">
      <div className="grid-terrain" />
      <div className="floor" />
      <div className="main-column" />
      <div className="light-stream-container">
        {beams.map((beam) => (
          <div key={beam.id} className="light-beam" style={beam.style} />
        ))}
      </div>
    </div>
  )
}
