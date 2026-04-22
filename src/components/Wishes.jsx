import AnimatedSection from './AnimatedSection'

export default function Wishes() {
  return (
    <section className="section wishes">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-title">Подарки</h2>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="wishes-text">
            <p>
              Лучший подарок для нас — это <span className="wishes-accent">ваше присутствие</span> и тёплые пожелания.
            </p>
            <p>
              Но если вы хотите порадовать нас чем-то ещё, мы будем благодарны за
              вклад в наше совместное будущее.
            </p>
            <p>
              А вместо цветов мы будем рады бутылочке вашего любимого вина —
              мы откроем её на годовщину и вспомним этот прекрасный день.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
