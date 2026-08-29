import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { footerData, corporateDetails } from '../data/mockData'
import { ArrowUp, Mail, MapPin, Building2, Globe2 } from 'lucide-react'

export default function Footer() {
  const [cookieDismissed, setCookieDismissed] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY >= window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleBackToTop = (e) => {
    e.preventDefault()
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <>
      <footer id="contact" className="bg-[#1a1935] text-white pt-20 px-[5.35vw] pb-6 relative z-10 border-t border-white/5">
        {/* Main Footer Layout Inspired by Provided Image */}
        <div className="max-w-7xl mx-auto flex flex-col gap-16">

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] gap-12 lg:gap-8 items-start">

            {/* 1. Corporate Details Card */}
            <div className="bg-[#2b2859] p-8 rounded-2xl shadow-xl border border-[#454268]">
              <div className="flex items-center gap-3 mb-8">
                <Building2 className="w-6 h-6 text-[#11c5c2]" />
                <h2 className="text-xl font-bold tracking-tight">Corporate details</h2>
              </div>

              <div className="flex flex-col gap-6 text-sm">
                <div>
                  <span className="text-[#c5c3d4] block mb-1 uppercase text-[10px] tracking-widest font-bold">Full Legal Name</span>
                  <p className="font-semibold text-lg leading-tight">{corporateDetails.legalName}</p>
                </div>

                <div>
                  <span className="text-[#c5c3d4] block mb-1 uppercase text-[10px] tracking-widest font-bold">CIN</span>
                  <p className="font-medium tracking-widest text-[#11c5c2]">{corporateDetails.cin}</p>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-[#11c5c2] shrink-0 mt-1" />
                  <div>
                    <p className="leading-relaxed text-[#f5f4f0]">
                      {corporateDetails.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                  <Mail className="w-5 h-5 text-[#ffd52e] shrink-0" />
                  <a href={`mailto:${corporateDetails.email}`} className="hover:text-[#11c5c2] transition text-[#c5c3d4] font-medium">
                    {corporateDetails.email}
                  </a>
                </div>
              </div>
            </div>

            {/* 2. Quick Links */}
            <div>
              <h3 className="text-[#11c5c2] uppercase tracking-[0.2em] font-bold text-xs mb-8">
                Quick Links
              </h3>
              <div className="flex flex-col gap-4">
                <Link to="/#services" className="text-[#c5c3d4] hover:text-white transition">Services</Link>
                <Link to="/#transition" className="text-[#c5c3d4] hover:text-white transition">Industries</Link>
                <Link to="/projects" className="text-[#c5c3d4] hover:text-white transition">Projects</Link>
                <Link to="/sustainability" className="text-[#c5c3d4] hover:text-white transition">HSE & Quality</Link>
                <Link to="/contact-us" className="text-[#c5c3d4] hover:text-white transition">Contact</Link>
              </div>
            </div>

            {/* 3. Office Locations */}
            <div>
              <h3 className="text-[#11c5c2] uppercase tracking-[0.2em] font-bold text-xs mb-8">
                Office Locations
              </h3>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-lg text-white mb-2">Gomati Nagar Lucknow</p>
                <span className="text-[#c5c3d4] text-sm font-medium">Main Office</span>
                <div className="mt-4 flex items-center gap-2 text-xs text-[#6e6b91]">
                   <Globe2 className="w-4 h-4" />
                   <span>Lucknow, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>

            {/* 4. Branding & Follow */}
            <div className="flex flex-col items-start lg:items-end text-left lg:text-right gap-8">
              <Link to="/" className="w-44 brightness-0 invert opacity-90 hover:opacity-100 transition">
                <img src="/logo-primary.png" alt="Arkmont logo" className="w-full h-auto" />
              </Link>
              <p className="text-[#c5c3d4] text-lg font-light tracking-tight max-w-[280px]">
                 Precision in Commissioning, Excellence in Automation.
              </p>

              <div className="flex gap-3">
                {footerData.social.map((socialIcon, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-sm hover:bg-[#11c5c2] hover:text-[#282554] hover:border-[#11c5c2] transition duration-300"
                  >
                    {socialIcon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Legal Section */}
          <div className="border-t border-white/10 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-[#6e6b91] font-medium tracking-wide">
            <span className="order-2 md:order-1 uppercase">© {new Date().getFullYear()} ARKMONT TECHNOLOGY PRIVATE LIMITED. ALL RIGHTS RESERVED.</span>

            <div className="flex flex-wrap justify-center gap-6 md:gap-10 order-1 md:order-2 uppercase">
              {footerData.legal.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="hover:text-white transition"
                >
                  {link}
                </a>
              ))}
              <a href="#" onClick={handleBackToTop} className="text-[#11c5c2] hover:text-white transition">
                Back to Top ↑
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-6 right-6 w-12 h-12 md:w-14 md:h-14 bg-[#11c5c2] text-[#282554] rounded-full flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 active:scale-95 transition z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}

      {/* Cookie Banner */}
      {!cookieDismissed && (
        <div className="cookie fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#141331] text-white px-6 py-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-between text-xs z-50 w-[calc(100%-32px)] md:w-auto min-w-[320px] md:min-w-[500px] border border-white/5 backdrop-blur-md">
          <span className="leading-relaxed text-[#c5c3d4]">
            By using our website you consent to all cookies in accordance with our{' '}
            <u className="cursor-pointer hover:text-white">Privacy Policy</u>.
          </span>
          <button
            onClick={() => setCookieDismissed(true)}
            className="text-white hover:text-[#11c5c2] text-2xl font-light pl-6 cursor-pointer focus:outline-none"
            aria-label="Close cookies banner"
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
