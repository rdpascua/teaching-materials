// ============================================
// Day 1: The Three Treasure Chests
// Topic: var, let, const, hoisting
// ============================================

// ------------------------------------------
// EXAMPLE 1: Declaring variables
// ------------------------------------------

var weapon = "Rusty Sword";    // old way
let health = 100;              // modern way (reassignable)
const heroName = "Aria";       // modern way (locked forever)

console.log(weapon);   // "Rusty Sword"
console.log(health);   // 100
console.log(heroName); // "Aria"


// ------------------------------------------
// EXAMPLE 2: var leaks out of blocks
// ------------------------------------------

if (true) {
  var leaked = "I escaped the block!";
}
console.log(leaked); // "I escaped the block!" — var ignores block scope

if (true) {
  let contained = "I stay inside!";
}
// console.log(contained); // Uncomment to see: ReferenceError!


// ------------------------------------------
// EXAMPLE 3: Hoisting with var
// ------------------------------------------

console.log(ghost); // undefined — no error, just empty
var ghost = "Boo!";
console.log(ghost); // "Boo!"

// Behind the scenes, JS does this:
// var ghost;            ← declaration moves to top
// console.log(ghost);   ← undefined
// ghost = "Boo!";       ← assignment stays here


// ------------------------------------------
// EXAMPLE 4: Temporal Dead Zone (TDZ) with let
// ------------------------------------------

// Uncomment the next two lines to see the TDZ in action:
// console.log(shield); // ReferenceError: Cannot access 'shield' before initialization
// let shield = "Wooden Shield";

// The "dead zone" is between the start of the block and the let declaration.
// JavaScript knows the variable exists, but won't let you touch it yet.


// ------------------------------------------
// EXAMPLE 5: const prevents reassignment
// ------------------------------------------

const birthYear = 1995;
// birthYear = 2000; // Uncomment to see: TypeError: Assignment to constant variable!

// BUT — const does NOT prevent mutation:
const inventory = ["Sword", "Shield"];
inventory.push("Potion");
console.log(inventory); // ["Sword", "Shield", "Potion"] — this works!

// You can change what's INSIDE the chest, just can't swap the chest itself.


// ------------------------------------------
// EXAMPLE 6: let allows reassignment
// ------------------------------------------

let mood = "calm";
console.log(mood); // "calm"

mood = "battle-ready";
console.log(mood); // "battle-ready"


// ------------------------------------------
// EXAMPLE 7: var allows redeclaration (dangerous!)
// ------------------------------------------

var score = 10;
var score = 50;  // No error — silently overwrites!
console.log(score); // 50

// let score2 = 10;
// let score2 = 50; // Uncomment to see: SyntaxError: already been declared


// ------------------------------------------
// EXAMPLE 8: Block scope demo
// ------------------------------------------

{
  let blockSecret = "only visible inside these braces";
  const blockLocked = "also only inside";
  var blockLeaker = "I escape!";
}

// console.log(blockSecret); // ReferenceError
// console.log(blockLocked); // ReferenceError
console.log(blockLeaker);    // "I escape!" — var ignores the block
