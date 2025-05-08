// singletome pattern

// const user = new Object(); // Creating an object using Object constructor
// console.log(user); // Output: {} (empty object)

const user = {}; // Creating an object using object literal syntax
user.name = "Aryan Kadam"; // Adding properties to the object
user.age = 21;
user.email = "aryan@gmail.com";
user.isLoggedIn = false;

// console.log(user); // Output: {name: "Aryan Kadam", age: 21, email: "


// Accessing properties using dot notation

const user1 = {
    id : 1,
    name : {
        userFullName : {
            userFirstName : "Aryan",
            userLastName : "Kadam",
        }
    }
}

// console.log(user1.name.userFullName.userFirstName); // Output: "Aryan" (accessing nested properties using dot notation)
// console.log(user1["name"]["userFullName"]["userFirstName"]); // Output: "Aryan" (accessing nested properties using bracket notation)



// merging objects

const obj1 = { 1 : "a", 2 : "b", 3 : "c" }; // Object1
const obj2 = { 4 : "d", 5 : "e", 6 : "f" }; // Object2
const obj3 = { 7 : "g", 8 : "h", 9 : "i" }; // Object3

// // const obj4 = {obj1, obj2, obj3}; // Merging objects using object literal syntax
// // console.log(obj4); // Output: {obj1: {…}, obj2: {…}, obj3: {…}} (merged object)

// console.log(Object.assign({}, obj1, obj2, obj3)); // {} is used to create a new object and merge obj1, obj2, and obj3 into it


const obj4 = {...obj1, ...obj2, ...obj3}; // Merging objects using spread operator
// console.log(obj4); // Output: {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h", 9: "i"} (merged object)


// Object to Array

const object = { name: "John", age: 30 }; // Object
// console.log(Array.isArray(object)); // Output: false (checks if object1 is an array)
// console.log(Object.entries(object)); // Output: [["name", "John"], ["age", 30]] (converts object to array of key-value pairs)
// console.log(Object.keys(object)); // Output: ["name", "age"] (gets the keys of the object)
// console.log(Object.values(object)); // Output: ["John", 30] (gets the values of the object)


const arrayOfObjects = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 }
]

// console.log(arrayOfObjects); // Output: [{name: "John", age: 30}, {name: "Jane", age: 25}, {name: "Jim", age: 35}] (array of objects)
// console.log(arrayOfObjects[1].name); // Output: "Jane" (accessing property of the second object in the array)



// **************Destructuring the Objects**************

const course = { 
    name: "JavaScript",
    price: 199,
    description: "Learn JavaScript from scratch",
    instructor: {
        name: "John Doe",
        age: 30,
    }
}

console.log(course.name); // Output: "JavaScript" (accessing property using dot notation)
console.log(course.instructor.name); // Output: "John Doe" (accessing nested property using dot notation)

const {name, price, description, instructor} = course;

console.log(name); // Output: "JavaScript" (destructuring the object to get the name property)
console.log(price); // Output: 199 (destructuring the object to get the price property)
console.log(instructor);

const {name: instructorName, age: instructorAge} = course.instructor; // Destructuring nested object
console.log(instructorName); // Output: "John Doe" (destructuring the nested object to get the name property)
