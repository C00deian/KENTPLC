import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Globe, ShieldCheck, Heart, Award } from 'lucide-react'
import { whoWeAreData, globalStats } from '../data/mockData'

export default function WhoWeAre() {
  const { hero, overview, values } = whoWeAreData

  const valueIcons = [
    <Award className="w-8 h-8 text-[#11c5c2]" />,
    <ShieldCheck className="w-8 h-8 text-[#11c5c2]" />,
    <Globe className="w-8 h-8 text-[#11c5c2]" />,
    <Heart className="w-8 h-8 text-[#11c5c2]" />
  ]

  return (
    <main className="pt-[76px] lg:pt-[112px]">
      {/* Page Hero */}
      <section className="relative h-[480px] text-white flex items-center bg-[#282554] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-75 scale-105"
          style={{ backgroundImage: `url(/images/${hero.image}?q=82&auto=format&fit=crop&w=1800)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#282554] via-[#282554]/40 to-transparent" />
        
        <div className="relative z-10 px-[5.35vw] max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-3 block">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
            {hero.title}
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/90 leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* Overview Block */}
      <section className="bg-white py-20 px-[5.35vw] grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#282554] tracking-tight">
          {overview.title}
        </h2>
        <div>
          {overview.content.map((p, i) => (
            <p key={i} className="text-gray-600 text-lg leading-relaxed mb-6 font-light">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Global Stats Grid */}
      <section className="bg-[#f5f4f0] py-16 px-[5.35vw]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {globalStats.map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded shadow-sm border border-gray-100 text-center">
              <strong className="text-3xl md:text-5xl text-[#11c5c2] font-semibold block mb-2">
                {stat.value}
              </strong>
              <span className="text-gray-500 text-xs md:text-sm tracking-wider uppercase font-semibold">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-white py-24 px-[5.35vw]">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#11c5c2] uppercase tracking-wider text-xs font-semibold block mb-3">
            Our Beliefs
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold text-[#282554]">
            What Drives Arkmont
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((val, idx) => (
            <motion.div 
              key={val.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 border border-gray-200 rounded hover:border-[#11c5c2] hover:shadow-md transition duration-300"
            >
              <div className="mb-6">{valueIcons[idx]}</div>
              <h3 className="text-xl font-semibold text-[#282554] mb-3">{val.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subpage Router Links Grid */}
      <section className="bg-[#282554] py-20 px-[5.35vw] text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Link 
            to="/who-we-are/purpose-beliefs"
            className="p-10 border border-white/20 rounded hover:bg-white transition duration-300 group flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#11c5c2] font-semibold mb-2 block">
                Pillar 01
              </span>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#282554] transition-colors">
                Purpose &amp; Beliefs
              </h3>
              <p className="text-sm opacity-80 group-hover:opacity-100 group-hover:text-[#282554] font-light transition-colors">
                Discover the beliefs, purpose statement, and core values that guide our energy projects.
              </p>
            </div>
            <div className="flex justify-end pt-4">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:text-[#282554] transition" />
            </div>
          </Link>

          <Link 
            to="/who-we-are/our-history"
            className="p-10 border border-white/20 rounded hover:bg-white transition duration-300 group flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#11c5c2] font-semibold mb-2 block">
                Pillar 02
              </span>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#282554] transition-colors">
                Our History
              </h3>
              <p className="text-sm opacity-80 group-hover:opacity-100 group-hover:text-[#282554] font-light transition-colors">
                Trace our origins from 1919 to our merger into a 100+ strong global engineering company.
              </p>
            </div>
            <div className="flex justify-end pt-4">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:text-[#282554] transition" />
            </div>
          </Link>

          <Link 
            to="/who-we-are/meet-our-team"
            className="p-10 border border-white/20 rounded hover:bg-white transition duration-300 group flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#11c5c2] font-semibold mb-2 block">
                Pillar 03
              </span>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#282554] transition-colors">
                Meet Our Team
              </h3>
              <p className="text-sm opacity-80 group-hover:opacity-100 group-hover:text-[#282554] font-light transition-colors">
                Meet the leadership executive committee directing Arkmont towards sustainable energy goals.
              </p>
            </div>
            <div className="flex justify-end pt-4">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 group-hover:text-[#282554] transition" />
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}
