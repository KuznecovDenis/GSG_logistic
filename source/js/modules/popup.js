const modals = () => {
  function bindModal(triggerSelector, modalSelector, closeSelector) {

    const trigger = document.querySelectorAll(triggerSelector)
    const modal = document.querySelector(modalSelector)
    const close = document.querySelector(closeSelector)

    trigger.forEach(item => {
      item.addEventListener('click', (event) => {
        if (event.target) {
          event.preventDefault()
        }

        modal.classList.remove('visually-hidden')
        document.body.style.overflow = 'hidden'
      })

      close.addEventListener('click', () => {
        modal.classList.add('visually-hidden')
        document.body.style.overflow = ''
      })
    })

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.classList.add('visually-hidden')
        document.body.style.overflow = ''
      }
    })
  }

  bindModal('[data-popUp]', '.pop-up', '.pop-up .pop-up__close')
}

export default modals;
