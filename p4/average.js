//Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

const calculateAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

// const getLength = arr => {
//     let count=0;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i])
//             count++;
//     }   
//     return count;

// }
// const calculateAverage = (array) => {
//     if(array === undefined || array.length === 0) return 0;

//     let validLength= getLength(array);

//     let total = 0
//     for(let i in array){
//         if(array[i])
//           total += array[i] //total = total + array[i]
//     }
//     return total/validLength;
// }
// console.log(calculateAverage([undefined,4,5,6,undefined,6,null,7,"",undefined]))    

console.log(calculateAverage([1, 2, 3, 4, 5]));
