// import gsap from "gsap";
import { ScrollTrigger, gsap } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

// Get the line element
const lineElement = document.querySelector(".line");

// Create GSAP timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about", // Use the section as trigger
    start: "center bottom", // When the top of the section reaches the bottom of the viewport
    end: "bottom center", // When the bottom of the section reaches the top of the viewport
    scrub: true, // Smooth scrolling effect
  },
});

// Add animation to the line element
tl.to(
  lineElement,
  {
    width: "100%", // Extend the width to cover the section
    // Duration of the animation
    ease: "sine.out", // Linear easing for smooth effect
  },
  0,
); // Add the animation at the start of the timeline

const tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

const rebellumText = document.getElementById("rebelliumText");
const rebellumDesc = document.getElementById("rebelliumDesc");
tl2.to(rebellumText, {
  scrollTrigger: rebellumText,
  y: -20,
  ease: "none",
});
tl2.to(rebellumDesc, {
  scrollTrigger: rebellumDesc,
  y: -20,
  ease: "sine.out",
});

gsap.to(".pesawat", {
  scrollTrigger: {
    trigger: "#pengaruh",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
  x: "-50vh",
});
