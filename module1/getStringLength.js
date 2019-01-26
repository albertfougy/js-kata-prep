function getStringLength(string) {
  let i = 0;
  while(true){
    if(string[i]){
    i++;
    }else{
      break;
    }
  }
  return i;
}

let output = getStringLength('hello');
console.log(output); // --> 5
