function userDetails(userName) {
    this.userName = userName;
}

function summary(userName, age) {
    userDetails(userName) // Call the userDetails constructor
    this.age = age;
}

const userOne = new summary("Aryan", 25);
console.log(userOne); // The userName property is not set because userDetails is not properly initialized

// Instead, we should use `call` or `apply` to set the context of `this` in userDetails
function summaryWithCall(userName, age) {
    userDetails.call(this, userName)
    this.age = age;
}

const userTwo = new summaryWithCall("Jane", 28);
console.log(userTwo); // Now userName is properly set