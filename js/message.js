const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const body = document.querySelector('body');

const showSuccessMessage = () => {
  body.append(successMessage);
  body.addEventListener('keydown', onEscKeyDown);
  body.addEventListener('click', onBodyClick);
  successMessage.querySelector('.success__button').addEventListener('click', hideMessage);
};

const showErrorMessage = () => {
  body.appendChild(errorMessage);
  body.addEventListener('keydown', onEscKeyDown);
  errorMessage.querySelector('.error__button').addEventListener('click', hideMessage);
};

function hideMessage() {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  body.removeEventListener('keydown', onEscKeyDown);
  body.removeEventListener('click', onBodyClick);
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
