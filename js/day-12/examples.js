// ============================================
// Day 12: "The Monster Field Guide"
// Objects
// ============================================

// -----------------------------------------------
// 1. OBJECT LITERALS — Creating Monster Entries
// -----------------------------------------------
console.log("=== OBJECT LITERALS ===");

// An object is a collection of key-value pairs
const goblin = {
  name: "Forest Goblin",
  hp: 30,
  attack: 8,
  defense: 3,
  isAggressive: true,
  loot: ["Goblin Tooth", "Rusty Dagger"],  // Arrays as values
};

console.log("Monster entry:", goblin);
console.log("Name:", goblin.name);
console.log("HP:", goblin.hp);
console.log("Loot:", goblin.loot);

// Methods — functions as values
const skeleton = {
  name: "Skeleton Warrior",
  hp: 45,
  attack: 12,

  // Method using shorthand syntax
  battleCry() {
    return `${this.name} rattles its bones menacingly!`;
  },

  // Method with logic
  slash(target) {
    return `${this.name} slashes ${target} for ${this.attack} damage!`;
  },
};

console.log(skeleton.battleCry());
console.log(skeleton.slash("Hero"));


// -----------------------------------------------
// 2. DOT vs BRACKET NOTATION
// -----------------------------------------------
console.log("\n=== DOT vs BRACKET NOTATION ===");

const dragon = {
  name: "Fire Dragon",
  hp: 500,
  attack: 60,
  "breath attack": "Inferno Blast",  // Key with a space (needs quotes)
  element: "fire",
};

// Dot notation — clean and simple
console.log("Dot:", dragon.name);        // "Fire Dragon"
console.log("Dot:", dragon.hp);          // 500

// Bracket notation — same result
console.log("Bracket:", dragon["name"]); // "Fire Dragon"
console.log("Bracket:", dragon["hp"]);   // 500

// When you NEED bracket notation:

// 1. Key with spaces or special characters
console.log("Breath attack:", dragon["breath attack"]);  // Can't use dot here!

// 2. Key stored in a variable
const stat = "attack";
console.log(`Dynamic key (${stat}):`, dragon[stat]);  // 60

// 3. Computed keys
const prefix = "breath";
console.log("Computed:", dragon[prefix + " attack"]);  // "Inferno Blast"

// Looping through stats dynamically
const statsToShow = ["hp", "attack", "element"];
statsToShow.forEach(key => {
  console.log(`  ${key}: ${dragon[key]}`);
});


// -----------------------------------------------
// 3. ADDING & DELETING PROPERTIES
// -----------------------------------------------
console.log("\n=== ADDING & DELETING ===");

const slime = {
  name: "Green Slime",
  hp: 10,
};
console.log("Before:", slime);

// Add new properties (works with both notations)
slime.attack = 2;
slime.weakness = "fire";
slime["special ability"] = "Split";
console.log("After adding:", slime);

// Modify existing properties
slime.hp = 15;
console.log("After buff:", slime.hp);  // 15

// Delete a property
delete slime.weakness;
console.log("After delete:", slime);

// Check if a property exists
console.log("Has 'attack'?", "attack" in slime);               // true
console.log("Has 'weakness'?", "weakness" in slime);            // false
console.log("Has 'name'?", slime.hasOwnProperty("name"));      // true

// Accessing non-existent property
console.log("Missing prop:", slime.level);  // undefined (no error)


// -----------------------------------------------
// 4. THE `this` KEYWORD
// -----------------------------------------------
console.log("\n=== this KEYWORD ===");

const hero = {
  name: "Aria",
  hp: 100,
  maxHp: 100,
  attack: 25,

  // Regular function syntax — `this` works correctly
  introduce() {
    return `I am ${this.name}! HP: ${this.hp}/${this.maxHp}`;
  },

  takeDamage(amount) {
    this.hp = Math.max(0, this.hp - amount);
    return `${this.name} takes ${amount} damage! HP: ${this.hp}/${this.maxHp}`;
  },

  heal(amount) {
    this.hp = Math.min(this.maxHp, this.hp + amount);
    return `${this.name} heals! HP: ${this.hp}/${this.maxHp}`;
  },

  isAlive() {
    return this.hp > 0;
  },
};

console.log(hero.introduce());         // "I am Aria! HP: 100/100"
console.log(hero.takeDamage(30));       // "Aria takes 30 damage! HP: 70/100"
console.log(hero.heal(15));             // "Aria heals! HP: 85/100"
console.log("Alive?", hero.isAlive());  // true

// WARNING: Arrow functions don't have their own `this`!
const badExample = {
  name: "Broken Monster",
  // DON'T DO THIS for methods:
  greet: () => {
    // `this` here is NOT the object — it's the outer scope's `this`
    return `I am ${typeof this}`;  // "I am undefined" or "I am object" (global)
  },
};
console.log("\nArrow function method (broken):", badExample.greet());
// Rule: Use regular function syntax for object methods, not arrows.


// -----------------------------------------------
// 5. Object.keys(), Object.values(), Object.entries()
// -----------------------------------------------
console.log("\n=== Object.keys / values / entries ===");

const troll = {
  name: "Cave Troll",
  hp: 120,
  attack: 35,
  defense: 20,
  weakness: "fire",
};

// Object.keys — array of property names
const keys = Object.keys(troll);
console.log("Keys:", keys);
// ["name", "hp", "attack", "defense", "weakness"]

// Object.values — array of property values
const values = Object.values(troll);
console.log("Values:", values);
// ["Cave Troll", 120, 35, 20, "fire"]

// Object.entries — array of [key, value] pairs
const entries = Object.entries(troll);
console.log("Entries:", entries);
// [["name", "Cave Troll"], ["hp", 120], ...]

// Iterate using for...of with destructuring
console.log("\nTroll stat sheet:");
for (const [key, value] of Object.entries(troll)) {
  console.log(`  ${key}: ${value}`);
}

// Count numeric properties
const numericStats = Object.entries(troll)
  .filter(([key, value]) => typeof value === "number");
console.log("\nNumeric stats:", numericStats);


// -----------------------------------------------
// 6. NESTED OBJECTS
// -----------------------------------------------
console.log("\n=== NESTED OBJECTS ===");

const bossMonster = {
  name: "Shadow Dragon",
  level: 50,
  stats: {
    hp: 1000,
    maxHp: 1000,
    attack: 80,
    defense: 60,
    speed: 40,
  },
  abilities: {
    primary: {
      name: "Shadow Breath",
      damage: 120,
      element: "dark",
    },
    secondary: {
      name: "Tail Sweep",
      damage: 60,
      element: "physical",
    },
  },
  weaknesses: ["light", "holy"],
  phases: [
    { name: "Phase 1", hpThreshold: 0.75, enraged: false },
    { name: "Phase 2", hpThreshold: 0.5, enraged: true },
    { name: "Final Phase", hpThreshold: 0.25, enraged: true },
  ],
};

// Accessing nested properties — chain the dots
console.log("Boss name:", bossMonster.name);
console.log("Boss HP:", bossMonster.stats.hp);
console.log("Primary ability:", bossMonster.abilities.primary.name);
console.log("First weakness:", bossMonster.weaknesses[0]);
console.log("Phase 2 enraged?", bossMonster.phases[1].enraged);

// Optional chaining (?.) — safe access for potentially missing data
const missingMonster = {};
console.log("\nSafe access:", missingMonster?.stats?.hp);       // undefined (no error)
// Without ?.: missingMonster.stats.hp would throw an error!

// Modifying nested properties
bossMonster.stats.hp -= 200;
console.log("After damage, HP:", bossMonster.stats.hp);  // 800


// -----------------------------------------------
// 7. PUTTING IT ALL TOGETHER — The Full Bestiary
// -----------------------------------------------
console.log("\n=== THE BESTIARY ===");

const bestiary = [
  { name: "Goblin", type: "humanoid", hp: 30, attack: 8, xp: 10 },
  { name: "Dire Wolf", type: "beast", hp: 55, attack: 15, xp: 25 },
  { name: "Skeleton", type: "undead", hp: 40, attack: 12, xp: 15 },
  { name: "Troll", type: "giant", hp: 120, attack: 35, xp: 50 },
  { name: "Wraith", type: "undead", hp: 60, attack: 25, xp: 40 },
];

// Use array methods on an array of objects
const undeadMonsters = bestiary.filter(m => m.type === "undead");
console.log("Undead:", undeadMonsters.map(m => m.name));

const totalXP = bestiary.reduce((sum, m) => sum + m.xp, 0);
console.log("Total XP available:", totalXP);

const strongest = bestiary.reduce((s, m) => m.attack > s.attack ? m : s);
console.log("Strongest:", strongest.name, `(${strongest.attack} ATK)`);

console.log("\n=== LESSON COMPLETE ===");
console.log("The Monster Field Guide is yours. Study it well!");
