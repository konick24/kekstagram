import { showFullPhoto } from './full-photo.js';
import { getPicture } from './get-picture.js';

const pictures = document.querySelector('.pictures'); // окно с картинками
const template = document.querySelector('#picture').content.querySelector('.picture'); // шаблон
const renderPictures = getPicture(); // создаём массив с рандомными картинками
const fragment = document.createDocumentFragment(); // создаём фрагмент

// проходимся по массиву созданных картинок
renderPictures.forEach((data) => {
  const pictureElement = template.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = data.url;
  pictureElement.querySelector('.picture__img').alr = data.description;
  pictureElement.querySelector('.picture__comments').textContent = data.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = data.likes;

  pictureElement.addEventListener('click', () => {
    showFullPhoto(data);
  });

  fragment.append(pictureElement);
});

pictures.append(fragment);
