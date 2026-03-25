# Day 1: The Three Treasure Chests

## Quest: Learn how to store things in JavaScript

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> Welcome, adventurer! You've just arrived in **CodeVille** — a small village
> where every hero begins their journey. Before you can fight monsters or cast
> spells, you need to learn the most basic survival skill: **storing things.**
>
> In CodeVille, there are three types of treasure chests:
>
> - **`var`** — The old wooden chest. It's been around forever. It's a bit
>   weird — sometimes things fall out, sometimes things appear in it before
>   you even put them there. Unreliable, but hey, it works.
>
> - **`let`** — The iron chest. Modern. Sturdy. You can swap out what's
>   inside whenever you want, but it stays where you put it.
>
> - **`const`** — The enchanted chest. Once you lock something inside,
>   **it can never be replaced.** The ultimate safe.
>
> Today you'll learn how these three chests work, why the old wooden one is
> cursed, and which ones the pros actually use.

---

## THE SPELL — Core Concepts (~10 min)

### What is a variable?

A variable is a **label** you attach to a piece of data so you can use it later.

Think of it like a name tag on a box:

```
[ "Sword of Fire" ]  ← the value
      ↑
   weapon            ← the variable name
```

In JavaScript, you create variables using one of three keywords:

```js
var weapon = "Rusty Sword";
let health = 100;
const heroName = "Aria";
```

---

### `var` — The Old Wooden Chest

`var` has been in JavaScript since the very beginning (1995). It works, but it
has two quirks that trip people up:

**Quirk 1: It ignores blocks**

```js
if (true) {
  var secret = "I leak out!";
}
console.log(secret); // "I leak out!"  ← var escapes the if block!
```

With `let` this wouldn't happen — the variable stays inside the block.

**Quirk 2: Hoisting — it floats to the top**

```js
console.log(ghost); // undefined  ← no error?!
var ghost = "Boo!";
```

JavaScript silently moves the **declaration** (not the value) to the top:

```js
// What JS actually does behind the scenes:
var ghost;              // declaration hoisted up here
console.log(ghost);     // undefined
ghost = "Boo!";         // assignment stays here
```

> **Analogy:** Imagine the wooden chest magically appears at the entrance of
> the room the moment you walk in — but it's empty. The treasure only shows
> up when you physically reach the spot where you put it in.

---

### `let` — The Iron Chest

Introduced in ES6 (2015). Fixes both quirks of `var`:

**Respects blocks:**

```js
if (true) {
  let secret = "I stay inside!";
}
console.log(secret); // ReferenceError! secret is not defined
```

**No hoisting surprises (TDZ):**

```js
console.log(shield); // ReferenceError! Cannot access before initialization
let shield = "Wooden Shield";
```

> **TDZ = Temporal Dead Zone.** The zone between the start of the block and
> the line where `let` is declared. If you try to use the variable in this
> zone, JavaScript throws an error. This is actually **good** — it catches
> bugs early.

**You CAN reassign `let`:**

```js
let mood = "happy";
mood = "excited";  // totally fine
```

---

### `const` — The Enchanted Chest

Also ES6. Same block-scoping as `let`, but with one extra rule:
**you cannot reassign it.**

```js
const birthYear = 1995;
birthYear = 2000; // TypeError: Assignment to constant variable!
```

**Important gotcha:** `const` prevents reassignment, NOT mutation.

```js
const inventory = ["Sword", "Shield"];
inventory.push("Potion");  // This works! The array is mutated, not reassigned.
console.log(inventory);    // ["Sword", "Shield", "Potion"]
```

> **Analogy:** The enchanted chest is bolted to the floor — you can't swap it
> for a different chest. But you CAN open the lid and rearrange what's inside.

---

### When to use what?

```
const  →  Use by default. Always start here.
let    →  Use when you KNOW the value will change (counters, toggles).
var    →  Never use in modern code. Pretend it doesn't exist.
```

This is the rule used in every professional codebase today.

---

## THE BATTLE — Live Demo (~10 min)

Walk through `examples.js` together. Run each snippet in the console or
Node.js and predict the output before hitting Enter.

Key demo moments:
1. Show `var` leaking out of an `if` block vs `let` staying contained
2. Show hoisting: `console.log(x)` before `var x` vs before `let x`
3. Show `const` preventing reassignment but allowing `.push()` on an array
4. Show TDZ in action with `let`

---

## THE LOOT — Exercises (~5 min)

Hand out `exercises.js`. Students work through 5 bite-sized problems.

**Bonus Challenge (+ 15 XP):**
Predict the output of a tricky hoisting snippet without running it first.

---

## Quick Reference

| Feature | `var` | `let` | `const` |
|---------|-------|-------|---------|
| Scope | Function | Block | Block |
| Hoisting | Yes (as `undefined`) | Yes (but TDZ) | Yes (but TDZ) |
| Reassign | Yes | Yes | No |
| Redeclare | Yes | No | No |
| Use in 2025? | Avoid | Yes | Yes (default) |
