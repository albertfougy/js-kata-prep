const isPersonOldEnoughToVote = person => person.age >=18 ? true : false;

const obj = {
  age: 19,
};

let output = isPersonOldEnoughToVote(obj);
console.log(output); // --> truex