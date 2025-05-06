const fullName = "John Doe";
let age = 30;
var location = "New York";

// fullName = "Jane Doe"; // This will throw an error because fullName is a constant
age = 31; // This is allowed because age is a variable declared with let
location = "Los Angeles"; // This is allowed because location is a variable declared with var

console.log(fullName); // Output: John Doe
console.log(age); // Output: 31
console.log(location); // Output: Los Angeles
// The difference between var, let, and const is in their scope and reassignability

console.table([fullName, age, location]); // Displaying the variables in a table format
console.log(`Name: ${fullName}, Age: ${age}, Location: ${location}`); // Using template literals for string interpolation