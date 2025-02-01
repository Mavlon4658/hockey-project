// partner
var partnerslider = new Swiper(".partnerSwiper", {
  slidesPerView: 1.8,
  spaceBetween: 15,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 2.8,
    },

    993: {
      slidesPerView: 2.3,
    },
  },
});
partnerslider.slideTo(1);
// partner

// program
var partnerslider = new Swiper(".programSwiper", {
  slidesPerView: 1.2,
  spaceBetween: 15,
  breakpoints: {
    576: {
      slidesPerView: 2,
    },

    768: {
      slidesPerView: 3,
    },

    993: {
      spaceBetween: 20,
      slidesPerView: 4,
    },
  },
});
// program
