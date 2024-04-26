const DESCRIPTIONS = [
  'Вот это закат!!!',
  'Это было не забываемо!!!',
  'Люблю Весну в началу мая!',
  'Я звезда!',
]

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо.',
  'Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!'
]

const NAMES = [
  'Артём',
  'Олег',
  'Иван',
  'Анна',
  'Полина',
  'Анастасия',
  'София',
  'Софья',
]

const getRandomNumber = (a, b) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};
  
const getLengthLine = (line, length) => {
  return line.length <= length;
}

const getRandomArrayElement = (array) => {
  return array[getRandomNumber(0, array.length - 1)];
}

const createMessage = () => {
  return Array.from({length: getRandomNumber(1, 2)}, () => getRandomArrayElement(COMMENTS)).join(' ');
}

const createComment = (index) => {
  return {
    id: index,
    avatar: 'img/avatar-' + index + '.svg',
    message: createMessage(),
    name: getRandomArrayElement(NAMES)
  };
}

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
  //создать массив из 25 объектов
  //вернуть массив
  return Array.from({length: 25}, (_, pictureIndex) => createPicture(pictureIndex + 1));
}
