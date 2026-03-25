// ============================================
// Day 12 Exercises: "The Monster Field Guide"
// Objects
// ============================================
// Complete each exercise below. Run this file with: node exercises.js

// -----------------------------------------------
// EXERCISE 1: Create Monster Objects
// -----------------------------------------------

// 1a. Create an object called `werewolf` with these properties:
//     name: "Shadow Werewolf"
//     type: "beast"
//     hp: 90
//     attack: 28
//     weakness: "silver"
//     isNocturnal: true
//
//     And a method called `howl` that returns:
//     "[name] lets out a blood-curdling howl!"
//     (Use `this` to access the name)

// YOUR CODE:

// Test:
// console.log(werewolf.name);
// console.log(werewolf.howl());


// 1b. Create an object called `wizard` with:
//     name: "Dark Wizard"
//     hp: 60
//     mana: 100
//     spells: ["Fireball", "Ice Storm", "Lightning Bolt"]
//
//     Methods:
//     - castSpell(index) — returns "[name] casts [spell]!" using the
//       spells array. If index is out of bounds, return "[name] fizzles..."
//     - getSpellCount() — returns number of known spells

// YOUR CODE:

// Test:
// console.log(wizard.castSpell(0));   // "Dark Wizard casts Fireball!"
// console.log(wizard.castSpell(5));   // "Dark Wizard fizzles..."
// console.log(wizard.getSpellCount()); // 3


// -----------------------------------------------
// EXERCISE 2: Dot vs Bracket Notation
// -----------------------------------------------

const monster = {
  name: "Ancient Golem",
  hp: 200,
  attack: 40,
  defense: 50,
  "special move": "Earthquake",
  element: "earth",
};

// 2a. Access the monster's name using DOT notation
// YOUR CODE:

// 2b. Access the monster's "special move" (must use bracket notation — why?)
// YOUR CODE:

// 2c. Create a variable `stat` with value "defense", then use it to
//     access the monster's defense using bracket notation
// YOUR CODE:

// 2d. Loop through these stat names and log each one's value:
//     ["hp", "attack", "defense"]
//     Use bracket notation with a variable.
// YOUR CODE:


// -----------------------------------------------
// EXERCISE 3: Modify Objects
// -----------------------------------------------

// Start with this monster:
const mimic = {
  name: "Treasure Mimic",
  hp: 50,
  attack: 20,
  disguise: "treasure chest",
};

// 3a. Add a property `weakness` with value "fire"
// YOUR CODE:

// 3b. Change `hp` to 75 (it leveled up!)
// YOUR CODE:

// 3c. Add a method `reveal` that returns:
//     "The [disguise] was actually a [name]!"
// YOUR CODE:

// 3d. Delete the `disguise` property (it's been revealed!)
// YOUR CODE:

// 3e. Check if `disguise` still exists using the `in` operator
// YOUR CODE:

// 3f. Log the final state of the mimic object
// YOUR CODE:


// -----------------------------------------------
// EXERCISE 4: Object.keys / values / entries
// -----------------------------------------------

const dragonStats = {
  strength: 90,
  intelligence: 70,
  agility: 40,
  endurance: 85,
  charisma: 10,
};

// 4a. Get an array of all stat names (keys) and log it
// YOUR CODE:

// 4b. Get an array of all stat values and log it
// YOUR CODE:

// 4c. Use Object.entries and a for...of loop to print each stat:
//     "strength: 90"
//     "intelligence: 70"
//     etc.
// YOUR CODE:

// 4d. Use Object.entries with .filter to find stats above 50.
//     Log the names of those stats.
// YOUR CODE:

// 4e. Use Object.values with .reduce to calculate the average stat value.
// YOUR CODE:


// -----------------------------------------------
// EXERCISE 5: Nested Objects — The Full Bestiary
// -----------------------------------------------

// Create a `bestiary` object where each key is a monster ID and each
// value is a monster object. Include at least 3 monsters.
//
// Each monster should have:
//   name: string
//   stats: { hp: number, attack: number, defense: number }
//   abilities: [array of strings]
//   drops: [{ item: string, chance: number (0-1) }]
//
// Example structure:
// const bestiary = {
//   goblin: {
//     name: "Forest Goblin",
//     stats: { hp: 30, attack: 8, defense: 3 },
//     abilities: ["Scratch", "Flee"],
//     drops: [
//       { item: "Goblin Tooth", chance: 0.8 },
//       { item: "Rusty Dagger", chance: 0.2 },
//     ],
//   },
//   ...
// };

// YOUR CODE:

// Then write functions:

// 5a. getMonsterInfo(id) — takes a monster ID string, returns a formatted string:
//     "[name] | HP: [hp] ATK: [attack] DEF: [defense]"
//     If monster not found, return "Unknown monster: [id]"

// YOUR CODE:

// 5b. getDropTable(id) — returns a formatted drop table:
//     "[name] Drop Table:"
//     "  - [item] ([chance as %]%)"
//     "  - [item] ([chance as %]%)"

// YOUR CODE:

// 5c. findStrongest() — returns the name of the monster with highest attack.
//     Use Object.values() and reduce.

// YOUR CODE:

// Test:
// console.log(getMonsterInfo("goblin"));
// console.log(getDropTable("goblin"));
// console.log("Strongest:", findStrongest());


// -----------------------------------------------
// BONUS CHALLENGE: Monster Battle System
// -----------------------------------------------

// Create a battle system:
//
// 1. Write a function `createMonster(name, hp, attack, defense)` that
//    returns a monster object with:
//    - Those properties
//    - A method `isAlive()` that returns true if hp > 0
//    - A method `takeDamage(amount)` that reduces hp (min 0)
//    - A method `getStatus()` that returns "[name]: [hp] HP"
//
// 2. Write a function `battle(monster1, monster2)` that:
//    - Simulates a turn-based fight
//    - Each turn: attacker deals (their attack - defender's defense) damage
//      (minimum 1 damage per hit)
//    - Alternate turns until one monster reaches 0 HP
//    - Log each attack: "[name] hits [name] for [damage] damage! ([hp] HP left)"
//    - Return the winner's name
//
// 3. Run a battle between two monsters and display the result.

// YOUR CODE HERE
