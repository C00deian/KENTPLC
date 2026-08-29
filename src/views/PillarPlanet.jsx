import React from 'react'
import { Link } from 'react-router-dom'
import { Leaf, Award, Compass, Globe } from 'lucide-react'

export default function PillarPlanet() {
  return (
    <main className="pt-[76px] lg:pt-[112px] bg-white">
      {/* Page Hero */}
      <section className="bg-[#282554] text-white py-24 px-[5.35vw] relative overflow-hidden">

        <div className="max-w-4xl relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-3 block">
            Sustainability Pillar 02
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Planet &amp; Transition
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl">
            Pioneering low-carbon technology, aiming for Net-Zero operations, and supporting global decarbonisation.
          </p>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-20 px-[5.35vw] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-semibold text-[#282554] mb-6">
              Our Environmental Responsibility
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-light">
              We design energy systems that balance today's needs with tomorrow's net-zero mandates. We are actively helping traditional producers decarbonise through Carbon Capture, Utilisation &amp; Storage (CCUS) engineering.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-light">
              Additionally, we lead advisory consulting for offshore fixed and floating wind assets, bio-fuels, waste-to-energy, and green hydrogen networks. In our own operations, we target Net-Zero by 2030.
            </p>
          </div>

          <div className="flex flex-col gap-8 justify-center">
            <div className="flex gap-4 items-start">
              <Leaf className="w-8 h-8 text-[#11c5c2] mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#282554] mb-1">Direct Emission Cuts</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">We have reduced our direct corporate carbon emissions by 45% since 2021 through energy-efficiency audits.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Compass className="w-8 h-8 text-[#11c5c2] mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#282554] mb-1">Active Clean Projects</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">We support over 78 active low-carbon advisory projects, including regional UK CO2 pipelines and offshore wind.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Globe className="w-8 h-8 text-[#11c5c2] mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#282554] mb-1">Targeting Net-Zero</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">Under our 'Sustainability. by Arkmont' strategy, we aim for Net-Zero scope 1 and scope 2 emissions by 2030.</p>
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
