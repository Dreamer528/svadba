import AnimatedSection from './AnimatedSection'

export default function Invite() {
  return (
    <section className="invite-section">
      <div className="container">
        <AnimatedSection>
          <h2 className="invite-title">Дорогие гости!</h2>
          <p className="invite-text">
            Мы очень хотим сделать этот день особенным, поэтому приглашаем Вас
            разделить с нами торжество, посвящённое дню нашей свадьбы!
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mini-calendar">
            <div className="cal-day">
              <span className="cal-weekday">четверг</span>
              <span className="cal-month">июля</span>
              <span className="cal-number">16</span>
            </div>
            <div className="cal-day cal-day--active">
              <span className="cal-weekday">пятница</span>
              <span className="cal-month">июля</span>
              <span className="cal-number">17</span>
            </div>
            <div className="cal-day">
              <span className="cal-weekday">суббота</span>
              <span className="cal-month">июля</span>
              <span className="cal-number">18</span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
