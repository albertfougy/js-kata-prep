const addToFront = (arr, element) => arr.unshift(element) ? arr : null;

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]