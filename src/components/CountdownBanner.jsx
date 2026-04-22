import { useState, useEffect } from 'react'
import AnimatedSection from './AnimatedSection'
import { WEDDING_DATE, assetUrl } from '../config'

function calc() {
  const d = WEDDING_DATE - new Date()
  if (d <= 0) return { d: 0, h: 0, m: 0, s: 0 }
  return {
    d: Math.floor(d / 86400000),
    h: Math.floor((d % 86400000) / 3600000),
    m: Math.floor((d % 3600000) / 60000),
    s: Math.floor((d % 60000) / 1000),
  }
}

export default function CountdownBanner() {
  const [t, setT] = useState(calc)

  useEffect(() => {
    const id = setInterval(() => setT(calc), 1000)
    return () => clearInterval(id)
  }, [])

  const pad = n => String(n).padStart(2, '0')

  return (
    <div className="countdown-banner">
      <img className="countdown-banner__img" src={assetUrl('engagement-2.jpg')} alt="" />
      <div className="countdown-banner__overlay">
        <AnimatedSection>
          <p className="countdown-banner__title">До встречи через:</p>
          <div className="countdown-timer">
            <div className="cd-item">
              <span className="cd-num">{t.d}</span>
              <span className="cd-label">дней</span>
            </div>
            <div className="cd-item">
              <span className="cd-num">{pad(t.h)}</span>
              <span className="cd-label">часов</span>
            </div>
            <div className="cd-item">
              <span className="cd-num">{pad(t.m)}</span>
              <span className="cd-label">минут</span>
            </div>
            <div className="cd-item">
              <span className="cd-num">{pad(t.s)}</span>
              <span className="cd-label">секунд</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
