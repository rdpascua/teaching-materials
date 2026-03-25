// ============================================
// Day 9 Solutions: "The Hidden Caves"
// Scope & Closures
// ============================================

// -----------------------------------------------
// EXERCISE 1: Scope Detective
// -----------------------------------------------

console.log("=== EXERCISE 1a ===");
// 1a.
const quest = "Find the sword";
const startQuest = () => {
  const quest = "Defeat the dragon";  // Shadows the outer `quest`
  console.log(quest);  // "Defeat the dragon" — uses the local variable
};
startQuest();
console.log(quest);  // "Find the sword" — the global was never changed
// EXPLANATION: The inner `quest` shadows the outer one. They're two
// separate variables. The global one is untouched.


console.log("\n=== EXERCISE 1b ===");
// 1b.
let gold = 100;
const spendGold = () => {
  gold -= 30;  // Modifies the OUTER gold variable (no new declaration)
  let receipt = "Bought a potion";
  console.log(receipt);  // "Bought a potion"
};
spendGold();
console.log(gold);  // 70 — the outer variable was modified
// console.log(receipt);  // ReferenceError — receipt is function-scoped
// EXPLANATION: There's no `let gold` inside the function, so JS uses
// the outer `gold` and modifies it. `receipt` is local and can't be
// seen outside.


console.log("\n=== EXERCISE 1c ===");
// 1c.
for (var i = 0; i < 3; i++) {}
console.log(i);  // 3 — var is NOT block-scoped, it leaked out

for (let j = 0; j < 3; j++) {}
// console.log(j);  // ReferenceError — let IS block-scoped
// EXPLANATION: var leaks out of for-loops. let stays inside.
// This is a major reason to always use let instead of var.


// -----------------------------------------------
// EXERCISE 2: Fix the Scope Bugs
// -----------------------------------------------

console.log("\n=== EXERCISE 2a ===");
// 2a. FIX: Move the declaration outside the if block, or just use const
//     since the if(true) always runs. The cleanest fix:
const getTitle = () => {
  const title = "Dragon Slayer";
  return title;
};
// We removed the unnecessary if-block entirely. If the if-block is needed
// for logic, move the declaration before it:
// const getTitle = () => {
//   let title = "";
//   if (someCondition) { title = "Dragon Slayer"; }
//   return title;
// };
console.log(getTitle());  // "Dragon Slayer"


console.log("\n=== EXERCISE 2b ===");
// 2b. FIX: Move `count` to the outer function so it persists between calls
const makeCounter = () => {
  let count = 0;  // MOVED HERE — now it's in the closure, not re-created each call
  const increment = () => {
    count++;
    return count;
  };
  return increment;
};
// EXPLANATION: When count was inside `increment`, it was reset to 0 every
// call. By moving it to `makeCounter`, the closure preserves it.

const counter = makeCounter();
console.log(counter());  // 1
console.log(counter());  // 2
console.log(counter());  // 3


// -----------------------------------------------
// EXERCISE 3: Your First Closure
// -----------------------------------------------

console.log("\n=== EXERCISE 3 ===");

const createHitCounter = () => {
  let count = 0;
  return () => {
    count++;
    return `Hits: ${count}`;
  };
};
// The returned arrow function closes over `count`. Each call to
// createHitCounter() creates a new `count` variable, so different
// counters are independent.

const swordHits = createHitCounter();
const bowHits = createHitCounter();
console.log(swordHits());  // "Hits: 1"
console.log(swordHits());  // "Hits: 2"
console.log(bowHits());    // "Hits: 1" (independent!)
console.log(swordHits());  // "Hits: 3"


// -----------------------------------------------
// EXERCISE 4: Function Factory
// -----------------------------------------------

console.log("\n=== EXERCISE 4 ===");

const createAttack = (attackName, baseDamage) => {
  return (target) => `${attackName} hits ${target} for ${baseDamage} damage!`;
};
// The returned function closes over both `attackName` and `baseDamage`.
// This is a "function factory" — we create specialized functions from
// a general template.

const fireball = createAttack("Fireball", 40);
const iceBlast = createAttack("Ice Blast", 35);
const punch = createAttack("Punch", 5);

console.log(fireball("Goblin"));   // "Fireball hits Goblin for 40 damage!"
console.log(iceBlast("Troll"));    // "Ice Blast hits Troll for 35 damage!"
console.log(punch("Dragon"));      // "Punch hits Dragon for 5 damage!"


// -----------------------------------------------
// EXERCISE 5: Private Data with Closures
// -----------------------------------------------

console.log("\n=== EXERCISE 5 ===");

const createWallet = (startingGold) => {
  let balance = startingGold;  // Private — only accessible through methods
  const history = [];          // Private — tracks all transactions

  return {
    getBalance: () => balance,

    earn: (amount) => {
      balance += amount;
      history.push(`+${amount}`);
      return balance;
    },

    spend: (amount) => {
      if (amount > balance) {
        return `Not enough gold! Need ${amount}, have ${balance}`;
      }
      balance -= amount;
      history.push(`-${amount}`);
      return `Spent ${amount} gold. Balance: ${balance}`;
    },

    getHistory: () => [...history],  // Return a copy, not the original
  };
};
// EXPLANATION:
// - `balance` and `history` are closure variables — truly private.
// - The methods close over these variables and can read/modify them.
// - Setting wallet.gold = 99999 adds a NEW property to the object
//   but does NOT affect the private `balance` variable.
// - getHistory returns [...history] (a spread copy) so the caller
//   can't modify our internal array.

const wallet = createWallet(100);
console.log(wallet.getBalance());         // 100
console.log(wallet.earn(50));             // 150
console.log(wallet.spend(30));            // "Spent 30 gold. Balance: 120"
console.log(wallet.spend(200));           // "Not enough gold! Need 200, have 120"
console.log(wallet.getHistory());         // ["+50", "-30"]
console.log(wallet.getBalance());         // 120
wallet.gold = 99999;                      // Does nothing to the real balance
console.log(wallet.getBalance());         // Still 120


// -----------------------------------------------
// BONUS CHALLENGE: Treasure Vault
// -----------------------------------------------

console.log("\n=== BONUS ===");

const createVault = (initialPassword) => {
  let password = initialPassword;  // Private — can only be changed via method
  const items = [];                // Private — the stored treasures

  const checkAccess = (attempt) => attempt === password;

  return {
    store: (pass, item) => {
      if (!checkAccess(pass)) return "ACCESS DENIED";
      items.push(item);
      return `Stored: ${item}`;
    },

    retrieve: (pass, index) => {
      if (!checkAccess(pass)) return "ACCESS DENIED";
      if (index < 0 || index >= items.length) return "Invalid index";
      const [removed] = items.splice(index, 1);
      return removed;
    },

    peek: (pass) => {
      if (!checkAccess(pass)) return "ACCESS DENIED";
      return [...items];  // Return a copy so they can't modify our array
    },

    changePassword: (oldPass, newPass) => {
      if (!checkAccess(oldPass)) return "ACCESS DENIED";
      password = newPass;
      return "Password changed";
    },
  };
};
// EXPLANATION:
// - `password` and `items` are completely private.
// - `checkAccess` is also private — a helper closure function.
// - Even `peek` returns a copy, so the caller can't push items
//   without going through `store`.
// - changePassword modifies the closure variable directly.

const vault = createVault("dragon123");
console.log(vault.store("dragon123", "Excalibur"));   // "Stored: Excalibur"
console.log(vault.store("dragon123", "Holy Grail"));   // "Stored: Holy Grail"
console.log(vault.store("wrong", "Stolen Goods"));     // "ACCESS DENIED"
console.log(vault.peek("dragon123"));                  // ["Excalibur", "Holy Grail"]
console.log(vault.retrieve("dragon123", 0));           // "Excalibur"
console.log(vault.peek("dragon123"));                  // ["Holy Grail"]
console.log(vault.changePassword("dragon123", "newpass"));  // "Password changed"
console.log(vault.peek("dragon123"));                  // "ACCESS DENIED"
console.log(vault.peek("newpass"));                    // ["Holy Grail"]
