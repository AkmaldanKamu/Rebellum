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

const quotes = new Swiper('.quotes', {
    grabCursor: true,
    loop: true,
    slidesPerView: 2,
    spaceBetween: 50,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
    }
})


if (window.innerWidth < 768) {
    quotes.params.slidesPerView = 1;
}

// let TrandingSlider = new Swiper('.tranding-slider', {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     loop: true,
//     slidesPerView: 'auto',
// coverflowEffect: {
//     rotate: 0,
//     stretch: 0,
//     depth: 100,
//     modifier: 2.5,
// },
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     }
// });