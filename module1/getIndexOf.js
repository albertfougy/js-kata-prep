function getIndexOf(char, str) {
  let count = -1;
  let char_arr = str.split('');
  for (let i = 0; i < char_arr.length; i++) {
    if (char_arr[i] === char) {
      count = i;
      break;
    }
  }
  return count;
}

let output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2