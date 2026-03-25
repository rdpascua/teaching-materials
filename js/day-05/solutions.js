// ============================================
// Day 5 Solutions: The Crossroads
// ============================================


// ------------------------------------------
// EXERCISE 1: Health Check
// ------------------------------------------

const heroHP = 35;

if (heroHP > 75) {
  console.log("Full strength! Onward!");
} else if (heroHP > 50) {
  console.log("A few scratches. You'll be fine.");
} else if (heroHP > 25) {
  console.log("Bleeding badly. Seek shelter.");
} else if (heroHP > 0) {
  console.log("One hit from death. Use a potion NOW!");
} else {
  console.log("You have fallen. Game over.");
}
// With heroHP = 35 → "Bleeding badly. Seek shelter."

// KEY LESSON: The order matters! JavaScript checks top to bottom
// and stops at the FIRST true condition. If heroHP were 90, it would
// match "> 75" and skip all the rest.


// ------------------------------------------
// EXERCISE 2: The Gate Guard
// ------------------------------------------

const playerLevel = 8;
const hasPass = false;
const isVIP = true;

const canPass = (playerLevel >= 10 && hasPass) || isVIP;

if (canPass) {
  console.log("\nThe guard steps aside. You may enter.");
} else {
  console.log("\nThe guard blocks your path. Requirements not met.");
}
// Output: "The guard steps aside." (because isVIP is true)

// KEY LESSON: Use parentheses to group conditions clearly.
// (level >= 10 && hasPass) is checked as one unit.
// || isVIP provides the "shortcut" for VIPs.
// Without parentheses it still works here due to && having higher
// precedence than ||, but parentheses make intent clear.


// ------------------------------------------
// EXERCISE 3: Potion Selector (switch)
// ------------------------------------------

const potion = "fire resistance";

switch (potion) {
  case "health":
    console.log("\nRestores 50 HP");
    break;
  case "mana":
    console.log("\nRestores 30 MP");
    break;
  case "strength":
    console.log("\nDamage +10 for 60 seconds");
    break;
  case "fire resistance":
    console.log("\nImmune to fire for 30 seconds");
    break;
  case "invisibility":
    console.log("\nInvisible for 15 seconds");
    break;
  default:
    console.log("\nUnknown potion. Drink at your own risk!");
}
// Output: "Immune to fire for 30 seconds"

// KEY LESSON: Don't forget the break! Without it, execution "falls
// through" to the next case. switch uses STRICT equality (===).


// ------------------------------------------
// EXERCISE 4: Quick Decisions (ternary)
// ------------------------------------------

const gold = 150;
const enemyHP = 0;
const time = 22;

const wealth = gold >= 100 ? "Rich" : "Poor";
const enemyStatus = enemyHP > 0 ? "Alive" : "Dead";
const timeOfDay = (time >= 6 && time < 18) ? "Day" : "Night";

console.log("\nWealth:", wealth);       // "Rich"
console.log("Enemy:", enemyStatus);     // "Dead"
console.log("Time:", timeOfDay);        // "Night"

// KEY LESSON: Ternary is great for simple value assignment.
// condition ? valueIfTrue : valueIfFalse
// Notice the parentheses around (time >= 6 && time < 18) for clarity.


// ------------------------------------------
// EXERCISE 5: Truthy/Falsy Predictions
// ------------------------------------------

const playerName = "Aria";
const mana = 0;
const questLog = "";
const inventory = [];
const currentTarget = null;

console.log("\n--- Truthy/Falsy ---");
if (playerName) console.log("A: Has a name");       // PRINTS — "Aria" is truthy
if (mana)       console.log("B: Has mana");          // SKIPPED — 0 is falsy
if (questLog)   console.log("C: Has quests");        // SKIPPED — "" is falsy
if (inventory)  console.log("D: Has inventory");     // PRINTS — [] is truthy!
if (currentTarget) console.log("E: Has target");     // SKIPPED — null is falsy

// ANSWERS:
// A: PRINTS (non-empty strings are truthy)
// B: SKIPPED (0 is falsy)
// C: SKIPPED (empty string is falsy)
// D: PRINTS (empty arrays are truthy — this surprises people!)
// E: SKIPPED (null is falsy)

// KEY LESSON: Empty arrays [] and empty objects {} are TRUTHY.
// Only the 6 falsy values are falsy. Everything else is truthy.
// To check if an array is empty, use: if (inventory.length > 0)


// ==========================================
// BONUS CHALLENGE SOLUTION
// ==========================================

console.log("\n--- Path Chooser ---");

const hero = {
  name: "Kael",
  hp: 60,
  strength: 45,
  intelligence: 70,
  hasMap: true,
  class: "mage"
};

if (hero.hp <= 0) {
  console.log(`${hero.name} is too weak to continue...`);
} else if (hero.class === "mage" && hero.intelligence > 60) {
  console.log(`${hero.name} takes the Mountain Path. The runes glow in recognition.`);
} else if (hero.class === "warrior" && hero.strength > 50) {
  console.log(`${hero.name} takes the Forest Path. The beasts bow before them.`);
} else if (hero.hasMap) {
  console.log(`${hero.name} takes the Hidden Path. The map reveals a shortcut.`);
} else {
  console.log(`${hero.name} reluctantly enters the Swamp Path. Something smells terrible.`);
}

// Health warning (runs regardless of which path was taken):
if (hero.hp > 0 && hero.hp < 50) {
  console.log(`Warning: ${hero.name} should find a healer soon.`);
}

// With the given stats:
// - HP is 60 (> 0, so not too weak)
// - Class is "mage" AND intelligence is 70 (> 60) → MOUNTAIN PATH
// - HP is 60 (>= 50), so no health warning

// KEY LESSON: Order matters in else-if chains. The mage check comes
// before the hasMap check, so Kael takes the Mountain Path even though
// he also has a map. The health warning is a SEPARATE if statement
// (not else-if) because it should run independently of the path choice.
