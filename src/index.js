import dishes from './menu.json';
import itemsTemplate from './template.hbs';
import './styles.css';

const menuRef = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');
const checkboxRef = document.querySelector('#theme-switch-toggle');


const markup = itemsTemplate(dishes);

menuRef.insertAdjacentHTML('beforeend', markup);

checkboxRef.addEventListener('change', onCheckboxChange);

// function onCheckboxChange(event){
//     bodyRef.classList.toggle('dark-theme');
// };
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function onCheckboxChange(event) {
    if (event.currentTarget.checked) {
        bodyRef.classList.remove(Theme.LIGHT);
        bodyRef.classList.add(Theme.DARK);
        localStorage.setItem('theme', Theme.DARK);
    } else {
        bodyRef.classList.remove(Theme.DARK);
        bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', Theme.LIGHT);
    }
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    bodyRef.classList.add(savedTheme);
    if (savedTheme === Theme.DARK) {
        checkboxRef.checked = true;
    }
}