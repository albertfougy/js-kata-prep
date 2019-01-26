function findShortestElement(arr) {
  let shortest = '';
  if (arr.length > 0) {
    shortest = arr[0];
    arr.forEach(function (each){
        if (each.length < shortest.length) shortest = each;
    });
  }
  return shortest;
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
