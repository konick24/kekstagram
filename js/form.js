import {isEsc} from './util.js'

const formModal = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const fileField = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const form = document.querySelector('.img-upload__form');
const hashtagField = document.querySelector('.text__hashtags');
const commentField = document.querySelector('.text__description');

const re = /^#[A-Za-zА-Яа-я0-9ёЁ]{1,19}$/;
const MAXCOUNTTAG = 5;

const pristine = new Pristine(form);

const isTextFieldFocused = () => {
  document.activeElement === hashtagField ||
  document.activeElement === commentField;
}

const onEscKeyDown = (evt) => {
  if (isEsc(evt) && !isTextFieldFocused()) {
    evt.preventDefault();
    hideModal();
  }
}

const showModal = () => {
  formModal.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onEscKeyDown);
}

const hideModal = () => {
  form.reset();
  pristine.reset();
  formModal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
}

const onCuncelButtonClick = () => {
  hideModal();
}

const onFileInputChenge = () => {
  showModal();
}

const isValidTag = (string) => {
  console.log(string);
  return re.test(string);
}

//проверка количества тегов
const hasValidCount = (tags) => {
  return tags.length <= MAXCOUNTTAG;
}

// проверка на ункальность
const hasUniqueTags = (tags) => {
  tags.map((tag) => tag.toLowerCase());
  return tags.length === new Set(tags).size;
}

// валидация хэштега
const validateTags = (value) => {
  const tags = value.trim().split(' ');
  return console.log(hasUniqueTags(tags) && hasValidCount(tags) && tags.every(isValidTag));
}

pristine.addValidator(hashtagField, validateTags, 'Неправильно заполнены хэштеги');

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
}

fileField.addEventListener('change', onFileInputChenge);
cancelButton.addEventListener('click', onCuncelButtonClick);
form.addEventListener('submit', onFormSubmit);
