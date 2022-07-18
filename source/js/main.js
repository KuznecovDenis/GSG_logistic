import modals from './modules/popup'
import tabs from './modules/tabs'
import accordion from './modules/accordion'
import burgerMenu from './modules/burger-menu'
import slider from './modules/slider'


window.addEventListener('DOMContentLoaded', () => {
  modals();
  tabs('.services__tabs', '.tab', '.services__product')
  accordion('.question')
  slider()
})

