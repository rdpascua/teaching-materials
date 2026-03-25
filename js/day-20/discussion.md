# Day 20: The Dragon's Promise

## Quest: Learn how Promises tame asynchronous code

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> You've reached the dragon's chamber. The beast is ancient, cunning, and
> surprisingly talkative. It doesn't attack you. Instead, it makes you
> a **promise**:
>
> *"Bring me the Crystal of Shadows, and I will give you passage through
> my domain. Fail, and you will burn."*
>
> A promise has three possible states:
> - **Pending** -- You haven't returned yet. The dragon waits.
> - **Fulfilled** -- You brought the crystal. The dragon keeps its word.
> - **Rejected** -- You failed. The dragon breathes fire.
>
> In JavaScript, a `Promise` works the same way. It represents a value
> that doesn't exist yet but will (or won't) in the future. It's the
> answer to callback hell -- instead of nesting functions ten levels deep,
> you chain clean, readable `.then()` calls.
>
> Today the dragon teaches you the art of the Promise.

---

## THE SPELL -- Core Concepts (~10 min)

### What is a Promise?

A Promise is an object that represents the eventual result of an
asynchronous operation. It's always in one of three states:

```
   PENDING ───→ FULFILLED (resolved with a value)
      │
      └──────→ REJECTED  (failed with a reason/error)
```

Once a promise is fulfilled or rejected, it's **settled** -- it can
never change state again.

---

### Creating a Promise

```js
const dragonPromise = new Promise(function(resolve, reject) {
  // Do some async work...
  const broughtCrystal = true;

  if (broughtCrystal) {
    resolve("The dragon grants you passage!"); // fulfilled
  } else {
    reject("The dragon breathes fire!");        // rejected
  }
});
```

`resolve` and `reject` are functions provided by JavaScript. You call
one or the other to settle the promise.

---

### Consuming a Promise: .then(), .catch(), .finally()

```js
dragonPromise
  .then(function(result) {
    // Runs if the promise was FULFILLED
    console.log(result); // "The dragon grants you passage!"
  })
  .catch(function(error) {
    // Runs if the promise was REJECTED
    console.log(error);  // "The dragon breathes fire!"
  })
  .finally(function() {
    // ALWAYS runs, regardless of outcome
    console.log("The encounter with the dragon is over.");
  });
```

---

### Chaining Promises -- Sequential quests

The real power of promises is **chaining**. Each `.then()` returns a
new promise, so you can link steps together:

```js
findCrystal()
  .then(crystal => enchantCrystal(crystal))
  .then(enchanted => deliverToDragon(enchanted))
  .then(reward => console.log("Reward:", reward))
  .catch(error => console.log("Quest failed:", error));
```

Compare this to callback hell:

```js
// Callback hell version (ugly):
findCrystal(crystal => {
  enchantCrystal(crystal, enchanted => {
    deliverToDragon(enchanted, reward => {
      console.log("Reward:", reward);
    });
  });
});
```

The chained version is flat, readable, and has ONE error handler.

---

### Promise.all -- Party quest (all must succeed)

```js
const quest1 = findSword();
const quest2 = findShield();
const quest3 = findHelmet();

Promise.all([quest1, quest2, quest3])
  .then(results => {
    console.log("All gear found:", results);
    // results is an array: [sword, shield, helmet]
  })
  .catch(error => {
    console.log("A quest failed:", error);
    // If ANY one fails, the whole thing rejects
  });
```

---

### Promise.race -- First one to finish wins

```js
const heroAttempt = new Promise(resolve =>
  setTimeout(() => resolve("Hero wins!"), 2000)
);

const trapTimer = new Promise((_, reject) =>
  setTimeout(() => reject("Trap sprung!"), 3000)
);

Promise.race([heroAttempt, trapTimer])
  .then(result => console.log(result))   // "Hero wins!" (faster)
  .catch(error => console.log(error));
```

---

## THE BATTLE -- Live Demo (~10 min)

Walk through `examples.js` together. Run in Node.js or a browser.

Key demo moments:
1. Create a simple promise and resolve/reject it
2. Chain `.then()` calls and show how values flow through the chain
3. Show error propagation -- one `.catch()` handles any failure in the chain
4. Demonstrate `Promise.all` with multiple async tasks
5. Race two promises and see which one wins

---

## THE LOOT -- Exercises (~5 min)

Hand out `exercises.js`. Students build promise-based dungeon quests.

**Bonus Challenge (+15 XP):**
Build a `dungeonRaid` that uses `Promise.all` to run three quests in
parallel and reports the results.

---

## Quick Reference

```js
// Create
new Promise((resolve, reject) => { ... })

// Consume
promise.then(value => {})    // on success
promise.catch(error => {})   // on failure
promise.finally(() => {})    // always runs

// Chain
doA().then(a => doB(a)).then(b => doC(b)).catch(err => {})

// Combine
Promise.all([p1, p2, p3])   // wait for ALL (fails if any fails)
Promise.race([p1, p2])      // first to settle wins
Promise.allSettled([p1, p2]) // wait for all, never rejects
Promise.any([p1, p2])       // first to FULFILL wins
```
