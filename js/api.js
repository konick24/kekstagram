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

const sendData = (onSuccess, onFail, body) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    }).catch((err) => {
      onFail(err.message);
    });
};

export {getData, sendData};
