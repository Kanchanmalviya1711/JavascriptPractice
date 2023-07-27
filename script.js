console.log("Learning Js");

var a = 34;
a += 1;
a++; //operator
//console.log(a);

//for loop

for (let i = 0; i < 5; i++) {
  // decleration, condition, increment/decrement
  // console.log(i);
}
//while loop
let j = 2; //decleration
while (j > 0) {
  //condition
  //console.log(j);
  j--; //increment/decrement
}

//do/while loop
let k = 100; //decleration

do {
  // console.log(k);
  k--; //increment/decrement
} while (k > 0); //condition

//break and continue statements in loops

for (let i = 0; i < 100; i++) {
  if (i === 33) {
    break;
  }
  //console.log(i);
}

//continue statement in loops
for (let i = 0; i < 50; i++) {
  if (i === 33) {
    i += 1; // continue by 1-32 and 35-49
    continue;
  }
  //console.log(i);
}

//forEach loops

var arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i <= arry.length; i++) {
  // if we remove undefined in  last print we can not apply "=" in the condition
  const res = arry[i];
  if (res === undefined) {
    continue;
  }
  //console.log(res);
}

arry.forEach(function (item, index) {
  //console.log(item, index);
});

//for in loop
const obj = {
  name: "kanchan",
  age: 20,
  hobby: "coding",
  address: "bhopal",
};
for (const key in obj) {
  // console.log(`${key}:${obj[key]}`);
}

//for of loop
const arr = [1, 4, 7, 9, 0];
for (const item of arr) {
  //console.log(item);
}

//quetions of loops
//1.Write a JavaScript for loop that prints the numbers from 1 to 10

for (var num = 1; num <= 10; num++) {
  //console.log(num);
}

//2.Write a JavaScript while loop that prints the even numbers from 2 to 10
let i = 2;
while (i <= 10) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}
//3.Write a JavaScript for loop that calculates the sum of all numbers from 1 to 100
var sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log(sum);

//4.Write a JavaScript for loop that prints the multiplication table of a given number. For example, if the number is 5, the output should be

for (let i = 1; i <= 10; i++) {
  const tableOf = 5;
  console.log(`${tableOf}*${i}=${tableOf * i}`);
}

//5.Write a JavaScript for loop that prints the Fibonacci sequence up to a given number of terms. For example, if the number of terms is 8, the output should be: 0, 1, 1, 2, 3, 5, 8, 13
let terms = 8;
let a = -1;
let b = 1;
let c;
for (let i = 1; i <= 8; i++) {
  c = a + b;
  a = b;
  b = c;
  console.log(c);
}

//6.Write a JavaScript for loop that prints the following pattern:
//output
// *
// **
// ***
// ****
// *****

let term = "*";
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    if (j <= i) {
      row += term + " ";
    } else {
      row += " ";
    }
  }

  console.log(row);
}

//7.Write a JavaScript for loop that iterates over an object and prints its key-value pairs. For example, if the object is { name: 'John', age: 25, city: 'New York' }, the output should be
const objs = {
  name: "John",
  age: 25,
  city: "New York",
};
for (var key in objs) {
  //console.log(`Key:${key}, Value:${obj[key]}`);
}

//8.Write a JavaScript for loop that iterates over an array of strings and concatenates them into a single string

// const abc = ["a", "b", "c", "d", "e"];
// for (let i = 0; i < abc.length; i++) {
//   console.log(`${abc[i]}`);
// }
