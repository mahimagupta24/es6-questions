// write an ES6 function that takes an array of words and returns an array with all its elements whose length is greater than 5.

const filterWords = (words) => {
  let array = [];
  for (let i=0;i<words.length;i++) {
    if (words[i].length > 5) {
      //array.push(word);
      array[array.length] =words[i]
    }
  }
  return array;
};
// or
// const filterWords = (words) => {
//   let array2 = [];
//   for (let word of words) {
//     let count = 0;
//     for (let j in word) {
//       count++;
//     }
//     if (count > 5) {
//        array2.push(word);
    
//     }
//   }
//   return array2;
// };

var words = ["eat", "sleep", "code", "repeat", "neog", "community"];
console.log(filterWords(words));
