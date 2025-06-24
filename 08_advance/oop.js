const user = {
    name: 'John',
    age: 30,
    getDetails: function() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}

console.log(user.getDetails())



// Object Constructor Function
function userDetails(username, age, isLoggedIn) {
    this.username = username;
    this.age = age;
    this.isLoggedIn = isLoggedIn;

    this.getDetails = function() {
        return `Username: ${this.username}, Age: ${this.age}, Logged In: ${this.isLoggedIn}`;
    };

    return this;
}

const userOne = userDetails("Aryan", 25, true);
console.log(userOne);

const userTwo = userDetails("Jane", 28, false);
console.log(userOne); // userOne is overridden by userTwo



// To avoid the issue of overriding, we can use the `new` keyword to create instances of the constructor function
function UserDetails(username, age, isLoggedIn) {
    this.username = username;
    this.age = age;
    this.isLoggedIn = isLoggedIn;

    this.getDetails = function() {
        return `Username: ${this.username}, Age: ${this.age}, Logged In: ${this.isLoggedIn}`;
    };

    return this;
}

const userThree = new UserDetails("Aryan", 25, true);
console.log(userThree);
console.log(userThree.getDetails());