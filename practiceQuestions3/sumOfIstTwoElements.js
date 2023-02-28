// Write an ES6 function to return the sum of only first 2 elements of the array

const sumFirstTwoElements = (array) => {
  let sum = array[0] + array[1];
  return sum;
};

console.log(sumFirstTwoElements([10, 4, 3, 7, 1, 5])); 
console.log(sumFirstTwoElements([12, 14, 3, 27, 15]));
