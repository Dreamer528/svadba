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

Форма анкеты не хранит Telegram bot token во фронтенде. Для боевого приёма ответов задайте:

```bash
VITE_RSVP_ENDPOINT=https://your-worker.example.com
```

В репозитории есть пример Cloudflare Worker: `serverless/telegram-rsvp-worker.js`.
В воркере нужны секреты `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`, а в GitHub Actions endpoint можно передать через repository variable `VITE_RSVP_ENDPOINT`.

Если endpoint не задан, форма сохраняет ответ только в `localStorage` устройства гостя и просит продублировать ответ организатору.
