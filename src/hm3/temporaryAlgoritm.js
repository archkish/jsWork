let arr = [2, 1, 4, 8, 3];
function findMax(arr, end) {
  let maxValue = arr[0];
  let maxIndex = 0;
  for (let i = 0; i < end; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
  
}

function Sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = findMax(arr, arr.length - i);
    let tmp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i ] = arr[index];
    arr[index] = tmp;
  }

  return arr;
}

Sort(arr);


