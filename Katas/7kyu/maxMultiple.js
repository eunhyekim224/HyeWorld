// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positve values .
// It's guaranteed that a divisor is Found .

function maxMultiple(divisor, bound) {

    var multiplesWithinBound = getMultiplesWithinBound(divisor, bound);
  
    return largestIntegerIn(multiplesWithinBound);

}

isDivisibleByDivisor = (N, divisor) => N % divisor === 0; 

largestIntegerIn = arr => Math.max(...arr);

getMultiplesWithinBound = (divisor, bound) => {
    var multiplesWithinBound = [];
    for (var N = 0; N <= bound; N++) {
        if (isDivisibleByDivisor(N, divisor)) {
            multiplesWithinBound.push(N);
        }
    }
    return multiplesWithinBound;
}

//test

console.log(maxMultiple(2,7)) //6
console.log(maxMultiple(10, 50)) //50
console.log(maxMultiple(37, 200)) //185

//other solutions

// function maxMultiple(divisor, bound){
//     return bound-bound%divisor
//   }
