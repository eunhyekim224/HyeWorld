// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples
// minMax([1,2,3,4,5])   == [1,5]
// minMax([2334454,5])   == [5, 2334454]
// minMax([1])           == [1, 1]
// Remarks
// All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.

function minMax(arr){
    
    var min = Math.min(...arr)
    var max = Math.max(...arr)

    return new Array(min, max);
  }


//test
console.log(minMax([1,2,3,4,5]));
console.log(minMax([566, 999, 334]));


//notes
//find the minimum number of the array 
//for each item in the array, 
//first number = arr[i]
//compare arr[i] with all the other arr[i]

// max = -Infinity, min = +Infinity;   // Infinity is a property of the global object

// for (var i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }


//or use Math.min(...array) 
//if you just put in the array directly --> NaN 
//use .apply() 
//calls a function with a given 'this' value, and arguments provided as an array 
//syntax is almost identical to call(), but the difference is that apply() takes in single array arguments 
//call() provides a new value of 'this' to the function/method. With call, you can write a method once and then inherit it in another object, without having to rewrite the method for the new object.
//if the method is a function (e.g. Math.min), null and undefined will be replaced with the global object 

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
//using apply and built-in functions 

//other solutions

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
  }

//or

function minMax(arr){
    return [Math.min.apply(Math, arr), Math.max.apply(Math, arr)];
  }
