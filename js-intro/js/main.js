// alert('This messagebox has been created externally');

/*
    This is a
    multi line comment
*/

// console.log('Hello from the console');
// console.error('This is an error message!');
// console.warn('This is a warning message!');

/*
    Variables:
    There are 3 ways to declare variables i JS.
    var - is the original, it is a global variable.
    let - introduced in ES6/2015, it is a local/block variable.
            It's value can be reset.
    const -  introduced in ES6/2015, it is a local/block variable.
            It's value is constant, ie cannot be reset.

    In JS variables are not statically typed. - no data type.
*/

let age;

age = 18;
// console.log('Age: ' + age);

age = 25;
// console.log('Age: ' + age);

age = 'Thirty';
// console.log('Age: ' + age);

const firstName = 'john';
// console.log('First Name: ' + firstName);

// Cannot reassign a value to firstName as it is const variable
// firstName = 'Alan';
// console.log('First Name: ' + firstName);
/* Uncaught TypeError TypeError: Assignment to constant variable.
at <anonymous> (c:\Users\RM207Instructor\source\Web2\JS_Intro\js\main.js:38:11)
*/

/*
    Data Types:
    Primitive data types(directly assigned memory)
    string, number, boolean, null, undefined
*/

const theName = 'Sally';
const theAge = 59;
const height = 1.5;
const alive = true;
const x = null;         // Empty.
const y = undefined;    // Empty.
let z;                  // Empty.

// console.log('theName is a ' + typeof theName + ' variable.');
// console.log('theAge is a ' + typeof theAge + ' variable.');
// console.log('height is a ' + typeof height + ' variable.');
// console.log('alive is a ' + typeof alive + ' variable.');
// console.log('x is a ' + typeof x + ' variable.');
// console.log('y is a ' + typeof y + ' variable.');
// console.log('z is a ' + typeof z + ' variable.');

const car = {
    make: 'BMW',            // object properties
    model: '435d',          // string
    engineSize: '3.0L',
    qtyDoors: 2,            // number
    driveModes: ['EcoPro', 'Comort', 'Sport', 'SportPlus'],  // array
    attributes: {
        seats: 4,
        colour: 'Black',
        fuel: 'diesel'
    }           // embeded object
};

// console.log(car.make);

// output the make, colour and third drivemode of car.
// console.log(car.make, car.attributes.colour, car.driveModes[2]);

// Destructuring:
// Allows us to unpack the elements of an object/array and only select
// the ones we need.

const a = [1, 2, 3, 4 , 5];

const [,,,b,c] = a;

// console.log(b);
// console.log(c);

const d = [1, 2]
const [e, f, g, h] = d;     // Destructuring with more elements than the source holds.

// console.log(e);
// console.log(f);
// console.log(g);
// console.log(h);

//  Create a sub-object of car to only store the values we really need,
//  make, model and colour.

const {
    make,                   // variable
    model,
    attributes:{colour}
} = car;
// console.log(`The make is: ${make}, model is: ${model}, and the colour is: ${colour}`);

car.drivetrain = 'XDrive';

// console.log(car);

// Create an array of objects:

const modules = [
    {
        id: 1,
        title: 'Customer Service',
        completed: false
    },
    {
        id: 2,
        title: 'Software Development',
        completed: true
    },
    {
        id: 3,
        title: 'SQL',
        completed: true
    },
    {
        id: 4,
        title: 'ICT Security',
        completed: true
    },
    {
        id: 5,
        title: 'Web Dev',
        completed: false
    }
];

//console.log(modules);

// Output the title of the second module:
// console.log('The title of the second module is: ' + modules[1].title);

// Output the title of all modules in the array

// For Loop:
for(let i = 0; i < 5; i++){
    // console.log('The title of the module at position '
    //             + (i + 1 )+ ' is: ' + modules[i].title);
}

// For-of loop:
for(const bananaMonkey of modules){     // For each element of the modules array.
    // console.log('The title of this module is ' + bananaMonkey.title);
}

// For-each function:
// An array method that takes a parameter of type function.
// The fuction takes a parameter which will be the variable that hold the 
// current element of the array.
// Syntax: arrayName.forEach(function(variable){ code to run })

modules.forEach(function(spaghettiHoops)
{
    console.log('The title of this module is ' + spaghettiHoops.title);
})

// Output the title of all completed modules:

// variable to hold the filtered array elements,
// these satisfy the condition in the 'complete' function
const modCompleted = modules.filter(complete);

//create a function to filter out which modules have been completed.
function complete(HeinzMeansBeans){
    return HeinzMeansBeans.completed == true;
}

// output the completed modules to the console.
console.log(modCompleted);

