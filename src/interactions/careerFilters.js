const jobCard = (job, index) => `
  <a href="#" style="--job-index:${index}">
    <span>
      <em>${job.category}</em>
      <b>${job.title}</b>
      <small>Location: ${job.city}, ${job.country}</small>
    </span>
    <i>↗</i>
  </a>`

export function initCareerFilters(vacancies) {
  const list = document.querySelector('#jobs-list')
  const keyword = document.querySelector('#job-keyword')
  const category = document.querySelector('#job-category')
  const location = document.querySelector('#job-location')
  const count = document.querySelector('#job-count')
  const clear = document.querySelector('#clear-jobs')
  const form = document.querySelector('.job-filters')

  if (!list || !form) return

  const render = () => {
    const query = keyword.value.trim().toLocaleLowerCase()
    const filtered = vacancies.filter(job =>
      (!query || `${job.title} ${job.city} ${job.country} ${job.category}`.toLocaleLowerCase().includes(query)) &&
      (!category.value || job.category === category.value) &&
      (!location.value || job.country === location.value)
    )

    count.textContent = filtered.length
    clear.classList.toggle('visible', Boolean(query || category.value || location.value))
    list.innerHTML = filtered.length
      ? filtered.map(jobCard).join('')
      : '<div class="no-jobs"><h3>No vacancies found</h3><p>Try removing a filter or using a broader keyword.</p></div>'
  }

  form.addEventListener('submit', event => {
    event.preventDefault()
    render()
  })
  keyword.addEventListener('input', render)
  category.addEventListener('change', render)
  location.addEventListener('change', render)
  clear.addEventListener('click', () => {
    keyword.value = category.value = location.value = ''
    render()
    keyword.focus()
  })

  render()
}
