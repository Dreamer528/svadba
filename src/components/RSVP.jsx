import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { rsvpEndpoint } from '../config'

const DRINKS = ['Шампанское', 'Белое вино', 'Красное вино', 'Коньяк/Виски', 'Водка', 'Безалкогольное']

function formatRsvpMessage(data) {
  const drinks = data.drinks.length ? data.drinks.join(', ') : 'Не выбрано'
  return [
    '💌 Новая заявка!',
    '',
    `👤 ${data.name}`,
    `📋 ${data.attendance === 'yes' ? 'Приду' : data.attendance === 'with-pair' ? 'Приду с парой' : 'Не смогу'}`,
    data.pairName ? `👥 Пара: ${data.pairName}` : '',
    `🥂 Напитки: ${drinks}`,
    data.allergies ? `⚠️ Аллергии: ${data.allergies}` : '',
    data.wishes ? `💬 ${data.wishes}` : '',
  ].filter(Boolean).join('\n')
}

async function sendRsvp(data) {
  const payload = {
    ...data,
    message: formatRsvpMessage(data),
    submittedAt: new Date().toISOString(),
  }

  if (!rsvpEndpoint) {
    const saved = JSON.parse(localStorage.getItem('wedding-rsvp-drafts') || '[]')
    localStorage.setItem('wedding-rsvp-drafts', JSON.stringify([...saved, payload]))
    return { mode: 'local' }
  }

  const response = await fetch(rsvpEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`RSVP endpoint returned ${response.status}`)
  }

  return { mode: 'remote' }
}

export default function RSVP() {
  const [f, setF] = useState({ name: '', attendance: '', pairName: '', drinks: [], allergies: '', wishes: '' })
  const [done, setDone] = useState(false)
  const [status, setStatus] = useState('idle')
  const [deliveryMode, setDeliveryMode] = useState('')
  const [error, setError] = useState('')

  function toggle(drink) {
    setF(p => ({ ...p, drinks: p.drinks.includes(drink) ? p.drinks.filter(d => d !== drink) : [...p.drinks, drink] }))
  }

  async function submit(e) {
    e.preventDefault()
    if (!f.name || !f.attendance) return
    setStatus('sending')
    setError('')

    try {
      const result = await sendRsvp(f)
      setDeliveryMode(result.mode)
      setDone(true)
      setStatus('idle')
    } catch (err) {
      console.error(err)
      setStatus('error')
      setError('Не удалось отправить анкету. Попробуйте ещё раз или свяжитесь с организатором.')
    }
  }

  return (
    <section className="rsvp-section">
      <div className="container">
        <AnimatedSection>
          <h2 className="section-heading">Анкета</h2>
          <p className="rsvp-subtitle">Подтвердите своё присутствие до 1 июля</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.form key="form" className="rsvp-form" onSubmit={submit} exit={{ opacity: 0, y: -20 }}>
                <div className="fg">
                  <label className="fg-label">Имя и фамилия</label>
                  <input type="text" placeholder="Иван Иванов" value={f.name}
                    onChange={e => setF({ ...f, name: e.target.value })} required />
                </div>

                <div className="fg">
                  <label className="fg-label">Вы придёте?</label>
                  <div className="radio-group">
                    {[
                      { v: 'yes', l: 'С радостью приду!' },
                      { v: 'with-pair', l: 'Приду с парой' },
                      { v: 'no', l: 'К сожалению, не смогу' },
                    ].map(o => (
                      <label key={o.v} className="radio-label">
                        <input type="radio" name="att" value={o.v} checked={f.attendance === o.v}
                          onChange={e => setF({ ...f, attendance: e.target.value })} />
                        <span className="radio-dot" />
                        <span>{o.l}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <AnimatePresence>
                  {f.attendance === 'with-pair' && (
                    <motion.div className="fg" initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                      <label className="fg-label">Имя вашей пары</label>
                      <input type="text" placeholder="Имя и фамилия"
                        value={f.pairName} onChange={e => setF({ ...f, pairName: e.target.value })} />
                    </motion.div>
                  )}
                </AnimatePresence>

                {f.attendance && f.attendance !== 'no' && (
                  <>
                    <div className="fg">
                      <label className="fg-label">Предпочтения по напиткам</label>
                      <div className="chip-group">
                        {DRINKS.map(d => (
                          <label key={d} className="chip">
                            <input type="checkbox" checked={f.drinks.includes(d)} onChange={() => toggle(d)} />
                            <span>{d}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    <div className="fg">
                      <label className="fg-label">Аллергии / ограничения в питании</label>
                      <input type="text" placeholder="Если есть, укажите здесь"
                        value={f.allergies} onChange={e => setF({ ...f, allergies: e.target.value })} />
                    </div>
                  </>
                )}

                <div className="fg">
                  <label className="fg-label">Пожелания</label>
                  <textarea placeholder="Ваши пожелания или вопросы" rows="3"
                    value={f.wishes} onChange={e => setF({ ...f, wishes: e.target.value })} />
                </div>

                {error && <p className="rsvp-error">{error}</p>}

                <motion.button type="submit" className="btn-submit" disabled={status === 'sending'}
                  whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  {status === 'sending' ? 'Отправляем...' : 'Отправить'}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div key="ok" className="rsvp-success"
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <p>
                  {deliveryMode === 'local'
                    ? 'Спасибо! Анкета сохранена. Пожалуйста, продублируйте ответ организатору.'
                    : 'Спасибо! Мы получили ваш ответ'}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </AnimatedSection>
      </div>
    </section>
  )
}
