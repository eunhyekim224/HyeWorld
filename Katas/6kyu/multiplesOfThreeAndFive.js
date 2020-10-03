/**
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

  Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

 */

function solution(number) {
  if (number >= 0) {
    const multiplesOfThreeOrFive = [];
    for (let i = 0; i < number; i++) {
      const multipleOfThree = i % 3 === 0;
      const multipleOfFive = i % 5 === 0;
      if (multipleOfThree || multipleOfFive) {
        multiplesOfThreeOrFive.push(i);
      }
    }
    if (multiplesOfThreeOrFive.length > 0) {
      return multiplesOfThreeOrFive.reduce((a, b) => a + b);
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

/**
 * multiples of 3: x % 3 === 0
 * multiples of 5: y % 5 === 0
 *
 */
