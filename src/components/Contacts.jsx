import AnimatedSection from './AnimatedSection'

export default function Contacts() {
  return (
    <section className="contacts-section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading">Контакты</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <p className="contacts-text">
            Если вы хотите сделать для нас сюрприз или уточнить детали торжества,
            свяжитесь, пожалуйста, с нашим организатором — Ирина.
          </p>
          <a href="tel:+79835472896" className="round-btn">
            Позвонить
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}
