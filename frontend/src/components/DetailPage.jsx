export default function DetailPage({ activePage, pageData, onBack }) {
  return (
    <div className="az-detail">
      <button className="az-back-btn" onClick={onBack}>
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
            <div className="az-contact-row">📧 vikas.kanjarla@gmail.com</div>
            <div className="az-contact-row">💼 linkedin.com/in/vikaskanjarla</div>
            <div className="az-contact-row">🐙 github.com/KanjarlaVikas810</div>
          </div>
        </>
      )}
    </div>
  )
}
