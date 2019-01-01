console.log("js up and running");

// I. Variables & Datatypes
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
    // 2. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
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
    // 1. Declare a variable animal. Set it to be either "cow" or something else.
    let animal = "cow";
    // 2. Write code that will print out "mooooo" if the it is equal to cow.
    let cowCheck = (animal) => {if(animal.toLowerCase() ==="cow") {
        console.log("mooooo");
        } else console.log("Hey! You're not a cow.")}
    // 3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
    "see above"
// E. Driver's Ed
    // 1. Make a variable that will hold a person's age. Be semantic.
    let personAge = null;
    // 2. Write code that will print out "Here are the keys", if the age is 16 years or older.
    let keyCheck = personAge => {if(personAge >= 16){
        console.log("Here are the keys");
        } else console.log("Sorry, you're too young")}
    // 3. If the age is younger than 16, a message should print "Sorry, you're too young."
    "see above"
// II. Loops
// A. The basics
    // 1. Write a loop that will print out all the numbers from 0 to 10, inclusive.
    let printLoop = (minNumber, maxNumber) => {
        let i = minNumber;
        while (i <= maxNumber){
            console.log(i);
            i++;
        }
    }
    printLoop(0,10);
    // 2. Write a loop that will print out all the numbers from 10 up to and including 400.
    printLoop(10,400);
    // 3. Write a loop that will print out every third number starting with 12 and going no higher than 4000.
    let printLoopEveryThird = (minNumber, maxNumber) => {
        let i = minNumber;
        while (i <= maxNumber){
            console.log(i);
            i=i+3;
        }
    };
    printLoopEveryThird(12,400);
// B. Get even
    // 1. Print out the even numbers that are within the range of 1 - 100.
    let printEven = (minNumber, maxNumber) => {
        if (minNumber % 2 === 0){
            let i = minNumber;
            while (i <= maxNumber){
                console.log(`${i} <-- is an even number`);
                i=i+2;
            }
        } else {
            let i = minNumber +1;
            while (i <= maxNumber){
                console.log(`${i} <-- is an even number`);
                i=i+2;
            }
        }
    };
    // 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
    "see above"
// C. Give me Five
    // 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
    let printHighFive = (minNumber, maxNumber) => {
            let i = minNumber;
            while (i <= maxNumber){
                if((i!==0) && (i % 3 ===0))
                console.log(`I found a ${i} Three is a crowd`);
                if ((i!==0) && (i % 5 === 0)){
                console.log(`I found a ${i} High Five`);
            }
            i++
        }
    };
    // 2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
    "see above"
// D. Savings account
    // 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
    let bank_account = (minNum, maxNum) => {
        let i = minNum;
        let balance = null;
        while (i <= maxNum){
            balance = balance + i
            i++
        }
        console.log(balance)
    }
    console.log(bank_account(1,10))
    // 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
    let bank_account_bonus = (minNum, maxNum) => {
        let i = minNum;
        let balance = null;
        while (i <= maxNum){
            balance = balance + (i*2)
            i++
        }
        console.log(balance)
    }
    console.log(bank_account_bonus(1,100))
// E. Multiples of 3 and 5
let addMultiplesOfThreeAndFive = (minNumber, maxNumber) => {
    let i = minNumber;
    let balance = null;
    while (i <= maxNumber){
        if((i!==0) && (i % 3 ===0)){
        balance = balance + i;
        } else if ((i!==0) && (i % 5 === 0)){
        balance = balance +i; 
    }
    i++
}
console.log(balance)
};

// III. Arrays & Control Flow
// A. Talk about it
    // 1. What are the things in an array called?

    // 2. Do Arrays guarantee those things will be in order?

    // 3. What real-life thing could you model with an array?
// B. Easy Does it
    // 1. Create an array that contains three quotes and store it in a variable called quotes.
    let quotes = ["I had a dream", "Follow the yellow brick road", "The only thing to fear is fear itself", "If you ain't first you're last", "Look who is talking now" ]
// C. Accessing elements
    const randomThings = [1, 10, "Hello", true]
    // 1. How do you access the 1st element in the array?
    randomThings[0]
    // 2. Change the value of "Hello" to "World".
    randomThings[2] = "World"
    // 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
    console.log(randomThings)
// D. Change values
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
    // 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in   Kristyn's closet + " today!" to the console.
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
// A. printGreeting
    // Done
// B. printCool
    let printCool = name => `${name} is cool`;
// C. calculateCube
    let calculateCube = number => number**3;
// D. isVowel
    let vowels = ['a', 'e', 'i', 'o', 'u']
    
    let isVowel = function(letter) {
        for (let i = 0; i<vowels.length; i++){
            if (letter.toLowerCase() === vowels[i]) {
                return true;
            }
        }
        return false;
    };

    let isVowelES6 = letter => {
        for (let i = 0; i<vowels.length; i++){
            if (letter.toLowerCase() === vowels[i]) {
                return true;
            }
        }
        return false;
    };
// E. getTwoLengths
    let getTwoLengths = (stringOne, stringTwo) => {
        let answerArray = [];
        answerArray.push(stringOne.length, stringTwo.length);
        return answerArray;
    };
// F. getMultipleLengths
    let getMultipleLengths = arrayOfStrings => {
        let answerArray = [];
        arrayOfStrings.forEach(array => answerArray.push(array.length))
        return answerArray;
    }
// G. maxOfThree
    let maxOfThree = (numOne, numTwo, numThree) => {
        numbers = [numOne, numTwo, numThree]
        let largestNumber =null;
        for (let i = 0; i<numbers.length; i++){
            if (numbers[i]>largestNumber) {
                largestNumber = numbers[i]
            }
        }
        return largestNumber
    }
// H. printLongestWord
    let printLongestWord = arrayOfStrings => {
        let largestWord = arrayOfStrings[0];
        for (let i = 0; i<arrayOfStrings.length; i++){
            if (arrayOfStrings[i].length > largestWord.length) {
                largestWord = arrayOfStrings[i]
            }
        }
        return largestWord
    }
// I. transmogrify
    let transmogrify = (numOne, numTwo, numThree) => (numOne * numTwo)**numThree
// J. reverseWordOrder
    let reverseWordOrder = stringOfWords => {
        let reversedOrder = "";
        let reversedWord = "";
        for(let i=0; i<stringOfWords.length; i++){
            reversedWord = reversedWord + stringOfWords[i]
            console.log(reversedWord)
            console.log(i + "word")  
            if(i === (stringOfWords.length-1)) {
                reversedOrder = reversedWord + " " + reversedOrder;
            } else if (stringOfWords[i]===" ") {
                reversedOrder = reversedWord + " " + reversedOrder;
                console.log(reversedOrder)
                console.log(i + "if")
                reversedWord ="";
            }
        }
        return reversedOrder;
    }
// K. Get down and dirty with Math.random()
    // 1. Write a function that will return a random integer between 1 and 10. Test it.
    let getRandomInteger = (min, max) => Math.random() * (max-min) + 1; 
    console.log(getRandomInteger(1,10))
    // 2. Write a function that will return a random integer between 10 and 100. Test it.
    console.log(getRandomInteger(10,100))
    // 3. Write a function that will return a random number between 532 and 13267. Test it.
    console.log(getRandomInteger(532,13267))
    // 4. Write a function that will return a random number between 1 and 10. Test it.
    console.log(getRandomInteger(1,10))
    // 5. Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array. Call your function a few times, passing in the quotes array. Give it a nice semantic name like getRandomElement.
    let randomElement = quotes => {
        let index = getRandomInteger(0, quotes.length)
        console.log(getRandomInteger(0, quotes.length))
        index = Math.round(index)
        console.log(index)
        console.log(quotes[index])
    }
    randomElement(quotes)
    // Note: heading out...check on this one
// Objects
// A. Make a user object
    // 1. Create an object called user.
    let user = {
        name: 'Brandon',
        email:'brandon@gmail.com',
        age:21,
        purchased:[]
    }
    // 2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
    "see above"
// B. Update the user
    // 1. Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
    user.email = "david@gmail.com"
    // 2. Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
    user.age++
// C. Adding keys and values
    // 1. Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
    user.location = "San Francisco"
// D. Shopaholic
    // 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
    user.purchased.push('carbohydrates')
    // 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
    user.purchased.push('peace of mind')
    // 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
    user.purchased.push('Merino jodhpurs')
    // 4. Console.log just the "Merino jodhpurs" from the purchased array.
    console.log(user.purchased[2])
// E. Object-within-object
    // 1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
    user.friend = {name:"Cindy", age:"21", location:"Emeryville", purchased: []}
    // 2. Console.log just the friend's name
    console.log(user.friend.name)
    // 3. Console.log just the friend's location
    console.log(user.friend.location)
    // 4. CHANGE the friend's age to 55
    user.friend.age = 55
    // 5. The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
    user.friend.purchased.push("The One Ring")
    // 6. The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
    user.friend.purchased.push("A latte")
    // 7. Console.log just "A latte" from the friend's purchased array.
    console.log(user.friend.purchased[1])
// F. Loops
    // 1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
    for(let i = 0; i< user.purchased.length; i++){
        console.log(user.purchased[i])
    }
    // 2. Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
    for(let i = 0; i< user.friend.purchased.length; i++){
        console.log(user.friend.purchased[i])
    }
// G. Functions can operate on objects
    // 1. Write a single function updateUser that takes no parameters. When the function is run, it should:
            // it should increment the user's age by 1
            // make the user's name uppercase
        // The function does not need a return statement, it will merely modify the user object.
        let updateUser = () => {
            user.age++;
            user.name = user.name.toUpperCase()
        }
    // 2. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
        let oldAndLoud = person => {
            this.age++;
            this.name = this.name.toUpperCase()
        }
        person = user
        console.log(oldAndLoud(user))
        // not correct...check