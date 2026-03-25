// ============================================
// Day 8: "The Arrow Upgrade"
// Arrow Functions, Default/Rest Params, Callbacks
// ============================================

// -----------------------------------------------
// 1. ARROW FUNCTION SYNTAX
// -----------------------------------------------

// --- The Old Way (traditional function) ---
function swingSword(target) {
  return `You swing your sword at the ${target}!`;
}

// --- The New Way (arrow function) ---
const shootArrow = (target) => {
  return `You shoot an arrow at the ${target}!`;
};

// --- Even Shorter (implicit return — single expression, no braces) ---
const castSpell = (target) => `You cast fireball at the ${target}!`;

// --- Single parameter (parentheses optional) ---
const examineMonster = monster => `You examine the ${monster} closely...`;

// --- No parameters (empty parentheses required) ---
const rest = () => "You set up camp and rest for the night.";

// --- Multi-line body (needs braces + explicit return) ---
const attackWithCrit = (weapon, target) => {
  const critRoll = Math.random();
  const isCrit = critRoll > 0.8;
  const damage = isCrit ? 50 : 20;
  return `You strike the ${target} with your ${weapon} for ${damage} damage!${isCrit ? " CRITICAL HIT!" : ""}`;
};

// --- Returning an object literal (must wrap in parentheses) ---
const createPotion = (name) => ({ name, type: "consumable", healing: 25 });

// Let's test them all
console.log("=== ARROW FUNCTION SYNTAX ===");
console.log(swingSword("goblin"));
console.log(shootArrow("goblin"));
console.log(castSpell("goblin"));
console.log(examineMonster("goblin"));
console.log(rest());
console.log(attackWithCrit("enchanted bow", "troll"));
console.log(createPotion("Health Elixir"));

// -----------------------------------------------
// 2. DEFAULT PARAMETERS
// -----------------------------------------------
console.log("\n=== DEFAULT PARAMETERS ===");

// Without defaults — what happens when you forget an argument?
const greetHero = (name) => `Welcome, ${name}!`;
console.log(greetHero());        // "Welcome, undefined!" -- oops!

// With defaults — backup gear!
const greetHeroSafe = (name = "Adventurer") => `Welcome, ${name}!`;
console.log(greetHeroSafe());          // "Welcome, Adventurer!"
console.log(greetHeroSafe("Aria"));    // "Welcome, Aria!"

// Multiple defaults
const createCharacter = (name = "Hero", classType = "Warrior", level = 1) => {
  return `${name} the ${classType} (Level ${level})`;
};
console.log(createCharacter());                          // All defaults
console.log(createCharacter("Kael"));                    // Override just name
console.log(createCharacter("Luna", "Mage", 5));         // Override all

// Default can reference earlier parameters
const equipWeapon = (weapon, damage = weapon.length * 3) => {
  return `Equipped: ${weapon} (${damage} ATK)`;
};
console.log(equipWeapon("Dagger"));            // damage = 6 * 3 = 18
console.log(equipWeapon("Greatsword"));        // damage = 10 * 3 = 30
console.log(equipWeapon("Dagger", 99));        // override: 99

// Important: null does NOT trigger the default
const heal = (amount = 50) => `Healed for ${amount} HP`;
console.log(heal(undefined));   // "Healed for 50 HP" (default kicks in)
console.log(heal(null));        // "Healed for null HP" (null is NOT undefined)
console.log(heal(0));           // "Healed for 0 HP" (0 is NOT undefined)

// -----------------------------------------------
// 3. REST PARAMETERS
// -----------------------------------------------
console.log("\n=== REST PARAMETERS ===");

// The bottomless bag — accept any number of arguments
const calculateTotalDamage = (...hits) => {
  console.log("  Hits array:", hits);
  let total = 0;
  for (const hit of hits) {
    total += hit;
  }
  return total;
};

console.log("Total damage:", calculateTotalDamage(10, 25, 8, 30, 12));

// Rest AFTER named parameters
const formParty = (leader, ...members) => {
  console.log(`  Party leader: ${leader}`);
  console.log(`  Party members: ${members.join(", ")}`);
  console.log(`  Party size: ${1 + members.length}`);
};

formParty("Aria", "Kael", "Luna", "Thorne");

// Using rest with arrow functions — a combo attack!
const comboAttack = (attacker, ...moves) => {
  let log = `${attacker} performs a combo:\n`;
  moves.forEach((move, i) => {
    log += `  Strike ${i + 1}: ${move}\n`;
  });
  return log;
};

console.log(comboAttack("Warrior", "Slash", "Uppercut", "Spinning Strike", "Final Blow"));

// -----------------------------------------------
// 4. CALLBACKS
// -----------------------------------------------
console.log("\n=== CALLBACKS ===");

// Functions are values — you can store them in variables
const healSpell = (target) => `${target} is healed for 30 HP!`;
const fireSpell = (target) => `${target} takes 45 fire damage!`;
const iceSpell = (target) => `${target} is frozen solid!`;

// A function that TAKES another function (callback)
const castOnEnemy = (enemy, spellCallback) => {
  console.log(`  Targeting ${enemy}...`);
  const result = spellCallback(enemy);
  console.log(`  Result: ${result}`);
};

console.log("--- Using named functions as callbacks ---");
castOnEnemy("Dark Elf", fireSpell);
castOnEnemy("Ice Golem", healSpell);   // Heal an enemy? Bold strategy.

console.log("\n--- Using anonymous arrow functions as callbacks ---");
castOnEnemy("Dragon", (target) => `${target} is struck by lightning for 60 damage!`);

// A practical "forEach" style callback
const forEachItem = (items, action) => {
  for (let i = 0; i < items.length; i++) {
    action(items[i], i);
  }
};

console.log("\n--- forEach with callback ---");
const loot = ["Gold Coin", "Health Potion", "Rusty Sword", "Magic Scroll"];
forEachItem(loot, (item, index) => {
  console.log(`  Slot ${index + 1}: ${item}`);
});

// Callbacks with decisions — the party leader gives orders
const executeOrder = (partyMember, situation, orderCallback) => {
  console.log(`\n  ${partyMember} encounters: ${situation}`);
  const action = orderCallback(situation);
  console.log(`  ${partyMember}'s action: ${action}`);
};

const braveTactic = (situation) => `Charge at the ${situation}!`;
const sneakyTactic = (situation) => `Sneak around the ${situation}...`;

executeOrder("Warrior", "a sleeping troll", braveTactic);
executeOrder("Rogue", "a guarded chest", sneakyTactic);

// -----------------------------------------------
// 5. COMBINING EVERYTHING
// -----------------------------------------------
console.log("\n=== COMBINING EVERYTHING ===");

// A flexible battle function using all concepts
const battleRound = (hero = "Hero", ...enemies) => {
  console.log(`\n  ${hero} faces ${enemies.length} enemies!`);

  const processEnemies = (enemyList, attackCallback) => {
    enemyList.forEach((enemy, i) => {
      const damage = Math.floor(Math.random() * 30) + 10;
      console.log(`  ${attackCallback(enemy, damage)}`);
    });
  };

  processEnemies(enemies, (enemy, dmg) => `${hero} hits ${enemy} for ${dmg} damage!`);
};

battleRound("Aria", "Goblin", "Skeleton", "Dark Mage");
battleRound(undefined, "Slime");   // Uses default "Hero"

console.log("\n=== LESSON COMPLETE ===");
console.log("Your arrows have been upgraded! You now wield arrow functions.");
