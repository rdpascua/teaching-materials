// ============================================
// Day 18: The Trap Room
// Topic: Error Handling
// ============================================
// These examples run in Node.js or a browser console.


// ------------------------------------------
// EXAMPLE 1: Without error handling — instant death
// ------------------------------------------

// let dragon = undefined;
// dragon.breatheFire();
// TypeError: Cannot read properties of undefined (reading 'breatheFire')
// Everything after this line NEVER runs. Your program is dead.

console.log("--- Example 1: Without try/catch, errors kill the program ---");
console.log("(Commented out to prevent crash. Uncomment to see it die.)");


// ------------------------------------------
// EXAMPLE 2: With try/catch — surviving the trap
// ------------------------------------------

console.log("\n--- Example 2: try/catch saves you ---");

try {
  let dragon = undefined;
  dragon.breatheFire(); // This throws a TypeError
  console.log("This line never runs");
} catch (error) {
  console.log("Trap caught!");
  console.log("Error type:", error.name);      // "TypeError"
  console.log("Message:", error.message);       // "Cannot read properties of..."
}

console.log("Program continues safely!"); // This runs because we caught the error


// ------------------------------------------
// EXAMPLE 3: The finally block — always runs
// ------------------------------------------

console.log("\n--- Example 3: finally always runs ---");

function openTreasureChest(isTrapped) {
  console.log("Approaching the chest...");

  try {
    if (isTrapped) {
      throw new Error("Poison gas fills the room!");
    }
    console.log("You found 100 gold coins!");
  } catch (error) {
    console.log("TRAP:", error.message);
  } finally {
    console.log("Closing the chest lid."); // Runs no matter what!
  }
}

openTreasureChest(false);
// Approaching the chest...
// You found 100 gold coins!
// Closing the chest lid.

console.log("---");

openTreasureChest(true);
// Approaching the chest...
// TRAP: Poison gas fills the room!
// Closing the chest lid.


// ------------------------------------------
// EXAMPLE 4: Different error types
// ------------------------------------------

console.log("\n--- Example 4: Error types ---");

// TypeError — wrong type
try {
  const sword = 42;
  sword.swing(); // numbers don't have a .swing() method
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
  // TypeError: sword.swing is not a function
}

// ReferenceError — variable doesn't exist
try {
  console.log(mysteriousSpell); // never declared
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
  // ReferenceError: mysteriousSpell is not defined
}

// RangeError — value out of range
try {
  const army = new Array(-5); // can't have negative length
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
  // RangeError: Invalid array length
}


// ------------------------------------------
// EXAMPLE 5: Throwing custom errors
// ------------------------------------------

console.log("\n--- Example 5: Throwing custom errors ---");

function drinkPotion(potion) {
  if (!potion) {
    throw new Error("You have no potion to drink!");
  }
  if (typeof potion.name !== "string") {
    throw new TypeError("Potion must have a name (string).");
  }
  if (potion.power < 0) {
    throw new RangeError("Potion power cannot be negative!");
  }

  console.log(`You drank ${potion.name}. Healed for ${potion.power} HP!`);
}

// Good potion
try {
  drinkPotion({ name: "Health Elixir", power: 50 });
} catch (e) {
  console.log("Error:", e.message);
}

// No potion
try {
  drinkPotion(null);
} catch (e) {
  console.log("Error:", e.message);
  // "You have no potion to drink!"
}

// Bad potion
try {
  drinkPotion({ name: "Cursed Vial", power: -10 });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
  // "RangeError: Potion power cannot be negative!"
}


// ------------------------------------------
// EXAMPLE 6: Checking error type with instanceof
// ------------------------------------------

console.log("\n--- Example 6: instanceof checks ---");

try {
  const emptyBag = undefined;
  emptyBag.open();
} catch (e) {
  if (e instanceof TypeError) {
    console.log("You tried to use something that doesn't exist!");
  } else if (e instanceof ReferenceError) {
    console.log("You referenced a variable that was never declared!");
  } else {
    console.log("Unknown trap:", e.message);
  }
}


// ------------------------------------------
// EXAMPLE 7: The error stack trace
// ------------------------------------------

console.log("\n--- Example 7: Stack trace ---");

function enterDungeon() {
  return openDoor();
}

function openDoor() {
  return disarmTrap();
}

function disarmTrap() {
  throw new Error("The trap explodes!");
}

try {
  enterDungeon();
} catch (e) {
  console.log("Stack trace shows the path to the error:");
  console.log(e.stack);
  // Error: The trap explodes!
  //   at disarmTrap (...)
  //   at openDoor (...)
  //   at enterDungeon (...)
  // ^^^ Shows the call chain — where the error originated and how we got there
}


// ------------------------------------------
// EXAMPLE 8: Safe division function
// ------------------------------------------

console.log("\n--- Example 8: Safe division ---");

function safeDivide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers!");
  }
  if (b === 0) {
    throw new RangeError("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(safeDivide(100, 4));       // 25
  console.log(safeDivide(100, 0));       // throws RangeError
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}

try {
  console.log(safeDivide("gold", 5));    // throws TypeError
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}


// ------------------------------------------
// EXAMPLE 9: try/catch does NOT catch syntax errors
// ------------------------------------------

console.log("\n--- Example 9: Syntax errors ---");

// SyntaxError happens at PARSE TIME, before the code even runs.
// try/catch can't catch it because the code never executes.

// Uncomment to see — this breaks the entire file:
// try {
//   let 123abc = "bad variable name";  // SyntaxError
// } catch (e) {
//   console.log("Caught!"); // Never reaches here
// }

// But you CAN catch SyntaxError from JSON.parse:
try {
  const data = JSON.parse("{ broken json }");
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
  // SyntaxError: Expected property name or '}'...
}

console.log("\nAll examples complete! Program survived every trap.");
