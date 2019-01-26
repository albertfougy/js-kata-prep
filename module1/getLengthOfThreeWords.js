const  getLengthOfThreeWords = (word1, word2, word3) => word1.length + word2.length + word3.length;

let output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14