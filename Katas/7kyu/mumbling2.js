// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
    var stringArray = [];

    for (var i=0; i < s.length; i++) {
        var firstLetter = s.charAt(i); 
        var upperCase = firstLetter.toUpperCase();
        var repeated = firstLetter.repeat(i);
        var lowerCaseRepeated = repeated.toLowerCase(); 
        var finalString = upperCase + lowerCaseRepeated;
        stringArray.push(finalString);
    }; 

    return stringArray.join('-');
}

//test
console.log(accum('abcd'));


//notes
//use RegEx or String methods 

//takes each letter of the string

    // var firstLetter = s.charAt(1);
    // var secondLetter = s.charAt(2);

    // var stringArray = [];

    // for (var i=0; i < s.length; i++) {
    //     var letter = s.charAt(i); //a
    //     letter.toUpperCase(); //A
    //     letter.repeat(indexOf(letter));

    // }; 


//capitalise each letter

    //s.toUpperCase(string value)

//first letter -  , second letter - 2, third letter - 3, etc.

    //s.repeat(number of times);

//each letter of the original string separated by - 
    
    //s.concat()
    //array.join('-') 

//other codes

function accum(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  }

//or

  function accum(str) {
    var letters = str.split('');
    var result = [];
    for (var i = 0; i < letters.length; i++) {
      result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
    return result.join('-');
  }