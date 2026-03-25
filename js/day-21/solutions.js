// ============================================
// Day 21 Solutions: Mastering Time
// ============================================

// Helper
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// ------------------------------------------
// EXERCISE 1: Your First async Function
// ------------------------------------------

async function heroIntro() {
  await delay(1000);
  return "I am the Time Master!";
}

// Option A: using .then()
heroIntro().then(msg => console.log("Ex 1:", msg));

// Option B: using await (must be inside an async context)
// (async () => {
//   const msg = await heroIntro();
//   console.log("Ex 1:", msg);
// })();

// WHY: async functions always return a Promise. The await inside
// pauses heroIntro for 1 second, then it returns the string.
// That string becomes the resolved value of the Promise.


// ------------------------------------------
// EXERCISE 2: Convert to Async/Await
// ------------------------------------------

async function dungeonQuest() {
  await delay(500);
  console.log("Entered the dungeon");

  await delay(500);
  console.log("Defeated the guardian");

  await delay(500);
  console.log("Claimed the treasure");

  return "Ancient Crown";
}

setTimeout(async () => {
  const reward = await dungeonQuest();
  console.log("\nEx 2 — Reward:", reward);
}, 1500);

// WHY: Each .then() becomes an await + the code that was in the .then callback.
// The final return value ("Ancient Crown") becomes what the Promise resolves to.
// The code reads top-to-bottom, like a story. Much easier to follow than chains.


// ------------------------------------------
// EXERCISE 3: Error Handling
// ------------------------------------------

async function disarmTrap() {
  console.log("Examining the trap...");
  await delay(1000);

  if (Math.random() > 0.5) {
    return "Trap disarmed!";
  } else {
    throw new Error("BOOM! Trap explodes!");
  }
}

async function attemptDisarm() {
  try {
    const result = await disarmTrap();
    console.log("Success:", result);
  } catch (error) {
    console.log("Failed:", error.message);
  } finally {
    console.log("Moving on...");
  }
}

setTimeout(() => {
  console.log("\nEx 3:");
  attemptDisarm();
}, 3500);

// WHY: When an awaited Promise rejects (or the function throws),
// it behaves just like a thrown error in synchronous code.
// try/catch catches it the same way. This is why Day 18 (try/catch)
// was important — the same pattern works for async errors!


// ------------------------------------------
// EXERCISE 4: Sequential vs Parallel
// ------------------------------------------

async function gatherWood()  { await delay(1000); return "Wood"; }
async function mineIron()    { await delay(1500); return "Iron"; }
async function huntLeather() { await delay(800);  return "Leather"; }

async function gatherSequential() {
  const start = Date.now();

  const wood = await gatherWood();
  console.log("  Found:", wood);

  const iron = await mineIron();
  console.log("  Found:", iron);

  const leather = await huntLeather();
  console.log("  Found:", leather);

  console.log(`  Sequential time: ~${Date.now() - start}ms`);
}

async function gatherParallel() {
  const start = Date.now();

  const [wood, iron, leather] = await Promise.all([
    gatherWood(),
    mineIron(),
    huntLeather(),
  ]);

  console.log(`  Found: ${wood}, ${iron}, ${leather}`);
  console.log(`  Parallel time: ~${Date.now() - start}ms`);
}

setTimeout(async () => {
  console.log("\nEx 4a — Sequential:");
  await gatherSequential();
  // ~3300ms total (1000 + 1500 + 800)

  console.log("\nEx 4b — Parallel:");
  await gatherParallel();
  // ~1500ms total (the slowest task)
}, 5500);

// WHY: Sequential await means each task starts only after the previous
// one finishes. Parallel means all tasks start at the same time.
// Use sequential when tasks depend on each other (step 2 needs step 1's result).
// Use parallel when tasks are independent (gathering different resources).
// Promise.all + destructuring is the cleanest parallel pattern.


// ------------------------------------------
// EXERCISE 5: Async Loop
// ------------------------------------------

async function exploreRooms(rooms) {
  for (const room of rooms) {
    await delay(500);
    console.log(`  Explored: ${room}`);
  }
  console.log(`  Exploration complete! Visited ${rooms.length} rooms.`);
}

setTimeout(async () => {
  console.log("\nEx 5:");
  await exploreRooms(["Crypt", "Armory", "Library", "Treasury"]);
}, 12000);

// WHY: for...of works correctly with await — it pauses on each iteration.
// forEach does NOT work because it fires all callbacks immediately without
// waiting. This is a common gotcha:
//
//   rooms.forEach(async (room) => {
//     await delay(500);  // Each starts immediately — they don't wait for each other!
//     console.log(room);
//   });
//
// Always use for...of (or a regular for loop) when you need sequential awaits.


// ==========================================
// BONUS CHALLENGE SOLUTION: Dungeon Crawler
// ==========================================

async function crawlDungeon(rooms) {
  const collectedLoot = [];
  let survived = 0;

  for (const room of rooms) {
    await delay(500);
    console.log(`  Entering: ${room.name}...`);

    try {
      if (room.trap) {
        throw new Error(`Trap activated in ${room.name}!`);
      }
      collectedLoot.push(room.loot);
      console.log(`  Collected: ${room.loot}`);
      survived++;
    } catch (error) {
      console.log(`  TRAP! Skipping loot in ${room.name}`);
    }
  }

  console.log("\n  Dungeon crawl complete!");
  console.log(`  Rooms survived: ${survived}/${rooms.length}`);
  console.log(`  Loot collected: [${collectedLoot.join(", ")}]`);
}

const dungeonRooms = [
  { name: "Entry Hall",      trap: false, loot: "Map" },
  { name: "Spike Room",      trap: true,  loot: "Shield" },
  { name: "Treasure Vault",  trap: false, loot: "Gold Crown" },
  { name: "Poison Chamber",  trap: true,  loot: "Magic Ring" },
  { name: "Exit",            trap: false, loot: "Freedom" },
];

setTimeout(async () => {
  console.log("\nBonus — Dungeon Crawler:");
  await crawlDungeon(dungeonRooms);
}, 15000);

// OUTPUT:
//   Entering: Entry Hall...
//   Collected: Map
//   Entering: Spike Room...
//   TRAP! Skipping loot in Spike Room
//   Entering: Treasure Vault...
//   Collected: Gold Crown
//   Entering: Poison Chamber...
//   TRAP! Skipping loot in Poison Chamber
//   Entering: Exit...
//   Collected: Freedom
//
//   Dungeon crawl complete!
//   Rooms survived: 3/5
//   Loot collected: [Map, Gold Crown, Freedom]

// WHY: This exercise combines everything from the Dungeon arc:
// - async/await for clean sequential flow (Day 21)
// - try/catch for error handling (Day 18)
// - Promises via the delay helper (Day 20)
// - for...of loop for proper async iteration (Day 21)
// - Array methods for collecting results
//
// The try/catch inside the loop is key — it lets each room fail
// independently without killing the whole crawl. This pattern
// (try/catch inside a loop) is used in real-world code for batch
// processing, API calls, and data migrations.
