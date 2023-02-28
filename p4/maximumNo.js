// Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

const getMaxElement = (array) => {
    let max = 0;
    for (let integer of array) {
      if (integer > max) {
        max = integer;
      }
    }
    return max;
  };
  
  let array = [4, 78, 8, 3, 6, 0, 12, 34];
  console.log(getMaxElement(array)); // 78
  