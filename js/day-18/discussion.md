# Day 18: The Trap Room

## Quest: Learn to catch errors before they crash your program

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> You enter a room lined with suspicious floor tiles. Every step could
> trigger a trap -- poison darts, falling boulders, collapsing floors.
> An experienced adventurer doesn't avoid the traps entirely (that's
> impossible). Instead, they **anticipate** them and **catch** the danger
> before it kills them.
>
> That's error handling. Your code WILL encounter unexpected situations:
> a user types letters where you expected numbers, a network request fails,
> you try to access a property on `undefined`. Without error handling,
> your program dies instantly. With it, you catch the trap, deal with it
> gracefully, and keep moving.
>
> Today you learn to survive the Trap Room.

---

## THE SPELL -- Core Concepts (~10 min)

### try / catch -- The trap detector

```js
try {
  // Code that MIGHT trigger a trap
  const weapon = getWeaponFromChest(); // might throw an error
  console.log("Got the weapon!");
} catch (error) {
  // This runs ONLY if something went wrong in the try block
  console.log("Trap triggered:", error.message);
}
```

If `getWeaponFromChest()` throws an error, execution jumps immediately
to the `catch` block. The rest of the `try` block is skipped.

If nothing goes wrong, `catch` is skipped entirely.

---

### finally -- Always runs, no matter what

```js
try {
  openDungeonDoor();
} catch (error) {
  console.log("Door is jammed:", error.message);
} finally {
  // This ALWAYS runs — whether try succeeded or catch fired
  console.log("Putting away the key...");
}
```

> **Analogy:** `finally` is like the adventurer's rule: "Always sheathe
> your sword after a fight, whether you won or lost."
> Use it for cleanup: closing files, resetting state, clearing timers.

---

### Error Types -- Knowing your traps

JavaScript has built-in error types:

| Error Type | When it happens |
|-----------|-----------------|
| `TypeError` | Wrong type: calling `.push()` on a number |
| `ReferenceError` | Using a variable that doesn't exist |
| `SyntaxError` | Code is written incorrectly (rarely caught at runtime) |
| `RangeError` | Number out of allowed range (e.g., `new Array(-1)`) |

```js
try {
  let monster = undefined;
  monster.attack();  // TypeError: Cannot read properties of undefined
} catch (e) {
  console.log(e.name);    // "TypeError"
  console.log(e.message); // "Cannot read properties of undefined (reading 'attack')"
  console.log(e.stack);   // Full stack trace (shows where the error happened)
}
```

---

### throw -- Setting your own traps

You can create and throw your own errors:

```js
function drinkPotion(potion) {
  if (!potion) {
    throw new Error("No potion to drink!");
  }
  if (potion.expired) {
    throw new Error("This potion has expired! It might be poison.");
  }
  console.log(`You drank ${potion.name}. HP restored!`);
}
```

You can throw specific error types:

```js
throw new TypeError("Expected a string, got a number");
throw new RangeError("Level must be between 1 and 99");
```

> **When to throw:** Throw errors when your function receives input it
> cannot work with. This signals to the caller: "Hey, something is wrong.
> You need to handle this."

---

### The Error Object

Every error has three key properties:

```js
const err = new Error("The bridge collapsed!");
console.log(err.name);    // "Error"
console.log(err.message); // "The bridge collapsed!"
console.log(err.stack);   // Stack trace: shows file, line number, call chain
```

---

## THE BATTLE -- Live Demo (~10 min)

Walk through `examples.js` together. Run in Node.js or a browser console.

Key demo moments:
1. Show a `TypeError` crashing a program, then wrap it in try/catch
2. Demonstrate the `finally` block running regardless of success/failure
3. Throw a custom error and catch it
4. Show the difference between error types using `instanceof`
5. Build a "safe divide" function that throws on division by zero

---

## THE LOOT -- Exercises (~5 min)

Hand out `exercises.js`. Students practice catching and throwing errors
in dungeon-themed scenarios.

**Bonus Challenge (+15 XP):**
Build a `navigateTrapCorridor` function that processes an array of
"rooms," each of which might throw different error types.

---

## Quick Reference

```
try {
  // risky code
} catch (error) {
  // handle the error
  error.name       // "TypeError", "ReferenceError", etc.
  error.message    // human-readable description
  error.stack      // stack trace
} finally {
  // always runs (optional)
}

throw new Error("message");       // generic error
throw new TypeError("message");   // type-specific error

// Check error type:
error instanceof TypeError        // true/false
```
