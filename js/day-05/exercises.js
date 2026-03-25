// ============================================
// Day 5 Exercises: The Crossroads
// ============================================
// Instructions: Read each problem, write your answer, then run the file.


// ------------------------------------------
// EXERCISE 1: Health Check
// Write an if/else if/else that prints a message based on the hero's HP.
// ------------------------------------------

const heroHP = 35;

// TODO: Write conditions for these ranges:
// HP > 75   → print "Full strength! Onward!"
// HP > 50   → print "A few scratches. You'll be fine."
// HP > 25   → print "Bleeding badly. Seek shelter."
// HP > 0    → print "One hit from death. Use a potion NOW!"
// HP <= 0   → print "You have fallen. Game over."

// Write your code here:



// ------------------------------------------
// EXERCISE 2: The Gate Guard
// The guard only lets you pass if you meet ALL requirements.
// Use logical operators (&&, ||, !) to write a single condition.
// ------------------------------------------

const playerLevel = 8;
const hasPass = false;
const isVIP = true;

// Rules:
// - Must be level 10+ AND have a pass
// - OR just be a VIP (VIPs skip all requirements)

// TODO: Write a single if/else that checks these rules
// const canPass = ???;
// if (canPass) {
//   console.log("The guard steps aside. You may enter.");
// } else {
//   console.log("The guard blocks your path. Requirements not met.");
// }



// ------------------------------------------
// EXERCISE 3: Potion Selector (switch)
// Use a switch statement to print what each potion does.
// ------------------------------------------

const potion = "fire resistance";

// TODO: Write a switch statement for these potions:
// "health"          → "Restores 50 HP"
// "mana"            → "Restores 30 MP"
// "strength"        → "Damage +10 for 60 seconds"
// "fire resistance" → "Immune to fire for 30 seconds"
// "invisibility"    → "Invisible for 15 seconds"
// default           → "Unknown potion. Drink at your own risk!"

// Write your code here:



// ------------------------------------------
// EXERCISE 4: Quick Decisions (ternary)
// Convert each if/else into a ternary expression.
// ------------------------------------------

const gold = 150;
const enemyHP = 0;
const time = 22;  // 24-hour format

// TODO: Use ternary to set each variable:

// If gold >= 100, "Rich" — otherwise "Poor"
// const wealth = ???;

// If enemyHP > 0, "Alive" — otherwise "Dead"
// const enemyStatus = ???;

// If time >= 6 AND time < 18, "Day" — otherwise "Night"
// const timeOfDay = ???;

// console.log("Wealth:", wealth);
// console.log("Enemy:", enemyStatus);
// console.log("Time:", timeOfDay);


// ------------------------------------------
// EXERCISE 5: Truthy/Falsy Predictions
// WITHOUT running the code, predict what each block prints.
// Then uncomment and check!
// ------------------------------------------

const playerName = "Aria";
const mana = 0;
const questLog = "";
const inventory = [];
const currentTarget = null;

// if (playerName) console.log("A: Has a name");      // Prints? ???
// if (mana)       console.log("B: Has mana");         // Prints? ???
// if (questLog)   console.log("C: Has quests");       // Prints? ???
// if (inventory)  console.log("D: Has inventory");    // Prints? ???
// if (currentTarget) console.log("E: Has target");    // Prints? ???

// Your predictions:
// A: ???
// B: ???
// C: ???
// D: ???
// E: ???


// ==========================================
// BONUS CHALLENGE (+15 XP)
// The Path Chooser
// ==========================================

// The hero arrives at a crossroads. Based on their stats, determine
// which path they take and what happens.

const hero = {
  name: "Kael",
  hp: 60,
  strength: 45,
  intelligence: 70,
  hasMap: true,
  class: "mage"
};

// Path Rules:
// 1. If HP <= 0, print "[name] is too weak to continue..." and stop.
// 2. If the hero is a "mage" AND intelligence > 60, they take the
//    MOUNTAIN PATH → print "[name] takes the Mountain Path. The runes glow in recognition."
// 3. If the hero is a "warrior" AND strength > 50, they take the
//    FOREST PATH → print "[name] takes the Forest Path. The beasts bow before them."
// 4. If the hero has a map, they take the HIDDEN PATH →
//    print "[name] takes the Hidden Path. The map reveals a shortcut."
// 5. Otherwise, they take the SWAMP PATH →
//    print "[name] reluctantly enters the Swamp Path. Something smells terrible."
//
// After choosing a path, if hp < 50, also print "Warning: [name] should find a healer soon."

// Write your code here:
