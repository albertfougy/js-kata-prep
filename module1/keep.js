function keep(array, keeper) {
  let filteredAry = array.filter(function(e) { return e === keeper });
  return filteredAry;
}

let output = keep([1, 2, 3, 2, 1], 2);
console.log(output); //--> [2, 2]