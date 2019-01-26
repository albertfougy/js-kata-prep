function getEvenLengthWordsAtProperty(obj, key) {
    let arr = [];
    if((typeof obj[key] !== 'undefined') && Array.isArray(obj[key]) && obj[key].length > 0){
      for(let elem in obj[key]){
        if(obj[key][elem].length % 2 === 0){
          arr.push(obj[key][elem]);
        }
      }
    }
    return arr;
  }

let obj = {
    key: ['a', 'long', 'game']
  };
let output = getEvenLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['long', 'game']