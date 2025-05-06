let fullName = "John Doe"; // String

let age = 30; // Number

let isEmployed = true; // Boolean (true or false)

let hobbies = ["reading", "traveling", "cooking"]; // Array

let address = { // Object
  street: "123 Main St",
  city: "New York",
  zipCode: "10001"
};

let nullValue = null; // Null (object type in JavaScript)

let undefinedValue; // Undefined

let symbolValue = Symbol("unique"); // Symbol


console.log(fullName, typeof fullName); // Output: string
console.log(age, typeof age); // Output: number
console.log(isEmployed,typeof isEmployed); // Output: boolean
console.log(hobbies, typeof hobbies); // Output: object (arrays are objects in JavaScript)
console.log(address, typeof address); // Output: object
console.log(nullValue, typeof nullValue); // Output: object (this is a known quirk in JavaScript)
console.log(undefinedValue, typeof undefinedValue); // Output: undefined
console.log(symbolValue, typeof symbolValue); // Output: symbol

