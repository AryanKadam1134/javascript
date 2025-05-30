// this in objects

const obj = {
    username : "JohnDoe",
    age : 30,
    greeting : function(welcome) {
        return `Welcome ${this.username}, you are ${this.age} years old.`;
    }
}
console.log(obj); // Output: {username: "JohnDoe", age: 30, greeting: ƒ}
console.log(obj.greeting()); // Output: "Welcome JohnDoe, you are 30 years old." (calling the greeting function using this keyword)





// Different ways to write functions in JavaScript

// 1. Function Declaration
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice")); // Output: "Hello, Alice!" (calling the function with argument "Alice")

// 2. Function Expression
const greetExpression = function(name) {
    return `Hello, ${name}!`;
};
console.log(greetExpression("Bob")); // Output: "Hello, Bob!" (calling the function expression with argument "Bob")

// 3. Arrow Function
const greetArrow = (name) => {
    return `Hello, ${name}!`;
};
console.log(greetArrow("Charlie")); // Output: "Hello, Charlie!" (calling the arrow function with argument "Charlie")

// 4. Shorter Arrow Function (implicit return)
const greetShortArrow = name => `Hello, ${name}!`;
console.log(greetShortArrow("Dave")); // Output: "Hello, Dave!" (calling the shorter arrow function with argument "Dave")

// 5. Immediately Invoked Function Expression (IIFE)
( function myName(name) {
    console.log(`Hello, ${name}!`);
})("Aryan"); // Output: "Hello, Aryan!" (calling the IIFE with argument "Aryan")

( () => {
    console.log("This is an immediately invoked function expression (IIFE).");
})();

( (name) => {
    console.log(`Hello, ${name}!`);
})("Aryan"); // Output: "Welcome, Aryan!" (calling the IIFE with argument "Aryan")

// 6. Arrow Function with Parameters
const myName = ( (name) => {
    return `Hello, ${name}!`;
})("Aryan");
console.log(myName); // Output: "Hello, Aryan!" (calling the arrow function with argument "Aryan")








const addTwoNumbers = (a, b) => {
    return a + b;
}
console.log(addTwoNumbers(5, 10)); // Output: 15 (calling the arrow function with two arguments)








// 1.
function getUsersname(name) {
    return `1. Your Username is ${name}`;
}
console.log(getUsersname("Aryan"));


// 2.
function getUsername(name) {
    console.log(`2. Your Username is ${name}`);
}
getUsername("Aryan");


// 3.
const getUserName = function(name) {
    return `3. Your Username is ${name}`;
}
console.log(getUserName("Aryan"));


// 4. 
const getUserName1 = function(name) {
    console.log(`4. Your Username is ${name}`)
}
getUserName1("Aryan");


// 5.
const getUserName2 = (name) => {
    return `5. Your Username is ${name}`;
}
console.log(getUserName2("Aryan"));


// 6.
const getUserName3 = (name) => {
    console.log(`6. Your Username is ${name}`);
}
getUserName3("Aryan");


// 7.
const getUserName4 = name => `7. Your Username is ${name}`;
console.log(getUserName4("Aryan"));


// 8. 
const getUserName5 = name => console.log(`8. Your Username is ${name}`);
getUserName5("Aryan");


// 9.
( function getUsername(name) {
    console.log(`9. Your Username is ${name}`);
})("Aryan");


// 10.
( () => {
    console.log(`10. Your Username is Aryan`);
})();


// 11.
( (name) => {
    console.log(`11. Your Uername is ${name}`);
})("Aryan");

console.log(this)