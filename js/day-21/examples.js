// ============================================
// Day 21: Mastering Time
// Topic: Async/Await
// ============================================
// Run in Node.js (v14+) or a modern browser console.


// ------------------------------------------
// HELPER: Simulates an async operation
// ------------------------------------------

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// ------------------------------------------
// EXAMPLE 1: async function basics
// ------------------------------------------

async function heroGreeting() {
  return "Greetings, time master!";
}

// async functions ALWAYS return a Promise
heroGreeting().then(msg => console.log("Example 1:", msg));
// "Greetings, time master!"


// ------------------------------------------
// EXAMPLE 2: await pauses until the promise resolves
// ------------------------------------------

async function openMagicDoor() {
  console.log("\nExample 2: Approaching the door...");

  await delay(1000); // waits 1 second
  console.log("The runes glow...");

  await delay(1000); // waits another second
  console.log("The door opens!");

  return "You may enter.";
}

openMagicDoor().then(result => console.log(result));


// ------------------------------------------
// EXAMPLE 3: Converting a .then() chain to async/await
// ------------------------------------------

// --- Promise chain version ---
function questWithThen() {
  return delay(500)
    .then(() => {
      console.log("Chain: Entered the cave");
      return delay(500);
    })
    .then(() => {
      console.log("Chain: Lit the torch");
      return delay(500);
    })
    .then(() => {
      console.log("Chain: Found the treasure!");
    });
}

// --- async/await version (same behavior, cleaner syntax) ---
async function questWithAwait() {
  await delay(500);
  console.log("Async: Entered the cave");

  await delay(500);
  console.log("Async: Lit the torch");

  await delay(500);
  console.log("Async: Found the treasure!");
}

// Run both after the door example finishes
setTimeout(async () => {
  console.log("\nExample 3a: Promise chain");
  await questWithThen();

  console.log("\nExample 3b: Async/await");
  await questWithAwait();
}, 3000);


// ------------------------------------------
// EXAMPLE 4: Error handling with try/catch
// ------------------------------------------

async function riskyMission() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      if (success) {
        resolve("Mission accomplished! Got the artifact.");
      } else {
        reject(new Error("Ambush! The mission failed."));
      }
    }, 500);
  });
}

setTimeout(async () => {
  console.log("\nExample 4: Error handling");

  try {
    const result = await riskyMission();
    console.log("Success:", result);
  } catch (error) {
    console.log("Caught:", error.message);
  } finally {
    console.log("Mission debrief complete.");
  }
}, 6000);


// ------------------------------------------
// EXAMPLE 5: Sequential vs Parallel
// ------------------------------------------

async function findSword() {
  await delay(1000);
  return "Flame Sword";
}

async function findShield() {
  await delay(1000);
  return "Ice Shield";
}

async function findHelmet() {
  await delay(1000);
  return "Thunder Helm";
}

setTimeout(async () => {
  // SEQUENTIAL — one after another
  console.log("\nExample 5a: Sequential execution");
  const startSeq = Date.now();

  const sword = await findSword();
  const shield = await findShield();
  const helmet = await findHelmet();

  const seqTime = Date.now() - startSeq;
  console.log(`  Found: ${sword}, ${shield}, ${helmet}`);
  console.log(`  Time: ~${Math.round(seqTime / 100) * 100}ms (about 3 seconds)`);

  // PARALLEL — all at once
  console.log("\nExample 5b: Parallel execution");
  const startPar = Date.now();

  const [sword2, shield2, helmet2] = await Promise.all([
    findSword(),
    findShield(),
    findHelmet(),
  ]);

  const parTime = Date.now() - startPar;
  console.log(`  Found: ${sword2}, ${shield2}, ${helmet2}`);
  console.log(`  Time: ~${Math.round(parTime / 100) * 100}ms (about 1 second!)`);
}, 7500);


// ------------------------------------------
// EXAMPLE 6: Async arrow functions
// ------------------------------------------

const castSpell = async (spellName) => {
  await delay(500);
  return `${spellName} activated!`;
};

setTimeout(async () => {
  console.log("\nExample 6:", await castSpell("Fireball"));
}, 12000);


// ------------------------------------------
// EXAMPLE 7: Looping with async/await
// ------------------------------------------

setTimeout(async () => {
  console.log("\nExample 7: Async loop — exploring rooms");

  const rooms = ["Entry Hall", "Armory", "Library", "Throne Room"];

  for (const room of rooms) {
    await delay(500);
    console.log(`  Explored: ${room}`);
  }

  console.log("  All rooms explored!");

  // NOTE: forEach does NOT work with await!
  // rooms.forEach(async (room) => { await delay(500); ... })
  // ^^^ This fires all at once, doesn't wait. Use for...of instead.
}, 13000);


// ------------------------------------------
// EXAMPLE 8: Real-world pattern — fetch-like async function
// ------------------------------------------

// Simulating a data fetch
async function fetchQuestData(questId) {
  await delay(800); // simulate network delay

  const quests = {
    1: { name: "Slay the Dragon", reward: 500 },
    2: { name: "Rescue the Princess", reward: 300 },
    3: { name: "Find the Holy Grail", reward: 1000 },
  };

  const quest = quests[questId];
  if (!quest) {
    throw new Error(`Quest #${questId} not found!`);
  }

  return quest;
}

setTimeout(async () => {
  console.log("\nExample 8: Fetch-like pattern");

  try {
    const quest = await fetchQuestData(1);
    console.log(`  Quest: ${quest.name}, Reward: ${quest.reward} gold`);

    const missing = await fetchQuestData(99);
    console.log(missing); // never reaches here
  } catch (error) {
    console.log(`  Error: ${error.message}`);
  }
}, 16000);
