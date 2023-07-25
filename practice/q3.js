4;
// Write a program using destructing to find a number in this object which is divisible both by 3 and 5
const obj = {
  a: 10,
  b: 12,
  arr: [10, 8, 15, 14],
};
const checkFor3 = (num) => num % 3 === 0;

const checkFor5 = (num) => num % 5 === 0;

const arr = (obj) => {
  let objValue = Object.values(obj);

  let array = objValue.flat();

  let divisibleBy3 = array.filter(checkFor3);

  let divisibleBy5 = array.filter(checkFor5);

  return { divisibleBy3, divisibleBy5 };
};
// const newArr = array =>{
//     let divBy3 = [];
//         let divBy5 = [];
//     for(let i =0;i <array.length;i++){
//         if(array[i]%3===0){
// divBy3.push(array[i])
//         }
//         if(array[i]%5===0){
//             divBy5.push(array[i])
//         }
//     }
//     return {divBy3,divBy5}
// }

// console.log(newArr(array))

console.log(arr(obj));
