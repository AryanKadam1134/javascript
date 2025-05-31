// for each loop

const myArray = ["IronMan", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];

myArray.forEach( function (val) {
    console.log(val); // Output: IronMan, Captain America, Thor, Hulk, Black Widow, Hawkeye
});

myArray.forEach( (val, index) => {
    console.log(`${index}: ${val}`); // Output: 0: IronMan, 1: Captain America, 2: Thor, 3: Hulk, 4: Black Widow, 5: Hawkeye
});

myArray.forEach( (val, index, array) => {
    console.log(`${index}: ${val}: ${array}`); // Output: 0: IronMan - Array Length: 6, etc.
});

function printValue(val, index, array) {
    console.log(`${index}: ${val}: ${array}`); // Output: 0: IronMan - Array Length: 6, etc.
}

myArray.forEach(printValue); // Using a named function to print values


// for each loop for array of objects

const users = [
    { name: "Aryan", age: 20 },
    { name: "Raj", age: 22 },
    { name: "Vansh", age: 21 }
];

users.forEach( (user, index) => {
    console.log(`${index}: Name: ${user.name}, Age: ${user.age}`); // Output: 0: Name: Aryan, Age: 20, etc.
});
