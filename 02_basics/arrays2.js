const marvelHeros = ["Iron Man", "Thor", "Hulk", "Black Widow", "Captain America"];
const dcHeros = ["Superman", "Batman", "Wonder Woman", "Aquaman", "Flash"];

// marvelHeros.push(dcHeros); // Adds dcHeros to the end of marvelHeros
// console.log(marvelHeros); // Output
// marvelHeros.concat(dcHeros); // Concatenates dcHeros to marvelHeros
// console.log(marvelHeros.concat(dcHeros)) // Concatenates dcHeros to marvelHeros

// let allHeros = [...marvelHeros, ...dcHeros]; // Spread operator to combine arrays
// console.log(allHeros); // Output: ["

const arr1 = [1, 2, [3, 4], 5, [6, [7, 8]], 9]; // Array
// console.log(arr1); // Output: [1, 2, [3, 4], 5, [6, [7, 8]], 9] (original array)
// console.log(arr1.flat()); // Output: [1, 2, 3, 4, 5, 6, [7, 8], 9] (flattens the array by one level)
// console.log(arr1.flat(2)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] (flattens the array by two levels)
// console.log(arr1.flat(Infinity)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9] (flattens the array by all levels)


// String to Array
const name = "Aryan Kadam"; // String
// console.log(name); // Output: "Aryan Kadam" (original string)

// let stringToArray = Array(name); // Converts whole string to array
// console.log(stringToArray);

// console.log(Array.isArray(name)); // Output: false (checks if name is an array)
// console.log(Array.from(name)); // Output: ["A", "r", "y", "a", "n", " ", "K", "a", "d", "a", "m"] (converts each element of string to array)

// Object to Array
const object1 = { name: "John", age: 30 }; // Object
// console.log(Array.isArray(object1)); // Output: false (checks if object1 is an array)
// console.log(Array.from(object1)); // Output: [object Object] (converts object to array, but not recommended)
// console.log(Object.entries(object1)); // Output: [["name", "John"], ["age", 30]] (converts object to array of key-value pairs)

// Multiple Variables to Array
const a = 1; // Number
const b = 2; // Number
const c = 3; // Number
console.log(a, b, c); // Output: 1 2 3 (multiple variables)
console.log(Array.of(a, b, c)); // Output: [1, 2, 3] (creates an array from multiple variables)


