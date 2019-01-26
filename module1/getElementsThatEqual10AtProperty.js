function getElementsThatEqual10AtProperty(obj, key) {
  let arr = [];
  for(var elem in obj[key]){
    if (obj[key][elem] === 10) {
      arr.push(obj[key][elem]);
    }
  }
  return arr;
}

let obj = {
  key: [1000, 10, 50, 10]
};

let output = getElementsThatEqual10AtProperty(obj, 'key');

console.log(output); // --> [10, 10]