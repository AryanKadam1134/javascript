// reverse a string

function reverseString(str) {
    return str.split('').reverse().join('');
}
// console.log(reverseString("hello")); // Output: "olleh"


// Reverse a string
// function reversedString(str) {
//     let reversedStr = "";
//     for (let i = str.length -1; i>=0; i--) {
//         reversedStr += str[i];
//     }
//     return reversedStr;
// }
// console.log(reversedString("hello")); // Output: "olleh"


// Reverse a string without function
// let str = "Aryan";
// let reversedString = "";
// for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
// }
// console.log(reversedString); // Output: Reversed string


// Check if it is a palindrome
let str = "Aryan";
let reversedString = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
}
if (reversedString != str) {
    console.log("The string is not a palindrome");
} else {
    console.log("The string is a palindrome");
}
console.log(reversedString); // Output: Reversed string


// to print fibonacci series
function fibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// explanation:
// The fibonacci function generates the Fibonacci series up to the nth number. 
// It initializes an array fib with the first two Fibonacci numbers (0 and 1) and then uses a for loop to calculate the subsequent numbers by adding the two preceding numbers. The result is an array containing the Fibonacci series up to the specified length n.
// The console.log(fibonacci(10)) statement calls the fibonacci function with n = 10, which generates the first 10 numbers of the Fibonacci series and prints them to the console.




// let a = 0;
// let b = 1;

// for (let i=0; i<=10; i++) {
//     console.log(a);
//     let c = a + b;
//     a = b;
//     b = c;   
// }

function fibonacciSeries(n) {
	let a = 0;
	let b = 1;
	for (let i=0; i<=n; i++) {
		console.log(a);
		let c = a + b;
		a = b;
		b = c;
	}
}
fibonacciSeries(10); // Output: Fibonacci series up to the 10th number
