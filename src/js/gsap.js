// Get the text element
const textElement = document.getElementById("text");
// Get the line element
const lineElement = document.querySelector(".line");

// Create GSAP timeline
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#about", // Use the section as trigger
    start: "top bottom", // When the top of the section reaches the bottom of the viewport
    end: "bottom top", // When the bottom of the section reaches the top of the viewport
    scrub: true // Smooth scrolling effect
  }
});

// Add animation to the text element
tl.to(textElement, {
  y: -200, // Adjust this value to control the parallax effect
  ease: "none" // Linear easing for smooth effect
});

// Add animation to the line element
tl.to(lineElement, {
  width: "100%", // Extend the width to cover the section
  duration: 1, // Duration of the animation
  ease: "none" // Linear easing for smooth effect
}, 0); // Add the animation at the start of the timeline