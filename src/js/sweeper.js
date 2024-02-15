import Swiper from "swiper/bundle";
import 'swiper/css/bundle';

const swiper = new Swiper('.team', {
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  autoplay: {
    delay: 5000,

  },

  coverflowEffect: {
    rotate: 0,
    stretch: -20,
    depth: 100,
    modifier: 2.5,
  },

  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
});
