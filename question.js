//1. What is JavaScript?
//2.What are the key features of JavaScript?
//3.What is the difference between JavaScript and Java?
//4. How is JavaScript different from HTML and CSS?
//5. What are the data types in JavaScript?
//6. Explain the concept of hoisting in JavaScript.
//7.What are closures in JavaScript?
//8.How does prototypal inheritance work in JavaScript?
//9.What are the different ways to define variables in JavaScript?
//10. Explain the event delegation in JavaScript.
//11. What is the difference between 'undefined' and 'null' in JavaScript?
//12.What is the difference between '==' and '===' operators in JavaScript?
//13. Explain the concept of event bubbling and event capturing in JavaScript.
//14. How can you prevent the default behavior of an event in JavaScript?
//15. What are arrow functions in JavaScript? How are they different from regular functions?
//16. How can you convert a string to a number in JavaScript?
//17. Explain the concept of event-driven programming in JavaScript.
//18.What is the purpose of the 'use strict' directive in JavaScript?
//19.How does the 'this' keyword work in JavaScript?
//20.Explain the concept of callback functions in JavaScript.

//______________________***********************___________________________________

// practice questions on variables, data types, operators, and control statements in JavaScript:

// Variables and Data Types:
// a) Declare a variable named "age" and assign it a value of 25.
// b) What is the data type of the variable "name" if its value is "John Doe"?
// c) Declare a constant variable named "PI" and assign it a value of 3.14.
// d) What is the difference between "null" and "undefined" data types in JavaScript?

// Operators:
// a) What is the result of the following expression: 5 + 3 * 2?
// b) Write a JavaScript expression that checks if a number is even.

// c) What does the "===" operator do in JavaScript?
// var ab = 45;
// var bc = "45";
// if (ab === Number(bc)) {
//   console.log("strictly check comparison operator");
// } else {
//   console.log("comparison operator");
// }
// d) Explain the difference between the "&&" and "||" operators in JavaScript.

// Control Statements:
// a) Write a JavaScript if statement that checks if a variable "score" is greater than 90, and if so, prints "Excellent!".
// b) Write a JavaScript for loop that prints the numbers from 1 to 10.
// c) Explain the purpose of the "switch" statement in JavaScript.
// d) Write a JavaScript while loop that prints the even numbers from 2 to 10.

//     var number = 2;
//     while (number <= 10) {
//   console.log(number);
//   number = number + 2;
//     }

// Certainly! Here are the formulas to find the area of a circle, triangle, square, and rectangle:

// Area of a Circle:
// The area of a circle can be calculated using the formula:
// Area = π * r^2
// where π (pi) is a mathematical constant approximately equal to 3.14159, and r is the radius of the circle.

// Area of a Triangle:
// The area of a triangle can be calculated using different formulas depending on the available information. Here are a few common cases:

// a) If you know the base (b) and height (h) of the triangle, you can use the formula:
// Area = (1/2) * b * h

// b) If you know the lengths of all three sides of the triangle (a, b, c), you can use Heron's formula:
// Area = √(s * (s - a) * (s - b) * (s - c))
// where s = (a + b + c) / 2 is the semiperimeter of the triangle.

// Area of a Square:
// The area of a square is calculated by multiplying the length of one side (s) by itself:
// Area = s^2

// Area of a Rectangle:
// The area of a rectangle is calculated by multiplying the length (l) by the width (w):
// Area = l * w

// Please note that these formulas assume the measurements are in the same units (e.g., centimeters, inches) to obtain the area in squared units (e.g., square centimeters, square inches).

//Create a program that takes a day number (1-7) as input and displays the corresponding day of the week.

// Write a program that prompts the user to enter a month number (1-12) and displays the number of days in that month

// loops practice questions

// 1Printing numbers from 1 to N:
//Write a function that takes a positive integer N as input and prints all the numbers from 1 to N using a for loop.

// function intNumber(N){
//     if(N<=0){
//        console.log("all the numbers should be positive")
//        return;
//     }
//     for(var i=1 ; i<=N ; i++ ){
//         console.log(i)
//     }
// }
// intNumber(100)

//2 . // Sum of an array:
// Write a function that takes an array of numbers as input and returns the sum of all the elements in the array using a while loop.
// function arrNumber(arr) {
//   let sum = 0; // Initialize a variable to keep track of the sum

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]; // Add each element of the array to the sum variable
//  }
//  console.log(sum); // Print the sum after the loop
// }

// arrNumber([1, 2, 3]); // This will print the sum of the array: 6

// 3.Even numbers in a range:
// Write a function that takes two integers, start and end, and prints all the even numbers between them (inclusive) using a for loop

// function evenNumber(a,b) {
// // if(a>b){
// //  console.log("please enter +ve integer number")
// //  return;
// // }
//  for (var i=a; i<=b; i++){
//      if(i%2===0){
//          console.log(i)
//     }
//   }
// }
// evenNumber(10,20)

// Reverse a String:
//Write a function that takes a string as input and returns the reverse of that string.
// For example, if the input is "hello," the output should be "olleh."

// function reverseStr() {
//   var str = "hello";
//   console.log(`The reversed ${str}: `, str.split("").reverse().join(""));
// }
// reverseStr();

// function reverseStr() {
//   var str = "hello";
//   let newStr = str.split("").reverse().join("");
//   console.log(newStr);
// }
// reverseStr();

// Count Vowels:
// Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string.
// For example, if the input is "programming," the output should be 3.

// function countVowels(str) {
//   // Convert the input string to lowercase to handle both uppercase and lowercase vowels
//   const lowerCaseStr = str.toLowerCase();

//   // Split the string into an array of characters
//   const characters = lowerCaseStr.split("");

//   // Use the filter method to keep only the vowels (a, e, i, o, u)
//   const vowelsArray = characters.filter((char) => "aeiou".includes(char));

//   // Return the count of vowels
//   return vowelsArray.length;
// }
// // Test the function
// const inputString = "kanchan";
// const vowelCount = countVowels(inputString);
// console.log(vowelCount);

// function countVowel(str) {
//   let low = str.toLowerCase();
//   let count = low.split("");
//   for (let j in count) {
//     switch (count[j]) {
//       case "a":
//       case "e":
//       case "i":
//       case "o":
//       case "u":
//         break;
//       default:
//         delete count[j];
//         continue;
//     }
//   }
//   return count.length;
// }
// const ay = "kanchan Malviya";
// const yy = countVowel(ay);
// console.log(yy);

// let myName = "kanchan";
// let mynewName = myName.split(" ");
// let cap = mynewName.map(
//   (char) => char.charAt(0).toUpperCase() + char.slice(1).toLowerCase()
// );

// const result = cap.join(" ");

// console.log(result);

//Remove Whitespace:
// Write a function that takes a string as input and returns the same string with all leading and trailing
// whitespace removed.For example, if the input is " hello world ", the output should be "hello world".

// function trimFun() {
//   var fullName = " kanchan Malviya ";
//   console.log(fullName.trim());
// }
// trimFun();

// Count Occurrences of a Substring:
//Write a function that takes two strings as input: the main string and the substring to search for.
//The function should return the number of occurrences of the substring in the main string.For example,
//if the main string is "abababab" and the substring is "ab", the output should be 4.

// closure

// function fun2() {
//   setTimeout(() => {
//     console.log("helloworld");
//   }, 5000);
// }

// function fun1() {
//   console.log("Hello Javascript");
//   fun2();

//   console.log("Hello Closures");
// }
// fun1();

//  json method and its types
const person = {
  name: "John",
  age: 25,
  isStudent: true,
};
const jsonString = JSON.stringify(person);
console.log(jsonString, "json stringify");
console.log(person, "normal json");
