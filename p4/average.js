//Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

const calculateAverage = (arr) => {
    let average = 0;
    for(let i =0;i <arr.length;i++){
        average = Math.trunc(average+i)/2
    }
    return average
}

console.log(calculateAverage([1, 2, 3, 4, 5]));
