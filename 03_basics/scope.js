// Scope

function one(){
    const a = 1; // Local variable 'a' within function one
    function two(){
        const b = 2; // Local variable 'b' within function two
        console.log(a); // Accessing variable 'a' from outer function one
    }
    two(); // Calling function two within function one
    // console.log(b); // Will throw an error because 'b' is not defined in this scope
}
one(); // Calling function one





// Function Logic

console.log(addOne(5)); // Output: 6 (calling the function with argument 5 and logging the result)

function addOne(num) {
    return num + 1; // Returns the number incremented by 1
}


console.log(addTwo(3)); // Will throw an error because addTwo is not defined yet (Cannot access 'addTwo' before initialization)

const addTwo = function(num) {
    return num + 2; // Returns the number incremented by 2
}


