export default function Divider() {
  return (
    <div style={{ textAlign: 'center', padding: '10px 0' }}>
      <svg className="section-divider" viewBox="0 0 120 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="15" x2="50" y2="15" stroke="currentColor" strokeWidth="0.5" />
        <path d="M56 15 L60 11 L64 15 L60 19 Z" fill="currentColor" opacity="0.5" />
        <line x1="70" y1="15" x2="120" y2="15" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  )
}
