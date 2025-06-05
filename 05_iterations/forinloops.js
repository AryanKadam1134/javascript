// for in loop
// The for-in loop is used to iterate over the properties of an object.

const myObject = {
    name: "Aryan",
    age: 20,
    city: "Pune"
};

for (let key in myObject) {
    console.log(key); // Output: name, age, city
}
for (let key in myObject) {
    console.log(myObject[key]); // Output: Aryan, 20, Pune
}
for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`); // Output: name: Aryan, age: 20, city: Pune
}


const myArray = ["IronMan", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];
for (let index in myArray) {
    console.log(myArray[index]); // Output: 0, 1, 2, 3, 4, 5
}