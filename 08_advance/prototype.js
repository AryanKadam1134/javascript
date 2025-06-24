const name = "Aryan";

Object.prototype.sayAryan = function() {
    return `${this} says Hello!`;
}

String.prototype.sayAryanString = function() {
    return `${this} says Hello, String!`;
}

console.log(sayAryan())
console.log(name.sayAryan())

console.log(name.sayAryan()) // This will not work as expected because `name` is a string, not an object
console.log(name.sayAryanString())


Object.prototype.trueLength = function() {
    return this.trim().length
}

console.log(name.trueLength())