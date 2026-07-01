import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { vacancies } from '../data/mockData'
import { Search, ArrowRight, ArrowUpRight, Briefcase, MapPin, X, Upload } from 'lucide-react'

const ASSET_BASE = 'https://kent.imgix.net/images/'
const getImage = (name, width = 1600) =>
  `${ASSET_BASE}${name}?q=82&auto=format&fit=crop&w=${width}`

export default function Careers() {
  const [searchKeyword, setSearchKeyword] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [filteredVacancies, setFilteredVacancies] = useState(vacancies)
  const [selectedJob, setSelectedJob] = useState(null)
  const [applyModalOpen, setApplyModalOpen] = useState(false)
  const [resumeUploaded, setResumeUploaded] = useState(false)
  const [applicantName, setApplicantName] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    applyFilters()
  }

  const applyFilters = (kw = searchKeyword, cat = selectedCategory, loc = selectedLocation) => {
    const query = kw.trim().toLowerCase()
    const filtered = vacancies.filter(job => {
      const matchesKeyword = !query || `${job.title} ${job.city} ${job.country} ${job.category}`.toLowerCase().includes(query)
      const matchesCategory = !cat || job.category === cat
      const matchesLocation = !loc || job.country === loc
      return matchesKeyword && matchesCategory && matchesLocation
    })
    setFilteredVacancies(filtered)
  }

  const handleClearFilters = () => {
    setSearchKeyword('')
    setSelectedCategory('')
    setSelectedLocation('')
    setFilteredVacancies(vacancies)
  }

  const handleApplySubmit = (e) => {
    e.preventDefault()
    alert(`Thank you ${applicantName}! Your application for "${selectedJob.title}" has been successfully submitted (Mock application).`)
    setApplyModalOpen(false)
    setResumeUploaded(false)
    setApplicantName('')
    setSelectedJob(null)
  }

  const uniqueCategories = [...new Set(vacancies.map(j => j.category))]
  const uniqueCountries = [...new Set(vacancies.map(j => j.country))].sort()

  return (
    <main className="pt-[76px] lg:pt-[112px] bg-white">
      {/* Page Hero */}
      <section className="bg-[#282554] text-white py-24 px-[5.35vw] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center brightness-50"
          style={{ backgroundImage: `url(${getImage('kent-join-us-6.jpg')})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#201e48] via-[#201e48]/30 to-transparent" />
        
        <div className="max-w-4xl relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-3 block">
            Careers
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Join the energy within.
          </h1>
          <p className="text-lg md:text-xl font-light text-white/95 leading-relaxed">
            We offer career paths in more markets and more sectors than ever before. Find your role and build a sustainable energy career.
          </p>
        </div>
      </section>

      {/* Main vacancies board */}
      <section className="px-6 lg:px-[5.35vw] py-20 bg-[#201e48] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Open Vacancies
            </h2>
            <p className="text-[#c5c3d4] text-[17px] font-light mt-4">
              Search and filter our active roles across engineering, project controls, finance, and operations.
            </p>
          </div>

          {/* Job Filters */}
          <form onSubmit={handleSearch} className="job-filters grid grid-cols-1 md:grid-cols-[1.3fr_1fr_1fr_auto] gap-4 items-end bg-[#2b2859] p-6 rounded-lg shadow-inner">
            <div className="flex flex-col gap-2">
              <label htmlFor="job-keyword" className="text-xs uppercase tracking-wider text-[#c5c3d4] font-semibold">Keywords</label>
              <input 
                id="job-keyword" 
                type="text" 
                value={searchKeyword}
                onChange={(e) => {
                  setSearchKeyword(e.target.value)
                  applyFilters(e.target.value, selectedCategory, selectedLocation)
                }}
                placeholder="Job title or city" 
                className="h-[58px] bg-[#201e48] border border-[#686588] text-white px-5 rounded focus:border-[#11c5c2] focus:outline-none transition w-full placeholder-[#9d9bb0]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="job-category" className="text-xs uppercase tracking-wider text-[#c5c3d4] font-semibold">Profession</label>
              <select 
                id="job-category" 
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value)
                  applyFilters(searchKeyword, e.target.value, selectedLocation)
                }}
                className="h-[58px] bg-[#201e48] border border-[#686588] text-white px-4 rounded focus:border-[#11c5c2] focus:outline-none transition w-full"
              >
                <option value="">All professions</option>
                {uniqueCategories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="job-location" className="text-xs uppercase tracking-wider text-[#c5c3d4] font-semibold">Location</label>
              <select 
                id="job-location" 
                value={selectedLocation}
                onChange={(e) => {
                  setSelectedLocation(e.target.value)
                  applyFilters(searchKeyword, selectedCategory, e.target.value)
                }}
                className="h-[58px] bg-[#201e48] border border-[#686588] text-white px-4 rounded focus:border-[#11c5c2] focus:outline-none transition w-full"
              >
                <option value="">All locations</option>
                {uniqueCountries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            <button 
              type="submit" 
              className="h-[58px] bg-[#11c5c2] hover:bg-[#ffd52e] hover:-translate-y-0.5 text-[#282554] font-bold px-8 rounded cursor-pointer transition flex items-center justify-center gap-6"
            >
              Search <ArrowRight className="w-5 h-5" />
            </button>
          </form>

          {/* Filter Summary */}
          <div className="filter-summary flex justify-between items-center py-8 border-b border-white/10 text-[#c5c3d4] text-[15px]">
            <span>
              <strong className="text-[#ffd52e] font-semibold">{filteredVacancies.length}</strong> opportunities found
            </span>
            
            {(searchKeyword || selectedCategory || selectedLocation) && (
              <button 
                onClick={handleClearFilters}
                type="button"
                className="text-[#c5c3d4] hover:text-white underline cursor-pointer"
              >
                Clear filters ×
              </button>
            )}
          </div>

          {/* Jobs List Grid */}
          <div className="jobs grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mt-8">
            {filteredVacancies.length > 0 ? (
              filteredVacancies.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.03 }}
                  onClick={() => setSelectedJob(job)}
                  className="min-h-[190px] border border-[#4d4a72] p-8 flex flex-col justify-between hover:bg-[#11c5c2] hover:text-[#282554] hover:-translate-y-1 transition duration-300 group cursor-pointer"
                >
                  <div>
                    <em className="block text-xs uppercase tracking-wider text-[#ffd52e] group-hover:text-[#282554] not-italic font-semibold mb-6 transition duration-200">
                      {job.category}
                    </em>
                    <b className="block text-lg font-semibold mb-2 group-hover:text-[#282554] transition duration-200">
                      {job.title}
                    </b>
                    <small className="block text-white/70 group-hover:text-[#282554]/80 text-sm transition duration-200">
                      Location: {job.city}, {job.country}
                    </small>
                  </div>
                  <div className="flex justify-end pt-4">
                    <ArrowUpRight className="w-6 h-6 text-white/50 group-hover:text-[#282554] transition duration-200" />
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="no-jobs col-span-full border border-[#4d4a72] py-16 text-center text-[#c5c3d4]">
                <h3 className="text-xl font-semibold mb-2 text-white">No vacancies found</h3>
                <p>Try removing a filter or using a broader keyword.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Vacancy Detail Overlay Modal */}
      <AnimatePresence>
        {selectedJob && !applyModalOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 md:p-10 z-[100]">
            <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedJob(null)} />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg max-w-2xl w-full p-8 md:p-10 relative z-10 shadow-2xl text-[#282554]"
            >
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute right-6 top-6 text-2xl text-gray-400 hover:text-black focus:outline-none cursor-pointer"
              >
                ×
              </button>

              <span className="text-xs uppercase tracking-widest text-[#11c5c2] font-semibold mb-2 block">
                {selectedJob.category}
              </span>
              <h3 className="text-3xl font-bold mb-6 pr-8">
                {selectedJob.title}
              </h3>

              <div className="flex gap-6 mb-8 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-[#11c5c2]" />
                  <span>Full-Time Position</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#11c5c2]" />
                  <span>{selectedJob.city}, {selectedJob.country}</span>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-semibold mb-3">Job Description</h4>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 font-light">
                  We are looking for a dedicated {selectedJob.title} to support our growing energy portfolio. In this role, you will collaborate with cross-functional global teams, supporting advisory consulting, engineering calculations, and detail design workflows.
                </p>
                <h4 className="font-semibold mb-3">Key Requirements</h4>
                <ul className="list-disc pl-5 text-gray-600 text-sm leading-relaxed font-light flex flex-col gap-2">
                  <li>Bachelor's degree or higher in engineering, project management, or matching disciplines.</li>
                  <li>Prior relevant industry experience (energy, construction, technical services).</li>
                  <li>Exceptional communication, problems-solving, and team-oriented collaboration skills.</li>
                </ul>
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <button 
                  onClick={() => setSelectedJob(null)}
                  className="px-5 py-2.5 rounded border border-gray-300 text-gray-500 text-sm font-semibold hover:bg-gray-50 cursor-pointer"
                >
                  Close
                </button>
                <button 
                  onClick={() => setApplyModalOpen(true)}
                  className="px-6 py-2.5 rounded bg-[#11c5c2] text-[#282554] text-sm font-semibold hover:bg-[#ffd52e] cursor-pointer transition"
                >
                  Apply for this role
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mock Apply Form Modal */}
      <AnimatePresence>
        {applyModalOpen && (
          <div className="fixed inset-0 bg-black/75 flex items-center justify-center p-4 md:p-10 z-[101]">
            <div className="absolute inset-0 cursor-pointer" onClick={() => setApplyModalOpen(false)} />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-lg max-w-md w-full p-8 relative z-10 shadow-2xl text-[#282554]"
            >
              <button 
                onClick={() => setApplyModalOpen(false)}
                className="absolute right-6 top-6 text-2xl text-gray-400 hover:text-black focus:outline-none cursor-pointer"
              >
                ×
              </button>

              <h3 className="text-xl font-bold mb-2">Apply for Role</h3>
              <p className="text-gray-500 text-xs mb-6">
                Position: <span className="font-semibold text-[#11c5c2]">{selectedJob.title}</span> — {selectedJob.city}
              </p>

              <form onSubmit={handleApplySubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="app-name" className="text-xs font-semibold text-gray-500">Full Name</label>
                  <input 
                    id="app-name" 
                    type="text" 
                    required 
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Enter full name" 
                    className="border border-gray-300 rounded p-2.5 text-sm focus:border-[#11c5c2] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="app-email" className="text-xs font-semibold text-gray-500">Email Address</label>
                  <input 
                    id="app-email" 
                    type="email" 
                    required 
                    placeholder="name@example.com" 
                    className="border border-gray-300 rounded p-2.5 text-sm focus:border-[#11c5c2] focus:outline-none"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-gray-500">Resume / CV</label>
                  <div 
                    onClick={() => setResumeUploaded(true)}
                    className={`border-2 border-dashed rounded p-6 text-center cursor-pointer transition ${
                      resumeUploaded ? 'border-[#11c5c2] bg-[#11c5c2]/5' : 'border-gray-300 hover:border-[#11c5c2]'
                    }`}
                  >
                    <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
                    <span className="text-xs text-gray-500 font-light block">
                      {resumeUploaded ? 'resume_pdf_attached.pdf' : 'Drag and drop or click to upload PDF/Word'}
                    </span>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 bg-[#11c5c2] text-[#282554] font-bold rounded hover:bg-[#ffd52e] cursor-pointer mt-4 transition"
                >
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  )
}
