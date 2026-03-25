// ============================================
// Day 20: The Dragon's Promise
// Topic: Promises
// ============================================
// Run in Node.js or a browser console.


// ------------------------------------------
// EXAMPLE 1: Creating a basic Promise
// ------------------------------------------

console.log("=== Example 1: Basic Promise ===");

const dragonDeal = new Promise((resolve, reject) => {
  const broughtOffering = true;

  if (broughtOffering) {
    resolve("The dragon nods. You may pass.");
  } else {
    reject("The dragon roars with fury!");
  }
});

dragonDeal
  .then(result => console.log("Success:", result))
  .catch(error => console.log("Failure:", error));

// Output: "Success: The dragon nods. You may pass."


// ------------------------------------------
// EXAMPLE 2: Promise with async delay
// ------------------------------------------

console.log("\n=== Example 2: Async Promise ===");

function searchForCrystal() {
  return new Promise((resolve, reject) => {
    console.log("Searching the cave...");

    setTimeout(() => {
      const found = Math.random() > 0.3; // 70% success rate

      if (found) {
        resolve("Crystal of Shadows");
      } else {
        reject("The cave was empty!");
      }
    }, 1500);
  });
}

searchForCrystal()
  .then(crystal => console.log("Found:", crystal))
  .catch(error => console.log("Failed:", error))
  .finally(() => console.log("Search complete."));


// ------------------------------------------
// EXAMPLE 3: Chaining .then() calls
// ------------------------------------------

setTimeout(() => {
  console.log("\n=== Example 3: Chaining ===");

  function findSword() {
    return new Promise(resolve => {
      setTimeout(() => resolve("Dragon Slayer Sword"), 500);
    });
  }

  function enchantWeapon(weapon) {
    return new Promise(resolve => {
      setTimeout(() => resolve(`Enchanted ${weapon}`), 500);
    });
  }

  function equipWeapon(weapon) {
    return new Promise(resolve => {
      setTimeout(() => resolve(`${weapon} equipped! +50 ATK`), 500);
    });
  }

  // Each .then() receives the value from the previous step
  findSword()
    .then(sword => {
      console.log("Step 1:", sword);
      return enchantWeapon(sword); // pass result to next .then()
    })
    .then(enchanted => {
      console.log("Step 2:", enchanted);
      return equipWeapon(enchanted);
    })
    .then(result => {
      console.log("Step 3:", result);
    })
    .catch(error => {
      console.log("Quest failed:", error);
    });

  // Output:
  // Step 1: Dragon Slayer Sword        (at 0.5s)
  // Step 2: Enchanted Dragon Slayer Sword  (at 1.0s)
  // Step 3: Enchanted Dragon Slayer Sword equipped! +50 ATK  (at 1.5s)
}, 2000);


// ------------------------------------------
// EXAMPLE 4: Error propagation in chains
// ------------------------------------------

setTimeout(() => {
  console.log("\n=== Example 4: Error propagation ===");

  function step1() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Step 1: Entered the cave.");
        resolve("torch");
      }, 300);
    });
  }

  function step2(item) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Step 2: Lighting the " + item + "...");
        reject("The torch went out! Too damp."); // This step fails!
      }, 300);
    });
  }

  function step3() {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("Step 3: Found the treasure!"); // Never reaches here
        resolve("treasure");
      }, 300);
    });
  }

  step1()
    .then(result => step2(result))
    .then(result => step3())   // skipped because step2 rejected
    .then(result => console.log("Victory!", result)) // also skipped
    .catch(error => console.log("Failed at:", error));
  // Output:
  // Step 1: Entered the cave.
  // Step 2: Lighting the torch...
  // Failed at: The torch went out! Too damp.
  // Step 3 NEVER runs — the error jumps straight to .catch()
}, 4500);


// ------------------------------------------
// EXAMPLE 5: Promise.all — parallel quests
// ------------------------------------------

setTimeout(() => {
  console.log("\n=== Example 5: Promise.all ===");

  const findSword = new Promise(resolve =>
    setTimeout(() => resolve("Flame Blade"), 1000)
  );

  const findShield = new Promise(resolve =>
    setTimeout(() => resolve("Dragon Scale Shield"), 800)
  );

  const findPotion = new Promise(resolve =>
    setTimeout(() => resolve("Mega Health Potion"), 600)
  );

  // All three run at the same time! Results come back as an array.
  Promise.all([findSword, findShield, findPotion])
    .then(([sword, shield, potion]) => {
      console.log("Gear collected:");
      console.log("  Weapon:", sword);
      console.log("  Shield:", shield);
      console.log("  Potion:", potion);
    })
    .catch(error => console.log("A quest failed:", error));

  // All finish around 1 second (the slowest one), not 2.4 seconds total.
  // That's the power of running in parallel!
}, 6000);


// ------------------------------------------
// EXAMPLE 6: Promise.all — one failure ruins all
// ------------------------------------------

setTimeout(() => {
  console.log("\n=== Example 6: Promise.all failure ===");

  const quest1 = new Promise(resolve =>
    setTimeout(() => resolve("Completed quest 1"), 500)
  );

  const quest2 = new Promise((_, reject) =>
    setTimeout(() => reject("Quest 2 failed — ambush!"), 300)
  );

  const quest3 = new Promise(resolve =>
    setTimeout(() => resolve("Completed quest 3"), 700)
  );

  Promise.all([quest1, quest2, quest3])
    .then(results => console.log("All done:", results))
    .catch(error => console.log("Raid failed:", error));

  // Output: "Raid failed: Quest 2 failed — ambush!"
  // Promise.all rejects as soon as ANY promise rejects.
}, 8000);


// ------------------------------------------
// EXAMPLE 7: Promise.race — first to finish
// ------------------------------------------

setTimeout(() => {
  console.log("\n=== Example 7: Promise.race ===");

  const heroRun = new Promise(resolve =>
    setTimeout(() => resolve("Hero reached the exit!"), 2000)
  );

  const boulderRoll = new Promise((_, reject) =>
    setTimeout(() => reject("Boulder crushed the hero!"), 3000)
  );

  Promise.race([heroRun, boulderRoll])
    .then(result => console.log(result))   // "Hero reached the exit!"
    .catch(error => console.log(error));

  // The hero's promise resolves first (2s < 3s), so .then() fires.
  // The boulder promise still completes, but nobody listens to it.
}, 9500);


// ------------------------------------------
// EXAMPLE 8: Wrapping setTimeout in a Promise
// ------------------------------------------

setTimeout(() => {
  console.log("\n=== Example 8: Promisified delay ===");

  // This utility is incredibly useful — you'll use it everywhere
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  delay(1000)
    .then(() => console.log("1 second passed"))
    .then(() => delay(1000))
    .then(() => console.log("2 seconds passed"))
    .then(() => delay(1000))
    .then(() => console.log("3 seconds passed — done!"));

  // Clean sequential delays without nesting!
}, 13000);
