// ============================================
// Day 3: The Blacksmith's Math
// Topic: Operators & Expressions
// ============================================

// ------------------------------------------
// EXAMPLE 1: Arithmetic — the damage calculator
// ------------------------------------------

const baseDamage = 25;
const weaponBonus = 10;
const critMultiplier = 2;

console.log("--- Arithmetic Operators ---");
console.log("Base + Bonus:", baseDamage + weaponBonus);       // 35
console.log("Base - Penalty:", baseDamage - 5);               // 20
console.log("Damage x Crit:", baseDamage * critMultiplier);   // 50
console.log("Split damage:", baseDamage / 5);                 // 5
console.log("Remainder:", baseDamage % 10);                   // 5
console.log("Power strike:", baseDamage ** 2);                // 625


// ------------------------------------------
// EXAMPLE 2: Modulo — the remainder spell
// ------------------------------------------

console.log("\n--- Modulo Magic ---");

// Check if a number is even or odd
const heroLevel = 7;
console.log("Level", heroLevel, "is odd?", heroLevel % 2 !== 0); // true

const monsterHP = 12;
console.log("Monster HP", monsterHP, "is even?", monsterHP % 2 === 0); // true

// Modulo for cycling (wrapping around)
// If you have 5 inventory slots (0-4), slot 7 wraps to slot 2
console.log("Slot 7 wraps to:", 7 % 5); // 2
console.log("Slot 5 wraps to:", 5 % 5); // 0


// ------------------------------------------
// EXAMPLE 3: Comparison — the weapon appraiser
// ------------------------------------------

console.log("\n--- Comparison Operators ---");

const swordDamage = 30;
const axeDamage = 45;
const daggerDamage = 20;

console.log("Sword > Axe?", swordDamage > axeDamage);     // false
console.log("Sword < Axe?", swordDamage < axeDamage);     // true
console.log("Sword >= 30?", swordDamage >= 30);            // true
console.log("Dagger <= 15?", daggerDamage <= 15);          // false
console.log("Sword === Axe?", swordDamage === axeDamage);  // false
console.log("Sword !== Axe?", swordDamage !== axeDamage);  // true

// Strict vs loose (reminder from Day 2)
console.log("30 == '30'?", 30 == "30");   // true  — coercion!
console.log("30 === '30'?", 30 === "30"); // false — no coercion


// ------------------------------------------
// EXAMPLE 4: Logical — the battle strategist
// ------------------------------------------

console.log("\n--- Logical Operators ---");

const hasWeapon = true;
const hasArmor = true;
const hasPotion = false;
const isResting = false;

// AND (&&) — both must be true
console.log("Ready for battle?", hasWeapon && hasArmor);   // true
console.log("Fully stocked?", hasWeapon && hasPotion);     // false

// OR (||) — at least one must be true
console.log("Has any healing?", hasPotion || false);        // false
console.log("Has any gear?", hasWeapon || hasArmor);        // true

// NOT (!) — flips the value
console.log("Is NOT resting?", !isResting);                 // true
console.log("Is NOT armed?", !hasWeapon);                   // false

// Combining them
const canFight = hasWeapon && hasArmor && !isResting;
console.log("Can fight?", canFight); // true

const needsHelp = !hasPotion && !hasArmor;
console.log("Needs help?", needsHelp); // false (has armor)


// ------------------------------------------
// EXAMPLE 5: Assignment shortcuts
// ------------------------------------------

console.log("\n--- Assignment Operators ---");

let gold = 100;
console.log("Starting gold:", gold);  // 100

gold += 50;   // earned from quest
console.log("After quest (+50):", gold);   // 150

gold -= 30;   // bought a potion
console.log("After shopping (-30):", gold); // 120

gold *= 2;    // found treasure, double it!
console.log("Treasure doubled:", gold);     // 240

gold /= 4;    // split with party (4 members)
console.log("Split 4 ways:", gold);         // 60

gold %= 7;    // spent in groups of 7, what's left?
console.log("Remainder:", gold);            // 4


// ------------------------------------------
// EXAMPLE 6: Increment and decrement
// ------------------------------------------

console.log("\n--- Increment / Decrement ---");

let arrows = 10;
console.log("Arrows:", arrows);   // 10

arrows++;
console.log("Shot one (+1):", arrows);  // Wait... 11? We gained an arrow?

// Let's fix that — we USE arrows, so decrement:
arrows--;
arrows--;
console.log("After using 2:", arrows);  // 9

// Prefix vs postfix (tricky!):
let lives = 3;
console.log("Postfix:", lives++);  // prints 3, THEN becomes 4
console.log("After postfix:", lives);   // 4
console.log("Prefix:", ++lives);   // becomes 5 FIRST, then prints 5


// ------------------------------------------
// EXAMPLE 7: Operator precedence
// ------------------------------------------

console.log("\n--- Precedence (Order of Operations) ---");

// Without parentheses — multiplication happens first
const totalDamage = 10 + 5 * 3;
console.log("10 + 5 * 3 =", totalDamage); // 25 (not 45!)

// With parentheses — force addition first
const forcedOrder = (10 + 5) * 3;
console.log("(10 + 5) * 3 =", forcedOrder); // 45

// A real damage formula:
const base = 15;
const bonus = 5;
const multiplier = 1.5;
const armor = 10;

const finalDamage = (base + bonus) * multiplier - armor;
console.log("Final damage:", finalDamage); // 20


// ------------------------------------------
// EXAMPLE 8: Putting it all together — a battle round
// ------------------------------------------

console.log("\n--- Battle Simulation ---");

let heroHP = 100;
let enemyHP = 80;
const heroDamage = 22;
const monsterDamage = 15;

// Round 1
enemyHP -= heroDamage;
heroHP -= monsterDamage;
console.log("Round 1 — Hero:", heroHP, "HP | Monster:", enemyHP, "HP");

// Round 2
enemyHP -= heroDamage;
heroHP -= monsterDamage;
console.log("Round 2 — Hero:", heroHP, "HP | Monster:", enemyHP, "HP");

// Round 3
enemyHP -= heroDamage;
heroHP -= monsterDamage;
console.log("Round 3 — Hero:", heroHP, "HP | Monster:", enemyHP, "HP");

// Who won?
console.log("Hero alive?", heroHP > 0);
console.log("Monster alive?", enemyHP > 0);
console.log("Hero wins?", heroHP > 0 && enemyHP <= 0);
