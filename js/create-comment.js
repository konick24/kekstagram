import { getRandomNumber, getRandomArrayElement } from "./util.js";
import { COMMENTS, NAMES } from "./data.js";

const createComment = (index) => {
    return {
      id: index,
      avatar: 'img/avatar-${getRandomNumber(1, 6)}.svg',
      message: createMessage(),
      name: getRandomArrayElement(NAMES)
    };
  }

const createMessage = () => {
    return Array.from({length: getRandomNumber(1, 2)}, () => getRandomArrayElement(COMMENTS)).join(' ');
}

  export {createComment};
