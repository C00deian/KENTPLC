// Mock data for the Arkmont website clone

export const topNavigation = [
  { label: 'Who We Are', href: '/who-we-are' },
  { label: 'Sustainability. by Arkmont', href: '/sustainability' },
  { label: 'News & Insights', href: '/news-insights' },
  { label: 'Careers', href: '/join-us' },
  { label: 'Contact Us', href: '/contact-us' }
]

export const serviceGroups = [
  { 
    title: 'Advisory & Consulting', 
    description: 'Reliable, safe and practical advice across the full project lifecycle.', 
    items: ['Advisory Services', 'Consulting', "Technical Consulting & Owner's Engineer", 'Digital Engineering & AI'] 
  },
  { 
    title: 'Engineering & Project Delivery', 
    description: 'Practical engineering and integrated project delivery that creates lasting value.', 
    items: ['Engineering Services', 'Strategic Procurement Services', 'PMC', 'EPC/ EPCm & Construction', 'Well & Reservoir Management Services'] 
  },
  { 
    title: 'Completions, Commissioning & Start-Up', 
    description: 'Predictable, cost-effective outcomes from construction completion to reliable start-up.', 
    items: ['Completions, Commissioning & Start-Up', 'CommissionAbility™', 'Operational Readiness'] 
  },
  { 
    title: 'Asset Performance & Optimisation', 
    description: 'Digital technologies and proven practices that improve performance and reduce risk.', 
    items: ['Asset Integrity & Optimisation', 'Brownfield Engineering', 'Brownfield Projects & Modifications', 'Operations & Maintenance'] 
  },
  { 
    title: 'Late Life Management & Decommissioning', 
    description: 'Safe, responsible support for late-life assets and complex decommissioning.', 
    items: ['Late Life Management & Decommissioning', 'Well & Reservoir Plugging & Abandonment'] 
  },
  { 
    title: 'Training & Competency', 
    description: 'Building capable, confident teams for safe and efficient operations.', 
    items: ['Training & Competency', 'Operational Readiness'] 
  }
]

export const marketGroups = [
  { 
    title: 'Conventional Energy', 
    description: 'Supporting traditional energy infrastructure with modern efficiency and safety.',
    items: ['Onshore Oil', 'Offshore Oil', 'Integrated Gas & LNG'] 
  },
  { 
    title: 'Renewables', 
    description: 'Engineering the next generation of wind, solar, and biofuel projects.',
    items: ['Offshore Wind (Fixed & Floating)', 'Biofuels & E-fuels', 'Waste to Energy & Fuels'] 
  },
  { 
    title: 'Low Carbon Solutions', 
    description: 'Enabling decarbonisation, hydrogen distribution, and carbon capture projects.',
    items: ['Green Hydrogen', 'Blue Hydrogen & Ammonia', 'Decarbonisation', 'Carbon Capture, Utilisation & Storage', 'Energy Storage'] 
  },
  { 
    title: 'Process & Chemicals', 
    description: 'Designing high-capacity chemical processing facilities worldwide.',
    items: ['Chemicals', 'Plastics', 'Refining', 'Water', 'Industrial Infrastructure'] 
  }
]

export const vacancies = [
  { id: '1', title: 'Commissioning Engineer', city: 'Lucknow', country: 'India', category: 'Engineering' },
  { id: '2', title: 'Automation Specialist', city: 'Lucknow', country: 'India', category: 'Engineering' },
  { id: '3', title: 'Project Coordinator', city: 'Lucknow', country: 'India', category: 'Project Management' },
  { id: '4', title: 'Senior Cost Controller', city: 'Lucknow', country: 'India', category: 'Project Controls' },
  { id: '5', title: 'Electrical Engineer', city: 'Lucknow', country: 'India', category: 'Engineering' },
  { id: '6', title: 'IT Support Intern', city: 'Lucknow', country: 'India', category: 'IT' },
  { id: '7', title: 'HR Manager', city: 'Lucknow', country: 'India', category: 'Human Resources' },
  { id: '8', title: 'Financial Analyst', city: 'Lucknow', country: 'India', category: 'Finance' }
]

export const newsItems = [
  {
    category: 'Press Releases & Featured Stories',
    title: 'Arkmont awarded Owner’s Engineer contract for Buchan Offshore Wind Project',
    excerpt: 'Arkmont supports the Buchan Offshore Wind Project as Owner’s Engineer',
    image: 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg',
    date: 'June 24, 2026'
  },
  {
    category: 'Insights & Opinions',
    title: 'The GCC’s AI race will be won on infrastructure',
    excerpt: 'How evolving technology has created a new infrastructure challenge in the GCC.',
    image: 'Data-Centres-Middle-East.jpg',
    date: 'June 18, 2026'
  },
  {
    category: 'Project News',
    title: 'Arkmont awarded Construction Management Services contract by CABGOC in Angola',
    excerpt: 'Arkmont strengthens its relationship with CABGOC through integrated construction management.',
    image: 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg',
    date: 'June 05, 2026'
  },
  {
    category: 'Events & Awards',
    title: "Arkmont recognised as 'Best in Class' at Safety Excellence Awards",
    excerpt: 'Our Americas team celebrates a major safety award.',
    image: 'Safety-award.jpg',
    date: 'May 28, 2026'
  },
  {
    category: 'Press Releases & Featured Stories',
    title: 'Arkmont appointed to support next phase of low carbon pipeline in the UK',
    excerpt: 'Our advisory team will deliver design services for regional CO2 networks.',
    image: 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg',
    date: 'May 14, 2026'
  },
  {
    category: 'Insights & Opinions',
    title: 'Decarbonising the oil sands: a pathway to net-zero engineering',
    excerpt: 'A technical analysis of carbon capture technologies applicable to deep well operations.',
    image: 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg',
    date: 'April 30, 2026'
  }
]

export const projectItems = [
  {
    title: 'Boundary Dam 3 CCS Project',
    location: 'Estevan, Canada',
    category: 'Carbon Capture & Storage',
    description: "The world's first commercial-scale carbon capture project on a coal-fired power plant, capturing 1M tonnes of CO2 per year.",
    image: 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg'
  },
  {
    title: 'HyNet Low Carbon Hydrogen Cluster',
    location: 'North West England & North Wales',
    category: 'Hydrogen & Low Carbon',
    description: "Providing technology selection and engineering services for Cadent's hydrogen pipeline networks and distribution infrastructure.",
    image: 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg'
  },
  {
    title: 'LNG Canada Facility',
    location: 'Kitimat, Canada',
    category: 'Gas & LNG',
    description: "Integrated commissioning and PMC services for one of the largest energy investment projects in Canadian history.",
    image: 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg'
  },
  {
    title: 'Viking CCS Concept Design',
    location: 'Humber Region, UK',
    category: 'Carbon Capture & Storage',
    description: "Conducting concept and feasibility designs for CO2 offshore transport and deep geological storage pipelines.",
    image: 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg'
  },
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
    title: 'An industry in transition',
    paragraphs: [
      'We work across the industries shaping today’s energy system and tomorrow’s lower-carbon future.',
      'Our teams support clients in onshore and offshore oil and gas, LNG, offshore wind, hydrogen, carbon capture, process and chemicals, industrial infrastructure and data centres.'
    ]
  },
  reach: {
    eyebrow: 'Our global reach',
    title: 'We go wherever you need us to go',
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
    { title: 'Explore', links: [
      { label: 'Who We Are', href: '/who-we-are' },
      { label: 'Sustainability', href: '/sustainability' },
      { label: 'Join Us', href: '/join-us' },
      { label: 'News & Insights', href: '/news-insights' }
    ]},
    { title: 'Contact', links: [
      { label: 'Office Locator', href: '/contact-us' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Media Enquiries', href: '/contact-us' }
    ]}
  ],
  legal: ['Terms', 'Privacy Policy', 'Code of Conduct', 'Modern Slavery Statement']
}

// Subpage Mock Data

export const whoWeAreData = {
  hero: {
    title: 'Who We Are',
    subtitle: 'Over 100 people strong, operating across 2+ countries, united by the energy within.',
    image: 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg'
  },
  overview: {
    title: 'A Global Powerhouse',
    content: [
      'At Arkmont, we design, build, and maintain the assets that power the world. We are one of the most established services providers to the global energy industry, with a history dating back to 1919.',
      'We support our clients through three main capability sectors: Advisory & Consulting, Engineering & Project Delivery, and Asset Support & Optimisation. With our expertise, we enable clients to maximise performance and safely navigate the energy transition.'
    ]
  },
  values: [
    {
      title: 'Play to Win',
      desc: 'We are ambitious, agile, and always deliver on our promises with high standards.'
    },
    {
      title: 'Always Care',
      desc: 'We place safety at the heart of our operations and care deeply about the communities we impact.'
    },
    {
      title: 'Dare to Be Different',
      desc: 'We challenge conventions, find innovative paths, and embrace engineering challenges.'
    },
    {
      title: 'Do it Together',
      desc: 'We are stronger as a team, collaborating across regions to get the best results.'
    }
  ],
  timeline: [
    { year: '1919', title: 'Arkmont Founded', description: 'Established as an engineering contracting business in Ireland, supporting early utilities infrastructure.' },
    { year: '1970s', title: 'Offshore Pioneer', description: 'Began engineering major offshore platforms in the North Sea, setting early standards for safety.' },
    { year: '2000s', title: 'Global Reach', description: 'Expanded operations across the Middle East, Caspian region, and the Americas, growing to 5,000 employees.' },
    { year: '2021', title: 'Merging Strengths', description: 'Acquired SNC-Lavalin Resources division, uniting two industry leaders to form Arkmont, a 100+ strong powerhouse.' },
    { year: '2026', title: 'Energy Transition Leader', description: 'Supporting major green hydrogen, carbon capture, and offshore wind projects worldwide.' }
  ],
  leadership: [
    { name: 'John Gilley', role: 'Chief Executive Officer', image: 'Safety-award.jpg', bio: 'John has over 30 years of industry experience and has led Arkmont through its transition to a global energy services leader.' },
    { name: 'Sameer Khan', role: 'Chief Financial Officer', image: 'Safety-award.jpg', bio: 'Sameer oversees global financial operations, capital allocation, and business growth strategies.' },
    { name: 'Paula Fitzpatrick', role: 'Chief People Officer', image: 'Safety-award.jpg', bio: 'Paula is responsible for talent acquisition, training, and building our diverse global culture.' },
    { name: 'Usman Dastgir', role: 'President - Low Carbon Solutions', image: 'Safety-award.jpg', bio: 'Usman directs advisory services and clean energy transition engineering projects globally.' }
  ]
}

export const sustainabilityData = {
  hero: {
    title: 'Sustainability. by Arkmont',
    subtitle: 'Our commitment to a lower-carbon world through sustainable practices, people, and principles.',
    image: 'arkmont-production-1-1_2025-10-13-172336_pslr.jpg'
  },
  pillars: [
    {
      id: 'people',
      title: 'People First',
      eyebrow: 'Our Social Responsibility',
      desc: 'We foster a safe, inclusive, and empowering workplace. Safety is not just a priority; it is a value we live by every single day.',
      stats: [
        { label: 'LTI (Lost Time Injury) Rate', value: '0.04' },
        { label: 'Diverse Hiring Ratio', value: '38%' },
        { label: 'Safety Training Hours', value: '150k+' }
      ]
    },
    {
      id: 'planet',
      title: 'Planet & Transition',
      eyebrow: 'Our Environmental Impact',
      desc: 'We are committed to achieving Net-Zero in our own operations by 2030 and helper our clients reduce emissions through carbon capture and hydrogen technologies.',
      stats: [
        { label: 'Direct CO2 Reduction', value: '45%' },
        { label: 'Active Low-Carbon Projects', value: '78' },
        { label: 'Target Net-Zero Year', value: '2030' }
      ]
    },
    {
      id: 'principles',
      title: 'Principles & Governance',
      eyebrow: 'Our Ethical Framework',
      desc: 'We operate with absolute transparency, strict compliance, and high ethical standards across all the jurisdictions we serve.',
      stats: [
        { label: 'Ethics Compliance Score', value: '100%' },
        { label: 'Global Advisory Board', value: 'Established' },
        { label: 'Policy Adherence', value: 'Audited' }
      ]
    }
  ]
}

export const officesData = [
  {
    region: 'India',
    offices: [
      {
        city: 'Lucknow',
        country: 'India',
        address: 'Lonapur Gomati Nagar Extension, Lucknow, Pin Code - 226010, Uttar Pradesh, India',
        phone: '+91 (Admin)',
        email: 'admin@arkmont.in'
      }
    ]
  }
]

export const corporateDetails = {
  legalName: 'Arkmont Technology Private Limited',
  cin: 'SRNAC3404031',
  address: 'Lonapur Gomati Nagar Extension, Lucknow, Pin Code - 226010, Uttar Pradesh, India',
  email: 'admin@arkmont.in'
}
