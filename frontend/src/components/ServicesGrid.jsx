import { serviceIcons } from './ServiceIcons'

export default function ServicesGrid({ services, onServiceClick }) {
  return (
    <section className="az-section">
      <h2 className="az-section-title">Azure services</h2>
      <div className="az-services-grid">
        {services.map(svc => (
          <button
            key={svc.id}
            className="az-service-btn"
            onClick={() => onServiceClick(svc.id)}
          >
            <div className="az-service-icon">
              {serviceIcons[svc.icon]}
            </div>
            <span className="az-service-label">{svc.label}</span>
          </button>
        ))}
        <button className="az-service-btn az-more-services">
          <div className="az-service-icon">
            <svg viewBox="0 0 48 48" fill="none">
              <circle cx="24" cy="24" r="18" stroke="#0078d4" strokeWidth="2" fill="none"/>
              <path d="M24 16v16M16 24h16" stroke="#0078d4" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="az-service-label az-link">More services →</span>
        </button>
      </div>
    </section>
  )
}
