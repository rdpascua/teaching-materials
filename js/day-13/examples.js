// ============================================
// Day 13: "Unpacking the Treasure"
// Destructuring & Spread
// ============================================

// -----------------------------------------------
// 1. ARRAY DESTRUCTURING
// -----------------------------------------------
console.log("=== ARRAY DESTRUCTURING ===");

const lootChest = ["Gold Ring", "Silver Dagger", "Health Potion", "Magic Scroll"];

// The OLD way — tedious, repetitive
const item0 = lootChest[0];
const item1 = lootChest[1];
console.log("Old way:", item0, item1);

// The NEW way — destructuring!
const [firstItem, secondItem, thirdItem, fourthItem] = lootChest;
console.log("New way:", firstItem, secondItem);
console.log("All four:", firstItem, secondItem, thirdItem, fourthItem);

// Skip elements with empty commas
const [, , potionItem] = lootChest;
console.log("Skipped to third:", potionItem);  // "Health Potion"

// Fewer variables = remaining items ignored
const [primary, secondary] = lootChest;
console.log("Just two:", primary, secondary);

// More variables than elements = undefined
const [a, b, c, d, e] = lootChest;
console.log("Extra variable:", e);  // undefined

// Swap two variables without a temp variable!
let playerWeapon = "Sword";
let playerShield = "Buckler";
console.log("Before swap:", playerWeapon, playerShield);
[playerWeapon, playerShield] = [playerShield, playerWeapon];
console.log("After swap:", playerWeapon, playerShield);


// -----------------------------------------------
// 2. OBJECT DESTRUCTURING
// -----------------------------------------------
console.log("\n=== OBJECT DESTRUCTURING ===");

const dragonBoss = {
  name: "Ancient Fire Dragon",
  hp: 1000,
  attack: 80,
  defense: 60,
  element: "fire",
  weakness: "ice",
};

// The OLD way
const oldName = dragonBoss.name;
const oldHp = dragonBoss.hp;
console.log("Old way:", oldName, oldHp);

// The NEW way — destructuring by property name
const { name, hp, attack, weakness } = dragonBoss;
console.log("New way:", name, hp, attack, weakness);
// Order doesn't matter! It matches by name, not position.

// Rename variables — when the property name isn't what you want
const { name: bossName, hp: bossHP } = dragonBoss;
console.log("Renamed:", bossName, bossHP);

// Only extract what you need (ignore the rest)
const { element, weakness: weak } = dragonBoss;
console.log("Just these:", element, weak);

// Destructuring in function parameters — super clean!
const displayMonster = ({ name, hp, attack, element }) => {
  console.log(`  ${name} [${element}] — HP: ${hp}, ATK: ${attack}`);
};

displayMonster(dragonBoss);
displayMonster({ name: "Ice Golem", hp: 200, attack: 30, element: "ice" });


// -----------------------------------------------
// 3. DEFAULT VALUES
// -----------------------------------------------
console.log("\n=== DEFAULT VALUES ===");

// Array defaults
const sparseChest = ["Sword"];
const [weapon = "Fists", armor = "Cloth Robe", accessory = "None"] = sparseChest;
console.log("With defaults:", weapon, armor, accessory);
// "Sword", "Cloth Robe", "None" — first has a value, others use defaults

// Object defaults
const incompleteChar = { name: "Mystery Hero" };
const {
  name: heroName = "Unknown",
  hp: heroHp = 100,
  mp: heroMp = 50,
  level: heroLevel = 1,
} = incompleteChar;
console.log(`${heroName} — HP: ${heroHp}, MP: ${heroMp}, Level: ${heroLevel}`);
// "Mystery Hero — HP: 100, MP: 50, Level: 1"
// name was found so it uses "Mystery Hero". The rest use defaults.

// Defaults in function parameters with destructuring
const createEnemy = ({ name = "Unknown", hp = 50, attack = 10, element = "neutral" } = {}) => {
  return { name, hp, attack, element };
};
console.log(createEnemy({ name: "Goblin" }));
console.log(createEnemy({}));
console.log(createEnemy());  // The = {} default handles no argument at all


// -----------------------------------------------
// 4. SPREAD OPERATOR — Arrays
// -----------------------------------------------
console.log("\n=== SPREAD — ARRAYS ===");

// Combine arrays — merge two inventories
const weapons = ["Sword", "Bow", "Staff"];
const potions = ["Health Potion", "Mana Potion"];
const combinedInventory = [...weapons, ...potions];
console.log("Combined:", combinedInventory);
// ["Sword", "Bow", "Staff", "Health Potion", "Mana Potion"]

// Add items while combining
const fullInventory = ["Gold Coin", ...weapons, "Shield", ...potions, "Torch"];
console.log("Full:", fullInventory);

// Copy an array (independent copy)
const originalLoot = ["Diamond", "Ruby", "Emerald"];
const lootCopy = [...originalLoot];
lootCopy.push("Sapphire");
console.log("Copy:", lootCopy);        // Has Sapphire
console.log("Original:", originalLoot); // No Sapphire — independent!

// Spread into function arguments
const damageRolls = [12, 8, 15, 22, 5];
const maxDamage = Math.max(...damageRolls);
console.log("Max damage:", maxDamage);  // 22
// Without spread: Math.max([12, 8, 15, 22, 5]) returns NaN!


// -----------------------------------------------
// 5. SPREAD OPERATOR — Objects
// -----------------------------------------------
console.log("\n=== SPREAD — OBJECTS ===");

// Copy an object
const baseStats = { hp: 100, attack: 20, defense: 15 };
const statsCopy = { ...baseStats };
statsCopy.hp = 200;
console.log("Copy:", statsCopy);       // hp: 200
console.log("Original:", baseStats);   // hp: 100 — unchanged!

// Merge objects
const characterBase = { name: "Hero", hp: 100, mp: 50 };
const classBonus = { attack: 25, mp: 80, specialMove: "Fireball" };
const character = { ...characterBase, ...classBonus };
console.log("Merged:", character);
// { name: "Hero", hp: 100, mp: 80, attack: 25, specialMove: "Fireball" }
// Note: mp was in both — the LAST one wins! (80 from classBonus)

// Override specific properties
const nerfedDragon = { ...dragonBoss, hp: 100, attack: 10 };
console.log("Nerfed:", nerfedDragon.name, "HP:", nerfedDragon.hp, "ATK:", nerfedDragon.attack);
// Same dragon, but HP and attack overridden

// Pattern: defaults + overrides
const defaultSettings = { difficulty: "normal", sound: true, music: true };
const userSettings = { difficulty: "hard", music: false };
const finalSettings = { ...defaultSettings, ...userSettings };
console.log("Settings:", finalSettings);
// { difficulty: "hard", sound: true, music: false }


// -----------------------------------------------
// 6. REST IN DESTRUCTURING
// -----------------------------------------------
console.log("\n=== REST IN DESTRUCTURING ===");

// Array rest — take the first, collect the remaining
const partyOrder = ["Leader", "Fighter", "Mage", "Healer", "Rogue"];
const [leader, ...followers] = partyOrder;
console.log("Leader:", leader);       // "Leader"
console.log("Followers:", followers); // ["Fighter", "Mage", "Healer", "Rogue"]

// Object rest — pull out specific props, collect the remainder
const playerData = {
  username: "DragonSlayer99",
  level: 42,
  hp: 350,
  mp: 120,
  gold: 5000,
  guild: "Phoenix Order",
};

const { username, level, ...gameStats } = playerData;
console.log("Username:", username);  // "DragonSlayer99"
console.log("Level:", level);        // 42
console.log("Other stats:", gameStats);
// { hp: 350, mp: 120, gold: 5000, guild: "Phoenix Order" }

// Practical use: remove a property without mutate
const monster = { name: "Goblin", hp: 30, loot: "tooth", temporary: true };
const { temporary, ...cleanMonster } = monster;
console.log("Without temporary:", cleanMonster);
// { name: "Goblin", hp: 30, loot: "tooth" } — temporary is gone!


// -----------------------------------------------
// 7. COMBINING EVERYTHING
// -----------------------------------------------
console.log("\n=== COMBINING EVERYTHING ===");

// A function that uses destructuring, defaults, spread, and rest
const buildParty = ({ leader, ...config } = {}) => {
  const {
    members = [],
    difficulty = "normal",
    bonusGold = 0,
  } = config;

  const party = [leader, ...members];
  const settings = {
    difficulty,
    partySize: party.length,
    goldMultiplier: difficulty === "hard" ? 2 : 1,
    bonusGold,
  };

  return { party, settings };
};

const result = buildParty({
  leader: "Aria",
  members: ["Kael", "Luna", "Thorne"],
  difficulty: "hard",
  bonusGold: 100,
});

console.log("Party:", result.party);
console.log("Settings:", result.settings);

console.log("\n=== LESSON COMPLETE ===");
console.log("The treasure has been unpacked! Destructuring and spread are yours to wield.");
