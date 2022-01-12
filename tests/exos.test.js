const { ex1, ex2, ex3, ex4, ex5, ex6 } = require("../exos");

const s1TrueArgs = [
  {
    array: [1, 2, 3, 4, 5],
    k: 9,
  },
  {
    array: [0, 1],
    k: 1,
  },
  {
    array: [10, 15, 3, 7],
    k: 17,
  },
  {
    array: [-1, 7, 8, 5],
    k: 4,
  },
];

const s1FalseArgs = [
  {
    array: [1, 2, 3, 4],
    k: 10,
  },
  {
    array: [0, 1],
    k: 0,
  },
  {
    array: [1, 8, 10, 21],
    k: 19,
  },
  {
    array: [2, 3, 4],
    k: 4
  }
];

describe("Exercise 1", () => {
  it("should return true if the sum of two numbers in the array is equal to k", () => {
    s1TrueArgs.forEach((o) => {
      expect(ex1(o.array, o.k)).toBe(true);
    });
  });
  it("should return false if no sum of two numbers in the array is equal to k", () => {
    s1FalseArgs.forEach((o) => {
      expect(ex1(o.array, o.k)).toBe(false);
    });
  });
});

describe("Exercise 2", () => {
  it("should return the number of buildings with a west view", () => {
    expect(ex2([3, 7, 8, 3, 6, 1])).toBe(3);
    expect(ex2([1, 4, 5, 8])).toBe(1);
    expect(ex2([9, 8, 7, 6, 5, 4, 3, 2])).toBe(8);
    expect(ex2([9, 8, 7, 6, 5, 4, 3, 10])).toBe(1);
    expect(ex2([1])).toBe(1);
  });
});

describe("Exercise 3", () => {
  it("should return true if the sum of two numbers in the array is equal to k", () => {
    s1TrueArgs.forEach((o) => {
      expect(ex3(o.array, o.k)).toBe(true);
    });
  });
  it("should return false if no sum of two numbers in the array is equal to k", () => {
    s1FalseArgs.forEach((o) => {
      expect(ex3(o.array, o.k)).toBe(false);
    });
  });
});

describe("Exercise 4", () => {
  it("should return the number of buildings with a west view", () => {
    expect(ex4([3, 7, 8, 3, 6, 1])).toBe(3);
    expect(ex4([1, 4, 5, 8])).toBe(1);
    expect(ex4([9, 8, 7, 6, 5, 4, 3, 2])).toBe(8);
    expect(ex4([9, 8, 7, 6, 5, 4, 3, 10])).toBe(1);
    expect(ex4([1])).toBe(1);
  });
});

describe("Exercise 5", () => {
  it("should return true if the sum of two numbers in the array is equal to k", () => {
    s1TrueArgs.forEach((o) => {
      expect(ex5(o.array, o.k)).toBe(true);
    });
  });
  it("should return false if no sum of two numbers in the array is equal to k", () => {
    s1FalseArgs.forEach((o) => {
      expect(ex5(o.array, o.k)).toBe(false);
    });
  });
});

describe("Exercise 6", () => {
  it("should return the number of buildings with a west view", () => {
    expect(ex6([3, 7, 8, 3, 6, 1])).toBe(3);
    expect(ex6([1, 4, 5, 8])).toBe(1);
    expect(ex6([9, 8, 7, 6, 5, 4, 3, 2])).toBe(8);
    expect(ex6([9, 8, 7, 6, 5, 4, 3, 10])).toBe(1);
    expect(ex6([1])).toBe(1);
  });
});
