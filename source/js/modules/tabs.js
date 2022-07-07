const tabs = (headerSelector, tabSelector, contentSelector, active) => {
  const header = document.querySelector(headerSelector)
  const tab = document.querySelectorAll(tabSelector)
  const content = document.querySelectorAll(contentSelector)

  function hideTabContent() {
    content.forEach(item => {
      item.classList.add('visually-hidden')
    })

    tab.forEach(item => {
      item.classList.remove('tab--active')
    })
  }

  function showTabContent(i = 0) {
    content[i].classList.remove('visually-hidden')
    tab[i].classList.add('tab--active')
  }

  hideTabContent()
  showTabContent()

  header.addEventListener('click', (event) => {
    const target = event.target
    if (target.classList.contains(tabSelector.replace(/\./, '')) ||
        target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {

        event.preventDefault()

        tab.forEach((item, i) => {
          if (target == item || target.parentNode == item) {
            hideTabContent()
            showTabContent(i)
          }
        })
      }
  })
}

export default tabs;
