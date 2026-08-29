import React, { useState } from 'react'
import { officesData, corporateDetails } from '../data/mockData'
import { Phone, MapPin, Send, Mail, Building2 } from 'lucide-react'

export default function Contact() {
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

        {/* Office locator & Corporate Details */}
        <div className="flex flex-col gap-12">
          {/* Corporate Details Card (from image) */}
          <div className="bg-[#2b2859] text-white p-8 rounded-xl shadow-lg border border-[#454268]">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-[#ffd52e]" />
              <h2 className="text-xl font-bold">Corporate details</h2>
            </div>

            <div className="flex flex-col gap-6 text-sm">
              <div>
                <span className="text-[#c5c3d4] block mb-1">Full Legal Name</span>
                <p className="font-semibold text-lg">{corporateDetails.legalName}</p>
              </div>

              <div>
                <span className="text-[#c5c3d4] block mb-1">CIN</span>
                <p className="font-medium tracking-wider">{corporateDetails.cin}</p>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-[#11c5c2] shrink-0 mt-1" />
                <div>
                  <p className="leading-relaxed">
                    {corporateDetails.address}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#11c5c2] shrink-0" />
                <a href={`mailto:${corporateDetails.email}`} className="hover:text-[#11c5c2] transition">
                  {corporateDetails.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#282554] mb-8">
              Office Location
            </h2>
            <div className="bg-[#f5f4f0] p-8 rounded-lg border border-gray-100">
               <h3 className="text-xl font-bold text-[#282554] mb-4">Gomati Nagar Lucknow (Main Office)</h3>
               <div className="flex items-start gap-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-[#11c5c2] shrink-0 mt-1" />
                  <p>{corporateDetails.address}</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
