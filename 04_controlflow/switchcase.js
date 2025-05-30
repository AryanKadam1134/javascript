// swith cases


// basic syntax
switch (expression) {
    case value1:
        // code to be executed if expression === value1
        break;
    case value2:
        // code to be executed if expression === value2
        break;
    // more cases...
    default:
        // code to be executed if none of the cases match
}


//example
const month = "March";
switch (month) {
    case "January":
        console.log("It's the first month of the year.");
        break;
    case "February":
        console.log("It's the second month of the year.");
        break;
    case "March":
        console.log("It's the third month of the year.");
        break;
    default:
        console.log("It's some other month.");
} // Output: "It's the third month of the year."