// Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

const pickFirstAndSecond = ([firstEl, secondEl, ...rest]) => ({
  first: firstEl,
  second: secondEl,
});


console.log(pickFirstAndSecond(["orange", "banana", "apple"]));
console.log(pickFirstAndSecond(["orange", "banana", "apple","peach","fig"]));

console.log(pickFirstAndSecond(["red", "blue", "green"]));
console.log(pickFirstAndSecond(["red", "blue", "green"]));


