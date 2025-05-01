// const student = {
//     fullName : "Aryan Kadam",
//     age : 20,
//     gender : "Male",
//     college : "SSPM",
//     grade : 70,
// }

// console.log(student)
// console.log(student.fullName)

// const group ={
//     fullName : "Tony Stark",
//     age : 34,   
// }

// student.fullName = "Tony Stark";
// console.log(student);
// console.log(group);


// alert("Hello!");

//Arithematic
// let a,b;
// a = 5;
// b = 2;
// console.log("a + 1 =", ++a);

//Assignment
// let a,b;
// a = 5;
// b = 3;

// console.log(a>=b  && a!=b)

//Conditional Statements
// let mode, colour;

// mode = "light";

// if(mode === "dark"){
//     color = "dark";
// }
// else if(mode === "light"){
//     color = "white";
// }
// else {
//     color = null;
// }

// console.log(color);


// let age, result;

// age = 16;

// result = age<=18 ? "teenager" : "adult";
// console.log(result);



//if else - practice 1
// let num;

// num = prompt("Enter a number to check if it's a multiple of 5 or not : ");

// if(num%5 === 0){
//     console.log(num, "is Multiple of 5");
// } else {
//     console.log(num, "is not Multiple of 5");
// }



//if else practise - practice 2
// let num;

// num = prompt("Enter Score between (0-100): ");

// if(num>=80 && num<100){
//     console.log("A");
// } else if(num>=70 && num<80) {
//     console.log("B");
// } else if(num>=60 && num<70) {
//     console.log("C");
// } else if(num>=50 && num<60) {
//     console.log("D");
// } else if(num>=0 && num<50) {
//     console.log("F");
// }


//for - practise
// let i;
// i=1;
// for(i; i<=5; i++){
//     console.log(i);
// }


//for - practice 2   sum of numbers 1 to n
// let sum,i,n;
// sum=0;
// i=1;
// n = prompt("Enter a number: ");

// for(i; i<=n; i++){
//     sum=sum+i;
// }
// console.log("sum =",sum);



//while - practice
// let i,n,sum;
// sum=0;
// i=1;
// n = prompt("Enter a Number: ");
// while(i<=n){
//     sum=sum+i;
//     i++;
// }
// console.log("sum =",sum);


//do-while - practise
// let i,n,sum;
// i=1;
// sum=0;
// n = prompt("Enter a number: "); 
// do{
//     sum=sum+i;
//     i++;
// } while(i<=n);
// console.log("sum =",sum);



//for-of loop - practise (for string and arrays)
// let str,size;
// str = "Aryan Kadam";
// size = 0;
// for(i of str){
//     console.log(i);
//     size++;
// }
// console.log("string size is: " ,size);

//for-in loop practise (for objects)
// const student = {
//     fullName : "Aryan Kadam",
//     age : 20,
//     gender : "Male",
//     college : "SSPM",
//     grade : 70,
// }

// for(i in student){
//     console.log(i, student[i]);
// }



//String input
// let str;
// str = prompt("Enter Fullname: ");
// console.log(str);


//print even form 0-100
// let i,e;
// i=0;
// for(i; i<=100; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }



//print gamenum on guess using d0-while loop
// let gameNum,i;
// gameNum=45;

// do{
//     i=prompt("guess the no.: ");
//     if(i==gameNum){
//         console.log("congratulations!! you gussed the correct no. ",gameNum);
//         break;
//     } else {
//         console.log("try again!!");
//     }
// } while(i!==gameNum);


// Another Method
// let gameNum,i;
// gameNum=45;

// do{
//     i=prompt("guess the no.: ");
// } while(i!=gameNum);
// console.log("Congratulations, you guessed the correct no.",gameNum)



//print gamenum on guess using while loop
// let i,gameNum;
// gameNum = 56;
// i = prompt("Guess the correct number: ");

// while(i!=gameNum){
//     i = prompt("try again: ");
// }
// console.log("congratulation you guessed the correct number ", gameNum);



//string length
// let str = "Aryan Kadam";
// console.log(str.length);
// console.log(str[4]);



//template literal
// const obj ={
//     name : "Aryan Kadam",
//     age : 20,
//     cgpa : 7.55
// }
// let output = `My name is ${obj.name} of age ${obj.age} aquired ${obj.cgpa} cgpa`;
// console.log(output);



// methods
// let str = "Aryan Kadam ";
// let str1 = "form CSE(AIML)";
// let str2 = "Hello";
// console.log(str.toUpperCase()); //to Uppercase
// console.log(str1.slice(5,14)); //to slice
// console.log(str.concat(str1)); //to concat means to merge two strings
// console.log(str2.replace("lo","p")); //to replace (what, with)
// console.log(str2.replaceAll("l", "p")); //to replace all
// console.log(str[3]); //
// console.log(str.charAt(3));
// str = str[0] + "w" + str.slice(1);
// console.log(str);



// practise
// let str, str1;
// str = prompt("Enter Your Name: ");
// str = str.replaceAll(" ", "");
// str1 = "@" + str.toLowerCase() + str.length;
// console.log("Your Username is =",str1);
// alert(`Suggested Password is: ${str1}`);



// Looping arrays

// For loop to print all values
// let arr = ["Aryan", "Raj", "Suyog", "Vansh", "Faiz", "Vitthal", "Niraj"];
// let i = 0;

// for(i ; i<arr.length ; i++){
//     console.log(arr[i]);
// }

// for-of loop (is used to fetch value)
// let arr = ["Aryan", "Raj", "Suyog", "Vansh", "Faiz", "Vitthal", "Niraj"];

// for(let i of arr){
//     console.log(i);
// }

// for-in loop (is used to fetch length)
// let arr = ["Aryan", "Raj", "Suyog", "Vansh", "Faiz", "Vitthal", "Niraj"];

// for(let i in arr){
//     console.log(i, arr[i]);
// }

// let str,size;
// str = "Aryan Kadam";
// for(i in str){
//     console.log(i, str[i]);
// }\



// Practise - Find avg marks of studnet
// let arr = [34, 45, 67, 46, 59, 69, 72];
// let i = 0;
// let sum = 0;

// for(i; i<arr.length; i++){
//     sum = sum + arr[i];
// }

//             OR

// for(let val of arr){
//     sum = sum + val;
// }

// let avg = sum / arr.length;
// console.log(avg);



// Reduce the array fo numbers by 10%
// let arr = [500, 600, 894, 236, 278, 594];
// let i = 0;

// for(i; i<arr.length; i++){
//     arr[i] = arr[i] - ((arr[i]/10));
// }
// console.log(arr);

//        //OR

// for(let val of arr){
//     arr[i] = arr[i] - (arr[i]/10);
//     i++;  
// }
// console.log(arr);



// push() in array
// let arr = ["Aryan", "Raj", "Suyog", "Vansh", "Faiz", "Vitthal", "Niraj"];

// console.log(arr);

// console.log(arr.push("Nishant"));    //pushed into the last

// console.log(arr);

// console.log(arr.pop()); //poped from the end

// console.log(arr);

// console.log(arr.toString());



// concat, unshift, shift, Changes the Original array
// let marvelHeros = ["Ironman", "Captian America", "Thor"];
// let dcHeros = ["Superman", "Batman"];
// let indianHeros = ["Shaktiman", "Krish"];

// console.log(marvelHeros.concat(dcHeros,indianHeros));

// marvelHeros.unshift("Spiderman"); //push to first
// console.log(marvelHeros);
// console.log(marvelHeros.shift()); //pop form first



// slice, splice(start,remove,replace)
// let arr = ["Aryan", "Raj", "Suyog", "Vansh", "Faiz", "Vitthal", "Niraj"];

// console.log(arr.slice(2,6)); // Doesn't bring chnages in the original array
// console.log(arr); 

// arr.splice(2,2,"Shejwal","Pranav");
// console.log(arr);


// practice
// arr.shift();    // Delete form start
// console.log(arr);

// arr.splice(2,2,"Nishant");   //Delete and Replace
// console.log(arr);

// arr.unshift("Amazon");   //Pushes to first
// console.log(arr);



// Functions & Function Call

// function sum(a,b){
//     console.log(a+b);
// }
// sum(2,3);



// Function & Function Return

// function sum(a,b){
//     return a*b;
// }
// console.log(sum(4,4));



// Sum of two no. using Function

// function sum(a,b){
//     a = prompt("Choose First no.:");
//     b = prompt("Choose Second no.");
//     s = a + b;
//     return s;
// }

// let val = sum();
// console.log(val);



// Function User Logged in

// function newUser(username){
//     console.log(username, "is sucessfully loged in");
// }
// newUser("Aryan");

// function newUser(username){
//     username = prompt("Typr Your Name:");
//     console.log(username, "is sucessfully loged in");
// }
// newUser();

// function newUser(username){
//     return `${username} is sucessfully loged in`;
// }
// console.log(newUser(prompt("Type Your Name:")));



// Arrow function for multiplication

// const mulNum = (a,b) => {
//     console.log(a*b);
// }
// mulNum(2,3);

// const mulNum = (a,b) => {
//     return a+b;
// }
// console.log(mulNum(prompt("Enter 1st Number:"), prompt("Enter 2nd Number:")));



// Return no. of vowel form the input string using function

// function input(str){
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// input(prompt("Enter a string:"));

// const input = (str) => {
//     let count = 0;
//     for(let char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
//             count++;
//         }
//     }
//     console.log(count);
// }

// input(prompt("Enter a string:"));



// forEach(callback) Method
//  let arr = [1,2,3,4,5];

//  arr.forEach((val, idx, arr) => {    // (value, index, array)
//     console.log(val)
//  })

// let arr = [1,2,3,4,5];

// arr.forEach((val) => {
//     console.log(val*val);
// })



// Creating new array with - .map(callback)
// let arr = [1,2,3,4,5];

// let newArr = arr.map((val) => {
//     return val*val;
// })
// console.log(newArr);



// Filtering the array with conditions - .filter(callback)
// let arr = [1,2,3,4,5,6,7,8,9];

// let evenArr = arr.filter((val) => {
//     return val%2 === 0;
// })
// console.log(evenArr);



// Reduce the array to simgle value - .reduce(callback)
// let arr = [1,2,3,4,5,6,7,8,9];

// let output = arr.reduce((prev, curr) => {
//     return prev > curr ? prev : curr;
// })
// console.log(output);



// Practise - Sort marks above 90
// let marks = [45,78,24,90,93,94,23,67,98,32,56,92];

// let newArr = marks.filter((val) => {
//     return val > 90;
// })
// console.log(newArr);



// Failed method
// let arr = [];
// let i = arr.length + 1;
// for(i; i<=5; i++){
//     arr.push(prompt("Enter no. to include in arr:"));
// }
// console.log(arr);

// let output1 = arr.reduce((prev, curr) => {
//     return prev+curr;
// })
// console.log(output1)

// let output2 = arr.reduce((prev, curr) => {
//     return prev*curr;
// })
// console.log(output2);



//
// let arr = [];
// let n = prompt("Enter the no. of elements you want in an array:");

// for(let i=1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);

// let sumOfArr = arr.reduce((prev, curr) => {
//     return prev+curr;
// })
// console.log(sumOfArr);

// let mulOfArr = arr.reduce((prev, curr) => {
//     return prev*curr;
// })
// console.log(mulOfArr);