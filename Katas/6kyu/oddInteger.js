/**
 * Given an array of integers, find the one that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */

//My solution (renamed variables after review)
function findOdd1(A) {
  const arrWithNumberAppearingOddNumberOfTimes = A.map((int) => {
    const appearances = A.filter((x) => {
      if (x === int) return true;
    });
    const appearsOddNumberOfTimes = appearances.length % 2 !== 0;
    if (appearsOddNumberOfTimes) return int;
  }); 
  const numberAppearingOddNumberOfTimes = arrWithNumberAppearingOddNumberOfTimes.filter((int) => {
    if (int) return int;
  });
  return numberAppearingOddNumberOfTimes[0];
}

console.log(findOdd1([1, 1, 2, 2, 3, 3, 3]));


//Too terse and cryptic for prod code 
function findOdd2(A) {
  return A.find((item) => A.filter(el => el == item).length % 2)
}

//Solution with a 'voice'
function findOdd3(arr) {
  return arr.find(occursOddNumberOfTimes);
}

function occursOddNumberOfTimes(item) {
  return isOdd(noOfOccurences(item));
}

function noOfOccurences(arr, item) {
  return arr.filter(el => el == item) {
  }
}

function isOdd(number) {
  number % 2 > 0
}


//Tips: 
//Solve using the problem domain -> how can I describe this problem using code?
//Don't think about solving the whole thing at once. Get from point A to point B
