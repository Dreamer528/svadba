import { mkdirSync, rmSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const templatePath = join(root, 'backup/public-html/index.html')
const outputRoot = join(root, 'backup/public-html/invite')
const siteUrl = 'https://vladislav-and-lyubov.ru'

const guests = [
  { slug: 'papa-i-alena', prefix: 'Дорогие', name: 'Папа и Алёна' },
  { slug: 'anfisa-i-aleksandr', prefix: 'Дорогие', name: 'Анфиса и Александр' },
  { slug: 'babulya', prefix: 'Любимая', name: 'Бабуля' },
  { slug: 'krestnye-papa-i-mama', prefix: 'Дорогие', name: 'Крестные папа и мама' },
  { slug: 'sestra-i-maksim', prefix: 'Дорогие', name: 'Сестра и Максим' },
  { slug: 'dyadya-zhenya-i-tetya-galya', prefix: 'Дорогие', name: 'дядя Женя и тетя Галя' },
  { slug: 'natali', prefix: 'Прекрасная', name: 'Натали' },
  { slug: 'natasha', prefix: 'Милая', name: 'Наташа' },
  { slug: 'yulya', prefix: 'Дорогая', name: 'Юля' },
  { slug: 'zhanna-i-boris', prefix: 'Дорогие', name: 'Жанна и Борис' },
  { slug: 'nastyusha', prefix: 'Моя', name: 'Настюша' },
  { slug: 'margarita-i-andrey', prefix: 'Дорогие', name: 'Маргарита и Андрей' },
  { slug: 'elena', prefix: 'Прекрасная', name: 'Елена' },
  { slug: 'nasha-irinochka', prefix: 'Наша', name: 'Ириночка' },
  { slug: 'yulechka-i-bogdan', prefix: 'Дорогие', name: 'Юлечка и Богдан' },
]

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function personalize(template, guest) {
  const guestUrl = `${siteUrl}/invite/${guest.slug}/`
  const guestName = guest.name
  const greeting = [
    '  <p class="ch-greeting-text">',
    `    ${escapeHtml(guest.prefix)} <span>${escapeHtml(guest.name)}</span>`,
    '  </p>',
  ].join('\n')

  return template
    .replace(
      /<title>.*?<\/title>/,
      `<title>Владислав & Любовь — приглашение для ${escapeHtml(guestName)}</title>`,
    )
    .replace(
      /<meta property="og:url" content=".*?" \/>/,
      `<meta property="og:url" content="${guestUrl}" />`,
    )
    .replace(
      /<meta property="og:title" content=".*?" \/>/,
      `<meta property="og:title" content="Владислав & Любовь — приглашение для ${escapeHtml(guestName)}" />`,
    )
    .replace(
      /<link rel="canonical" href=".*?">/,
      `<link rel="canonical" href="${guestUrl}">`,
    )
    .replace(/  <p class="ch-greeting-text">[\s\S]*?  <\/p>/, greeting)
}

const template = readFileSync(templatePath, 'utf8')

rmSync(outputRoot, { recursive: true, force: true })

for (const guest of guests) {
  const pageDir = join(outputRoot, guest.slug)
  mkdirSync(pageDir, { recursive: true })
  writeFileSync(join(pageDir, 'index.html'), personalize(template, guest))
}

console.log(`Generated ${guests.length} guest pages in backup/public-html/invite`)
