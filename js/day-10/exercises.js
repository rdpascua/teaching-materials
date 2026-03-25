// ============================================
// Day 10 Exercises: "The Inventory Bag"
// Arrays (Part 1)
// ============================================
// Complete each exercise below. Run this file with: node exercises.js

// -----------------------------------------------
// EXERCISE 1: Basic Inventory
// Create and manipulate an inventory array.
// -----------------------------------------------

// 1a. Create an array called `inventory` with these items:
//     "Wooden Sword", "Leather Armor", "Health Potion", "Torch", "Bread"

// YOUR CODE:

// 1b. Log the FIRST item in the inventory

// YOUR CODE:

// 1c. Log the LAST item (use .length, don't hardcode the index)

// YOUR CODE:

// 1d. Change the "Wooden Sword" to "Iron Sword" using its index

// YOUR CODE:

// 1e. Log the total number of items

// YOUR CODE:

// 1f. Log the entire inventory

// YOUR CODE:


// -----------------------------------------------
// EXERCISE 2: Push, Pop, Shift, Unshift
// Manage a battle queue using array methods.
// -----------------------------------------------

// Start with this array:
// const battleQueue = ["Goblin", "Skeleton", "Orc"];

// 2a. A new enemy joins the back of the queue. Add "Dark Mage" to the end.

// YOUR CODE:

// 2b. A boss cuts to the front! Add "Dragon" to the beginning.

// YOUR CODE:

// 2c. The first enemy in the queue attacks and is removed.
//     Remove it and store it in a variable called `currentEnemy`.
//     Log: "[currentEnemy] attacks!"

// YOUR CODE:

// 2d. The last enemy in the queue flees. Remove it from the end.
//     Store in `fleeingEnemy` and log: "[fleeingEnemy] runs away!"

// YOUR CODE:

// 2e. Log the remaining queue

// YOUR CODE:


// -----------------------------------------------
// EXERCISE 3: Splice Operations
// Use splice to perform specific array modifications.
// -----------------------------------------------

// Start with this array:
// const skills = ["Slash", "Block", "Tackle", "Fireball", "Heal", "Stealth"];

// 3a. Remove "Tackle" from the array (it's at index 2).
//     Log what was removed.

// YOUR CODE:

// 3b. Insert "Ice Blast" between "Block" and "Fireball"
//     (at index 2, where "Tackle" used to be, remove 0).

// YOUR CODE:

// 3c. Replace "Block" (index 1) with "Parry" and "Dodge" (remove 1, insert 2)

// YOUR CODE:

// 3d. Log the final skills array.
//     It should be: ["Slash", "Parry", "Dodge", "Ice Blast", "Fireball", "Heal", "Stealth"]

// YOUR CODE:


// -----------------------------------------------
// EXERCISE 4: Slice Challenges
// Use slice to extract sub-arrays (do NOT modify the original).
// -----------------------------------------------

// Start with this array:
const treasureChest = ["Gold Coin", "Ruby", "Emerald", "Diamond", "Sapphire", "Pearl", "Topaz"];

// 4a. Get the first 3 items (index 0, 1, 2)

// YOUR CODE:
// const firstThree = ...
// console.log("First three:", firstThree);

// 4b. Get items from index 2 to 5 (not including 5)

// YOUR CODE:
// const middle = ...
// console.log("Middle:", middle);

// 4c. Get the last 2 items using a negative index

// YOUR CODE:
// const lastTwo = ...
// console.log("Last two:", lastTwo);

// 4d. Create a complete copy of the array

// YOUR CODE:
// const chestCopy = ...
// console.log("Copy:", chestCopy);

// 4e. Verify the original is unchanged

// YOUR CODE:
// console.log("Original:", treasureChest);


// -----------------------------------------------
// EXERCISE 5: Inventory Manager
// Build a set of functions to manage an inventory.
// -----------------------------------------------

// Create these functions that all work with a shared `playerInventory` array:

// const playerInventory = [];

// 5a. addItem(item) — adds item to end of inventory
//     Log: "Added [item] to inventory."

// 5b. removeItem(item) — finds and removes the item (first occurrence)
//     If found: remove it and log "Removed [item]."
//     If not found: log "[item] not in inventory!"

// 5c. hasItem(item) — returns true/false

// 5d. swapItem(oldItem, newItem) — replaces oldItem with newItem
//     If oldItem found: replace it and log "Swapped [oldItem] for [newItem]."
//     If not found: log "[oldItem] not found. Cannot swap."

// 5e. showInventory() — logs all items with slot numbers
//     Format: "=== Inventory ([count] items) ==="
//             "  Slot 1: [item]"
//             "  Slot 2: [item]"
//             etc.

// YOUR CODE:

// Test:
// addItem("Sword");
// addItem("Shield");
// addItem("Potion");
// addItem("Torch");
// showInventory();
// console.log("Has Sword?", hasItem("Sword"));
// console.log("Has Bow?", hasItem("Bow"));
// removeItem("Torch");
// removeItem("Axe");
// swapItem("Sword", "Fire Sword");
// swapItem("Bow", "Ice Bow");
// showInventory();


// -----------------------------------------------
// BONUS CHALLENGE: Crafting System
// -----------------------------------------------

// Create a crafting system using arrays:
//
// 1. Create a `recipes` array of objects. Each recipe has:
//    { result: "Item Name", ingredients: ["item1", "item2", ...] }
//    Add at least 3 recipes, e.g.:
//    - "Fire Sword" needs ["Sword", "Fire Gem"]
//    - "Health Elixir" needs ["Health Potion", "Magic Dust"]
//    - "Shield Wall" needs ["Shield", "Shield", "Iron Bar"]
//
// 2. Create a function `craft(inventory, recipeName)` that:
//    - Finds the recipe by name
//    - Checks if ALL ingredients are in the inventory
//    - If yes: removes all ingredients from inventory, adds the result,
//      and returns "Crafted [result]!"
//    - If no: returns "Missing ingredients for [recipeName]"
//    - If recipe not found: returns "Unknown recipe: [recipeName]"
//
// Hint: Be careful when removing duplicate ingredients (e.g., two "Shield"s).
//       Remove them one at a time, not all at once.

// YOUR CODE HERE
