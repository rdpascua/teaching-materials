// ============================================
// Day 14: "BOSS FIGHT" — Review Examples
// Quick review of every concept from Days 1-13
// ============================================

// -----------------------------------------------
// REVIEW 1: Variables & Operators (Days 1-2)
// -----------------------------------------------
console.log("=== VARIABLES & OPERATORS ===");

let heroHP = 100;
const HERO_MAX_HP = 100;
let heroGold = 0;
const heroName = "Aria";

heroHP -= 30;       // Take damage
heroGold += 50;     // Earn gold
heroHP *= 1;        // No change, just showing the operator

console.log(`${heroName} — HP: ${heroHP}/${HERO_MAX_HP} | Gold: ${heroGold}`);

// Template literals for complex strings
const statusBar = `[${"#".repeat(Math.floor(heroHP / 10))}${".".repeat(10 - Math.floor(heroHP / 10))}]`;
console.log(`HP Bar: ${statusBar} ${heroHP}%`);


// -----------------------------------------------
// REVIEW 2: Conditionals (Day 4)
// -----------------------------------------------
console.log("\n=== CONDITIONALS ===");

const checkStatus = (hp) => {
  if (hp <= 0) return "DEFEATED";
  else if (hp < 25) return "CRITICAL";
  else if (hp < 50) return "WOUNDED";
  else return "HEALTHY";
};

console.log("Status:", checkStatus(heroHP));
console.log("Status at 10:", checkStatus(10));
console.log("Status at 0:", checkStatus(0));

// Ternary for quick decisions
const canFight = heroHP > 0 ? "Ready for battle!" : "Too injured...";
console.log(canFight);


// -----------------------------------------------
// REVIEW 3: Loops (Days 5-6)
// -----------------------------------------------
console.log("\n=== LOOPS ===");

// for loop — when you need the index
const dungeonRooms = ["Entrance Hall", "Dark Corridor", "Treasure Room", "Boss Chamber"];
for (let i = 0; i < dungeonRooms.length; i++) {
  console.log(`  Room ${i + 1}: ${dungeonRooms[i]}`);
}

// for...of — when you just need the values
console.log("Quick list:");
for (const room of dungeonRooms) {
  console.log(`  - ${room}`);
}

// while loop — when you don't know how many iterations
let attempts = 0;
let doorOpen = false;
while (!doorOpen) {
  attempts++;
  doorOpen = Math.random() > 0.7;  // 30% chance each try
}
console.log(`Door opened after ${attempts} attempts!`);


// -----------------------------------------------
// REVIEW 4: Functions (Days 7-8)
// -----------------------------------------------
console.log("\n=== FUNCTIONS ===");

// Arrow function with default params
const rollDice = (sides = 20) => Math.floor(Math.random() * sides) + 1;

// Rest parameters
const totalDamage = (...hits) => hits.reduce((sum, h) => sum + h, 0);

// Callback pattern
const onEnemyDefeated = (enemy, rewardCallback) => {
  console.log(`  ${enemy} has been defeated!`);
  rewardCallback(enemy);
};

console.log("Dice rolls:", rollDice(), rollDice(6), rollDice(100));
console.log("Total damage:", totalDamage(10, 25, 8, 15));
onEnemyDefeated("Goblin", (enemy) => console.log(`  Looted ${enemy}'s corpse!`));


// -----------------------------------------------
// REVIEW 5: Closures (Day 9)
// -----------------------------------------------
console.log("\n=== CLOSURES ===");

const createBattleLog = () => {
  const entries = [];  // Private — only accessible via returned methods
  return {
    add: (entry) => entries.push(`[${entries.length + 1}] ${entry}`),
    getAll: () => [...entries],
    getLast: () => entries[entries.length - 1] || "No entries",
  };
};

const log = createBattleLog();
log.add("Battle started");
log.add("Hero attacks Goblin for 15 damage");
log.add("Goblin defeated");
console.log("Last entry:", log.getLast());
console.log("Full log:", log.getAll());


// -----------------------------------------------
// REVIEW 6: Arrays (Days 10-11)
// -----------------------------------------------
console.log("\n=== ARRAYS ===");

const inventory = [
  { name: "Health Potion", type: "consumable", effect: 30 },
  { name: "Iron Sword", type: "weapon", effect: 15 },
  { name: "Mana Potion", type: "consumable", effect: 20 },
  { name: "Steel Shield", type: "armor", effect: 10 },
];

// Array methods chain
const consumableNames = inventory
  .filter(item => item.type === "consumable")
  .map(item => `${item.name} (+${item.effect})`)
  .sort();
console.log("Consumables:", consumableNames);

const totalPower = inventory.reduce((sum, item) => sum + item.effect, 0);
console.log("Total item power:", totalPower);

const hasWeapon = inventory.some(item => item.type === "weapon");
console.log("Has a weapon?", hasWeapon);


// -----------------------------------------------
// REVIEW 7: Objects (Day 12)
// -----------------------------------------------
console.log("\n=== OBJECTS ===");

const createEnemy = (name, hp, attack, xp) => ({
  name,
  hp,
  maxHp: hp,
  attack,
  xp,
  isAlive() { return this.hp > 0; },
  takeDamage(amount) {
    this.hp = Math.max(0, this.hp - amount);
    return `${this.name} takes ${amount} damage! (${this.hp}/${this.maxHp} HP)`;
  },
});

const goblin = createEnemy("Goblin", 30, 8, 15);
console.log(goblin.takeDamage(12));
console.log("Alive?", goblin.isAlive());

// Object.entries for iteration
console.log("Enemy stats:");
for (const [key, value] of Object.entries(goblin)) {
  if (typeof value !== "function") {
    console.log(`  ${key}: ${value}`);
  }
}


// -----------------------------------------------
// REVIEW 8: Destructuring & Spread (Day 13)
// -----------------------------------------------
console.log("\n=== DESTRUCTURING & SPREAD ===");

// Object destructuring
const { name: gName, hp: gHp, attack: gAtk } = goblin;
console.log(`${gName}: ${gHp} HP, ${gAtk} ATK`);

// Array destructuring with rest
const [firstItem, ...otherItems] = inventory;
console.log("First item:", firstItem.name);
console.log("Others:", otherItems.map(i => i.name));

// Spread to create modified copies
const buffedGoblin = { ...goblin, hp: 999, name: "Mega Goblin" };
console.log(`Buffed: ${buffedGoblin.name} with ${buffedGoblin.hp} HP`);
console.log(`Original: ${goblin.name} still has ${goblin.hp} HP`);

// Spread to merge arrays
const bonusLoot = [{ name: "Rare Gem", type: "treasure", effect: 0 }];
const allLoot = [...inventory, ...bonusLoot];
console.log("All loot:", allLoot.map(i => i.name));

console.log("\n=== REVIEW COMPLETE ===");
console.log("You've reviewed everything. Time for the BOSS FIGHT!");
console.log("Open exercises.js to build your dungeon crawler!");
