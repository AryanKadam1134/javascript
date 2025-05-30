//Functions

function sayMyName() {
    console.log("My name is John Doe");
}
sayMyName();


// Function to add two numbers by console logging the result
// This function takes two parameters, a and b, and logs their sum to the console

function addTwoNumbers(a, b) {
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
}
addTwoNumbers(5, 10); // Output: The sum of 5 and 10 is 15 (calling the function with arguments 5 and 10)



// Function to add two numbers and return the result
// This function takes two parameters, a and b, and returns their sum

function addTwoNumbersAndReturn(a, b) {
    return `The sum of ${a} and ${b} is ${a + b}`; // Returns the sum of a and b
}
console.log(addTwoNumbersAndReturn(5, 10)); // Output: 15 (calling the function with arguments 5 and 10 and logging the result)






// Function for logged in user

function justLoggedIn(username) {
    if (username === undefined || username === null || username === "") {
        return `username is incorrect, please enter again`; // Returns a message if no username is provided
    }
    return `${username} just logged in`;
}
console.log(justLoggedIn("")); // Output: John Doe just logged in (calling the function with argument "John Doe")

                                                    /* OR */

function justLoggedIn(username) {
    if (!username) {
        return `username is incorrect, please enter again`; // Returns a message if no username is provided
    }
    return `${username} just logged in`;
}
console.log(justLoggedIn("John Doe")); // Output: John Doe just logged in (calling the function with argument "John Doe")


// Function to return a value based on a condition

function justLoggedIn(username = "Guest") {
    if (!username) {
        return `username is incorrect, please enter again`; // Returns a message if no username is provided
    }
    return `${username} jsut logged in`; // Returns a message with the provided username
}
console.log(justLoggedIn("Aryan"));






// Function to return multiple values using Rest Operator
// This function takes a variable number of arguments and returns them as an array

function returnMultipleValues(...values) {
    return values
}
console.log(returnMultipleValues(1, 2, 3, 4, 5)); // Output: [1, 2, 3, 4, 5] (calling the function with multiple arguments and logging the result)


function multipleValues(num1, num2, ...values) {
    return `first value is ${num1}, second value is ${num2}, and the rest are ${values}`; // Returns the first two values and the rest as an array
}
console.log(multipleValues(1, 2, 3, 4, 5)); // Output: 1, 2, [3, 4, 5] (calling the function with multiple arguments and logging the result)



// Function to return values oof object

const user = {
    name: "John Doe",
    age: 30,
}

function handleObject(anyObject) {
    return `The Username is ${anyObject.name} and the age is ${anyObject.age}`; // Returns the name property of the passed object
}
console.log(handleObject(user)); /* OR */ console.log(handleObject({ name: "Jane Doe", age: 25 })); // Output: The Username is John Doe and the age is 30 (calling the function with an object as argument)
// Output: The Username is Jane Doe and the age is 25 (calling the function with an object as argument)





// Function to return second value from an array

function returnSecondValue(anyArray) {
    return anyArray[1]; // Returns the second element of the passed array
}
console.log(returnSecondValue([1, 2, 3, 4, 5])); // Output: 2 (calling the function with an array as argument)




// Function to return first character of a string

function returnMyValue(name) {
    return name[2]; // Returns the first character of the string passed as an array
}
console.log(returnMyValue("Hello"));





// Function to print user details from an object

const anyUser = {
    username : "John Doe",
    age : 30,
    selling : "Laptop",
    price : 50000,
    isAvailable : true,
}

function printUserDetails(anyObject) {
    return `${anyObject.username} is selling a ${anyObject.selling} for ${anyObject.price} and is available: ${anyObject.isAvailable}`; // Returns a formatted string with the properties of the passed object`;
}
console.log(printUserDetails(anyUser))