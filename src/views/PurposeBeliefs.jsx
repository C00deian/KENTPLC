import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CheckCircle2, ShieldAlert } from 'lucide-react'
import { whoWeAreData } from '../data/mockData'

export default function PurposeBeliefs() {
  const { values } = whoWeAreData

  return (
    <main className="pt-[76px] lg:pt-[112px]">
      {/* Page Hero */}
      <section className="bg-[#282554] text-white py-24 px-[5.35vw] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-[30vw] font-bold text-white select-none leading-none translate-y-12 translate-x-12">
          K
        </div>
        
        <div className="max-w-4xl relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-3 block">
            Who We Are
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Purpose &amp; Beliefs
          </h1>
          <p className="text-xl md:text-3xl font-light text-white/90 leading-relaxed max-w-3xl">
            "Courageously tackling the greatest challenge of our time, to bring our world the energy it needs in the most responsible way ever imagined."
          </p>
        </div>
      </section>

      {/* Our Mission Detail */}
      <section className="bg-white py-20 px-[5.35vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-semibold text-[#282554] mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
              We stand at a critical inflection point in human history. The global energy system must undergo a monumental transition, balancing the immediate demands of energy security with the long-term necessity of decarbonisation.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
              Kent is committed to facilitating this transition. We believe that conventional energy must be produced in the most efficient and low-emission way possible, while we aggressively develop low-carbon solutions and build the renewable infrastructure of tomorrow.
            </p>
          </div>

          <div className="bg-[#f5f4f0] p-10 rounded-lg flex flex-col justify-center">
            <h3 className="text-xl font-bold text-[#282554] mb-6">
              Our Core Guiding Principles
            </h3>
            
            <div className="flex flex-col gap-5">
              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#11c5c2] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#282554] text-base mb-1">Safety First, Always</h4>
                  <p className="text-gray-500 text-sm font-light">Zero compromise on the health, safety, and wellbeing of our people.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#11c5c2] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#282554] text-base mb-1">Environmental Integrity</h4>
                  <p className="text-gray-500 text-sm font-light">Actively reducing greenhouse gas footprint in design and operations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-[#11c5c2] shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-[#282554] text-base mb-1">Inclusivity and Unity</h4>
                  <p className="text-gray-500 text-sm font-light">A global workforce sharing ideas and welcoming diverse views.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Cards Grid */}
      <section className="bg-[#f5f4f0] py-24 px-[5.35vw]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#282554] mb-4">
              Our Values in Action
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto font-light text-base md:text-lg">
              We live our beliefs through actions, from advisory discussions to construction management in the field.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((val) => (
              <div key={val.title} className="bg-white p-10 rounded shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-[#11c5c2]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#11c5c2]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#282554] mb-3">{val.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light text-sm md:text-base">{val.desc}</p>
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
    </main>
  )
}
