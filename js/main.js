initNavbar();
initSwiper();
initWhatsappButton();

const swiper = new Swiper(".gallerySwiper", {
  loop: true,

  spaceBetween: 25,

  grabCursor: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  },
});