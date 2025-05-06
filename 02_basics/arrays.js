//arrays 

const myArray = [1, 2, 3, 4, 5]; // Array
// console.log(typeof myArray, myArray); // Output: [1, 2, 3, 4, 5] object
// console.log(myArray.length); // Output: 5 (length of the array)
// console.log(myArray[3]); // Output: 4 (element at index 3)
// console.log(myArray.indexOf(3)); // Output: 2 (index of the first occurrence of 3)

// myArray.push(6)
// console.log(myArray); // Output: 6 (adds 6 to the end of the array)


const arr1 = [1, 2, 3, 4, 5]; // Array
const arr2 = [6, 7, 8, 9, 10]; // Array

console.log(arr1.join()); // Output: "1,2,3,4,5" (joins the elements of arr1 into a string)

console.log(arr1.slice(1, 3)); // Output: [2, 3] (slices the array from index 1 to 3)
console.log(arr1.splice(1, 3)); // Output: [2, 3] (removes elements from index 1 to 3 and returns them)
console.log(arr1); // Output: [1, 5] (arr1 is modified after splice)