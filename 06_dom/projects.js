// Project 1 Solution
 
const allButtons = document.querySelectorAll('.button');
const text = document.querySelector('h2')

const body = document.body;

allButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e)
    console.log(e.target)
    // if (e.target.id === "grey") {
    //   body.style.backgroundColor = e.target.id;
    //   text.style.color = "white";
    // }
    // if (e.target.id === "white") {
    //   body.style.backgroundColor = e.target.id;
    //   text.style.color = "black";
    // }
    // if (e.target.id === "blue") {
    //   body.style.backgroundColor = e.target.id;
    //   text.style.color = "white";
    // }
    // if (e.target.id === "yellow") {
    //   body.style.backgroundColor = e.target.id;
    //   text.style.color = "black";
    // }

    switch (e.target.id) {
      case "grey" : body.style.backgroundColor = "grey", text.style.color = "white";
      break;

      case "white" : body.style.backgroundColor = "white", text.style.color = "black";
      break;
      
      case "blue" : body.style.backgroundColor = "blue", text.style.color = "white";
      break;

      case "yellow" : body.style.backgroundColor = "yellow", text.style.color = "black";
      break;
    }
  });
});



// Project 2 Solution