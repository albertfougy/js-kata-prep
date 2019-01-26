function filterOddElements(arr) {
  var filteredAry = arr.filter(function(o) { return o % 2 !== 0; });
  return filteredAry;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
