import './get-picture.js';
import './render-picture.js';
import './full-photo.js';
import { setOnFormSubmit, hideModal } from './form.js';
import { showAlert } from './util.js';
import { getData, sendData } from './api.js';
import { renderPicture } from './render-picture.js';
import { showSuccessMessage, showErrorMessage } from './message.js';
import { turnFilterOn, setOnFilterClick, filterPictures } from './filter.js';

const onGetDataSuccess = (data) => {
  turnFilterOn(data);
  renderPicture(filterPictures());
  setOnFilterClick(renderPicture);
};

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

getData(onGetDataSuccess, showAlert);
