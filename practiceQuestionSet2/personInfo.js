// Write a function that takes an object representing a person's information (name, age, occupation) and returns a template literal that includes the person's name and age in a sentence.

const personInfo =(person)=>`${person.name} is ${person.age} years old`




const person1 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }
console.log(personInfo(person1))
console.log(personInfo(person2)) 