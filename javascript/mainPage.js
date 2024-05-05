var swiper = new Swiper(".slider-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    centerSlide:'true',
    grabCursor:'true',

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

var swiper = new Swiper(".testislide-container", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});