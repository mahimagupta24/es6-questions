//Create an object book with properties title, author, and pages. Create a function getBookDetails that takes a book object as a parameter and returns if the book has more than 100 pages

const book = {title:"Power of subconscious mind",author:"Joseph Murphy",pages:120}
const getBookDetails = book =>book.pages





console.log(getBookDetails(book)) // logs 'true' if the pages are above 100
console.log(getBookDetails(book)) // logs 'false' if the pages are 100 or below