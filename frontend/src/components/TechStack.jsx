import { useState, useEffect } from 'react'

const API = import.meta.env.VITE_API_URL || ''

const categoryColors = {
  'Programming Languages': { bg: '#e8f0fe', color: '#1a73e8' },
  'Backend Development': { bg: '#fce8e6', color: '#d93025' },
  'Frontend & Design': { bg: '#e6f4ea', color: '#137333' },
  'Cloud & DevOps': { bg: '#fff3e0', color: '#e65100' },
  'Databases': { bg: '#f3e8fd', color: '#7b1fa2' },
  'Data & Analytics': { bg: '#e0f7fa', color: '#00838f' },
  'Blockchain': { bg: '#fbe9e7', color: '#bf360c' },
  'Tools': { bg: '#f5f5f5', color: '#616161' },
}

export default function TechStack() {
  const [techstack, setTechstack] = useState(null)

  useEffect(() => {
    fetch(`${API}/api/techstack`).then(r => r.json()).then(setTechstack)
  }, [])

  if (!techstack) return null

  return (
    <section className="az-section">
      <h2 className="az-section-title">Tech Stack</h2>
      <div className="az-techstack">
        {techstack.map((cat, i) => {
          const colors = categoryColors[cat.category] || { bg: '#f5f5f5', color: '#333' }
          return (
            <div key={i} className="az-techstack-category">
              <h4 className="az-techstack-label">{cat.category}</h4>
              <div className="az-techstack-tags">
                {cat.items.map((item, j) => (
                  <span
                    key={j}
                    className="az-techstack-tag"
                    style={{ background: colors.bg, color: colors.color }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
