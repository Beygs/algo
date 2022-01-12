const isSorted = (array) => {
  if (array.length === 0 || array.length === 1) return true;
  if (array[0] <= array[1]) return isSorted([...array].splice(1));
  return false;
};

const bubbleSort = (array) => {
  let memory;
  let arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      memory = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = memory;
    }
  }
  return memory === undefined ? arr : bubbleSort(arr);
};

const insertionSort = (array, i = 0) => {
  let arr = [...array],
    current = arr[i];
  for (let j = i; j >= 0; j--) {
    if (arr[j] > current) {
      arr[j + 1] = arr[j];
      arr[j] = current;
    }
  }
  return i === arr.length - 1 ? arr : insertionSort(arr, i + 1);
};

const selectionSort = (array, i = 0) => {
  let arr = [...array],
    minVal = arr[i],
    minId = i;
  for (let j = i; j < arr.length; j++) {
    if (arr[j] < minVal) (minId = j), (minVal = arr[j]);
  }
  arr[minId] = arr[i];
  arr[i] = minVal;

  return i === arr.length - 1 ? arr : selectionSort(arr, i + 1);
};

const partition = (arr, start, end) => {
  let pivot = arr[end],
    i = start - 1;
  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      let c = arr[i];
      arr[i] = arr[j];
      arr[j] = c;
    }
  }
  arr[end] = arr[i + 1];
  arr[i + 1] = pivot;
  return i + 1;
};

const quickSort = (array, start = 0, end = array.length - 1) => {
  let arr = [...array];
  if (start >= end) return arr;
  const p = partition(arr, start, end);
  arr = quickSort(arr, start, p - 1);
  arr = quickSort(arr, p + 1, end);
  return arr;
};

const merge = (arr1, arr2) => {
  const arr = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] > arr2[0]) {
      arr.push(arr2.splice(0, 1)[0]);
    } else {
      arr.push(arr1.splice(0, 1)[0]);
    }
  }

  while (arr1.length > 0) arr.push(arr1.splice(0, 1)[0]);
  while (arr2.length > 0) arr.push(arr2.splice(0, 1)[0]);
  
  return(arr);
}

const mergeSort = (array) => {
  let arr = [...array];
  if(arr.length === 1) return arr;
  const arr1 = mergeSort(arr.slice(0, arr.length / 2));
  const arr2 = mergeSort(arr.slice(arr.length / 2));
  return merge(arr1, arr2);
};

const main = () => {
  const fs = require('fs');
  const fileName = process.argv[2];
  
  try {
    if (fileName === undefined) throw new Error('Veuillez renseigner un nom de fichier.')
    const data = fs.readFileSync(fileName, 'utf8').split(' ').map(e => Number(e));
    console.log("mergeSort : " + mergeSort(data));
  } catch (error) {
    console.error(error.message);
  }
}

main();

module.exports = {
  isSorted,
  bubbleSort,
  insertionSort,
  selectionSort,
  quickSort,
  mergeSort,
};
