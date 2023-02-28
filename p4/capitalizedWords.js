// Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

const capitalizeWords = (array) => {
    let array2 =[]
   for (let arr of array){
   array2.push(arr.toUpperCase())
   }
   return array2
}
//or
// const capitalizeWords = (array) => {
//     let array2 =[];
//     for(let i=0;i<array.length;i++){
//         let capitalizeWord = "";
//         let word = array[i];
//         for(let j =0;j<word.length;j++){
//             let charCode =word.charCodeAt(j)
//             if(charCode >=97 &&charCode<=122){
//                 capitalizeWord = capitalizeWord +String.fromCharCode(charCode-32)
//             }else{
//                 capitalizeWord = capitalizeWord + word[j]
//             }
//         }
//         array2.push(capitalizeWord)
//     }
//     return array2;
// }

  
 console.log(capitalizeWords(["EAT", "sleep", "code", "repeat"]));



