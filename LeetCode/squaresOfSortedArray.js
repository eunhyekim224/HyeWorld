//Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let unsortedSquares = [];
    A.forEach(num => {
      unsortedSquares.push(num * num);
    })

    let sortedSquares = unsortedSquares.sort((a, b) => a - b)
    return sortedSquares;
};

/**
 * For each element in the array
 * Find the square by multiplying itself (i * i)
 * Add the result to a new array 
 * 
 * Sort the new array in increasing order 
 */

 let example = [-4,-1,0,3,10];
 console.log(sortedSquares(example))