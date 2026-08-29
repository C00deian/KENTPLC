import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, ArrowRight, Play, X, ArrowUpRight } from 'lucide-react'
import { homeContent, serviceGroups, vacancies, newsItems, globalStats } from '../data/mockData'
import VideoModal from '../components/VideoModal'

const ASSET_BASE = '/images/'
const getImage = (name, width = 1600, ratio = '4:3') =>
  `${ASSET_BASE}${name}?q=82&auto=format&fit=crop&crop=focalpoint&w=${width}&ar=${ratio.replace(':', '%3A')}&fp-x=0.5&fp-y=0.5`

export default function Home() {
  const [videoOpen, setVideoOpen] = useState(false)
  const [searchKeyword, setSearchKeyword] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [filteredVacancies, setFilteredVacancies] = useState(vacancies)

  const newsTrackRef = useRef(null)

  // Intersection Observer for scroll reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shown')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })
    
    const timer = setTimeout(() => {
      document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  // Job Filtering Logic
  const handleJobSearch = (e) => {
    e.preventDefault()
    applyFilters()
  }

  const applyFilters = (kw = searchKeyword, cat = selectedCategory, loc = selectedLocation) => {
    const query = kw.trim().toLowerCase()
    const filtered = vacancies.filter(job => {
      const matchesKeyword = !query || `${job.title} ${job.city} ${job.country} ${job.category}`.toLowerCase().includes(query)
      const matchesCategory = !cat || job.category === cat
      const matchesLocation = !loc || job.country === loc
      return matchesKeyword && matchesCategory && matchesLocation
    })
    setFilteredVacancies(filtered)
  }

  const handleClearFilters = () => {
    setSearchKeyword('')
    setSelectedCategory('')
    setSelectedLocation('')
    setFilteredVacancies(vacancies)
  }

  // Horizontal News Scroll
  const scrollNews = (direction) => {
    if (newsTrackRef.current) {
      const scrollAmount = direction === 'next' ? 460 : -460
      newsTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const uniqueCategories = [...new Set(vacancies.map(j => j.category))]
  const uniqueCountries = [...new Set(vacancies.map(j => j.country))].sort()

  return (
    <>
      <main>
        {/* HERO SECTION */}
        <section className="hero" id="who">
          <div 
            className="hero-bg"
            style={{ 
              backgroundImage: `url(${getImage('Hero-01.jpg', 2200, '16:9')})`
            }}
          />
          <div className="hero-shade" />
          
          <div className="hero-copy reveal">
            <span className="eyebrow yellow">
              {homeContent.hero.eyebrow}
            </span>
            <h1>{homeContent.hero.title}</h1>
            {homeContent.hero.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Link to="/join-us" className="pill light">
              Our services <b>↗</b>
            </Link>
          </div>

          <div className="scroll-cue">
            <span>Scroll</span>
            <i />
          </div>
        </section>

        {/* PURPOSE SECTION */}
        <section className="purpose section-pad">
          <div className="purpose-copy reveal">
            <span className="eyebrow">
              {homeContent.purpose.eyebrow}
            </span>
            <h2>{homeContent.purpose.title}</h2>
          </div>

          <a 
            href="#"
            onClick={(e) => { e.preventDefault(); setVideoOpen(true); }}
            className="video reveal"
            aria-label="Play our purpose film"
          >
            <img 
              src={getImage('videothumb_website-1.jpg', 1800, '16:9')} 
              alt="Arkmont people"
            />
            <span className="play">▶</span>
            <small>Play our film</small>
          </a>
        </section>

        {/* SERVICES SECTION */}
        <section className="what section-pad" id="services">
          <div className="what-grid">
            <div className="what-image reveal">
              <img 
                src={getImage('arkmont-production-1-1_2025-10-13-172336_pslr.jpg', 1200, '3:4')}
                alt="Arkmont engineer"
              />
            </div>
            <div className="what-copy reveal">
              <span className="eyebrow">
                {homeContent.whatWeDo.eyebrow}
              </span>
              <h2>{homeContent.whatWeDo.title}</h2>
              {homeContent.whatWeDo.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="service-list">
            {serviceGroups.slice(0, 5).map((service, i) => (
              <a 
                key={service.title}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="service-card reveal"
              >
                <span>0{i + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <b>↗</b>
              </a>
            ))}
          </div>
        </section>

        {/* TRANSITION SECTION */}
        <section className="transition-section section-pad" id="transition">
          <div className="transition-copy reveal">
            <span className="eyebrow yellow">
              {homeContent.transition.eyebrow}
            </span>
            <h2 dangerouslySetInnerHTML={{ __html: homeContent.transition.title }} />
            {homeContent.transition.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <Link to="/join-us" className="pill light">
              Read more about our market capabilities <b>↗</b>
            </Link>
          </div>
          <div className="transition-img reveal">
            <img 
              src={getImage('arkmont-production-1-1_2025-10-13-172336_pslr.jpg', 1600, '4:3')}
              alt="Energy transition landscape" 
            />
          </div>
        </section>

        {/* GLOBAL REACH SECTION */}
        <section className="reach section-pad" id="projects">
          <div className="reach-head reveal">
            <div>
              <span className="eyebrow">
                {homeContent.reach.eyebrow}
              </span>
              <h2>We go wherever<br />you need us to go</h2>
            </div>
            <p>{homeContent.reach.intro}</p>
            <div />
          </div>

          <div className="map reveal">
            <div className="world" />
            {globalStats.map((stat) => (
              <div key={stat.label} className="stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="reach-foot reveal">
            <p>{homeContent.reach.body}</p>
            <Link to="/contact-us" className="pill dark">
              Find an office <b>↗</b>
            </Link>
          </div>
        </section>

        {/* CAREERS SECTION */}
        <section className="careers" id="careers">
          <div className="career-photo">
            <img 
              src={getImage('arkmont-production-1-1_2025-10-13-172336_pslr.jpg', 1600, '4:3')}
              alt="Arkmont colleagues"
            />
          </div>
          <div className="career-copy reveal">
            <span className="eyebrow yellow">
              {homeContent.careers.eyebrow}
            </span>
            <h2>{homeContent.careers.title}</h2>
            <p>{homeContent.careers.body}</p>
            <Link to="/join-us" className="pill light">
              Learn more <b>↗</b>
            </Link>
          </div>

          <div className="vacancies">
            <div className="vacancy-heading">
              <span className="eyebrow yellow">Our Latest Vacancies</span>
              <h2>Find your place at Arkmont</h2>
            </div>

            <form onSubmit={handleJobSearch} className="job-filters">
              <label htmlFor="job-keyword">
                Keywords
                <input 
                  id="job-keyword" 
                  type="search" 
                  value={searchKeyword}
                  onChange={(e) => {
                    setSearchKeyword(e.target.value)
                    applyFilters(e.target.value, selectedCategory, selectedLocation)
                  }}
                  placeholder="Job title or city" 
                />
              </label>
              <label htmlFor="job-category">
                Profession
                <select 
                  id="job-category"
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value)
                    applyFilters(searchKeyword, e.target.value, selectedLocation)
                  }}
                >
                  <option value="">All professions</option>
                  {uniqueCategories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </label>
              <label htmlFor="job-location">
                Location
                <select 
                  id="job-location"
                  value={selectedLocation}
                  onChange={(e) => {
                    setSelectedLocation(e.target.value)
                    applyFilters(searchKeyword, selectedCategory, e.target.value)
                  }}
                >
                  <option value="">All locations</option>
                  {uniqueCountries.map(country => (
                    <option key={country} value={country}>{country}</option>
                  ))}
                </select>
              </label>
              <button type="submit">Search <b>→</b></button>
            </form>

            <div className="filter-summary">
              <span aria-live="polite">
                <b id="job-count">{filteredVacancies.length}</b> opportunities
              </span>
              {(searchKeyword || selectedCategory || selectedLocation) && (
                <button id="clear-jobs" type="button" onClick={handleClearFilters}>
                  Clear filters ×
                </button>
              )}
            </div>

            <div className="jobs" id="jobs-list" aria-live="polite" aria-label="Current vacancies">
              {filteredVacancies.length > 0 ? (
                filteredVacancies.map((job) => (
                  <Link 
                    key={job.id} 
                    to="/careers" 
                    className="reveal"
                  >
                    <span>
                      <em>{job.category}</em>
                      <b>{job.title}</b>
                      <small>Location: {job.city}, {job.country}</small>
                    </span>
                    <i>↗</i>
                  </Link>
                ))
              ) : (
                <div className="no-jobs" style={{ gridColumn: '1/-1', textAlign: 'center', padding: '60px 0', border: '1px solid #4d4a72', color: '#c5c3d4' }}>
                  <h3>No vacancies found</h3>
                  <p>Try removing a filter or using a broader keyword.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* LATEST NEWS & INSIGHTS SECTION */}
        <section className="latest section-pad" id="news">
          <div className="latest-head reveal">
            <div>
              <span className="eyebrow">Arkmont</span>
              <h2>Latest News & Insights</h2>
            </div>
            <div className="arrows">
              <button className="prev" onClick={() => scrollNews('prev')}>←</button>
              <button className="next" onClick={() => scrollNews('next')}>→</button>
            </div>
          </div>

          <div ref={newsTrackRef} className="news-track">
            {newsItems.map((news, idx) => (
              <article key={idx} className="news-card">
                <div className="news-img">
                  <img 
                    src={getImage(news.image, 900)} 
                    alt={news.title}
                    onError={(e) => {
                      e.target.src = getImage('videothumb_website-1.jpg', 900)
                    }}
                  />
                </div>
                <small>{news.category} — {news.date}</small>
                <h3>{news.title}</h3>
                <p>{news.excerpt}</p>
                <Link to="/news-insights">
                  Read article <b>↗</b>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Video Overlay Modal */}
      <VideoModal isOpen={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  )
}
