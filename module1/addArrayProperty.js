const addArrayProperty = (obj, key, arr) => obj[key] = arr;

const myObj = {};
let myArray = [1, 3];

addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]