/**
 * Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Clarification:

Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means a modification to the input array will be known to the caller as well.

Internally you can think of this:

// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}
 */

 /**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let currentNum; 
  let uniqueNums = []; 
  for (let i=0; i<nums.length; i++) {
      if (nums[i] !== currentNum) {
          currentNum = nums[i];
          uniqueNums.push(nums[i])
      } else {
          currentNum = nums[i]
      }
  }

  return uniqueNums.length
};

// This answer wouldn't pass the tests
// Solution:

/**
 * Approach 1: Two Pointers
Algorithm

Since the array is already sorted, we can keep two pointers ii and jj, where ii is the slow-runner while jj is the fast-runner. As long as nums[i]=nums[j], we increment jj to skip the duplicate.

When we encounter nums[j] !== nums[i] the duplicate run has ended so we must copy its value to nums[i + 1]nums[i+1]. ii is then incremented and we repeat the same process again until jj reaches the end of array.
 */

function removeDuplicates2(nums) {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
      if (nums[j] != nums[i]) {
          i++;
          nums[i] = nums[j];
      }
  }
  return i + 1;
}