const isEvenLength = word => word.length % 2 === 0 ? true : false;

let output = isEvenLength('wow');
console.log(output); // --> false