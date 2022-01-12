const ex1 = (array, k) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === k) return true;
    }
  }
  return false;
};

const ex2 = (array) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    let view = true;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] > array[i]) view = false;
    }
    if (view) result++;
  }
  return result;
};

const ex3 = (array, k, i = 0) => {
  const arr = [...array]
    .sort()
    .reverse();

  if (arr.length <= 1) return false;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === k) return true;
  }

  return ex3(arr.slice(1), k, i + 1);
};

const ex5 = (array, k) => array.filter(e => array.includes(k - e)).length > 1;

module.exports = { ex1, ex2, ex3, ex5 };
