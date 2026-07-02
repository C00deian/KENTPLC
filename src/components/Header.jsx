import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { topNavigation, serviceGroups, marketGroups } from '../data/mockData'
import { Search, Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [activeMega, setActiveMega] = useState(null) // 'services' | 'markets' | null
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [isCompact, setIsCompact] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  
  const lastScrollY = useRef(0)
  const location = useLocation()
  const activeMegaRef = useRef(activeMega)

  // Sync activeMegaRef
  useEffect(() => {
    activeMegaRef.current = activeMega
  }, [activeMega])

  // Close menus on page change
  useEffect(() => {
    setActiveMega(null)
    setMobileMenuOpen(false)
    setSearchOpen(false)
  }, [location.pathname])

  // Handle scroll behaviors (compact header & hide on scroll down)
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      setIsCompact(y > 80)
      setIsHidden(y > lastScrollY.current && y > 500)
      
      // Close mega menu on scroll
      if (activeMegaRef.current && Math.abs(y - lastScrollY.current) > 10) {
        setActiveMega(null)
      }
      
      lastScrollY.current = y
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mega menu when clicking outside
  useEffect(() => {
    const clickOutside = (e) => {
      if (activeMega && !e.target.closest('.mega-menu') && !e.target.closest('.nav-mega-trigger')) {
        setActiveMega(null)
      }
    }
    document.addEventListener('click', clickOutside)
    return () => document.removeEventListener('click', clickOutside)
  }, [activeMega])

  // Toggle mega-open class on body for CSS backdrop overlay
  useEffect(() => {
    if (activeMega) {
      document.body.classList.add('mega-open')
    } else {
      document.body.classList.remove('mega-open')
    }
    return () => {
      document.body.classList.remove('mega-open')
    }
  }, [activeMega])

  const slugify = (value) => 
    value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  const handleTriggerClick = (type) => {
    if (activeMega === type) {
      setActiveMega(null)
    } else {
      setActiveMega(type)
      setSelectedGroupIndex(0)
    }
  }

  const activeGroups = activeMega === 'services' ? serviceGroups : marketGroups

  return (
    <>
      <header className={`site-header ${isCompact ? 'compact' : ''} ${isHidden ? 'hidden' : ''}`}>
        {/* Topbar */}
        <div 
          className="topbar"
          style={{ 
            height: isCompact ? '0px' : '36px', 
            opacity: isCompact ? 0 : 1, 
            transition: 'all 0.3s',
            overflow: 'hidden'
          }}
        >
          <nav>
            {topNavigation.map((item) => (
              <NavLink 
                key={item.href} 
                to={item.href}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mainnav */}
        <div className="mainnav">
          <Link to="/" className="logo">
            <img src="/logo-primary.png" alt="Kent Logo" />
          </Link>

          {/* Desktop Links */}
          <nav>
            <button 
              className={`nav-mega-trigger ${activeMega === 'services' ? 'active' : ''}`}
              onClick={() => handleTriggerClick('services')}
            >
              Our Services <i className="fal fa-chevron-down" aria-hidden="true"></i>
            </button>
            
            <button 
              className={`nav-mega-trigger ${activeMega === 'markets' ? 'active' : ''}`}
              onClick={() => handleTriggerClick('markets')}
            >
              Our Markets <i className="fal fa-chevron-down" aria-hidden="true"></i>
            </button>

            <Link to="/who-we-are/purpose-beliefs">Kent Data Centres</Link>
            <Link to="/projects">Our Projects</Link>
          </nav>

          {/* Nav Actions */}
          <div className="nav-actions">
            <Link to="/contact-us" className="contact">Contact Us</Link>
            
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="search"
              aria-label="Search"
            />

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="menu"
              aria-label="Menu"
            >
              <i></i><i></i>
            </button>
          </div>
        </div>

        {/* Services Mega Menu */}
        <div className={`mega-menu ${activeMega === 'services' ? 'open' : ''} absolute left-0 right-0 bg-white grid grid-cols-[37%_63%] text-[#282554] shadow-2xl border-t border-gray-100 max-lg:hidden overflow-hidden h-[min(620px,calc(100vh-112px))]`}>
          {/* Mega Rail (Left Pane) */}
          <div className="mega-rail bg-[#282554] text-white p-10 pl-[5.4vw] overflow-y-auto">
            <Link 
              to="/#services"
              onClick={() => setActiveMega(null)}
              className="mega-all flex justify-between items-center mr-8 pb-6 mb-6 border-b border-[#5a577b] text-xl font-medium hover:text-[#ffd52e] transition"
            >
              All Our Services <ArrowUpRight className="w-5 h-5" />
            </Link>
            
            <div className="flex flex-col gap-2">
              {serviceGroups.map((group, idx) => (
                <button
                  key={group.title}
                  onMouseEnter={() => activeMega === 'services' && setSelectedGroupIndex(idx)}
                  onFocus={() => activeMega === 'services' && setSelectedGroupIndex(idx)}
                  onClick={() => setSelectedGroupIndex(idx)}
                  className={`mega-group w-full text-left py-3 pr-8 flex justify-between items-center text-lg transition duration-200 cursor-pointer ${
                    activeMega === 'services' && selectedGroupIndex === idx ? 'text-[#ffd52e] pl-3' : 'text-white hover:text-[#ffd52e]'
                  }`}
                >
                  <span>{group.title}</span>
                  <span className={`transition-all duration-200 ${activeMega === 'services' && selectedGroupIndex === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mega Detail (Right Pane) */}
          <div className="mega-detail p-14 px-[7vw] overflow-y-auto relative bg-white">
            <button 
              onClick={() => setActiveMega(null)}
              className="mega-close absolute right-6 top-6 w-11 h-11 border border-[#282554] rounded-full flex items-center justify-center font-semibold hover:bg-[#11c5c2] hover:rotate-90 transition duration-250"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>

            {serviceGroups[selectedGroupIndex] && (
              <div className="flex flex-col h-full">
                <span className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                  Capabilities
                </span>
                <h3 className="text-4xl font-medium text-[#282554] mt-3 mb-4 tracking-tight">
                  {serviceGroups[selectedGroupIndex].title}
                </h3>
                {serviceGroups[selectedGroupIndex].description && (
                  <p className="text-gray-600 text-[17px] leading-relaxed max-w-xl">
                    {serviceGroups[selectedGroupIndex].description}
                  </p>
                )}

                <div className="mega-links grid grid-cols-2 gap-x-10 mt-8 pt-8 border-t border-gray-200">
                  {serviceGroups[selectedGroupIndex].items.map((item) => (
                    <Link 
                      key={item} 
                      to={`/services/${slugify(item)}`}
                      onClick={() => setActiveMega(null)}
                      className="flex justify-between items-center py-4 border-b border-gray-100 hover:text-[#008f8e] group transition"
                    >
                      <span className="font-medium text-[15px]">{item}</span>
                      <ArrowUpRight className="w-4 h-4 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-200" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Markets Mega Menu */}
        <div className={`mega-menu ${activeMega === 'markets' ? 'open' : ''} absolute left-0 right-0 bg-white grid grid-cols-[37%_63%] text-[#282554] shadow-2xl border-t border-gray-100 max-lg:hidden overflow-hidden h-[min(620px,calc(100vh-112px))]`}>
          {/* Mega Rail (Left Pane) */}
          <div className="mega-rail bg-[#282554] text-white p-10 pl-[5.4vw] overflow-y-auto">
            <Link 
              to="/#transition"
              onClick={() => setActiveMega(null)}
              className="mega-all flex justify-between items-center mr-8 pb-6 mb-6 border-b border-[#5a577b] text-xl font-medium hover:text-[#ffd52e] transition"
            >
              All Our Markets <ArrowUpRight className="w-5 h-5" />
            </Link>
            
            <div className="flex flex-col gap-2">
              {marketGroups.map((group, idx) => (
                <button
                  key={group.title}
                  onMouseEnter={() => activeMega === 'markets' && setSelectedGroupIndex(idx)}
                  onFocus={() => activeMega === 'markets' && setSelectedGroupIndex(idx)}
                  onClick={() => setSelectedGroupIndex(idx)}
                  className={`mega-group w-full text-left py-3 pr-8 flex justify-between items-center text-lg transition duration-200 cursor-pointer ${
                    activeMega === 'markets' && selectedGroupIndex === idx ? 'text-[#ffd52e] pl-3' : 'text-white hover:text-[#ffd52e]'
                  }`}
                >
                  <span>{group.title}</span>
                  <span className={`transition-all duration-200 ${activeMega === 'markets' && selectedGroupIndex === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Mega Detail (Right Pane) */}
          <div className="mega-detail p-14 px-[7vw] overflow-y-auto relative bg-white">
            <button 
              onClick={() => setActiveMega(null)}
              className="mega-close absolute right-6 top-6 w-11 h-11 border border-[#282554] rounded-full flex items-center justify-center font-semibold hover:bg-[#11c5c2] hover:rotate-90 transition duration-250"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>

            {marketGroups[selectedGroupIndex] && (
              <div className="flex flex-col h-full">
                <span className="text-sm font-semibold tracking-wide text-gray-400 uppercase">
                  Sectors
                </span>
                <h3 className="text-4xl font-medium text-[#282554] mt-3 mb-4 tracking-tight">
                  {marketGroups[selectedGroupIndex].title}
                </h3>
                {marketGroups[selectedGroupIndex].description && (
                  <p className="text-gray-600 text-[17px] leading-relaxed max-w-xl">
                    {marketGroups[selectedGroupIndex].description}
                  </p>
                )}

                <div className="mega-links grid grid-cols-2 gap-x-10 mt-8 pt-8 border-t border-gray-200">
                  {marketGroups[selectedGroupIndex].items.map((item) => (
                    <Link 
                      key={item} 
                      to={`/markets/${slugify(item)}`}
                      onClick={() => setActiveMega(null)}
                      className="flex justify-between items-center py-4 border-b border-gray-100 hover:text-[#008f8e] group transition"
                    >
                      <span className="font-medium text-[15px]">{item}</span>
                      <ArrowUpRight className="w-4 h-4 translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition duration-200" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#282554]/95 z-50 flex items-center justify-center p-6"
            >
              <button 
                onClick={() => setSearchOpen(false)}
                className="absolute right-8 top-8 w-12 h-12 border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full max-w-3xl text-center">
                <h2 className="text-3xl text-white font-medium mb-6">Search Kent</h2>
                <form 
                  onSubmit={(e) => {
                    e.preventDefault()
                    alert(`Searching for: ${searchQuery}`)
                    setSearchOpen(false)
                  }}
                  className="relative flex items-center border-b-2 border-white/30 focus-within:border-[#11c5c2] py-3"
                >
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter keywords..."
                    className="w-full bg-transparent text-white text-2xl font-light outline-none border-none placeholder-white/40"
                    autoFocus
                  />
                  <button type="submit" className="text-white hover:text-[#11c5c2] transition">
                    <Search className="w-7 h-7" />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Nav Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35 }}
              className="fixed inset-y-0 right-0 w-full max-w-[400px] bg-[#282554] text-white z-50 flex flex-col p-8 overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-10">
                <img src="/logo-primary.png" alt="Kent" className="h-10 invert brightness-0" />
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-11 h-11 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/10 transition"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-xl font-medium">
                {topNavigation.map((item) => (
                  <NavLink 
                    key={item.href}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) => 
                      `hover:text-[#11c5c2] transition ${isActive ? 'text-[#11c5c2]' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                
                <hr className="border-white/10 my-4" />
                
                <span className="text-xs uppercase tracking-wider text-white/40 font-semibold">Services</span>
                {serviceGroups.slice(0, 4).map((group) => (
                  <Link 
                    key={group.title}
                    to={`/services/${slugify(group.title)}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base text-white/80 hover:text-white"
                  >
                    {group.title}
                  </Link>
                ))}

                <span className="text-xs uppercase tracking-wider text-white/40 font-semibold mt-4">Markets</span>
                {marketGroups.slice(0, 4).map((group) => (
                  <Link 
                    key={group.title}
                    to={`/markets/${slugify(group.title)}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base text-white/80 hover:text-white"
                  >
                    {group.title}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <Link 
                  to="/contact-us"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center block bg-[#11c5c2] text-[#282554] py-3 rounded-full font-semibold hover:bg-[#ffd52e] transition"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
