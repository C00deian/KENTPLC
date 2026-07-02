import {
  topNavigation, serviceGroups, marketGroups, vacancies, newsItems,
  homeContent, globalStats, footerData
} from '../data/siteData.js'

const ASSET_BASE = '/images/'
const image = (name, width = 1600, ratio = '4:3') =>
  `${ASSET_BASE}${name}?q=82&auto=format&fit=crop&crop=focalpoint&w=${width}&ar=${ratio.replace(':', '%3A')}&fp-x=0.5&fp-y=0.5`
const slug = value => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const menuPanel = (type, groups) => `
  <div class="mega-menu" id="${type}-mega-menu" data-menu="${type}" aria-hidden="true">
    <div class="mega-rail">
      <a class="mega-all" href="#${type === 'services' ? 'services' : 'transition'}">All Our ${type === 'services' ? 'Services' : 'Markets'} <b>↗</b></a>
      ${groups.map((group, i) => `<button class="mega-group ${i ? '' : 'selected'}" data-group="${type}-${i}" aria-controls="${type}-panel-${i}" aria-selected="${i ? 'false' : 'true'}">${group.title}<i>→</i></button>`).join('')}
    </div>
    <div class="mega-detail">${groups.map((group, i) => `
      <div class="mega-content ${i ? '' : 'selected'}" id="${type}-panel-${i}" data-content="${type}-${i}">
        <span>${type === 'services' ? 'Capabilities' : 'Sectors'}</span>
        <h3>${group.title}</h3>${group.description ? `<p>${group.description}</p>` : ''}
        <div class="mega-links">${group.items.map(item => `<a href="#${slug(item)}">${item}<b>↗</b></a>`).join('')}</div>
      </div>`).join('')}
    </div>
    <button class="mega-close" aria-label="Close menu">×</button>
  </div>`

export function renderHomePage(root) {
  root.innerHTML = `
    <header class="site-header">
      <div class="topbar"><nav>${topNavigation.map(item => `<a ${item.active ? 'class="active"' : ''} href="${item.href}">${item.label}</a>`).join('')}</nav></div>
      <div class="mainnav">
        <a class="logo" href="#" aria-label="Kent home"><img src="https://kentplc.com/dist/images/logo-primary.png" alt="kent" /></a>
        <nav><button class="nav-mega-trigger" data-target="services" aria-controls="services-mega-menu" aria-expanded="false">Our Services <i>⌄</i></button><button class="nav-mega-trigger" data-target="markets" aria-controls="markets-mega-menu" aria-expanded="false">Our Markets <i>⌄</i></button><a href="#transition">Kent Data Centres</a><a href="#projects">Our Projects</a></nav>
        <div class="nav-actions"><a class="contact" href="#contact">Contact Us</a><button class="search" aria-label="Search"></button><button class="menu" aria-label="Menu"><i></i><i></i></button></div>
      </div>
      ${menuPanel('services', serviceGroups)}${menuPanel('markets', marketGroups)}
    </header>
    <main>
      <section class="hero" id="who"><div class="hero-bg"></div><div class="hero-shade"></div><div class="hero-copy reveal"><span class="eyebrow yellow">${homeContent.hero.eyebrow}</span><h1>${homeContent.hero.title}</h1>${homeContent.hero.paragraphs.map(p => `<p>${p}</p>`).join('')}<a class="pill light" href="#services">Our services <b>↗</b></a></div><div class="scroll-cue"><span>Scroll</span><i></i></div></section>
      <section class="purpose section-pad"><div class="purpose-copy reveal"><span class="eyebrow">${homeContent.purpose.eyebrow}</span><h2>${homeContent.purpose.title}</h2></div><a class="video reveal" href="#" aria-label="Play our purpose film"><img src="${image('videothumb_website-1.jpg', 1800, '16:9')}" alt="Kent people" /><span class="play">▶</span><small>Play our film</small></a></section>
      <section class="what section-pad" id="services"><div class="what-grid"><div class="what-image reveal"><img src="${image('kent-production-1-1_2025-10-13-172336_pslr.jpg', 1200, '3:4')}" alt="Kent engineer" /></div><div class="what-copy reveal"><span class="eyebrow">${homeContent.whatWeDo.eyebrow}</span><h2>${homeContent.whatWeDo.title}</h2>${homeContent.whatWeDo.paragraphs.map(p => `<p>${p}</p>`).join('')}</div></div><div class="service-list">${serviceGroups.slice(0, 5).map((service, i) => `<a href="#" class="service-card reveal"><span>0${i + 1}</span><h3>${service.title}</h3><p>${service.description}</p><b>↗</b></a>`).join('')}</div></section>
      <section class="transition section-pad" id="transition"><div class="transition-copy reveal"><span class="eyebrow yellow">${homeContent.transition.eyebrow}</span><h2>${homeContent.transition.title}</h2>${homeContent.transition.paragraphs.map(p => `<p>${p}</p>`).join('')}<a class="pill light" href="#">Read more about our market capabilities <b>↗</b></a></div><div class="transition-img reveal"><img src="${image('Planet-transition-optimised_2025-10-13-172356_igkb.jpg', 1600)}" alt="Energy transition landscape" /></div></section>
      <section class="reach section-pad" id="projects"><div class="reach-head reveal"><span class="eyebrow">${homeContent.reach.eyebrow}</span><h2>${homeContent.reach.title}</h2><p>${homeContent.reach.intro}</p></div><div class="map reveal"><div class="world"></div>${globalStats.map(stat => `<div class="stat"><strong>${stat.value}</strong><span>${stat.label}</span></div>`).join('')}</div><div class="reach-foot reveal"><p>${homeContent.reach.body}</p><a class="pill dark" href="#">Find an office <b>↗</b></a></div></section>
      <section class="careers" id="careers"><div class="career-photo"><img src="${image('kent-join-us-6.jpg')}" alt="Kent colleagues" /></div><div class="career-copy reveal"><span class="eyebrow yellow">${homeContent.careers.eyebrow}</span><h2>${homeContent.careers.title}</h2><p>${homeContent.careers.body}</p><a class="pill light" href="#">Learn more <b>↗</b></a></div><div class="vacancies"><div class="vacancy-heading"><span class="eyebrow yellow">Our Latest Vacancies</span><h2>Find your place at Kent</h2></div><form class="job-filters"><label>Keywords<input id="job-keyword" type="search" placeholder="Job title or city" /></label><label>Profession<select id="job-category"><option value="">All professions</option>${[...new Set(vacancies.map(job => job.category))].map(value => `<option>${value}</option>`).join('')}</select></label><label>Location<select id="job-location"><option value="">All locations</option>${[...new Set(vacancies.map(job => job.country))].sort().map(value => `<option>${value}</option>`).join('')}</select></label><button type="submit">Search <b>→</b></button></form><div class="filter-summary"><span aria-live="polite"><b id="job-count">${vacancies.length}</b> opportunities</span><button id="clear-jobs" type="button">Clear filters ×</button></div><div class="jobs" id="jobs-list" aria-live="polite" aria-label="Current vacancies"></div></div></section>
      <section class="latest section-pad" id="news"><div class="latest-head reveal"><div><span class="eyebrow">Kent</span><h2>Latest News & Insights</h2></div><div class="arrows"><button class="prev">←</button><button class="next">→</button></div></div><div class="news-track">${newsItems.map(n => `<article class="news-card"><div class="news-img"><img src="${image(n[3], 900)}" alt="" onerror="this.src='${image('videothumb_website-1.jpg', 900)}'"/></div><small>${n[0]}</small><h3>${n[1]}</h3><p>${n[2]}</p><a href="#">Read article <b>↗</b></a></article>`).join('')}</div></section>
    </main>
    <footer id="contact"><div class="footer-top"><img src="https://kentplc.com/dist/images/logo-primary.png" alt="kent" /><span>the energy within.</span></div><div class="footer-grid"><div><small>Follow</small><div class="socials">${footerData.social.map(item => `<a href="#">${item}</a>`).join('')}</div></div>${footerData.columns.map(column => `<div><small>${column.title}</small>${column.links.map(link => `<a href="#">${link}</a>`).join('')}</div>`).join('')}<a href="#" class="backtop">Back to Top ↑</a></div><div class="legal"><span>© Kent 2026</span>${footerData.legal.map(link => `<a href="#">${link}</a>`).join('')}</div></footer>
    <div class="cookie">By using our website you consent to all cookies in accordance with our <u>Privacy Policy</u>.<button aria-label="Close">×</button></div>`
}
