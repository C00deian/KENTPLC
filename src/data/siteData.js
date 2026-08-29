export const topNavigation = [
  { label: 'Who We Are', href: '#who' },
  { label: 'Sustainability. by Arkmont', href: '#transition' },
  { label: 'News & Insights', href: '#news' },
  { label: 'Events', href: '#events' },
  { label: 'Careers', href: '#careers', active: true }
]

export const serviceGroups = [
  { title: 'Advisory & Consulting', description: 'Reliable, safe and practical advice across the full project lifecycle.', items: ['Advisory Services', 'Consulting', "Technical Consulting & Owner's Engineer", 'Digital Engineering & AI'] },
  { title: 'Engineering & Project Delivery', description: 'Practical engineering and integrated project delivery that creates lasting value.', items: ['Engineering Services', 'Strategic Procurement Services', 'PMC', 'EPC/ EPCm & Construction', 'Well & Reservoir Management Services'] },
  { title: 'Completions, Commissioning & Start-Up', description: 'Predictable, cost-effective outcomes from construction completion to reliable start-up.', items: ['Completions, Commissioning & Start-Up', 'CommissionAbility™', 'Operational Readiness'] },
  { title: 'Asset Performance & Optimisation', description: 'Digital technologies and proven practices that improve performance and reduce risk.', items: ['Asset Integrity & Optimisation', 'Brownfield Engineering', 'Brownfield Projects & Modifications', 'Operations & Maintenance'] },
  { title: 'Late Life Management & Decommissioning', description: 'Safe, responsible support for late-life assets and complex decommissioning.', items: ['Late Life Management & Decommissioning', 'Well & Reservoir Plugging & Abandonment'] },
  { title: 'Training & Competency', description: 'Building capable, confident teams for safe and efficient operations.', items: ['Training & Competency', 'Operational Readiness'] }
]

export const marketGroups = [
  { title: 'Conventional Energy', items: ['Onshore Oil', 'Offshore Oil', 'Integrated Gas & LNG'] },
  { title: 'Renewables', items: ['Offshore Wind (Fixed & Floating)', 'Biofuels & E-fuels', 'Waste to Energy & Fuels'] },
  { title: 'Low Carbon Solutions', items: ['Green Hydrogen', 'Blue Hydrogen & Ammonia', 'Decarbonisation', 'Carbon Capture, Utilisation & Storage', 'Energy Storage'] },
  { title: 'Process & Chemicals', items: ['Chemicals', 'Plastics', 'Refining', 'Water', 'Industrial Infrastructure'] }
]

export const vacancies = [
  ['Commissioning Engineer', 'Lucknow', 'India', 'Engineering'],
  ['Automation Specialist', 'Lucknow', 'India', 'Engineering'],
  ['Project Coordinator', 'Lucknow', 'India', 'Project Management'],
  ['Senior Cost Controller', 'Lucknow', 'India', 'Project Controls'],
  ['Electrical Engineer', 'Lucknow', 'India', 'Engineering'],
  ['IT Support Intern', 'Lucknow', 'India', 'IT'],
  ['HR Manager', 'Lucknow', 'India', 'Human Resources'],
  ['Financial Analyst', 'Lucknow', 'India', 'Finance']
].map(([title, city, country, category]) => ({ title, city, country, category }))

export const newsItems = [
  ['Press Releases & Featured Stories', 'Arkmont awarded Owner’s Engineer contract for Buchan Offshore Wind Project', 'Arkmont supports the Buchan Offshore Wind Project as Owner’s Engineer', 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg'],
  ['Insights & Opinions', 'The GCC’s AI race will be won on infrastructure', 'How evolving technology has created a new infrastructure challenge in the GCC.', 'Data-Centres-Middle-East.jpg'],
  ['Project News', 'Arkmont awarded Construction Management Services contract by CABGOC in Angola', 'Arkmont strengthens its relationship with CABGOC through integrated construction management.', 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg'],
  ['Events & Awards', "Arkmont recognised as 'Best in Class' at Safety Excellence Awards", 'Our Americas team celebrates a major safety award.', 'Safety-award.jpg']
]

export const homeContent = {
  hero: {
    eyebrow: 'We are Arkmont',
    title: 'The energy within.',
    paragraphs: [
      'We design, build, commission, maintain and optimise the energy assets that keep the world moving.',
      'For more than 100 years, we’ve been driven by the energy within, the people, ideas and expertise that help our clients solve complex challenges safely and responsibly.',
      'Today, we support conventional energy, low-carbon solutions and industrial infrastructure through advisory, engineering, EPC, EPCM, construction, commissioning, asset performance and decommissioning services.'
    ]
  },
  purpose: {
    eyebrow: 'Our Purpose',
    title: 'Courageously tackling the greatest challenge of our time, to bring our world the energy it needs in the most responsible way ever imagined.'
  },
  whatWeDo: {
    eyebrow: 'What we do',
    title: 'We design, build, commission, maintain and optimise the energy assets that keep the world moving.',
    paragraphs: [
      'We bring together the people, skills and experience needed to deliver across the full energy asset lifecycle.',
      'With over 100 years of know-how, our people are the smartest at what they do. From early advisory and engineering through to procurement, EPC, EPCM, construction, commissioning, operations support and late-life management, we help clients move projects and assets forward with confidence.'
    ]
  },
  transition: {
    eyebrow: 'Our market capabilities',
    title: 'An industry<br />in transition',
    paragraphs: [
      'We work across the industries shaping today’s energy system and tomorrow’s lower-carbon future.',
      'Our teams support clients in onshore and offshore oil and gas, LNG, offshore wind, hydrogen, carbon capture, process and chemicals, industrial infrastructure and data centres.'
    ]
  },
  reach: {
    eyebrow: 'Our global reach',
    title: 'We go wherever<br />you need us to go',
    intro: 'We have a truly global footprint with the agility to mobilise quickly, wherever in the world our clients need us.',
    body: 'We have delivered projects in over 88 countries, thriving on tackling new and challenging territories for our clients across the globe. Wherever you operate, we speak your language to get your problems solved faster.'
  },
  careers: {
    eyebrow: 'Working for Arkmont',
    title: 'Our people are our most valuable asset',
    body: 'If you have world class ambitions to reach the stars while keeping your feet on the ground, we’re the team for you. We offer career paths in more markets and more sectors than ever before.'
  }
}

export const globalStats = [
  { value: '100+', label: 'Employees' },
  { value: '5+', label: 'Project Locations' },
  { value: '2+', label: 'Countries' },
  { value: '0', label: 'Barriers' }
]

export const footerData = {
  social: ['in', 'f', '𝕏', 'G', '▶', '♫'],
  columns: [
    { title: 'Explore', links: ['Who We Are', 'Sustainability', 'Join Us', 'News & Insights'] },
    { title: 'Contact', links: ['Office Locator', 'Contact Us', 'Media Enquiries'] }
  ],
  legal: ['Terms', 'Privacy Policy', 'Code of Conduct', 'Modern Slavery Statement']
}
