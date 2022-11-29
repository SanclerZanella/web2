// Create an array like this:
const fruits = ['Banana', 'Apple', 'Orange'];
//             OR
const nums = new Array(1, 2, 3, 4, 5);
// Using the new keyword along with the Array()
// constructor.

// console.log(fruits);

// Output Apple:
// console.log(fruits[1]);

// Add a plum to the fruits array
console.log(fruits.push('plum'));

// console.log(fruits);

// Add a kiwi to the beginning of the fruits array
console.log(fruits.unshift('kiwi'));
// console.log(fruits);

// Add a pinapple between Apple and Orange
fruits.splice(3,0, 'Pineapple');
// console.log(fruits);

// Add a Dragonfruit between Apple and Pineapple
// fruits.fill('Dragonfruit', 3,4);
// console.log(fruits);

fruits[3] = 'Dragonfruit';
// console.log(fruits);

//Remove the last fruit from the array:
fruits.pop();
console.log(fruits);

// Check if the fruits array contains strawberries
// console.log(fruits.includes('strawberries'));

// Check if the fruits array contains plum
// console.log(fruits.includes('plum'));

// Check if the fruits array contains Apple
// console.log(fruits.includes('Apple'));

// find what index plum is at in the array
console.log(fruits.indexOf('plum'));

console.log(fruits.indexOf('Apple'));
console.log(fruits);

// In JS you can have mixed elements in your array:
const mixedArray = [
    'Orange',
    2,
    true,
    null,
    undefined,
    1.5,
    {
        id: 1,
        title: 'Customer Service',
        completed: false
    }
];

console.log(mixedArray);

/*
Comparisson
*/

const a = 5;
const b = 10;

if(a == 5) { // Double equal compare the value only
    console.log("a is equal to 5");
} else {
    console.log("a is not equal to 5");
}

if(a === 5) { // Triple equal compare the value and the data type
    console.log("a is equal to 5");
} else {
    console.log("a is not equal to 5");
}

if(a == "5") {
    console.log("a is equal to 5");
} else {
    console.log("a is not equal to 5");
}

if(a === "5") {
    console.log("a is equal to 5");
} else {
    console.log("a is not equal to 5");
}
