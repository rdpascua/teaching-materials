// ============================================
// Day 1 Solutions: The Three Treasure Chests
// ============================================


// ------------------------------------------
// EXERCISE 1: Fix the chest
// ------------------------------------------
// const cannot be reassigned! Change const to let, or remove the reassignment.

// Option A: Use let instead
let villageName = "CodeVille";
villageName = "BugTown";
console.log(villageName); // "BugTown"

// Option B: Keep const and remove the reassignment
// const villageName = "CodeVille";
// console.log(villageName); // "CodeVille"


// ------------------------------------------
// EXERCISE 2: Predict the output
// ------------------------------------------

var x = 1;
let y = 2;
const z = 3;

{
  var x = 10;   // overwrites the outer x (var ignores blocks)
  let y = 20;   // NEW variable, only inside this block
  const z = 30; // NEW variable, only inside this block
  console.log("Inside block:", x, y, z);
}

console.log("Outside block:", x, y, z);

// ANSWER:
// Inside block:  10 20 30
// Outside block: 10  2  3
//                ↑↑
//           var x was overwritten to 10!
//           let y and const z kept their original outer values.


// ------------------------------------------
// EXERCISE 3: Hoisting puzzle
// ------------------------------------------

console.log(a); // undefined  (var is hoisted, value is not)
// console.log(b); // ReferenceError (let has TDZ — temporal dead zone)

var a = "I was hoisted!";
let b = "I was NOT hoisted!";


// ------------------------------------------
// EXERCISE 4: Choose the right chest
// ------------------------------------------

const playerName = "Aria";      // never changes → const
let playerHealth = 100;          // changes during game → let
const MAX_LEVEL = 99;            // constant value → const

for (let i = 0; i < 5; i++) {   // loop counter changes → let
  console.log("Step", i);
}


// ------------------------------------------
// EXERCISE 5: The Mutation Trap
// ------------------------------------------

const gear = ["Helmet", "Boots"];
gear.push("Gloves");         // Works! Mutating the array, not reassigning.
gear[0] = "Golden Helmet";   // Works! Changing an element, not reassigning.
console.log(gear);           // ["Golden Helmet", "Boots", "Gloves"]

// ANSWER: It works! const prevents reassignment (gear = something_else),
// but it does NOT prevent you from changing what's inside the array/object.


// ==========================================
// BONUS CHALLENGE SOLUTION
// ==========================================

var hero = "Warrior";
function selectClass() {
  // Behind the scenes, JS does: var hero;  (hoisted inside function)
  console.log(hero);    // undefined  (local var hero is hoisted, shadows outer)
  var hero = "Mage";
  console.log(hero);    // "Mage"
}
selectClass();
console.log(hero);      // "Warrior" (the outer var was never touched)

// ANSWER:
// undefined
// "Mage"
// "Warrior"
//
// WHY: var inside a function creates a LOCAL variable. It gets hoisted
// to the top of the function (not the value, just the declaration).
// So the inner `hero` shadows the outer one, starts as undefined,
// then gets set to "Mage". The outer `hero` is untouched.
