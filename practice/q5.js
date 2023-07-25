//1. Write a function that takes an array and returns all the numbers in a new array increased by 10.

const numbers = [1, 2, 4, 5, 6, 7];
const newNum = (num) => num + 10;

const array = (number) => {
  let array2 = [];
  for (let i = 0; i < number.length; i++) {
     array2[i] = newNum(number[i]);
    // array2 = [...array2,newNum(number[i])]
  }
  return array2;
};
console.log(array(numbers));
