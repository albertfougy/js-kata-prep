const getFirstElement = array => array.length === 0 ? null : array[0];

let output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1