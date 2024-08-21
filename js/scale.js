const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');
const fieldValue = document.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview img');

const SCALE_MIN = 25;
const SCALE_STEP = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;

const scaleImg = (value = SCALE_DEFAULT) => {
  img.style.transform = `scale(${value / 100})`;
  fieldValue.value = `${value}%`;
};

const onButtonSmallerClick = () => {
  const currentValue = parseInt(fieldValue.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if (newValue < SCALE_MIN) {
    newValue = SCALE_MIN;
  }
  scaleImg(newValue);
};

const onButtonBiggerClick = () => {
  const currentValue = parseInt(fieldValue.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if (newValue > SCALE_MAX) {
    newValue = SCALE_MAX;
  }
  scaleImg(newValue);
};

const resetScale = () => {
  scaleImg();
};

buttonSmaller.addEventListener('click', onButtonSmallerClick);
buttonBigger.addEventListener('click', onButtonBiggerClick);

export {resetScale};
