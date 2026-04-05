import { useState, useEffect } from 'react'
import './App.css'
import TopBar from './components/TopBar'
import ProfileCard from './components/ProfileCard'
import ServicesGrid from './components/ServicesGrid'
import ResourcesTable from './components/ResourcesTable'
import NavigateGrid from './components/NavigateGrid'
import TechStack from './components/TechStack'
import DetailPage from './components/DetailPage'

const API = import.meta.env.VITE_API_URL || ''

function App() {
  const [services, setServices] = useState([])
  const [resources, setResources] = useState([])
  const [activePage, setActivePage] = useState(null)
  const [pageData, setPageData] = useState(null)
  const [loading, setLoading] = useState(true)

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
      window.open('https://github.com/KanjarlaVikas810', '_blank')
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
      <TopBar onHomeClick={() => setActivePage(null)} />
      <main className="az-main">
        {!activePage ? (
          <div className="az-home">
            <ProfileCard />
            <ServicesGrid services={services} onServiceClick={openService} />
            <TechStack />
            <ResourcesTable resources={resources} />
            <NavigateGrid />
          </div>
        ) : (
          <DetailPage
            activePage={activePage}
            pageData={pageData}
            onBack={() => setActivePage(null)}
          />
        )}
      </main>
    </div>
  )
}

export default App
