import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'

// Layout Components
import Header from './components/Header'
import Footer from './components/Footer'

// Page Components
import Home from './views/Home'
import WhoWeAre from './views/WhoWeAre'
import PurposeBeliefs from './views/PurposeBeliefs'
import OurHistory from './views/OurHistory'
import MeetOurTeam from './views/MeetOurTeam'
import Sustainability from './views/Sustainability'
import PillarPeople from './views/PillarPeople'
import PillarPlanet from './views/PillarPlanet'
import PillarPrinciples from './views/PillarPrinciples'
import NewsInsights from './views/NewsInsights'
import Careers from './views/Careers'
import Contact from './views/Contact'
import ServiceDetail from './views/ServiceDetail'
import MarketDetail from './views/MarketDetail'
import Projects from './views/Projects'

// Scroll Restoration Hook/Component
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        {/* Main Content Area */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            
            {/* Services & Markets Dynamic Details */}
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/markets/:slug" element={<MarketDetail />} />

            {/* Who We Are & Subpages */}
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/who-we-are/purpose-beliefs" element={<PurposeBeliefs />} />
            <Route path="/who-we-are/our-history" element={<OurHistory />} />
            <Route path="/who-we-are/meet-our-team" element={<MeetOurTeam />} />
            
            {/* Sustainability & Subpages */}
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/sustainability/people" element={<PillarPeople />} />
            <Route path="/sustainability/planet" element={<PillarPlanet />} />
            <Route path="/sustainability/principles" element={<PillarPrinciples />} />
            
            {/* News, Projects, Careers & Contact */}
            <Route path="/news-insights" element={<NewsInsights />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/join-us" element={<Careers />} />
            <Route path="/contact-us" element={<Contact />} />
            
            {/* Catch-all fallback */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  )
}
