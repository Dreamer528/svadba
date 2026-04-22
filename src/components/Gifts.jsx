import AnimatedSection from './AnimatedSection'
import { assetUrl } from '../config'

export default function Gifts() {
  return (
    <section className="gifts-section">
      <div className="gifts-photo" style={{ backgroundImage: `url(${assetUrl('engagement-2.jpg')})` }} />
      <div className="gifts-content">
        <AnimatedSection>
          <h2 className="gifts-title">Подарки</h2>
          <div className="gifts-text">
            <p>
              Свои тёплые слова и пожелания приносите в сердцах, а подарки — в конверте.
            </p>
            <p>
              Вместо цветов мы будем счастливы получить бутылочку вина,
              которую вместе разделим однажды вечером.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
