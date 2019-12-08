// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

function factorial(n) {
  
    if (n < 0 || n > 12) {
        throw new RangeError ("The argument must be between 0 and 12.");
    }
     
    if (n === 0) {
        return 1; 

    } else {

        var numbers = []

        for (var i = 0; i < n; i++) { 
            numbers.push(n-i);
        }

        return numbers.reduce((accumulator, currentValue) => accumulator * currentValue)
    }
}

console.log(factorial(3));
console.log(factorial(5));
console.log(factorial(13)); //execution of the function will stop here cause of 'throw' RangeError
console.log(factorial(0));
console.log(factorial(-2));
console.log(factorial(12));


//notes

//RangeError is an Object
//thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value 

//'throw' statement to catch an exception
//execution of the current function will stop

//The try...catch statement marks a block of statements to try, and specifies a response, should an exception be thrown.
//if an exception is thrown in the 'try' block, control is shifted to the 'catch' block. if no exception is thrown 'catch' is skipped.

//n * n-i 


//other solutions

// if (n === 0) return 1;
// return n * factorial(n-1);


