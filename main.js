/* Toggle Button */
const navMenu = document.getElementById("nav-menu");

const navLink = document.querySelectorAll(".nav-link");

const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("left-[0]");

  hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");

    hamburger.classList.toggle("ri-close-large-line");
  });
});

// swiper
const swiper = new Swiper(".swiper", {
  // optional parameter
  speed: 400,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  // if we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
  breakpoints: {
    640: {
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
