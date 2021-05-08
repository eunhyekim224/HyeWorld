/**
 If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

  Note: If the number is a multiple of both 3 and 5, only count it once. Also, if a number is negative, return 0(for languages that do have them)

 */

function solution(number) {
  return multiplesOfThreeAndFive(number).reduce((prev, curr) => prev + curr);
}

function multiplesOfThreeAndFive(number) {
  const numberDividedByFive = (number - 1) / 5;
  const numberDividedByThree = (number - 1) / 3;

  let multiples = [];
  for (let i = 0; i <= numberDividedByThree; i++) {
    multiples.push(i * 3);
  }
  for (let j = 0; j <= numberDividedByFive; j++) {
    if (!multiples.includes(j * 5)) {
      multiples.push(j * 5);
    }
  }
  console.log(multiples)
  return multiples;
}

