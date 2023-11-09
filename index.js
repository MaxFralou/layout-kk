var swiper = new Swiper(".mySwiper", {
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class="${className}">${index === 0 ? 'Женщины' : index === 1 ? 'Дети' : index + 1}</div>`;
    },
  },
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

var pagination = document.querySelector('.swiper-pagination');
var footer = document.querySelector('.footer-title');

var observer = new IntersectionObserver(function(entries) {
  if (entries[0].isIntersecting) {
    pagination.style.display = 'none';
  } else {
    pagination.style.display = 'flex';
  }
});

observer.observe(footer);