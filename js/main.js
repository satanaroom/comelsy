'use strict';

let offerSlider = new Swiper('.offer-slider', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});

let galarySlider = new Swiper('.galary-slider', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
      enabled: true,
      onlyInViewport: false,
  },
});

var jobsSlider = new Swiper(".jobs-slider", {
  // Navigation arrows
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },
});

const menuButton = document.querySelector('.menu-button'),
    headerMenu = document.querySelector('.header-menu'),
    headerClose = document.querySelector('.header-close');

menuButton.addEventListener('click', () => {
    headerMenu.classList.add('header-menu--visible');
    headerClose.classList.add('header-close--visible');
    headerMenu.style.opacity = "0";
        let x = 0;
        const timer = setInterval(() => {
          x += 0.1;
          headerMenu.style.opacity = `${x}`;
          if (headerMenu.style.opacity === "1.1") {
            clearInterval(timer);
          }
        }, 20);
});

headerClose.addEventListener('click', () => {
    let x = 1;
    const timer = setInterval(() => {
        x -= 0.1;
        headerMenu.style.opacity = `${x}`;
        if (headerMenu.style.opacity === "-0.1") {
            clearInterval(timer);
        }
    }, 20);
    headerMenu.classList.remove('header-menu--visible');
    headerClose.classList.remove('header-close--visible');
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (const anchor of anchors) {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

// Обработка форм
$(".form").each(function () {
  $(this).validate({
    errorClass: "invalid",
    errorElement: "em",
    messages: {
      email: {
        required: "Нам необходим Ваш email, чтобы связаться с Вами!",
        email: "Ваш email должен быть в формате: name@domain.com",
      },
    },
  });
});