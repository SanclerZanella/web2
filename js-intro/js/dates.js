/*

    Dates

 */

// Create a date object using the Date() constructor.
let d1 = new Date();

console.log(d1)

// Create a date with a specific date and time. Use the Date() constructor and provide the date and
// provide the date and time values in side the brackets. Takes up to 7 parameters.

d1 = new Date();
console.log(d1); // Months run from 0(Jan) to 11(Dec).

/*
    Formatting Dates:
*/
// ISO Date Format: Date('2022-11-29T11:37:30Z');

d1 = new Date('2022-11-29T11:37:30Z');
console.log(d1.toUTCString());