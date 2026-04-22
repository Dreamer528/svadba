import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.p className="hero-label"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}>
          Приглашение на свадьбу
        </motion.p>
        <motion.div className="hero-names"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.6 }}>
          <span className="name">Владислав</span>
          <span className="amp">&</span>
          <span className="name">Любовь</span>
        </motion.div>
        <motion.p className="hero-date"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}>
          17 / 07 / 2026
        </motion.p>
        <motion.div className="scroll-hint"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
