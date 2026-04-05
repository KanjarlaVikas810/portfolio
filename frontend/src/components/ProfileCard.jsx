import { useState, useEffect } from 'react'

const API = import.meta.env.VITE_API_URL || ''

export default function ProfileCard() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    fetch(`${API}/api/profile`).then(r => r.json()).then(setProfile)
  }, [])

  if (!profile) return null

  return (
    <section className="az-profile-card">
      <div className="az-profile-avatar">
        <span>{profile.name.split(' ').map(n => n[0]).join('')}</span>
      </div>
      <div className="az-profile-info">
        <h1 className="az-profile-name">{profile.name}</h1>
        <p className="az-profile-role">{profile.role}</p>
        <p className="az-profile-summary">{profile.summary}</p>
        {profile.background && (
          <ul className="az-profile-bg">
            {profile.background.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
