import './get-picture.js';
import './render-picture.js';
import './full-photo.js';
import './form.js';
import { showAlert } from './util.js';
import { getData } from './api.js';
import { renderPicture } from './render-picture.js';

getData(renderPicture, showAlert);
