import React, { useState } from 'react'
import { newsItems } from '../data/mockData'
import { Search } from 'lucide-react'

const ASSET_BASE = 'https://kent.imgix.net/images/'
const getImage = (name, width = 900) =>
  `${ASSET_BASE}${name}?q=82&auto=format&fit=crop&w=${width}`

export default function NewsInsights() {
  const [filter, setFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = ['All', 'Press Releases & Featured Stories', 'Insights & Opinions', 'Project News', 'Events & Awards']

  const filteredNews = newsItems.filter((item) => {
    const matchesFilter = filter === 'All' || item.category === filter
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <main className="pt-[76px] lg:pt-[112px] bg-[#f5f4f0]">
      {/* Page Hero */}
      <section className="bg-[#282554] text-white py-20 px-[5.35vw] relative overflow-hidden">
        <div className="max-w-4xl relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-3 block">
            Kent Media
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            News &amp; Insights
          </h1>
          <p className="text-lg md:text-xl font-light text-white/95 leading-relaxed">
            Stay updated with press releases, energy transitions opinions, and project awards from across the globe.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="bg-white py-8 px-[5.35vw] border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2.5 rounded-full text-sm font-semibold transition cursor-pointer ${
                  (cat === 'All' && filter === 'All') || filter === cat
                    ? 'bg-[#11c5c2] text-[#282554]'
                    : 'bg-[#f5f4f0] text-gray-600 hover:bg-[#e2e1dc]'
                }`}
              >
                {cat === 'All' ? 'All Articles' : cat.split(' & ')[0]}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80 flex items-center border border-gray-300 focus-within:border-[#11c5c2] rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Search news..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none border-none text-sm text-[#282554]"
            />
            <Search className="w-4 h-4 text-gray-400 shrink-0 ml-2" />
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-[5.35vw]">
        <div className="max-w-6xl mx-auto">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news, idx) => (
                <article 
                  key={idx}
                  className="bg-white rounded overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col group cursor-pointer"
                >
                  <div className="h-[240px] overflow-hidden relative">
                    <img 
                      src={getImage(news.image)} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                      onError={(e) => {
                        e.target.src = getImage('videothumb_website-1.jpg')
                      }}
                    />
                    <div className="absolute inset-0 bg-[#282554]/10" />
                  </div>

                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <small className="text-[#6f6d85] text-xs uppercase tracking-wider font-semibold block mb-3">
                        {news.category} — {news.date}
                      </small>
                      <h3 className="text-xl font-semibold text-[#282554] group-hover:text-[#11c5c2] transition mb-3 leading-snug">
                        {news.title}
                      </h3>
                      <p className="text-gray-500 text-sm font-light leading-relaxed mb-6">
                        {news.excerpt}
                      </p>
                    </div>

                    <a 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault()
                        alert(`Opening full article: "${news.title}"`)
                      }}
                      className="inline-block text-[#282554] hover:text-[#11c5c2] font-semibold border-b border-current pb-1 self-start transition duration-200"
                    >
                      Read full story ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="bg-white text-center py-20 border border-gray-200 rounded">
              <h3 className="text-2xl font-semibold mb-2 text-[#282554]">No articles found</h3>
              <p className="text-gray-500 font-light">Try adjusting your filters or search keywords.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
