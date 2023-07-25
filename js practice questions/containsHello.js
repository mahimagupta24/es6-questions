//Write a function that takes a string as input and determines if it contains the word "hello".

 const isHelloPresent = word =>
  word.includes("hello") || word.includes("Hello");
 console.log(isHelloPresent("Hello World"));
console.log(isHelloPresent("World"));

// function containsSubstring(string, substring) {
//   for (let i = 0; i <= string.length - substring.length; i++) {
//     let match = true;
//     for (let j = 0; j < substring.length; j++) {
//       if (string[i+j] !== substring[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) {
//       return true;
//     }
//   }
//   return false;
//}

const containsSubstring = phrase => {
  const phraseArray = phrase.split(" ");
  for (let word of phraseArray) {
    if (word.toLowerCase() === "hello") {
      return true;
    }
  }
  return false;
}

console.log(containsSubstring(" yes olz"))

// console.log(containsSubstring('hello world','hello'))
// console.log(containsSubstring('hello world','world'))
// console.log(containsSubstring('hello world','hi'))
