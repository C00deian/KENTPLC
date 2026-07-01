import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Users, Heart, GraduationCap } from 'lucide-react'

export default function PillarPeople() {
  return (
    <main className="pt-[76px] lg:pt-[112px] bg-white">
      {/* Page Hero */}
      <section className="bg-[#282554] text-white py-24 px-[5.35vw] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-[30vw] font-bold text-white select-none leading-none translate-y-12">
          P
        </div>
        
        <div className="max-w-4xl relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-3 block">
            Sustainability Pillar 01
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            People First
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl">
            Providing a safe, inclusive, and collaborative environment where our 13,000+ colleagues can thrive.
          </p>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-20 px-[5.35vw] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-semibold text-[#282554] mb-6">
              Our Commitment to Our People
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-light">
              We believe that our people are the energy within that powers our success. Their ideas, execution expertise, and commitment to safe practices keep our projects moving across 34 countries.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-light">
              We actively foster a culture of inclusion, offering careers in diverse energy sectors. By promoting safety education and providing robust training pathways, we ensure every employee returns home safely.
            </p>
          </div>

          <div className="flex flex-col gap-8 justify-center">
            <div className="flex gap-4 items-start">
              <Users className="w-8 h-8 text-[#11c5c2] mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#282554] mb-1">Diversity &amp; Inclusion</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">We are dedicated to increasing representation, currently achieving a 38% diverse hiring ratio globally.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Heart className="w-8 h-8 text-[#11c5c2] mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#282554] mb-1">Health &amp; Safety</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">Safety is our absolute value. With a Lost Time Injury (LTI) rate of 0.04, we rank best-in-class for safety execution.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <GraduationCap className="w-8 h-8 text-[#11c5c2] mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#282554] mb-1">Professional Development</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">Over 150,000 safety and professional skill training hours delivered to teams worldwide.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back link */}
      <section className="bg-[#f5f4f0] py-12 text-center">
        <Link to="/sustainability" className="text-[#282554] font-semibold hover:text-[#11c5c2] underline transition">
          Back to Sustainability overview
        </Link>
      </section>
    </main>
  )
}
