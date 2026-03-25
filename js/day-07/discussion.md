# Day 7: Learning Your First Spell

## Quest: Learn to create reusable magic with functions

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> At the edge of CodeVille, past the training grounds, stands a crooked
> tower wrapped in glowing ivy. A sign on the door reads: **"Eldwin the
> Wizard — Spells & Enchantments."**
>
> You knock. The door swings open on its own. Inside, an old wizard sits
> surrounded by floating books and bubbling cauldrons.
>
> "So you've learned to store things, identify potions, do math, read
> scrolls, make choices, and repeat actions," Eldwin says, stroking his
> beard. "But every time you needed to calculate damage, you wrote the
> formula from scratch. Every time you checked health, you wrote the same
> if/else. Wasteful!"
>
> He waves his staff and a glowing rune appears in the air.
>
> "A **function** is like a **spell**. You write the incantation ONCE,
> give it a name, and then **cast** it whenever you want — with different
> targets each time. Write the damage formula once, call it a hundred times."
>
> He slides a spellbook across the table. "Let's learn your first spell."

---

## THE SPELL — Core Concepts (~10 min)

### What is a function?

A function is a **reusable block of code** that:
1. Has a **name** (so you can call it later)
2. Can accept **inputs** (parameters)
3. Can **return** an output (a value back to you)

Think of it as a spell scroll: write the spell once, cast it whenever.

---

### Function Declaration — "Writing the Spell Scroll"

```js
function castFireball() {
  console.log("You cast Fireball! 🔥");
  console.log("The enemy takes 25 damage!");
}

// Call (cast) the function:
castFireball();
castFireball();  // cast it again — reusable!
```

**Anatomy:**

```
function functionName(parameters) {
   ↑          ↑           ↑
keyword    the name    inputs (optional)

  // function body — the code that runs
  return value;  // output (optional)
}
```

---

### Function Expression — "Another Way to Write Spells"

Instead of declaring a function, you can store it in a variable:

```js
const castIceShard = function() {
  console.log("You cast Ice Shard! The enemy is frozen!");
};

castIceShard();
```

**Key difference:** Function declarations are **hoisted** (you can call
them before they're defined). Function expressions are **NOT hoisted**.

```js
// This works — declarations are hoisted:
greet();
function greet() { console.log("Hello!"); }

// This CRASHES — expressions are not hoisted:
// farewell();  // ReferenceError!
const farewell = function() { console.log("Goodbye!"); };
```

---

### Parameters and Arguments — "Spell Targets"

Parameters are **placeholders** in the spell definition. Arguments are
the **actual values** you pass when casting the spell.

```js
function attackEnemy(enemyName, damage) {
  //                  ↑            ↑
  //              parameter    parameter
  console.log(`You attack ${enemyName} for ${damage} damage!`);
}

attackEnemy("Goblin", 25);    // arguments: "Goblin", 25
attackEnemy("Dragon", 100);   // arguments: "Dragon", 100
attackEnemy("Slime", 5);      // arguments: "Slime", 5
```

**Default parameters** — fallback values when no argument is provided:

```js
function heal(target, amount = 20) {
  console.log(`${target} is healed for ${amount} HP!`);
}

heal("Aria", 50);   // "Aria is healed for 50 HP!"
heal("Kael");        // "Kael is healed for 20 HP!" (used default)
```

---

### Return Values — "Spell Results"

Functions can **send a value back** to wherever they were called.

```js
function calculateDamage(base, bonus) {
  const total = base + bonus;
  return total;  // sends the value back
}

const hit1 = calculateDamage(20, 5);   // hit1 = 25
const hit2 = calculateDamage(30, 10);  // hit2 = 40
console.log(`First hit: ${hit1}, Second hit: ${hit2}`);
```

**Important:** `return` immediately **exits** the function. Code after
`return` never runs.

```js
function checkHP(hp) {
  if (hp <= 0) {
    return "Dead";    // function exits here
  }
  return "Alive";     // only reached if hp > 0
  console.log("This never runs");  // dead code!
}
```

**Functions without return:** If there's no `return`, the function
returns `undefined`.

```js
function shout(message) {
  console.log(message.toUpperCase());
  // no return statement
}

const result = shout("hello");
console.log(result);  // undefined
```

---

### Function Scope — "Spell Containment"

Variables declared inside a function are **invisible** outside it.

```js
function secretSpell() {
  const incantation = "Abracadabra";
  console.log(incantation);  // works inside
}

secretSpell();
// console.log(incantation);  // ReferenceError! Not visible outside.
```

Variables from OUTSIDE a function CAN be seen inside it:

```js
const heroName = "Aria";

function introduce() {
  console.log(`I am ${heroName}!`);  // can see heroName
}

introduce();  // "I am Aria!"
```

> **Rule:** Functions can look OUT (see outer variables), but the outside
> cannot look IN (cannot see variables declared inside the function).

---

## THE BATTLE — Live Demo (~10 min)

Walk through `examples.js` together. Key demo moments:

1. Write a simple function, call it multiple times
2. Add parameters — call it with different arguments
3. Show return values — capture them in variables
4. Declaration vs expression — show hoisting difference
5. Show scope — variable inside function vs outside
6. Build a reusable damage calculator step by step

---

## THE LOOT — Exercises (~5 min)

Hand out `exercises.js`. Students work through 5 bite-sized problems.

**Bonus Challenge (+15 XP):**
Build a mini RPG turn system with multiple functions working together.

---

## Quick Reference

### Syntax

```js
// Function Declaration (hoisted)
function name(param1, param2) {
  return value;
}

// Function Expression (NOT hoisted)
const name = function(param1, param2) {
  return value;
};
```

### Key Concepts

| Concept | Meaning |
|---------|---------|
| Parameter | Placeholder in function definition |
| Argument | Actual value passed when calling |
| Return | Sends a value back to the caller |
| Scope | Variables inside a function stay inside |
| Hoisting | Declarations can be called before their line |
