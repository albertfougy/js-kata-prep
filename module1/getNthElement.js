const getNthElement = (array, n) => array.length < 0 ? null : array[n]; 

let output = getNthElement([1, 3, 5], 1);
console.log(output); // --> 3