// ============================================
// Day 4 Exercises: The Scroll of Words
// ============================================
// Instructions: Read each problem, write your answer, then run the file.


// ------------------------------------------
// EXERCISE 1: Scroll Analysis
// Given this ancient scroll text, use string methods to answer
// the questions below.
// ------------------------------------------

const scroll = "In the land of Eldoria, the brave hero shall rise at dawn";

// TODO: How many characters are in the scroll?
// console.log("Length:", ???);

// TODO: Convert the entire scroll to uppercase (as if shouting it)
// console.log("Shouted:", ???);

// TODO: Does the scroll mention "hero"?
// console.log("Mentions hero?", ???);

// TODO: Does the scroll mention "villain"?
// console.log("Mentions villain?", ???);

// TODO: At what position does the word "brave" start?
// console.log("'brave' starts at index:", ???);


// ------------------------------------------
// EXERCISE 2: Name Formatter
// The village registrar needs names cleaned up and formatted.
// ------------------------------------------

const messyName = "   aRiA tHe BrAvE   ";

// TODO: Clean up the name:
// 1. Remove leading/trailing spaces
// 2. Convert to lowercase
// 3. Store the result in a variable called cleanName
// const cleanName = ???;

// console.log("Cleaned:", cleanName);  // Expected: "aria the brave"


// ------------------------------------------
// EXERCISE 3: Inventory Parser
// The shopkeeper keeps inventory as a comma-separated string.
// Break it apart and examine it.
// ------------------------------------------

const inventoryString = "health potion,mana potion,antidote,fire scroll,ice shard";

// TODO: Split the string into an array of items
// const items = ???;

// TODO: How many items are there?
// console.log("Item count:", ???);

// TODO: What is the third item? (remember: arrays start at index 0)
// console.log("Third item:", ???);


// ------------------------------------------
// EXERCISE 4: Secret Message
// Use .slice() to extract hidden words from these strings.
// ------------------------------------------

const clue1 = "The HERO awaits";       // Extract "HERO" (index 4 to 8)
const clue2 = "Look behind the DOOR";  // Extract "DOOR" (last 4 characters)
const clue3 = "OPEN sesame street";    // Extract "OPEN" (first 4 characters)

// const word1 = ???;
// const word2 = ???;
// const word3 = ???;

// console.log("Secret message:", word1, word2, word3);
// Expected: "Secret message: HERO DOOR OPEN"


// ------------------------------------------
// EXERCISE 5: Quest Board Formatter
// Create a formatted quest posting using template literals.
// ------------------------------------------

const questName = "The Lost Amulet";
const reward = 500;
const difficulty = "Medium";
const location = "Crystal Cave";

// TODO: Create a quest posting using template literals that looks like:
// "QUEST: The Lost Amulet | Reward: 500 gold | Difficulty: Medium | Location: Crystal Cave"

// const questPosting = ???;
// console.log(questPosting);


// ==========================================
// BONUS CHALLENGE (+15 XP)
// Ancient Scroll Decoder
// ==========================================

// The ancient scroll is encoded. Decode it by applying these
// transformations IN ORDER:
// 1. Trim whitespace from both ends
// 2. Replace all "X" with "e"
// 3. Replace all "#" with "a"
// 4. Convert to lowercase (but capitalize the first letter)
// 5. Add an exclamation mark at the end

const encodedScroll = "   THX BR#VX HXRO SH#LL S#VX THX VILL#GX   ";

// TODO: Decode the scroll step by step
// const step1 = encodedScroll.???;
// const step2 = step1.???;
// const step3 = step2.???;
// const step4 = step3.???;
// const decoded = step4.??? + ???;

// console.log("Decoded:", decoded);
// Expected: "The brave hero shall save the village!"
