export function OrnamentDivider({ className = '' }) {
  return (
    <div className={`ornament-divider ${className}`}>
      <svg viewBox="0 0 600 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="ornament-svg">
        {/* Center diamond */}
        <path d="M300 8 L310 30 L300 52 L290 30 Z" fill="currentColor" opacity="0.15" />
        <path d="M300 14 L306 30 L300 46 L294 30 Z" fill="currentColor" opacity="0.3" />

        {/* Inner curls - left */}
        <path d="M280 30 Q270 10 250 18 Q235 24 240 30 Q235 36 250 42 Q270 50 280 30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25" />
        <path d="M240 30 Q230 16 215 22 Q205 26 210 30 Q205 34 215 38 Q230 44 240 30" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.18" />
        <path d="M210 30 Q202 20 190 25 Q183 28 186 30 Q183 32 190 35 Q202 40 210 30" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.12" />

        {/* Inner curls - right */}
        <path d="M320 30 Q330 10 350 18 Q365 24 360 30 Q365 36 350 42 Q330 50 320 30" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.25" />
        <path d="M360 30 Q370 16 385 22 Q395 26 390 30 Q395 34 385 38 Q370 44 360 30" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.18" />
        <path d="M390 30 Q398 20 410 25 Q417 28 414 30 Q417 32 410 35 Q398 40 390 30" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.12" />

        {/* Extended lines */}
        <line x1="160" y1="30" x2="185" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
        <line x1="415" y1="30" x2="440" y2="30" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />

        {/* Outer dots */}
        <circle cx="155" cy="30" r="2" fill="currentColor" opacity="0.12" />
        <circle cx="445" cy="30" r="2" fill="currentColor" opacity="0.12" />
        <circle cx="145" cy="30" r="1" fill="currentColor" opacity="0.08" />
        <circle cx="455" cy="30" r="1" fill="currentColor" opacity="0.08" />
      </svg>
    </div>
  )
}

export function CornerOrnament({ position = 'top-left' }) {
  const isTop = position.includes('top')
  const isLeft = position.includes('left')
  const scaleX = isLeft ? 1 : -1
  const scaleY = isTop ? 1 : -1

  return (
    <svg
      className={`corner-ornament corner-${position}`}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `scale(${scaleX}, ${scaleY})` }}
    >
      <path d="M10 5 Q10 60 60 60 Q30 60 30 30 Q30 15 10 5" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.15" />
      <path d="M5 15 Q15 70 70 70 Q35 65 25 40 Q18 20 5 15" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.1" />
      <path d="M15 2 Q8 8 5 20" stroke="currentColor" strokeWidth="0.6" fill="none" opacity="0.12" />
      <circle cx="8" cy="3" r="1.5" fill="currentColor" opacity="0.1" />
      <path d="M60 60 Q70 55 75 45 Q72 55 60 60" stroke="currentColor" strokeWidth="0.5" fill="currentColor" opacity="0.08" />
    </svg>
  )
}

export function SectionFrame({ children }) {
  return (
    <div className="section-frame">
      <CornerOrnament position="top-left" />
      <CornerOrnament position="top-right" />
      <CornerOrnament position="bottom-left" />
      <CornerOrnament position="bottom-right" />
      {children}
    </div>
  )
}
