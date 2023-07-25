// array of strings and filter out palindrome
let array = ["apple", "lol", "racecar", "banana", "oko"];
// let string = "lol"

const findString = (string) => {
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }
  return true;
};

const palindrome = array => array.filter(findString)


// const palindrome = array => array.filter((string=>{
//     const reversed=string.split('').reverse().join('')
//    return reversed===string;
// }))
console.log(palindrome(array))
