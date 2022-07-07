import modals from './modules/popup'
import tabs from './modules/tabs'


window.addEventListener('DOMContentLoaded', () => {
  modals();
  tabs('.services__tabs', '.tab', '.services__product')
})

