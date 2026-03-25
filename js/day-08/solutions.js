// ============================================
// Day 8 Solutions: "The Arrow Upgrade"
// Arrow Functions, Default/Rest Params, Callbacks
// ============================================

// -----------------------------------------------
// EXERCISE 1: Arrow Conversion
// -----------------------------------------------

// 1a. Multi-param, single expression
const getHeroTitle = (name) => name + " the Brave";

// 1b. Single param — shortest form (no parens needed)
const doubleGold = amount => amount * 2;

// 1c. No params — empty parens required
const rollDice = () => Math.floor(Math.random() * 20) + 1;

// 1d. Returns an object — wrap in parentheses for implicit return
const createItem = (name, power) => ({ name, power, type: "weapon" });
// NOTE: We also used shorthand property names (name instead of name: name).
// Without the outer parentheses, JS thinks { } is a code block, not an object.

console.log("=== EXERCISE 1 ===");
console.log(getHeroTitle("Aria"));       // "Aria the Brave"
console.log(doubleGold(50));             // 100
console.log(rollDice());                 // Random 1-20
console.log(createItem("Fire Sword", 45));
// { name: "Fire Sword", power: 45, type: "weapon" }


// -----------------------------------------------
// EXERCISE 2: Default Parameters
// -----------------------------------------------

const createCharacter = (name = "Unknown Hero", classType = "Warrior", hp = 100, mp = 50) =>
  `${name} | Class: ${classType} | HP: ${hp} | MP: ${mp}`;
// We use template literals for cleaner string building.
// Each parameter has a sensible default so the function works
// even if called with no arguments at all.

console.log("\n=== EXERCISE 2 ===");
console.log(createCharacter());
// "Unknown Hero | Class: Warrior | HP: 100 | MP: 50"
console.log(createCharacter("Luna", "Mage", 70, 120));
// "Luna | Class: Mage | HP: 70 | MP: 120"
console.log(createCharacter("Kael"));
// "Kael | Class: Warrior | HP: 100 | MP: 50"


// -----------------------------------------------
// EXERCISE 3: Rest Parameters
// -----------------------------------------------

// 3a. formParty — leader + rest of the party
const formParty = (leader, ...members) => {
  const total = 1 + members.length;
  const memberList = members.length > 0 ? `, ${members.join(", ")}` : "";
  return `Party of ${total}: ${leader} (Leader)${memberList}`;
};
// The rest parameter `...members` collects all arguments after `leader`
// into an array. We calculate total by adding 1 (the leader) to members.length.

console.log("\n=== EXERCISE 3a ===");
console.log(formParty("Aria", "Kael", "Luna", "Thorne"));
// "Party of 4: Aria (Leader), Kael, Luna, Thorne"
console.log(formParty("Solo Steve"));
// "Party of 1: Solo Steve (Leader)"


// 3b. biggestHit — find the max from any number of damage values
const biggestHit = (...hits) => Math.max(...hits);
// We use rest params to gather all arguments, then spread them
// into Math.max(). This is a common pattern!
// Alternative: loop through and track the max manually.

console.log("\n=== EXERCISE 3b ===");
console.log(biggestHit(12, 45, 8, 33, 27));  // 45
console.log(biggestHit(5));                   // 5


// -----------------------------------------------
// EXERCISE 4: Callbacks
// -----------------------------------------------

// 4a. onBattleStart — accepts an enemy name and a callback
const onBattleStart = (enemy, callback) => {
  console.log(`A wild ${enemy} appears!`);
  const result = callback(enemy);
  console.log(result);
};
// The callback receives the enemy name and returns a strategy string.
// The function doesn't know WHAT the callback does — it just calls it.
// This is the power of callbacks: flexible, swappable behavior.

const aggressiveStrategy = (enemy) => `Attack the ${enemy} head-on!`;
const defensiveStrategy = (enemy) => `Raise shields against the ${enemy}!`;

console.log("\n=== EXERCISE 4a ===");
onBattleStart("Dragon", aggressiveStrategy);
onBattleStart("Lich King", defensiveStrategy);
onBattleStart("Slime", (enemy) => `Poke the ${enemy} with a stick.`);


// 4b. processLoot — takes an array + callback, returns transformed array
const processLoot = (items, callback) => {
  const results = [];
  for (let i = 0; i < items.length; i++) {
    results.push(callback(items[i], i));
  }
  return results;
};
// This is essentially a simplified version of Array.map()!
// We call the callback for each item, collect the return values,
// and return the new array.

console.log("\n=== EXERCISE 4b ===");
const items = ["Sword", "Shield", "Potion", "Ring"];
const labeled = processLoot(items, (item, i) => `[${i + 1}] ${item}`);
console.log(labeled);
// ["[1] Sword", "[2] Shield", "[3] Potion", "[4] Ring"]


// -----------------------------------------------
// EXERCISE 5: Combine It All
// -----------------------------------------------

const simulateBattle = (
  hero = "Hero",
  attackFn = () => Math.floor(Math.random() * 21) + 5,
  ...enemies
) => {
  enemies.forEach(enemy => {
    const damage = attackFn();
    console.log(`${hero} attacks ${enemy} for ${damage} damage!`);
  });
  console.log(`Battle complete! ${hero} defeated ${enemies.length} enemies.`);
};
// - `hero` has a default string value
// - `attackFn` has a default arrow function that returns random 5-25
// - `...enemies` gathers all remaining args into an array
// - We use forEach with an arrow callback to process each enemy
// - This demonstrates ALL four concepts from today's lesson!

console.log("\n=== EXERCISE 5 ===");
simulateBattle("Aria", undefined, "Goblin", "Skeleton", "Troll");

const powerAttack = () => 99;
simulateBattle("Kael", powerAttack, "Dragon");

simulateBattle();
// "Hero" with no enemies — "Battle complete! Hero defeated 0 enemies."


// -----------------------------------------------
// BONUS CHALLENGE: Quest Board with Callbacks
// -----------------------------------------------

console.log("\n=== BONUS ===");

// 1. Quest board — an array of quest objects
const questBoard = [
  { name: "Gather Mushrooms", difficulty: "easy", reward: 10 },
  { name: "Clear the Bandit Camp", difficulty: "medium", reward: 50 },
  { name: "Slay the Ancient Dragon", difficulty: "hard", reward: 200 },
  { name: "Deliver a Letter", difficulty: "easy", reward: 5 },
];

// 2. acceptQuest — simulates quest success/failure using callbacks
const acceptQuest = (
  quest,
  onSuccess,
  onFailure = (q) => console.log(`  Quest "${q.name}" failed... Better luck next time.`)
) => {
  const successRates = { easy: 0.8, medium: 0.5, hard: 0.3 };
  const rate = successRates[quest.difficulty] || 0.5;
  const roll = Math.random();

  console.log(`Attempting: "${quest.name}" (${quest.difficulty}) — rolled ${roll.toFixed(2)} vs ${rate}`);

  if (roll < rate) {
    onSuccess(quest);
  } else {
    onFailure(quest);
  }
};
// The default for onFailure means callers can skip providing a failure
// handler and still get reasonable behavior. onSuccess has no default
// because the caller MUST define what happens on success.

// 3. attemptAllQuests — loops through quests and attempts each one
const attemptAllQuests = (quests) => {
  let totalGold = 0;

  quests.forEach(quest => {
    acceptQuest(
      quest,
      (q) => {
        totalGold += q.reward;
        console.log(`  SUCCESS! Earned ${q.reward} gold. Total: ${totalGold}`);
      }
      // We omit onFailure here to use the default callback
    );
  });

  console.log(`\nQuesting complete! Total gold earned: ${totalGold}`);
};

attemptAllQuests(questBoard);
