//Create a function that takes an array of strings as an argument and returns a string that includes the number of items in the array and the first and last items.

const items = ["apple", "banana", "orange"];

const formatArray = (items) =>
  `The array has ${items.length} items, and the first item is "${
    items[0]
  } "and the last item is "${items[items.length - 1]}"`;

const message = formatArray(items);

console.log(message);
