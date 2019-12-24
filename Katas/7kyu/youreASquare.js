// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// isSquare(-1) returns  false
// isSquare(0) returns   true
// isSquare(3) returns   false
// isSquare(4) returns   true
// isSquare(25) returns  true  
// isSquare(26) returns  false


// var isSquare = function(n) {
//     var squareRoot = Math.sqrt(n);
//     return (Number.isInteger(squareRoot) && Math.pow(squareRoot, 2) === n) 
//   }

var isSquare = function(n) {

    var squareRoot = Math.sqrt(n);
    
    var squareRootIsAnInteger = Number.isInteger(squareRoot);

    var isEqualToSquareOfSquareRoot = (Math.pow(squareRoot, 2) === n);

    return (squareRootIsAnInteger && isEqualToSquareOfSquareRoot); 

}

//test
console.log(isSquare(4));
console.log(isSquare(3));
console.log(isSquare(25));
console.log(isSquare(-1));


//notes
//if n is a square number, return true 
//a square number: 
//cant end in 2,3,7,8
//digital root is either 1, 4, 7, 9 (add up all the digits until you get a single digit)
//... or you can use Math.sqrt() and Math.pow(base, exponent)
//if Math.sqrt(n) !== Math.pow(n, 2), return false 
//gotta make sure the square root is an integer --> Number.isInteger()

//other solutions

// function isSquare(n) {
//     return Math.sqrt(n) % 1 === 0;
//   }

  //% 1 -> how many times a number can be divided by 1; Remainder operator % - returns the remainder; will give 0 if it's an integer and remainder decimals if not  
