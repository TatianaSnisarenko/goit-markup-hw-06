const modal = document.querySelector('.js-modal');
const openBtn = document.querySelector('.js-open-btn');
const closeBtn = document.querySelector('.js-close-btn');

const menu = document.querySelector('.js-menu');
const menuOpenBtn = document.querySelector('.js-menu-open-btn');
const menuCloseBtn = document.querySelector('.js-menu-close-btn');

const toggleModal = () => {
  modal.classList.toggle('is-open');
};

openBtn.onclick = toggleModal;
closeBtn.onclick = toggleModal;

const toggleMenu = () => {
  menu.classList.toggle('is-open');
};

menuOpenBtn.onclick = toggleMenu;
menuCloseBtn.onclick = toggleMenu;
