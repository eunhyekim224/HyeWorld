// Your task is to sum the differences between consecutive pairs in the array in descending order.

// For example: sumOfDifferences([2, 1, 10]) Returns 9

// Descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell).

function sumOfDifferences(arr) {

    //arrange the array in descending order

    var ascendingArray = arr.sort(function(a, b) {
        return a - b;
      });

    var descendingArray = ascendingArray.reverse();
    console.log (descendingArray);

    if  (descendingArray.length > 1) {
        var newArray = [];

        for (var i = 0; i <  (descendingArray.length - 1); i++) {

            //find differences between consecutive numbers and push to a new array

            var difference = descendingArray[i] - descendingArray[i + 1];

            console.log(difference);

            newArray.push(difference);

            console.log(newArray);
        }
  
        //sum the differences 

        // for (var j = 0, sum = 0; j < arrayOfDifferences.length; sum += arrayOfDifferences[j++]) {
        //     return sum; 
        // }        

        function reducer(accumulator, currentValue) {
            return accumulator + currentValue;
        }

        var sum = newArray.reduce(reducer);
        return sum; 

    } else {
        return 0;
    }
}

var array1 = [1, 2, 10]; // 9
var array2 = [2];
var array3 = [];

var array5 = [-3, -2, -1];

var array6 = [2,-5,1,3,5,-5,5] // 10 

// console.log(sumOfDifferences(array1));
// console.log(sumOfDifferences(array2));
// console.log(sumOfDifferences(array3));


console.log(sumOfDifferences(array1));
console.log(sumOfDifferences(array5));



//issue when -x - (+y)

