// ============================================
// Day 6: The Training Grounds
// Topic: Loops (for, while, do...while)
// ============================================

// ------------------------------------------
// EXAMPLE 1: Basic for loop — training reps
// ------------------------------------------

console.log("--- For Loop: Sword Training ---");

for (let rep = 1; rep <= 5; rep++) {
  console.log(`Swing #${rep} - Hit!`);
}
console.log("Training complete!\n");

// Breakdown:
// let rep = 1    → start at rep 1
// rep <= 5       → keep going while rep is 5 or less
// rep++          → add 1 after each swing


// ------------------------------------------
// EXAMPLE 2: for loop — counting down
// ------------------------------------------

console.log("--- Countdown to Battle ---");

for (let count = 5; count >= 1; count--) {
  console.log(`${count}...`);
}
console.log("FIGHT!\n");


// ------------------------------------------
// EXAMPLE 3: for loop — stepping by 2
// ------------------------------------------

console.log("--- Even Levels Only ---");

for (let level = 2; level <= 10; level += 2) {
  console.log(`Level ${level} checkpoint reached`);
}
console.log("");


// ------------------------------------------
// EXAMPLE 4: while loop — train until exhausted
// ------------------------------------------

console.log("--- While Loop: Stamina Training ---");

let stamina = 12;

while (stamina > 0) {
  console.log(`Training! Stamina remaining: ${stamina}`);
  stamina -= 4;
}
console.log(`Exhausted! Stamina: ${stamina}\n`);

// The loop checks stamina > 0 BEFORE each iteration.
// When stamina hits 0 (or below), it stops.


// ------------------------------------------
// EXAMPLE 5: while loop — random monster encounters
// ------------------------------------------

console.log("--- While Loop: Monster Hunt ---");

let monstersDefeated = 0;
let heroEnergy = 100;

while (heroEnergy > 20) {
  const monsterDamage = 15 + Math.floor(Math.random() * 10); // 15-24
  heroEnergy -= monsterDamage;
  monstersDefeated++;
  console.log(`Defeated monster #${monstersDefeated}! Energy: ${heroEnergy}`);
}
console.log(`Hunt over. ${monstersDefeated} monsters defeated.\n`);


// ------------------------------------------
// EXAMPLE 6: do...while — at least one attempt
// ------------------------------------------

console.log("--- Do...While: Lock Picking ---");

let lockPicked = false;
let attempt = 0;

do {
  attempt++;
  const roll = Math.floor(Math.random() * 6) + 1; // 1-6
  console.log(`Attempt #${attempt}: Rolled a ${roll}`);
  if (roll >= 5) {
    lockPicked = true;
    console.log("Lock picked successfully!");
  }
} while (!lockPicked && attempt < 10);

if (!lockPicked) {
  console.log("Failed after 10 attempts.");
}
console.log("");

// The do...while guarantees at least ONE attempt, even if
// the lock was somehow already open.


// ------------------------------------------
// EXAMPLE 7: do...while runs at least once
// ------------------------------------------

console.log("--- Do...While Runs At Least Once ---");

let counter = 10;

// This while loop runs ZERO times (condition false from start):
while (counter < 5) {
  console.log("While: this won't print");
  counter++;
}

// This do...while runs ONCE even though condition is false:
counter = 10;
do {
  console.log("Do-while: this prints once! Counter:", counter);
  counter++;
} while (counter < 5);
console.log("");


// ------------------------------------------
// EXAMPLE 8: break — stop searching
// ------------------------------------------

console.log("--- Break: Finding the Boss ---");

const enemies = ["Goblin", "Skeleton", "Slime", "BOSS: Dragon", "Bat", "Ghost"];

for (let i = 0; i < enemies.length; i++) {
  console.log(`Encountered: ${enemies[i]}`);

  if (enemies[i].includes("BOSS")) {
    console.log("BOSS FOUND! Preparing for battle...");
    break;  // stop searching — we found the boss
  }
}
// Note: "Bat" and "Ghost" are never printed — break exits early.
console.log("");


// ------------------------------------------
// EXAMPLE 9: continue — skip certain reps
// ------------------------------------------

console.log("--- Continue: Skip Injured Rounds ---");

for (let round = 1; round <= 6; round++) {
  if (round === 3 || round === 5) {
    console.log(`Round ${round}: INJURED — skipping!`);
    continue;  // skip the rest of this iteration
  }
  console.log(`Round ${round}: Training complete!`);
}
console.log("");


// ------------------------------------------
// EXAMPLE 10: Nested loops — the training grid
// ------------------------------------------

console.log("--- Nested Loops: Training Grid ---");

// 3 rounds, each with 3 exercises
for (let round = 1; round <= 3; round++) {
  console.log(`\n  Round ${round}:`);
  for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`    Exercise ${exercise} complete`);
  }
}
console.log("");

// Building a visual pattern:
console.log("--- Pattern: Staircase ---");

for (let row = 1; row <= 5; row++) {
  let stairs = "";
  for (let col = 1; col <= row; col++) {
    stairs += "#";
  }
  console.log(stairs);
}
// #
// ##
// ###
// ####
// #####
