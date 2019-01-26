// function countAllCharacters(str){
//   let dict = {};
//   if (str !=='undefined'){
//     let arr = str.slice();
//     for (let i = 0 ; i < arr.length; i++){
//         if(typeof dict[arr[i]] !== 'undefined') {
//           dict[arr[i]] +=1;
//         }else {
//           dict[arr[i]] = 1;
//         }
//     }
//   }
//   return dict;
// }


// function countAllCharacters(str){
//   let charObj = {};
//   for( let i = 0 ; i < str.length ; i++){
//     if(charObj.hasOwnProperty(str[i])){
//       charObj[str[i]] ++;
//     } else {
//       charObj[str[i]] = 1;
//     }
//   }
//   return charObj;
// }

function countAllCharacters(str) {
  let charObj = {};
  for(let i = 0 ; i < str.length ; i++){
    charObj.hasOwnProperty(str[i]) ? charObj[str[i]]++ : charObj[str[i]] = 1;
  }
  return charObj;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}