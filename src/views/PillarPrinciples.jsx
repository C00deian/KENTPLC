import React from 'react'
import { Link } from 'react-router-dom'
import { Scale, FileText, CheckCircle2, ShieldCheck } from 'lucide-react'

export default function PillarPrinciples() {
  return (
    <main className="pt-[76px] lg:pt-[112px] bg-white">
      {/* Page Hero */}
      <section className="bg-[#282554] text-white py-24 px-[5.35vw] relative overflow-hidden">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none text-[30vw] font-bold text-white select-none leading-none translate-y-12">
          G
        </div>
        
        <div className="max-w-4xl relative z-10">
          <span className="text-xs uppercase tracking-widest text-[#ffd52e] font-semibold mb-3 block">
            Sustainability Pillar 03
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Principles &amp; Governance
          </h1>
          <p className="text-lg md:text-2xl font-light text-white/90 leading-relaxed max-w-3xl">
            Operating with transparency, ethical standards, and accountability across all global projects.
          </p>
        </div>
      </section>

      {/* Main Details */}
      <section className="py-20 px-[5.35vw] bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 max-w-6xl mx-auto">
          <div>
            <h2 className="text-3xl font-semibold text-[#282554] mb-6">
              Our Governance Framework
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-light">
              Ethics and compliance are fundamental to our license to operate. We implement strict governance controls, anti-bribery policies, and comprehensive supply chain vetting.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-light">
              Our Board of Directors and Executive Committee regularly audit policies, ensuring that our Modern Slavery statement and Code of Conduct are adhered to by every subcontractor we partner with.
            </p>
          </div>

          <div className="flex flex-col gap-8 justify-center">
            <div className="flex gap-4 items-start">
              <Scale className="w-8 h-8 text-[#11c5c2] mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#282554] mb-1">Strict Code of Conduct</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">100% compliance score across global audits. Every employee participates in mandatory compliance courses annually.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <FileText className="w-8 h-8 text-[#11c5c2] mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#282554] mb-1">Supply Chain Vetting</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">All partner agencies are screened against international labor laws, ethical sourcing, and environmental standards.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <ShieldCheck className="w-8 h-8 text-[#11c5c2] mt-1 shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#282554] mb-1">Global Advisory Board</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">An independent committee reviews projects against sustainability guidelines and carbon abatement goals.</p>
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
