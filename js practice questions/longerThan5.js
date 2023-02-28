// Write a function that takes a string as input and determines if it is longer than 5 characters.

const checkLength = (word) =>
  word.length > 5 ? "more than 5 characters" : "less than 5 characters";
console.log(checkLength("Programming"));
console.log(checkLength("Jeep"));
