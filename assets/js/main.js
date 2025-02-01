const bodyHidden = () => {
  document.querySelector('body').style.overflow = 'hidden';
}

const bodyVisible = () => {
  document.querySelector('body').style.overflow = 'visible';
}

const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuBg = document.querySelector('.mobile-menu__bg');
const bars = document.querySelector('.header .bars');

bars.onclick = () => {
  bodyHidden();
  mobileMenu.classList.toggle('active');
  bars.classList.toggle('active');
}

mobileMenuBg.onclick = () => {
  bodyHidden();
  mobileMenu.classList.remove('active');
  bars.classList.remove('active');
}

var partnerslider = new Swiper(".partnerSwiper", {
  slidesPerView: 1.8,
  spaceBetween: 15,
  centeredSlides: true,
  initialSlide: 1,
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
