//Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.


const checkForAlphabetA = word => word.includes('a')|| word.includes('A') ? "Includes a" : "Does not include a"
console.log(checkForAlphabetA("Tanay"))  
console.log(checkForAlphabetA("Jane"))
console.log(checkForAlphabetA("Jeep"))
console.log(checkForAlphabetA("Ahir")) 