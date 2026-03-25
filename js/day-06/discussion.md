# Day 6: The Training Grounds

## Quest: Master loops to repeat actions and level up efficiently

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> Behind the village blacksmith, past the well, lies a wide dirt clearing
> surrounded by wooden dummies and training posts. This is **The Training
> Grounds** — where every hero in CodeVille earns their stripes.
>
> **Captain Renn**, the drill instructor, stands with arms crossed.
>
> "Swinging a sword once won't make you a warrior," he barks. "You need to
> swing it a hundred times. A thousand times. You need **repetition**."
>
> He points at the training dummies. "In code, repetition is called a
> **loop**. You tell JavaScript: 'Do this action X times' or 'Keep doing
> this until I say stop.' Today you learn three types of loops — and the
> commands to **break** out of one or **skip** ahead."

---

## THE SPELL — Core Concepts (~10 min)

### for Loop — "Counted Training Reps"

Use `for` when you **know how many times** to repeat.

```js
// Swing the sword 5 times
for (let rep = 1; rep <= 5; rep++) {
  console.log("Swing #" + rep);
}
// Swing #1, Swing #2, ... Swing #5
```

**Anatomy of a for loop:**

```
for (initialization; condition; update) {
      ↑                 ↑          ↑
  runs once         checked      runs after
  at start         each time    each iteration
}
```

```js
for (let i = 0; i < 3; i++) {
  // i starts at 0
  // runs while i < 3
  // after each loop, i goes up by 1
}
```

---

### while Loop — "Train Until Exhausted"

Use `while` when you **don't know how many times** — just keep going
while a condition is true.

```js
let stamina = 10;

while (stamina > 0) {
  console.log("Training! Stamina: " + stamina);
  stamina -= 3;
}
console.log("Exhausted! Stamina: " + stamina);
```

> **Warning:** If the condition never becomes false, you get an
> **infinite loop** and your program freezes. Always make sure
> something inside the loop moves you toward the exit condition.

---

### do...while Loop — "Try At Least Once"

Like `while`, but the body runs **at least once** before checking
the condition.

```js
let attempts = 0;
let doorOpen = false;

do {
  attempts++;
  console.log("Attempt #" + attempts + " to pick the lock...");
  doorOpen = attempts >= 3;  // succeeds on 3rd try
} while (!doorOpen);

console.log("Door opened after " + attempts + " attempts!");
```

> **When to use:** When you want the action to happen at least once
> regardless of the condition. Example: showing a menu, asking for input.

---

### break — "Stop Training Early"

`break` immediately exits the loop.

```js
for (let i = 1; i <= 100; i++) {
  if (i === 5) {
    console.log("Found it at " + i + "! Stopping.");
    break;  // exits the entire loop
  }
  console.log("Searching... " + i);
}
```

---

### continue — "Skip This Rep"

`continue` skips the rest of the current iteration and goes to the next one.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping rep " + i);
    continue;  // skip to next iteration
  }
  console.log("Completed rep " + i);
}
// Completed rep 1, Completed rep 2, Skipping rep 3, Completed rep 4, Completed rep 5
```

---

### Nested Loops — "Double Training"

A loop inside a loop. The inner loop runs completely for each iteration
of the outer loop.

```js
for (let round = 1; round <= 3; round++) {
  for (let swing = 1; swing <= 2; swing++) {
    console.log(`Round ${round}, Swing ${swing}`);
  }
}
// Round 1 Swing 1, Round 1 Swing 2, Round 2 Swing 1, ...
// Total: 3 x 2 = 6 lines
```

---

## THE BATTLE — Live Demo (~10 min)

Walk through `examples.js` together. Key demo moments:

1. for loop counting reps — show the three parts clearly
2. while loop draining stamina — show how it exits
3. do...while — prove it runs at least once even with a false condition
4. break — searching through enemies and stopping early
5. continue — skipping certain iterations
6. Nested loops — a grid/pattern exercise

---

## THE LOOT — Exercises (~5 min)

Hand out `exercises.js`. Students work through 5 bite-sized problems.

**Bonus Challenge (+15 XP):**
Build a dungeon floor generator using nested loops.

---

## Quick Reference

| Loop | Use When | Runs At Least Once? |
|------|----------|-------------------|
| `for` | You know the count | No (if condition is false initially) |
| `while` | Unknown count, condition-based | No |
| `do...while` | Must run at least once | Yes |

| Keyword | What It Does |
|---------|-------------|
| `break` | Exit the entire loop immediately |
| `continue` | Skip current iteration, go to next |
