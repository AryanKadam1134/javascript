// Objects

const mySym = Symbol("Key1")
const user = {
    name : "Aryan Kadam",
    "full name" : "Aryan Rajaram Kadam",
    age : 21,
    email : "aryan@gmail.com",
    isLoggedIn : false,
    lastLoggedIn : ["Monday", "Friday"],
    [mySym] : "Value1", // Computed property name using variable
}

// console.log(user); // Output: {name: "Aryan Kadam", age: 21, email: 
// console.log(user.name); // Output: "Aryan Kadam" (accessing property using dot notation)
// console.log(user["name"]); // Output: "Aryan Kadam" (accessing property using bracket notation)

// console.log(user["full name"]); // Output: "Aryan Rajaram Kadam" (accessing property with space in name using bracket notation)

// console.log(typeof user[mySym], user[mySym ]); // Output: 21 (accessing property using dot notation)

// user.email = "aryankadam@gmail.com"; // Updating property value
// Object.freeze(user); // Freezes the object, preventing further modifications
// user.email = "aryankadam1134@gmail.com"; // Attempting to update property value after freezing (will not work)
// console.log(user.email);


//functions in object

user.grettings = function() {
    console.log(`Welcome, ${this.name}`); // Output: "Welcome, Aryan Kadam" (using
}

user.grettings(); // Output: "Hello Aryan Kadam" (calling the function)