window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  let offerSlider = new Swiper('.offer-slider', {
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
    }
  });

  let galarySlider = new Swiper('.galary-slider', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  var jobsSlider = new Swiper(".jobs-slider", {
    // Navigation arrows
    navigation: {
      nextEl: ".jobs-slider-button--next",
      prevEl: ".jobs-slider-button--prev",
    },
    allowTouchMove: false
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

  const anchors = document.querySelectorAll('a[href*="#"]');

  $("body").on('click', '[href*="#"]', function (e) {
    var fixedOffset = 80;
    $('html,body').stop().animate({
      scrollTop: $(this.hash).offset().top - fixedOffset
    }, 1000);
    e.preventDefault();
  });

  $(document).ready(function () {
    var button = $('#button-up');
    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        button.fadeIn();
      } else {
        button.fadeOut();
      }
    });
    button.on('click', function () {
      $('body, html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  });

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
});