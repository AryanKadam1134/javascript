const advance = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(advance);


const user = {
    name : 'John',
    age : 30,
    email : 'example@email.com'
}
const newAdvance = Object.getOwnPropertyDescriptor(user, 'name');
console.log(newAdvance);

Object.defineProperty(user, 'name', { 
    writable : false, 
    // enumerable : false 
});

const one = Object.getOwnPropertyDescriptor(user, 'name');
console.log(one)

for (let [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);
}