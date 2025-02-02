const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBg = document.querySelector('.mobile-menu__bg');
const bars = document.querySelector('.header .bars');
const mobileMenuClose = document.querySelector('.mobile-menu__close');

bars.onclick = () => {
  mobileMenu.classList.add('active');
  bars.classList.add('active');
}

mobileMenuBg.onclick = () => {
  mobileMenu.classList.remove('active');
  bars.classList.remove('active');
}

mobileMenuClose.onclick = () => {
  mobileMenu.classList.remove('active');
  bars.classList.remove('active');
}

var partnerslider = new Swiper(".partnerSwiper", {
  slidesPerView: 1.8,
  spaceBetween: 15,
  centeredSlides: true,
  initialSlide: 1,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2.8,
    },

    993: {
      slidesPerView: 2.3,
    },
  },
});

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

const participateSwp = new Swiper('.participate .swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        993: {
            slidesPerView: 4,
        }
    }
})
