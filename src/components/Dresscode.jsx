import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const colors = [
  { hex: '#6B0F1A', name: 'Бордо' },
  { hex: '#1a1a2e', name: 'Тёмно-синий' },
  { hex: '#1B6B4A', name: 'Изумруд' },
  { hex: '#3E2723', name: 'Коричневый' },
  { hex: '#0D0A0B', name: 'Чёрный' },
]

export default function Dresscode() {
  return (
    <section className="dresscode-section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading">Дресс-код</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="dresscode-text">
            Мы будем очень благодарны, если вы поддержите цветовую палитру нашей свадьбы.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <div className="dresscode-swatches">
            {colors.map((c, i) => (
              <motion.div
                key={i}
                className="swatch"
                style={{ background: c.hex }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.2 }}
                title={c.name}
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
