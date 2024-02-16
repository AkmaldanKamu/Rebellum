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

const carousel = new Swiper('.carousel', {
  // loop: true,
  slidesPerView: 1,
  centeredSlides: true,
});

const buttons = document.querySelectorAll('.swiper-btn');
buttons.forEach((button) => {
  button.addEventListener('click', function () {
    const slideIndex = parseInt(button.dataset.slide);
    carousel.slideTo(slideIndex - 1);
  });
});
