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

const ex3 = (array, k) => {
  const alreadySeen = {};

  for (const num of array) {
    const difference = (k - num).toString();

    if (alreadySeen[difference]) return true;
    alreadySeen[num.toString()] = true;
  }
  
  return false;
};

const ex4 = (array, i = array.length - 1) => {
  const arr = [...array];

  if (arr.filter((e, j) => e > arr[i] && j > i).length > 0) arr.splice(i, 1);
  if (i === 0) return arr.length;
  return ex4(arr, i - 1);
};

const ex5 = (array, k) => array.filter((e) => array.includes(k - e)).length > 1;

const ex6 = (array) => {
  let biggest = 0;
  return [...array].reverse().filter((a) => {
    if (a > biggest) {
      biggest = a;
      return true;
    }
  }).length;
};

module.exports = { ex1, ex2, ex3, ex4, ex5, ex6 };
