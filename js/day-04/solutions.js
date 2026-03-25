// ============================================
// Day 4 Solutions: The Scroll of Words
// ============================================


// ------------------------------------------
// EXERCISE 1: Scroll Analysis
// ------------------------------------------

const scroll = "In the land of Eldoria, the brave hero shall rise at dawn";

console.log("Length:", scroll.length);                  // 57
console.log("Shouted:", scroll.toUpperCase());
// "IN THE LAND OF ELDORIA, THE BRAVE HERO SHALL RISE AT DAWN"
console.log("Mentions hero?", scroll.includes("hero"));       // true
console.log("Mentions villain?", scroll.includes("villain")); // false
console.log("'brave' starts at index:", scroll.indexOf("brave")); // 28

// KEY LESSON: .includes() returns a boolean. .indexOf() returns a number.
// Use .includes() when you just need yes/no. Use .indexOf() when you
// need to know WHERE something is.


// ------------------------------------------
// EXERCISE 2: Name Formatter
// ------------------------------------------

const messyName = "   aRiA tHe BrAvE   ";

const cleanName = messyName.trim().toLowerCase();
console.log("\nCleaned:", cleanName);  // "aria the brave"

// KEY LESSON: Method chaining! .trim() returns a new string, and you
// can immediately call .toLowerCase() on that new string.
// The original messyName is never modified (strings are immutable).


// ------------------------------------------
// EXERCISE 3: Inventory Parser
// ------------------------------------------

const inventoryString = "health potion,mana potion,antidote,fire scroll,ice shard";

const items = inventoryString.split(",");
console.log("\nItems:", items);
// ["health potion", "mana potion", "antidote", "fire scroll", "ice shard"]

console.log("Item count:", items.length);   // 5
console.log("Third item:", items[2]);       // "antidote"

// KEY LESSON: .split(",") breaks a string at every comma and returns
// an array. The third item is at index 2 because arrays are zero-indexed.


// ------------------------------------------
// EXERCISE 4: Secret Message
// ------------------------------------------

const clue1 = "The HERO awaits";
const clue2 = "Look behind the DOOR";
const clue3 = "OPEN sesame street";

const word1 = clue1.slice(4, 8);    // "HERO"
const word2 = clue2.slice(-4);      // "DOOR"  (last 4 characters)
const word3 = clue3.slice(0, 4);    // "OPEN"  (first 4 characters)

console.log("\nSecret message:", word1, word2, word3);
// "Secret message: HERO DOOR OPEN"

// KEY LESSON: .slice(start, end) extracts from start up to (but not
// including) end. Negative numbers count from the end of the string.
// .slice(-4) = "start 4 from the end, go to the end."


// ------------------------------------------
// EXERCISE 5: Quest Board Formatter
// ------------------------------------------

const questName = "The Lost Amulet";
const reward = 500;
const difficulty = "Medium";
const location = "Crystal Cave";

const questPosting = `QUEST: ${questName} | Reward: ${reward} gold | Difficulty: ${difficulty} | Location: ${location}`;
console.log("\n" + questPosting);
// "QUEST: The Lost Amulet | Reward: 500 gold | Difficulty: Medium | Location: Crystal Cave"

// KEY LESSON: Template literals (backticks) with ${} are SO much
// cleaner than concatenation with +. Use them whenever you mix
// variables with text.


// ==========================================
// BONUS CHALLENGE SOLUTION
// ==========================================

const encodedScroll = "   THX BR#VX HXRO SH#LL S#VX THX VILL#GX   ";

const step1 = encodedScroll.trim();
// "THX BR#VX HXRO SH#LL S#VX THX VILL#GX"

const step2 = step1.replaceAll("X", "E");
// "THE BR#VE HERO SH#LL S#VE THE VILL#GE"

const step3 = step2.replaceAll("#", "A");
// "THE BRAVE HERO SHALL SAVE THE VILLAGE"

const step4 = step3.toLowerCase();
// "the brave hero shall save the village"

// Capitalize the first letter:
const decoded = step4[0].toUpperCase() + step4.slice(1) + "!";
// "The brave hero shall save the village!"

console.log("\nDecoded:", decoded);

// KEY LESSON: You can chain transformations step by step. Each string
// method returns a NEW string, so we store each step.
// step4[0] gives us the first character — strings support bracket
// notation just like arrays!
//
// You could also do this all in one chain:
// const oneShot = encodedScroll.trim().replaceAll("X","E").replaceAll("#","A").toLowerCase();
// const final = oneShot[0].toUpperCase() + oneShot.slice(1) + "!";
