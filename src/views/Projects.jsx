import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { projectItems } from '../data/mockData'
import { Search, MapPin, ArrowUpRight } from 'lucide-react'

export default function Projects() {
  const [keyword, setKeyword] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')

  // Get unique categories for dropdown
  const categories = [...new Set(projectItems.map(p => p.category))]

  // Filter projects based on inputs
  const filteredProjects = projectItems.filter(p => {
    const matchesKeyword = !keyword || 
      p.title.toLowerCase().includes(keyword.toLowerCase()) || 
      p.location.toLowerCase().includes(keyword.toLowerCase())
    const matchesCategory = !selectedCategory || p.category === selectedCategory
    return matchesKeyword && matchesCategory
  })

  return (
    <main className="pt-[76px] lg:pt-[112px] bg-white">
      {/* Page Hero */}
      <section className="relative h-[480px] text-white flex items-center bg-[#282554] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-75 scale-105"
          style={{ backgroundImage: `url(https://kent.imgix.net/images/Planet-transition-optimised_2025-10-13-172356_igkb.jpg?q=82&auto=format&fit=crop&w=1800)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#282554] via-[#282554]/40 to-transparent" />
        
        <div className="relative z-10 px-[5.35vw] max-w-4xl">
          <span className="text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-3 block">
            Our Work
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Our Projects
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/90 leading-relaxed max-w-2xl">
            Tackling complex engineering and delivery challenges across the global energy map.
          </p>
        </div>
      </section>

      {/* Projects Filters Section */}
      <section className="py-12 bg-[#f5f4f0] border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-[5.35vw] lg:px-0">
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="job-filters"
          >
            <label>
              Keywords
              <input 
                type="search" 
                placeholder="Project title or city" 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </label>
            <label>
              Category
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">All Categories</option>
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </label>
            {/* Clear filters link button */}
            {(keyword || selectedCategory) && (
              <button 
                type="button" 
                onClick={() => { setKeyword(''); setSelectedCategory(''); }}
                className="mt-6 text-sm text-[#282554] hover:text-[#11c5c2] underline cursor-pointer"
              >
                Clear filters ×
              </button>
            )}
          </form>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-[5.35vw]">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10 flex justify-between items-center">
            <span className="text-gray-500 text-sm">
              Showing <strong>{filteredProjects.length}</strong> projects
            </span>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 bg-[#f5f4f0] rounded border border-dashed border-gray-300">
              <h3 className="text-xl font-semibold text-[#282554] mb-2">No projects found</h3>
              <p className="text-gray-500 text-sm">Try removing filters or expanding your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((p, index) => (
                <article key={index} className="bg-white border border-gray-100 flex flex-col hover:shadow-lg transition duration-300 group">
                  <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100 relative">
                    <img 
                      src={`https://kent.imgix.net/images/${p.image}?q=82&auto=format&fit=crop&w=800&ar=16:10`} 
                      alt={p.title} 
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex-grow flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[#11c5c2] uppercase tracking-wider block mb-2">
                        {p.category}
                      </span>
                      <h3 className="text-xl font-semibold text-[#282554] mb-3 leading-snug tracking-tight">
                        {p.title}
                      </h3>
                      <p className="text-gray-500 font-light text-sm leading-relaxed mb-6">
                        {p.description}
                      </p>
                    </div>
                    
                    <div className="pt-6 border-t border-gray-100 flex justify-between items-center">
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <MapPin className="w-3.5 h-3.5 text-[#11c5c2]" /> {p.location}
                      </span>
                      <span className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#11c5c2] group-hover:text-[#282554] group-hover:border-[#11c5c2] transition duration-200">
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
