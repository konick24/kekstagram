import './get-picture.js';
import './render-picture.js';
import './full-photo.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showAlert } from './util.js';
import { getData, sendData } from './api.js';
import { renderPicture } from './render-picture.js';
import { showSuccessMessage, showErrorMessage } from './message.js';

const onSendDataSuccess = () => {
  hideModal();
  showSuccessMessage();
};

const onSendDataError = () => {
  showErrorMessage();
};

setOnFormSubmit(async (data) => {
  await sendData(onSendDataSuccess, onSendDataError, data);
});

getData(renderPicture, showAlert);
