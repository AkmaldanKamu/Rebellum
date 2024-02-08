import 'flowbite';
import { Accordion } from 'flowbite';
import './accordion';
import './chart'

window.onscroll = () => {
	const header = document.querySelector('nav');
	const fixedNav = header.offsetTop;

	if (window.scrollY > fixedNav) {
		header.classList.add('navbar-fixed');
	} else {
		header.classList.remove('navbar-fixed');
	}
};