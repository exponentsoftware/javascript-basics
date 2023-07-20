// comments

/* this is a paragraph
of comment
this is multline
*/

// Datatypes

// String

var name = "Uday";
console.log(name);

var rocky = "dog";
console.log(rocky);

// Numbers

var math_score = 45;

var total = 50;

console.log((math_score / total) * 100);
console.log(typeof name);
console.log(typeof math_score);

console.log(2 + 2);
console.log("2" + "2");

console.log(2 + "2");
console.log(2 + "2" + 2);

// '22' + 2 = '222'
console.log(2 + 2 + "2");

// Boolean - true/false

var string1 = "test@gmail.com";
var string2 = "test.com";

var num1 = 20;
var stringnum1 = "20";
console.log(num1 == 20);
console.log(stringnum1 === 20);

// Arrays

var array1 = [23, 34, 4, 56, 20];
var names = ["Uday", "Utpal", "Shubham", "Dwarka"];
console.log(names[3]);
console.log(array1[2]);
array1.fill(10);
console.log(array1);

// Objects

var students = {
  uday: "salla",
  utpal: "kant",
  shubham: "kumar",
  dwarka: "rakkasi"
};

console.log(students.shubham);

var diff = [1, "as", ["he", "man"], { cat: "meow" }];

var obj = {
  hey: [1, 2, 3, 4, 5]
};

console.log(obj.hey[0]);

// Conditions

var num = 35;

if (num % 2 === 0) {
  console.log("Number is even");
} else {
  console.log("Number is odd");
}

// For loop

var numbers = [3, 21, 23, 45, 65, 34, 67];

for (var i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Function

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(3, 4));
console.log(add(45, 423));

function isEven(num) {
  if (num % 2 === 0) {
    console.log("Number is even");
  } else {
    console.log("Number is odd");
  }
}

isEven(32);
isEven(451);

