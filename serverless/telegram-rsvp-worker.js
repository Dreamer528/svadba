const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...corsHeaders,
      'Content-Type': 'application/json; charset=utf-8',
    },
  })
}

function parseChatIds(rawChatIds) {
  if (!rawChatIds) {
    return []
  }

  return String(rawChatIds)
    .split(',')
    .map((id) => id.trim())
    .filter(Boolean)
}

async function sendMessage({ botToken, chatId, text }) {
  const telegramResponse = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  })
  const payload = await telegramResponse.json().catch(() => null)
  return { chatId, ok: telegramResponse.ok, payload, status: telegramResponse.status }
}

export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders })
    }

    if (request.method !== 'POST') {
      return json({ ok: false, error: 'Method not allowed' }, 405)
    }

    const botToken = env.TELEGRAM_BOT_TOKEN
    const chatIds = parseChatIds(env.TELEGRAM_CHAT_IDS || env.TELEGRAM_CHAT_ID)

    if (!botToken || !chatIds.length) {
      return json({ ok: false, error: 'Telegram secrets are not configured' }, 500)
    }

    let body
    try {
      body = await request.json()
    } catch {
      return json({ ok: false, error: 'Invalid JSON' }, 400)
    }

    const text = String(body.message || '').trim()
    if (!text) {
      return json({ ok: false, error: 'Message is required' }, 400)
    }

    const telegramResults = await Promise.allSettled(
      chatIds.map((chatId) => sendMessage({ botToken, chatId, text }))
    )

    const failures = telegramResults
      .map((result, index) => {
        const chatId = chatIds[index]
        if (result.status === 'rejected') {
          return { chatId, ok: false, error: result.reason?.message || 'Network error' }
        }
        if (!result.value.ok) {
          return {
            chatId,
            ok: false,
            status: result.value.status,
            error: result.value.payload?.description || 'Telegram API error',
          }
        }
        return null
      })
      .filter(Boolean)

    if (failures.length === chatIds.length) {
      return json({
        ok: false,
        error: 'Telegram request failed for all recipients',
        failures,
      }, 502)
    }

    if (failures.length) {
      return json({ ok: true, warning: 'Some recipients were unreachable', failures })
    }

    return json({ ok: true, failures: [] })
  },
}
