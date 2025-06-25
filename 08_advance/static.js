class User {

    constructor(name, age, email, phoneNo, password) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.phoneNo = phoneNo;
        this.password = password;
    }

    userName() {
        return `${this.name}1234@`;
    }

    static encryptPassword() {
        return `${this.password.split('').reverse().join('')}`;
    }
}

const userOne = new User("Aryan", 25, "aryan@gmail.com", "1234567890", "password123");
console.log(userOne);
console.log(userOne.encryptPassword()); // This will throw an error because encryptPassword is static