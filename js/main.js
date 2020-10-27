// Variables
const overlays = {
  mainHeader:document.querySelector('#main-header'),
  overlay1: document.querySelector(".overlay1"),
  overlay2: document.querySelector(".overlay2"),
  overlayBar: document.querySelector(".overlay-bar"),
  logo: document.querySelector(".enroladosLogo"),
  logoMobile: document.querySelector(".logoPpal"),
  menuLink: document.querySelectorAll(".nav-link"),
  hambMenu: document.querySelector("label"),
  imageCarousel: document.querySelector(".image-carousel"),
};
// Menu Variables
const menuHamb = document.getElementById("menuhamb");
const body = document.body;
const overlay = document.querySelector(".overlay");
const navigationOverlay = document.querySelectorAll("ul");

// Carousel Image Variables
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll(".carousel-slide img");
// console.log(carouselImages)
// Buttons Variables
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");


// // Boolean Variable
let switchOverlay = false;

// Image Counter
let counter = 1;
const size = carouselImages[0].clientWidth;
carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

// Destructuring
const {
  mainHeader,
  overlay1,
  overlay2,
  overlayBar,
  logo,
  logoMobile,
  menuLink,
  hambMenu,
} = overlays;

// Functions
const showAndHideMenu = () => {
  if (switchOverlay === false) {
    switchOverlay = true;
    overlay.classList.add("overlayScale");
    navigationOverlay.forEach((navLink) => {
      navLink.style.opacity = "1";
    });
    body.style.overflowY = "hidden";
    console.log(overlay);
  } else {
    // Close the overlay menu
    switchOverlay = false;
    overlay.classList.remove("overlayScale");
    navigationOverlay.forEach((navLink) => {
      navLink.style.opacity = "0";
    });
  }
};

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
    logoMobile.style.opacity = "1";
    hambMenu.style.opacity = "1";
    menuLink.forEach((menu) => (menu.style.opacity = "1"));
  }, 5000);
  setTimeout(() => {
    body.style.background = '#eebd06'
    mainHeader.style.height = '10vh'
    overlay1.style.display= "none";
    overlay2.style.display= "none";
    carouselSlide.style.opacity = '1'
  }, 5800);
});
menuHamb.addEventListener("click", showAndHideMenu);

nextBtn.addEventListener('click', ()=>{
  if(counter >= carouselImages.length -1 ) return
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
})

prevBtn.addEventListener('click', ()=>{
  if(counter <= 0 ) return
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
})

carouselSlide.addEventListener('transitionend', ()=>{
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = 'none'
    counter = carouselImages.length - 2
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  }
  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = 'none'
    counter = carouselImages.length - counter
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  }
})