// const sumArrays = (array1, array2) => {
//     let newArray = [];

//     const max = array1.length > array2.length ? array1.length : array2.length;

//     for (let i = 0; i < max; i++) {
//       newArray[i] = array1[i] + array2[i];
//     }
//     return newArray;
//   };
// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   resolve("res 1");
// });

// const promise2 = promise.then((res) =>{
//   console.log(res)
  
// });

// console.log(promise);
// console.log("2", promise2);

console.log('a')
async function a(){
return 'b';
}
 async function d(){
  const e= await a();
   console.log('e',e);
    return 'g'
}
console.log(await d());
console.log('c');