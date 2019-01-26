const findSmallestElement = arr => arr.length === 0 
                                   ? 0 
                                   : Math.min.apply(null, arr);


let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1