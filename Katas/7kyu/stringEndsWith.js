// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending){
    if (str.endsWith(ending)) {
      return true;
    } else {
      return false;
    }
  }


//notes
//identify ending of 1st string 
//match 2nd string to ending of 1st string
// if (str.endsWith(ending), length)) return true 
// length = ending.length
//if matched, return true, else return false 

//other solutions

function solution(str, ending){
  return str.endsWith(ending);
}

//or

function solution(str, ending){
  return new RegExp(ending+"$", "i").test(str);
}

