// Fonction récursive pour check si un array est trié (utilisé dans les tests)
const isSorted = (array) => {
  if (array.length === 0 || array.length === 1) return true;
  if (array[0] <= array[1]) return isSorted([...array].splice(1));
  return false;
};

// Variable pour compter les itérations de l'algo

let iterations = 0;

const merge = (arr1, arr2) => {
  const arr = [];

  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] > arr2[0]) {
      iterations++;
      arr.push(arr2.splice(0, 1)[0]);
    } else {
      iterations++;
      arr.push(arr1.splice(0, 1)[0]);
    }
  }

  return [...arr, ...arr1, ...arr2];
};

const mergeSort = (array) => {
  let arr = [...array];
  if (arr.length === 1) return arr;
  const arr1 = mergeSort(arr.slice(0, arr.length / 2));
  const arr2 = mergeSort(arr.slice(arr.length / 2));
  return merge(arr1, arr2);
};

const main = () => {
  const fs = require("fs");
  const fileName = process.argv[2];

  try {
    if (fileName === undefined) throw new Error("Pas de fichier renseigné !");
    const datas = fs.readFileSync(fileName, "utf8").split("\n");
    datas.forEach((data) => {
      iterations = 0;
      data = data.split(" ").map((e) => Number(e));
      console.log(
        `Before Merge Sort: ${data}\nAfter Merge Sort: ${mergeSort(
          data
        )}\nDone in ${iterations} steps.\n`
      );
    });
  } catch (error) {
    console.log(error.message);
  }
};

main();

module.exports = { isSorted, mergeSort };
