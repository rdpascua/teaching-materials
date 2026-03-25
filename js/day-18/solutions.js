// ============================================
// Day 18 Solutions: The Trap Room
// ============================================


// ------------------------------------------
// EXERCISE 1: Catch the Trap
// ------------------------------------------

try {
  const monster = undefined;
  monster.roar(); // TypeError
} catch (error) {
  console.log("Trap caught:", error.message);
  // "Trap caught: Cannot read properties of undefined (reading 'roar')"
}

console.log("You survived!");

// WHY: Without try/catch, the TypeError kills the program and "You survived!"
// never runs. With try/catch, the error is caught, handled, and execution
// continues normally after the catch block.


// ------------------------------------------
// EXERCISE 2: Identify the Trap
// ------------------------------------------

// a) ReferenceError
try {
  castSpell(); // function doesn't exist
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
  // ReferenceError: castSpell is not defined
}

// b) TypeError
try {
  const x = null;
  console.log(x.hp); // can't access property on null
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
  // TypeError: Cannot read properties of null (reading 'hp')
}

// c) RangeError
try {
  const army = new Array(-1); // negative array length
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
  // RangeError: Invalid array length
}

// WHY: Each error type tells you something different:
// - ReferenceError: you used a name that doesn't exist
// - TypeError: you used a value in the wrong way for its type
// - RangeError: a numeric value is outside the allowed range


// ------------------------------------------
// EXERCISE 3: Throw Your Own Trap
// ------------------------------------------

function equipWeapon(weapon) {
  if (!weapon) {
    throw new Error("No weapon provided!");
  }
  if (typeof weapon.name !== "string") {
    throw new TypeError("Weapon name must be a string!");
  }
  if (weapon.damage < 0 || weapon.damage > 100) {
    throw new RangeError("Weapon damage must be between 0 and 100!");
  }
  console.log(`Equipped: ${weapon.name} (Damage: ${weapon.damage})`);
}

try {
  equipWeapon(null);
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
  // Error: No weapon provided!
}

try {
  equipWeapon({ name: 42, damage: 10 });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
  // TypeError: Weapon name must be a string!
}

try {
  equipWeapon({ name: "Cursed Blade", damage: 150 });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
  // RangeError: Weapon damage must be between 0 and 100!
}

try {
  equipWeapon({ name: "Iron Sword", damage: 25 });
} catch (e) {
  console.log(`${e.name}: ${e.message}`);
}
// Equipped: Iron Sword (Damage: 25)   — no error, catch is skipped

// WHY: Throwing specific error types (TypeError, RangeError) helps the
// caller know exactly what went wrong. A generic Error is fine for
// general problems, but specific types help with debugging and with
// writing different catch logic for different failures.


// ------------------------------------------
// EXERCISE 4: Finally, Clean Up
// ------------------------------------------

function disarmTrap() {
  console.log("Examining the trap...");

  try {
    const outcome = Math.floor(Math.random() * 2); // 0 or 1
    if (outcome === 0) {
      throw new Error("BOOM! Trap explodes!");
    }
    console.log("Trap disarmed safely.");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Putting tools away.");
  }
}

disarmTrap(); // Run a few times to see both outcomes
disarmTrap();
disarmTrap();

// WHY: finally ALWAYS runs regardless of whether try succeeded or
// catch fired. This makes it perfect for cleanup tasks: closing files,
// releasing resources, resetting state. You'll see this pattern a lot
// in real-world code with database connections and file handles.


// ------------------------------------------
// EXERCISE 5: Safe JSON Parser
// ------------------------------------------

function parseQuestData(jsonString) {
  try {
    const data = JSON.parse(jsonString);
    return data;
  } catch (error) {
    console.log("Invalid quest data:", error.message);
    return null;
  }
}

const quest1 = parseQuestData('{"quest": "Slay Dragon", "reward": 500}');
console.log(quest1);
// { quest: "Slay Dragon", reward: 500 }

const quest2 = parseQuestData("not valid json");
// Invalid quest data: Unexpected token 'o', "not valid json" is not valid JSON
console.log(quest2);
// null

const quest3 = parseQuestData("");
// Invalid quest data: Unexpected end of JSON input
console.log(quest3);
// null

// WHY: JSON.parse throws a SyntaxError when the input isn't valid JSON.
// This is one of the most common real-world uses of try/catch —
// parsing data that might be malformed. Returning null on failure
// gives the caller a clean way to check: if (result === null) handle it.


// ==========================================
// BONUS CHALLENGE SOLUTION: Navigate the Trap Corridor
// ==========================================

function navigateTrapCorridor(rooms) {
  let survived = 0;

  for (let i = 0; i < rooms.length; i++) {
    try {
      rooms[i].enter();
      console.log(`Room ${i + 1}: Safe!`);
      survived++;
    } catch (error) {
      console.log(`Room ${i + 1}: TRAP! ${error.message}`);
    }
  }

  console.log(`Corridor complete. Survived ${survived} out of ${rooms.length} rooms.`);
}

const rooms = [
  { enter() { return "Empty room"; } },
  { enter() { throw new Error("Spikes from the floor!"); } },
  { enter() { return "Found a health potion"; } },
  { enter() { throw new TypeError("The floor is not a floor!"); } },
  { enter() { return "Treasure chest!"; } },
];

navigateTrapCorridor(rooms);
// Room 1: Safe!
// Room 2: TRAP! Spikes from the floor!
// Room 3: Safe!
// Room 4: TRAP! The floor is not a floor!
// Room 5: Safe!
// Corridor complete. Survived 3 out of 5 rooms.

// WHY: The key insight is putting try/catch INSIDE the loop, not around it.
// If we wrapped the entire loop in one try/catch, the first error would
// skip all remaining rooms. By putting try/catch inside, each room gets
// its own safety net, and the loop continues regardless of individual
// failures. This "fail gracefully and continue" pattern is extremely
// common in batch processing, API calls, and data validation.
