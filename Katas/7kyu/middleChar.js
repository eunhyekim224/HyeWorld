// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s) {
  if (hasEvenLength(s)) {
      return pairOfMiddleChar(s);
  } else {
      return singleMiddleChar(s);
  } 
}

hasEvenLength = s => s.length % 2 === 0; 

middlePosition = s => s.length/2;

pairOfMiddleChar = s => s.charAt(middlePosition(s) - 1) + s.charAt(middlePosition(s));
singleMiddleChar = s => s.charAt(middlePosition(s));


//test
console.log(getMiddle('dog'));
console.log(getMiddle('umbrella'));

//notes

//find out if the word length is even or odd
//var even = true; var odd = false
//s.length % 2 === 0 // even 

//if even, return the middle 2 characters 
//s.charAt((s.length/2) + (s.length/2 + 1))

//if odd, return the middle character
//s.charAt((s.length/2) + 0.5)

//other solutions

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}