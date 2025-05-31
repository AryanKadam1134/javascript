// for of loop
// for of loop always takes the value of the iterable object, not the index.

const myArray = ["IronMan", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];
for (let val of myArray) {
    console.log(val);
}


const str = "Hello World!";
let reversedStr = "";
for (let val of str) {
    if (val === ' ') continue; // Skip spaces
    console.log(val); 
}



// map method
let map = new Map();
map.set("1","Aryan");
map.set("2","Raj");
map.set("3","Vansh");

console.log(map); // Output: Map(3) { '1' => 'Aryan', '2' => 'Raj', '3' => 'Vansh' }
console.log(map.get("1")); // Output: Aryan

for (let [key, value] of map) {
    console.log(`${key} : ${value}`); // Output: [ '1', 'Aryan' ] [ '2', 'Raj' ] [ '3', 'Vansh' ]
}



// for of loop on objects
const myObject = {
    name: "Aryan",
    age: 20,
    city: "Pune"
};

for (let [key, value] of myObject) {
    console.log(key, value); // This will throw an error because objects are not iterable
}

// Note: both array and objects have key and value pairs, but arrays are iterable while objects are not.
// To iterate over an object, you can use Object.entries() or Object.keys() or Object.values()
// Example using Object.entries():
for (let [key, value] of Object.entries(myObject)) {
    console.log(`${key}: ${value}`); // Output: name: Aryan, age: 20, city: Pune
}