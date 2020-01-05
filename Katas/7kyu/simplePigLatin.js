// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str){

    var normalWords = str.split(' ');
    var pigWords = [];

    for (var i=0; i < normalWords.length; i++) {
        var normalWord = normalWords[i];

        if (normalWord.charAt(0).toUpperCase() != normalWord.charAt(0).toLowerCase()) {
            var noFirstLetter = normalWord.substring(1, normalWord.length);
            var firstLetter = normalWord.charAt(0);
            var pigWord = noFirstLetter + firstLetter + 'ay';
            pigWords.push(pigWord);
        } else {
            pigWords.push(normalWord);
        }
    }

    return pigWords.join(' ');
 
  }

console.log(pigIt('Pig latin is cool'));

//split str into words, by spaces 
//     var arr = str.split(' ')

// //have an array for the pig words
//     var pigWords = [];

// //now you have an array of words
// //get each word
// //for each word (open loop)
//     var word = arr[i]

// //if it's a letter, do the below, else, 
//     pigWords.push(word);

// //remove the first letter using .substring
//     var noFirstLetter = word.substring(1, word.length)

// //for each word, identify the first letter
//     var firstLetter = word.cha(0);

// //cocat noFirstLetter, first letter, "ay"
//     var pigWord = noFirstLetter + firstLetter + 'ay';

// //push pigWord to pigWords array
//     pigWords.push(pigWord);

// //close loop

// return pigWords.join(' ');


//leaving punctuation marks untouched! onlt works if the punctuation is not connected to the word...

//short words e.g. is or my


//reconfigure

function pigIt(str){

    var normalWords = str.split(' ');
    var pigWords = [];

    for (var i=0; i < normalWords.length; i++) {
        var normalWord = normalWords[i];

        if (normalWord.charAt(0).toUpperCase() != normalWord.charAt(0).toLowerCase()) {
            var pigWord = normalWord.substring(1, normalWord.length) + normalWord.charAt(0) + 'ay';
            pigWords.push(pigWord);
        } else {
            pigWords.push(normalWord);
        }
    }

    return pigWords.join(' ');
 
  }


//other solutions

function pigIt(str){
    return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
  }

  
