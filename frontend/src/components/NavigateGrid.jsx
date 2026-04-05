export default function NavigateGrid() {
  const items = [
    { label: 'All resources', desc: 'View all portfolio resources' },
    { label: 'Resource groups', desc: 'Organized by category' },
    { label: 'Quickstart center', desc: 'Get started guides' },
    { label: 'Deployments', desc: 'CI/CD pipeline runs' },
  ]

  return (
    <section className="az-section">
      <h2 className="az-section-title">Navigate</h2>
      <div className="az-navigate-grid">
        {items.map((n, i) => (
          <div key={i} className="az-navigate-card">
            <h4>{n.label}</h4>
            <p>{n.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
