const searchFormEl = document.querySelector(".search-form");
const inputBoxEl = document.getElementById("search-btn");
const cartBoxEl = document.querySelector(".shopping-cart");
const cartShowEl = document.getElementById("cart-btn");
const loginBtnEl = document.getElementById("login-btn");
const loginBoxEl = document.querySelector(".login-form");
const menuBtnEl = document.getElementById("menu-btn");
const smallHeaderMenuEl = document.querySelector(".navbar");

inputBoxEl.addEventListener("click", () => {
  searchFormEl.classList.toggle("active");
  cartBoxEl.classList.remove("active");
  loginBoxEl.classList.remove("active");
  smallHeaderMenuEl.classList.remove("active");
});

cartShowEl.addEventListener("click", () => {
  cartBoxEl.classList.toggle("active");
  searchFormEl.classList.remove("active");
  loginBoxEl.classList.remove("active");
  smallHeaderMenuEl.classList.remove("active");
});
loginBtnEl.addEventListener("click", () => {
  loginBoxEl.classList.toggle("active");
  cartBoxEl.classList.remove("active");
  searchFormEl.classList.remove("active");
  smallHeaderMenuEl.classList.remove("active");
});
menuBtnEl.addEventListener("click", () => {
  smallHeaderMenuEl.classList.toggle("active");
  loginBoxEl.classList.remove("active");
  cartBoxEl.classList.remove("active");
  searchFormEl.classList.remove("active");
});

window.onscroll = () => {
  smallHeaderMenuEl.classList.remove("active");
  loginBoxEl.classList.remove("active");
  cartBoxEl.classList.remove("active");
  searchFormEl.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    1020: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
  },
});
var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      // spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      // spaceBetween: 20,
    },
    1020: {
      slidesPerView: 3,
      // spaceBetween: 40,
    },
  },
});
