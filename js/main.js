const getNumber = (high, ...low) => {
    let max = high;
    let min;
  
    if (isNaN(high)) {
      return console.log('Первый параметр должен быть число');
    }
  
    if (low.length) {
      if (high > low[0]) {
        min = low[0];
      } else {
        min = high;
        max = low[0];
      }
    } else {
      min = 0;
    }
  
    if (max < 0 || min < 0) {
      return console.log('Диапазон должен быть положительным');
    }
    return console.log(Math.ceil(Math.random() * (max - min + 1) + min - 1));
  };
  
  const getLengthLine = (line, length) => {
    if (line.length <= length) {
      return console.log(true);
    }
    return console.log(false);
  };
  