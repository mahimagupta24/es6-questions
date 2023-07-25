//write an ES6 function that takes an array of numbers and converts even numbers to odd numbers by adding 1 to that number.

const convertEvenToOdd = (array) =>{
    let array2 = []
    for(let i =0;i< array.length;i++){
        if(array[i]%2 ===0 ){
            array2.push(array[i]+1)
        }else{
            array2.push(array[i])
        }
    }
    return array2
}

    


var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numArr)
console.log(convertEvenToOdd(numArr));
// [1, 3, 3, 5, 5, 7, 7, 9, 9]