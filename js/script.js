var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.js-carousel-nav-left',
        prevEl: '.js-carousel-nav-right',
    },
    speed: 300,
    effect: 'slide',
    loop: 'true',
    slidesPerView: 4
});