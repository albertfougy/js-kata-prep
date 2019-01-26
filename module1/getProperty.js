function getProperty(obj, key) {
  if (obj) return obj[key];
  return null;
}

// arrow function version
// const getProperty = (obj, key) => obj? obj[key]:null;

const obj = {
  key: 'value'
};

let output = getProperty(obj, 'key');
console.log(output); // --> 'value'

//  Write a function called "getProperty".

// Given an object and a key, "getProperty" returns the value of the property at the given key. 
// Notes:* If there is no property at the given key, it should return undefined.