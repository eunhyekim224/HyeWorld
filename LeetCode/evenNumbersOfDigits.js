//Given an array nums of integers, return how many of them contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenDigitNumberCount = 0;
    
    for (let i=0; i<nums.length; i++) {
      if (numberIsEven(nums[i])) {
        evenDigitNumberCount++
      }
    }
    return evenDigitNumberCount;
};

function numberIsEven(num) {
  let numberOfDigits = 1;
  while (num >= 10) {
    num = num / 10;
    numberOfDigits++
  }
  if (numberOfDigits % 2 === 0) {
    return true;
  } else {
    return false; 
  }
}

/**
 * 1)
 * For each element in nums, 
 * Find the length
 * If the length is even, 
 * Increase the count of even digit numbers 
 * return count
 */

 /**
  * 2)
  * For each element in nums,
  * Find the number of digits by dividing the number by 10 until you get a remainder
  * Record the number of times a number is divisible by 10 
  * Check if that number is even 
  * If even, increase the count 
  * Return count 
  */

let nums = [12,345,2,6,7896];
console.log(findNumbers(nums));
