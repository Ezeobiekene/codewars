// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord( bool ){
    //...
    if (bool) {
      return "Yes";
    } else {
      return "No";
    }
  }



// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
    return number % 2 === 0 ? 'Even' : 'Odd';
  }



// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    // Code?
    return num<0 ? num : -num;
  }


//   DESCRIPTION:
//   There was a test in your class and you passed it. Congratulations!
//   But you're an ambitious person. You want to know if you're better than the average student in your class.
  
//   You receive an array with your peers' test scores. Now calculate the average and compare your score!
  
//   Return True if you're better, else False!
  
//   Note:
//   Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let total = 0
    classPoints.forEach(element => total += element)
    let average = total / classPoints.length
    return (yourPoints > average) ? true : false
  }



//   DESCRIPTION:
//   Your task is to create a function that does four basic mathematical operations.
  
//   The function should take three arguments - operation(string/char), value1(number), value2(number).
//   The function should return result of numbers after applying the chosen operation.
  
//   Examples(Operator, value1, value2) --> output
//   ('+', 4, 7) --> 11
//   ('-', 15, 18) --> -3
//   ('*', 5, 5) --> 25
//   ('/', 49, 7) --> 7

function basicOp(operation, value1, value2){
    //Code
    if (operation === "+") {
      return value1 + value2
    }  else if (operation === "-") {
      return value1 - value2
    } else if (operation === "*") {
      return value1 * value2
    } else if (operation === "/") {
      return value1 / value2
    }
    return 0;
  }




//   DESCRIPTION:
//   Given an array of integers.
  
//   Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  
//   If the input is an empty array or is null, return an empty array.
  
//   Example
//   For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
  
function countPositivesSumNegatives(input) {
    // your code here
    let arr = []
    if( input === null ){
      return arr
    }
    let count = 0
    let sum = 0
    for(let i = 0; i < input.length; i++ ){
      input[i] > 0 ? count++ : sum += input[i]
    }
    if(count !== 0 || sum !== 0){
      arr.push(count, sum)
    }
    return arr
   
  }



//   DESCRIPTION:
//   Create a function with two arguments that will return an array of the first n multiples of x.
  
//   Assume both the given number and the number of times to count will be positive numbers greater than 0.
  
//   Return the results as an array or list ( depending on language ).
  
//   Examples
//   countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
//   countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    let z = [];
    for (let i = 1; i <= n; i++) {
      z.push(x * i);
    }
    return z;
  }



//   DESCRIPTION:
//   Implement a function which convert the given boolean value into its string representation.
  
//   Note: Only valid inputs will be given.

const booleanToString = b => b ? 'true' : 'false';



// DESCRIPTION:
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    const res = (s1 + s2 + s3)/3
    
    if(res <= 100 && res >= 90){
      return 'A'
    }else if(res <= 89.9 && res >= 80){
      return 'B'
    }else if(res <= 79.9 && res >= 70){
      return 'C'
    }else if(res <= 69.9 && res >= 60){
      return 'D'
    }else if(res <= 59.9 ){
      return 'F'
    }
   }



//    DESCRIPTION:
//    Can you find the needle in the haystack?
   
//    Write a function findNeedle() that takes an array full of junk but containing one "needle"
   
//    After your function finds the needle it should return a message (as a string) that says:
   
//    "found the needle at position " plus the index it found the needle, so:
   
//    Example(Input --> Output)
   
//    ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
//    Note: In COBOL, it should return "found the needle at position 6"

const findNeedle = (haystack) => {
	const index = haystack.findIndex((element) => element === "needle");
	return `found the needle at position ${index}`;
};



// DESCRIPTION:
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

const numberToString = num => num.toString();


// DESCRIPTION:
// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description
// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

// Examples
// "1234" --> 1234
// "605"  --> 605
// "1405" --> 1405
// "-7" --> -7

const stringToNumber = str => Number(str)



// DESCRIPTION:
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!

const paperwork = (n, m) => m < 0 || n < 0 ? 0 : n * m;


// DESCRIPTION:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'



// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

const sumMix = (x) => {
    let sum = 0
     x.forEach(item => sum += Number(item) )
    return sum
   }



   
// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

const digitize = (n) => {
    let newArr = []
    String(n).split('').map(n => {
       newArr.unshift(Number(n))
    } )
    return newArr
   }




//    DESCRIPTION:
//    Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
   
//    Examples input/output:
   
//    XO("ooxx") => true
//    XO("xooxx") => false
//    XO("ooxXm") => true
//    XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//    XO("zzoo") => false

function XO(str) {
    let x = 0, o = 0
   let newArr = str.split('')
   
   newArr.forEach((item, index, arr) => {
     if(item.toLowerCase() === 'x'){
       x++
     }else if(item.toLowerCase() === 'o'){
       o++
     }
   })
    
    return (x === o ) ? true :  false
  }



//   DESCRIPTION:
//   This code does not execute properly. Try to figure out why.  

function multiply(a, b){
    return a * b
  }




//   DESCRIPTION:
//   This code does not execute properly. Try to figure out why.

function multiply(a, b){
    return a * b
  }





//   DESCRIPTION:
//   The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
  
//   To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
  
//   Input
//   Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
  
//   Output
//   Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
  
//   Example
//   input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//   output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]

function openOrSenior(data){
    let result = [];
    data.forEach((item) => {
      if(item[0] >= 55 && item[1] > 7)
        result.push("Senior");
      else 
        result.push("Open");
    });
    return result;
  }





//   Summation
//   Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
  
//   For example (Input -> Output):
  
//   2 -> 3 (1 + 2)
//   8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = (num) => {
    let result = 0;
    for (let i = 1; i <= num; i++) {
      result += i;
    }
    return result;
  }




//   DESCRIPTION:
//   Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
  
//   For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
  
//   Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
  
//   Note: The function accepts an integer and returns an integer.
  
//   Happy Coding!


function squareDigits(num){
    let nums = String(num).split('')
    let res = ''
    let helper = 0
    nums.forEach(item => {
      helper = Number(item)**2
      res += String(helper)
   })
     
     return Number(res);
   }




//    DESCRIPTION:
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
   
function lovefunc(flower1, flower2){

  //if the remainder of the flowers when divided by two are the same then the conditions are false
  return flower1 % 2 === flower2 % 2 ? false : true
}



// Sum Arrays

// Instructions

// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.


function sum (numbers) {
 
  //if the array is empty return 0
  if(numbers.length === 0) return 0

  //if the array has one element return the element
  if(numbers.length === 1) return numbers[0]

  //find the sum of the array using the reduce method
 let sum = numbers.reduce((acc, curr) => {
   acc += curr
   return acc
 }, 0)
 
 //return the sum
 return sum
};



// Instructions
// Make a simple function called greeet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?


let greeet = function(){
  return 'hello world!'
}




// DESCRIPTION:
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// FUNDAMENTALSSTRINGS

function removeExclamationMarks(s) {
  let result = ''
  
  for(let ele of s){
    if(ele !== '!'){
     result += ele
    }
  }
  
  return result;
}

//                  OR

function removeExclamationMarks(s) {
  return s.replace(/!/gi, '');
}



// Instructions

// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  // your code here
  
  if(array.length === 0) return 0
  
  sum = array.reduce((acc, curr) => {
    acc += curr
    return acc
  }, 0);
  let avg = sum / array.length
  return avg
}


// Task:
// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"


function oddOrEven(array) {
  //enter code here
 if(array.length === 0) return 'even'
 let sum = array.reduce((acc,curr) => {
   acc += Math.abs(curr)
   return acc
 }, 0)
 
 return (sum % 2 === 0) ? 'even' : 'odd'
}


// DESCRIPTION:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}


// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.


function countSheeps(sheep) {
  // TODO
  let sum = 0
  for(let ele of sheep){
    if (ele) sum += 1
  }
  
  return sum
}