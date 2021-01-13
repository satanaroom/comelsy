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
    headerMenu.classList.remove('header-menu--visible');
    headerClose.classList.remove('header-close--visible');
    headerMenu.style.opacity = "1";
        let x = 0;
        const timer = setInterval(() => {
          x -= 0.1;
          headerMenu.style.opacity = `${x}`;
          if (headerMenu.style.opacity === "-0.1") {
            clearInterval(timer);
          }
        }, 20);
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