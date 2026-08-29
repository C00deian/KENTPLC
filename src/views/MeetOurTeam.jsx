import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { whoWeAreData } from '../data/mockData'
import { ArrowUpRight } from 'lucide-react'

export default function MeetOurTeam() {
  const { leadership } = whoWeAreData
  const [activeLeader, setActiveLeader] = useState(null)

  return (
    <main className="pt-[76px] lg:pt-[112px] bg-white">
      {/* Page Hero */}
      <section className="bg-[#282554] text-white py-24 px-[5.35vw] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: `url(/images/arkmont-power-plant.jpg?q=82&auto=format&fit=crop&w=1800)` }} />
        
        <div className="max-w-4xl relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-3 block">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Meet Our Leadership
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl">
            Our global Executive Committee brings together diverse insights to drive safety and execution standards.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 px-[5.35vw] bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#11c5c2] uppercase tracking-wider text-xs font-semibold block mb-3">
              Executive Committee
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold text-[#282554] tracking-tight">
              Leading the Transition
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader) => (
              <div 
                key={leader.name}
                className="bg-[#f5f4f0] rounded overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col cursor-pointer group"
                onClick={() => setActiveLeader(leader)}
              >
                <div className="h-[280px] overflow-hidden relative">
                  <img 
                    src={`/images/${leader.image}`} 
                    alt={leader.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-103"
                    onError={(e) => {
                      e.target.src = '/images/videothumb_website-1.jpg'
                    }}
                  />
                  <div className="absolute inset-0 bg-[#282554]/10 group-hover:bg-transparent transition duration-300" />
                </div>
                
                <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                  <div>
                    <h3 className="text-xl font-semibold text-[#282554] group-hover:text-[#11c5c2] transition">
                      {leader.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{leader.role}</p>
                  </div>
                  <div className="flex justify-between items-center mt-6 text-xs text-[#282554] font-semibold">
                    <span>View Bio</span>
                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-[#11c5c2] group-hover:translate-x-0.5 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/who-we-are" className="text-[#282554] font-semibold hover:text-[#11c5c2] underline transition">
              Back to Who We Are overview
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Bio Modal overlay */}
      {activeLeader && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 md:p-10 z-[100]">
          <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveLeader(null)} />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg max-w-2xl w-full p-8 md:p-10 relative z-10 shadow-2xl"
          >
            <button 
              onClick={() => setActiveLeader(null)}
              className="absolute right-6 top-6 text-2xl text-gray-400 hover:text-black focus:outline-none cursor-pointer"
            >
              ×
            </button>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center mb-6">
              <div className="w-24 h-24 rounded-full overflow-hidden shrink-0">
                <img 
                  src={`/images/${activeLeader.image}`} 
                  alt={activeLeader.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/videothumb_website-1.jpg'
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#282554]">
                  {activeLeader.name}
                </h3>
                <p className="text-[#11c5c2] font-semibold text-base mt-1">{activeLeader.role}</p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed font-light text-base md:text-[17px]">
              {activeLeader.bio}
            </p>
          </motion.div>
        </div>
      )}
    </main>
  )
}
