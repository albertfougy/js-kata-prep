const isEitherEven = (num1, num2) => (num1 % 2 === 0 || num2 % 2 === 0 ) ? true : false;

let output = isEitherEven(1, 4);
console.log(output); // --> true