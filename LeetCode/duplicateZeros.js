/**
 * Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.
 */

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let originalLength = arr.length;
  for (let i = 0; i < originalLength; i++) {
    if (arr[i] === 0) {
      arr = shiftItemsToRight(arr, i + 1, originalLength);
      if (i < originalLength - 1) {
        arr[i + 1] = 0;
      }
      i++;
    }
  }
};

function shiftItemsToRight(arr, index, originalLength) {
  for (let i = originalLength - 1; i >= index; i--) {
    if (i < originalLength - 1) {
      arr[i + 1] = arr[i];
    }
  }
  return arr;
}

/**
 * For each element in the array
 * Check if the value is 0
 * If the value = 0
 * Shift the next values one to the right
 *  For each element of the array until the index for the duplicate zero (i + 1)
 *  array[i + 1] = array[i]
 *  i--
 * Insert extra 0 to the index + 1
 * Skip next index (i++)
 */

const example = [1, 0, 2, 3, 0, 4, 5, 0];
console.log(duplicateZeros(example));
