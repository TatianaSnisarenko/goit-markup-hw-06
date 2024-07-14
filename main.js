const modal = document.querySelector('.js-modal');
const openBtn = document.querySelector('.js-open-btn');
const closeBtn = document.querySelector('.js-close-btn');

const toggleModal = () => {
  modal.classList.toggle('is-open');
};

openBtn.onclick = toggleModal;
closeBtn.onclick = toggleModal;
