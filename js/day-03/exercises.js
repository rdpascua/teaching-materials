// ============================================
// Day 3 Exercises: The Blacksmith's Math
// ============================================
// Instructions: Read each problem, write your answer, then run the file.
// Try to PREDICT the output before running!


// ------------------------------------------
// EXERCISE 1: The Price Calculator
// Gorrik sells weapons. Calculate the final price after discount.
// ------------------------------------------

const swordPrice = 120;
const discount = 15;  // percent

// TODO: Calculate the discount amount (15% of 120)
// const discountAmount = ???

// TODO: Calculate the final price (original - discount)
// const finalPrice = ???

// console.log("Original:", swordPrice, "gold");
// console.log("Discount:", discountAmount, "gold");
// console.log("Final price:", finalPrice, "gold");


// ------------------------------------------
// EXERCISE 2: Even or Odd Detector
// Use the modulo operator to determine if each hero's level is even or odd.
// Print "even" or "odd" for each.
// ------------------------------------------

const warrior = 14;
const mage = 9;
const rogue = 21;
const healer = 30;

// Hint: a number is even if number % 2 === 0
// Example: console.log("Warrior level", warrior, "is", warrior % 2 === 0 ? "even" : "odd");
// (Don't worry about the ? : syntax yet — just use it as shown, or use a comparison)

// Write your code here:



// ------------------------------------------
// EXERCISE 3: Weapon Ranker
// Use comparison operators to answer each question with true/false.
// ------------------------------------------

const dagger = { name: "Shadow Dagger", damage: 18, speed: 95 };
const sword = { name: "Iron Sword", damage: 35, speed: 60 };
const staff = { name: "Oak Staff", damage: 28, speed: 70 };

// TODO: Is the sword stronger than the staff?
// console.log("Sword > Staff?", ???);

// TODO: Is the dagger the fastest weapon?
// console.log("Dagger fastest?", ???);

// TODO: Do the sword and staff have the same damage?
// console.log("Same damage?", ???);

// TODO: Is the dagger's damage less than or equal to 20?
// console.log("Dagger <= 20 damage?", ???);


// ------------------------------------------
// EXERCISE 4: Can the hero enter the dungeon?
// Use logical operators to combine conditions.
// ------------------------------------------

const heroLevel = 5;
const heroHP = 80;
const hasKey = true;
const isCursed = false;

// The dungeon requires ALL of these:
// - Level 5 or higher
// - At least 50 HP
// - Must have the key
// - Must NOT be cursed

// TODO: Write a single expression that checks all conditions:
// const canEnterDungeon = ???;

// console.log("Can enter dungeon?", canEnterDungeon);  // should be true


// ------------------------------------------
// EXERCISE 5: Battle Tracker
// Simulate a battle using assignment operators (+=, -=)
// ------------------------------------------

let heroHealth = 100;
let bossHealth = 150;

// Round 1: Hero deals 25 damage, boss deals 18 damage
// TODO: Update both health values using -= operator



// Round 2: Hero drinks a potion, restoring 30 HP
// TODO: Update heroHealth using += operator



// Round 3: Hero deals a critical hit — 25 * 2 = 50 damage to boss
// Boss deals 18 damage to hero
// TODO: Update both health values



// TODO: Print final health values
// console.log("Hero HP:", heroHealth);   // Expected: ???
// console.log("Boss HP:", bossHealth);   // Expected: ???
// console.log("Hero wins?", heroHealth > 0 && bossHealth <= 0);


// ==========================================
// BONUS CHALLENGE (+15 XP)
// Build a damage calculator!
// ==========================================

// Given these stats, calculate the final damage dealt to the monster:
const baseAttack = 20;
const weaponPower = 15;
const strengthMultiplier = 1.5;
const monsterArmor = 12;
const isCriticalHit = true;
const critBonus = 2;  // crits multiply total damage by 2

// Formula:
// 1. Raw damage = (baseAttack + weaponPower) * strengthMultiplier
// 2. If critical hit, multiply raw damage by critBonus
// 3. Subtract monsterArmor from the result
// 4. Damage can't go below 0 (use Math.max if you know it, or just note it)

// TODO: Calculate and print the final damage
// const rawDamage = ???;
// const afterCrit = ???;
// const finalDamage = ???;
// console.log("Final damage dealt:", finalDamage);
