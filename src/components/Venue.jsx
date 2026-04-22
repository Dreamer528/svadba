import AnimatedSection from './AnimatedSection'
import { assetUrl } from '../config'

const venuePhotos = [
  'venue-1.jpg',
  'venue-2.jpg',
  'venue-3.jpg',
  'venue-4.jpg',
]

export default function Venue() {
  return (
    <section className="venue-section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading">Место проведения</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="venue-address">
            ЗАГС №1, Социалистический проспект, 59, г. Барнаул
          </p>
          <a
            href="https://yandex.ru/maps/?text=Барнаул+Социалистический+проспект+59"
            target="_blank"
            rel="noopener noreferrer"
            className="round-btn"
          >
            Построить<br />маршрут
          </a>
        </AnimatedSection>
        <AnimatedSection delay={0.3}>
          <div className="venue-gallery">
            {venuePhotos.map((photo, index) => (
              <img
                key={photo}
                src={assetUrl(photo)}
                alt={`Место проведения ${index + 1}`}
                loading="lazy"
              />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
