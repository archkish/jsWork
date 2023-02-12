let arr2 = [2, 1, 4, 8, 3];
function findMax(arr, start) {
  let maxValue = arr[start];
  let maxIndex = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}

selectionSort(arr2);

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = findMax(arr, i);
    let tmp = arr[arr.length - 1];
    arr[arr.length - 1] = arr[index];
    arr[index] = tmp;
  }

  return arr;
}

selectionSort(arr2);
