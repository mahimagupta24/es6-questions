// Write an ES6 function combineObjects with least amount of characters which merges two objects into one.

const combineObjects = (object1,object2)=>({object1,...object2})
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const combinedObj = combineObjects(obj1, obj2);
console.log(combinedObj);
// Expected Output: {a: 1, b: 2, c: 3, d: 4}