// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {

  return (amountOfO(str) === amountOfX(str));

}

hasX = str => str.match(/x/gi) || [];
hasO = str => str.match(/o/gi) || [];

amountOfX = str => hasX(str).length;
amountOfO = str => hasO(str).length;



console.log(XO("ooxx")); //true
console.log(XO("oooxx")); //false
console.log(XO("jjkkf")); //true 
console.log(XO("XOoX")); //true
console.log(XO("XXxOo"))// false 
console.log(XO("xxxm")); // false;


// if (!hasX(str) && !hasO(str)) {
//   return true;
//  } else {
//    return amountOfX(str) === amountOfO(str)
//  }

//notes
//try using regex

//count the number of x
//count the number of o

// var numberOfX = str.match(X).length;
// var numberOfO = str.match(O).length;

//other solutions

function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

  //how to use 'let'?


