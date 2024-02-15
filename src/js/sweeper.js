import Swiper from "swiper/bundle";
import 'swiper/css/bundle';

const swiper = new Swiper('.team', {
    effect: 'coverflow',
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 3,

    coverflowEffect: {
        rotate: 0,
        stretch: -10,
        depth: 100,
        modifier: 2.5,
    },


    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});