export const WEDDING_DATE = new Date('2026-07-17T15:30:00+07:00')

export const rsvpEndpoint = import.meta.env.VITE_RSVP_ENDPOINT || ''

export function assetUrl(path) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}
