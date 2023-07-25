// sum of even no. using reduce.

const array = [1,2,3,4,5,6,7,8];

const sumOfEvenNo = (acc,curr)=>
    curr%2===0 ? acc + curr : acc
console.log(array.reduce((sumOfEvenNo),0))
