// nullish colescing operator (??) made for checking null or undefined values
// The nullish coalescing operator (??) is used to provide a default value when dealing with null or undefined values. It allows you to set a fallback value if the left-hand side expression evaluates to null or undefined.
let userAge = 5 ?? 10;
console.log(userAge); // Output: 5

let userName = null ?? "Guest";
console.log(userName); // Output: "Guest"