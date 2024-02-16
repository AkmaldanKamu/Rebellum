import "flowbite";
import Typed from "typed.js";
import Aos from "aos";
import 'ionicons';
import './sweeper';
import "./chart";
import "./three";
import './logo.three'
import "./gsap";

Aos.init({
  mirror: false,
});


// window.onload = () => {
//   window.setTimeout(fadeout, 100);
// }

// function fadeout() {
//   const loader = document.getElementById('loader')
//   loader.style.opacity = '0';
//   setTimeout(() => {
//     loader.style.display = 'none'; 
//   }, 100);
// }

const indonesia = new Typed(".indonesia", {
  strings: ["di Indonesia"],
  typeSpeed: 60,
  showCursor: false,
  startDelay: 500,
  onComplete: (self) => {
    const typed = document.querySelector(".indonesia");
    typed.classList.add("bg-yellow", "text-white");
  },
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

const firstFiveSections = Array.from(sections).slice(0, 5);

window.onscroll = () => {
  firstFiveSections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }

    const header = document.querySelector("nav");
    const fixedNav = header.offsetTop;

    if (window.scrollY > fixedNav) {
      header.classList.add("navbar-fixed");
    } else {
      header.classList.remove("navbar-fixed");
    }

  });
};
