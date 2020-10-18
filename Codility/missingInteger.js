/**
 * This is a demo task.

Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

//This is a failed solution
function solution(A) {
  let sortedA = A.sort((a, b) => a - b);
  let biggest = Math.max(...sortedA);

  let missingSmallestInt = 1000000;

  if (A.every((item) => item < 0)) {
    return 1;
  } else {
    let sortedPositiveA = sortedA.filter((item) => item > 0);
    console.log("positive", sortedPositiveA);

    for (let i = 0; i < sortedPositiveA.length; i++) {
      if (sortedPositiveA[i] + 1 === sortedPositiveA[i + 1]) {
        missingSmallestInt = biggest + 1;
      } else {
        //check if the number exists already

        let smallestInt = sortedPositiveA[i] + 1;
        console.log('smallestInt', smallestInt);
        console.log('missing ', missingSmallestInt)

        if (
          !A.includes(smallestInt) &&
          smallestInt < missingSmallestInt &&
          missingSmallestInt !== 0
        ) {
          missingSmallestInt = smallestInt;
        }
      }
    }
  }

  return missingSmallestInt;
}

console.log(solution([-3,-2,1,4]));

//Correct solution 
function solution(A) {
    
  var map = {};
  var min = 1;
  
  for(var i=0; i<A.length; i++) {
      if(A[i] > 0) {
//checking if the number is a positive number
          map[A[i]] = true;
//mark each number from the set as 'true' if it exists 
      }
  }
  
  if(!map[min]) return 1;
//if there is no '1' in the positive set, then the answer should be 1
  
  while(map[min]) min++;
//while the number exists in 'map', increase 'min' until it increases to a number that doesn't exist in 'A'
  
  return min;

}

/**
 * ATTEMPTS
 *
 * 1)
 *   let smallest = Math.min(...A);
  let biggest = Math.max(...A);

  let missingSmallestInt;

  if (smallest === biggest) {
    missingSmallestInt = biggest + 1;
  } else {
    
  }

  for (let i = 0; i < biggest; i++) {
    if (i > smallest) {
      missingSmallestInt = i;
    }
  }

  return missingSmallestInt;
 *


  2) works but doesn't account for negative integers - SMALLEST POSITIVE INTEGER!

  let sortedA = A.sort((a, b) => a - b);
  console.log(sortedA);
  let biggest = Math.max(...sortedA);

  let missingSmallestInt = 0

  for (let i = 0; i < sortedA.length; i++) {
    if (A[i] + 1 === A[i + 1]) {
      missingSmallestInt = biggest + 1;
    } else {
      //check if the number exists already

      let smallestInt = A[i] + 1;
      console.log(smallestInt)
      console.log('missing', missingSmallestInt)

      if (!A.includes(smallestInt) && missingSmallestInt > smallestInt) {
        missingSmallestInt = smallestInt;
      }
    }
  }

  return missingSmallestInt;




  3) didn't account for not including 0 - failed submission

  let sortedA = A.sort((a, b) => a - b);

  console.log(sortedA);
  let biggest = Math.max(...sortedA);

  let missingSmallestInt = 0;

  if (A.every((item) => item < 0)) {
    return 1;
  } else {
    let sortedPositiveA = sortedA.filter((item) => item > 0);

    for (let i = 0; i < sortedPositiveA.length; i++) {
      if (sortedPositiveA[i] + 1 === sortedPositiveA[i + 1]) {
        missingSmallestInt = biggest + 1;
      } else {
        //check if the number exists already

        let smallestInt = sortedPositiveA[i] + 1;
        console.log(smallestInt);

        if (!A.includes(smallestInt) && missingSmallestInt > smallestInt) {
          missingSmallestInt = smallestInt;
        }
      }
    }
  }

  return missingSmallestInt;


  4)
  function solution(A) {
  let sortedA = A.sort((a, b) => a - b);
  let biggest = Math.max(...sortedA);

  let missingSmallestInt = 1000000;

  if (A.every((item) => item < 0)) {
    return 1;
  } else {
    let sortedPositiveA = sortedA.filter((item) => item > 0);
    console.log("positive", sortedPositiveA);

    for (let i = 0; i < sortedPositiveA.length; i++) {
      if (sortedPositiveA[i] + 1 === sortedPositiveA[i + 1]) {
        missingSmallestInt = biggest + 1;
      } else {
        //check if the number exists already

        let smallestInt = sortedPositiveA[i] + 1;
        console.log('smallestInt', smallestInt);
        console.log('missing ', missingSmallestInt)

        if (
          !A.includes(smallestInt) &&
          smallestInt < missingSmallestInt &&
          missingSmallestInt !== 0
        ) {
          missingSmallestInt = smallestInt;
        }
      }
    }
  }

  return missingSmallestInt;
}
 */
