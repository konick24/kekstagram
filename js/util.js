const ALERT_SHOW_TIME = 5000;

const getRandomNumber = (a, b) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const getLengthLine = (line, length) => line.length <= length;

const isEsc = (evt) => evt.key === 'Escape';

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomNumber,
  getLengthLine,
  getRandomArrayElement,
  isEsc,
  showAlert
};
