const getLengthOfTwoWords = (word1, word2) => word1 && word2 
                                              ? word1.length + word2.length
                                              : 0;

let output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9