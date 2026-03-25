// ============================================
// Day 7 Exercises: Learning Your First Spell
// ============================================
// Instructions: Read each problem, write your answer, then run the file.


// ------------------------------------------
// EXERCISE 1: Write a Greeting Spell
// Create a function called `greet` that takes a hero's name and
// prints a welcome message.
// ------------------------------------------

// TODO: Write the function
// function greet(???) {
//   ???
// }

// Test it:
// greet("Aria");     // Expected: "Hail, Aria! Welcome to CodeVille!"
// greet("Kael");     // Expected: "Hail, Kael! Welcome to CodeVille!"
// greet("Zara");     // Expected: "Hail, Zara! Welcome to CodeVille!"


// ------------------------------------------
// EXERCISE 2: The Damage Calculator
// Create a function that calculates total damage and RETURNS it.
// ------------------------------------------

// TODO: Write a function called `calcDamage` that:
// - Takes three parameters: baseDamage, weaponBonus, multiplier
// - Calculates: (baseDamage + weaponBonus) * multiplier
// - RETURNS the result (don't just console.log it!)

// Test it:
// console.log(calcDamage(10, 5, 2));    // Expected: 30
// console.log(calcDamage(20, 10, 1.5)); // Expected: 45
// console.log(calcDamage(5, 0, 3));     // Expected: 15


// ------------------------------------------
// EXERCISE 3: Potion Checker
// Write a function that takes an HP value and returns a string
// describing which potion to use.
// ------------------------------------------

// TODO: Write a function called `recommendPotion` that:
// - Takes one parameter: currentHP
// - Returns:
//   "No potion needed"      if HP > 75
//   "Use a minor potion"    if HP > 50
//   "Use a major potion"    if HP > 25
//   "Use a legendary potion" if HP > 0
//   "Too late... no potion can help" if HP <= 0

// Test it:
// console.log(recommendPotion(90));  // "No potion needed"
// console.log(recommendPotion(60));  // "Use a minor potion"
// console.log(recommendPotion(30));  // "Use a major potion"
// console.log(recommendPotion(10));  // "Use a legendary potion"
// console.log(recommendPotion(0));   // "Too late... no potion can help"


// ------------------------------------------
// EXERCISE 4: Default Parameters
// Write a function that creates a character with default stats.
// ------------------------------------------

// TODO: Write a function called `createHero` that:
// - Takes: name (required), hp (default 100), weapon (default "Fists")
// - Returns a string: "[name] | HP: [hp] | Weapon: [weapon]"

// Test it:
// console.log(createHero("Aria", 120, "Flame Sword"));
// Expected: "Aria | HP: 120 | Weapon: Flame Sword"

// console.log(createHero("Kael", 80));
// Expected: "Kael | HP: 80 | Weapon: Fists"

// console.log(createHero("Pip"));
// Expected: "Pip | HP: 100 | Weapon: Fists"


// ------------------------------------------
// EXERCISE 5: Spell Combo
// Write TWO functions that work together.
// ------------------------------------------

// TODO:
// 1. Write a function `rollDice(sides)` that returns a random number
//    between 1 and `sides` (inclusive).
//    Hint: Math.floor(Math.random() * sides) + 1
//
// 2. Write a function `castSpell(spellName, minDamage, maxDamage)` that:
//    - Uses rollDice to get a random roll between minDamage and maxDamage
//      Hint: rollDice(maxDamage - minDamage + 1) + minDamage - 1
//    - Prints: "You cast [spellName] for [roll] damage!"
//    - Returns the damage value

// Test it:
// const dmg1 = castSpell("Fireball", 20, 40);
// const dmg2 = castSpell("Ice Shard", 10, 25);
// console.log("Total spell damage:", dmg1 + dmg2);


// ==========================================
// BONUS CHALLENGE (+15 XP)
// Mini RPG Turn System
// ==========================================

// Build a simple turn-based battle using functions!
// Create these functions:
//
// 1. `createFighter(name, hp, minDmg, maxDmg)` — returns an object
//    { name, hp, minDmg, maxDmg }
//
// 2. `attack(attacker, defender)` — calculates random damage,
//    subtracts it from defender's hp, and prints what happened.
//    Returns the damage dealt.
//
// 3. `isAlive(fighter)` — returns true if fighter's hp > 0
//
// 4. `battleRound(fighter1, fighter2)` — runs one round:
//    - fighter1 attacks fighter2
//    - if fighter2 is still alive, fighter2 attacks fighter1
//    - prints both fighters' remaining HP
//
// Then run 5 rounds of battle between a Hero and a Monster.
// After each round, check if either fighter has fallen.

// Write your code here:
