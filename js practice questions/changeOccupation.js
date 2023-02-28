//Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

const person = { name: "abc", age: 25, occupation: "software manager" };

const changeOccupation = (personObj, newOccupation) =>
  (personObj.occupation = newOccupation);

console.log(person);

changeOccupation(person, "product manager");

console.log(person);

