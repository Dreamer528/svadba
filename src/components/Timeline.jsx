import AnimatedSection from './AnimatedSection'

const events = [
  { time: '14:00', title: 'Welcome' },
  { time: '14:30', title: 'Церемония' },
  { time: '15:30', title: 'Фотосессия' },
  { time: '17:00', title: 'Банкет' },
]

export default function Timeline() {
  return (
    <section className="timeline-section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading">Программа дня</h2>
        </AnimatedSection>
        <div className="timeline-list">
          {events.map((e, i) => (
            <AnimatedSection key={i} delay={0.1 * i}>
              <div className="tl-item">
                <div className="tl-left">
                  {i % 2 === 0
                    ? <span className="tl-time">{e.time}</span>
                    : <span className="tl-event">{e.title}</span>
                  }
                </div>
                <div className="tl-dot" />
                <div className="tl-right">
                  {i % 2 === 0
                    ? <span className="tl-event">{e.title}</span>
                    : <span className="tl-time">{e.time}</span>
                  }
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
