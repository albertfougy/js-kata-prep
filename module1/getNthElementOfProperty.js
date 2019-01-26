function getNthElementOfProperty(obj, key, n) {
    if((typeof obj[key] !== 'undefined') && (typeof obj[key][n] !=='undefined') && Array.isArray(obj[key]) & obj[key].length > 0 ) {
      return obj[key][n];
    }
}


var obj = {
    key: [1, 2, 6]
};

var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2