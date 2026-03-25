// ============================================
// Day 2: Know Your Potions
// Topic: Data Types, typeof, Type Coercion
// ============================================

// ------------------------------------------
// EXAMPLE 1: The seven primitive types
// ------------------------------------------

const heroName = "Aria";           // string
const health = 100;                // number
const isAlive = true;              // boolean
const equippedPet = null;          // null (intentionally empty)
let nextQuest;                     // undefined (not assigned yet)
const uniqueID = Symbol("hero");   // symbol (unique identifier)
const bigDamage = 9001n;           // bigint (huge number)

console.log("--- The Seven Potions ---");
console.log(heroName);     // "Aria"
console.log(health);       // 100
console.log(isAlive);      // true
console.log(equippedPet);  // null
console.log(nextQuest);    // undefined
console.log(uniqueID);     // Symbol(hero)
console.log(bigDamage);    // 9001n


// ------------------------------------------
// EXAMPLE 2: The typeof identification spell
// ------------------------------------------

console.log("\n--- typeof Spell ---");
console.log(typeof "Fireball");     // "string"
console.log(typeof 42);            // "number"
console.log(typeof true);          // "boolean"
console.log(typeof undefined);     // "undefined"
console.log(typeof null);          // "object"  ← THE FAMOUS BUG!
console.log(typeof Symbol("x"));   // "symbol"
console.log(typeof 99n);           // "bigint"

// Bonus quirks:
console.log(typeof NaN);           // "number"  ← NaN is technically a number!
console.log(typeof Infinity);      // "number"
console.log(typeof []);            // "object"  (arrays are objects)
console.log(typeof {});            // "object"


// ------------------------------------------
// EXAMPLE 3: Loose equality (==) — the trickster
// ------------------------------------------

console.log("\n--- Loose Equality (==) ---");
console.log(5 == "5");            // true  — string "5" is coerced to number 5
console.log(0 == false);          // true  — false is coerced to 0
console.log("" == false);         // true  — both coerce to 0
console.log(null == undefined);   // true  — special rule in the spec
console.log("0" == false);        // true  — both become 0


// ------------------------------------------
// EXAMPLE 4: Strict equality (===) — the honest one
// ------------------------------------------

console.log("\n--- Strict Equality (===) ---");
console.log(5 === "5");            // false — different types, instant false
console.log(0 === false);          // false
console.log("" === false);         // false
console.log(null === undefined);   // false
console.log("0" === false);        // false

// This is why we ALWAYS use ===
// It does exactly what you'd expect — no surprises.


// ------------------------------------------
// EXAMPLE 5: Coercion in math — the potion mixer
// ------------------------------------------

console.log("\n--- Coercion in Math ---");
console.log("5" + 3);      // "53"  — string wins, concatenation!
console.log("5" - 3);      // 2     — minus forces numeric conversion
console.log("5" * 2);      // 10    — multiply forces numeric conversion
console.log("5" / 1);      // 5     — divide forces numeric conversion
console.log(true + 1);     // 2     — true becomes 1
console.log(false + 1);    // 1     — false becomes 0
console.log("hello" * 2);  // NaN   — can't convert "hello" to a number


// ------------------------------------------
// EXAMPLE 6: NaN — the cursed potion
// ------------------------------------------

console.log("\n--- NaN (Not a Number) ---");
const cursed = "abc" * 3;
console.log(cursed);              // NaN
console.log(typeof cursed);      // "number" ← ironic, right?
console.log(cursed === cursed);  // false    ← NaN is not equal to ANYTHING, even itself!
console.log(isNaN(cursed));      // true     ← use isNaN() to check
console.log(Number.isNaN(cursed)); // true   ← safer version


// ------------------------------------------
// EXAMPLE 7: undefined vs null
// ------------------------------------------

console.log("\n--- undefined vs null ---");

// undefined = "I haven't been given a value yet"
let weapon;
console.log(weapon);        // undefined
console.log(typeof weapon); // "undefined"

// null = "I've been intentionally set to nothing"
let shield = null;
console.log(shield);        // null
console.log(typeof shield); // "object" (the bug!)

// How to properly check for null:
console.log(shield === null); // true — use strict equality


// ------------------------------------------
// EXAMPLE 8: Checking types in practice
// ------------------------------------------

console.log("\n--- Practical Type Checking ---");

const potionLabel = "Healing Elixir";
const potionPower = 50;
const isMagical = true;
const sideEffect = null;

// A function that identifies potions (preview of functions — Day 7!)
if (typeof potionLabel === "string") {
  console.log("The label reads: " + potionLabel);
}

if (typeof potionPower === "number" && potionPower > 0) {
  console.log("This potion restores " + potionPower + " HP");
}

if (typeof isMagical === "boolean" && isMagical) {
  console.log("This potion glows with magic!");
}

if (sideEffect === null) {
  console.log("No side effects. Safe to drink!");
}
