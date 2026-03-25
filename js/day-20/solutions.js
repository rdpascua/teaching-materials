// ============================================
// Day 20 Solutions: The Dragon's Promise
// ============================================


// ------------------------------------------
// EXERCISE 1: Make a Promise
// ------------------------------------------

function dragonRiddle() {
  return new Promise((resolve, reject) => {
    const answer = Math.floor(Math.random() * 10) + 1; // 1–10

    if (answer > 3) {
      resolve("Correct! The dragon is pleased.");
    } else {
      reject("Wrong answer! The dragon growls.");
    }
  });
}

dragonRiddle()
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Failure:", error))
  .finally(() => console.log("The riddle round is over."));

// WHY: new Promise takes a function with resolve/reject parameters.
// Calling resolve settles the promise as fulfilled (triggers .then).
// Calling reject settles it as rejected (triggers .catch).
// .finally runs regardless of outcome — perfect for cleanup.


// ------------------------------------------
// EXERCISE 2: Promise Chain
// ------------------------------------------

function enterCave() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Entered the dark cave"), 500);
  });
}

function lightTorch(message) {
  return new Promise(resolve => {
    setTimeout(() => resolve(message + " → Torch lit!"), 500);
  });
}

function findTreasure(message) {
  return new Promise(resolve => {
    setTimeout(() => resolve(message + " → Found gold!"), 500);
  });
}

enterCave()
  .then(result => lightTorch(result))
  .then(result => findTreasure(result))
  .then(result => console.log("Quest complete:", result))
  .catch(error => console.log("Quest failed:", error));

// Output (after ~1.5 seconds):
// Quest complete: Entered the dark cave → Torch lit! → Found gold!

// WHY: Each .then() receives the resolved value from the previous promise.
// When you return a promise from .then(), the next .then() waits for it.
// Values flow through the chain like items on a conveyor belt.


// ------------------------------------------
// EXERCISE 3: Error in the Chain
// ------------------------------------------

function lightTorchBroken(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("The torch broke! Too damp in here.");
    }, 500);
  });
}

enterCave()
  .then(result => {
    console.log("Step 1:", result);
    return lightTorchBroken(result);  // this rejects!
  })
  .then(result => {
    console.log("Step 2:", result);   // SKIPPED — previous step rejected
    return findTreasure(result);
  })
  .then(result => {
    console.log("Step 3:", result);   // SKIPPED — chain is broken
  })
  .catch(error => {
    console.log("Quest failed:", error);
  });

// Output:
// Step 1: Entered the dark cave
// Quest failed: The torch broke! Too damp in here.

// WHY: When a promise in the chain rejects, ALL subsequent .then() calls
// are skipped. The error jumps straight to the nearest .catch().
// This is much cleaner than having error callbacks at every level.


// ------------------------------------------
// EXERCISE 4: Promise.race — Beat the Clock
// ------------------------------------------

// Hero wins (2s < 3s)
const heroEscape = new Promise(resolve =>
  setTimeout(() => resolve("Hero escaped!"), 2000)
);

const wallsClose = new Promise((_, reject) =>
  setTimeout(() => reject("Walls crushed the hero!"), 3000)
);

Promise.race([heroEscape, wallsClose])
  .then(result => console.log(result))    // "Hero escaped!"
  .catch(error => console.log(error));

// Walls win version (swap the timings):
const heroSlow = new Promise(resolve =>
  setTimeout(() => resolve("Hero escaped!"), 4000)
);

const wallsFast = new Promise((_, reject) =>
  setTimeout(() => reject("Walls crushed the hero!"), 2500)
);

Promise.race([heroSlow, wallsFast])
  .then(result => console.log(result))
  .catch(error => console.log(error));    // "Walls crushed the hero!"

// WHY: Promise.race resolves or rejects with whichever promise settles
// first. It's useful for timeouts: race a real operation against a
// timer, and if the timer wins, you know the operation took too long.


// ------------------------------------------
// EXERCISE 5: Promisify a Callback
// ------------------------------------------

// Original callback version (for reference):
function openChestCB(chestId, callback) {
  setTimeout(() => {
    if (chestId > 0) {
      callback(null, `Chest #${chestId} contains a ruby!`);
    } else {
      callback("Invalid chest ID!");
    }
  }, 1000);
}

// Promisified version:
function openChest(chestId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (chestId > 0) {
        resolve(`Chest #${chestId} contains a ruby!`);
      } else {
        reject("Invalid chest ID!");
      }
    }, 1000);
  });
}

openChest(5).then(console.log).catch(console.log);
// "Chest #5 contains a ruby!"

openChest(-1).then(console.log).catch(console.log);
// "Invalid chest ID!"

// WHY: "Promisifying" means wrapping callback-based code in a Promise.
// Instead of calling callback(error) on failure, we call reject(error).
// Instead of callback(null, result) on success, we call resolve(result).
// This lets us use .then/.catch instead of the callback pattern.
// Most modern APIs already return promises, but you'll encounter older
// callback-based code that needs this treatment.


// ==========================================
// BONUS CHALLENGE SOLUTION: Dungeon Raid
// ==========================================

function slayDragon() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ quest: "dragon", xp: 500 }), 2000);
  });
}

function rescuePrincess() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ quest: "rescue", xp: 300 }), 1000);
  });
}

function findArtifact() {
  return new Promise(resolve => {
    setTimeout(() => resolve({ quest: "artifact", xp: 200 }), 1500);
  });
}

function dungeonRaid() {
  return Promise.all([slayDragon(), rescuePrincess(), findArtifact()])
    .then(results => {
      results.forEach(r => console.log(`  Quest "${r.quest}" — XP: ${r.xp}`));

      const totalXP = results.reduce((sum, r) => sum + r.xp, 0);
      console.log(`Raid complete! Total XP earned: ${totalXP}`);

      return totalXP;
    })
    .catch(error => {
      console.log("Raid failed:", error);
    });
}

dungeonRaid();
// Output (after ~2 seconds — the slowest quest):
//   Quest "dragon" — XP: 500
//   Quest "rescue" — XP: 300
//   Quest "artifact" — XP: 200
//   Raid complete! Total XP earned: 1000

// WHY: Promise.all runs all three quests simultaneously, not one after
// another. The total time is ~2 seconds (the slowest quest), not
// ~4.5 seconds (all added together). This is parallel execution.
// The results array preserves order — [dragon, rescue, artifact] —
// even though rescue finished first.
// If any quest rejected, the entire .catch() would fire immediately.
