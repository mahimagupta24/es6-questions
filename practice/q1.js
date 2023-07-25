//  Write a function that takes an array and returns a new array having even numbers multiplied by 20 and odd numbers multiplied by 30.

const evenOdd = (array) => array.map(checkEvenOrOdd);

const checkEvenOrOdd = (num) => {
 return num % 2 === 0 ?  num * 20:  num * 30;
};
console.log(evenOdd([2, 3, 4, 5]));
