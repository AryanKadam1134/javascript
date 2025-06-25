class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    userName() {
        return `${this.name.slice(0,3)}1234@${this.name.slice(3)}`
    }
}

class Employee extends User {
    constructor(name, age, position) {
        super(name, age); // Call the parent class constructor
        this.position = position;
    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Position: ${this.position}`;
    }
}

const employeeOne = new Employee("Aryan", 25, "Software Engineer");
console.log(employeeOne.getDetails()); // Name: Aryan, Age: 25, Position
console.log(employeeOne.userName()); // Ary1234@an

console.log(employeeOne instanceof Employee); // true
console.log(employeeOne instanceof User); // true