console.log("js up and running");

// A. Q & A
    // How do we assign a value to a variable?

    // How do we change the value of a variable?

    // How do we assign an existing variable to a new variable?

    // Remind me, what are declare, assign, and define?

    // What is pseudocoding and why shoud you do it?

    // What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?


// B. Strings

    // 1. Create a variable called firstVariable

let firstVariable = "Hello World";

firstVariable = 49;

let secondVariable = 49;

secondVariable = "Any string";

    // Answer: the value of firstVariable is 49

    // 2. 

let yourName = "Brandon Ford";

let answer = `Hello, my name is ${yourName}`;

// C. Booleans

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true !== false);
console.log(false || false || false || false || false || false !== true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b < c);
console.log(a === a !== d);
console.log(48 !== '48');

// D. The farm

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

    // 1. What would you write to access the 3rd element of the array?

ourClass[2];

    // 2. Change the value of "Github" to "Octocat"

ourClass[4] = "Octocat";

    // 3. Add a new element, "Cloud City" to the array.

ourClass.push("Cloud City");

// E. Mix it up
const myArray = [5, 10, 500, 20];
let myArrayTwo = [1, 2, 3, 4];
    // 1. Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Egon", "Hello");

    // 2. Remove the 5 from the beginning of the array.
myArray.shift();

    // 3. Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley");
    // 4. Remove the string of your choise from the end of the array.
myArray.pop();
    // 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
let reversed = myArray.reverse();
    // It mutated the array.  To mutate is to change or affect a source element.  The method returned a reversed array.

// F. Biggie Smalls
let number = 49
if (number<100) {
    console.log("little number")
    } else {
    console.log("big number")
    }

// G. Monkey in the Middle



