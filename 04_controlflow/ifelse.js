// if-else statements
let age = 20;
if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}


// if-else if-else statements
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: D");
}


// and operators
let isLoggedIn = true;
let hasPermission = false;
if (isLoggedIn && hasPermission) {
    console.log("Access granted.");
} else {
    console.log("Access denied.");
}


// or operators
let isWeekend = false;
let isHoliday = true;
if (isWeekend || isHoliday) {
    console.log("You can relax today!");
} else {
    console.log("It's a workday, keep going!");
}


// Nested if statements
let temperature = 30;
if (temperature > 25) {
    console.log("It's warm outside.");
    if (temperature > 30) {
        console.log("It's hot outside.");
    } else {
        console.log("It's a pleasant day.");
    }
}


// not operator
let isRaining = false;
if (!isRaining) {
    console.log("You can go for a walk.");
}


// Using ternary operator
let isMember = true;
let discount = isMember ? "20% off" : "No discount";
console.log(`You get a ${discount} on your purchase.`);