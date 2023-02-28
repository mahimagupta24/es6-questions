// Convert the function getData, into an ES6 function with last amount of characters.

const person = {
  name: "John Doe",
  address: {
    city: "New York",
    state: "NY",
  },
};

const {
  name,
  address : {city},
} = person;


const getData = ({name, address :{city}}) =>
   console.log(name);
console.log(city);

getData(person);
