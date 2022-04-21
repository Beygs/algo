const { mergeSort, isSorted } = require("../merge_sort");

const randomArray = () => {
  const array = [];

  for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 2000 - 1000));
  }

  return array;
};

const randomArrays = () => {
  const arrays = [];

  for (let i = 0; i < 100; i++) {
    arrays.push(randomArray());
  }

  return arrays;
};

const arrays = [
  {
    notSorted: [48, -2, 6, 12, 0, -4],
    sorted: [-4, -2, 0, 6, 12, 48],
  },
  {
    notSorted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    sorted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    alreadySorted: true,
  },
  {
    notSorted: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    sorted: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
  {
    notSorted: [2, 1, 2, 3],
    sorted: [1, 2, 2, 3],
  },
  {
    notSorted: [0],
    sorted: [0],
    alreadySorted: true,
  },
  {
    notSorted: [2, 1],
    sorted: [1, 2],
  },
];

describe("isSorted", () => {
  it("should return true if an array is sorted", () => {
    arrays.forEach((array) => {
      expect(isSorted(array.sorted)).toBe(true);
    });
  });

  it("should return false if an array is not sorted", () => {
    arrays.forEach((array) => {
      if (!array.alreadySorted) expect(isSorted(array.notSorted)).toBe(false);
    });
  });
});

describe("mergeSort algorithm", () => {
  it("should sort an array of integers", () => {
    arrays.forEach((array) => {
      expect(mergeSort(array.notSorted)).toEqual(array.sorted);
    });
  });
  it("should sort random arrays", () => {
    randomArrays().forEach((array) => {
      expect(isSorted(mergeSort(array))).toBe(true);
    });
  });
});
