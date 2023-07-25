// Write a function to return the last 5 characters as an array from the given array.

const printLastFive = (arr) => {
  let arr2 = [];
  for (let i = arr.length - 5; i < arr.length; i++) {
    arr2.push(arr[i]);
  }
  return arr2;
};

//or
// const printLastFive = (arr) => {
//   let arr2 =[];
//   let j = 0;
//   for(let i = arr.length - 5; i<arr.length;i++){
//     arr2[j] = arr[i];
//     j++;
//   }
//   return arr2;
//}
console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]));
