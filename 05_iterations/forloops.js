// for-loop

// for-loop to print numbers from 0 to 10
for (let i = 0; i <= 10; i++) {
    // console.log(i);
}


// for-loop to print multiplication tables from 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(`Table of ${i}:`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}


// for loop to iterate over an array
const myArray = ["IronMan", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];

for (let i = 0; i < myArray.length; i++) {
	// console.log(myArray[i]);
}


// for loop to reverse iterate over an array
const myArray1 = ["IronMan", "Captain America", "Thor", "Hulk", "Black Widow", "Hawkeye"];
const myArray2 = [];

for (let i = myArray1.length - 1; i >= 0; i--) {
	// console.log(myArray1[i]);
    myArray2.push(myArray1[i]);
}
// console.log(myArray2); // Output: ["Hawkeye", "Black Widow", "Hulk", "Thor", "Captain America", "IronMan"]


// break and continue in for loop
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Detected no. 5");
        break
    }
    console.log(i);
}

for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        console.log("Detected no. 5");
        continue // Skips the rest of the loop iteration when i is 5
    }
    console.log(i);
}



// let str = "Aryan";
// let str1 = "Kadam";
// let array = [];
// array.push(str, str1);
// console.log(array); // Output: ["Aryan"]