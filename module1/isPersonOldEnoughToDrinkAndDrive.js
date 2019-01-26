const isPersonOldEnoughToDrinkAndDrive = person => person.age >= 21 ? false : 0 ;

const obj = {
  age: 45
};
let output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false

// Notes:* The legal drinking age in the United States is 21.* The legal driving age
// in the United States is 16.* It is ALWAYS ILLEGAL to drink and drive in the United States.