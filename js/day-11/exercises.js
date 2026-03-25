// ============================================
// Day 11 Exercises: "Sorting the Loot"
// Arrays (Part 2) — Higher-Order Array Methods
// ============================================
// Complete each exercise below. Run this file with: node exercises.js

// Shared data for exercises
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
// EXERCISE 1: forEach — Display the Loot
// -----------------------------------------------

// 1a. Use forEach to print each drop in this format:
//     "[quantity]x [name] (from [monster]) - [value]g each"
//     Example: "12x Goblin Tooth (from Goblin) - 2g each"

// YOUR CODE:


// 1b. Use forEach to calculate the total number of items dropped
//     (sum of all quantities). Store in a variable and log it.
//     (Yes, reduce is better for this — but practice forEach first!)

// YOUR CODE:


// -----------------------------------------------
// EXERCISE 2: map — Transform the Data
// -----------------------------------------------

// 2a. Use map to create an array of just the item names.
//     Store in `itemNames`.

// YOUR CODE:
// const itemNames = ...
// console.log("Item names:", itemNames);

// 2b. Use map to create an array of "receipt" strings in this format:
//     "[name]: [quantity * value]g total"
//     Example: "Goblin Tooth: 24g total"

// YOUR CODE:
// const receipts = ...
// console.log("Receipts:", receipts);

// 2c. Use map to create new objects with an added `totalValue` property
//     (quantity * value). Keep all original properties too.

// YOUR CODE:
// const withTotals = ...
// console.log("With totals:", withTotals[0]);


// -----------------------------------------------
// EXERCISE 3: filter — Select by Criteria
// -----------------------------------------------

// 3a. Filter to get only items worth 20g or more (per item).

// YOUR CODE:
// const valuableDrops = ...
// console.log("Valuable:", valuableDrops.map(d => d.name));

// 3b. Filter to get items where you have more than 5 of them.

// YOUR CODE:
// const bulkItems = ...
// console.log("Bulk items:", bulkItems.map(d => d.name));

// 3c. Chain filter + map: get the names of items worth less than 5g.

// YOUR CODE:
// const junkNames = ...
// console.log("Junk:", junkNames);


// -----------------------------------------------
// EXERCISE 4: reduce — Calculate Totals
// -----------------------------------------------

// 4a. Use reduce to calculate the total gold value of ALL drops
//     (each item's value * quantity, summed together).

// YOUR CODE:
// const totalGold = ...
// console.log("Total gold:", totalGold);

// 4b. Use reduce to find the single most valuable item
//     (highest value per item, not total).

// YOUR CODE:
// const bestDrop = ...
// console.log("Best drop:", bestDrop.name, `(${bestDrop.value}g)`);

// 4c. Use reduce to count how many items fall into each value tier:
//     "junk" (value < 5), "common" (5-49), "rare" (50-99), "epic" (100+)
//     Result should be an object like: { junk: 3, common: 2, rare: 1, epic: 2 }

// YOUR CODE:
// const tiers = ...
// console.log("Tiers:", tiers);


// -----------------------------------------------
// EXERCISE 5: Combine Methods — Loot Analysis
// -----------------------------------------------

// 5a. Get all items worth 10g+ per item, sorted by value descending,
//     and return just their names.
//     Chain: filter -> sort -> map

// YOUR CODE:
// const topItems = ...
// console.log("Top items:", topItems);

// 5b. Calculate the average value per item across all drops.
//     (Sum of all values / number of drop types)

// YOUR CODE:
// const avgValue = ...
// console.log("Average value per item:", avgValue);

// 5c. Check: do we have ANY drop worth 100g or more? (use .some)
//     Check: are ALL drops worth at least 1g? (use .every)

// YOUR CODE:

// 5d. Find the first drop that came from a monster with "Dragon" in the name.
//     (use .find and .includes on the monster name)

// YOUR CODE:
// const dragonDrop = ...
// console.log("Dragon drop:", dragonDrop);

// 5e. Sort the drops by total value (quantity * value) in descending order.
//     Log the top 3. (Hint: sort a COPY, then slice)

// YOUR CODE:


// -----------------------------------------------
// BONUS CHALLENGE: Loot Report Generator
// -----------------------------------------------

// Create a function `generateLootReport(drops)` that takes an array of
// drop objects (same format as monsterDrops) and returns a report object:
//
// {
//   totalItems: <sum of all quantities>,
//   totalGold: <sum of all value * quantity>,
//   averageItemValue: <totalGold / totalItems>,
//   mostValuableItem: <name of highest value-per-item>,
//   leastValuableItem: <name of lowest value-per-item>,
//   breakdown: {
//     junk: [array of names where value < 5],
//     common: [array of names where value 5-49],
//     rare: [array of names where value 50-99],
//     epic: [array of names where value 100+],
//   }
// }
//
// Use map, filter, reduce, find, and sort — no plain for loops!

// YOUR CODE HERE
