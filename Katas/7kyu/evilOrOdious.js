// The number n is Evil if it has an even number of 1's in its binary representation.
// The first few Evil numbers: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

// The number n is Odious if it has an odd number of 1's in its binary representation.
// The first few Odious numbers: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

// You have to write a function that determine if a number is Evil of Odious, function should return "It's Evil!" in case of evil number and "It's Odious!" in case of odious number.


function evil(importantNumber) { 
   
    var bin = number2bin(importantNumber); 

    //function that returns a string 
    
    function numberOfOnes() {

        var length = (bin.match(new RegExp("1", "g")) || []).length;
        return length;
    }
    // || used for booleans !! 

    function isOdd(num) { 
      return num % 2; 
      //divide the number and return the remainder; 1 if odd; true if odd
    }

    if (isOdd(numberOfOnes())) {
        return "It's Odious!";
    } else  {
        return "It's Evil!";
    }
};

function number2bin(number) {
    return (number >>> 0).toString(2);
};   

console.log('1 to bin ' + number2bin(1));
console.log('2 to bin ' + number2bin(2));
console.log('3 to bin ' + number2bin(3));

 console.log(evil(5));
 evil(15);   




//test
// var bin = number2bin;
// console.log(bin(3));
// console.log(bin(5))
// console.log(bin(13));