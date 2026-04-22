import AnimatedSection from './AnimatedSection'
import { assetUrl } from '../config'

export default function PhotoBreak() {
  return (
    <div className="photo-section photo-section--tall">
      <img src={assetUrl('engagement-1.jpg')} alt="Владислав и Любовь" />
      <div className="photo-overlay">
        <AnimatedSection>
          <div className="photo-overlay-text">
            <h2>Владислав & Любовь</h2>
            <p>17 июля 2026</p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
