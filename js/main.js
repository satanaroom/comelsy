'use strict';

let mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});