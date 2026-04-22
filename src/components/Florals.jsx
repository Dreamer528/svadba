import { motion } from 'framer-motion'

/* ---- Individual flower/leaf components ---- */

function Rose({ size = 80, style, className = '' }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={style} className={`floral ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Outer petals */}
      <path d="M50 15 Q70 25 72 50 Q70 70 50 78 Q30 70 28 50 Q30 25 50 15"
        fill="#9B2D42" fillOpacity="0.12" stroke="#7A1B2D" strokeWidth="0.4" strokeOpacity="0.2" />
      <path d="M50 18 Q65 30 66 48 Q64 64 50 72 Q36 64 34 48 Q36 30 50 18"
        fill="#7A1B2D" fillOpacity="0.08" stroke="#7A1B2D" strokeWidth="0.3" strokeOpacity="0.15" />
      {/* Inner spiral petals */}
      <path d="M50 28 Q60 32 62 46 Q58 58 50 62 Q42 58 38 46 Q40 32 50 28"
        fill="#9B6B7D" fillOpacity="0.1" stroke="#7A1B2D" strokeWidth="0.3" strokeOpacity="0.12" />
      <path d="M50 34 Q56 38 57 47 Q55 54 50 56 Q45 54 43 47 Q44 38 50 34"
        fill="#7A1B2D" fillOpacity="0.06" stroke="#7A1B2D" strokeWidth="0.2" strokeOpacity="0.1" />
      {/* Center */}
      <circle cx="50" cy="46" r="4" fill="#7A1B2D" fillOpacity="0.08" />
      {/* Stem */}
      <path d="M50 78 Q48 88 50 98" stroke="#6B7A5A" strokeWidth="0.8" strokeOpacity="0.2" fill="none" />
      {/* Small leaf on stem */}
      <path d="M50 85 Q56 80 60 82 Q54 86 50 85" fill="#6B7A5A" fillOpacity="0.12" stroke="#6B7A5A" strokeWidth="0.3" strokeOpacity="0.15" />
    </svg>
  )
}

function Peony({ size = 90, style, className = '' }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} style={style} className={`floral ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Lush outer petals */}
      <path d="M60 10 Q85 20 90 55 Q85 85 60 95 Q35 85 30 55 Q35 20 60 10"
        fill="#9B6B7D" fillOpacity="0.08" stroke="#9B6B7D" strokeWidth="0.4" strokeOpacity="0.12" />
      <path d="M60 8 Q80 15 88 40 Q92 60 80 80 Q70 90 60 92"
        fill="none" stroke="#7A1B2D" strokeWidth="0.3" strokeOpacity="0.1" />
      <path d="M60 8 Q40 15 32 40 Q28 60 40 80 Q50 90 60 92"
        fill="none" stroke="#7A1B2D" strokeWidth="0.3" strokeOpacity="0.1" />
      {/* Mid petals */}
      <path d="M60 20 Q78 28 80 52 Q78 74 60 82 Q42 74 40 52 Q42 28 60 20"
        fill="#7A1B2D" fillOpacity="0.06" stroke="#7A1B2D" strokeWidth="0.3" strokeOpacity="0.1" />
      {/* Inner */}
      <path d="M60 32 Q70 38 72 52 Q70 66 60 70 Q50 66 48 52 Q50 38 60 32"
        fill="#9B2D42" fillOpacity="0.06" stroke="#7A1B2D" strokeWidth="0.2" strokeOpacity="0.08" />
      <ellipse cx="60" cy="52" rx="6" ry="5" fill="#B8976A" fillOpacity="0.06" />
    </svg>
  )
}

function Bud({ size = 40, style, className = '' }) {
  return (
    <svg viewBox="0 0 40 60" width={size * 0.67} height={size} style={style} className={`floral ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Bud */}
      <path d="M20 5 Q28 12 28 25 Q28 35 20 40 Q12 35 12 25 Q12 12 20 5"
        fill="#9B6B7D" fillOpacity="0.12" stroke="#7A1B2D" strokeWidth="0.4" strokeOpacity="0.15" />
      <path d="M20 8 Q25 14 25 24 Q25 32 20 36 Q15 32 15 24 Q15 14 20 8"
        fill="#7A1B2D" fillOpacity="0.06" />
      {/* Stem */}
      <path d="M20 40 Q18 50 20 58" stroke="#6B7A5A" strokeWidth="0.7" strokeOpacity="0.2" fill="none" />
      {/* Leaf */}
      <path d="M20 48 Q14 44 10 46 Q15 50 20 48" fill="#6B7A5A" fillOpacity="0.12" />
    </svg>
  )
}

function EucalyptusLeaf({ size = 100, style, className = '' }) {
  return (
    <svg viewBox="0 0 60 140" width={size * 0.43} height={size} style={style} className={`floral ${className}`} xmlns="http://www.w3.org/2000/svg">
      {/* Main stem */}
      <path d="M30 5 Q28 70 30 135" stroke="#7B8E6B" strokeWidth="0.7" strokeOpacity="0.2" fill="none" />
      {/* Leaf pairs */}
      <ellipse cx="22" cy="20" rx="12" ry="7" transform="rotate(-25 22 20)" fill="#7B8E6B" fillOpacity="0.08" stroke="#7B8E6B" strokeWidth="0.3" strokeOpacity="0.1" />
      <ellipse cx="38" cy="30" rx="12" ry="7" transform="rotate(25 38 30)" fill="#7B8E6B" fillOpacity="0.06" stroke="#7B8E6B" strokeWidth="0.3" strokeOpacity="0.08" />
      <ellipse cx="20" cy="45" rx="11" ry="6.5" transform="rotate(-20 20 45)" fill="#8B9B7B" fillOpacity="0.07" stroke="#7B8E6B" strokeWidth="0.3" strokeOpacity="0.09" />
      <ellipse cx="40" cy="55" rx="11" ry="6.5" transform="rotate(20 40 55)" fill="#7B8E6B" fillOpacity="0.06" stroke="#7B8E6B" strokeWidth="0.3" strokeOpacity="0.08" />
      <ellipse cx="22" cy="70" rx="10" ry="6" transform="rotate(-15 22 70)" fill="#8B9B7B" fillOpacity="0.06" stroke="#7B8E6B" strokeWidth="0.2" strokeOpacity="0.08" />
      <ellipse cx="38" cy="80" rx="10" ry="6" transform="rotate(15 38 80)" fill="#7B8E6B" fillOpacity="0.05" stroke="#7B8E6B" strokeWidth="0.2" strokeOpacity="0.07" />
      <ellipse cx="24" cy="95" rx="9" ry="5.5" transform="rotate(-10 24 95)" fill="#8B9B7B" fillOpacity="0.05" stroke="#7B8E6B" strokeWidth="0.2" strokeOpacity="0.06" />
      <ellipse cx="36" cy="105" rx="9" ry="5.5" transform="rotate(10 36 105)" fill="#7B8E6B" fillOpacity="0.04" stroke="#7B8E6B" strokeWidth="0.2" strokeOpacity="0.06" />
      <ellipse cx="28" cy="120" rx="7" ry="4.5" transform="rotate(-5 28 120)" fill="#8B9B7B" fillOpacity="0.04" />
    </svg>
  )
}

function SmallLeaf({ size = 50, style, className = '' }) {
  return (
    <svg viewBox="0 0 50 30" width={size} height={size * 0.6} style={style} className={`floral ${className}`} xmlns="http://www.w3.org/2000/svg">
      <path d="M5 15 Q15 2 30 5 Q45 8 48 15 Q45 22 30 25 Q15 28 5 15"
        fill="#7B8E6B" fillOpacity="0.08" stroke="#6B7A5A" strokeWidth="0.4" strokeOpacity="0.12" />
      <path d="M5 15 Q25 14 48 15" stroke="#6B7A5A" strokeWidth="0.3" strokeOpacity="0.1" fill="none" />
    </svg>
  )
}

/* ---- Floral arrangements ---- */

export function HeroFlorals() {
  return (
    <>
      {/* Top-left cluster */}
      <motion.div
        className="floral-cluster floral-top-left"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <Rose size={85} className="fl-1" />
        <Peony size={70} className="fl-2" />
        <Bud size={35} className="fl-3" />
        <EucalyptusLeaf size={110} className="fl-4" />
        <SmallLeaf size={45} className="fl-5" />
        <Bud size={28} className="fl-6" />
      </motion.div>

      {/* Bottom-right cluster */}
      <motion.div
        className="floral-cluster floral-bottom-right"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.8 }}
      >
        <Peony size={95} className="fl-1" />
        <Rose size={75} className="fl-2" />
        <Bud size={38} className="fl-3" />
        <EucalyptusLeaf size={120} className="fl-4" />
        <SmallLeaf size={50} className="fl-5" />
        <Rose size={55} className="fl-6" />
      </motion.div>

      {/* Scattered small elements */}
      <motion.div
        className="floral-scatter floral-top-right"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.2 }}
      >
        <EucalyptusLeaf size={80} className="fl-1" />
        <Bud size={30} className="fl-2" />
        <SmallLeaf size={40} className="fl-3" />
      </motion.div>

      <motion.div
        className="floral-scatter floral-bottom-left"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.4 }}
      >
        <EucalyptusLeaf size={90} className="fl-1" />
        <Bud size={32} className="fl-2" />
        <SmallLeaf size={38} className="fl-3" />
      </motion.div>
    </>
  )
}

export function SectionFlorals({ position = 'left' }) {
  const isLeft = position === 'left'
  return (
    <div className={`section-florals section-florals-${position}`}>
      <Rose size={isLeft ? 60 : 50} className="sf-1" />
      <EucalyptusLeaf size={isLeft ? 80 : 70} className="sf-2" />
      <Bud size={25} className="sf-3" />
    </div>
  )
}
