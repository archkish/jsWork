let arr = [2, 1, 4, 8, 3];

function findMaxValue(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("this is not array");
    return "this is not array";
  }

  if (!arr.length) {
    return "array is empty";
  }

  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > temp) {
      temp = arr[i];
    }
  }

  return temp;
}

findMaxValue(arr);
