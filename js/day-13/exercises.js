// ============================================
// Day 13 Exercises: "Unpacking the Treasure"
// Destructuring & Spread
// ============================================
// Complete each exercise below. Run this file with: node exercises.js

// -----------------------------------------------
// EXERCISE 1: Array Destructuring
// -----------------------------------------------

// 1a. Destructure this array into three variables: first, second, third
const treasureChest = ["Gold Ring", "Silver Necklace", "Ruby Gem"];
// YOUR CODE:

// console.log(first, second, third);

// 1b. Destructure this array to get ONLY the third element.
//     Skip the first two using commas.
const spellBook = ["Fireball", "Ice Storm", "Lightning Bolt", "Heal"];
// YOUR CODE:

// console.log(thirdSpell);  // "Lightning Bolt"

// 1c. Swap these two variables using array destructuring (no temp variable!)
let equipped = "Sword";
let backpack = "Axe";
// YOUR CODE:

// console.log("Equipped:", equipped, "Backpack:", backpack);
// Should be: Equipped: Axe  Backpack: Sword

// 1d. Destructure the return value of this function:
const getCoordinates = () => [42, 17, "Dungeon Level 3"];
// Extract x, y, and location into separate variables.
// YOUR CODE:

// console.log(`Position: (${x}, ${y}) — ${location}`);


// -----------------------------------------------
// EXERCISE 2: Object Destructuring
// -----------------------------------------------

const bossMonster = {
  name: "Lich King",
  hp: 500,
  mp: 300,
  attack: 65,
  defense: 40,
  element: "dark",
  weakness: "holy",
  phase: 2,
};

// 2a. Destructure to get name, hp, and attack from bossMonster.
// YOUR CODE:

// console.log(`${name} — HP: ${hp}, ATK: ${attack}`);

// 2b. Destructure to get `name` renamed to `bossName` and
//     `weakness` renamed to `bossWeakness`.
// YOUR CODE:

// console.log(`${bossName} is weak to ${bossWeakness}`);

// 2c. Write a function `describeBoss` that takes a monster object
//     and destructures { name, hp, element, weakness } in the parameters.
//     Return: "[name] (HP: [hp]) | Element: [element] | Weakness: [weakness]"
// YOUR CODE:

// console.log(describeBoss(bossMonster));

// 2d. Destructure this nested object to get the hero's weapon name
//     and the shield's defense value.
const hero = {
  name: "Aria",
  equipment: {
    weapon: { name: "Flame Sword", damage: 45 },
    shield: { name: "Iron Shield", defense: 20 },
  },
};
// Hint: const { equipment: { weapon: { name: weaponName }, shield: { defense: shieldDef } } } = hero;
// YOUR CODE:

// console.log(`Weapon: ${weaponName}, Shield Defense: ${shieldDef}`);


// -----------------------------------------------
// EXERCISE 3: Default Values
// -----------------------------------------------

// 3a. Destructure this incomplete character with defaults:
//     name defaults to "Unknown", hp defaults to 100,
//     mp defaults to 50, level defaults to 1
const mysteryCharacter = { name: "Shadow Thief", hp: 65 };
// YOUR CODE:

// console.log(`${charName} — HP: ${charHp}, MP: ${charMp}, Level: ${charLevel}`);
// "Shadow Thief — HP: 65, MP: 50, Level: 1"

// 3b. Create a function `createQuest` that takes an object parameter
//     with destructured defaults:
//     { title = "Unknown Quest", difficulty = "easy", reward = 10, description = "No description" }
//     Return an object with all four properties.
//     The function should also work when called with NO argument at all.
// YOUR CODE:

// console.log(createQuest({ title: "Slay the Dragon", difficulty: "hard", reward: 500 }));
// console.log(createQuest({ title: "Gather Herbs" }));
// console.log(createQuest());


// -----------------------------------------------
// EXERCISE 4: Spread Operator
// -----------------------------------------------

// 4a. Combine these three arrays into one using spread:
const swords = ["Iron Sword", "Steel Sword", "Dragon Blade"];
const bows = ["Short Bow", "Long Bow"];
const staffs = ["Oak Staff", "Crystal Staff", "Elder Wand"];
// YOUR CODE:
// const allWeapons = ...
// console.log("All weapons:", allWeapons);

// 4b. Create a copy of this array using spread, then add "Phoenix" to the copy.
//     Verify the original is unchanged.
const monsters = ["Goblin", "Skeleton", "Troll"];
// YOUR CODE:

// 4c. Merge these two objects using spread. The class bonuses should
//     override the base stats where they overlap.
const baseHero = { name: "Hero", hp: 100, mp: 30, attack: 15, defense: 10 };
const mageBonus = { mp: 80, attack: 10, specialMove: "Arcane Blast" };
// YOUR CODE:
// const mageHero = ...
// console.log("Mage Hero:", mageHero);

// 4d. Create a "buffed" version of this enemy by spreading it and
//     overriding hp to 999 and adding a new property `enraged: true`.
const normalEnemy = { name: "Slime", hp: 10, attack: 2 };
// YOUR CODE:
// const buffedEnemy = ...
// console.log("Buffed:", buffedEnemy);
// console.log("Original:", normalEnemy);  // Should be unchanged!


// -----------------------------------------------
// EXERCISE 5: Rest + Combined Patterns
// -----------------------------------------------

// 5a. Use rest to separate the party leader from the rest of the party.
const adventurers = ["Aria", "Kael", "Luna", "Thorne", "Rex"];
// YOUR CODE:
// const [partyLeader, ...partyMembers] = ...
// console.log("Leader:", partyLeader);
// console.log("Members:", partyMembers);

// 5b. Use object rest to extract `name` and `level` from this player,
//     and collect everything else into a `stats` object.
const playerProfile = {
  name: "DragonSlayer",
  level: 25,
  hp: 250,
  mp: 100,
  gold: 3000,
  guild: "Phoenix Order",
};
// YOUR CODE:

// console.log("Name:", pName);
// console.log("Level:", pLevel);
// console.log("Stats:", pStats);

// 5c. Write a function `equipItem` that takes a character object and a
//     new equipment object. It should return a NEW character object with:
//     - All original character properties
//     - The equipment merged into an `equipment` property
//     Do NOT modify the original character.
//
//     Example:
//     const char = { name: "Hero", hp: 100, equipment: { weapon: "Fists" } };
//     const result = equipItem(char, { weapon: "Sword", shield: "Buckler" });
//     // result = { name: "Hero", hp: 100, equipment: { weapon: "Sword", shield: "Buckler" } }
//     // char is unchanged!

// YOUR CODE:
// const equipItem = ...

// Test:
// const myChar = { name: "Hero", hp: 100, equipment: { weapon: "Fists" } };
// const upgraded = equipItem(myChar, { weapon: "Flame Sword", shield: "Iron Shield" });
// console.log("Upgraded:", upgraded);
// console.log("Original:", myChar);  // Should be unchanged


// -----------------------------------------------
// BONUS CHALLENGE: Equipment Loadout System
// -----------------------------------------------

// Build a loadout management system:
//
// 1. Create a `createLoadout` function that takes a name and an optional
//    defaults object. Returns a loadout object:
//    { name, head: null, chest: null, weapon: null, shield: null, boots: null, ...anyExtras }
//
// 2. Create an `equipToLoadout` function that takes a loadout and a
//    slot-item pair (e.g., { weapon: "Fire Sword" }) and returns a
//    NEW loadout with that item equipped. Don't modify the original.
//
// 3. Create a `compareLoadouts` function that takes two loadouts and
//    logs the differences between them (which slots changed).
//
// 4. Create a `unequipSlot` function that takes a loadout and a slot name,
//    returns a NEW loadout with that slot set to null.
//
// Use destructuring, spread, and rest throughout. No mutations!

// YOUR CODE HERE
