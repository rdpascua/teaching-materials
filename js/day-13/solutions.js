// ============================================
// Day 13 Solutions: "Unpacking the Treasure"
// Destructuring & Spread
// ============================================

// -----------------------------------------------
// EXERCISE 1: Array Destructuring
// -----------------------------------------------
console.log("=== EXERCISE 1 ===");

// 1a.
const treasureChest = ["Gold Ring", "Silver Necklace", "Ruby Gem"];
const [first, second, third] = treasureChest;
console.log(first, second, third);

// 1b. Skip first two with empty commas
const spellBook = ["Fireball", "Ice Storm", "Lightning Bolt", "Heal"];
const [, , thirdSpell] = spellBook;
console.log("Third spell:", thirdSpell);  // "Lightning Bolt"

// 1c. Swap using destructuring
let equipped = "Sword";
let backpack = "Axe";
[equipped, backpack] = [backpack, equipped];
console.log("Equipped:", equipped, "Backpack:", backpack);
// Equipped: Axe  Backpack: Sword
// This works because the right side creates a new array [backpack, equipped],
// then the left side destructures it into the variables.

// 1d. Destructure function return value
const getCoordinates = () => [42, 17, "Dungeon Level 3"];
const [x, y, location] = getCoordinates();
console.log(`Position: (${x}, ${y}) — ${location}`);


// -----------------------------------------------
// EXERCISE 2: Object Destructuring
// -----------------------------------------------
console.log("\n=== EXERCISE 2 ===");

const bossMonster = {
  name: "Lich King",
  hp: 500,
  mp: 300,
  attack: 65,
  defense: 40,
  element: "dark",
  weakness: "holy",
  phase: 2,
};

// 2a. Basic object destructuring
const { name, hp, attack } = bossMonster;
console.log(`${name} — HP: ${hp}, ATK: ${attack}`);

// 2b. Rename during destructuring
const { name: bossName, weakness: bossWeakness } = bossMonster;
console.log(`${bossName} is weak to ${bossWeakness}`);
// We can't just use { name } again because `name` is already declared above.
// Renaming solves this AND gives more descriptive variable names.

// 2c. Destructuring in function parameters
const describeBoss = ({ name, hp, element, weakness }) => {
  return `${name} (HP: ${hp}) | Element: ${element} | Weakness: ${weakness}`;
};
console.log(describeBoss(bossMonster));
// The function receives the full object but only pulls out what it needs.

// 2d. Nested destructuring
const hero = {
  name: "Aria",
  equipment: {
    weapon: { name: "Flame Sword", damage: 45 },
    shield: { name: "Iron Shield", defense: 20 },
  },
};
const {
  equipment: {
    weapon: { name: weaponName },
    shield: { defense: shieldDef },
  },
} = hero;
console.log(`Weapon: ${weaponName}, Shield Defense: ${shieldDef}`);
// Nested destructuring follows the shape of the object. Each level
// of nesting uses another set of { }.


// -----------------------------------------------
// EXERCISE 3: Default Values
// -----------------------------------------------
console.log("\n=== EXERCISE 3 ===");

// 3a. Defaults for incomplete character
const mysteryCharacter = { name: "Shadow Thief", hp: 65 };
const {
  name: charName = "Unknown",
  hp: charHp = 100,
  mp: charMp = 50,
  level: charLevel = 1,
} = mysteryCharacter;
console.log(`${charName} — HP: ${charHp}, MP: ${charMp}, Level: ${charLevel}`);
// name and hp come from the object. mp and level use defaults.

// 3b. Function with destructured defaults
const createQuest = ({
  title = "Unknown Quest",
  difficulty = "easy",
  reward = 10,
  description = "No description",
} = {}) => {
  return { title, difficulty, reward, description };
};
// The `= {}` at the end means the entire parameter defaults to an empty
// object if no argument is provided. Without it, createQuest() would crash.

console.log(createQuest({ title: "Slay the Dragon", difficulty: "hard", reward: 500 }));
console.log(createQuest({ title: "Gather Herbs" }));
console.log(createQuest());


// -----------------------------------------------
// EXERCISE 4: Spread Operator
// -----------------------------------------------
console.log("\n=== EXERCISE 4 ===");

// 4a. Combine arrays
const swords = ["Iron Sword", "Steel Sword", "Dragon Blade"];
const bows = ["Short Bow", "Long Bow"];
const staffs = ["Oak Staff", "Crystal Staff", "Elder Wand"];
const allWeapons = [...swords, ...bows, ...staffs];
console.log("All weapons:", allWeapons);

// 4b. Copy array and verify independence
const monsters = ["Goblin", "Skeleton", "Troll"];
const monstersCopy = [...monsters];
monstersCopy.push("Phoenix");
console.log("Copy:", monstersCopy);      // Has Phoenix
console.log("Original:", monsters);       // No Phoenix

// 4c. Merge objects (class bonus overrides base where overlapping)
const baseHero = { name: "Hero", hp: 100, mp: 30, attack: 15, defense: 10 };
const mageBonus = { mp: 80, attack: 10, specialMove: "Arcane Blast" };
const mageHero = { ...baseHero, ...mageBonus };
console.log("Mage Hero:", mageHero);
// mp went from 30 to 80, attack from 15 to 10 (mage is weaker physically)
// specialMove was added. name, hp, defense kept from base.

// 4d. Buff an enemy
const normalEnemy = { name: "Slime", hp: 10, attack: 2 };
const buffedEnemy = { ...normalEnemy, hp: 999, enraged: true };
console.log("Buffed:", buffedEnemy);
console.log("Original:", normalEnemy);  // Unchanged


// -----------------------------------------------
// EXERCISE 5: Rest + Combined Patterns
// -----------------------------------------------
console.log("\n=== EXERCISE 5 ===");

// 5a. Separate leader from members
const adventurers = ["Aria", "Kael", "Luna", "Thorne", "Rex"];
const [partyLeader, ...partyMembers] = adventurers;
console.log("Leader:", partyLeader);    // "Aria"
console.log("Members:", partyMembers);  // ["Kael", "Luna", "Thorne", "Rex"]

// 5b. Object rest
const playerProfile = {
  name: "DragonSlayer",
  level: 25,
  hp: 250,
  mp: 100,
  gold: 3000,
  guild: "Phoenix Order",
};
const { name: pName, level: pLevel, ...pStats } = playerProfile;
console.log("Name:", pName);     // "DragonSlayer"
console.log("Level:", pLevel);   // 25
console.log("Stats:", pStats);   // { hp: 250, mp: 100, gold: 3000, guild: "Phoenix Order" }

// 5c. equipItem — returns new character without mutating
const equipItem = (character, newEquipment) => ({
  ...character,
  equipment: {
    ...character.equipment,
    ...newEquipment,
  },
});
// We spread the character, then override the equipment property
// by spreading both the old equipment and the new items together.

const myChar = { name: "Hero", hp: 100, equipment: { weapon: "Fists" } };
const upgraded = equipItem(myChar, { weapon: "Flame Sword", shield: "Iron Shield" });
console.log("Upgraded:", upgraded);
// { name: "Hero", hp: 100, equipment: { weapon: "Flame Sword", shield: "Iron Shield" } }
console.log("Original:", myChar);
// { name: "Hero", hp: 100, equipment: { weapon: "Fists" } } — unchanged!


// -----------------------------------------------
// BONUS CHALLENGE: Equipment Loadout System
// -----------------------------------------------
console.log("\n=== BONUS ===");

// 1. createLoadout
const createLoadout = (name, defaults = {}) => ({
  name,
  head: null,
  chest: null,
  weapon: null,
  shield: null,
  boots: null,
  ...defaults,  // Override any slots from defaults
});

// 2. equipToLoadout — returns NEW loadout
const equipToLoadout = (loadout, equipment) => ({
  ...loadout,
  ...equipment,
});
// Simple spread merge! The new equipment properties override the
// existing ones. Since we spread loadout first, everything else is kept.

// 3. compareLoadouts — log differences
const compareLoadouts = (loadout1, loadout2) => {
  const allKeys = new Set([...Object.keys(loadout1), ...Object.keys(loadout2)]);
  const differences = [];

  for (const key of allKeys) {
    if (loadout1[key] !== loadout2[key]) {
      differences.push(`  ${key}: "${loadout1[key]}" -> "${loadout2[key]}"`);
    }
  }

  if (differences.length === 0) {
    console.log("Loadouts are identical.");
  } else {
    console.log(`Differences (${differences.length} slots):`);
    differences.forEach(d => console.log(d));
  }
};

// 4. unequipSlot — returns NEW loadout with slot set to null
const unequipSlot = (loadout, slot) => ({
  ...loadout,
  [slot]: null,  // Computed property name to set the right slot
});

// Test the system
const baseLoadout = createLoadout("Tank Build");
console.log("Base loadout:", baseLoadout);

const equippedLoadout = equipToLoadout(baseLoadout, {
  head: "Iron Helm",
  chest: "Steel Plate",
  weapon: "War Hammer",
  shield: "Tower Shield",
  boots: "Heavy Greaves",
});
console.log("\nEquipped:", equippedLoadout);

const swappedLoadout = equipToLoadout(equippedLoadout, {
  weapon: "Enchanted Axe",
  shield: "Magic Barrier",
});
console.log("\nAfter swap:", swappedLoadout);

console.log("\nComparing equipped vs swapped:");
compareLoadouts(equippedLoadout, swappedLoadout);

const unequipped = unequipSlot(swappedLoadout, "shield");
console.log("\nAfter unequipping shield:", unequipped);

// Verify no mutations occurred
console.log("\nOriginal base unchanged:", baseLoadout);
console.log("Equipped unchanged:", equippedLoadout.weapon);  // Still "War Hammer"
