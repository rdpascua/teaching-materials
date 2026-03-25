// ============================================
// Day 11: "Sorting the Loot"
// Arrays (Part 2) — Higher-Order Array Methods
// ============================================

// Our loot table for today's examples
const loot = [
  { name: "Rusty Dagger", type: "weapon", value: 5, rarity: "common" },
  { name: "Health Potion", type: "potion", value: 15, rarity: "common" },
  { name: "Dragon Scale", type: "material", value: 80, rarity: "rare" },
  { name: "Iron Shield", type: "armor", value: 30, rarity: "uncommon" },
  { name: "Mana Potion", type: "potion", value: 20, rarity: "common" },
  { name: "Excalibur", type: "weapon", value: 500, rarity: "legendary" },
  { name: "Leather Boots", type: "armor", value: 12, rarity: "common" },
  { name: "Phoenix Feather", type: "material", value: 200, rarity: "rare" },
];

// -----------------------------------------------
// 1. forEach — Look at Every Item
// -----------------------------------------------
console.log("=== forEach ===");

// forEach calls a function for each element
// It does NOT return anything — it's for actions/side effects
loot.forEach((item, index) => {
  console.log(`  [${index}] ${item.name} (${item.rarity}) - ${item.value}g`);
});

// Compare: forEach vs for...of
// forEach gives you the index automatically
// for...of is simpler but no built-in index
console.log("\n  Using for...of:");
for (const item of loot) {
  // If you don't need the index, for...of is clean too
}

// Note: you CANNOT break out of forEach. Use for...of if you need to break.


// -----------------------------------------------
// 2. map — Transform Each Item
// -----------------------------------------------
console.log("\n=== map ===");

// map creates a NEW array by transforming each element
const itemNames = loot.map(item => item.name);
console.log("Just names:", itemNames);

// Map to create price tags
const priceTags = loot.map(item => `${item.name}: ${item.value}g`);
console.log("Price tags:", priceTags);

// Map to add a new property (sale price at 80%)
const saleItems = loot.map(item => ({
  ...item,  // Copy all existing properties (we'll learn spread on Day 13)
  salePrice: Math.floor(item.value * 0.8),
}));
console.log("On sale:", saleItems[0]);
// { name: "Rusty Dagger", ..., value: 5, salePrice: 4 }

// Original is UNCHANGED
console.log("Original still has no salePrice:", loot[0].salePrice);  // undefined


// -----------------------------------------------
// 3. filter — Keep What Matters
// -----------------------------------------------
console.log("\n=== filter ===");

// Filter keeps items where the callback returns true
const potions = loot.filter(item => item.type === "potion");
console.log("Potions:", potions.map(i => i.name));
// ["Health Potion", "Mana Potion"]

const valuableItems = loot.filter(item => item.value >= 50);
console.log("Valuable (50g+):", valuableItems.map(i => i.name));
// ["Dragon Scale", "Excalibur", "Phoenix Feather"]

const rareOrBetter = loot.filter(item =>
  item.rarity === "rare" || item.rarity === "legendary"
);
console.log("Rare+:", rareOrBetter.map(i => `${i.name} (${i.rarity})`));

// Filter can return an empty array (nothing matched)
const mythicItems = loot.filter(item => item.rarity === "mythic");
console.log("Mythic items:", mythicItems);  // []

// CHAINING: filter then map
const cheapWeaponNames = loot
  .filter(item => item.type === "weapon" && item.value < 100)
  .map(item => item.name);
console.log("Cheap weapons:", cheapWeaponNames);  // ["Rusty Dagger"]


// -----------------------------------------------
// 4. reduce — Combine Into One Value
// -----------------------------------------------
console.log("\n=== reduce ===");

// reduce takes: (accumulator, currentItem) => newAccumulator, initialValue
//                 |                                             |
//                 The running total                             Starting value

// Sum all item values (total gold value of loot)
const totalValue = loot.reduce((sum, item) => sum + item.value, 0);
console.log("Total loot value:", totalValue, "gold");

// Let's trace through reduce step by step:
console.log("\n  Step-by-step reduce:");
const traced = [10, 20, 30, 40].reduce((acc, num, index) => {
  console.log(`    Step ${index}: acc=${acc}, num=${num}, result=${acc + num}`);
  return acc + num;
}, 0);
console.log("  Final:", traced);  // 100

// Find the most valuable item using reduce
const mostValuable = loot.reduce((best, item) => {
  return item.value > best.value ? item : best;
}, loot[0]);
console.log("\nMost valuable:", mostValuable.name, `(${mostValuable.value}g)`);

// Count items by rarity using reduce
const rarityCounts = loot.reduce((counts, item) => {
  counts[item.rarity] = (counts[item.rarity] || 0) + 1;
  return counts;
}, {});
console.log("\nRarity breakdown:", rarityCounts);
// { common: 4, rare: 2, uncommon: 1, legendary: 1 }

// Group items by type using reduce
const byType = loot.reduce((groups, item) => {
  if (!groups[item.type]) {
    groups[item.type] = [];
  }
  groups[item.type].push(item.name);
  return groups;
}, {});
console.log("\nGrouped by type:", byType);


// -----------------------------------------------
// 5. find, findIndex, some, every
// -----------------------------------------------
console.log("\n=== find / findIndex / some / every ===");

// find — returns the FIRST matching element (or undefined)
const firstRare = loot.find(item => item.rarity === "rare");
console.log("First rare item:", firstRare.name);  // "Dragon Scale"

const mythic = loot.find(item => item.rarity === "mythic");
console.log("First mythic:", mythic);  // undefined — none found

// findIndex — returns the INDEX of the first match (or -1)
const potionIndex = loot.findIndex(item => item.type === "potion");
console.log("First potion at index:", potionIndex);  // 1

// some — returns true if ANY element passes the test
const hasLegendary = loot.some(item => item.rarity === "legendary");
console.log("Has legendary item?", hasLegendary);  // true

const hasJunk = loot.some(item => item.value === 0);
console.log("Has worthless junk?", hasJunk);  // false

// every — returns true if ALL elements pass the test
const allIdentified = loot.every(item => item.name !== "???");
console.log("All items identified?", allIdentified);  // true

const allValuable = loot.every(item => item.value >= 50);
console.log("All items valuable?", allValuable);  // false


// -----------------------------------------------
// 6. sort — Order the Loot
// -----------------------------------------------
console.log("\n=== sort ===");

// WARNING: sort MUTATES the original array!
// Let's work with copies to be safe.

// Default sort — alphabetical (works for strings)
const names = ["Potion", "Axe", "Shield", "Bow", "Dagger"];
names.sort();
console.log("Alphabetical:", names);

// DEFAULT SORT IS BROKEN FOR NUMBERS!
const badSort = [10, 2, 30, 1, 20].sort();
console.log("Bad number sort:", badSort);  // [1, 10, 2, 20, 30] — WRONG!
// It converts to strings: "10" < "2" alphabetically

// FIX: provide a comparison function
// Return negative: a comes first
// Return positive: b comes first
// Return 0: keep order
const goodSort = [10, 2, 30, 1, 20].sort((a, b) => a - b);
console.log("Good number sort:", goodSort);  // [1, 2, 10, 20, 30]

// Descending: flip it
const descending = [10, 2, 30, 1, 20].sort((a, b) => b - a);
console.log("Descending:", descending);  // [30, 20, 10, 2, 1]

// Sort objects by a property
const sortedLoot = [...loot].sort((a, b) => b.value - a.value);  // Descending by value
console.log("\nLoot by value (high to low):");
sortedLoot.forEach(item => {
  console.log(`  ${item.name}: ${item.value}g`);
});


// -----------------------------------------------
// 7. CHAINING — The Full Pipeline
// -----------------------------------------------
console.log("\n=== METHOD CHAINING ===");

// Get the names of all common items sorted alphabetically
const commonItemNames = loot
  .filter(item => item.rarity === "common")
  .map(item => item.name)
  .sort();
console.log("Common items (sorted):", commonItemNames);

// Get total value of all weapons
const weaponValue = loot
  .filter(item => item.type === "weapon")
  .reduce((sum, item) => sum + item.value, 0);
console.log("Total weapon value:", weaponValue, "gold");

// Find the cheapest armor piece name
const cheapestArmor = loot
  .filter(item => item.type === "armor")
  .sort((a, b) => a.value - b.value)
  .map(item => item.name)[0];
console.log("Cheapest armor:", cheapestArmor);

console.log("\n=== LESSON COMPLETE ===");
console.log("Your loot is sorted, filtered, and appraised. Onward!");
