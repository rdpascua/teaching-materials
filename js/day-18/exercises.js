// ============================================
// Day 18 Exercises: The Trap Room
// ============================================
// Instructions: Run in Node.js or browser console.
// Try to PREDICT what happens before running!


// ------------------------------------------
// EXERCISE 1: Catch the Trap
// The code below will crash. Wrap it in a try/catch
// so that:
//   a) The error message is logged: "Trap caught: <message>"
//   b) The program continues and logs "You survived!"
// ------------------------------------------

// const monster = undefined;
// monster.roar();
//
// console.log("You survived!");

// Uncomment the lines above and wrap them in try/catch so the program
// catches the error and still prints "You survived!"

// Your code here (rewrite the above with try/catch):


// ------------------------------------------
// EXERCISE 2: Identify the Trap
// Wrap each of these in separate try/catch blocks.
// In each catch, log the error's name and message.
//
// a) Call a function that doesn't exist: castSpell()
// b) Access a property on null: null.hp
// c) Create an array with negative length: new Array(-1)
//
// Expected output format: "TypeError: ..."
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 3: Throw Your Own Trap
// Write a function called equipWeapon(weapon) that:
//   - Throws an Error("No weapon provided!") if weapon is falsy
//   - Throws a TypeError if weapon.name is not a string
//   - Throws a RangeError if weapon.damage is less than 0 or greater than 100
//   - Otherwise, logs "Equipped: <name> (Damage: <damage>)"
//
// Then test it with these calls (each in a try/catch):
//   equipWeapon(null)
//   equipWeapon({ name: 42, damage: 10 })
//   equipWeapon({ name: "Cursed Blade", damage: 150 })
//   equipWeapon({ name: "Iron Sword", damage: 25 })
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 4: Finally, Clean Up
// Write a function called disarmTrap() that:
//   - Logs "Examining the trap..."
//   - In a try block: generates a random number (0 or 1)
//     - If 0, throw new Error("BOOM! Trap explodes!")
//     - If 1, log "Trap disarmed safely."
//   - In a catch block: log the error message
//   - In a finally block: log "Putting tools away."
//
// Call disarmTrap() a few times to see both outcomes.
// The finally message should appear EVERY time.
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 5: Safe JSON Parser
// Write a function called parseQuestData(jsonString) that:
//   - Tries to parse the string with JSON.parse()
//   - If successful, returns the parsed object
//   - If it fails, catches the error, logs
//     "Invalid quest data: <error message>", and returns null
//
// Test with:
//   parseQuestData('{"quest": "Slay Dragon", "reward": 500}')  // should work
//   parseQuestData('not valid json')                            // should catch
//   parseQuestData('')                                          // should catch
// ------------------------------------------

// Your code here:


// ==========================================
// BONUS CHALLENGE (+15 XP): Navigate the Trap Corridor
// ==========================================
// Write a function called navigateTrapCorridor(rooms) that:
//   - Takes an array of "room" objects, each with a .enter() method
//   - Loops through the rooms and calls .enter() on each
//   - Some rooms throw errors! Catch each error individually
//     (don't let one failed room stop the others)
//   - For each room, log either "Room X: Safe!" or "Room X: TRAP! <message>"
//   - After all rooms, log "Corridor complete. Survived X out of Y rooms."
//
// Test with this data:
/*
const rooms = [
  { enter() { return "Empty room"; } },
  { enter() { throw new Error("Spikes from the floor!"); } },
  { enter() { return "Found a health potion"; } },
  { enter() { throw new TypeError("The floor is not a floor!"); } },
  { enter() { return "Treasure chest!"; } },
];

navigateTrapCorridor(rooms);
*/
// Expected output:
// Room 1: Safe!
// Room 2: TRAP! Spikes from the floor!
// Room 3: Safe!
// Room 4: TRAP! The floor is not a floor!
// Room 5: Safe!
// Corridor complete. Survived 3 out of 5 rooms.

// Your code here:
