// Promises in JavaScript

/// Promise One
const promiseOne = new Promise( (resolve, reject) => {
    // Anything that takes time
    setTimeout( () => {
        console.log("Promise One Resolved")
        resolve()
    }, 1000)
})

promiseOne.then(() => {
    console.log("Promise One Chained")
})



// Promise Two
new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log("Promise Two Resolved")
        resolve()
    }, 1000)
}).then(() => {
    console.log("Promise Two Chained")
})



// Promise Three
const promiseThree = new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log("Promise Three Resolved")
        resolve({userName: "John", age: 30})
    }, 1000)
})

promiseThree.then( (data) => {
    console.log(data)
    console.log("Promise Three Chained")
})



// Promise Four
const promiseFour = new Promise ( (resolve, reject) => {
    setTimeout( () => {
        let error = false
        if (error) {
            reject("Error: Something went wrong in Promise Four")
        } else {
            resolve("Promise Four Resolved")
        }
    })
})

promiseFour
.then( (err) => {
    console.log(err)
})
.catch( (err) => {
    console.log(err)
})



// Promise Five
const promiseFive = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = true
        if (error) {
            reject("Error: Something went wrong in Promise Five")
        } else {
            resolve({userName: "Jane", age: 25})
        }
    }, 1000)
})

promiseFive
.then( (data) => {
    console.log(data)
    console.log("Promise Five Chained")
    return data.userName
})
.then( (userData) => {
    console.log(userData)
})
.catch( (err) => {
    console.log(err)
})
.finally( () => {
    console.log("Promise Five Completed") //Will always execute
})



// Promise Six
const promiseSix = new Promise( (resolve, reject) => {
    setTimeout( () => {
        let error = true
        if (error) {
            reject("Error: Something went wrong in Promise Six")
        } else {
            resolve("Promise Six Resolved")
        }
    })
})

async function consumedPromise() {
    try {
        const resolved = await promiseSix
        console.log(resolved)
    } catch {
        console.log("Error: Something went wrong in consumedPromise")
    }
}

consumedPromise()



// Async Function example
async function fetchData() {
    try {
        const response = await fetch('https://api.github.com/users/AryanKadam1134');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();



// fetchData();
fetch("https://api.github.com/users/AryanKadam1134")
.then( (data) => {
    return data.json();
})
.then( (userData) => {
    console.log(userData)
})
.catch( (err) => {
    console.log("Error fetching data:", err);
})