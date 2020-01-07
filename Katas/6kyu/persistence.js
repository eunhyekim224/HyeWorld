// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number


function persistence(num) {

    var numberOfMultiplications = 0; 

    while (numberOfDigits(num) > 1) { 
        var num = productOfDigits(num); 
        numberOfMultiplications++;
    };
    
    return numberOfMultiplications;     

}

numberOfDigits = num => num.toString().length;

productOfDigits = num => {
    var digits = num.toString().split(''); 
    var multiplier = (runningProduct, currentValue) => runningProduct * currentValue;
    return digits.reduce(multiplier);
}

console.log(persistence('39'));
console.log(persistence('4'));

//notes

//number of times 
//you must multiply 
//the digits in num
//until you reach 
//a single digit 


// var multiplier = (runningProduct, currentValue) => runningProduct * currentValue;
// var multipliedDigits = digits.reduce(multiplier);


//var singleDigit = numberOfDigits(num) === 1 
//while (!singleDigit).... 
//or
//var moreThanOneDigit = numberOfDigits(num) > 1;
//while (moreThanOneDigit).... 
//timed out. Why? because !singleDigit can be anything? infinite loop?






