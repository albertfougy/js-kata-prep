function computeAverageOfNumbers(nums) {
  if(!nums.length) return 0;
  let sum = 0;
    for(let i in nums){
      sum +=  nums[i];
    }
  return sum/nums.length;
}

let input = [1,2,3,4,5];
let output = computeAverageOfNumbers(input);
console.log(output); // --> 3