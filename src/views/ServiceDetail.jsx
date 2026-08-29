import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { serviceGroups } from '../data/mockData'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

export default function ServiceDetail() {
  const { slug } = useParams()

  const slugify = (value) => 
    value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

  // Find the group and the item matching the slug
  let activeGroup = null
  let activeItem = null

  // 1. First check if slug matches an individual item
  for (const group of serviceGroups) {
    const found = group.items.find(item => slugify(item) === slug)
    if (found) {
      activeGroup = group
      activeItem = found
      break
    }
  }

  // 2. If not found, check if it matches a group title
  if (!activeGroup) {
    const foundGroup = serviceGroups.find(group => slugify(group.title) === slug)
    if (foundGroup) {
      activeGroup = foundGroup
      activeItem = foundGroup.items[0]
    }
  }

  // Fallback if not found
  if (!activeGroup) {
    return (
      <main className="pt-[112px] bg-white min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-semibold text-[#282554] mb-4">Service Not Found</h1>
        <p className="text-gray-500 mb-6">The requested service page could not be located.</p>
        <Link to="/" className="text-[#11c5c2] font-semibold hover:underline">Return to Home</Link>
      </main>
    )
  }

  // Hero backgrounds map for mock visuals
  const heroImages = {
    'advisory-consulting': 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg',
    'engineering-project-delivery': 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg',
    'completions-commissioning-start-up': 'Safety-award.jpg',
    'asset-performance-optimisation': 'Data-Centres-Middle-East.jpg',
    'late-life-management-decommissioning': 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg',
    'training-competency': 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg'
  }

  const groupSlug = slugify(activeGroup.title)
  const bgImageName = heroImages[groupSlug] || 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg'
  const bgUrl = `/images/${bgImageName}?q=82&auto=format&fit=crop&w=1800`

  return (
    <main className="pt-[76px] lg:pt-[112px] bg-white">
      {/* Page Hero */}
      <section className="relative h-[420px] text-white flex items-center bg-[#282554] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-75 scale-105"
          style={{ backgroundImage: `url(${bgUrl})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#282554] via-[#282554]/40 to-transparent" />
        
        <div className="relative z-10 px-[5.35vw] max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-6 hover:text-white transition">
            <ArrowLeft className="w-4 h-4" /> Services Overview
          </Link>
          <span className="text-xs uppercase tracking-widest text-white/70 block mb-2 font-medium">
            {activeGroup.title}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {activeItem}
          </h1>
        </div>
      </section>

      {/* Detail Block */}
      <section className="py-20 px-[5.35vw] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold text-[#282554] tracking-tight mb-4">
              Capability Summary
            </h2>
            <p className="text-gray-500 font-light text-sm md:text-base leading-relaxed">
              We bring decades of field-proven experience, standardising processes and deploying digital tools to enhance efficiency, reduce environmental footprints, and deliver safe execution.
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-[#282554] mb-6">
              Our Approach
            </h3>
            <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
              {activeGroup.description}
            </p>
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Whether working on greenfield construction projects or optimising late-life asset performance, we tailor our solutions to meet the most demanding constraints.
            </p>
          </div>
        </div>
      </section>

      {/* Other capabilities list */}
      <section className="bg-[#f5f4f0] py-20 px-[5.35vw]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#282554] mb-12">
            Related {activeGroup.title} Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeGroup.items.map((item) => (
              <Link 
                key={item} 
                to={`/services/${slugify(item)}`}
                className={`bg-white p-8 border border-gray-100 flex justify-between items-center transition group hover:shadow-sm ${
                  item === activeItem ? 'border-[#11c5c2] pointer-events-none' : ''
                }`}
              >
                <div>
                  <span className="text-xs text-gray-400 font-medium block mb-1">Service</span>
                  <h3 className="font-semibold text-lg text-[#282554]">{item}</h3>
                </div>
                {item !== activeItem && (
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#11c5c2] transition duration-200" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
