// 3. Write a function that takes an array and returns a new array having even indexes numbers subtracted by 2 and odd indexes numbers added by 3.

// const evenOdd = array =>{
//     let array2=[]
//     for(let i =0;i<array.length;i++){
//         if(i%2===0){
//             array[i]=array[i] -2
//         }
//         else{
//             array[i] = array[i]+3
//         }
//         array2.push(array[i])
//     }
//     return array2;
// }
const evenOdd = (array) =>
  array.map((num, i) => {
    if (i % 2 === 0) {
       return num - 2;
    } else {
      return num + 3;
    }
  });

console.log(evenOdd([2, 3, 4, 8, 19]))
;
