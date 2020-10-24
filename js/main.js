// Variables
const overlays = {
  overlay1: document.querySelector(".overlay1"),
  overlay2: document.querySelector(".overlay2"),
  overlayBar: document.querySelector(".overlay-bar"),
  logo: document.querySelector(".enroladosLogo"),
  menuLink: document.querySelectorAll('.nav-link'),
  hambMenu: document.querySelector('label'),
  imageCarousel: document.querySelector('.image-carousel')
};

// Destructuring
const { 
  overlay1, 
  overlay2, 
  overlayBar, 
  logo,
  menuLink,
  imageCarousel,
  hambMenu
} = overlays;

// Events
window.addEventListener("load", () => {
  setTimeout(() => {
    overlay1.style.width = "50%";
    overlay2.style.width = "50%";
  }, 2000);
  setTimeout(() => {
    overlayBar.style.height = "100vh";
  }, 2000);
  setTimeout(() => {
    overlayBar.style.opacity = "0";
    overlay2.style.background = "#eebd06";
  }, 3500);
  setTimeout(() => {
    logo.classList.add("logoTransition");
    hambMenu.style.opacity = '1'
    menuLink.forEach(menu => menu.style.opacity = '1')
  }, 5000);
  setTimeout(() => {
    imageCarousel.style.opacity = '1'
  }, 5800);
});
