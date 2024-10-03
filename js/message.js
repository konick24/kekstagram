const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

const showSuccessMessage = () => {
  body.append(successMessage);
  body.addEventListener('keydown', onEscKeyDown);
  body.addEventListener('click', onBodyClick);
};

const showErrorMessage = () => {

};

function hideMessage() {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  body.removeEventListener('keydown', onEscKeyDown);
}

function onBodyClick(evt) {
  if ( evt.target.closest('.success__inner') ||
  evt.target.closest('.error__inner')) {
    return;
  }
  hideMessage();
}

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideMessage();
  }
}

export {showSuccessMessage, showErrorMessage};
