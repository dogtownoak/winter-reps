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
if (number<5) {
    console.log("little nubmer")
    } else if (number> 10) {
    console.log("big number")
    } else {
    console.log("monkey")
    }

// H. What's in your closet?
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
[
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
    ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
    ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
    ]
];
// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
// 2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, "raybans");
// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = "stained knit hat";
// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
thomsCloset[0][0];
// 5. In the same way, access one item from Thom's pants array.
thomsCloset[1][0];
// 6. Access one item from Thom's accessories array.
thomsCloset[2][0];
// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom can't wait to wear his ${thomsCloset[0][0]} with ${thomsCloset[1][0]} with ${thomsCloset[2][0]}!`);
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas";

// Functions
// A printGreeting
