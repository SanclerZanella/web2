const theName = 'Sally'; // string variable
const theAge = 42;       // number variable

// Concatination
const greeting = 'Hello, my name is ' + theName + ',  and I am ' + theAge + ' years old.';

// A Template string: Need to back-ticks instead of quotes
const greeting2 = `Hello, my name is ${theName},  and I am ${theAge} years old.`;


// console.log(greeting);

// console.log(greeting2);


const s = 'Hello Amazone!';

// console.log(`there are ${s.length} characters in s`);

// console.log(s.toLowerCase());

// console.log(s.substring(0, 5)); // takes up to 2 parameters,
                                // beginning index and optionally
                                // the end index. The substring begins
                                // at the beginning index and stops just before
                                // the end index. If the end index is not 
                                // specified, it runs to the end of the string.

// console.log(s.substring(0, 5).toUpperCase()); // Method chaining;

// console.log(s.slice(0, 5));

const s2 = 'Heinz Means Beans';

// console.log(s2.split('e'));

const names = "Annie, Paddy, Macky, Jackie";
console.log(names.split(', '));

console.log(names.split(', ', 2));


