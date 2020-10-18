/**
 * A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
 */

 
function solution(N) {
  let binaryN = N.toString(2);
  let zeroCount = -1;
  let max = 0;
  for (let i = 0; i < binaryN.length; i++) {
    if (binaryN[i] === '1') {
      if (zeroCount > max) {
        max = zeroCount;
      }
      zeroCount = 0;
    } else if (zeroCount >= 0) {
      zeroCount++;
    }
  }
  return max;
}



function solution2(N) {
var number = N;
  var binary = "";
  var counter = -1;
  var max = 0;
  while (number > 0) {
    var digit = number % 2;

    if (digit === 1) {
      if (counter > max) {
        max = counter;
      }
      counter = 0;
    } else if (counter >= 0) {
      counter++;
    }

    binary = "" + digit + binary;
    number = parseInt(number / 2);
  }
  return max;
}

console.log(solution(92312));
console.log(solution2(92312));

/**
 * 1) get the binary format of N
 * 2) turn string into an array
 * 3) iterate through the string 
 *  
 * check if the item = 1,
 * if 1 is found, look for 0
 * for every 0 found, increase zeroCount
 * 
 * look for 1s 
 * if 1 is found, 
 * if i == last index, then stop the loop, return zeroCount as the answer 
 * if i !== last index, then add the current zeroCount to an array of zeroCounts, and then set zeroCount = 0 and add if zero is found
 *    repeat this process until array[i] === 1 and i === array.length - 1
 * 
 10001
 101001
 */

/**
 * another way
 * get rid of all the zeros on the start and end
 * check if string starts and ends with 1
 * if yes, then split(1) and count the longest string
 */

//ATTEMPTS

// let zeroCount = 0;
// let startIndex;
// let endIndex;
// let binGap = [];
// for (let i = 0; i < binaryN.length; i++) {

//   if (binaryN[i] === 1 ) {

//   }
// }

// const binaryGaps = binaryN.split(1);
// console.log(binaryGaps);

// let newBinaryN = binaryN.replace(/^\0+|\0+$/g, '')
// console.log('new binary', newBinaryN)

// if (newBinaryN.length === 0) {
//   return 0;
// } else {
//   let gaps = binaryN.split(1);
//   console.log(gaps)
//   let longestGap = 0;
//   for (let i = 0; i < gaps.length; i++) {
//     if (gaps[i].length > longestGap) {
//       longestGap = gaps[i].length;
//     }
//   }
//   console.log(longestGap);
//   return longestGap;
// }
