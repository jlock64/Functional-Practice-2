/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function testForEach(array, myFunc){
  for(var i = 0; i < array.length; i++) {
    myFunc(array[i]);
  }
}

// testing your code with console.assert
var total = 1;
var myTot = 0
testForEach([1, 2, 3, 4], function(a){
   total *= a;
 });

testForEach([3,4,5,6], function(elem) {
  myTot += elem;
})

// and finally assert; if this fails, the program stops
console.assert(total === 24);
console.assert(myTot === 18);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var sumNums = 0;
    // .. do something with each element of args
    args.forEach(function(item) {
    sumNums += item;
    })
    return sumNums;
    console.log(sumNums);
}
console.assert( sum(1, 2, 3, 4, 5) === 15 )

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = Array.prototype.slice.call(arguments);
    var total = 0;
    args.forEach(function(item) {
    total += item;
    })
    // .. do something with each element of args
    var avg = total / args.length;
    return avg;
}

console.assert( average(2, 4, 6, 8) === 5 )

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var numbers = [].slice.call(arguments);
    var largestNumber = 0;
    // .. do something with each element of args
    numbers.forEach(function(num) {
      if (num > largestNumber){
        largestNumber = num;
      }
    })
    return largestNumber;
    console.log(largestNumber);
}

console.assert( largest(2, 4, 6, 8) === 8 )

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);
    var longest = "";
    // .. do something with each element of args
    args.forEach(function(item) {
        if (item.length > longest.length) {
            longest = item;
        }
    })
    return longest;
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()
var sortArray = ["banana", "orange", "kiwi", "apple"];
sortArray.sort(); // --> alphabetical order (apple banana kiwi orange)

// .concat()
var arrayOne = ["apple", "banana"]
var arrayTwo = ["orange", "kiwi"];
var newArray = arrayOne.concat(arrayTwo);
console.log(newArray); // apple banana orange kiwi

// .indexOf()
var cars = ["lexus","chevy", "bmw", "volvo"]
var b = cars.indexOf("bmw");  // will return 2 (gets index of item being searched for)
console.log(b);

// .split()
var mySentence = "This is not a very long sentence."
var newArray = mySentence.split(" ");
console.log(newArray); // --> returns ["this", "is", "not", "a", "very", "long", "sentence"]

// .join()
var myJoinedArray = newArray.join;
console.log(myJoinedArray); // joins all the array items into one string separated by comma
// returns "this, is, not, a, very, long, sentence"

// .pop()
var myPopArray = ["adidas", "nike", "asics"];
var popOff = myPopArray.pop();
console.log(popOff); // --> returns "asics" or the last item in the array

// .push()
var fruits = ["apple", "banana", "star fruit"];
var pushArray = fruits.push("blueberries");
console.log(fruits); // returns ["apple", "banana", "star fruit", "blueberries"]

// .slice()
var favFruits = ["apple", "banana", "blueberries", "raspberries"];
var myFavs = favFruits.slice(2,4);
console.log(myFavs); // returns "blueberries" and "raspberries" (starts of index 2 & ends but not
// does not include index 4)

// .splice()
var veggies = ["tomato", "spinach", "brocolli", "green beans"];
var myVegs = veggies.splice(1,3);
console.log(myVegs); // returns ["spinach", "brocolli", "green beans"]

// .shift() // removes first item of the array
var fruits = ["apple", "banana", "star fruit"];
var myShiftedArray = fruits.shift();
console.log(myShiftedArray); // returns apple

// .unshift()
var fruits = ["apple", "banana", "star fruit"];
var unshiftArray = fruits.unshift("kiwi", "blackberry");
console.log(unshiftArray); // returns number 5 --> fruits now has kiwi and blackberry on front

// .filter()
var numArray = [1,3,13,5,18]; // my array of numbers
function bigNums(num) { // my function I will call on .filter method
  return num > 10; // return only numbers in array > 10
}
numArray.filter(bigNums); // .filter method calling on bigNums function I created
// this does not alter the original array however will return [13,18]

// .map()
var personsArr = [ // create my array of objects
  { firstname: "Justin", lastname: "Lock"},
  { firstname: "Andrew", lastname: "London"},
  { firstname: "Russ", lastname: "Pate"},
];
function firstName(el) { // create my .map function to only extract first name keynames
  return el.firstname;  // should return only firstname keyname
}
personsArr.map(firstName); // this method will return a new array --> ["Justin", "Andrew", "Russ"]
