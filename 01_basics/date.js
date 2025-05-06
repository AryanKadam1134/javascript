const myDate = new Date();
console.log(myDate); // Current date and time
console.log(myDate.toString()); // String representation of the date
console.log(myDate.toDateString()); // Date in a human-readable format
console.log(myDate.toLocaleString()); // Date in ISO format
console.log(myDate.toLocaleString('default', {
    month: '2-digit'
})); // Month in long format


const myCreatedDate = new Date(2025, 2, 11);
// console.log(myCreatedDate); // Date object with year, month, and day
// console.log(myCreatedDate.toString()); // String representation of the date
// console.log(myCreatedDate.toDateString()); // Date in a human-readable format
// console.log(myCreatedDate.toLocaleString()); // Date in ISO format
// console.log(myCreatedDate.getTime()); // Timestamp in milliseconds since January 1, 1970
// console.log(myCreatedDate.getDate()); // Day of the month (1-31)
// console.log(myCreatedDate.getFullYear()); // Year of the date   

const myTimeStamp = Date.now();
// console.log(myTimeStamp); // Current timestamp in milliseconds since January 1, 1970
// console.log(myTimeStamp/1000); // Current timestamp in seconds since January 1, 1970
// console.log(Math.floor(myTimeStamp/1000)); // Current timestamp in minutes since January 1, 1970
// console.log(myTimeStamp.toLocaleString()); // Current timestamp in ISO format
