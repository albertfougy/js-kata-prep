// function sumDigits(num) {
//   let strnum = num.toString();
//   sum = 0;
//   var i = 0;
//   while (i < strnum.length) {
//     if (strnum[i] != '-') {
//       sum += parseInt(strnum[i]);
//       i++
//     } else {
//       sum -= parseInt(strnum[i+1]);
//       i+=2;
//     }
//   }
//   return sum;
// }


// function sumDigits(num) {
//   let total = 0;
//   let newString = num.toString().split('');
//   for (var i = 0; i < newString.length; i ++) {
//     if(newString[i]==='-') { //check to see if the first char is -
//       i++; //if it is, lets move to the negative number
//       let converted =  parseInt(newString[i]); // parse negative number
//       total -= converted; // subtract value from total
//       continue; // move to the next item in the loop
//     }
//     converted = parseInt(newString[i]);
//     total += converted;
//   }
//   return total;
// }

function sumDigits(num) {
  return String(num).match(/-?\d/g).map(Number).reduce( (a, b) => a+b );
}


var output = sumDigits(1148);
console.log(output); // --> 14

var output = sumDigits(-316);
console.log(output); // --> 4
