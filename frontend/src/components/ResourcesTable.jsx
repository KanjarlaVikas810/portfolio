import { useState } from 'react'

export default function ResourcesTable({ resources }) {
  const [resourceTab, setResourceTab] = useState('recent')

  return (
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
  )
}
