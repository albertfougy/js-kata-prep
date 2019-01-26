const isPersonOldEnoughToDrink = person => person.age >= 21 ? true : false;

const obj = {
  age: 16
};
let output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false