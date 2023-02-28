// Write an ES6 function that takes an array of objects and returns the sum of all ages.

const sumOfAges = (array) => {
  let sum = 0;
  for (let arr of array) {
    sum += arr.age;
  }
  return sum;
};

var array = [
  {
    name: "Jay",
    age: 60,
  },
  {
    name: "Gloria",
    age: 36,
  },
  {
    name: "Manny",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];

console.log(sumOfAges(array)); // 121
