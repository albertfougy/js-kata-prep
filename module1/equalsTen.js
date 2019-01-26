const equalsTen =  num => (typeof num !== 'number' && num !== 10)? false : true;

var output = equalsTen(9);
console.log(output); // --> false