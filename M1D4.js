/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.


*/
let area = function(l1,l2){
 return l2 * l1;
}
let mySquare =area(50,20)
console.log(mySquare);

console.log('<--------------------- Excersize 2 --------------->');

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/

let crazySum = function(x,y){
    if (x === y){
        return (x+y) * 3;
    }
    else {
        return x+y;
    }
}
let myCrazyAnwser = crazySum(3,2)
console.log(myCrazyAnwser);


console.log('<--------------------- Excersize 3 --------------->');
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
/*
let crazyDiff = function(a,b){
    var myCrazyDiff =  a-b;
    } if (myCrazyDiff >= a) {

    }
*/

console.log('<--------------------- Excersize 4 --------------->');
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
/* WRITE YOUR CODE HERE */

let boundary = function(n){
    if (20 < n <= 100 || n === 400){
        return true;
    }
    else {
        return false;
    }
}
let myBoundary = boundary(500);
console.log(myBoundary);



console.log('<--------------------- Excersize 5 --------------->');
/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */

let strivify = function(z) {

    let word = "Strive";
    let sentance = " is a online school.";

    if ( word !== z){
       return word.concat(sentance);
    } else {
        return sentance;
    }
}
console.log(strivify("Strive"));


console.log('<--------------------- Excersize 6 --------------->');
/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/