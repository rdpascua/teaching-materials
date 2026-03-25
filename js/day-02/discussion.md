# Day 2: Know Your Potions

## Quest: Learn to identify and work with JavaScript data types

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> You push open the creaky door of **Madame Vex's Potion Shop** in the heart
> of CodeVille. Shelves stretch floor to ceiling, crammed with bottles of every
> color. Some glow, some bubble, some just... sit there looking empty.
>
> "Every potion has a **type**," Madame Vex rasps. "Mistake a healing elixir
> for a poison and you're toast. Mistake an empty bottle for a full one and
> you'll die in the dungeon wondering why your heal didn't work."
>
> She slides seven bottles across the counter:
>
> - **Red (String)** — Contains words, names, incantations
> - **Blue (Number)** — Contains damage values, prices, coordinates
> - **Green (Boolean)** — Contains yes/no, on/off, true/false
> - **Grey (Null)** — A bottle that is *intentionally* empty
> - **Foggy (Undefined)** — A bottle that *hasn't been filled yet*
> - **Glowing (Symbol)** — A one-of-a-kind mystical rune
> - **Massive (BigInt)** — Numbers too enormous for a normal bottle
>
> "Learn to tell them apart," she says, "or the road ahead will eat you alive."

---

## THE SPELL — Core Concepts (~10 min)

### What is a data type?

A data type describes **what kind of value** a variable holds. JavaScript has
**7 primitive types** and **1 non-primitive type** (objects — we'll cover those
later).

Think of it like this: the treasure chest (`let`, `const`) is the container.
The data type is **what's inside the chest**.

---

### The 7 Primitive Types

```js
// 1. String — text wrapped in quotes
const heroName = "Aria";
const greeting = 'Hello!';
const shout    = `Battle cry!`;   // backtick strings (template literals)

// 2. Number — integers and decimals
const health = 100;
const critMultiplier = 1.5;
const negative = -10;

// 3. Boolean — true or false, nothing else
const isAlive = true;
const hasShield = false;

// 4. Null — intentionally empty ("I checked, there's nothing here")
const equippedPet = null;

// 5. Undefined — not yet assigned ("I haven't checked yet")
let nextQuest;     // undefined by default
console.log(nextQuest); // undefined

// 6. Symbol — a guaranteed unique identifier (rare, advanced)
const uniqueID = Symbol("hero-id");

// 7. BigInt — for numbers bigger than Number can handle
const galacticDistance = 9007199254740993n;  // note the 'n' suffix
```

---

### The `typeof` Operator — "Potion Identification Spell"

`typeof` tells you what type a value is. Think of it as a magnifying glass
for your potions.

```js
typeof "Fireball"    // "string"
typeof 42            // "number"
typeof true          // "boolean"
typeof undefined     // "undefined"
typeof null          // "object"   ← FAMOUS BUG! Should be "null"
typeof Symbol("x")  // "symbol"
typeof 99n           // "bigint"
```

> **The null bug:** `typeof null` returns `"object"` instead of `"null"`.
> This is a 30-year-old bug in JavaScript that was never fixed because too
> much existing code depends on it. Just memorize this quirk.

---

### Type Coercion — "Mixing Potions"

JavaScript sometimes **converts types automatically** when you mix them.
This is called **type coercion** and it's the #1 source of weird bugs.

**Loose equality (`==`) — coerces before comparing:**

```js
5 == "5"      // true   ← JS converts string to number first
0 == false    // true   ← false becomes 0
"" == false   // true   ← both become 0
null == undefined // true ← special rule
```

**Strict equality (`===`) — NO coercion, compares type AND value:**

```js
5 === "5"      // false  ← different types, done
0 === false    // false
"" === false   // false
null === undefined // false
```

> **The Rule:** Always use `===` and `!==`. Pretend `==` doesn't exist.
> The only exception some devs allow: `x == null` to check for both
> null and undefined at once.

---

### Coercion in arithmetic

```js
"5" + 3       // "53"  ← + with a string = concatenation!
"5" - 3       // 2     ← - forces numeric conversion
"5" * 2       // 10    ← * forces numeric conversion
true + 1      // 2     ← true becomes 1
false + 1     // 1     ← false becomes 0
```

> **Key insight:** The `+` operator is overloaded — it does addition for
> numbers but concatenation for strings. If *either* side is a string,
> it concatenates. All other math operators force numeric conversion.

---

## THE BATTLE — Live Demo (~10 min)

Walk through `examples.js` together. Run each snippet in the console or
Node.js and predict the output before hitting Enter.

Key demo moments:
1. Use `typeof` on every primitive type — show the `null` bug
2. Show `==` vs `===` with `5` and `"5"` — gasp moment
3. Show `"5" + 3` vs `"5" - 3` — the coercion trap
4. Demonstrate `undefined` vs `null` — when each appears naturally
5. Show that `typeof NaN` is `"number"` — another classic quirk

---

## THE LOOT — Exercises (~5 min)

Hand out `exercises.js`. Students work through 5 bite-sized problems.

**Bonus Challenge (+15 XP):**
Predict the output of a chain of coercion expressions without running them.

---

## Quick Reference

| Type | Example | `typeof` result |
|------|---------|----------------|
| String | `"hello"` | `"string"` |
| Number | `42`, `3.14`, `NaN` | `"number"` |
| Boolean | `true`, `false` | `"boolean"` |
| Null | `null` | `"object"` (bug!) |
| Undefined | `undefined` | `"undefined"` |
| Symbol | `Symbol("id")` | `"symbol"` |
| BigInt | `99n` | `"bigint"` |

### Equality Cheat Sheet

| Expression | `==` | `===` |
|-----------|------|-------|
| `5` vs `"5"` | `true` | `false` |
| `0` vs `false` | `true` | `false` |
| `""` vs `false` | `true` | `false` |
| `null` vs `undefined` | `true` | `false` |
| `NaN` vs `NaN` | `false` | `false` |
