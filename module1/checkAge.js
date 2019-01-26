function checkAge(name, age) {
  if(age < 21) {
    return (`Go home, ${name}!`);
  }else if (age >= 21){
    return(`Welcome, ${name}!`);
  }
}

let output = checkAge('Adrian', 22);
console.log(output); // --> 'Welcome, Adrian!'