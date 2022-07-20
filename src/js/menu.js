import menu from '../menu.json';
import dishTemplate from '../templates/template.hbs';

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', dishTemplate(menu));
