// function getLargestNumberAmongMixedElements(arr) { 
//   let largest = 0;
//   if (arr.length > 0) {
//     arr.forEach(function (each){
//       if (typeof each === 'number') {
//         if (largest) {
//           if (each > largest) largest = each;
//         } else {
//           largest = each;
//         }
//       }
//     });
//   }
//   return largest;
// }


const getLargestNumberAmongMixedElements = arr => {
  let largest = 0;

  for (let num of arr) {
    if(( typeof num === 'number') && (largest === 0 || num > largest)){
      largest = num;
    }
  }
  return largest;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5