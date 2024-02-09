import 'flowbite';
import { Accordion } from 'flowbite';
import Typed from 'typed.js';
import './accordion';
import './chart'
import './three'

const indonesia = new Typed('.indonesia', {
	strings: ["di Indonesia"],
	typeSpeed: 60,
	showCursor: false,
	startDelay: 500
  });

window.onscroll = () => {
	const header = document.querySelector('nav');
	const fixedNav = header.offsetTop;

	if (window.scrollY > fixedNav) {
		header.classList.add('navbar-fixed');
	} else {
		header.classList.remove('navbar-fixed');
	}
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
	let top = window.scrollY;
	let offset = sec.offsetTop;
	let height = sec.offsetHeight;
	let id = sec.getAttribute('id');
	  
	  if (top >= offset && top < offset + height) {
		navLinks.forEach(links => {
			links.classList.remove('active');
			document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
		})
	  }
  })
}