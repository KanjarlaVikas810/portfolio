export default function TopBar({ onHomeClick }) {
  return (
    <header className="az-topbar">
      <div className="az-topbar-left">
        <button className="az-waffle" aria-label="Menu">
          <svg viewBox="0 0 16 16" fill="currentColor"><circle cx="2.5" cy="2.5" r="1.5"/><circle cx="8" cy="2.5" r="1.5"/><circle cx="13.5" cy="2.5" r="1.5"/><circle cx="2.5" cy="8" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="13.5" cy="8" r="1.5"/><circle cx="2.5" cy="13.5" r="1.5"/><circle cx="8" cy="13.5" r="1.5"/><circle cx="13.5" cy="13.5" r="1.5"/></svg>
        </button>
        <button className="az-hamburger" aria-label="Toggle sidebar">☰</button>
        <span className="az-brand" onClick={onHomeClick} style={{ cursor: 'pointer' }}>Microsoft Azure</span>
      </div>
      <div className="az-topbar-center">
        <div className="az-search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <span>Search resources, services, and docs (G+/)</span>
        </div>
      </div>
      <div className="az-topbar-right">
        <button className="az-topbar-icon" title="Copilot">
          <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2.5a2 2 0 110 4 2 2 0 010-4zm-4 8.2a5.5 5.5 0 018 0 .5.5 0 01-.4.8H6.4a.5.5 0 01-.4-.8z"/></svg>
        </button>
        <button className="az-topbar-icon" title="Notifications">
          <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a5 5 0 00-5 5v3l-1.3 2.6a.75.75 0 00.67 1.1h11.26a.75.75 0 00.67-1.1L15 10V7a5 5 0 00-5-5zM8.5 15a1.5 1.5 0 003 0z"/></svg>
        </button>
        <button className="az-topbar-icon" title="Settings">
          <svg viewBox="0 0 20 20" fill="currentColor"><path d="M10 13a3 3 0 100-6 3 3 0 000 6zm7.07-2.25l-1.14-.66a5.62 5.62 0 000-1.18l1.14-.66a.5.5 0 00.18-.68l-1-1.73a.5.5 0 00-.68-.18l-1.14.66a5.53 5.53 0 00-1.02-.59V4.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v1.23c-.37.14-.7.35-1.02.59l-1.14-.66a.5.5 0 00-.68.18l-1 1.73a.5.5 0 00.18.68l1.14.66a5.62 5.62 0 000 1.18l-1.14.66a.5.5 0 00-.18.68l1 1.73a.5.5 0 00.68.18l1.14-.66c.32.24.65.45 1.02.59v1.23a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-1.23c.37-.14.7-.35 1.02-.59l1.14.66a.5.5 0 00.68-.18l1-1.73a.5.5 0 00-.18-.68z"/></svg>
        </button>
        <div className="az-avatar">VK</div>
      </div>
    </header>
  )
}
