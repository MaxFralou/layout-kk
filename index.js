var swiper = new Swiper(".mySwiper", {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChange: function () {
      document.querySelector('.mySwiper').scrollIntoView();
    },
  },
});

document.querySelector('.menu-list').addEventListener('click', event => {
    document.querySelector('.burger-checkbox').click();
});