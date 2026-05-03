const http = require('node:http')

const PORT = Number(process.env.PORT || 8787)
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_IDS = String(process.env.TELEGRAM_CHAT_IDS || process.env.TELEGRAM_CHAT_ID || '')
  .split(',')
  .map((id) => id.trim())
  .filter(Boolean)

function sendJson(res, status, payload) {
  res.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
  })
  res.end(JSON.stringify(payload))
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk) => {
      body += chunk
      if (body.length > 64 * 1024) {
        reject(new Error('Payload too large'))
        req.destroy()
      }
    })
    req.on('end', () => resolve(body))
    req.on('error', reject)
  })
}

async function sendTelegramMessage(chatId, text) {
  const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  })

  const payload = await response.json().catch(() => null)
  return {
    chatId,
    ok: response.ok,
    status: response.status,
    error: payload?.description || null,
  }
}

async function handleRsvp(req, res) {
  if (!BOT_TOKEN || !CHAT_IDS.length) {
    sendJson(res, 500, { ok: false, error: 'Telegram settings are not configured' })
    return
  }

  let body
  try {
    body = JSON.parse(await readBody(req))
  } catch {
    sendJson(res, 400, { ok: false, error: 'Invalid JSON' })
    return
  }

  const message = String(body.message || '').trim()
  if (!message) {
    sendJson(res, 400, { ok: false, error: 'Message is required' })
    return
  }

  const results = await Promise.allSettled(
    CHAT_IDS.map((chatId) => sendTelegramMessage(chatId, message)),
  )

  const failures = results
    .map((result, index) => {
      if (result.status === 'rejected') {
        return {
          chatId: CHAT_IDS[index],
          error: result.reason?.message || 'Network error',
        }
      }

      if (!result.value.ok) {
        return {
          chatId: result.value.chatId,
          status: result.value.status,
          error: result.value.error || 'Telegram API error',
        }
      }

      return null
    })
    .filter(Boolean)

  if (failures.length === CHAT_IDS.length) {
    console.error('RSVP Telegram delivery failed for all recipients', failures)
    sendJson(res, 502, { ok: false, error: 'Telegram delivery failed', failures })
    return
  }

  if (failures.length) {
    console.warn('RSVP Telegram delivery partially failed', failures)
  }

  sendJson(res, 200, { ok: true, failures })
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === '/health') {
    sendJson(res, 200, { ok: true })
    return
  }

  if (req.method === 'POST' && req.url === '/api/rsvp') {
    await handleRsvp(req, res)
    return
  }

  sendJson(res, 404, { ok: false, error: 'Not found' })
})

server.listen(PORT, '127.0.0.1', () => {
  console.log(`RSVP server listening on 127.0.0.1:${PORT}`)
})
