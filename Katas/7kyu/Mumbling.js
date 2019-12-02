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