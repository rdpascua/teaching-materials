# Day 19: The Ticking Clock

## Quest: Understand callbacks, timers, and how JavaScript handles time

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> The next chamber has a giant clock on the wall. Its gears grind ominously.
> In this room, time is a weapon. Doors only open after a delay. Traps fire
> on a repeating timer. Puzzles must be solved before the clock runs out.
>
> But here's the twist: **you can only do one thing at a time.** You can't
> fight a monster AND disarm a trap simultaneously. You have to finish one
> task, then start the next. When something is "waiting" (like a door
> opening in 5 seconds), you don't stand there frozen -- you do other
> things and come back when it's ready.
>
> This is how JavaScript works. It's **single-threaded** -- one task at a
> time. But it has a clever system for handling delays and repeating tasks
> without blocking everything else. Today you learn the ticking clock.

---

## THE SPELL -- Core Concepts (~10 min)

### JavaScript is Single-Threaded

JavaScript runs one line of code at a time. It uses a **call stack** --
a pile of tasks. When you call a function, it goes on the stack. When
it returns, it comes off.

```
Call Stack (one at a time):
┌─────────────────┐
│  disarmTrap()   │  ← currently running
│  openDoor()     │
│  enterRoom()    │
│  main()         │
└─────────────────┘
```

> **Analogy:** The call stack is like a stack of plates. You can only
> work on the top plate. When you finish, you take it off and work on
> the next one down.

---

### setTimeout -- Open this door in 3 seconds

```js
setTimeout(callback, delayInMs);
```

```js
console.log("Pulling the lever...");

setTimeout(function() {
  console.log("The door opens!"); // runs after 3 seconds
}, 3000);

console.log("Waiting..."); // runs IMMEDIATELY (doesn't wait for the timer!)
```

Output:
```
Pulling the lever...
Waiting...
The door opens!          ← appears 3 seconds later
```

> **Key insight:** `setTimeout` doesn't pause your code. It schedules
> a function to run later and moves on immediately.

---

### clearTimeout -- Cancel the trap!

```js
const trapTimer = setTimeout(() => {
  console.log("BOOM! Trap explodes!");
}, 5000);

// Changed your mind? Cancel it before it fires:
clearTimeout(trapTimer);
console.log("Trap disarmed!");
```

---

### setInterval -- Repeating trap

```js
const poisonTick = setInterval(() => {
  console.log("Poison deals 5 damage!");
}, 2000); // fires every 2 seconds

// Stop the poison after 10 seconds:
setTimeout(() => {
  clearInterval(poisonTick);
  console.log("Poison wears off.");
}, 10000);
```

---

### The Callback Pattern

A **callback** is a function you pass to another function, to be called later:

```js
function afterBattle(callback) {
  console.log("Fighting the monster...");
  // ... battle logic ...
  callback(); // call the function that was passed in
}

afterBattle(function() {
  console.log("Victory! Collecting loot...");
});
```

`setTimeout`, `setInterval`, `addEventListener` -- they all use callbacks.
The pattern is everywhere in JavaScript.

---

### Callback Hell -- A preview of the problem

When you nest callbacks inside callbacks, things get ugly fast:

```js
setTimeout(() => {
  console.log("Door 1 opens");
  setTimeout(() => {
    console.log("Door 2 opens");
    setTimeout(() => {
      console.log("Door 3 opens");
      setTimeout(() => {
        console.log("Door 4 opens");
        // This is callback hell. The pyramid of doom.
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
```

> Tomorrow we'll learn about **Promises** -- the solution to this mess.
> But it's important to see the problem first.

---

## THE BATTLE -- Live Demo (~10 min)

Walk through `examples.js` together. Run in Node.js or a browser console.

Key demo moments:
1. Show that `setTimeout` doesn't block -- code after it runs immediately
2. Set up a `setInterval` counter and clear it after a few ticks
3. Show `clearTimeout` cancelling a scheduled explosion
4. Demonstrate the call stack order with nested function calls
5. Show the "pyramid of doom" and why it's painful

---

## THE LOOT -- Exercises (~5 min)

Hand out `exercises.js`. Students build time-based dungeon puzzles.

**Bonus Challenge (+15 XP):**
Build a countdown timer that counts from 10 to 0, logs each second,
and announces "TIME'S UP!" at the end.

---

## Quick Reference

| Function | What it does | Returns |
|----------|-------------|---------|
| `setTimeout(fn, ms)` | Run `fn` once after `ms` milliseconds | Timer ID |
| `clearTimeout(id)` | Cancel a pending `setTimeout` | void |
| `setInterval(fn, ms)` | Run `fn` every `ms` milliseconds | Timer ID |
| `clearInterval(id)` | Stop a running `setInterval` | void |

```
1000 ms = 1 second
Key concept: timers don't block — JS schedules them and moves on
```
