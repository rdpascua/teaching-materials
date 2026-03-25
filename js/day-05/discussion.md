# Day 5: The Crossroads

## Quest: Learn to make decisions in code with conditionals

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> You leave CodeVille and walk the winding dirt road through the fields.
> After an hour, you arrive at a **crossroads** — three paths stretch out
> before you, each marked with a weathered signpost:
>
> - **Left Path** — "The Forest: For those with strength above 50"
> - **Middle Path** — "The Mountain: For those who carry a map"
> - **Right Path** — "The Swamp: For everyone else"
>
> A hooded figure sits on a rock between the paths. "Every journey is made
> of **choices**," she says. "In code, we call them **conditionals**. Your
> program checks a condition — if it's true, you go one way. If not, you
> go another."
>
> She gestures at the signs. "Which path will your code choose for you?"

---

## THE SPELL — Core Concepts (~10 min)

### if / else if / else — "The Fork in the Road"

The most fundamental decision-making tool in JavaScript.

```js
const heroHP = 75;

if (heroHP > 80) {
  console.log("You're in great shape! Charge ahead!");
} else if (heroHP > 40) {
  console.log("You're wounded. Proceed with caution.");
} else {
  console.log("You're badly hurt. Find a healer!");
}
```

**How it works:**
1. JavaScript checks the first condition (`heroHP > 80`)
2. If true, it runs that block and **skips everything else**
3. If false, it moves to the next `else if`
4. `else` catches everything that didn't match above

> **Key rule:** Only ONE block ever runs. The first true condition wins.

---

### Truthy and Falsy Values

In JavaScript, EVERY value can be treated as `true` or `false` in a
conditional. You don't need to write `=== true`.

**Falsy values (there are only 6 + 1):**

```js
false       // obviously
0           // zero
""          // empty string
null        // no value
undefined   // not assigned
NaN         // not a number
0n          // BigInt zero
```

**Everything else is truthy:**

```js
"hello"     // any non-empty string
42          // any non-zero number
[]          // empty array (yes, really!)
{}          // empty object
"0"         // string "0" (it's not empty!)
"false"     // string "false" (it's a non-empty string!)
```

```js
const weapon = "Sword";

if (weapon) {
  console.log("You have a weapon!");  // This runs! "Sword" is truthy.
}

const emptyInventory = "";

if (emptyInventory) {
  console.log("This won't run");
} else {
  console.log("Inventory is empty!");  // This runs! "" is falsy.
}
```

---

### switch Statement — "The Quest Board"

When you're comparing ONE value against many options, `switch` is cleaner
than a chain of `else if`:

```js
const heroClass = "mage";

switch (heroClass) {
  case "warrior":
    console.log("You wield a sword. +10 Strength.");
    break;
  case "mage":
    console.log("You cast spells. +10 Intelligence.");
    break;
  case "rogue":
    console.log("You move in shadows. +10 Agility.");
    break;
  default:
    console.log("Unknown class. You're a villager.");
}
```

> **Don't forget `break`!** Without it, execution "falls through" to the
> next case. This is a common bug, but sometimes it's intentional.

---

### Ternary Operator — "The Quick Decision"

A one-line if/else. Great for simple choices.

```js
const health = 30;
const status = health > 50 ? "Healthy" : "Wounded";
console.log(status);  // "Wounded"

// Syntax: condition ? valueIfTrue : valueIfFalse
```

> **Use ternary for simple assignments.** If your logic is complex,
> stick with if/else — readability matters more than cleverness.

---

## THE BATTLE — Live Demo (~10 min)

Walk through `examples.js` together. Key demo moments:

1. Simple if/else — hero health check
2. Chained else if — multiple conditions
3. Show truthy/falsy — empty string, 0, null in conditions
4. Switch statement — class selection
5. Ternary — quick status assignment
6. Nested conditions — show when they get ugly (keep it flat!)

---

## THE LOOT — Exercises (~5 min)

Hand out `exercises.js`. Students work through 5 bite-sized problems.

**Bonus Challenge (+15 XP):**
Build a path chooser that uses multiple conditions and nested logic.

---

## Quick Reference

### if / else if / else

```js
if (condition1) {
  // runs if condition1 is true
} else if (condition2) {
  // runs if condition1 is false AND condition2 is true
} else {
  // runs if nothing above was true
}
```

### Falsy Values (memorize these!)

| Value | Type |
|-------|------|
| `false` | Boolean |
| `0` | Number |
| `""` | String |
| `null` | Null |
| `undefined` | Undefined |
| `NaN` | Number |

### Ternary

```
condition ? ifTrue : ifFalse
```
