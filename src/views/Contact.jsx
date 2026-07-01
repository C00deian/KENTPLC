import React, { useState } from 'react'
import { officesData } from '../data/mockData'
import { Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const [selectedRegion, setSelectedRegion] = useState(officesData[0].region)
  const [inquirySubmitted, setInquirySubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    setInquirySubmitted(true)
    setTimeout(() => {
      alert(`Thank you, ${name}! Your message has been sent successfully (Mock submit).`)
      setName('')
      setEmail('')
      setMessage('')
      setInquirySubmitted(false)
    }, 500)
  }

  const activeRegionData = officesData.find(r => r.region === selectedRegion) || officesData[0]

  return (
    <main className="pt-[76px] lg:pt-[112px] bg-white">
      {/* Page Hero */}
      <section className="bg-[#282554] text-white py-24 px-[5.35vw] relative overflow-hidden">
        <div className="max-w-4xl relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-3 block">
            Get in touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl font-light text-white/95 leading-relaxed">
            Have an inquiry or want to discuss a project with our engineering and advisory teams? Reach out to us below.
          </p>
        </div>
      </section>

      {/* Two Column Form and Offices */}
      <section className="py-20 px-[5.35vw] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Contact Form */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#282554] mb-8">
            Send Us a Message
          </h2>
          
          <form onSubmit={handleInquirySubmit} className="flex flex-col gap-6 text-[#282554]">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-gray-500">Your Name</label>
              <input 
                id="name" 
                type="text" 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter full name" 
                className="border border-gray-300 rounded p-3 text-sm focus:border-[#11c5c2] focus:outline-none w-full"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-gray-500">Email Address</label>
              <input 
                id="email" 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com" 
                className="border border-gray-300 rounded p-3 text-sm focus:border-[#11c5c2] focus:outline-none w-full"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-semibold text-gray-500">Message / Inquiry Details</label>
              <textarea 
                id="message" 
                rows="5" 
                required 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your inquiry..." 
                className="border border-gray-300 rounded p-3 text-sm focus:border-[#11c5c2] focus:outline-none w-full resize-y"
              />
            </div>

            <button 
              type="submit" 
              disabled={inquirySubmitted}
              className="py-3.5 bg-[#11c5c2] text-[#282554] font-bold rounded-full hover:bg-[#ffd52e] hover:-translate-y-0.5 transition cursor-pointer self-start px-8 flex items-center justify-center gap-4 disabled:opacity-50"
            >
              {inquirySubmitted ? 'Sending...' : 'Send Message'} <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        {/* Office locator */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#282554] mb-8">
            Office Locator
          </h2>

          {/* Region Tabs */}
          <div className="flex gap-2 border-b border-gray-200 pb-4 mb-8 overflow-x-auto">
            {officesData.map(reg => (
              <button
                key={reg.region}
                onClick={() => setSelectedRegion(reg.region)}
                className={`px-4 py-2 text-sm font-semibold transition shrink-0 cursor-pointer border-b-2 ${
                  selectedRegion === reg.region 
                    ? 'border-[#11c5c2] text-[#11c5c2]' 
                    : 'border-transparent text-gray-500 hover:text-[#282554]'
                }`}
              >
                {reg.region}
              </button>
            ))}
          </div>

          {/* Region Offices List */}
          <div className="flex flex-col gap-6">
            {activeRegionData.offices.map(office => (
              <div 
                key={office.city}
                className="bg-[#f5f4f0] p-6 rounded border border-gray-100 flex flex-col gap-3"
              >
                <h3 className="text-xl font-semibold text-[#282554]">
                  {office.city}, {office.country}
                </h3>
                
                <div className="flex items-start gap-2.5 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-[#11c5c2] shrink-0 mt-0.5" />
                  <span>{office.address}</span>
                </div>

                <div className="flex items-center gap-2.5 text-sm text-gray-600">
                  <Phone className="w-4 h-4 text-[#11c5c2] shrink-0" />
                  <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:underline hover:text-[#11c5c2]">
                    {office.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
