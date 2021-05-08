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

function christmasTree(height, matterType, paddingType) {
    return makeTree(makeTreeLines(height, matterType), paddingType)
}

const makeTree = (lines, paddingType) => {
    let linesWithPadding = [];

    for (let i=0; i<lines.length; i++) {
        let widthOfTree = lines[lines.length-1].length;
        let paddingCount = (widthOfTree - lines[i].length)/2;
        let padding = repeatedChar(paddingType, paddingCount);
        let lineWithPadding = padding + lines[i] + padding;
        linesWithPadding.push(lineWithPadding);
    }
    return joinedAndTrimmed(linesWithPadding);
}

const makeTreeLines = (height, matterType) => {
    let treeLines = [];
    let widthOfTree = (2 * height) - 1;  
    
    if (height === 0) {
        treeLines.push('');
    } else {
        for (let matterCount=1; matterCount<widthOfTree; matterCount+=2) {
            let treeLine = repeatedChar(matterType, matterCount);
            treeLines.push(treeLine);
        }
    } 
    return treeLines;
}

const repeatedChar = (char, n) => {
    return char.repeat(n);
}

const joinedAndTrimmed = arr => {
    return arr.join('\n').trimRight();
}


//test

console.log(christmasTree(5, '*', ' '));
console.log(christmasTree(2, '&', '^'));
console.log(christmasTree(3, '$', '!'));




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

