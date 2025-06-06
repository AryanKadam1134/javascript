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

document.querySelector('h1')
// Output: <h1 id="heading">Hello, Universe!</h1>

document.querySelector('#heading')
// Output: <h1 id="heading">Hello, Universe!</h1>

document.querySelector('.aClass')
// Output: <div class="aClass">Some content</div>

document.querySelector('input[type="text"]')
// Output: <input type="text" id="textInput" value="Type here">

document.querySelector('ul')
// Output: <ul><li>Item 1</li><li>Item 2</li></ul>

const myul = document.querySelector('ul');
// Get the first <ul> element in the document and assign it to the variable myul

myul.querySelector('li')
// Output: <li>Item 1</li>

const turnGreen = myul.querySelector('li')

turnGreen.style.color = 'green';
// Change the text color of the first <li> element in the <ul> to green

document.querySelectorAll('li')
// Output: NodeList(2) [li, li]

const myListItems = document.querySelectorAll('li');
// Get all <li> elements in the document and assign them to the variable myListItems

myListItems.style.color = 'red';
// This will not work because NodeList does not have a style property.

myListItems[0].style.color = 'red';
// Change the text color of the first <li> element in the NodeList to red

myListItems.forEach((item) => {
    item.style.color = 'blue';
});
// Change the text color of all <li> elements in the NodeList to blue


document.getElementsByClassName('aClass')
// Output: HTMLCollection(1) [div]

Array.from(document.getElementsByClassName('aClass'))
// Convert the HTMLCollection to an array

const myClassElements = Array.from(document.getElementsByClassName('aClass'));
// Get all elements with the class 'aClass' and convert it to an array

myClassElements.forEach((element) => {
    element.style.color = 'purple';
});
// Change the text color of all elements with the class 'aClass' to purple

