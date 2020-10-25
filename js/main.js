// Variables
const overlays = {
  overlay1: document.querySelector(".overlay1"),
  overlay2: document.querySelector(".overlay2"),
  overlayBar: document.querySelector(".overlay-bar"),
  logo: document.querySelector(".enroladosLogo"),
  logoMobile: document.querySelector(".logoPpal"),
  menuLink: document.querySelectorAll('.nav-link'),
  hambMenu: document.querySelector('label'),
  imageCarousel: document.querySelector('.image-carousel')
};
const menuHamb = document.getElementById("menuhamb")
const body = document.body;
const overlay = document.querySelector(".overlay");
const navigationOverlay = document.querySelectorAll("ul");

// Boolean Variable
let switchOverlay = false;

// Destructuring
const { 
  overlay1, 
  overlay2, 
  overlayBar, 
  logo,
  logoMobile,
  menuLink,
  imageCarousel,
  hambMenu
} = overlays;

// Functions
const showAndHideMenu = () =>{
  if (switchOverlay === false) {
    switchOverlay = true;
    overlay.classList.add("overlayScale");
    navigationOverlay.forEach((navLink)=>{
      navLink.style.opacity = '1'
    })
    body.style.overflowY = "hidden";
    console.log(overlay)
  } else {
    // Close the overlay menu
    switchOverlay = false;
    overlay.classList.remove("overlayScale");
    navigationOverlay.forEach((navLink)=>{
      navLink.style.opacity = '0'
    })
    body.style.overflowY = "unset";
  }
}

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
    logoMobile.style.opacity = '1'
    hambMenu.style.opacity = '1'
    menuLink.forEach(menu => menu.style.opacity = '1')
  }, 5000);
  setTimeout(() => {
    imageCarousel.style.opacity = '1'
  }, 5800);
});
menuHamb.addEventListener("click", showAndHideMenu);
