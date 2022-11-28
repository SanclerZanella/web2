// alert("This message box has been created externally");

/*
    This is a
    multi line comment
*/

console.log("Hello from the console!");
console.error("This is an error message!");
console.warn("This is a warning message!");

/*
Variables:
    there are 3 ways to declare varibles in JS:
        var - is the original, it is a global variable.
        let - introduced in ES6/2015, it is a local/block varible, It's value can be reassigned.
        const - introduced in ES6/2015, it is a local/block varible, It's value can't be reassigned.

        In JS variables are not statically typed. - no data type.
*/

let age;
age = 18;
console.log('Age ' + age);

age = 25;
console.log('Age ' + age);

age = 'Thirty';
console.log('Age ' + age);

const firstName = 'John';
console.log('First Name ' + firstName);

// Cannot reassign a value to firstName at it is a const variable vvv
// firstName = 'Alan';
// console.log('First Name ' + firstName);

/*
Data types:
    Primitive data types( typeof() ), like:
    string, number, boolean, null, undefined
*/

const theName = 'Sally';
const theAge = 59;
const height = 1.5;
const alive = true;
const x = null;
const y = undefined;
let z;

console.log('theName is a ' + typeof(theName) + ' variable.');
console.log('theAge is a ' + typeof(theAge) + ' variable.');
console.log('height is a ' + typeof(height) + ' variable.');
console.log('alive is a ' + typeof(alive) + ' variable.');
console.log('x is a ' + typeof(x) + ' variable.');
console.log('y is a ' + typeof(y) + ' variable.');
console.log('z is a ' + typeof(z) + ' variable.');

const person = {
    make: "BMW",
    model: "435d",
    engineSize: '3.0L',
    qtyDoors: 2,
}
