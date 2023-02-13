let array = [5, 7, 3, 9, 2, 1];

function Sort(array) {
  for (let j = 0; j < array.length; j++) {
    let max = array[0];
    let index = 0;
    for (let i = 0; i < array.length - j; i++) {
      if (array[i] > max) {
        max = array[i];
        index = i;
      }
    }

    let buff = array[array.length - 1 - j];
    array[array.length - 1 - j] = max;
    array[index] = buff;
  }

  return array;
}

Sort(array);
