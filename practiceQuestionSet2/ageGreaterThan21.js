//Write a function that takes an object person and a number num as arguments and returns true if the person's age plus num is greater than or equal to 21. Otherwise, it should return false.

const person1 = { name: "Ajay", age: 20 };
const isEligible = (person, num) => person.age + num >= 22;
console.log(isEligible(person1, 1)); 
console.log(isEligible(person1, 2));
