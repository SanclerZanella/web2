/*

    DOM - Document Object Model
        It is the three structure of the entire document, this includes all of the elements within
        the document along with their contents.

        Within the browser the parent object is window. When the web page loads the DOM strucure
        is created by generating an object of each element.

        Once these are generated, they can be accessed by our JS code to dynamicaly add update or
        remove then at runtime.

    Selectors:
        2 types of JS selectors:
            - Single element selectors - select a single element;
            - Multi element selectors - select multiple elements.
        
        Single Element Selectors:
            - Select by id name:
                Create a variable to hold the selected element

*/

//Single Element Selectors
// - Select by id name:
// Create a variable to hold the selected element
const myExitBtn = document.getElementById("exit");
// console.log(myExitBtn);

const myNextBtn = document.getElementById("next");
// console.log(myNextBtn);

const myContainer = document.getElementsByClassName("container")
// console.log(myContainer);

const myContainer1 = document.querySelector('.container');
// console.log(myContainer1);

const myItems = document.querySelector('.item');
// console.log(myItems);

const multiQuery = document.querySelectorAll('.item');
// console.log(multiQuery);

// Manipulating Elements in the DOM:
const theList = document.querySelector('.list');

// Remove the entire list:
// theList.remove();

// Remove item 3 from the list:
// theList.lastElementChild.remove();

// Add some HTML to item 1:
theList.firstElementChild.innerHTML = '<h1>I am the <b>first</b> item in the list</h1>';

// Add some text to the middle item:
theList.children[1].innerText = 'I am piggy in the middle';

// Edit the content of item 3:
theList.lastElementChild.textContent = 'I am the last item in the list';

// Set the background colour of the exit button to red:
myExitBtn.style.backgroundColor = 'red';

/*

    Event Listeners

*/

myExitBtn.addEventListener('click', function(e) {
    this.style.backgroundColor = 'yellow';
});

myNextBtn.addEventListener('mousedown', function(e) {
    console.log(this.type);
});
