import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { footerData } from '../data/mockData'
import { ArrowUp } from 'lucide-react'

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
      <footer id="contact" className="bg-[#211f49] text-white pt-20 px-[5.35vw] pb-6 relative z-10">
        {/* Footer Top */}
        <div className="footer-top flex flex-col md:flex-row justify-between items-start md:items-end border-b border-[#555277] pb-14">
          <Link to="/" className="w-36 mb-6 md:mb-0">
            <img src="/logo-primary.png" alt="Kent logo" className="brightness-0 invert w-full h-auto" />
          </Link>
          <span className="text-3xl md:text-5xl font-light tracking-tight text-white/90">
            the energy within.
          </span>
        </div>

        {/* Footer Grid */}
        <div className="footer-grid grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 py-16">
          {/* Social Links */}
          <div>
            <small className="text-[#11c5c2] uppercase tracking-wider font-semibold text-xs block mb-6">
              Follow Us
            </small>
            <div className="socials flex gap-2.5">
              {footerData.social.map((socialIcon, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="w-10 h-10 border border-[#777491] rounded-full flex items-center justify-center text-sm hover:bg-[#11c5c2] hover:text-[#282554] hover:border-[#11c5c2] transition duration-200"
                >
                  {socialIcon}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {footerData.columns.map((column) => (
            <div key={column.title}>
              <small className="text-[#11c5c2] uppercase tracking-wider font-semibold text-xs block mb-6">
                {column.title}
              </small>
              <div className="flex flex-col gap-3">
                {column.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-white/80 hover:text-white hover:translate-x-1 transition duration-200 text-[15px]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          {/* Back to Top */}
          <div className="flex md:justify-end items-start">
            <a
              href="#"
              onClick={handleBackToTop}
              className="backtop text-[#11c5c2] hover:text-white flex items-center gap-2 font-medium transition"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="legal border-t border-[#555277] pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-[#b9b7ca]">
          <span className="md:mr-auto">© ARKMONT {new Date().getFullYear()}</span>
          <div className="flex flex-wrap gap-4 md:gap-7">
            {footerData.legal.map((link) => (
              <a
                key={link}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:underline hover:text-white transition"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Back to Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={handleBackToTop}
          className="fixed bottom-6 right-6 w-12 h-12 md:w-14 md:h-14 bg-[#11c5c2] text-[#282554] rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 active:scale-95 transition z-40"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      )}

      {/* Cookie Banner */}
      {!cookieDismissed && (
        <div className="cookie fixed bottom-4 left-1/2 -translate-x-1/2 bg-[#141331] text-white px-5 py-3.5 rounded shadow-xl flex items-center justify-between text-xs z-50 w-[calc(100%-24px)] md:w-auto min-w-[320px] md:min-w-[450px]">
          <span className="leading-relaxed">
            By using our website you consent to all cookies in accordance with our{' '}
            <u className="cursor-pointer hover:text-gray-300">Privacy Policy</u>.
          </span>
          <button
            onClick={() => setCookieDismissed(true)}
            className="text-white hover:text-gray-300 text-lg font-light pl-4 cursor-pointer focus:outline-none"
            aria-label="Close cookies banner"
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
