
const burgerMenu = () => {
  const burger = document?.querySelector('[data-burger]')
  const nav = document?.querySelector('[data-nav]')

  const navItems = nav?.querySelectorAll('a')

  const header = document?.querySelector('.page-header')
  console.log(header)
  const headerHeight = header.offsetHeight
  console.log(headerHeight)
  nav.style.setProperty('--header-height', `${headerHeight}px`)

  burger?.addEventListener('click', () => {
    burger?.classList.toggle('main-nav__toggle--active')
    nav.classList.toggle('main-nav--visible')
  })

  navItems.forEach (el => {
    el.addEventListener('click', () => {
      // body.classList.remove('stop-scroll')
      burger?.classList.remove('main-nav__toggle--active')
      nav.classList.remove('main-nav--visible')
    })
  })
}

export default burgerMenu;
