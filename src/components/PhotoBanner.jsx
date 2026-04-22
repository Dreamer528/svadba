import AnimatedSection from './AnimatedSection'
import { assetUrl } from '../config'

export default function PhotoBanner() {
  return (
    <div className="photo-banner">
      <img className="photo-banner__img" src={assetUrl('engagement-1.jpg')} alt="Владислав и Любовь" />
      <div className="photo-banner__overlay">
        <AnimatedSection>
          <p className="photo-banner__names">Владислав & Любовь</p>
          <p className="photo-banner__date">17.07.2026</p>
        </AnimatedSection>
      </div>
    </div>
  )
}
