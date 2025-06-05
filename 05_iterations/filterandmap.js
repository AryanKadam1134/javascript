// filter
// it doesn't return values, we have to assign it to a variable

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const print = myArray.filter( (val) => {
    return val > 5;
} );

console.log(print); // Output: [6, 7, 8, 9, 10]


myArray.filter( (val) => {
    console.log(val > 5)
} ); // Output: false, false, false, false, false, true, true, true, true, true


// Practice with filter
// Accessing an array of objects and filtering based on a condition
const myObjects = [
    { book: "Harry Potter", author: "J.K. Rowling", year: 1997 },
    { book: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { book: "1984", author: "George Orwell", year: 1949 },
    { book: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { book: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
]

const filterBooks = myObjects.filter( (books) => {
	return books.year > 1950 && books.author === "J.K. Rowling";
} )

console.log(filterBooks);


// Map
const newArray = myArray.map( (val) => {
    return val * 2; // This will return a new array with each value multiplied by 2
} )

console.log(newArray); // Output: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


// Chaining filter and map
const chainedResult = myArray
    .filter( (val) => val > 5 ) // First filter to get values greater than 5
    .map( (val) => val * 2 ); // Then map to double those values 

console.log(chainedResult); // Output: [12, 14, 16, 18, 20]