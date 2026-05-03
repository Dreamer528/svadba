# Владислав & Любовь

React/Vite-сайт свадебного приглашения на 17 июля 2026 года.

## Команды

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## GitHub Pages

Проект готов к публикации через GitHub Actions: workflow лежит в `.github/workflows/deploy.yml`.
После первого push в `main` включите Pages в настройках репозитория:

1. Settings → Pages.
2. Source → GitHub Actions.
3. Дождитесь выполнения workflow `Deploy to GitHub Pages`.

Vite автоматически выставляет `base` по имени GitHub-репозитория, поэтому ассеты корректно работают и на локальном домене, и на GitHub Pages.

## RSVP

Форма анкеты не хранит Telegram bot token во фронтенде. В production HTML форма отправляет заявки на `/api/rsvp`, а nginx проксирует запрос в локальный Node endpoint `server/rsvp-server.cjs`.

Для production endpoint задайте env-файл `/etc/svadba-rsvp.env`:

```bash
TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_IDS=123456789,987654321
PORT=8787
```

Сервис запускается через systemd unit `svadba-rsvp.service`.

В репозитории есть пример Cloudflare Worker: `serverless/telegram-rsvp-worker.js`.
В воркере нужны секреты `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_IDS` (или старый `TELEGRAM_CHAT_ID` для совместимости), где `TELEGRAM_CHAT_IDS` — список ID чатов через запятую.
Например:
`TELEGRAM_CHAT_IDS=123456789,987654321`

Важно: бот может не отправить сообщение, если получатель — личный чат, где пользователь не запускал бота, или бот не имеет прав в группе.

Если endpoint не задан, форма сохраняет ответ только в `localStorage` устройства гостя и просит продублировать ответ организатору.
