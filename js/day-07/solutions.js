// ============================================
// Day 7 Solutions: Learning Your First Spell
// ============================================


// ------------------------------------------
// EXERCISE 1: Write a Greeting Spell
// ------------------------------------------

function greet(name) {
  console.log(`Hail, ${name}! Welcome to CodeVille!`);
}

greet("Aria");   // "Hail, Aria! Welcome to CodeVille!"
greet("Kael");   // "Hail, Kael! Welcome to CodeVille!"
greet("Zara");   // "Hail, Zara! Welcome to CodeVille!"

// KEY LESSON: A function is defined once and called many times.
// `name` is a parameter — a placeholder that gets filled with
// whatever argument you pass when calling the function.


// ------------------------------------------
// EXERCISE 2: The Damage Calculator
// ------------------------------------------

function calcDamage(baseDamage, weaponBonus, multiplier) {
  return (baseDamage + weaponBonus) * multiplier;
}

console.log("\n--- Damage Calculator ---");
console.log(calcDamage(10, 5, 2));      // 30
console.log(calcDamage(20, 10, 1.5));   // 45
console.log(calcDamage(5, 0, 3));       // 15

// KEY LESSON: return sends a value BACK to the caller.
// Without return, the function would return undefined and
// console.log would print "undefined". The calculation would
// happen inside the function but the result would be lost.


// ------------------------------------------
// EXERCISE 3: Potion Checker
// ------------------------------------------

function recommendPotion(currentHP) {
  if (currentHP > 75) return "No potion needed";
  if (currentHP > 50) return "Use a minor potion";
  if (currentHP > 25) return "Use a major potion";
  if (currentHP > 0)  return "Use a legendary potion";
  return "Too late... no potion can help";
}

console.log("\n--- Potion Recommendations ---");
console.log(recommendPotion(90));   // "No potion needed"
console.log(recommendPotion(60));   // "Use a minor potion"
console.log(recommendPotion(30));   // "Use a major potion"
console.log(recommendPotion(10));   // "Use a legendary potion"
console.log(recommendPotion(0));    // "Too late... no potion can help"

// KEY LESSON: return exits the function immediately. So we don't
// need else-if here — if the first condition is true, we return
// and never reach the other checks. This is called "early return"
// and it keeps code flat and readable.


// ------------------------------------------
// EXERCISE 4: Default Parameters
// ------------------------------------------

function createHero(name, hp = 100, weapon = "Fists") {
  return `${name} | HP: ${hp} | Weapon: ${weapon}`;
}

console.log("\n--- Hero Creator ---");
console.log(createHero("Aria", 120, "Flame Sword"));
// "Aria | HP: 120 | Weapon: Flame Sword"

console.log(createHero("Kael", 80));
// "Kael | HP: 80 | Weapon: Fists"

console.log(createHero("Pip"));
// "Pip | HP: 100 | Weapon: Fists"

// KEY LESSON: Default parameters use the = syntax in the function
// definition. If no argument is passed (or undefined is passed),
// the default kicks in. Required parameters should come first,
// optional/defaulted ones come last.


// ------------------------------------------
// EXERCISE 5: Spell Combo
// ------------------------------------------

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function castSpell(spellName, minDamage, maxDamage) {
  const roll = rollDice(maxDamage - minDamage + 1) + minDamage - 1;
  console.log(`You cast ${spellName} for ${roll} damage!`);
  return roll;
}

console.log("\n--- Spell Combo ---");
const dmg1 = castSpell("Fireball", 20, 40);
const dmg2 = castSpell("Ice Shard", 10, 25);
console.log("Total spell damage:", dmg1 + dmg2);

// KEY LESSON: Functions can call other functions! castSpell uses
// rollDice internally. This is how you build complex behavior
// from simple building blocks. Each function does ONE thing well.

// Breakdown of the random damage formula:
// rollDice(maxDamage - minDamage + 1) gives a number from 1 to range.
// Adding (minDamage - 1) shifts it to start at minDamage.
// Example: min=20, max=40 → rollDice(21) gives 1-21 → +19 gives 20-40.


// ==========================================
// BONUS CHALLENGE SOLUTION
// ==========================================

console.log("\n--- BONUS: Mini RPG Battle ---");

function createFighter(name, hp, minDmg, maxDmg) {
  return { name, hp, minDmg, maxDmg };
}

function attack(attacker, defender) {
  const range = attacker.maxDmg - attacker.minDmg + 1;
  const damage = Math.floor(Math.random() * range) + attacker.minDmg;
  defender.hp -= damage;
  console.log(`  ${attacker.name} attacks ${defender.name} for ${damage} damage!`);
  return damage;
}

function isAlive(fighter) {
  return fighter.hp > 0;
}

function battleRound(fighter1, fighter2) {
  attack(fighter1, fighter2);

  if (isAlive(fighter2)) {
    attack(fighter2, fighter1);
  }

  console.log(`  ${fighter1.name} HP: ${Math.max(0, fighter1.hp)} | ${fighter2.name} HP: ${Math.max(0, fighter2.hp)}`);
}

// Create the fighters
const hero = createFighter("Aria", 100, 15, 25);
const monster = createFighter("Goblin King", 80, 10, 20);

console.log(`\n  ${hero.name} vs ${monster.name}!`);
console.log("  ========================");

// Run up to 5 rounds
for (let round = 1; round <= 5; round++) {
  console.log(`\n  --- Round ${round} ---`);
  battleRound(hero, monster);

  if (!isAlive(monster)) {
    console.log(`\n  ${monster.name} has been defeated!`);
    console.log(`  ${hero.name} wins with ${hero.hp} HP remaining!`);
    break;
  }

  if (!isAlive(hero)) {
    console.log(`\n  ${hero.name} has fallen!`);
    console.log(`  ${monster.name} wins with ${monster.hp} HP remaining!`);
    break;
  }
}

if (isAlive(hero) && isAlive(monster)) {
  console.log("\n  The battle continues... (5 round limit reached)");
}

// KEY LESSON: This bonus shows functions as BUILDING BLOCKS.
// - createFighter: creates data
// - attack: performs an action and modifies data
// - isAlive: checks a condition
// - battleRound: orchestrates other functions
//
// Each function does one thing. Together they create a system.
// This is the heart of programming: breaking complex problems
// into small, manageable pieces.
//
// Note: We passed objects (hero, monster) to functions. When you
// modify an object inside a function (defender.hp -= damage),
// the original object changes too. We'll learn more about this
// when we cover objects in detail later!
