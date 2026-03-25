// ============================================
// Day 19: The Ticking Clock
// Topic: Callbacks & Timers
// ============================================
// Run these in Node.js or a browser console.


// ------------------------------------------
// EXAMPLE 1: setTimeout — delayed door
// ------------------------------------------

console.log("=== Example 1: setTimeout ===");
console.log("You pull the lever...");

setTimeout(function () {
  console.log("The stone door rumbles open! (3 seconds later)");
}, 3000);

console.log("You wait anxiously...");
// OUTPUT ORDER:
// "You pull the lever..."
// "You wait anxiously..."        ← runs IMMEDIATELY, doesn't wait!
// "The stone door rumbles open!" ← appears 3 seconds later


// ------------------------------------------
// EXAMPLE 2: setTimeout with arrow function
// ------------------------------------------

setTimeout(() => {
  console.log("\n=== Example 2 ===");
  console.log("A treasure chest appears! (2 seconds)");
}, 2000);


// ------------------------------------------
// EXAMPLE 3: clearTimeout — cancel the trap
// ------------------------------------------

console.log("\n=== Example 3: clearTimeout ===");

const explosionTimer = setTimeout(() => {
  console.log("BOOM! The room explodes!"); // This will NOT run
}, 5000);

// Cancel it before it fires!
clearTimeout(explosionTimer);
console.log("Trap disarmed! Explosion cancelled.");


// ------------------------------------------
// EXAMPLE 4: setInterval — poison damage
// ------------------------------------------

console.log("\n=== Example 4: setInterval ===");

let heroHp = 50;
let tickCount = 0;

const poisonInterval = setInterval(() => {
  heroHp -= 5;
  tickCount++;
  console.log(`Poison tick ${tickCount}! HP: ${heroHp}`);

  if (heroHp <= 30) {
    clearInterval(poisonInterval);
    console.log("You cured the poison!");
  }
}, 1000);

// Output (one per second):
// Poison tick 1! HP: 45
// Poison tick 2! HP: 40
// Poison tick 3! HP: 35
// Poison tick 4! HP: 30
// You cured the poison!


// ------------------------------------------
// EXAMPLE 5: The call stack in action
// ------------------------------------------

// This runs after the timers above finish
setTimeout(() => {
  console.log("\n=== Example 5: Call Stack ===");

  function enterDungeon() {
    console.log("1. Entering dungeon...");
    fightMonster();
    console.log("5. Dungeon cleared!");
  }

  function fightMonster() {
    console.log("2. Fighting monster...");
    useAbility();
    console.log("4. Monster defeated!");
  }

  function useAbility() {
    console.log("3. Using special ability!");
  }

  enterDungeon();

  // Call stack progression:
  // [enterDungeon]
  // [fightMonster, enterDungeon]
  // [useAbility, fightMonster, enterDungeon]
  // [fightMonster, enterDungeon]         ← useAbility popped off
  // [enterDungeon]                       ← fightMonster popped off
  // []                                   ← enterDungeon popped off
}, 6000);


// ------------------------------------------
// EXAMPLE 6: The callback pattern
// ------------------------------------------

setTimeout(() => {
  console.log("\n=== Example 6: Callbacks ===");

  function searchRoom(roomName, onComplete) {
    console.log(`Searching ${roomName}...`);
    // Simulate time passing
    setTimeout(() => {
      const loot = Math.random() > 0.5 ? "Gold Coins" : "Empty";
      onComplete(loot); // Call the callback with the result
    }, 1000);
  }

  // Pass a function as the callback
  searchRoom("The Crypt", function (foundItem) {
    console.log(`Search complete! Found: ${foundItem}`);
  });
}, 7000);


// ------------------------------------------
// EXAMPLE 7: Passing arguments to setTimeout
// ------------------------------------------

setTimeout(() => {
  console.log("\n=== Example 7: Timer with arguments ===");

  function castSpell(spellName, target) {
    console.log(`You cast ${spellName} on ${target}!`);
  }

  // You can pass extra arguments after the delay
  setTimeout(castSpell, 1000, "Fireball", "the Goblin King");
  // After 1 second: "You cast Fireball on the Goblin King!"
}, 9000);


// ------------------------------------------
// EXAMPLE 8: setTimeout with 0 delay — still async!
// ------------------------------------------

setTimeout(() => {
  console.log("\n=== Example 8: Zero delay ===");

  console.log("A: Before setTimeout");

  setTimeout(() => {
    console.log("C: Inside setTimeout (0ms)");
  }, 0);

  console.log("B: After setTimeout");

  // OUTPUT:
  // A: Before setTimeout
  // B: After setTimeout
  // C: Inside setTimeout (0ms)
  //
  // Even with 0ms delay, setTimeout waits for all synchronous code
  // to finish before running! It goes through the event queue.
}, 11000);


// ------------------------------------------
// EXAMPLE 9: Callback hell preview
// ------------------------------------------

setTimeout(() => {
  console.log("\n=== Example 9: Callback Hell ===");

  // Each door only opens after the previous one — nested callbacks
  setTimeout(() => {
    console.log("Door 1 opens...");
    setTimeout(() => {
      console.log("  Door 2 opens...");
      setTimeout(() => {
        console.log("    Door 3 opens...");
        setTimeout(() => {
          console.log("      Door 4 opens... You reached the treasure!");
        }, 500);
      }, 500);
    }, 500);
  }, 500);

  // This pyramid shape is called "callback hell" or "the pyramid of doom."
  // It's hard to read, hard to debug, and hard to maintain.
  // Tomorrow: Promises — the escape route!
}, 12000);


// ------------------------------------------
// EXAMPLE 10: Building a simple timer utility
// ------------------------------------------

setTimeout(() => {
  console.log("\n=== Example 10: Timer utility ===");

  function dungeonTimer(seconds, onTick, onComplete) {
    let remaining = seconds;

    const intervalId = setInterval(() => {
      onTick(remaining);
      remaining--;

      if (remaining < 0) {
        clearInterval(intervalId);
        onComplete();
      }
    }, 1000);

    return intervalId; // return ID in case caller wants to cancel
  }

  dungeonTimer(
    3,
    (sec) => console.log(`Time remaining: ${sec}s`),
    () => console.log("Time's up! The door slams shut!")
  );
}, 15000);
