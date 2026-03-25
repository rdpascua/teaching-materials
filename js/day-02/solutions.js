// ============================================
// Day 2 Solutions: Know Your Potions
// ============================================


// ------------------------------------------
// EXERCISE 1: Identify the potions
// ------------------------------------------

const villagePopulation = 237;
const mayorName = "Elder Thornwood";
const hasWall = true;
const dragonThreat = null;
let nextFestival;

console.log(typeof villagePopulation); // "number"
console.log(typeof mayorName);         // "string"
console.log(typeof hasWall);           // "boolean"
console.log(typeof dragonThreat);      // "object"  ← the null bug!
console.log(typeof nextFestival);      // "undefined"

// KEY LESSON: typeof null returns "object" — this is a well-known JS bug.
// To check for null, use: dragonThreat === null


// ------------------------------------------
// EXERCISE 2: True or False?
// ------------------------------------------

console.log(10 == "10");         // true   — == coerces "10" to 10
console.log(10 === "10");        // false  — different types, no coercion
console.log(true == 1);          // true   — true coerces to 1
console.log(true === 1);         // false  — boolean !== number
console.log(null == undefined);  // true   — special rule: they're "equal" with ==
console.log(null === undefined); // false  — different types
console.log(NaN === NaN);        // false  — NaN is never equal to anything!


// ------------------------------------------
// EXERCISE 3: The Potion Mixer
// ------------------------------------------

const mix1 = "100" + 50;
const mix2 = "100" - 50;
const mix3 = "power" * 3;
const mix4 = true + true + true;
const mix5 = "10" + 5 - 3;

console.log(mix1, typeof mix1); // "10050" "string"
// WHY: + with a string = concatenation. "100" + 50 = "10050"

console.log(mix2, typeof mix2); // 50 "number"
// WHY: - always does math. "100" becomes 100, then 100 - 50 = 50

console.log(mix3, typeof mix3); // NaN "number"
// WHY: * tries to make "power" a number. It can't, so result is NaN.

console.log(mix4, typeof mix4); // 3 "number"
// WHY: true = 1. So 1 + 1 + 1 = 3

console.log(mix5, typeof mix5); // 102 "number"
// WHY: Left to right! "10" + 5 = "105" (string). Then "105" - 3 = 102 (number).
// The minus forces "105" back to a number!


// ------------------------------------------
// EXERCISE 4: Fix the potion check
// ------------------------------------------

// PROBLEM: potionStrength is a string "50", not a number 50.
// When you do "50" + 10, JS concatenates: "5010" instead of 60.

// FIX: Make potionStrength a number:
let potionType = "healing";
let potionStrength = 50;   // Removed the quotes — now it's a number!
let totalHeal = potionStrength + 10;

console.log("Potion type:", potionType);
console.log("Healing amount:", totalHeal); // "Healing amount: 60" ✓

// ALTERNATIVE FIX (if you can't change the original data):
// let totalHeal = Number(potionStrength) + 10;
// or: let totalHeal = parseInt(potionStrength) + 10;


// ------------------------------------------
// EXERCISE 5: Type detective
// ------------------------------------------

const mysteryPotion = "Invisibility";

if (typeof mysteryPotion === "string") {
  console.log("This is a text potion!");
} else if (typeof mysteryPotion === "number") {
  console.log("This is a power potion!");
} else if (typeof mysteryPotion === "boolean") {
  console.log("This is a truth potion!");
} else if (mysteryPotion === null) {
  console.log("The bottle is empty!");
} else if (typeof mysteryPotion === "undefined") {
  console.log("There is no bottle!");
}

// IMPORTANT: We check for null with === null, NOT typeof.
// Because typeof null === "object" (the bug!), we need the strict check.
// Also: the null check must come BEFORE the undefined check, or you could
// use typeof for undefined since typeof undefined === "undefined" works fine.


// ==========================================
// BONUS CHALLENGE SOLUTION
// ==========================================

console.log(typeof typeof 42);       // "string"
// WHY: typeof 42 = "number" (a string). typeof "number" = "string".
// typeof always returns a string!

console.log("5" + 3 - 2);            // 51
// WHY: "5" + 3 = "53" (concatenation). "53" - 2 = 51 (math).

console.log("5" - 3 + "2");          // "22"
// WHY: "5" - 3 = 2 (math). 2 + "2" = "22" (concatenation).

console.log(true + "false");         // "truefalse"
// WHY: + with a string = concatenation. true becomes "true".

console.log(undefined + 1);          // NaN
// WHY: undefined can't be converted to a number. undefined + 1 = NaN.

console.log(null + 1);               // 1
// WHY: null converts to 0 in numeric context. 0 + 1 = 1.
// This is different from undefined! null = 0, undefined = NaN.
