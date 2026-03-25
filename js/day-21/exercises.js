// ============================================
// Day 21 Exercises: Mastering Time
// ============================================
// Run in Node.js (v14+) or a modern browser console.

// Helper — use this in your exercises
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// ------------------------------------------
// EXERCISE 1: Your First async Function
// Write an async function called heroIntro() that:
//   a) Waits 1 second (use await delay(1000))
//   b) Returns "I am the Time Master!"
//
// Call it and log the result using .then() or await.
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 2: Convert to Async/Await
// Rewrite this promise chain as an async function called dungeonQuest():
//
//   function dungeonQuestOld() {
//     return delay(500)
//       .then(() => {
//         console.log("Entered the dungeon");
//         return delay(500);
//       })
//       .then(() => {
//         console.log("Defeated the guardian");
//         return delay(500);
//       })
//       .then(() => {
//         console.log("Claimed the treasure");
//         return "Ancient Crown";
//       });
//   }
//
// Call your function and log "Reward: <result>" when done.
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 3: Error Handling
// Write an async function called disarmTrap() that:
//   a) Logs "Examining the trap..."
//   b) Waits 1 second
//   c) Randomly either resolves or throws:
//      - 50% chance: return "Trap disarmed!"
//      - 50% chance: throw new Error("BOOM! Trap explodes!")
//
// Then write an async function called attemptDisarm() that:
//   - Calls disarmTrap() inside a try/catch
//   - On success, logs the result
//   - On failure, logs "Failed: " + error.message
//   - In finally, logs "Moving on..."
//
// Call attemptDisarm().
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 4: Sequential vs Parallel
// Given these three async functions:
//
//   async function gatherWood()  { await delay(1000); return "Wood"; }
//   async function mineIron()    { await delay(1500); return "Iron"; }
//   async function huntLeather() { await delay(800);  return "Leather"; }
//
// a) Write gatherSequential() — await each one in order.
//    Log each resource as it's found and the total time.
//
// b) Write gatherParallel() — use Promise.all to gather all at once.
//    Log each resource and the total time.
//
// Compare the times! Sequential should be ~3.3s, parallel ~1.5s.
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 5: Async Loop
// Write an async function called exploreRooms(rooms) that:
//   - Takes an array of room name strings
//   - For each room, waits 500ms then logs "Explored: <room>"
//   - After all rooms, logs "Exploration complete! Visited X rooms."
//
// Test with: exploreRooms(["Crypt", "Armory", "Library", "Treasury"])
//
// IMPORTANT: Use a for...of loop, NOT forEach!
// (forEach doesn't wait for await properly)
// ------------------------------------------

// Your code here:


// ==========================================
// BONUS CHALLENGE (+15 XP): Dungeon Crawler
// ==========================================
// Build an async function called crawlDungeon(rooms) where rooms
// is an array of room objects:
//
//   const rooms = [
//     { name: "Entry Hall", trap: false, loot: "Map" },
//     { name: "Spike Room", trap: true,  loot: "Shield" },
//     { name: "Treasure Vault", trap: false, loot: "Gold Crown" },
//     { name: "Poison Chamber", trap: true,  loot: "Magic Ring" },
//     { name: "Exit", trap: false, loot: "Freedom" },
//   ];
//
// For each room:
//   - Wait 500ms (simulating travel time)
//   - Log "Entering: <name>..."
//   - If trap is true, throw an Error inside a try/catch
//     (catch it and log "TRAP! Skipping loot in <name>")
//   - If no trap, add the loot to a collectedLoot array and
//     log "Collected: <loot>"
//
// After all rooms, log:
//   "Dungeon crawl complete!"
//   "Rooms survived: X/Y"
//   "Loot collected: [item1, item2, ...]"
//
// Call crawlDungeon(rooms) to test.

// Your code here:
