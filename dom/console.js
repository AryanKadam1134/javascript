document.getElementById('heading')
// Outptut: <h1 id="heading">Hello, World!</h1>

const title = document.getElementById('heading');
// Get the element with id 'heading' and assign it to the variable title

document.getElementById('heading').innerHTML = 'Hello, Universe!';
// Output: <h1 id="heading">Hello, Universe!</h1>
// Overwrite the content of the element with id 'heading'

document.getElementById('heading').style.color = 'blue';
// Change the text color of the element with id 'heading' to blue

document.getElementById('heading').id
// Output: "heading"

document.getElementById('heading').id = 'newHeading';
// Change the id of the element from 'heading' to 'newHeading'

document.getElementById('heading').className
// Output: "(name of the class if any, otherwise an empty string)"

document.getElementById('heading').className = 'newClass';
// Change the class of the element with id 'heading' to 'newClass'

document.getElementById('heading').getAttribute('id')
// Output: "heading"

document.getElementById('heading').setAttribute('id', 'newHeading');
// Change the id of the element from 'heading' to 'newHeading'

document.getElementById('heading').getAttribute('class')
// Output: "(name of the class if any, otherwise an empty string)"

document.getElementById('heading').setAttribute('class', 'newClass');
// Change the class of the element with id 'heading' to 'newClass'

