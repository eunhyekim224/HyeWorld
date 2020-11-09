/** 
In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

The Morse code table is preloaded for you as a dictionary, feel free to use it:

Coffeescript/C++/Go/JavaScript/Julia/PHP/Python/Ruby/TypeScript: MORSE_CODE['.--']

All the test strings would contain valid Morse code, so you may skip checking for errors and exceptions.

*/

function decodeMorse(morseCode) {
  const morseWords = morseCode.split("   ");
  const morseCharacters = morseWords.map((word) => {
    return word.split(" ");
  });

  const decodedWordsArr = morseCharacters.map((characters) => {
    const decodedCharacters = characters.map((character) => {
      return MORSE_CODE[character];
    });
    return decodedCharacters.join(" ");
  });
  return decodedWordsArr.join(" ");
};

function decodeCharacters() {
 
}

function decodeWords() {
  
}

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));

/**
input = morse code
output = decoded string 

- split by 3 spaces -> get words
- split each word item by 1 space -> get single characters 
- run MORSE_CODE library for each of the letter -> string together to make words
- combine each word and return final output 

- special case: special service codes - treated as single character

**/