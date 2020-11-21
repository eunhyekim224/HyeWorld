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
  let length = nums.length;
  for (let i = 0; i < length; i++) {
    if (numberEqualsVal(nums[i], val)) {
      nums = shiftElementsToLeft(i, nums, length)
      length--;
    }
  }

  return length;
};

function numberEqualsVal(num, val) {
  if (num === val) {
    return true;
  } else {
    return false;
  }
}

function shiftElementsToLeft(i, nums, length) {
  for (let j = i + 1; j < length; j++) {
    nums[j - 1] = nums[j];
  }
  console.log("nums", nums);
  return nums;
}

console.log(removeElement([3, 2, 2, 3], 3));

/**
 * Go through each element in nums
 * If the element equals val,
 * Remove the element by shifting the following elements to the left
 * Decrease the length of the array nums to change the length
 * return the new length
 */
