// ============================================
// Day 9: "The Hidden Caves"
// Scope & Closures
// ============================================

// -----------------------------------------------
// 1. GLOBAL SCOPE — The Entrance Hall
// -----------------------------------------------
console.log("=== GLOBAL SCOPE ===");

const worldName = "The Dark Forest";  // Global — everyone can see this

const enterForest = () => {
  // This function can access the global variable
  console.log(`  Entering ${worldName}...`);
};

enterForest();
console.log(`  World: ${worldName}`);  // Also accessible here


// -----------------------------------------------
// 2. FUNCTION SCOPE — Private Chambers
// -----------------------------------------------
console.log("\n=== FUNCTION SCOPE ===");

const exploreCave = () => {
  const treasure = "Golden Amulet";  // Function-scoped — only visible inside
  const trapCount = 3;

  console.log(`  Inside cave: Found ${treasure} and ${trapCount} traps`);
};

exploreCave();
// console.log(treasure);  // ERROR! treasure is not defined out here
// It's like trying to see treasure inside a sealed cave from outside.


// -----------------------------------------------
// 3. BLOCK SCOPE — Locked Chests
// -----------------------------------------------
console.log("\n=== BLOCK SCOPE (let/const vs var) ===");

const checkChest = () => {
  const hasKey = true;

  if (hasKey) {
    let secretItem = "Diamond Ring";       // Block-scoped (let)
    const lockedGem = "Ruby";              // Block-scoped (const)
    var leakyPotion = "Elixir of Wisdom";  // NOT block-scoped (var leaks!)

    console.log(`  Inside chest: ${secretItem}, ${lockedGem}, ${leakyPotion}`);
  }

  // Outside the if-block:
  // console.log(secretItem);  // ERROR — let is block-scoped
  // console.log(lockedGem);   // ERROR — const is block-scoped
  console.log(`  Outside chest (var leaked): ${leakyPotion}`);  // Works! var leaks out
};

checkChest();

// Classic loop problem with var vs let
console.log("\n--- var in loops (problematic) ---");
for (var i = 0; i < 3; i++) {
  // var i is NOT block-scoped — it's global here
}
console.log(`  After loop, var i = ${i}`);  // 3 — it leaked!

console.log("--- let in loops (safe) ---");
for (let j = 0; j < 3; j++) {
  // let j is block-scoped
}
// console.log(j);  // ERROR — j is not defined out here
console.log("  After loop, let j is not accessible (as expected)");


// -----------------------------------------------
// 4. SCOPE CHAIN — Looking Back Toward the Entrance
// -----------------------------------------------
console.log("\n=== SCOPE CHAIN ===");

const dungeonLevel = "Surface";  // Global scope

const enterDungeon = () => {
  const dungeonLevel = "Level 1";  // Shadows the global variable

  const goDeeper = () => {
    const dungeonLevel = "Level 2";

    const secretRoom = () => {
      // JS looks for dungeonLevel here first, then outer scopes
      console.log(`  Secret room is at: ${dungeonLevel}`);  // "Level 2"

      // But we can access variables from ALL outer scopes
      // (if they're not shadowed)
    };

    secretRoom();
    console.log(`  Deeper area: ${dungeonLevel}`);  // "Level 2"
  };

  goDeeper();
  console.log(`  Dungeon entrance: ${dungeonLevel}`);  // "Level 1"
};

enterDungeon();
console.log(`  Outside dungeon: ${dungeonLevel}`);  // "Surface"

// The scope chain: secretRoom -> goDeeper -> enterDungeon -> global
// Each scope looks outward but NEVER inward


// -----------------------------------------------
// 5. CLOSURES — Functions That Remember
// -----------------------------------------------
console.log("\n=== CLOSURES ===");

// A closure is born when an inner function references an outer variable
const createGreeting = (heroName) => {
  // heroName is in the outer scope
  const greet = () => {
    // This inner function "closes over" heroName
    return `Hail, ${heroName}! Welcome to the caves.`;
  };
  return greet;  // We return the function itself
};

const greetAria = createGreeting("Aria");
const greetKael = createGreeting("Kael");

// createGreeting has finished running, but the returned functions
// still remember their heroName!
console.log(`  ${greetAria()}`);  // "Hail, Aria! Welcome to the caves."
console.log(`  ${greetKael()}`);  // "Hail, Kael! Welcome to the caves."


// -----------------------------------------------
// 6. CLOSURE PATTERN: Counter
// -----------------------------------------------
console.log("\n=== CLOSURE COUNTER ===");

const makeStepCounter = () => {
  let steps = 0;  // This variable is "trapped" in the closure

  return () => {
    steps++;
    return `Steps taken: ${steps}`;
  };
};

const heroSteps = makeStepCounter();
const monsterSteps = makeStepCounter();  // Separate closure, separate count!

console.log(`  Hero: ${heroSteps()}`);     // Steps taken: 1
console.log(`  Hero: ${heroSteps()}`);     // Steps taken: 2
console.log(`  Monster: ${monsterSteps()}`); // Steps taken: 1
console.log(`  Hero: ${heroSteps()}`);     // Steps taken: 3
console.log(`  Monster: ${monsterSteps()}`); // Steps taken: 2

// Each call to makeStepCounter() creates a FRESH `steps` variable.
// The two counters are completely independent.


// -----------------------------------------------
// 7. CLOSURE PATTERN: Private Data
// -----------------------------------------------
console.log("\n=== CLOSURE: PRIVATE DATA ===");

const createPlayer = (name, startingHP = 100) => {
  let hp = startingHP;  // Private! No direct access from outside.

  return {
    getName: () => name,
    getHP: () => hp,
    takeDamage: (amount) => {
      hp = Math.max(0, hp - amount);
      console.log(`  ${name} takes ${amount} damage! HP: ${hp}`);
    },
    heal: (amount) => {
      hp = Math.min(startingHP, hp + amount);
      console.log(`  ${name} heals ${amount} HP! HP: ${hp}`);
    },
    isAlive: () => hp > 0,
  };
};

const hero = createPlayer("Aria", 80);
hero.takeDamage(30);     // HP: 50
hero.takeDamage(20);     // HP: 30
hero.heal(10);           // HP: 40
console.log(`  Is alive? ${hero.isAlive()}`);  // true

// You can NOT do: hero.hp = 9999  (hp is not a property!)
// The only way to change HP is through takeDamage and heal.
// This is "encapsulation" — hiding internal state.


// -----------------------------------------------
// 8. CLOSURE PATTERN: Function Factory
// -----------------------------------------------
console.log("\n=== CLOSURE: FUNCTION FACTORY ===");

const createDamageMultiplier = (multiplier) => {
  return (baseDamage) => {
    const total = Math.floor(baseDamage * multiplier);
    return `${total} damage (x${multiplier})`;
  };
};

const normalHit = createDamageMultiplier(1);
const criticalHit = createDamageMultiplier(2.5);
const weakHit = createDamageMultiplier(0.5);

console.log(`  Normal: ${normalHit(20)}`);     // 20 damage (x1)
console.log(`  Critical: ${criticalHit(20)}`); // 50 damage (x2.5)
console.log(`  Weak: ${weakHit(20)}`);         // 10 damage (x0.5)

// Each function "remembers" its multiplier value.
// We created three specialized functions from one factory.

console.log("\n=== LESSON COMPLETE ===");
console.log("You've mapped the hidden caves. Scope and closures are now your allies.");
