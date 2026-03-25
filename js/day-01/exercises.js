// ============================================
// Day 1 Exercises: The Three Treasure Chests
// ============================================
// Instructions: Read each problem, write your answer, then run the file.
// Try to PREDICT the output before running!


// ------------------------------------------
// EXERCISE 1: Fix the chest
// The village elder wrote this code but it's broken. Fix it.
// ------------------------------------------

// const villageName = "CodeVille";
// villageName = "BugTown";  // Why does this fail? Fix this code.
// console.log(villageName);

// Uncomment the lines above, run the file, see the error, then fix it.


// ------------------------------------------
// EXERCISE 2: Predict the output
// What will each console.log print? Write your guess first!
// ------------------------------------------

var x = 1;
let y = 2;
const z = 3;

{
  var x = 10;
  let y = 20;
  const z = 30;
  console.log("Inside block:", x, y, z);
}

console.log("Outside block:", x, y, z);

// Your prediction:
// Inside block:  ???
// Outside block: ???


// ------------------------------------------
// EXERCISE 3: Hoisting puzzle
// Without running the code, predict what each line prints.
// ------------------------------------------

console.log(a);
// console.log(b); // What would happen if this was uncommented?

var a = "I was hoisted!";
let b = "I was NOT hoisted!";

// Your prediction:
// Line 1 prints: ???
// Line 2 would print: ???


// ------------------------------------------
// EXERCISE 4: Choose the right chest
// Replace the ??? with var, let, or const (use modern best practices)
// ------------------------------------------

// A player's name never changes once set:
/* ??? */ playerName2 = "Aria";

// A player's health goes up and down during battle:
/* ??? */ playerHealth2 = 100;

// A player's max level is always 99:
/* ??? */ MAX_LEVEL2 = 99;

// A counter in a for loop:
// for (??? i = 0; i < 5; i++) {
//   console.log("Step", i);
// }
// Replace each ??? with var, let, or const (use modern best practices)
// Then uncomment and run!


// ------------------------------------------
// EXERCISE 5: The Mutation Trap
// Will this code work or crash? Why?
// ------------------------------------------

const gear = ["Helmet", "Boots"];
gear.push("Gloves");
gear[0] = "Golden Helmet";
console.log(gear);

// Your prediction: ???


// ==========================================
// BONUS CHALLENGE (+15 XP)
// Predict the EXACT output without running it.
// ==========================================

var hero = "Warrior";
function selectClass() {
  console.log(hero);
  var hero = "Mage";
  console.log(hero);
}
selectClass();
console.log(hero);

// Your prediction:
// Line 1 prints: ???
// Line 2 prints: ???
// Line 3 prints: ???
