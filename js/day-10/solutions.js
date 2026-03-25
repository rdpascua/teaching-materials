// ============================================
// Day 10 Solutions: "The Inventory Bag"
// Arrays (Part 1)
// ============================================

// -----------------------------------------------
// EXERCISE 1: Basic Inventory
// -----------------------------------------------
console.log("=== EXERCISE 1 ===");

// 1a.
const inventory = ["Wooden Sword", "Leather Armor", "Health Potion", "Torch", "Bread"];

// 1b.
console.log("First item:", inventory[0]);  // "Wooden Sword"

// 1c. Using .length - 1 so it works for any array size
console.log("Last item:", inventory[inventory.length - 1]);  // "Bread"

// 1d.
inventory[0] = "Iron Sword";

// 1e.
console.log("Total items:", inventory.length);  // 5

// 1f.
console.log("Inventory:", inventory);


// -----------------------------------------------
// EXERCISE 2: Push, Pop, Shift, Unshift
// -----------------------------------------------
console.log("\n=== EXERCISE 2 ===");

const battleQueue = ["Goblin", "Skeleton", "Orc"];

// 2a. push adds to the end
battleQueue.push("Dark Mage");
console.log("After push:", battleQueue);

// 2b. unshift adds to the beginning
battleQueue.unshift("Dragon");
console.log("After unshift:", battleQueue);

// 2c. shift removes from the beginning
const currentEnemy = battleQueue.shift();
console.log(`${currentEnemy} attacks!`);
// "Dragon attacks!" — Dragon was at the front

// 2d. pop removes from the end
const fleeingEnemy = battleQueue.pop();
console.log(`${fleeingEnemy} runs away!`);
// "Dark Mage runs away!" — Dark Mage was at the back

// 2e.
console.log("Remaining queue:", battleQueue);
// ["Goblin", "Skeleton", "Orc"]


// -----------------------------------------------
// EXERCISE 3: Splice Operations
// -----------------------------------------------
console.log("\n=== EXERCISE 3 ===");

const skills = ["Slash", "Block", "Tackle", "Fireball", "Heal", "Stealth"];

// 3a. Remove "Tackle" at index 2
const removedSkill = skills.splice(2, 1);
console.log("Removed:", removedSkill);  // ["Tackle"]

// 3b. Insert "Ice Blast" at index 2 (delete 0)
skills.splice(2, 0, "Ice Blast");
console.log("After insert:", skills);

// 3c. Replace "Block" (index 1) with "Parry" and "Dodge"
skills.splice(1, 1, "Parry", "Dodge");
console.log("After replace:", skills);

// 3d. Final result
console.log("Final skills:", skills);
// ["Slash", "Parry", "Dodge", "Ice Blast", "Fireball", "Heal", "Stealth"]


// -----------------------------------------------
// EXERCISE 4: Slice Challenges
// -----------------------------------------------
console.log("\n=== EXERCISE 4 ===");

const treasureChest = ["Gold Coin", "Ruby", "Emerald", "Diamond", "Sapphire", "Pearl", "Topaz"];

// 4a. First 3 items
const firstThree = treasureChest.slice(0, 3);
console.log("First three:", firstThree);  // ["Gold Coin", "Ruby", "Emerald"]

// 4b. Items from index 2 to 5 (not including 5)
const middle = treasureChest.slice(2, 5);
console.log("Middle:", middle);  // ["Emerald", "Diamond", "Sapphire"]

// 4c. Last 2 items using negative index
const lastTwo = treasureChest.slice(-2);
console.log("Last two:", lastTwo);  // ["Pearl", "Topaz"]

// 4d. Complete copy
const chestCopy = treasureChest.slice();
console.log("Copy:", chestCopy);

// 4e. Original unchanged
console.log("Original:", treasureChest);
// All 7 items still there — slice never modifies the original


// -----------------------------------------------
// EXERCISE 5: Inventory Manager
// -----------------------------------------------
console.log("\n=== EXERCISE 5 ===");

const playerInventory = [];

// 5a. addItem — push to the end
const addItem = (item) => {
  playerInventory.push(item);
  console.log(`Added ${item} to inventory.`);
};

// 5b. removeItem — find index and splice
const removeItem = (item) => {
  const index = playerInventory.indexOf(item);
  if (index !== -1) {
    playerInventory.splice(index, 1);
    console.log(`Removed ${item}.`);
  } else {
    console.log(`${item} not in inventory!`);
  }
};
// We use indexOf to find the item's position, then splice to remove it.
// indexOf returns -1 if not found, so we check for that.

// 5c. hasItem — simple includes check
const hasItem = (item) => playerInventory.includes(item);

// 5d. swapItem — find old item and splice in the new one
const swapItem = (oldItem, newItem) => {
  const index = playerInventory.indexOf(oldItem);
  if (index !== -1) {
    playerInventory.splice(index, 1, newItem);
    console.log(`Swapped ${oldItem} for ${newItem}.`);
  } else {
    console.log(`${oldItem} not found. Cannot swap.`);
  }
};
// splice(index, 1, newItem) removes 1 item at index and inserts newItem
// in its place — a one-line swap!

// 5e. showInventory — loop through with numbered slots
const showInventory = () => {
  console.log(`=== Inventory (${playerInventory.length} items) ===`);
  for (let i = 0; i < playerInventory.length; i++) {
    console.log(`  Slot ${i + 1}: ${playerInventory[i]}`);
  }
};

// Test
addItem("Sword");
addItem("Shield");
addItem("Potion");
addItem("Torch");
showInventory();
console.log("Has Sword?", hasItem("Sword"));     // true
console.log("Has Bow?", hasItem("Bow"));           // false
removeItem("Torch");                               // Removed Torch.
removeItem("Axe");                                 // Axe not in inventory!
swapItem("Sword", "Fire Sword");                   // Swapped Sword for Fire Sword.
swapItem("Bow", "Ice Bow");                        // Bow not found. Cannot swap.
showInventory();


// -----------------------------------------------
// BONUS CHALLENGE: Crafting System
// -----------------------------------------------
console.log("\n=== BONUS ===");

const recipes = [
  { result: "Fire Sword", ingredients: ["Sword", "Fire Gem"] },
  { result: "Health Elixir", ingredients: ["Health Potion", "Magic Dust"] },
  { result: "Shield Wall", ingredients: ["Shield", "Shield", "Iron Bar"] },
];

const craft = (inv, recipeName) => {
  // Find the recipe
  let recipe = null;
  for (const r of recipes) {
    if (r.result === recipeName) {
      recipe = r;
      break;
    }
  }

  if (!recipe) {
    return `Unknown recipe: ${recipeName}`;
  }

  // Check if all ingredients are available
  // We need to handle duplicates carefully, so we work with a copy
  const invCopy = inv.slice();  // Work with a copy first to check

  for (const ingredient of recipe.ingredients) {
    const idx = invCopy.indexOf(ingredient);
    if (idx === -1) {
      return `Missing ingredients for ${recipeName}`;
    }
    invCopy.splice(idx, 1);  // Remove from copy so duplicates are counted
  }

  // All ingredients found! Now actually modify the real inventory
  for (const ingredient of recipe.ingredients) {
    const idx = inv.indexOf(ingredient);
    inv.splice(idx, 1);
  }
  inv.push(recipe.result);

  return `Crafted ${recipe.result}!`;
};
// KEY INSIGHT: We check against a COPY first so we don't partially
// remove ingredients from the real inventory if crafting fails.
// For the "Shield Wall" recipe requiring 2 shields, we remove each
// shield one at a time from the copy, so indexOf finds different
// indices each time.

const craftBag = ["Sword", "Fire Gem", "Shield", "Health Potion"];
console.log(craft(craftBag, "Fire Sword"));     // "Crafted Fire Sword!"
console.log("Bag after craft:", craftBag);        // ["Shield", "Health Potion", "Fire Sword"]

console.log(craft(craftBag, "Shield Wall"));     // "Missing ingredients..."
console.log(craft(craftBag, "Banana Sword"));    // "Unknown recipe: Banana Sword"

// Test with duplicate ingredients
const craftBag2 = ["Shield", "Shield", "Iron Bar"];
console.log(craft(craftBag2, "Shield Wall"));    // "Crafted Shield Wall!"
console.log("Bag after craft:", craftBag2);       // ["Shield Wall"]
