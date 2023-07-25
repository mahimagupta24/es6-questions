// Write an ES6 function that takes an array of objects and a property name and returns a new array with only the values of that property. Avoid using in-built methods.

const getValues = (array, property) => {
  let array2 = [];
  for (let i = 0; i < array.length; i++) {
     array2.push(array[i][property]);
    //  array2 = [...array2,array[i][property]]
  }
   return array2;
};



console.log(
  getValues(
    [
      { name: "John", age: 21 },
      { name: "Mary", age: 22 },
      { name: "Peter", age: 23 },
    ],
    "name"
  )
); // ["John", "Mary", "Peter"]
