import {isEsc} from './util.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effect.js';

const formModal = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const fileField = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');
const submitButton =document.querySelector('.img-upload__submit');

const re = /^#[A-Za-zА-Яа-я0-9ёЁ]{1,19}$/;
const MAXCOUNTTAG = 5;

const pristine = new Pristine(form, {
  classTo: 'img-upload__element',
  errorTextParent: 'img-upload__element',
  errorTextClass: 'img-upload__error',
});

const isTextFieldFocused = () =>
  document.activeElement === hashtagField ||
  document.activeElement === commentField;

const showModal = () => {
  formModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
};

const hideModal = () => {
  form.reset();
  resetScale();
  resetEffects();
  pristine.reset();
  formModal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (isEsc(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const onCancelButtonClick = () => {
  hideModal();
};

const onFileInputChenge = () => {
  showModal();
};

const isValidTag = (string) => re.test(string);

//проверка количества тегов
const hasValidCount = (tags) => tags.length <= MAXCOUNTTAG;


// проверка на ункальность
const hasUniqueTags = (tags) => {
  tags.map((tag) => tag.toLowerCase());
  return tags.length === new Set(tags).size;
};

// валидация хэштега
const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return hasUniqueTags(tags) && hasValidCount(tags) && tags.every(isValidTag);
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Отправить';
};

pristine.addValidator(hashtagField, validateTags, 'Неправильно заполнены хэштеги');

const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      await cb(new FormData(form));
      unblockSubmitButton();
    }
  });
};

fileField.addEventListener('change', onFileInputChenge);
cancelButton.addEventListener('click', onCancelButtonClick);

export {setOnFormSubmit, hideModal};
