/**
 * Given an array of integers, find the one that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 */

function findOdd(A) {
  const newA = A.map((int) => {
    const intAppearances = A.filter((x) => {
      if (x === int) return true;
    });
    const oddNumberOfAppearances = intAppearances.length % 2 !== 0;
    if (oddNumberOfAppearances) return int;
  });

  const undefinedFilteredA = newA.filter((int) => {
    if (int) return int;
  });
  return undefinedFilteredA[0];
}

console.log(findOdd([1, 1, 2, 2, 3, 3, 3]));


//Better way
function findOdd(A) {
  return A.find((item) => A.filter(el => el == item).length % 2)
}