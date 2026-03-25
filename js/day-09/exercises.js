// ============================================
// Day 9 Exercises: "The Hidden Caves"
// Scope & Closures
// ============================================
// Complete each exercise below. Run this file with: node exercises.js

// -----------------------------------------------
// EXERCISE 1: Scope Detective
// Without running the code, predict what each console.log prints.
// Then uncomment and run to check your answers.
// -----------------------------------------------

// 1a. What does this print?
/*
const quest = "Find the sword";
const startQuest = () => {
  const quest = "Defeat the dragon";
  console.log(quest);
};
startQuest();
console.log(quest);
*/
// Your prediction:
//   startQuest() prints: ???
//   final console.log prints: ???


// 1b. What does this print?
/*
let gold = 100;
const spendGold = () => {
  gold -= 30;
  let receipt = "Bought a potion";
  console.log(receipt);
};
spendGold();
console.log(gold);
// console.log(receipt);  // What would happen here?
*/
// Your prediction:
//   spendGold() logs: ???
//   console.log(gold): ???
//   console.log(receipt): ???


// 1c. What does this print? (tricky!)
/*
for (var i = 0; i < 3; i++) {
  // nothing inside
}
console.log(i);

for (let j = 0; j < 3; j++) {
  // nothing inside
}
// console.log(j);  // What would happen here?
*/
// Your prediction:
//   console.log(i): ???
//   console.log(j): ???


// -----------------------------------------------
// EXERCISE 2: Fix the Scope Bugs
// Each function below has a scope-related bug. Fix it.
// -----------------------------------------------

// 2a. This function should return the hero's title, but it has a scope issue.
//     Fix it without changing the function's purpose.
const getTitle = () => {
  if (true) {
    var title = "Dragon Slayer";  // Bug: what's wrong with var here?
  }
  return title;
};
// Actually, this one WORKS with var (it leaks out of the block).
// But rewrite it using let/const so the code is clean and predictable.
// YOUR FIX:


// 2b. This counter is broken — it always returns 1. Fix it.
//     (Hint: where should `count` be declared?)
const makeCounter = () => {
  const increment = () => {
    let count = 0;
    count++;
    return count;
  };
  return increment;
};
// const counter = makeCounter();
// console.log(counter()); // Should be 1
// console.log(counter()); // Should be 2
// console.log(counter()); // Should be 3
// YOUR FIX:


// -----------------------------------------------
// EXERCISE 3: Your First Closure
// Create a function that uses a closure to track state.
// -----------------------------------------------

// Create a function called `createHitCounter` that:
// - Takes no arguments
// - Returns a function that, when called:
//   - Increments an internal hit count
//   - Returns a string: "Hits: [count]"
//
// Each call to createHitCounter should produce an independent counter.

// YOUR CODE:
// const createHitCounter = ...

// Test:
// const swordHits = createHitCounter();
// const bowHits = createHitCounter();
// console.log(swordHits()); // "Hits: 1"
// console.log(swordHits()); // "Hits: 2"
// console.log(bowHits());   // "Hits: 1" (independent!)
// console.log(swordHits()); // "Hits: 3"


// -----------------------------------------------
// EXERCISE 4: Function Factory
// Create a function factory using closures.
// -----------------------------------------------

// Create a function `createAttack` that takes:
//   - attackName (string)
//   - baseDamage (number)
//
// It returns a function that takes a target name and returns:
//   "[attackName] hits [target] for [baseDamage] damage!"
//
// The returned function should use the closure to remember
// attackName and baseDamage.

// YOUR CODE:
// const createAttack = ...

// Test:
// const fireball = createAttack("Fireball", 40);
// const iceBlast = createAttack("Ice Blast", 35);
// const punch = createAttack("Punch", 5);
//
// console.log(fireball("Goblin"));    // "Fireball hits Goblin for 40 damage!"
// console.log(iceBlast("Troll"));     // "Ice Blast hits Troll for 35 damage!"
// console.log(punch("Dragon"));       // "Punch hits Dragon for 5 damage!"


// -----------------------------------------------
// EXERCISE 5: Private Data with Closures
// Build a player object with truly private state.
// -----------------------------------------------

// Create a function `createWallet` that takes a starting gold amount.
// Return an object with these methods:
//   - getBalance() — returns current gold
//   - earn(amount) — adds gold, returns new balance
//   - spend(amount) — subtracts gold IF enough gold exists
//       If enough: subtract and return `"Spent [amount] gold. Balance: [balance]"`
//       If not enough: return `"Not enough gold! Need [amount], have [balance]"`
//   - getHistory() — returns an array of all transactions
//       Each transaction is a string like "+50" or "-30"
//
// The gold balance and history should be PRIVATE (not directly accessible).

// YOUR CODE:
// const createWallet = ...

// Test:
// const wallet = createWallet(100);
// console.log(wallet.getBalance());        // 100
// console.log(wallet.earn(50));            // 150
// console.log(wallet.spend(30));           // "Spent 30 gold. Balance: 120"
// console.log(wallet.spend(200));          // "Not enough gold! Need 200, have 120"
// console.log(wallet.getHistory());        // ["+50", "-30"]
// console.log(wallet.getBalance());        // 120
// wallet.gold = 99999;  // This should NOT affect the real balance
// console.log(wallet.getBalance());        // Still 120


// -----------------------------------------------
// BONUS CHALLENGE: Treasure Vault
// -----------------------------------------------

// Create a `createVault` function that takes a password (string).
// Return an object with:
//   - store(password, item) — if password matches, add item to vault.
//       Return "Stored: [item]" or "ACCESS DENIED"
//   - retrieve(password, index) — if password matches, remove and return
//       the item at that index. Return the item or "ACCESS DENIED"
//   - peek(password) — if password matches, return a copy of all items
//       (not the original array!). Return the array or "ACCESS DENIED"
//   - changePassword(oldPass, newPass) — if oldPass matches, change the
//       password. Return "Password changed" or "ACCESS DENIED"
//
// The password, items array should all be private (closure variables).

// YOUR CODE HERE
