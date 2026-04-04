import { useState, useEffect } from 'react'
import './App.css'

const API = 'http://localhost:4000'

const serviceIcons = {
  projects: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="4" y="8" width="40" height="32" rx="3" fill="#0078d4"/>
      <path d="M12 20h24M12 28h16" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  skills: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="18" fill="#ffb900"/>
      <path d="M24 14l2.5 6.5H34l-6 4.5 2.3 7L24 27.5 17.7 32l2.3-7-6-4.5h7.5z" fill="#fff"/>
    </svg>
  ),
  experience: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="6" y="14" width="36" height="24" rx="3" fill="#5c2d91"/>
      <path d="M18 14V11a4 4 0 018 0v3" stroke="#5c2d91" strokeWidth="2.5" fill="none"/>
      <circle cx="24" cy="26" r="3" fill="#fff"/>
    </svg>
  ),
  resume: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M14 6h14l10 10v26a2 2 0 01-2 2H14a2 2 0 01-2-2V8a2 2 0 012-2z" fill="#e74856"/>
      <path d="M28 6v10h10" fill="#c03040"/>
      <path d="M18 24h12M18 30h8" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  certifications: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="20" r="14" fill="#00a4ef"/>
      <path d="M19 40l5-6 5 6" stroke="#00a4ef" strokeWidth="2.5" fill="none"/>
      <path d="M18 20l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  education: (
    <svg viewBox="0 0 48 48" fill="none">
      <path d="M24 8L4 20l20 12 20-12z" fill="#7fba00"/>
      <path d="M10 23v12l14 8 14-8V23" fill="#5a8700" fillOpacity="0.7"/>
      <rect x="38" y="20" width="2.5" height="18" rx="1" fill="#7fba00"/>
    </svg>
  ),
  contact: (
    <svg viewBox="0 0 48 48" fill="none">
      <rect x="4" y="12" width="40" height="26" rx="3" fill="#f25022"/>
      <path d="M4 15l20 13 20-13" stroke="#fff" strokeWidth="2" fill="none"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" fill="#24292e"/>
      <path d="M24 8C15.16 8 8 15.16 8 24c0 7.08 4.58 13.08 10.94 15.18.8.14 1.1-.34 1.1-.76v-2.66c-4.46.98-5.4-2.16-5.4-2.16-.72-1.86-1.78-2.36-1.78-2.36-1.46-1 .1-1 .1-1 1.62.12 2.46 1.66 2.46 1.66 1.44 2.46 3.76 1.74 4.68 1.34.14-1.04.56-1.74 1.02-2.14-3.56-.4-7.3-1.78-7.3-7.92 0-1.76.62-3.18 1.66-4.32-.18-.4-.72-2.04.16-4.24 0 0 1.34-.44 4.4 1.64a15.3 15.3 0 018.02 0c3.06-2.08 4.4-1.64 4.4-1.64.88 2.2.34 3.84.16 4.24 1.04 1.14 1.66 2.56 1.66 4.32 0 6.16-3.76 7.5-7.34 7.9.58.5 1.08 1.48 1.08 2.98v4.42c0 .44.28.92 1.1.76C35.42 37.08 40 31.08 40 24c0-8.84-7.16-16-16-16z" fill="#fff"/>
    </svg>
  ),
}

function App() {
  const [services, setServices] = useState([])
  const [resources, setResources] = useState([])
  const [activePage, setActivePage] = useState(null)
  const [pageData, setPageData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [resourceTab, setResourceTab] = useState('recent')

  useEffect(() => {
    Promise.all([
      fetch(`${API}/api/services`).then(r => r.json()),
      fetch(`${API}/api/resources`).then(r => r.json()),
    ]).then(([svc, res]) => {
      setServices(svc)
      setResources(res)
      setLoading(false)
    })
  }, [])

  const openService = (id) => {
    const endpointMap = {
      projects: '/api/projects',
      skills: '/api/skills',
      experience: '/api/experience',
      certifications: '/api/certifications',
      education: '/api/education',
    }
    if (id === 'resume') {
      setActivePage('resume')
      setPageData(null)
      return
    }
    if (id === 'contact') {
      setActivePage('contact')
      setPageData(null)
      return
    }
    if (id === 'github') {
      window.open('https://github.com', '_blank')
      return
    }
    const endpoint = endpointMap[id]
    if (endpoint) {
      fetch(`${API}${endpoint}`).then(r => r.json()).then(data => {
        setActivePage(id)
        setPageData(data)
      })
    }
  }

  if (loading) {
    return (
      <div className="az-loading">
        <div className="az-spinner" />
        <span>Loading resources...</span>
      </div>
    )
  }

  return (
    <div className="az-shell">
      {/* ===== Top Bar ===== */}
      <header className="az-topbar">
        <div className="az-topbar-left">
          <button className="az-waffle" aria-label="Menu">
            <svg viewBox="0 0 16 16" fill="currentColor"><circle cx="2.5" cy="2.5" r="1.5"/><circle cx="8" cy="2.5" r="1.5"/><circle cx="13.5" cy="2.5" r="1.5"/><circle cx="2.5" cy="8" r="1.5"/><circle cx="8" cy="8" r="1.5"/><circle cx="13.5" cy="8" r="1.5"/><circle cx="2.5" cy="13.5" r="1.5"/><circle cx="8" cy="13.5" r="1.5"/><circle cx="13.5" cy="13.5" r="1.5"/></svg>
          </button>
          <button className="az-hamburger" aria-label="Toggle sidebar">☰</button>
          <span className="az-brand" onClick={() => setActivePage(null)} style={{ cursor: 'pointer' }}>Microsoft Azure</span>
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
          <div className="az-avatar">A</div>
        </div>
      </header>

      {/* ===== Main Content ===== */}
      <main className="az-main">
        {!activePage ? (
          /* ===== HOME PAGE ===== */
          <div className="az-home">
            {/* Azure services */}
            <section className="az-section">
              <h2 className="az-section-title">Azure services</h2>
              <div className="az-services-grid">
                {services.map(svc => (
                  <button
                    key={svc.id}
                    className="az-service-btn"
                    onClick={() => openService(svc.id)}
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

            {/* Resources */}
            <section className="az-section">
              <h2 className="az-section-title">Resources</h2>
              <div className="az-tabs">
                <button
                  className={`az-tab ${resourceTab === 'recent' ? 'active' : ''}`}
                  onClick={() => setResourceTab('recent')}
                >Recent</button>
                <button
                  className={`az-tab ${resourceTab === 'favorite' ? 'active' : ''}`}
                  onClick={() => setResourceTab('favorite')}
                >Favorite</button>
              </div>
              <div className="az-resources-table">
                <div className="az-table-header">
                  <span>Name</span>
                  <span>Type</span>
                  <span>Last Viewed</span>
                </div>
                {resources.map((r, i) => (
                  <div key={i} className="az-table-row">
                    <span className="az-table-name">
                      <span className="az-resource-dot" />
                      {r.name}
                    </span>
                    <span className="az-table-type">{r.type}</span>
                    <span className="az-table-date">{r.lastViewed}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Navigate */}
            <section className="az-section">
              <h2 className="az-section-title">Navigate</h2>
              <div className="az-navigate-grid">
                {[
                  { label: 'All resources', desc: 'View all portfolio resources' },
                  { label: 'Resource groups', desc: 'Organized by category' },
                  { label: 'Quickstart center', desc: 'Get started guides' },
                  { label: 'Deployments', desc: 'CI/CD pipeline runs' },
                ].map((n, i) => (
                  <div key={i} className="az-navigate-card">
                    <h4>{n.label}</h4>
                    <p>{n.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        ) : (
          /* ===== DETAIL PAGE ===== */
          <div className="az-detail">
            <button className="az-back-btn" onClick={() => setActivePage(null)}>
              ← Back to Home
            </button>

            {activePage === 'projects' && pageData && (
              <>
                <h2 className="az-page-title">Projects</h2>
                <div className="az-detail-cards">
                  {pageData.map(p => (
                    <div key={p.id} className="az-detail-card">
                      <h3>{p.title}</h3>
                      <span className="az-tag">{p.tech}</span>
                      <p>{p.description}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activePage === 'skills' && pageData && (
              <>
                <h2 className="az-page-title">Skills</h2>
                <div className="az-resources-table">
                  <div className="az-table-header">
                    <span>Skill</span>
                    <span>Level</span>
                    <span>Category</span>
                  </div>
                  {pageData.map((s, i) => (
                    <div key={i} className="az-table-row">
                      <span className="az-table-name">{s.name}</span>
                      <span><span className={`az-level az-level-${s.level.toLowerCase()}`}>{s.level}</span></span>
                      <span className="az-table-type">{s.category}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activePage === 'experience' && pageData && (
              <>
                <h2 className="az-page-title">Experience</h2>
                <div className="az-timeline">
                  {pageData.map((e, i) => (
                    <div key={i} className="az-timeline-item">
                      <div className="az-timeline-dot" />
                      <div className="az-timeline-content">
                        <h3>{e.role}</h3>
                        <span className="az-timeline-meta">{e.company} · {e.period}</span>
                        <p>{e.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activePage === 'certifications' && pageData && (
              <>
                <h2 className="az-page-title">Certifications</h2>
                <div className="az-detail-cards">
                  {pageData.map((c, i) => (
                    <div key={i} className="az-detail-card az-cert-card">
                      <div className="az-cert-badge">✓</div>
                      <h3>{c.name}</h3>
                      <p>{c.issuer} · {c.year}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activePage === 'education' && pageData && (
              <>
                <h2 className="az-page-title">Education</h2>
                <div className="az-detail-cards">
                  {pageData.map((e, i) => (
                    <div key={i} className="az-detail-card">
                      <h3>{e.degree}</h3>
                      <p>{e.school} · {e.year}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {activePage === 'resume' && (
              <>
                <h2 className="az-page-title">Resume</h2>
                <div className="az-detail-card" style={{ maxWidth: 500 }}>
                  <p>📄 Download my resume or view it inline.</p>
                  <button className="az-primary-btn">Download Resume</button>
                </div>
              </>
            )}

            {activePage === 'contact' && (
              <>
                <h2 className="az-page-title">Contact</h2>
                <div className="az-detail-card" style={{ maxWidth: 500 }}>
                  <div className="az-contact-row">📧 alex.developer@email.com</div>
                  <div className="az-contact-row">💼 linkedin.com/in/alexdev</div>
                  <div className="az-contact-row">🐙 github.com/alexdev</div>
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default App
