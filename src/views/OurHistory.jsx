import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { whoWeAreData } from '../data/mockData'

export default function OurHistory() {
  const { timeline } = whoWeAreData

  return (
    <main className="pt-[76px] lg:pt-[112px] bg-white">
      {/* Page Hero */}
      <section className="bg-[#282554] text-white py-24 px-[5.35vw] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(https://kent.imgix.net/images/Planet-transition-optimised_2025-10-13-172356_igkb.jpg?q=82&auto=format&fit=crop&w=1800)` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#282554] to-[#282554]/60" />
        
        <div className="max-w-4xl relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-3 block">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Our History
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl">
            Over a century of pioneering engineering, solving complex challenges across global energy markets.
          </p>
        </div>
      </section>

      {/* History Intro */}
      <section className="py-20 px-[5.35vw] bg-white text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#282554] mb-6">
          A Century of Innovation
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">
          From our founding in 1919 as a local utilities engineering company, Kent has grown through dedication, expert engineering, and key strategic acquisitions. Today, we stand as one of the largest engineering and project management companies in the energy industry, maintaining values of agility and safety.
        </p>
      </section>

      {/* Vertical Timeline */}
      <section className="bg-[#f5f4f0] py-24 px-[5.35vw]">
        <div className="max-w-4xl mx-auto relative border-l border-gray-300 pl-8 md:pl-12 flex flex-col gap-16">
          {timeline.map((milestone, idx) => (
            <motion.div 
              key={milestone.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-[#11c5c2] border-4 border-white shadow" />
              
              <div className="bg-white p-8 rounded shadow-sm border border-gray-100">
                <span className="text-xs font-semibold text-[#11c5c2] uppercase tracking-wider block mb-2">
                  Timeline Milestone
                </span>
                <span className="text-3xl font-bold text-[#282554] block mb-3">
                  {milestone.year}
                </span>
                <h3 className="text-xl font-semibold text-[#282554] mb-3">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed text-sm md:text-base">
                  {milestone.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <Link to="/who-we-are" className="text-[#282554] font-semibold hover:text-[#11c5c2] underline transition">
            Back to Who We Are overview
          </Link>
        </div>
      </section>
    </main>
  )
}
