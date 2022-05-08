
// DOM: document object model (builds a tree of elements) - represents the entire document as a single object in memory 

// const document = document; // global variable - accessible from anywhere in the code - can be used to access the DOM object 
// const window = window; // global variable - accessible from anywhere in the code - can be used to access the DOM object
// window gives access to the window object - which is the browser window
// document gives access to the document object - which is the HTML document


function sayHi(){
    console.log("Hi");
}

window.setTimeout(sayHi, 2000); // executes a function after a certain amount of time
//no es necesario poner window, es una variable global que esta definida de la misma manera que document dentro del scope del navegador.


const button = document.getElementById("buy-now");
button.addEventListener("click", () => { //  the event listener is a function that is executed when the event occurs 
    button.innerHTML = "Sold!";
    console.log("You clicked the button");
    console.log(button);
}
);


const cards = document.querySelectorAll(".card"); // selects all the cards

for (let i = 0; i < cards.length; i++) {    // for each card in the array of cards
const indexElement = document.createElement('p'); // creates a new element in the DOM 
indexElement.innerHTML = i+1; // seteamos lo que va a tener el elemento P, que es el numero de la carta
cards[i].appendChild(indexElement); // appends a new element to the DOM

cards[i].addEventListener('click', () => {
    cards[i].setAttribute() ; // removes the element from the DOM
} );
}