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

function adjustSlidesPerView() {
    if (window.innerWidth < 768) {
        quotes.params.slidesPerView = 1;
    } else {
        quotes.params.slidesPerView = 2;
    }
    quotes.update();
}

adjustSlidesPerView();

window.addEventListener('resize', adjustSlidesPerView);