// ============================================
// Day 12 Solutions: "The Monster Field Guide"
// Objects
// ============================================

// -----------------------------------------------
// EXERCISE 1: Create Monster Objects
// -----------------------------------------------
console.log("=== EXERCISE 1 ===");

// 1a. Werewolf
const werewolf = {
  name: "Shadow Werewolf",
  type: "beast",
  hp: 90,
  attack: 28,
  weakness: "silver",
  isNocturnal: true,
  howl() {
    return `${this.name} lets out a blood-curdling howl!`;
  },
};
// We use shorthand method syntax: howl() { } instead of howl: function() { }
// and `this.name` to reference the object's own name property.

console.log(werewolf.name);    // "Shadow Werewolf"
console.log(werewolf.howl());  // "Shadow Werewolf lets out a blood-curdling howl!"


// 1b. Wizard
const wizard = {
  name: "Dark Wizard",
  hp: 60,
  mana: 100,
  spells: ["Fireball", "Ice Storm", "Lightning Bolt"],

  castSpell(index) {
    if (index >= 0 && index < this.spells.length) {
      return `${this.name} casts ${this.spells[index]}!`;
    }
    return `${this.name} fizzles...`;
  },

  getSpellCount() {
    return this.spells.length;
  },
};

console.log(wizard.castSpell(0));    // "Dark Wizard casts Fireball!"
console.log(wizard.castSpell(5));    // "Dark Wizard fizzles..."
console.log(wizard.getSpellCount()); // 3


// -----------------------------------------------
// EXERCISE 2: Dot vs Bracket Notation
// -----------------------------------------------
console.log("\n=== EXERCISE 2 ===");

const monster = {
  name: "Ancient Golem",
  hp: 200,
  attack: 40,
  defense: 50,
  "special move": "Earthquake",
  element: "earth",
};

// 2a. Dot notation
console.log("Name:", monster.name);

// 2b. Bracket notation for key with space
console.log("Special move:", monster["special move"]);
// Can't use monster.special move — JS would see it as two things

// 2c. Variable as key
const stat = "defense";
console.log(`${stat}:`, monster[stat]);  // 50

// 2d. Loop with bracket notation
["hp", "attack", "defense"].forEach(statName => {
  console.log(`  ${statName}: ${monster[statName]}`);
});


// -----------------------------------------------
// EXERCISE 3: Modify Objects
// -----------------------------------------------
console.log("\n=== EXERCISE 3 ===");

const mimic = {
  name: "Treasure Mimic",
  hp: 50,
  attack: 20,
  disguise: "treasure chest",
};

// 3a. Add weakness
mimic.weakness = "fire";

// 3b. Level up HP
mimic.hp = 75;

// 3c. Add reveal method
mimic.reveal = function () {
  return `The ${this.disguise} was actually a ${this.name}!`;
};
// Note: We use a regular function here (not arrow) because we need `this`.
// But wait — we're about to delete disguise! Let's call reveal first:
console.log(mimic.reveal());  // "The treasure chest was actually a Treasure Mimic!"

// 3d. Delete disguise
delete mimic.disguise;

// 3e. Check if disguise exists
console.log("Has disguise?", "disguise" in mimic);  // false

// 3f. Final state
console.log("Final mimic:", mimic);


// -----------------------------------------------
// EXERCISE 4: Object.keys / values / entries
// -----------------------------------------------
console.log("\n=== EXERCISE 4 ===");

const dragonStats = {
  strength: 90,
  intelligence: 70,
  agility: 40,
  endurance: 85,
  charisma: 10,
};

// 4a. All stat names
console.log("Stat names:", Object.keys(dragonStats));

// 4b. All stat values
console.log("Stat values:", Object.values(dragonStats));

// 4c. Print each stat with for...of
console.log("All stats:");
for (const [stat, value] of Object.entries(dragonStats)) {
  console.log(`  ${stat}: ${value}`);
}

// 4d. Stats above 50
const highStats = Object.entries(dragonStats)
  .filter(([stat, value]) => value > 50)
  .map(([stat]) => stat);
console.log("High stats (>50):", highStats);
// ["strength", "intelligence", "endurance"]

// 4e. Average stat value
const statValues = Object.values(dragonStats);
const average = statValues.reduce((sum, v) => sum + v, 0) / statValues.length;
console.log("Average stat:", average);  // 59


// -----------------------------------------------
// EXERCISE 5: Nested Objects — The Full Bestiary
// -----------------------------------------------
console.log("\n=== EXERCISE 5 ===");

const bestiary = {
  goblin: {
    name: "Forest Goblin",
    stats: { hp: 30, attack: 8, defense: 3 },
    abilities: ["Scratch", "Flee"],
    drops: [
      { item: "Goblin Tooth", chance: 0.8 },
      { item: "Rusty Dagger", chance: 0.2 },
    ],
  },
  troll: {
    name: "Cave Troll",
    stats: { hp: 120, attack: 35, defense: 20 },
    abilities: ["Smash", "Regenerate", "Throw Boulder"],
    drops: [
      { item: "Troll Club", chance: 0.5 },
      { item: "Troll Hide", chance: 0.7 },
      { item: "Enchanted Stone", chance: 0.1 },
    ],
  },
  wraith: {
    name: "Shadow Wraith",
    stats: { hp: 60, attack: 40, defense: 5 },
    abilities: ["Shadow Strike", "Phase Shift", "Life Drain"],
    drops: [
      { item: "Dark Crystal", chance: 0.6 },
      { item: "Wraith Cloak", chance: 0.15 },
    ],
  },
};

// 5a. getMonsterInfo
const getMonsterInfo = (id) => {
  const m = bestiary[id];
  if (!m) return `Unknown monster: ${id}`;
  return `${m.name} | HP: ${m.stats.hp} ATK: ${m.stats.attack} DEF: ${m.stats.defense}`;
};
// We use bracket notation (bestiary[id]) because `id` is a variable.

console.log(getMonsterInfo("goblin"));
// "Forest Goblin | HP: 30 ATK: 8 DEF: 3"
console.log(getMonsterInfo("unicorn"));
// "Unknown monster: unicorn"


// 5b. getDropTable
const getDropTable = (id) => {
  const m = bestiary[id];
  if (!m) return `Unknown monster: ${id}`;
  let output = `${m.name} Drop Table:`;
  m.drops.forEach(drop => {
    output += `\n  - ${drop.item} (${drop.chance * 100}%)`;
  });
  return output;
};

console.log(getDropTable("troll"));


// 5c. findStrongest
const findStrongest = () => {
  const monsters = Object.values(bestiary);
  const strongest = monsters.reduce((best, m) =>
    m.stats.attack > best.stats.attack ? m : best
  );
  return strongest.name;
};
// Object.values(bestiary) gives us an array of monster objects.
// Then reduce finds the one with the highest attack stat.

console.log("Strongest:", findStrongest());  // "Shadow Wraith"


// -----------------------------------------------
// BONUS CHALLENGE: Monster Battle System
// -----------------------------------------------
console.log("\n=== BONUS ===");

// 1. Monster factory
const createMonster = (name, hp, attack, defense) => ({
  name,
  hp,
  attack,
  defense,
  isAlive() {
    return this.hp > 0;
  },
  takeDamage(amount) {
    this.hp = Math.max(0, this.hp - amount);
  },
  getStatus() {
    return `${this.name}: ${this.hp} HP`;
  },
});

// 2. Battle function
const battle = (m1, m2) => {
  console.log(`\n--- BATTLE: ${m1.name} vs ${m2.name} ---`);
  console.log(`  ${m1.getStatus()} | ${m2.getStatus()}`);

  let turn = 0;
  while (m1.isAlive() && m2.isAlive()) {
    // Alternate turns: even = m1 attacks, odd = m2 attacks
    const attacker = turn % 2 === 0 ? m1 : m2;
    const defender = turn % 2 === 0 ? m2 : m1;

    // Damage = attacker's attack - defender's defense (minimum 1)
    const damage = Math.max(1, attacker.attack - defender.defense);
    defender.takeDamage(damage);

    console.log(
      `  ${attacker.name} hits ${defender.name} for ${damage} damage! ` +
      `(${defender.getStatus()})`
    );

    turn++;
  }

  const winner = m1.isAlive() ? m1 : m2;
  console.log(`\n  WINNER: ${winner.name}! (${winner.getStatus()})`);
  return winner.name;
};
// The battle alternates turns. Each turn, the attacker deals
// (attack - defense) damage to the defender, minimum 1.
// This continues until one monster reaches 0 HP.

// 3. Run a battle!
const heroMonster = createMonster("Knight", 100, 25, 10);
const bossMonster = createMonster("Cave Troll", 120, 20, 15);
battle(heroMonster, bossMonster);
