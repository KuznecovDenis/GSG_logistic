// import Swiper, { Navigation, Pagination } from 'swiper';
import Swiper from 'swiper/bundle';

const slider = () => {
  const swiper = new Swiper('.swiper', {
    loopedSlides: 10,
    loop: true,
    slidesPerView: 1,
    slideToClickedSlide: true, //приводит к переходу на слайд по клику
    slidesPerGroup: 1, //кол-во слайдов для прокрутки

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 640px
      768: {
        slidesPerView: 'auto',
        spaceBetween: 15,
      },

      1224: {
        slidesPerView: 'auto',
        spaceBetween: 15,
      }
    }

    // autoplay: {
    //   delay: 1500,
    // },
  });
}

export default slider;

