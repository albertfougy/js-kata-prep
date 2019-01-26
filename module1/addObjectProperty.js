function addObjectProperty(obj1, key, obj2) {
   obj1[key] = obj2;
   return obj1;
}


const person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
const person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }