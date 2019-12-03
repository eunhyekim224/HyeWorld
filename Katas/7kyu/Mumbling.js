function accum(s) {
    var stringArray = [];

    for (var i=0; i < s.length; i++) {
        var firstLetter = s.charAt(i); 
        var repeated = firstLetter.repeat(i);
        var finalString = firstLetter.toUpperCase() + repeated.toLowerCase();
        stringArray.push(finalString);
    }; 

    return stringArray.join('-');
}
