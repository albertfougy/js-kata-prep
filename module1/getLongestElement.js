function getLongestElement(arr) {
  let longest = arr[0];
  
  if ( arr.length < 1 ){
    return '';
  }
  for ( var i = 0; i < arr.length; i++ ) {
    if ( arr[i].length > longest.length ) {
      longest = arr[i];
    }
  }
  return longest;
}


let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'