import AnimatedSection from './AnimatedSection'

export default function Details() {
  return (
    <section className="section details">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Место проведения</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="details-venue">
            <p className="details-label">Торжественная церемония</p>
            <p className="details-name">ЗАГС №1 г. Барнаул</p>
            <p className="details-address">Социалистический проспект, 59</p>
            <a
              href="https://yandex.ru/maps/?text=Барнаул+Социалистический+проспект+59"
              target="_blank"
              rel="noopener noreferrer"
              className="details-link"
            >
              Открыть на карте
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="details-info-grid">
            <div className="details-info-item">
              <h3>Дата</h3>
              <p>17.07.2026</p>
            </div>
            <div className="details-info-item">
              <h3>Начало</h3>
              <p>14:30</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
