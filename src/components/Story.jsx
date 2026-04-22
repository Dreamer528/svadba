import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { assetUrl } from '../config'

function StoryModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <motion.div className="story-overlay"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }} onClick={onClose}>
      <motion.div className="story-modal"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}>

        <button className="story-modal__close" onClick={onClose}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="story-modal__body">
          <h2 className="story-modal__title">Наша история</h2>

          <div className="story-chapter">
            <p className="story-voice">Мы</p>
            <p>Иногда кажется, что люди встречаются случайно.</p>
            <p>Но мы знаем — наша встреча была предначертана.</p>
            <p>Мы чувствовали существование друг друга ещё до того, как наши пути пересеклись. Где-то глубоко внутри жило тихое знание: наш человек уже есть в этом мире, и однажды мы обязательно встретимся.</p>
            <p className="story-accent">За два дня до нашей встречи произошло нечто особенное.</p>
          </div>

          <div className="story-chapter story-chapter--bride">
            <p className="story-voice">Невеста</p>
            <p>Мне приснился сон. Не просто сон — это было состояние, которое невозможно описать обычными словами. Во сне я почувствовала великую, божественную любовь, такую глубокую и настоящую, какой никогда прежде не испытывала.</p>
            <p>Я проснулась в 08:40 утра и ещё долго не могла прийти в себя. Это чувство не исчезло — оно осталось со мной на весь день. Я носила его внутри, словно тихий свет.</p>
            <p className="story-accent">И ровно через два дня произошло чудо.</p>
          </div>

          <div className="story-photos">
            <div>
              <div className="story-photo-frame">
                <img src={assetUrl('engagement-1.jpg')} alt="Владислав и Любовь" />
              </div>
              <p className="story-photo-caption">Наша помолвка</p>
            </div>
            <div>
              <div className="story-photo-frame">
                <img src={assetUrl('engagement-2.jpg')} alt="Любовь с кольцом" />
              </div>
              <p className="story-photo-caption">Она сказала &laquo;Да!&raquo;</p>
            </div>
          </div>

          <div className="story-chapter">
            <p className="story-voice">Мы</p>
            <p className="story-accent">Мы нашли друг друга.</p>
            <p>С первых слов всё стало ясно. Не было сомнений, не было вопросов. Мы узнали друг друга — даже на расстоянии.</p>
            <p>То чувство из сна вернулось — точно таким же, сильным и настоящим. Мы оба поняли: это и есть наша судьба.</p>
          </div>

          <div className="story-chapter story-chapter--bride">
            <p className="story-voice">Невеста</p>
            <p>В тот период для меня было очень важно встретить своего человека до Нового года. Я много молилась, проводила ритуалы, обращалась к духам и просила знак. И каждый раз слышала одно и то же:</p>
            <p className="story-quote">&laquo;Не переживай. Всё произойдёт в один момент. Ты успеешь.&raquo;</p>
            <p>Тогда я ещё не знала, насколько буквально исполнятся эти слова.</p>
          </div>

          <div className="story-chapter">
            <p className="story-voice">Жених</p>
            <p>Иногда судьба соединяет людей в тот момент, когда они меньше всего ожидают.</p>
            <p className="story-accent">17 октября наши пути пересеклись.</p>
            <p>С первых слов в нашем общении было что-то необычное. Будто мы не знакомимся, а вспоминаем друг друга.</p>
            <p>Слова появлялись легко, время словно перестало существовать, а внутри было ощущение, что всё происходит именно так, как должно было произойти.</p>
            <p>Мы оба почувствовали одно и то же:</p>
            <p className="story-accent">это не случайная встреча.</p>
            <p>Это встреча двух людей, которые долго шли друг к другу.</p>
          </div>

          <div className="story-chapter">
            <p className="story-voice">Мы</p>
            <p className="story-accent">Мы познакомились 17 октября.</p>
            <p>Позже оказалось, что если бы мы не встретились до Нового года, Владислав уже в январе должен был уехать в другой город. И, возможно, наша встреча отложилась бы на очень долгое время.</p>
            <p className="story-accent">Но судьба решила иначе.</p>
          </div>

          <div className="story-dates">
            <div style={{ textAlign: 'center' }}>
              <div className="story-date-num">17.10</div>
              <div className="story-date-label">Наша встреча</div>
            </div>
            <div className="story-date-div" />
            <div style={{ textAlign: 'center' }}>
              <div className="story-date-num">17.12</div>
              <div className="story-date-label">Предложение</div>
            </div>
            <div className="story-date-div" />
            <div style={{ textAlign: 'center' }}>
              <div className="story-date-num">17.07</div>
              <div className="story-date-label">Свадьба</div>
            </div>
          </div>

          <div className="story-chapter">
            <p>Через два месяца после нашей встречи, 17 декабря, Владислав сделал предложение.</p>
            <p>А нашу свадьбу мы решили провести 17 июля. Ровно через девять месяцев после того дня, когда мы встретились.</p>
            <p>И нам кажется, что в этом есть особая символика. Ведь девять месяцев — это время, за которое зарождается и появляется новая жизнь.</p>
            <p className="story-accent">И именно через девять месяцев после нашей встречи рождается наша семья.</p>
          </div>

          <div className="story-final">
            <p>Мы верим, что любовь — это не случайность.</p>
            <p>Это встреча двух душ, которые когда-то пообещали найти друг друга.</p>
            <p className="story-final__sig">И теперь наша история только начинается.</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Story() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="story-section">
      <div className="container">
        <AnimatedSection>
          <motion.div className="story-card"
            whileHover={{ y: -4 }} whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(true)}>
            <div className="story-card__line story-card__line--top" />
            <h2 className="story-card__title">Наша история</h2>
            <p className="story-card__subtitle">
              Иногда кажется, что люди встречаются случайно.
              Но мы знаем — наша встреча была предначертана.
            </p>
            <div className="story-card__cta">
              <span>Нажмите, чтобы прочитать</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
            <div className="story-card__line story-card__line--bottom" />
          </motion.div>
        </AnimatedSection>
      </div>

      <AnimatePresence>
        {isOpen && <StoryModal onClose={() => setIsOpen(false)} />}
      </AnimatePresence>
    </section>
  )
}
