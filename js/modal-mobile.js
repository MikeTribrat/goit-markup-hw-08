(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-mobile-menu-open]'),
    closeModalBtn: document.querySelector('[data-modal-mobile-menu-close]'),
    modal: document.querySelector('[data-modal-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('backdrop-mobile__is-hidden');
  }
})();