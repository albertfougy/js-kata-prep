function getLargestElement(arr) {
  if(arr){
   return arr.reduce((a,b) => Math.max(a,b),0);
  }

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
