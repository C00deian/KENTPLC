import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, UserCheck, ShieldCheck, Leaf } from 'lucide-react'
import { sustainabilityData } from '../data/mockData'

export default function Sustainability() {
  const { hero, pillars } = sustainabilityData

  const pillarIcons = [
    <UserCheck className="w-8 h-8 text-[#11c5c2]" />,
    <Leaf className="w-8 h-8 text-[#11c5c2]" />,
    <ShieldCheck className="w-8 h-8 text-[#11c5c2]" />
  ]

  return (
    <main className="pt-[76px] lg:pt-[112px] bg-white">
      {/* Page Hero */}
      <section className="relative h-[480px] text-white flex items-center bg-[#282554] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-75 scale-105"
          style={{ backgroundImage: `url(/images/${hero.image}?q=82&auto=format&fit=crop&w=1800)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#282554] via-[#282554]/40 to-transparent" />
        
        <div className="relative z-10 px-[5.35vw] max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-3 block">
            Sustainability
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {hero.title}
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/90 leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Intro Block */}
      <section className="py-20 px-[5.35vw] bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-[#282554] mb-6">
            Action. by Kent
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed font-light mb-6">
            For us, sustainability is not a checkbox. It is woven into our values, and how we approach engineering advisory, construction project management, and asset performance. We believe the energy transition is the defining challenge of our generation, and we are courageously building the infrastructure to meet it.
          </p>
        </div>
      </section>

      {/* Three Pillars Grid */}
      <section className="bg-[#f5f4f0] py-24 px-[5.35vw]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, idx) => (
            <div 
              key={pillar.id}
              className="bg-white p-10 rounded shadow-sm border border-gray-100 flex flex-col justify-between min-h-[480px]"
            >
              <div>
                <div className="mb-6">{pillarIcons[idx]}</div>
                <span className="text-xs font-semibold text-[#11c5c2] uppercase tracking-wider block mb-2">
                  {pillar.eyebrow}
                </span>
                <h3 className="text-2xl font-semibold text-[#282554] mb-4">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light mb-8">
                  {pillar.desc}
                </p>

                {/* Pillar Stats */}
                <div className="border-t border-gray-100 pt-6 flex flex-col gap-4">
                  {pillar.stats.map((s, i) => (
                    <div key={i} className="flex justify-between items-center text-xs md:text-sm">
                      <span className="text-gray-400 font-light">{s.label}</span>
                      <strong className="text-[#282554] font-semibold">{s.value}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <Link 
                  to={`/sustainability/${pillar.id}`}
                  className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#282554] font-bold hover:text-[#11c5c2] transition"
                >
                  Explore Pillar <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
