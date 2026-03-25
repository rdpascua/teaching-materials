# Day 21: Mastering Time

## Quest: Learn async/await — the cleanest way to write asynchronous code

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> After learning the dragon's promise, you discover an even greater power
> hidden in the depths of the dungeon: **the ability to master time itself.**
>
> With this power, you don't need to set up chains of `.then()` callbacks.
> Instead, you simply **wait** for each result before moving to the next step.
> Your code reads like a story -- line by line, step by step -- even though
> asynchronous magic is happening behind the scenes.
>
> *"First, I enter the cave. Then I wait for the door to open. Then I grab
> the treasure."*
>
> That's `async/await`. It makes asynchronous code look and feel synchronous.
> It's built on top of Promises (everything you learned yesterday still
> applies), but with a much cleaner syntax.
>
> Today you master time.

---

## THE SPELL -- Core Concepts (~10 min)

### The async keyword

Adding `async` before a function makes it always return a Promise:

```js
async function enterDungeon() {
  return "You entered the dungeon!";
}

// This is the same as:
function enterDungeon() {
  return Promise.resolve("You entered the dungeon!");
}

enterDungeon().then(msg => console.log(msg));
// "You entered the dungeon!"
```

---

### The await keyword

`await` pauses the async function until a Promise settles. It can only
be used inside an `async` function:

```js
async function quest() {
  console.log("Starting quest...");

  const sword = await findSword();    // waits for this to resolve
  console.log("Found:", sword);

  const shield = await findShield();  // waits for this too
  console.log("Found:", shield);

  return "Quest complete!";
}
```

> **Key insight:** `await` doesn't block the entire program -- it only
> pauses the async function. Other code can still run while this
> function is waiting.

---

### Comparing Promise chains to async/await

**Promise chain version:**

```js
function runQuest() {
  return enterCave()
    .then(cave => lightTorch(cave))
    .then(torch => findTreasure(torch))
    .then(treasure => {
      console.log("Got:", treasure);
    })
    .catch(error => {
      console.log("Failed:", error);
    });
}
```

**Async/await version:**

```js
async function runQuest() {
  try {
    const cave = await enterCave();
    const torch = await lightTorch(cave);
    const treasure = await findTreasure(torch);
    console.log("Got:", treasure);
  } catch (error) {
    console.log("Failed:", error);
  }
}
```

Same behavior, but the async/await version reads like normal code.

---

### Error handling with try/catch

Since `await` throws on rejection, we use `try/catch` (Day 18!) to
handle errors:

```js
async function riskyQuest() {
  try {
    const result = await dangerousMission(); // might reject
    console.log("Success:", result);
  } catch (error) {
    console.log("Mission failed:", error.message);
  } finally {
    console.log("Mission debriefing complete.");
  }
}
```

---

### Sequential vs. Parallel execution

**Sequential (one after another):**

```js
async function sequential() {
  const sword = await findSword();    // wait 2s
  const shield = await findShield();  // then wait 2s more
  // Total: ~4 seconds
}
```

**Parallel (all at once):**

```js
async function parallel() {
  const [sword, shield] = await Promise.all([
    findSword(),    // starts immediately
    findShield(),   // starts immediately
  ]);
  // Total: ~2 seconds (the slower of the two)
}
```

> **Rule of thumb:** If tasks don't depend on each other, run them in
> parallel with `Promise.all`. If each task needs the result of the
> previous one, run them sequentially with `await`.

---

## THE BATTLE -- Live Demo (~10 min)

Walk through `examples.js` together. Run in Node.js or a browser.

Key demo moments:
1. Convert a `.then()` chain to async/await
2. Show error handling with try/catch inside async functions
3. Demonstrate the difference between sequential and parallel await
4. Show that async functions always return a Promise
5. Build a multi-step dungeon crawl with clean async/await

---

## THE LOOT -- Exercises (~5 min)

Hand out `exercises.js`. Students rewrite promise-based code using
async/await and build async dungeon adventures.

**Bonus Challenge (+15 XP):**
Build an async dungeon crawler that visits rooms sequentially,
handles traps with try/catch, and reports stats at the end.

---

## Quick Reference

```js
// Declare an async function
async function myFunc() { ... }
const myFunc = async () => { ... };

// Wait for a promise to resolve
const result = await somePromise;

// Error handling
try {
  const data = await riskyOperation();
} catch (error) {
  console.log(error.message);
}

// Sequential: each awaits the previous
const a = await step1();
const b = await step2(a);

// Parallel: start all, await together
const [a, b, c] = await Promise.all([task1(), task2(), task3()]);

// Async functions ALWAYS return a Promise
async function greet() { return "hi"; }
greet().then(msg => console.log(msg)); // "hi"
```
