// ============================================
// Day 11 Solutions: "Sorting the Loot"
// Arrays (Part 2) — Higher-Order Array Methods
// ============================================

const monsterDrops = [
  { name: "Goblin Tooth", monster: "Goblin", value: 2, quantity: 12 },
  { name: "Wolf Pelt", monster: "Dire Wolf", value: 15, quantity: 4 },
  { name: "Dragon Scale", monster: "Fire Dragon", value: 100, quantity: 1 },
  { name: "Skeleton Bone", monster: "Skeleton", value: 3, quantity: 8 },
  { name: "Troll Club", monster: "Cave Troll", value: 25, quantity: 2 },
  { name: "Phoenix Ash", monster: "Phoenix", value: 150, quantity: 1 },
  { name: "Slime Jelly", monster: "Green Slime", value: 1, quantity: 20 },
  { name: "Dark Crystal", monster: "Shadow Wraith", value: 75, quantity: 3 },
];

// -----------------------------------------------
// EXERCISE 1: forEach
// -----------------------------------------------
console.log("=== EXERCISE 1 ===");

// 1a. Display each drop
monsterDrops.forEach(drop => {
  console.log(`${drop.quantity}x ${drop.name} (from ${drop.monster}) - ${drop.value}g each`);
});

// 1b. Total quantity using forEach
let totalQuantity = 0;
monsterDrops.forEach(drop => {
  totalQuantity += drop.quantity;
});
console.log("\nTotal items dropped:", totalQuantity);  // 51
// NOTE: reduce would be cleaner for this, but this shows that
// forEach can modify external variables (side effects).


// -----------------------------------------------
// EXERCISE 2: map
// -----------------------------------------------
console.log("\n=== EXERCISE 2 ===");

// 2a. Array of just names
const itemNames = monsterDrops.map(drop => drop.name);
console.log("Item names:", itemNames);

// 2b. Receipt strings
const receipts = monsterDrops.map(drop =>
  `${drop.name}: ${drop.quantity * drop.value}g total`
);
console.log("Receipts:", receipts);

// 2c. Add totalValue property
const withTotals = monsterDrops.map(drop => ({
  ...drop,
  totalValue: drop.quantity * drop.value,
}));
console.log("With totals:", withTotals[0]);
// { name: "Goblin Tooth", ..., totalValue: 24 }
// We use the spread operator (...drop) to copy all existing
// properties and add totalValue. The original array is unchanged.


// -----------------------------------------------
// EXERCISE 3: filter
// -----------------------------------------------
console.log("\n=== EXERCISE 3 ===");

// 3a. Items worth 20g+ per item
const valuableDrops = monsterDrops.filter(drop => drop.value >= 20);
console.log("Valuable:", valuableDrops.map(d => d.name));
// ["Dragon Scale", "Troll Club", "Phoenix Ash", "Dark Crystal"]

// 3b. Items with quantity > 5
const bulkItems = monsterDrops.filter(drop => drop.quantity > 5);
console.log("Bulk items:", bulkItems.map(d => d.name));
// ["Goblin Tooth", "Skeleton Bone", "Slime Jelly"]

// 3c. Names of items worth less than 5g
const junkNames = monsterDrops
  .filter(drop => drop.value < 5)
  .map(drop => drop.name);
console.log("Junk:", junkNames);
// ["Goblin Tooth", "Skeleton Bone", "Slime Jelly"]


// -----------------------------------------------
// EXERCISE 4: reduce
// -----------------------------------------------
console.log("\n=== EXERCISE 4 ===");

// 4a. Total gold value (value * quantity for each, summed)
const totalGold = monsterDrops.reduce(
  (sum, drop) => sum + drop.value * drop.quantity,
  0
);
console.log("Total gold:", totalGold);  // 569
// Step through: 24 + 60 + 100 + 24 + 50 + 150 + 20 + 225 = 653
// (Actual value depends on the data)

// 4b. Most valuable single item
const bestDrop = monsterDrops.reduce(
  (best, drop) => (drop.value > best.value ? drop : best),
  monsterDrops[0]
);
console.log("Best drop:", bestDrop.name, `(${bestDrop.value}g)`);
// "Phoenix Ash (150g)"

// 4c. Count items by value tier
const tiers = monsterDrops.reduce((counts, drop) => {
  let tier;
  if (drop.value < 5) tier = "junk";
  else if (drop.value < 50) tier = "common";
  else if (drop.value < 100) tier = "rare";
  else tier = "epic";

  counts[tier] = (counts[tier] || 0) + 1;
  return counts;
}, {});
console.log("Tiers:", tiers);
// { junk: 3, common: 2, rare: 1, epic: 2 }


// -----------------------------------------------
// EXERCISE 5: Combined Methods
// -----------------------------------------------
console.log("\n=== EXERCISE 5 ===");

// 5a. Items worth 10g+, sorted by value desc, names only
const topItems = monsterDrops
  .filter(drop => drop.value >= 10)
  .sort((a, b) => b.value - a.value)
  .map(drop => drop.name);
console.log("Top items:", topItems);
// ["Phoenix Ash", "Dragon Scale", "Dark Crystal", "Troll Club", "Wolf Pelt"]

// 5b. Average value per item
const avgValue = monsterDrops.reduce((sum, d) => sum + d.value, 0) / monsterDrops.length;
console.log("Average value per item:", avgValue.toFixed(2));
// Sum of values / number of drop types

// 5c. some & every checks
const hasEpic = monsterDrops.some(drop => drop.value >= 100);
console.log("Has any 100g+ drop?", hasEpic);  // true

const allWorthSomething = monsterDrops.every(drop => drop.value >= 1);
console.log("All drops worth 1g+?", allWorthSomething);  // true

// 5d. First drop from a "Dragon" monster
const dragonDrop = monsterDrops.find(drop => drop.monster.includes("Dragon"));
console.log("Dragon drop:", dragonDrop);
// { name: "Dragon Scale", monster: "Fire Dragon", value: 100, quantity: 1 }

// 5e. Top 3 by total value
const top3 = [...monsterDrops]  // Copy so we don't mutate original
  .sort((a, b) => (b.value * b.quantity) - (a.value * a.quantity))
  .slice(0, 3);
console.log("\nTop 3 by total value:");
top3.forEach(drop => {
  console.log(`  ${drop.name}: ${drop.value * drop.quantity}g total`);
});
// We use [...monsterDrops] to create a copy because .sort() mutates.
// Then .slice(0, 3) grabs the first 3 elements.


// -----------------------------------------------
// BONUS CHALLENGE: Loot Report Generator
// -----------------------------------------------
console.log("\n=== BONUS ===");

const generateLootReport = (drops) => {
  const totalItems = drops.reduce((sum, d) => sum + d.quantity, 0);
  const totalGold = drops.reduce((sum, d) => sum + d.value * d.quantity, 0);

  const sorted = [...drops].sort((a, b) => b.value - a.value);
  const mostValuableItem = sorted[0].name;
  const leastValuableItem = sorted[sorted.length - 1].name;

  // Alternative using reduce for most/least:
  // const most = drops.reduce((best, d) => d.value > best.value ? d : best, drops[0]);
  // const least = drops.reduce((worst, d) => d.value < worst.value ? d : worst, drops[0]);

  const getTier = (value) => {
    if (value < 5) return "junk";
    if (value < 50) return "common";
    if (value < 100) return "rare";
    return "epic";
  };

  const breakdown = {
    junk: drops.filter(d => getTier(d.value) === "junk").map(d => d.name),
    common: drops.filter(d => getTier(d.value) === "common").map(d => d.name),
    rare: drops.filter(d => getTier(d.value) === "rare").map(d => d.name),
    epic: drops.filter(d => getTier(d.value) === "epic").map(d => d.name),
  };
  // We filter and map for each tier. This calls filter 4 times, which is
  // fine for small arrays. For large datasets, a single reduce would be
  // more efficient, but this is very readable.

  return {
    totalItems,
    totalGold,
    averageItemValue: Math.round((totalGold / totalItems) * 100) / 100,
    mostValuableItem,
    leastValuableItem,
    breakdown,
  };
};

const report = generateLootReport(monsterDrops);
console.log("Loot Report:");
console.log("  Total items:", report.totalItems);
console.log("  Total gold:", report.totalGold);
console.log("  Average item value:", report.averageItemValue);
console.log("  Most valuable:", report.mostValuableItem);
console.log("  Least valuable:", report.leastValuableItem);
console.log("  Breakdown:", report.breakdown);
