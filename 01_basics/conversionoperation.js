/*

let a = 11;
let b = "33"; // String
console.log(a, typeof a); // Output: 33 number
console.log(b, typeof b); // Output: 33 string

let valueInNumber = Number(b); // Convert string to number
console.log(valueInNumber, typeof valueInNumber); // Output: 33 number



// Converting string to number (22abc)
// Note: In JavaScript, when a string contains non-numeric characters, it cannot be converted to a number. The result will be NaN (Not-a-Number).
let c = "22abc";
console.log(c, typeof c); // Output: 22abc string
let valueInNumber2 = Number(c); // Convert string to number
console.log(valueInNumber2, typeof valueInNumber2); // Output: NaN number



// Converting null to number
// Note: In JavaScript, null is considered an object type, but when converted to a number, it becomes 0.
let d = null;
console.log(d, typeof d); // Output: null object
let valueInNumber3 = Number(d); // Convert null to number
console.log(valueInNumber3, typeof valueInNumber3); // Output: 0 number



// Converting undefined to number
// Note: In JavaScript, undefined is a special type that represents an uninitialized variable. When converted to a number, it becomes NaN.
let e = undefined;
console.log(e, typeof e); // Output: undefined undefined
let valueInNumber4 = Number(e); // Convert undefined to number
console.log(valueInNumber4, typeof valueInNumber4); // Output: NaN number



// Converting boolean to number
// Note: In JavaScript, true is converted to 1 and false is converted to 0 when converted to a number.
let f = true;
console.log(f, typeof f); // Output: true boolean
let valueInNumber5 = Number(f); // Convert boolean to number
console.log(valueInNumber5, typeof valueInNumber5); // Output: 1 number

let g = false;
console.log(g, typeof g); // Output: false boolean
let valueInNumber6 = Number(g); // Convert boolean to number
console.log(valueInNumber6, typeof valueInNumber6); // Output: 0 number



// Converting array to number
// Note: In JavaScript, when an array is converted to a number, it is first converted to a string and then to a number. If the array is empty, it becomes 0.
let h = [1, 2, 3]; // Array
console.log(h, typeof h); // Output: 1,2,3 object
let valueInNumber7 = Number(h); // Convert array to number
console.log(valueInNumber7, typeof valueInNumber7); // Output: NaN number



// Converting object to number
// Note: In JavaScript, when an object is converted to a number, it is first converted to a string and then to a number. If the object has no numeric value, it becomes NaN.
let i = { name: "John", age: 30 }; // Object
console.log(i, typeof i); // Output: [object Object] object
let valueInNumber8 = Number(i); // Convert object to number
console.log(valueInNumber8, typeof valueInNumber8); // Output: NaN number



// Converting number to boolean
// Note: In JavaScript, any non-zero number is considered true, and 0 is considered false.
let j = 0; // Number
console.log(j, typeof j); // Output: 0 number
let valueInBoolean = Boolean(j); // Convert number to boolean
console.log(valueInBoolean, typeof valueInBoolean); // Output: false boolean



// Converting string to boolean
// Note: In JavaScript, any non-empty string is considered true, and an empty string is considered false.
let k = ""; // String
console.log(k, typeof k); // Output:  string
let valueInBoolean2 = Boolean(k); // Convert string to boolean
console.log(valueInBoolean2, typeof valueInBoolean2); // Output: false boolean



// Converting null to boolean
// Note: In JavaScript, null is considered false when converted to a boolean.
let l = null; // Null
console.log(l, typeof l); // Output: null object
let valueInBoolean3 = Boolean(l); // Convert null to boolean
console.log(valueInBoolean3, typeof valueInBoolean3); // Output: false boolean



// Converting undefined to boolean
// Note: In JavaScript, undefined is considered false when converted to a boolean.
let m = undefined; // Undefined
console.log(m, typeof m); // Output: undefined undefined
let valueInBoolean4 = Boolean(m); // Convert undefined to boolean
console.log(valueInBoolean4, typeof valueInBoolean4); // Output: false boolean



// Converting boolean to string
// Note: In JavaScript, true is converted to "true" and false is converted to "false" when converted to a string.
let n = true; // Boolean
console.log(n, typeof n); // Output: true boolean
let valueInString = String(n); // Convert boolean to string
console.log(valueInString, typeof valueInString); // Output: "true" string



// Converting number to string
// Note: In JavaScript, a number is converted to a string by calling the String() function or using template literals.
// let o = 123; // Number
// console.log(o, typeof o); // Output: 123 number
// let valueInString2 = String(o); // Convert number to string
// console.log(valueInString2, typeof valueInString2); // Output: "123" string
// let valueInString3 = `${o}`; // Convert number to string using template literals
// console.log(valueInString3, typeof valueInString3); // Output: "123" string



// Converting array to string
// Note: In JavaScript, an array is converted to a string by calling the toString() method or using the String() function.
let p = [1, 2, 3]; // Array
console.log(p, typeof p); // Output: 1,2,3 object
let valueInString4 = String(p); // Convert array to string
console.log(valueInString4, typeof valueInString4); // Output: "1,2,3" string



// Converting object to string
// Note: In JavaScript, an object is converted to a string by calling the toString() method or using the String() function.
// If the object has a custom toString() method, that method will be called.
let q = { name: "John", age: 30 }; // Object
console.log(q, typeof q); // Output: [object Object] object
let valueInString5 = String(q); // Convert object to string
console.log(valueInString5, typeof valueInString5); // Output: "[object Object]" string

*/



/*******************Operations*******************/



// Arithmetic Operations
// Note: In JavaScript, arithmetic operations are performed using the +, -, *, /, and % operators.  
// The + operator is also used for string concatenation.
let num1 = 10;
let num2 = 5;
console.log(num1 + num2); // Output: 15 (addition)
console.log(num1 - num2); // Output: 5 (subtraction)
console.log(num1 * num2); // Output: 50 (multiplication)
console.log(num1 / num2); // Output: 2 (division)
console.log(num1 % num2); // Output: 0 (modulus)
console.log(num1 ** num2); // Output: 100000 (exponentiation)
console.log(num1 + " " + num2); // Output: 10 5 (string concatenation)
console.log(num1 + num2 + " " + num1); // Output: 15 10 (string concatenation with addition)



let str1 = "Hello";
let str2 = "World";
let str3 = "How are you?";
let str4 = str1 + str2;
console.log(str4); // Output: HelloWorld (string concatenation)
console.log(str1 + " " + str2); // Output: Hello World (string concatenation with space)
console.log(str1.concat(str2)); // Output: HelloWorld (string concatenation using concat method)
console.log(str1.concat(" ", str2)); // Output: HelloWorld (string concatenation using concat method with empty string)
console.log(str1.concat(" ", str2, ", ", str3)); // Output: HelloWorld (string concatenation using concat method with empty string and space)



console.log(2 + 2)
console.log(2 + "2")
console.log("2" + 2)
console.log("2" + 2 + 2)
console.log(2 + 2 + "2")
console.log(2 + "2" + 2)




// Comparison Operations
// Note: In JavaScript, comparison operations are performed using the ==, ===, !=, !==, >, <, >=, and <= operators.
// The == operator checks for equality, while the === operator checks for strict equality (including type).
// The != operator checks for inequality, while the !== operator checks for strict inequality (including type).
// The >, <, >=, and <= operators are used for greater than, less than, greater than or equal to, and less than or equal to comparisons.
let a = 10;
let b = 5; 
let c = "10";
let d = 10;
let e = 5;

console.log(a == b); // Output: false (10 is not equal to 5)
console.log(a == c); // Output: true (10 is equal to "10" when using ==)
console.log(a === c); // Output: false (10 is not equal to "10" when using ===)
console.log(a != b); // Output: true (10 is not equal to 5)
console.log(a != c); // Output: false (10 is equal to "10" when using !=)
console.log(a !== c); // Output: true (10 is not equal to "10" when using !==)
console.log(a > b); // Output: true (10 is greater than 5)
console.log(a < b); // Output: false (10 is not less than 5)
console.log(a >= b); // Output: true (10 is greater than or equal to 5)
console.log(a <= b); // Output: false (10 is not less than or equal to 5)
console.log(a == d); // Output: true (10 is equal to 10)
console.log(a === d); // Output: true (10 is equal to 10)


let o = 123; // Number
console.log(o, typeof o); // Output: 123 number
let valueInString2 = String(o); // Convert number to string
console.log(valueInString2, typeof valueInString2); // Output: "123" string
let valueInString3 = `${o}`; // Convert number to string using template literals
console.log(valueInString3, typeof valueInString3); // Output: "123" string