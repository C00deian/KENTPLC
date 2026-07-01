import './style.css'
import './navigation.css'
import './careers.css'
import { vacancies } from './data/siteData.js'
import { renderHomePage } from './views/homePage.js'
import { initMegaMenus } from './interactions/megaMenu.js'
import { initCareerFilters } from './interactions/careerFilters.js'

renderHomePage(document.querySelector('#app'))

const header = document.querySelector('.site-header')
let lastY = 0
addEventListener('scroll', () => {
  const y = scrollY
  header.classList.toggle('compact', y > 80)
  header.classList.toggle('hidden', y > lastY && y > 500)
  lastY = y
}, { passive: true })

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (!entry.isIntersecting) return
  entry.target.classList.add('shown')
  observer.unobserve(entry.target)
}), { threshold: .12 })
document.querySelectorAll('.reveal').forEach(element => observer.observe(element))

document.querySelector('.cookie button').addEventListener('click', () => document.querySelector('.cookie').remove())
document.querySelector('.backtop').addEventListener('click', event => {
  event.preventDefault()
  scrollTo({ top: 0, behavior: 'smooth' })
})

const newsTrack = document.querySelector('.news-track')
document.querySelector('.next').addEventListener('click', () => newsTrack.scrollBy({ left: 460, behavior: 'smooth' }))
document.querySelector('.prev').addEventListener('click', () => newsTrack.scrollBy({ left: -460, behavior: 'smooth' }))
document.querySelector('.menu').addEventListener('click', () => document.body.classList.toggle('nav-open'))

initMegaMenus()
initCareerFilters(vacancies)
