// Create a function christmasTree(height) or christmas_tree(height) (in Ruby) that returns a christmas tree of the correct height

// christmasTree(5) || christmas_tree(height) should return:

//     *    
//    ***   
//   *****  
//  ******* 
// *********
// Height passed is always an integer between 0 and 100.

// Use \n for newlines between each line.

// Pad with spaces so each line is the same length. The last line having only stars, no spaces.

function christmasTree(height) {
    var treeLines = treeLine(height);
    return joinedAndTrimmed(treeLines);
}

spaces = n => {
    var space = ' ';
    return space.repeat(n);
};

stars = n => {
    var star = '*';
    return star.repeat(n);
};

treeLine = height => {
    var treeLines = [];
    for (var i=1, j=1; j<=((2*height)-1); i++, j+=2) {
        var treeLine = spaces(height-i) + stars(j) + spaces(height-i);
        treeLines.push(treeLine);
    }
    return treeLines;
}

joinedAndTrimmed = arr => {
    return arr.join('\n').trimRight();
}


//test

console.log(christmasTree(1))//"*"
console.log(christmasTree(2))//" * \n***");
console.log(christmasTree(3))//"  *  \n *** \n*****");




//formula

// space.repeat(height-1) + star.repeat(1) + space.repeat(height-1) + newLine 
// + space.repeat(height-2) + star.repeat(3) + space.repeat(height-2) + newLine 
// + space.repeat(height-3) + star.repeat(5) + space.repeat(height-3) + newLine ...




// var i = 1;
// var j = 1;

// j < ((2*height)-1)

//  var treeLine = spaces(i) + stars(n) + spaces(i) + newLine;
//  i++; 
//  j = j + 2;
//  treeLines.push(treeLine);

