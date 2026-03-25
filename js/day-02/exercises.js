// ============================================
// Day 2 Exercises: Know Your Potions
// ============================================
// Instructions: Read each problem, write your answer, then run the file.
// Try to PREDICT the output before running!


// ------------------------------------------
// EXERCISE 1: Identify the potions
// Use typeof to print the type of each variable.
// Write your prediction as a comment first!
// ------------------------------------------

const villagePopulation = 237;
const mayorName = "Elder Thornwood";
const hasWall = true;
const dragonThreat = null;
let nextFestival;

// Example: console.log(typeof villagePopulation); // your prediction: ???
// Write your code here:



// ------------------------------------------
// EXERCISE 2: True or False?
// Without running the code, predict whether each comparison
// returns true or false. Then check yourself!
// ------------------------------------------

// Your predictions:
console.log(10 == "10");        // ???
console.log(10 === "10");       // ???
console.log(true == 1);         // ???
console.log(true === 1);        // ???
console.log(null == undefined); // ???
console.log(null === undefined);// ???
console.log(NaN === NaN);       // ???


// ------------------------------------------
// EXERCISE 3: The Potion Mixer
// Predict the result and type of each expression.
// ------------------------------------------

const mix1 = "100" + 50;
const mix2 = "100" - 50;
const mix3 = "power" * 3;
const mix4 = true + true + true;
const mix5 = "10" + 5 - 3;

// Print each result and its typeof:
// Example: console.log(mix1, typeof mix1); // your prediction: ???
// Write your code here:



// ------------------------------------------
// EXERCISE 4: Fix the potion check
// The village healer wrote this code to check potions but it's
// not working correctly. Find and fix the bugs.
// ------------------------------------------

let potionType = "healing";
let potionStrength = "50";   // Bug is here somewhere...
let totalHeal = potionStrength + 10;

console.log("Potion type:", potionType);
console.log("Healing amount:", totalHeal);
// Expected: "Healing amount: 60"
// Actual: ???
// Fix the code so it produces the expected output!


// ------------------------------------------
// EXERCISE 5: Type detective
// Write code that checks if a variable is a string.
// If it is, print "This is a text potion!"
// If it's a number, print "This is a power potion!"
// If it's a boolean, print "This is a truth potion!"
// If it's null, print "The bottle is empty!"
// If it's undefined, print "There is no bottle!"
// ------------------------------------------

const mysteryPotion = "Invisibility";  // Try changing this to test all cases!

// Write your code here:



// ==========================================
// BONUS CHALLENGE (+15 XP)
// Predict the EXACT output of each line without running it.
// ==========================================

console.log(typeof typeof 42);
console.log("5" + 3 - 2);
console.log("5" - 3 + "2");
console.log(true + "false");
console.log(undefined + 1);
console.log(null + 1);

// Your predictions:
// Line 1: ???
// Line 2: ???
// Line 3: ???
// Line 4: ???
// Line 5: ???
// Line 6: ???
