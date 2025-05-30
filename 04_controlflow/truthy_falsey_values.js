// consider an if-else statement
const userLoginId = "aryan@gmail.com";

if (userLoginId) {
  console.log("User is logged in");
} else {
  console.log("User is not logged in");
}

// In this case, the if condition checks if userLoginId is truthy. Since a non-empty string is considered truthy in JavaScript, the output will be "User is logged in".
// If userLoginId were an empty string (""), the output would be "User is not logged in" because an empty string is considered falsy in JavaScript.

// Truthy and Falsy values in JavaScript
// Truthy values are values that evaluate to true in a boolean context, while falsy values evaluate to false. Here are some common examples:
const truthyValues = [
  true,                // Boolean true
  1,                   // Non-zero number
  "Hello",            // Non-empty string
  [],                  // Non-empty array
  {},                  // Non-empty object
  function() {},      // Function
  Infinity,           // Positive infinity
  -Infinity,          // Negative infinity
];

const falsyValues = [
  false,              // Boolean false
  0,                  // Zero
  "",                 // Empty string
  null,               // Null value
  undefined,          // Undefined value
  NaN,                // Not-a-Number
  0n,                 // BigInt zero
];
