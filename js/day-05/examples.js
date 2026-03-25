// ============================================
// Day 5: The Crossroads
// Topic: Conditionals (if/else, switch, ternary)
// ============================================

// ------------------------------------------
// EXAMPLE 1: Basic if / else
// ------------------------------------------

console.log("--- Basic if/else ---");

const heroHP = 75;

if (heroHP > 0) {
  console.log("The hero is alive!");
} else {
  console.log("The hero has fallen...");
}
// Output: "The hero is alive!"


// ------------------------------------------
// EXAMPLE 2: if / else if / else — multiple paths
// ------------------------------------------

console.log("\n--- Multiple Paths ---");

const health = 45;

if (health > 80) {
  console.log("Status: Healthy - Full speed ahead!");
} else if (health > 50) {
  console.log("Status: Bruised - Be careful.");
} else if (health > 20) {
  console.log("Status: Wounded - Find a healer soon!");
} else {
  console.log("Status: Critical - You need help NOW!");
}
// Output: "Status: Wounded - Find a healer soon!"

// IMPORTANT: Only the FIRST matching block runs.
// Even though health > 20 is also true when health > 50,
// the first match wins and the rest are skipped.


// ------------------------------------------
// EXAMPLE 3: Comparison operators in conditions
// ------------------------------------------

console.log("\n--- Comparison in Conditions ---");

const playerLevel = 10;
const requiredLevel = 5;
const hasKey = true;

if (playerLevel >= requiredLevel && hasKey) {
  console.log("The dungeon door opens!");
} else if (playerLevel >= requiredLevel && !hasKey) {
  console.log("You're strong enough, but you need a key.");
} else {
  console.log("You need to be at least level " + requiredLevel);
}
// Output: "The dungeon door opens!"


// ------------------------------------------
// EXAMPLE 4: Truthy and falsy values
// ------------------------------------------

console.log("\n--- Truthy & Falsy ---");

// Falsy values:
if (!false)     console.log("false is falsy");
if (!0)         console.log("0 is falsy");
if (!"")        console.log("empty string is falsy");
if (!null)      console.log("null is falsy");
if (!undefined) console.log("undefined is falsy");
if (!NaN)       console.log("NaN is falsy");

// Truthy values (might surprise you):
if ("hello")    console.log("'hello' is truthy");
if (42)         console.log("42 is truthy");
if ([])         console.log("[] (empty array) is truthy!");
if ({})         console.log("{} (empty object) is truthy!");
if ("0")        console.log("'0' (string zero) is truthy!");
if ("false")    console.log("'false' (string) is truthy!");


// ------------------------------------------
// EXAMPLE 5: Using truthy/falsy in real code
// ------------------------------------------

console.log("\n--- Practical Truthy/Falsy ---");

const equippedWeapon = "Flame Sword";
const equippedShield = "";    // empty = no shield
const gold = 0;               // broke!

if (equippedWeapon) {
  console.log("Weapon: " + equippedWeapon);
} else {
  console.log("No weapon equipped! Use your fists.");
}

if (equippedShield) {
  console.log("Shield: " + equippedShield);
} else {
  console.log("No shield equipped.");  // This runs — "" is falsy
}

if (gold) {
  console.log("You have " + gold + " gold.");
} else {
  console.log("You're broke!");  // This runs — 0 is falsy
}


// ------------------------------------------
// EXAMPLE 6: switch statement — class selection
// ------------------------------------------

console.log("\n--- Switch Statement ---");

const heroClass = "mage";

switch (heroClass) {
  case "warrior":
    console.log("You wield a greatsword. +10 Strength");
    break;
  case "mage":
    console.log("You cast arcane spells. +10 Intelligence");
    break;
  case "rogue":
    console.log("You strike from shadows. +10 Agility");
    break;
  case "healer":
    console.log("You mend wounds. +10 Wisdom");
    break;
  default:
    console.log("Unknown class. You're a humble villager.");
}
// Output: "You cast arcane spells. +10 Intelligence"


// ------------------------------------------
// EXAMPLE 7: switch fall-through (intentional)
// ------------------------------------------

console.log("\n--- Switch Fall-Through ---");

const rank = "Knight";

switch (rank) {
  case "Legend":
    console.log("Access: Dragon's Lair");
    // no break — falls through!
  case "Hero":
    console.log("Access: Dark Dungeon");
  case "Knight":
    console.log("Access: Training Arena");
  case "Villager":
    console.log("Access: Village Square");
    break;
  default:
    console.log("Access: None");
}
// A Knight gets: Training Arena + Village Square
// A Legend gets: ALL areas (cascading access)


// ------------------------------------------
// EXAMPLE 8: Ternary operator — quick decisions
// ------------------------------------------

console.log("\n--- Ternary Operator ---");

const hp = 30;
const status = hp > 50 ? "Healthy" : "Wounded";
console.log("Status:", status);  // "Wounded"

// Same thing as:
// let status;
// if (hp > 50) {
//   status = "Healthy";
// } else {
//   status = "Wounded";
// }

// Ternary in template literals:
const monster = "Goblin";
const monsterHP = 0;
console.log(`${monster} is ${monsterHP > 0 ? "alive" : "defeated"}!`);
// "Goblin is defeated!"


// ------------------------------------------
// EXAMPLE 9: Nested vs flat conditionals
// ------------------------------------------

console.log("\n--- Nested vs Flat ---");

const level = 10;
const hasMap = true;
const isDay = false;

// NESTED (harder to read — avoid when possible):
if (level >= 5) {
  if (hasMap) {
    if (isDay) {
      console.log("Safe to travel!");
    } else {
      console.log("Travel at night? Risky but possible.");
    }
  } else {
    console.log("You need a map first.");
  }
} else {
  console.log("Too low level to travel.");
}

// FLAT (same logic, easier to read):
if (level < 5) {
  console.log("(Flat) Too low level to travel.");
} else if (!hasMap) {
  console.log("(Flat) You need a map first.");
} else if (isDay) {
  console.log("(Flat) Safe to travel!");
} else {
  console.log("(Flat) Travel at night? Risky but possible.");
}

// Both produce the same result, but the flat version is easier to follow.
