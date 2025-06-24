function UserDetails(name, age) {
  this.name = name;
  this.age = age;
}

UserDetails.prototype.oinkMe = function() {
    console.log(`${this.name} is oinking! at this age of ${this.age}`);
}

const userOne = new UserDetails("Aryan", 25);

console.log(userOne.oinkMe())