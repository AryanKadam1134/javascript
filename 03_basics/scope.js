// Function Logic

console.log(addOne(5)); // Output: 6 (calling the function with argument 5 and logging the result)

function addOne(num) {
    return num + 1; // Returns the number incremented by 1
}


console.log(addTwo(3)); // Will throw an error because addTwo is not defined yet (Cannot access 'addTwo' before initialization)

const addTwo = function(num) {
    return num + 2; // Returns the number incremented by 2
}


