/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let maxConsecutiveOnes = 0;
  let onesCount = 0;

  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 1) {
          onesCount++;
      } else {        
          if (onesCount > maxConsecutiveOnes) {
              maxConsecutiveOnes = onesCount;
          }
          onesCount = 0;
      }
  }
      
  if (onesCount > maxConsecutiveOnes) {
      maxConsecutiveOnes = onesCount;
  }
  
  return maxConsecutiveOnes;
};


//Main problem: termination
//Plan the solution before coding - things will get hidden 
//Solve in plain English 
//Make sure the solution works 
//Break down the problem to bits so you can cover everything 
//Think about the boundaries of the solution - start/end of array 
//Is the solution complete - does it cover everything 