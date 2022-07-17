const accordion = trigersSelector => {
  const trigers = document.querySelectorAll(trigersSelector)

  trigers.forEach(el => {
    el.addEventListener('click', (event) => {
      const self = event.currentTarget
      const title = self.querySelector('.question__title')
      const content = self.querySelector('.question__description')
      const button = self.querySelector('.question__btn')

      if (self.classList.contains('question--active')) {
        title.classList.remove('question__title--active')
        content.classList.add('visually-hidden')
        button.classList.remove('button--question-active')
        self.classList.remove('question--active')
      } else {
        title.classList.add('question__title--active')
        content.classList.remove('visually-hidden')
        button.classList.add('button--question-active')
        self.classList.add('question--active')
      }
    })
  })


}

export default accordion;
