// reduce method

const myArray = [1, 2, 3, 4, 5];

const initialValue = 0;

const total = myArray.reduce((accumulator, currentValue) => {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`);
    return accumulator + currentValue;
}, initialValue);

console.log(`Total: ${total}`);


// shoping cart example - add prices of the shopping cart togeather

const userShoppingCart = [
    { item: "Apple", price: 20 },
    { item: "Banana", price: 10 },
    { item: "Orange", price: 50 },
    { item: "Mango", price: 60 }
];

const userTotal = userShoppingCart.reduce( (acc, curr) => {
    return acc + curr.price
}, 0);

console.log(`Total: ${userTotal}`);