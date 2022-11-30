/*

    FUNCTIONS

    Syntax:
        Use the 'function' keyword, function names are optional (untype parameter list)

        function functionName(parameters) {
            parameters have local scope only.
            code to run;
        };

    There are 2 main types of functions:

        Declared functions:
            These have function names and can be be caled after they are declared.

        Anonymous functions:
            These have no function names, they are invoked where they are declared and cannot
            be called anywhere else.
*/

const myCalc = document.getElementById('calc');

console.log(myCalc);

// Declared function:

function doCalc(x, y) { // No checking is done on parameters, they are fussy
    return x + y;
}

function myDeclaredFunction() {
    let result = doCalc('5', 6);
    console.log(`5 + 6 = ${result}`);
}

// myCalc.addEventListener('click', myDeclaredFunction);

// Anonymous functions

// myCalc.addEventListener('click', function() {
//     let result = a(5, 6);
//     console.log(`5 * 6 = ${result}`);
// });

// function expression: create a variable to hold the result of an anonymous inline function.
const a = function(b, c) { return b*c };

// Self-Invoking functions:
// (function() {
//     alert("I have been triggered by a self-invoking function");
// })(); // The parentheses at the end cause this function to invoke itself.


// Arrow functions - released in ES6
//Before arrow functions available:
const d = function(b, c) { return b*c };

// Using arrow function:
const g = (h, i) => h*i;

// Rest parameter - allows an unspecified number of parameters to be provided and used in
// the function.

function sumValues(...args) { // the passed in parameters will be treated as an array.
    let res = 0;

    for(let arg of args) {
        res += arg;
    }

    return res;
}

function feedValuesIn() {
    console.log(sumValues(47, 56, 102, 39, 1));
}

myCalc.addEventListener('click', feedValuesIn);
