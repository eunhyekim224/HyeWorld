// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram(str) {
    return (hasNoRepeatedLetters(str) || IsAnEmptyString(str));
  }

hasNoRepeatedLetters = str => {

  var lowerCaseLetters = str.toLowerCase().split('');

  var sortedString = lowerCaseLetters.sort().join('');
  
  var repeatRegex = /([a-z])\1+/gi;
  return repeatRegex.test(sortedString) === false;

};

IsAnEmptyString = str => str.length === 0;




//test
console.log(isIsogram("Dermatoglyphics")); //true 
console.log(isIsogram("aba")); //false 
console.log(isIsogram("moOse"));  // false-- ignore letter case
console.log(isIsogram("")); //true 



//notes

//using regex?
//hasRepeatedLetters = str => {
  // var repeatedLettersRegex = /([a-z])\1+/gi; //consecutive repeat only ! 
  // return repeatedLettersRegex.test(str);


//using for loop
// identify a letter str[i]
// check if str[i] matches any letters from the str 
// if it matches, return false
// else return true 

//hasNoRepeatedLetters = str => {
  //   var repeatingLetters = [];
  
  //   for (var i = 0; i < str.length; i++) {
  //     var letter = str.charAt(i);
  //     var matchedLetters = str.match(`/${letter}/gi`) || [];
  //     if (matchedLetters.length > 0) {
  //       repeatingLetters.push(matchedLetters); 
  //     };
  //   }
  //   return repeatingLetters.length === 0; 
  // };

  //doesnt work! 

//example 
//// var someParameter = 'blah';
// var interpolatedString = `the parameter is ${someParameter}`;   // note the use of the ` character instead of the normal ' (quote)
// console.log(interpolatedString)  // output is 'the parameter is blah'


// amountOfChar = (str, char) => {
//   var regex = `/${char}/gi`;
//   var matchChar = str.match(regex) || [];
//   return matchChar.length;
// }


//other solutions

function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}


function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}








