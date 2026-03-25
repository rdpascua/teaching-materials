// ============================================
// Day 8 Exercises: "The Arrow Upgrade"
// Arrow Functions, Default/Rest Params, Callbacks
// ============================================
// Complete each exercise below. Run this file with: node exercises.js

// -----------------------------------------------
// EXERCISE 1: Arrow Conversion
// Convert each traditional function to an arrow function.
// Use the shortest form possible for each.
// -----------------------------------------------

// 1a. Convert to arrow function (store in a const)
function getHeroTitle(name) {
  return name + " the Brave";
}
// YOUR CODE:
// const getHeroTitle = ...

// 1b. Convert to arrow function (shortest form — single param, single expression)
function doubleGold(amount) {
  return amount * 2;
}
// YOUR CODE:
// const doubleGold = ...

// 1c. Convert to arrow function (no params)
function rollDice() {
  return Math.floor(Math.random() * 20) + 1;
}
// YOUR CODE:
// const rollDice = ...

// 1d. Convert to arrow function (returns an object — watch the syntax!)
function createItem(name, power) {
  return { name: name, power: power, type: "weapon" };
}
// YOUR CODE:
// const createItem = ...

// Test your conversions:
// console.log(getHeroTitle("Aria"));
// console.log(doubleGold(50));
// console.log(rollDice());
// console.log(createItem("Fire Sword", 45));


// -----------------------------------------------
// EXERCISE 2: Default Parameters
// Add default parameters to the character creator function.
// -----------------------------------------------

// Create a function called `createCharacter` that takes these parameters
// with these defaults:
//   name     -> default: "Unknown Hero"
//   classType -> default: "Warrior"
//   hp       -> default: 100
//   mp       -> default: 50
//
// It should return a string like:
// "[name] | Class: [classType] | HP: [hp] | MP: [mp]"
//
// Use an arrow function!

// YOUR CODE:
// const createCharacter = ...

// Test:
// console.log(createCharacter());
//   => "Unknown Hero | Class: Warrior | HP: 100 | MP: 50"
// console.log(createCharacter("Luna", "Mage", 70, 120));
//   => "Luna | Class: Mage | HP: 70 | MP: 120"
// console.log(createCharacter("Kael"));
//   => "Kael | Class: Warrior | HP: 100 | MP: 50"


// -----------------------------------------------
// EXERCISE 3: Rest Parameters
// Use rest parameters to handle variable arguments.
// -----------------------------------------------

// 3a. Create a function `formParty` that takes a leader (string)
//     and any number of additional members (...members).
//     Return a string like:
//     "Party of [total]: [leader] (Leader), [member1], [member2], ..."
//
// Example: formParty("Aria", "Kael", "Luna")
//   => "Party of 3: Aria (Leader), Kael, Luna"

// YOUR CODE:
// const formParty = ...

// Test:
// console.log(formParty("Aria", "Kael", "Luna", "Thorne"));
// console.log(formParty("Solo Steve"));


// 3b. Create a function `biggestHit` that takes any number of
//     damage values and returns the highest one.
//     (Hint: Math.max works, or loop through them)

// YOUR CODE:
// const biggestHit = ...

// Test:
// console.log(biggestHit(12, 45, 8, 33, 27));  // => 45
// console.log(biggestHit(5));                   // => 5


// -----------------------------------------------
// EXERCISE 4: Callbacks
// Write functions that use callbacks.
// -----------------------------------------------

// 4a. Create a function `onBattleStart` that takes an enemy name
//     and a callback function. It should:
//     1. Log "A wild [enemy] appears!"
//     2. Call the callback with the enemy name
//     3. Log the return value of the callback

// YOUR CODE:
// const onBattleStart = ...

// Test with these callbacks:
// const aggressiveStrategy = (enemy) => `Attack the ${enemy} head-on!`;
// const defensiveStrategy = (enemy) => `Raise shields against the ${enemy}!`;
//
// onBattleStart("Dragon", aggressiveStrategy);
// onBattleStart("Lich King", defensiveStrategy);
// onBattleStart("Slime", (enemy) => `Poke the ${enemy} with a stick.`);


// 4b. Create a function `processLoot` that takes an array of item names
//     and a callback. It should call the callback for each item,
//     passing the item and its index. Collect the results into an array
//     and return it.

// YOUR CODE:
// const processLoot = ...

// Test:
// const items = ["Sword", "Shield", "Potion", "Ring"];
// const labeled = processLoot(items, (item, i) => `[${i + 1}] ${item}`);
// console.log(labeled);
//   => ["[1] Sword", "[2] Shield", "[3] Potion", "[4] Ring"]


// -----------------------------------------------
// EXERCISE 5: Combine It All
// Use arrow functions, defaults, rest params, and callbacks together.
// -----------------------------------------------

// Create a battle simulator function called `simulateBattle`:
//
// Parameters:
//   hero       - string (default: "Hero")
//   attackFn   - callback function (default: a function that returns a
//                random number between 5 and 25)
//   ...enemies - rest parameter for enemy names
//
// Behavior:
//   For each enemy, call attackFn() to get a damage number.
//   Log: "[hero] attacks [enemy] for [damage] damage!"
//   After all enemies, log: "Battle complete! [hero] defeated [count] enemies."
//
// Use arrow functions throughout!

// YOUR CODE:
// const simulateBattle = ...

// Test:
// simulateBattle("Aria", undefined, "Goblin", "Skeleton", "Troll");
//   Uses default attackFn, should show random damage for each
//
// const powerAttack = () => 99;
// simulateBattle("Kael", powerAttack, "Dragon");
//   Should show 99 damage
//
// simulateBattle();
//   Uses all defaults — "Hero" with no enemies


// -----------------------------------------------
// BONUS CHALLENGE: Quest Board with Callbacks
// -----------------------------------------------

// Create a quest system:
//
// 1. Create a `questBoard` array with at least 3 quest objects, each having:
//    { name: "Quest Name", difficulty: "easy"/"medium"/"hard", reward: number }
//
// 2. Create a function `acceptQuest` that takes:
//    - a quest object
//    - an `onSuccess` callback
//    - an `onFailure` callback (default: a function that logs "Quest failed...")
//
//    It should simulate a quest attempt:
//    - "easy" quests succeed 80% of the time
//    - "medium" quests succeed 50% of the time
//    - "hard" quests succeed 30% of the time
//
//    Based on success/failure, call the appropriate callback with the quest.
//
// 3. Create a function `attemptAllQuests` that takes the questBoard and
//    loops through each quest, calling `acceptQuest` with appropriate callbacks.

// YOUR CODE HERE
