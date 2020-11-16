//Given an array nums of integers, return how many of them contain an even number of digits.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let evenDigitNumberCount = 0;
    
    for (let i=0; i<nums.length; i++) {
      const numberIsEven = nums[i].toString().length % 2 === 0;
      if (numberIsEven) {
        evenDigitNumberCount++
      }
    }

    return evenDigitNumberCount;
};

/**
 * For each element in nums, 
 * Find the length
 * If the length is even, 
 * Increase the count of even digit numbers 
 * return count
 */


let nums = [12,345,2,6,7896];
console.log(findNumbers(nums));
