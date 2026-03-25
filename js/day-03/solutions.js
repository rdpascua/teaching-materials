// ============================================
// Day 3 Solutions: The Blacksmith's Math
// ============================================


// ------------------------------------------
// EXERCISE 1: The Price Calculator
// ------------------------------------------

const swordPrice = 120;
const discount = 15;  // percent

const discountAmount = swordPrice * (discount / 100);  // 120 * 0.15 = 18
const finalPrice = swordPrice - discountAmount;         // 120 - 18 = 102

console.log("Original:", swordPrice, "gold");     // 120
console.log("Discount:", discountAmount, "gold");  // 18
console.log("Final price:", finalPrice, "gold");   // 102

// KEY LESSON: Percentages in code = divide by 100 first, then multiply.
// 15% = 15/100 = 0.15. Then 120 * 0.15 = 18.


// ------------------------------------------
// EXERCISE 2: Even or Odd Detector
// ------------------------------------------

const warrior = 14;
const mage = 9;
const rogue = 21;
const healer = 30;

console.log("\n--- Even/Odd ---");
console.log("Warrior level", warrior, "is even?", warrior % 2 === 0);  // true
console.log("Mage level", mage, "is even?", mage % 2 === 0);          // false
console.log("Rogue level", rogue, "is even?", rogue % 2 === 0);       // false
console.log("Healer level", healer, "is even?", healer % 2 === 0);    // true

// KEY LESSON: number % 2 gives 0 for even numbers, 1 for odd numbers.
// This is one of the most common uses of the modulo operator.


// ------------------------------------------
// EXERCISE 3: Weapon Ranker
// ------------------------------------------

const dagger = { name: "Shadow Dagger", damage: 18, speed: 95 };
const sword = { name: "Iron Sword", damage: 35, speed: 60 };
const staff = { name: "Oak Staff", damage: 28, speed: 70 };

console.log("\n--- Weapon Rankings ---");
console.log("Sword > Staff?", sword.damage > staff.damage);        // true (35 > 28)
console.log("Dagger fastest?", dagger.speed > sword.speed && dagger.speed > staff.speed); // true
console.log("Same damage?", sword.damage === staff.damage);        // false (35 !== 28)
console.log("Dagger <= 20 damage?", dagger.damage <= 20);          // true (18 <= 20)

// KEY LESSON: Comparison operators always return true or false.
// You can chain comparisons with && to check multiple conditions.


// ------------------------------------------
// EXERCISE 4: Can the hero enter the dungeon?
// ------------------------------------------

const heroLevel = 5;
const heroHP = 80;
const hasKey = true;
const isCursed = false;

const canEnterDungeon = heroLevel >= 5 && heroHP >= 50 && hasKey && !isCursed;
console.log("\nCan enter dungeon?", canEnterDungeon); // true

// KEY LESSON: && means ALL conditions must be true.
// !isCursed flips false to true (hero is NOT cursed = good).
// Reading it out loud: "Level is at least 5 AND HP is at least 50
// AND has key AND is not cursed."


// ------------------------------------------
// EXERCISE 5: Battle Tracker
// ------------------------------------------

let heroHealth = 100;
let bossHealth = 150;

// Round 1: Hero deals 25 damage, boss deals 18
bossHealth -= 25;    // 150 - 25 = 125
heroHealth -= 18;    // 100 - 18 = 82

// Round 2: Hero drinks a potion (+30 HP)
heroHealth += 30;    // 82 + 30 = 112

// Round 3: Critical hit (25 * 2 = 50 damage to boss), boss deals 18
bossHealth -= 25 * 2;  // 125 - 50 = 75
heroHealth -= 18;       // 112 - 18 = 94

console.log("\n--- Battle Results ---");
console.log("Hero HP:", heroHealth);   // 94
console.log("Boss HP:", bossHealth);   // 75
console.log("Hero wins?", heroHealth > 0 && bossHealth <= 0); // false (boss still alive!)

// KEY LESSON: Assignment operators (+=, -=) are shortcuts for updating values.
// They make tracking changing values (health, gold, scores) much cleaner.


// ==========================================
// BONUS CHALLENGE SOLUTION
// ==========================================

const baseAttack = 20;
const weaponPower = 15;
const strengthMultiplier = 1.5;
const monsterArmor = 12;
const isCriticalHit = true;
const critBonus = 2;

// Step 1: Raw damage
const rawDamage = (baseAttack + weaponPower) * strengthMultiplier;
// (20 + 15) * 1.5 = 35 * 1.5 = 52.5

// Step 2: Apply crit if applicable
// If isCriticalHit is true, multiply by critBonus. Otherwise, multiply by 1.
const afterCrit = isCriticalHit ? rawDamage * critBonus : rawDamage;
// Alternative without ternary: rawDamage * (isCriticalHit ? critBonus : 1)
// 52.5 * 2 = 105

// Step 3: Subtract armor
const beforeFloor = afterCrit - monsterArmor;
// 105 - 12 = 93

// Step 4: Damage can't go below 0
const finalDamage = Math.max(0, beforeFloor);
// Math.max(0, 93) = 93

console.log("\n--- Damage Calculator ---");
console.log("Raw damage:", rawDamage);       // 52.5
console.log("After crit:", afterCrit);       // 105
console.log("After armor:", beforeFloor);    // 93
console.log("Final damage:", finalDamage);   // 93

// KEY LESSON: Real game damage formulas are just chains of arithmetic.
// Parentheses control the order. Math.max ensures no negative damage.
// The ternary (? :) is a preview of Day 5 — it's a mini if/else.
