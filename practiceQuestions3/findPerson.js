// Write a function findPerson that takes an array of person objects and a name as parameters and returns the object with the matching name, or null if not found.

// const findPerson = (persons, name) => {
//   for (let i = 0; i < persons.length; i++) {
//     if (persons[i].name === name) {
//       return persons[i];
//     }
//   }
//   return null;
// };

// or
const findPerson = (persons, name) => {
  for (let person of persons) {
    if(person.name===name){
       return person
    }
   }
   return null
};

console.log(
  findPerson(
    [
      { name: "Amay", age: 25 },
      { name: "Akhil", age: 25 },
    ],
    "Akhil"
  )
);
