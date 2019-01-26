function addFullNameProperty(obj) {
  
 obj.fullName = `${obj.firstName} ${obj.lastName}`;
 return obj.fullName;
  
}


const person = {
  firstName: 'Jade',
  lastName: 'Smith',
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'