// import Swiper, { Navigation, Pagination } from 'swiper';
import Swiper from 'swiper/bundle';

const sliders = () => {
  const swiper = new Swiper('.swiper', {
    loopedSlides: 10,
    loop: true,
    slidesPerView: 1,
    slideToClickedSlide: true, //приводит к переходу на слайд по клику
    slidesPerGroup: 1, //кол-во слайдов для прокрутки

    pagination: {
      el: '.gallery__pagination',
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

  const sliderSol = new Swiper('.slider-sol', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    slideClass: 'slider-sol__item',
    wrapperClass: 'slider-sol__list',

    breakpoints: {
      // when window width is >= 640px
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },

      1224: {
        slidesPerView: 3,
        spaceBetween: 17,
      }
    },

    pagination: {
      el: '.slider-sol__controls',
      type: 'bullets',
      clickable: 'true',
    },

    navigation: {
      nextEl: '.solo-button-next',
      prevEl: '.solo-button-prev',
    },
  });
}

export default sliders;

