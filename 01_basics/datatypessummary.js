// Primitive Data Types

let name = "John Doe"; // String
let age = 30; // Number
let isEmployed = true; // Boolean
let address = null; // Null
let undefinedValue; // Undefined
let symbolValue = Symbol("unique"); // Symbol
let bigIntValue = BigInt(123456789012345678901234567890); /*OR*/ 53748645723752344534n; // BigInt




// Non-Primitive (Reference) Data Types

let hobbies = ["reading", "traveling", "cooking"]; // Array
let addressObject = { // Object
  street: "123 Main St",
  city: "New York",
  zipCode: "10001"
};
let myFynction = function() { // Function
  console.log("Hello, World!");
}

console.log(typeof hobbies); // Output: object (arrays are objects in JavaScript)
console.log(typeof addressObject); // Output: object
console.log(typeof myFynction); // Output: function (functions are also objects in JavaScript)
console.log(typeof addressObject.street); // Output: string



/* ****************************Heap vs Stack**************************** */

// Stack: Primitive data types (stored directly in the stack)
// Heap: Non-primitive data types (stored in the heap, with a reference in the stack)

// Example of stack and heap memory allocation
let x = 10; // Primitive data type (number) stored in stack
let y = x; // Copy of x, stored in stack

y = 11;
console.log(y); // Output: 11
console.log(x); // Output: 10 (x remains unchanged)


// Example of heap memory allocation
let object1 = { name: "John" }; // Non-primitive data type (object) stored in heap
let object2 = object1; // Reference to the same object in heap

object2.name = "Jane";
console.log(object2.name); // Output: Jane
console.log(object1.name); // Output: Jane (object1 is also changed because object2 references the same object in heap)
// Note: In JavaScript, objects and arrays are reference types, while strings, numbers, booleans, null, undefined, and symbols are primitive
