const getRandomNumber = (a, b) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const getLengthLine = (line, length) => line.length <= length;

const isEsc = (evt) => evt.key === 'Escape';


export {getRandomNumber, getLengthLine, getRandomArrayElement, isEsc};
