import {getRandomNumber, getRandomArrayElement} from './util.js'
import {createComment} from './create-comment.js';
import { DESCRIPTIONS } from './data.js';

const createPicture = (index) => {
  return {
    id: index,
    url: 'photos/' + index + '.jpg',
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(0, 6)}, (_, commentIndex) => {
      return createComment(commentIndex + 1);
    })
  };
}

const getPicture = () => {
  return Array.from({length: 25}, (_, pictureIndex) => createPicture(pictureIndex + 1));
}

export {getPicture};