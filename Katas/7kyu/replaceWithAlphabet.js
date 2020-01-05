// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)


// function alphabetPosition(text) {

//     var positions = [];

//     for (var i = 0; i < text.length; i++) {
//         var char = text.charAt(i);

//         if (char.toUpperCase() != char.toLowerCase()) {

//             var index = text.charCodeAt(i);

//             positions.push(index);
//         }
//     }
//     return positions.join(' ');
// }

// console.log(alphabetPosition('The cat.'));


function alphabetPosition(text) {
    var positions = [];
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for (var i=0; i < text.length; i++) {
        var letter = text.charAt(i).toLowerCase();
            if (alphabet.indexOf(letter) > -1) {
                positions.push(alphabet.indexOf(letter) + 1);
            }
    }
    return positions.join(' ');
}

console.log(alphabetPosition('The Cat.'));

//get the letter from the text
//alphabet string 'abcdefghijklmnopqrstuvwxyz'
//an alphabet -> string.charAt[i+1]
//if the letter matches the alphabet, what is its index? i+1 
//push the index to the array 
//join the array 


//


  //take a letter from the text
  //text.charAt(i)

  //letter to index 
  //text.charCodeAt(index);

  //if not a letter
  //if (char.toUpperCase() != char.toLowerCase()) 
  //only returns true if it's a letter

  //empty array of positions
  //array.join(' ')


//other solutions

function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++){
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
  
    return result.slice(0, result.length-1);
  }

//or

function alphabetPosition(text) {
    return text.match(/[a-zA-Z]/g).map( (el) => el.toLowerCase().charCodeAt() - 96 ).join(' ');
  }