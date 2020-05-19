import emojipedia from "./emojipedia";


var emojDesc = emojipedia.map(function (emojiEntry){
    return emojiEntry.meaning.substring(0,100);
});

console.log(emojDesc);


var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
    return x*2;
}

const newNumbers = numbers.map(double);
console.log(newNumbers);
//Filter - Create a new array by keeping the items that return true.
var numbers = [3, 56, 2, 48, 5];

const newNo = numbers.filter(function(num){
    return num > 10;
});

console.log(newNo);
//Reduce - Accumulate a value by doing something to each item in an array.
var numbers = [3, 56, 2, 48, 5];

var reduceNo = numbers.reduce(function(accumulator,currentNumber){
    return accumulator + currentNumber;
});

console.log(reduceNo);
//Find - find the first item that matches from an array.
var numbers = [3, 56, 2, 48, 5];

var findNo = numbers.find(function(num){
    return num>10;
});

console.log(findNo);
//FindIndex - find the index of the first item that matches. Only for the first item matched
var numbers = [3, 56, 2, 48, 5];

var findIndex = number.findIndex(function(num){
    return num>10;
});

console.log(findIndex);


