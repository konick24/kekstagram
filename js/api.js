const getData = async (onSuccess, onFail) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      onFail('Не удалось загрузить фотографии');
    });
};

const sendData = () => {

};

export {getData, sendData};
