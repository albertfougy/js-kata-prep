const getAllWords = str => !str ? [] : str.split(' ');

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']