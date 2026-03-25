// ============================================
// Day 10: "The Inventory Bag"
// Arrays (Part 1)
// ============================================

// -----------------------------------------------
// 1. CREATING ARRAYS & ACCESSING ELEMENTS
// -----------------------------------------------
console.log("=== CREATING ARRAYS ===");

// An array is an ordered list of values
const inventory = ["Iron Sword", "Wooden Shield", "Health Potion"];

console.log("Full inventory:", inventory);
console.log("Number of items:", inventory.length);  // 3

// Accessing by index (starts at 0!)
console.log("Slot 0:", inventory[0]);  // "Iron Sword"
console.log("Slot 1:", inventory[1]);  // "Wooden Shield"
console.log("Slot 2:", inventory[2]);  // "Health Potion"
console.log("Slot 3:", inventory[3]);  // undefined — nothing there!

// Last item trick: use length - 1
console.log("Last item:", inventory[inventory.length - 1]);  // "Health Potion"

// Updating an item
inventory[0] = "Steel Sword";  // Replace the Iron Sword
console.log("After upgrade:", inventory);

// Arrays can hold mixed types (but usually you keep them uniform)
const weirdBag = [42, "Magic Scroll", true, null, undefined];
console.log("Weird bag:", weirdBag);

// Empty array
const emptyBag = [];
console.log("Empty bag length:", emptyBag.length);  // 0


// -----------------------------------------------
// 2. PUSH & POP — Back of the Bag
// -----------------------------------------------
console.log("\n=== PUSH & POP ===");

const loot = ["Gold Coin", "Ruby"];
console.log("Starting loot:", loot);

// push — add to the END
loot.push("Emerald");
console.log("After push:", loot);  // ["Gold Coin", "Ruby", "Emerald"]

// You can push multiple items at once
loot.push("Diamond", "Sapphire");
console.log("Push multiple:", loot);

// push returns the new length
const newLength = loot.push("Pearl");
console.log("New length:", newLength);  // 6

// pop — remove from the END (returns the removed item)
const lastItem = loot.pop();
console.log("Popped:", lastItem);    // "Pearl"
console.log("After pop:", loot);


// -----------------------------------------------
// 3. SHIFT & UNSHIFT — Front of the Bag
// -----------------------------------------------
console.log("\n=== SHIFT & UNSHIFT ===");

const queue = ["Warrior", "Mage", "Archer"];
console.log("Party queue:", queue);

// unshift — add to the BEGINNING
queue.unshift("Healer");
console.log("After unshift:", queue);  // ["Healer", "Warrior", "Mage", "Archer"]

// shift — remove from the BEGINNING (returns the removed item)
const first = queue.shift();
console.log("Shifted:", first);      // "Healer"
console.log("After shift:", queue);  // ["Warrior", "Mage", "Archer"]

// Think of shift/unshift like a QUEUE (first in, first out)
// Think of push/pop like a STACK (last in, first out)


// -----------------------------------------------
// 4. SPLICE — Surgery on the Array
// -----------------------------------------------
console.log("\n=== SPLICE ===");

// splice(startIndex, deleteCount, ...itemsToInsert)
// It MODIFIES the original array and returns what was removed

const gear = ["Helmet", "Chestplate", "Old Boots", "Gauntlets", "Cape"];
console.log("Gear:", gear);

// Remove 1 item at index 2 (Old Boots)
const removed = gear.splice(2, 1);
console.log("Removed:", removed);   // ["Old Boots"]
console.log("After removal:", gear); // ["Helmet", "Chestplate", "Gauntlets", "Cape"]

// Insert without removing (deleteCount = 0)
gear.splice(2, 0, "Magic Boots");
console.log("After insert:", gear);  // ["Helmet", "Chestplate", "Magic Boots", "Gauntlets", "Cape"]

// Replace — remove 1 and insert 1 at index 0
gear.splice(0, 1, "Dragon Helm");
console.log("After replace:", gear);

// Remove multiple items
const skills = ["Slash", "Block", "Heal", "Fireball", "Ice Storm"];
const removedSkills = skills.splice(2, 3);  // Remove 3 items starting at index 2
console.log("Removed skills:", removedSkills);  // ["Heal", "Fireball", "Ice Storm"]
console.log("Remaining skills:", skills);        // ["Slash", "Block"]

// Insert multiple items
skills.splice(1, 0, "Parry", "Dodge");
console.log("After multi-insert:", skills);  // ["Slash", "Parry", "Dodge", "Block"]


// -----------------------------------------------
// 5. SLICE — Copy a Portion
// -----------------------------------------------
console.log("\n=== SLICE ===");

// slice(startIndex, endIndex) — endIndex is NOT included
// Does NOT modify the original!

const treasures = ["Gold", "Silver", "Bronze", "Platinum", "Diamond"];
console.log("Treasures:", treasures);

const someGems = treasures.slice(1, 4);
console.log("Slice(1, 4):", someGems);    // ["Silver", "Bronze", "Platinum"]
console.log("Original unchanged:", treasures);  // Still all 5

// Omit endIndex to go to the end
const lastTwo = treasures.slice(3);
console.log("Slice(3):", lastTwo);  // ["Platinum", "Diamond"]

// Negative indices count from the end
const lastThree = treasures.slice(-3);
console.log("Slice(-3):", lastThree);  // ["Bronze", "Platinum", "Diamond"]

// Copy the entire array
const treasureCopy = treasures.slice();
console.log("Full copy:", treasureCopy);

// The copy is independent — changes don't affect the original
treasureCopy.push("Emerald");
console.log("Copy modified:", treasureCopy);   // Has 6 items
console.log("Original safe:", treasures);       // Still has 5 items


// -----------------------------------------------
// 6. SEARCHING — indexOf, includes, lastIndexOf
// -----------------------------------------------
console.log("\n=== SEARCHING ===");

const potions = ["Health Potion", "Mana Potion", "Health Potion", "Elixir"];

// indexOf — first position of an item (or -1 if not found)
console.log("indexOf 'Mana Potion':", potions.indexOf("Mana Potion"));     // 1
console.log("indexOf 'Poison':", potions.indexOf("Poison"));               // -1

// includes — true/false (usually better for simple checks)
console.log("includes 'Elixir':", potions.includes("Elixir"));             // true
console.log("includes 'Antidote':", potions.includes("Antidote"));         // false

// lastIndexOf — position of the LAST occurrence
console.log("lastIndexOf 'Health Potion':", potions.lastIndexOf("Health Potion"));  // 2

// Common pattern: check before using
const searchItem = "Mana Potion";
if (potions.includes(searchItem)) {
  console.log(`Found ${searchItem} at index ${potions.indexOf(searchItem)}`);
} else {
  console.log(`${searchItem} not in inventory`);
}


// -----------------------------------------------
// 7. PUTTING IT ALL TOGETHER
// -----------------------------------------------
console.log("\n=== INVENTORY MANAGEMENT ===");

const heroInventory = [];

// Picking up loot
heroInventory.push("Rusty Sword");
heroInventory.push("Leather Armor");
heroInventory.push("Torch");
heroInventory.push("Bread");
heroInventory.push("Health Potion");
console.log("Picked up items:", heroInventory);

// Found a better sword — replace the rusty one
const swordIndex = heroInventory.indexOf("Rusty Sword");
if (swordIndex !== -1) {
  heroInventory.splice(swordIndex, 1, "Steel Sword");
}
console.log("After upgrade:", heroInventory);

// Ate the bread (remove it)
const breadIndex = heroInventory.indexOf("Bread");
if (breadIndex !== -1) {
  heroInventory.splice(breadIndex, 1);
}
console.log("After eating bread:", heroInventory);

// Quick-access items (first 2 slots)
const quickAccess = heroInventory.slice(0, 2);
console.log("Quick access slots:", quickAccess);

// Check if we have healing
const canHeal = heroInventory.includes("Health Potion");
console.log("Can heal?", canHeal);

console.log("\nFinal inventory:", heroInventory);
console.log("Total items:", heroInventory.length);

console.log("\n=== LESSON COMPLETE ===");
console.log("Your inventory bag is ready. Time to fill it with loot!");
