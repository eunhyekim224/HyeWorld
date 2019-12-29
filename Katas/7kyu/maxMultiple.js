// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positve values .
// It's guaranteed that a divisor is Found .

function maxMultiple(divisor, bound) {

    var arrayOfMultiples = getArrayOfMultiples(divisor, bound);
  
    var largestInteger = largestIntegerInAnArray(arrayOfMultiples);

    return largestInteger;

}

isDivisibleByDivisor = (N, divisor) => N % divisor === 0; 

largestIntegerInAnArray = arr => Math.max(...arr);

getArrayOfMultiples = (divisor, bound) => {
    var arrayOfMultiples = [];
    for (var N = 0; N <= bound; N++) {
        if (isDivisibleByDivisor(N, divisor)) {
            arrayOfMultiples.push(N);
        }
    }
    return arrayOfMultiples;
}

//test

console.log(maxMultiple(2,7)) //6
console.log(maxMultiple(10, 50)) //50
console.log(maxMultiple(37, 200)) //185

//other solutions

// function maxMultiple(divisor, bound){
//     return bound-bound%divisor
//   }
