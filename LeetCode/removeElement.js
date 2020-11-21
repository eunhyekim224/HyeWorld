/**
 * 
 * Given an array nums and a value val, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.
 */
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val)  {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};


/**
 * Go through each element in nums
 * If the element equals val,
 * Remove the element by shifting the following elements to the left
 * Decrease the length of the array nums to change the length
 * return the new length
 */
