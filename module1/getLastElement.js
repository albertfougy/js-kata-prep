const getLastElement = array => array.length === 0 ? null : array[array.length - 1]; 

let output = getLastElement([1, 2, 3, 4]);
console.log(output); // --> 4