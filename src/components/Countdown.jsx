import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { WEDDING_DATE } from '../config'

function calcTimeLeft() {
  const diff = WEDDING_DATE - new Date()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  }
}

function CountdownItem({ value, label }) {
  return (
    <div className="countdown-item">
      <motion.span
        className="countdown-number"
        key={value}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {typeof value === 'number' && label !== 'days'
          ? String(value).padStart(2, '0')
          : value}
      </motion.span>
      <span className="countdown-label">{label}</span>
    </div>
  )
}

export default function Countdown() {
  const [time, setTime] = useState(calcTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => setTime(calcTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="countdown" className="section countdown">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">До нашей свадьбы</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="countdown-timer">
            <CountdownItem value={time.days} label="дней" />
            <div className="countdown-separator">:</div>
            <CountdownItem value={time.hours} label="часов" />
            <div className="countdown-separator">:</div>
            <CountdownItem value={time.minutes} label="минут" />
            <div className="countdown-separator">:</div>
            <CountdownItem value={time.seconds} label="секунд" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
