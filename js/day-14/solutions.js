// ============================================
// Day 14: "BOSS FIGHT" — Complete Dungeon Crawler
// The full working game with all concepts from Days 1-13
// ============================================

// -----------------------------------------------
// STEP 1: GAME DATA
// -----------------------------------------------

// 1a. Hero character (variables, objects — Days 1-2, 12)
const hero = {
  name: "Aria the Brave",
  hp: 100,
  maxHp: 100,
  attack: 15,
  defense: 5,
  gold: 0,
  xp: 0,
  inventory: [],
};

// 1b. Enemy templates (objects — Day 12)
const enemies = {
  goblin: {
    name: "Forest Goblin",
    hp: 30,
    attack: 8,
    defense: 2,
    xp: 10,
    gold: 5,
    loot: "Goblin Tooth",
  },
  skeleton: {
    name: "Skeleton Warrior",
    hp: 45,
    attack: 12,
    defense: 5,
    xp: 15,
    gold: 10,
    loot: "Bone Shard",
  },
  troll: {
    name: "Cave Troll",
    hp: 70,
    attack: 18,
    defense: 8,
    xp: 25,
    gold: 20,
    loot: "Troll Hide",
  },
  shadowKnight: {
    name: "Shadow Knight",
    hp: 60,
    attack: 22,
    defense: 10,
    xp: 30,
    gold: 25,
    loot: "Dark Crystal",
  },
  boss: {
    name: "Drakhar the Undying",
    hp: 120,
    attack: 25,
    defense: 12,
    xp: 100,
    gold: 200,
    loot: "Drakhar's Crown",
  },
};

// 1c. Rooms (arrays of objects — Days 10, 12)
const rooms = [
  {
    name: "The Forest Entrance",
    description: "Twisted trees form an archway. The air smells of damp moss and danger.",
    enemy: "goblin",
    item: "Health Potion",
  },
  {
    name: "The Dark Corridor",
    description: "A narrow passage lit by flickering torches. Bones crunch underfoot.",
    enemy: "skeleton",
    item: null,
  },
  {
    name: "The Hidden Armory",
    description: "An old weapon rack lines the wall. Most are rusted, but one gleams.",
    enemy: null,
    item: "Iron Shield",
  },
  {
    name: "The Troll's Den",
    description: "The stench is overwhelming. Something large snores in the corner...",
    enemy: "troll",
    item: "Health Potion",
  },
  {
    name: "The Shadow Hall",
    description: "Darkness seems alive here. A figure in black armor blocks the way.",
    enemy: "shadowKnight",
    item: "Strength Elixir",
  },
  {
    name: "The Throne of Drakhar",
    description: "A massive chamber. On a throne of bones sits Drakhar, eyes burning red.",
    enemy: "boss",
    item: null,
  },
];

// 1d. Items (objects — Day 12)
const items = {
  "Health Potion": {
    type: "healing",
    effect: 35,
    description: "Restores 35 HP",
  },
  "Iron Shield": {
    type: "armor",
    effect: 5,
    description: "Increases defense by 5",
  },
  "Strength Elixir": {
    type: "weapon",
    effect: 8,
    description: "Increases attack by 8",
  },
  "Goblin Tooth": {
    type: "healing",
    effect: 5,
    description: "A gross tooth. Restores 5 HP if you dare.",
  },
  "Bone Shard": {
    type: "weapon",
    effect: 2,
    description: "Sharp bone fragment. Increases attack by 2.",
  },
  "Troll Hide": {
    type: "armor",
    effect: 3,
    description: "Thick skin. Increases defense by 3.",
  },
  "Dark Crystal": {
    type: "weapon",
    effect: 5,
    description: "Pulses with shadow energy. Increases attack by 5.",
  },
  "Drakhar's Crown": {
    type: "weapon",
    effect: 20,
    description: "The crown of the defeated boss. Immense power.",
  },
};


// -----------------------------------------------
// STEP 2: HELPER FUNCTIONS
// -----------------------------------------------

// 2a. Dice roller (arrow functions, default params — Day 8)
const rollDice = (sides = 20) => Math.floor(Math.random() * sides) + 1;

// 2b. Display status (destructuring — Day 13, template literals — Day 2)
const displayStatus = ({ name, hp, maxHp, attack, defense, gold, xp, inventory }) => {
  console.log(`\n${"=".repeat(40)}`);
  console.log(`  ${name}`);
  console.log(`  HP: ${hp}/${maxHp} | ATK: ${attack} | DEF: ${defense}`);
  console.log(`  Gold: ${gold} | XP: ${xp}`);
  const invDisplay = inventory.length > 0 ? inventory.join(", ") : "empty";
  console.log(`  Inventory: ${invDisplay}`);
  console.log("=".repeat(40));
};

// 2c. Calculate damage (destructuring, Math — Days 2, 13)
const calculateDamage = ({ attack: atk }, { defense: def }) => {
  const raw = atk - def + rollDice(6) - 3;
  return Math.max(1, raw);  // Minimum 1 damage
};
// We destructure attack from the attacker and defense from the defender,
// renaming them to short variables for the formula.

// Battle log using closures (Day 9)
const createBattleLog = () => {
  const entries = [];
  return {
    add(message) {
      entries.push(message);
      console.log(`  ${message}`);
    },
    getAll: () => [...entries],
    summary() {
      console.log(`\n  --- Battle Summary (${entries.length} events) ---`);
      entries.forEach((entry, i) => console.log(`    ${i + 1}. ${entry}`));
    },
  };
};


// -----------------------------------------------
// STEP 3: GAME ACTIONS
// -----------------------------------------------

// 3a. Use item (arrays, objects, conditionals — Days 4, 10, 12)
const useItem = (hero, itemName) => {
  const idx = hero.inventory.indexOf(itemName);
  if (idx === -1) {
    console.log(`  ${itemName} not in inventory!`);
    return;
  }

  hero.inventory.splice(idx, 1);  // Remove from inventory

  const itemData = items[itemName];
  if (!itemData) {
    console.log(`  Used ${itemName}... but nothing happened.`);
    return;
  }

  const { type, effect } = itemData;  // Destructuring (Day 13)

  if (type === "healing") {
    hero.hp = Math.min(hero.maxHp, hero.hp + effect);
    console.log(`  Used ${itemName}! Restored ${effect} HP. (HP: ${hero.hp}/${hero.maxHp})`);
  } else if (type === "weapon") {
    hero.attack += effect;
    console.log(`  Used ${itemName}! Attack increased by ${effect}. (ATK: ${hero.attack})`);
  } else if (type === "armor") {
    hero.defense += effect;
    console.log(`  Used ${itemName}! Defense increased by ${effect}. (DEF: ${hero.defense})`);
  }
};

// 3b. Create enemy instance (spread — Day 13)
const createEnemyInstance = (enemyId) => {
  const template = enemies[enemyId];
  if (!template) return null;
  return { ...template };  // Spread creates a fresh copy!
};
// This is crucial: without spread, we'd be modifying the original
// enemy template when dealing damage, so the next playthrough would
// start with a damaged enemy!

// 3c. Combat system (while loop, conditionals, callbacks — Days 5, 4, 8)
const combat = (hero, enemy, onTurnEnd = () => {}) => {
  const log = createBattleLog();
  let turn = 1;

  log.add(`${hero.name} vs ${enemy.name} — FIGHT!`);

  // While loop — continues until someone drops (Day 5)
  while (hero.hp > 0 && enemy.hp > 0) {
    log.add(`--- Turn ${turn} ---`);

    // Auto-heal: use a potion if HP is critical (conditionals — Day 4)
    if (hero.hp < 25 && hero.inventory.includes("Health Potion")) {
      log.add(`${hero.name} is low on HP! Using Health Potion...`);
      useItem(hero, "Health Potion");
    }

    // Hero attacks
    const heroDmg = calculateDamage(hero, enemy);
    enemy.hp = Math.max(0, enemy.hp - heroDmg);
    log.add(`${hero.name} strikes ${enemy.name} for ${heroDmg} damage! (${enemy.hp} HP left)`);

    // Critical hit check (conditionals — Day 4)
    if (rollDice(20) >= 18) {
      const critDmg = calculateDamage(hero, enemy);
      enemy.hp = Math.max(0, enemy.hp - critDmg);
      log.add(`CRITICAL HIT! ${hero.name} strikes again for ${critDmg}! (${enemy.hp} HP left)`);
    }

    if (enemy.hp <= 0) {
      log.add(`${enemy.name} has been defeated!`);
      break;
    }

    // Enemy attacks
    const enemyDmg = calculateDamage(enemy, hero);
    hero.hp = Math.max(0, hero.hp - enemyDmg);
    log.add(`${enemy.name} hits ${hero.name} for ${enemyDmg} damage! (${hero.hp} HP left)`);

    if (hero.hp <= 0) {
      log.add(`${hero.name} has fallen in battle...`);
      break;
    }

    // Callback for turn end (callbacks — Day 8)
    onTurnEnd(turn, hero, enemy);
    turn++;
  }

  // Post-combat (conditionals — Day 4)
  if (hero.hp > 0) {
    // Victory rewards
    const { xp, gold, loot, name: enemyName } = enemy;  // Destructuring (Day 13)
    hero.xp += xp;
    hero.gold += gold;
    if (loot) {
      hero.inventory.push(loot);
    }
    log.add(`Victory! Earned ${xp} XP, ${gold} gold${loot ? `, looted ${loot}` : ""}`);
    log.summary();
    return true;
  } else {
    log.summary();
    return false;
  }
};


// -----------------------------------------------
// STEP 4: ROOM EXPLORATION
// -----------------------------------------------

// 4a. Explore room (combining everything)
const exploreRoom = (hero, room) => {
  const { name, description, enemy: enemyId, item } = room;  // Destructuring (Day 13)

  console.log(`\n${"~".repeat(50)}`);
  console.log(`  ENTERING: ${name}`);
  console.log(`  ${description}`);
  console.log("~".repeat(50));

  // Pick up item (conditionals, arrays — Days 4, 10)
  if (item) {
    console.log(`\n  You found: ${item}!`);
    hero.inventory.push(item);

    // Auto-use equipment items immediately (objects — Day 12)
    const itemData = items[item];
    if (itemData && (itemData.type === "weapon" || itemData.type === "armor")) {
      console.log(`  It looks useful! Equipping immediately...`);
      useItem(hero, item);
    }
  }

  // Enemy encounter (conditionals — Day 4)
  if (enemyId) {
    const enemy = createEnemyInstance(enemyId);
    if (enemy) {
      console.log(`\n  A ${enemy.name} appears! (HP: ${enemy.hp}, ATK: ${enemy.attack})`);
      const survived = combat(hero, enemy);
      if (!survived) {
        return false;  // Hero died
      }
    }
  } else {
    console.log("\n  The room is quiet. You take a moment to catch your breath.");
    // Small rest heal
    const healAmount = rollDice(10);
    hero.hp = Math.min(hero.maxHp, hero.hp + healAmount);
    console.log(`  You rest and recover ${healAmount} HP. (HP: ${hero.hp}/${hero.maxHp})`);
  }

  return true;  // Hero survived
};


// -----------------------------------------------
// STEP 5: THE GAME LOOP
// -----------------------------------------------

const playGame = () => {
  // Title screen
  console.log("\n" + "=".repeat(50));
  console.log("  DUNGEON CRAWLER: THE FOREST OF SHADOWS");
  console.log("=".repeat(50));
  console.log("  A CLI adventure built with JavaScript");
  console.log("  Concepts: Days 1-13 of the JS Bootcamp");
  console.log("=".repeat(50));

  displayStatus(hero);

  // Game loop — iterate through rooms (for...of — Day 5)
  let roomNumber = 0;
  for (const room of rooms) {
    roomNumber++;
    console.log(`\n[${"#".repeat(roomNumber)}${"·".repeat(rooms.length - roomNumber)}] Room ${roomNumber}/${rooms.length}`);

    const survived = exploreRoom(hero, room);

    if (!survived) {
      // Game over
      console.log("\n" + "X".repeat(50));
      console.log("  GAME OVER");
      console.log(`  ${hero.name} fell in ${room.name}`);
      console.log(`  Rooms cleared: ${roomNumber - 1}/${rooms.length}`);
      console.log(`  Gold earned: ${hero.gold}`);
      console.log(`  XP earned: ${hero.xp}`);
      console.log("X".repeat(50));
      return;
    }

    // Level up check (every 30 XP — conditionals, arithmetic)
    const levelThreshold = 30;
    while (hero.xp >= levelThreshold) {
      hero.xp -= levelThreshold;
      hero.maxHp += 15;
      hero.hp = Math.min(hero.hp + 15, hero.maxHp);
      hero.attack += 3;
      hero.defense += 2;
      console.log(`\n  LEVEL UP! HP+15, ATK+3, DEF+2`);
    }

    displayStatus(hero);
  }

  // Victory!
  console.log("\n" + "!".repeat(50));
  console.log("  VICTORY! YOU CONQUERED THE FOREST OF SHADOWS!");
  console.log("!".repeat(50));
  console.log(`\n  Final Stats:`);
  displayStatus(hero);

  // Final report using array methods (Day 11)
  console.log("  Loot collected:");
  if (hero.inventory.length > 0) {
    hero.inventory.forEach((item, i) => {
      const data = items[item];
      const desc = data ? ` — ${data.description}` : "";
      console.log(`    ${i + 1}. ${item}${desc}`);
    });
  } else {
    console.log("    (All items were used during the adventure)");
  }

  // Use remaining consumables for fun
  const remainingPotions = hero.inventory.filter(i => {
    const data = items[i];
    return data && data.type === "healing";
  });
  if (remainingPotions.length > 0) {
    console.log(`\n  ${remainingPotions.length} unused healing items remain.`);
  }

  console.log(`\n  Total gold: ${hero.gold}`);
  console.log("  The Forest of Shadows has been cleared.");
  console.log("  Your adventure continues...\n");
};


// -----------------------------------------------
// STEP 6: RUN THE GAME!
// -----------------------------------------------

playGame();
