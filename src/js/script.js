import 'flowbite';
import { Accordion } from 'flowbite';

const accordionItems = document.querySelectorAll('.accordion-item');
  
accordionItems.forEach(item => {
  const title = item.querySelector('.accordion-title');
  const content = item.querySelector('.accordion-content');
  const plusIcon = item.querySelector('.plus-icon');
  const minusIcon = item.querySelector('.minus-icon');

  title.addEventListener('click', () => {
    const isOpen = content.classList.contains('hidden');

    accordionItems.forEach(item => {
      item.querySelector('.accordion-content').classList.add('hidden');
      item.querySelector('.plus-icon').classList.remove('hidden');
      item.querySelector('.minus-icon').classList.add('hidden');
    });

    if (isOpen) {
      content.classList.remove('hidden');
      plusIcon.classList.add('hidden');
      minusIcon.classList.remove('hidden');
    }
  });
});
  