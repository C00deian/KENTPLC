export function initMegaMenus() {
  const triggers = document.querySelectorAll('.nav-mega-trigger')
  const menus = document.querySelectorAll('.mega-menu')

  const close = () => {
    document.body.classList.remove('mega-open')
    menus.forEach(menu => {
      menu.classList.remove('open')
      menu.setAttribute('aria-hidden', 'true')
    })
    triggers.forEach(button => {
      button.classList.remove('active')
      button.setAttribute('aria-expanded', 'false')
    })
  }

  const selectGroup = button => {
    const menu = button.closest('.mega-menu')
    menu.querySelectorAll('.mega-group').forEach(item => {
      item.classList.remove('selected')
      item.setAttribute('aria-selected', 'false')
    })
    menu.querySelectorAll('.mega-content').forEach(item => item.classList.remove('selected'))
    button.classList.add('selected')
    button.setAttribute('aria-selected', 'true')
    menu.querySelector(`[data-content="${button.dataset.group}"]`)?.classList.add('selected')
  }

  triggers.forEach(trigger => trigger.addEventListener('click', event => {
    event.stopPropagation()
    const menu = document.querySelector(`[data-menu="${trigger.dataset.target}"]`)
    const shouldOpen = menu && !menu.classList.contains('open')
    close()
    if (!shouldOpen) return

    menu.classList.add('open')
    menu.setAttribute('aria-hidden', 'false')
    trigger.classList.add('active')
    trigger.setAttribute('aria-expanded', 'true')
    document.body.classList.add('mega-open')
  }))

  document.querySelectorAll('.mega-group').forEach(button => {
    button.addEventListener('mouseenter', () => selectGroup(button))
    button.addEventListener('focus', () => selectGroup(button))
    button.addEventListener('click', () => selectGroup(button))
  })
  document.querySelectorAll('.mega-close').forEach(button => button.addEventListener('click', close))
  document.addEventListener('click', event => {
    if (!event.target.closest('.mega-menu') && !event.target.closest('.nav-mega-trigger')) close()
  })
  document.addEventListener('keydown', event => { if (event.key === 'Escape') close() })

  return { close }
}
