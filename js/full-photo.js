const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = bigPicture.querySelector('.big-picture__img').querySelector('img');
const commentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const commentList = document.querySelector('.social__comments');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const COMMENTS_PER_PORTION = 5;
let commentShow = 0;
let comments = [];

const createComment = ({avatar, name, message}) => {
  const commentItem = document.createElement('li');
  commentItem.innerHTML = '<img class="social__picture" src="" alt="" width="35" height="35"><p class="social__text"></p>';
  commentItem.classList.add('social__comment');

  commentItem.querySelector('.social__picture').src = avatar;
  commentItem.querySelector('.social__picture').alt = name;
  commentItem.querySelector('.social__text').textContent = message;
  return commentItem;
};

const renderComments = () => {
  commentShow += COMMENTS_PER_PORTION;

  if (commentShow >= comments.length) {
    commentsLoader.classList.add('hidden');
    commentShow = comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < commentShow; i++) {
    const commentElement = createComment(comments[i]);
    fragment.append(commentElement);
  }

  commentList.innerHTML = '';
  commentList.append(fragment);
  commentCount.innerHTML = `${commentShow} из <span class="comments-count">${comments.length}</span> комментариев`;
};

const hideBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  commentShow = 0;
};

function onEscKeyDown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    hideBigPicture();
  }
}

const onCancelButtonClick = () => {
  hideBigPicture();
};

const onCommentsLoaderClick = () => {
  renderComments();
};

const renderPictureDetails = (picture) => {
  bigPictureImg.src = picture.url;
  bigPicture.querySelector('.likes-count').textContent = picture.likes;
  bigPictureImg.alt = picture.description;
  bigPicture.querySelector('.social__caption').textContent = picture.description;
};

const showFullPhoto = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  document.addEventListener('keydown', onEscKeyDown);


  renderPictureDetails(data);
  comments = data.comments;
  if (comments.length > 0) {
    renderComments();
  }
};

closeButton.addEventListener('click', onCancelButtonClick);
commentsLoader.addEventListener('click', onCommentsLoaderClick);

export {showFullPhoto};
