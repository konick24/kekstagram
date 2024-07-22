import { getRandomNumber, getRandomArrayElement } from './util.js';
import { COMMENTS, NAMES } from './data.js';

const createMessage = () =>
  Array.from({length: getRandomNumber(1, 2)}, () => getRandomArrayElement(COMMENTS)).join(' ');

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

export {createComment};
