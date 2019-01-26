function getOddLengthWordsAtProperty(obj, key) {
    let arr = [];
    if(!Array.isArray(obj[key])){
      return [];
    }else if((typeof obj[key].length !=='undefined') && obj[key].length > 0){
      for(let elem in obj[key]){
        if(obj[key][elem].length % 2 !== 0){
          arr.push(obj[key][elem]);
        }
      }
    }
    return arr;
  }

let obj = {
    key: ['It', 'has', 'some', 'words']
};

let output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']
