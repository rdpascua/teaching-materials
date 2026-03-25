// ============================================
// Day 20 Exercises: The Dragon's Promise
// ============================================
// Run in Node.js or a browser console.


// ------------------------------------------
// EXERCISE 1: Make a Promise
// Create a function called dragonRiddle() that returns a new Promise.
//   - Generate a random number between 1 and 10
//   - If the number is greater than 3, resolve with "Correct! The dragon is pleased."
//   - Otherwise, reject with "Wrong answer! The dragon growls."
//
// Then call dragonRiddle() and handle both outcomes with .then() and .catch().
// Add a .finally() that logs "The riddle round is over."
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 2: Promise Chain
// Write three functions that each return a Promise:
//   a) enterCave() — resolves with "Entered the dark cave" after 500ms
//   b) lightTorch(message) — resolves with message + " → Torch lit!" after 500ms
//   c) findTreasure(message) — resolves with message + " → Found gold!" after 500ms
//
// Chain them together:
//   enterCave()
//     .then(result => lightTorch(result))
//     .then(result => findTreasure(result))
//     .then(result => console.log("Quest complete:", result))
//     .catch(error => console.log("Quest failed:", error));
//
// Expected final output:
//   "Quest complete: Entered the dark cave → Torch lit! → Found gold!"
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 3: Error in the Chain
// Copy your chain from Exercise 2, but modify lightTorch to REJECT
// instead of resolve (simulate the torch breaking).
//
// Verify that:
//   - enterCave runs successfully
//   - lightTorch rejects
//   - findTreasure is SKIPPED (never runs)
//   - The .catch() handler catches the error
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 4: Promise.race — Beat the Clock
// Create two promises:
//   a) heroEscape — resolves with "Hero escaped!" after 2 seconds
//   b) wallsClose — rejects with "Walls crushed the hero!" after 3 seconds
//
// Use Promise.race to see who wins.
// Then change the timings so the walls win, and verify .catch() fires.
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 5: Promisify a Callback
// Convert this callback-based function into one that returns a Promise:
//
//   function openChestCB(chestId, callback) {
//     setTimeout(() => {
//       if (chestId > 0) {
//         callback(null, `Chest #${chestId} contains a ruby!`);
//       } else {
//         callback("Invalid chest ID!");
//       }
//     }, 1000);
//   }
//
// Write openChest(chestId) that returns a Promise:
//   - resolve with the success message
//   - reject with the error message
//
// Test:
//   openChest(5).then(console.log).catch(console.log);  // "Chest #5 contains a ruby!"
//   openChest(-1).then(console.log).catch(console.log);  // "Invalid chest ID!"
// ------------------------------------------

// Your code here:


// ==========================================
// BONUS CHALLENGE (+15 XP): Dungeon Raid
// ==========================================
// Write a function dungeonRaid() that uses Promise.all to run
// three quests in parallel:
//
//   slayDragon()   — resolves with { quest: "dragon", xp: 500 } after 2s
//   rescuePrincess() — resolves with { quest: "rescue", xp: 300 } after 1s
//   findArtifact()  — resolves with { quest: "artifact", xp: 200 } after 1.5s
//
// When all three complete:
//   - Log each quest result
//   - Calculate total XP from all three
//   - Log "Raid complete! Total XP earned: <total>"
//
// If any quest fails, log "Raid failed: <error>"
//
// Test it. Then modify one quest to reject and verify error handling.

// Your code here:
