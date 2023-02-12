const merging = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }

  return result;
};

const dividing = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  const midle = Math.floor(arr.length / 2);
  const left = arr.slice(0, midle);
  const right = arr.slice(midle, arr.length);
  return merging(dividing(left), dividing(right));
};

let someArr = [6, 1, 8, 5, 2, 4, 7, 3];
dividing(someArr);
