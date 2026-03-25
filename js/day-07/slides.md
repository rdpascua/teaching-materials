# NotebookLM Presentation Guide

This is a **gamified JavaScript bootcamp** called "JavaScript Quest: 0 to Hero in 30 Days."
Students progress through an RPG-style adventure. Days 1-7 are "The Village" arc where
students are beginners learning survival skills in CodeVille.

Generate slides that are fun, visual, and engaging. Use game metaphors throughout.
Each slide should have a clear heading, concise bullet points, and speaker notes.
Think of this as a mix between a coding lesson and an RPG tutorial screen.

---

## Slide 1: Title Slide
**"Learning Your First Spell" — Day 7 of 30**

- Package your skills into reusable, powerful spells
- Arc: "The Village" — The Mage Tower (Arc Finale!)

> Speaker notes: Day 7 — the final day of the Village arc! This is the capstone of Week 1. Recap the full journey: treasure chests (variables), potions (types), forge tools (operators), scrolls (strings), crossroads (conditionals), training grounds (loops). Today they climb the Mage Tower and learn the most important skill in programming: functions. Set the energy high — this is a big deal.

---

## Slide 2: The Story
**The Mage Tower**

- At the center of CodeVille stands the Mage Tower — the most important building in the village
- The Archmage opens a massive spellbook: "Everything you've learned is raw skill. Today, you learn to cast SPELLS."
- A spell is a named, reusable sequence of actions — write it once, cast it forever
- "Master this," she says, "and you're ready to leave the Village."

> Speaker notes: This is the climax of the Village arc. Functions are the single most important concept in programming — they enable code reuse, abstraction, and organization. The spell metaphor works perfectly: you define a spell once (the incantation), and you can cast it whenever you need it, with different targets (arguments).

---

## Slide 3: Today's XP Rewards
**Final Village XP!**

| Action | XP |
|---|---|
| Attend class | +10 XP |
| Complete exercises | +20 XP |
| Bonus challenge | +15 XP |
| **Total possible** | **+45 XP** |

- Running total after Day 7: up to 315 XP
- Village arc complete! Award a "Village Graduate" badge to anyone above 250 XP

> Speaker notes: This is the last day of the arc, so make the XP count feel special. If you have a leaderboard, do a final Village arc ranking. The "Village Graduate" badge at 250 XP means they needed to attend most days AND do the exercises. Celebrate the top performers.

---

## Slide 4: Function Declaration — Writing Your Spell
**The classic way to define a function**

- Use the `function` keyword, a name, parameters in `()`, and a body in `{}`
- Declarations are **hoisted** — you can call them before they appear in code
- Name your functions with verbs: `calculateDamage`, `healPlayer`, `getStatus`

```js
function castFireball(target, power) {
  let damage = power * 2;
  console.log(`${target} takes ${damage} fire damage!`);
}

castFireball("Goblin", 15); // "Goblin takes 30 fire damage!"
```

> Speaker notes: Start with declarations because they're the most straightforward. Break it down: "function" is the spell keyword, the name is the spell's name, parameters are the spell's targets/modifiers, and the body is what the spell does. Show that you can call a declared function before its definition in the code (hoisting). Use verb-based naming.

---

## Slide 5: Function Expression — The Scroll Spell
**Store a spell in a variable**

- Assign an anonymous function to a variable
- NOT hoisted — must be defined before you call it
- The variable name becomes the function name

```js
const healPlayer = function(target, amount) {
  console.log(`${target} heals for ${amount} HP!`);
};

healPlayer("Hero", 50); // "Hero heals for 50 HP!"

// This would error if called before the line above:
// healPlayer is in the TDZ until assigned
```

> Speaker notes: Think of this as writing a spell on a scroll and storing it in a chest (variable). The spell only exists once the scroll is written. Compare to declarations: declarations are like spells you've memorized — you can cast them anytime. Expressions are scrolls you have to pull out first. Show that calling it before the definition throws an error (connect back to Day 1 TDZ).

---

## Slide 6: Parameters and Arguments
**Customizing your spells**

- **Parameters** are the spell's placeholders (in the definition)
- **Arguments** are the actual values you pass when casting
- Default parameters let you set fallback values

```js
function attack(weapon, target, multiplier = 1) {
  let damage = 10 * multiplier;
  console.log(`${weapon} hits ${target} for ${damage}!`);
}

attack("Sword", "Dragon");       // multiplier defaults to 1
attack("Sword", "Dragon", 3);    // multiplier is 3
```

> Speaker notes: Parameters vs arguments is a vocabulary distinction students often mix up. Use the analogy: the spell recipe says "target" (parameter), but when you cast it you say "Goblin" (argument). Default parameters are like default spell settings — if the caster doesn't specify a power level, use 1. Show what happens when you pass too few or too many arguments.

---

## Slide 7: The `return` Statement — Spell Output
**Getting a result back from your spell**

- `return` sends a value back to the caller
- The function STOPS executing at `return` — nothing after it runs
- A function without `return` returns `undefined`

```js
function calculateDamage(base, level) {
  return base + (level * 2);
}

let dmg = calculateDamage(10, 5); // dmg = 20
console.log(dmg);                  // 20

// You can use the return value directly:
console.log(calculateDamage(10, 5) + 5); // 25
```

> Speaker notes: This is the key concept: functions can PRODUCE values, not just DO things. console.log is a function that DOES something (prints). calculateDamage PRODUCES something (a number). The return value can be stored in a variable, passed to another function, or used in an expression. Show that code after return never executes.

---

## Slide 8: Scope — The Spell's Boundaries
**What happens in the function stays in the function**

- Variables declared inside a function are **local** — invisible outside
- Functions CAN access variables from the outer/global scope
- Parameters are also local to the function

```js
let gold = 100; // global

function buyPotion(cost) {
  let receipt = `Bought for ${cost}g`;  // local
  gold -= cost;  // can access global
  return receipt;
}

buyPotion(25);
// console.log(receipt); // Error! Not defined here
console.log(gold);       // 75
```

> Speaker notes: Scope is the spell's boundary ward — variables created inside the spell circle can't escape. But the spell can see and affect things outside its circle (global variables). Draw a diagram with nested boxes. Warn about the danger of modifying global variables from inside functions — it's a side effect and can cause bugs. We'll talk more about this in future lessons.

---

## Slide 9: Functions Calling Functions — Spell Combos
**Chain spells together for powerful effects**

- Functions can call other functions — build complex behavior from simple parts
- This is the foundation of good code organization
- Small, focused functions are easier to test and debug

```js
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function attackRoll(weapon) {
  let roll = rollDice(20);
  let damage = rollDice(6) + rollDice(6);
  return `${weapon}: rolled ${roll}, ${damage} damage`;
}

console.log(attackRoll("Sword"));
```

> Speaker notes: This is where functions really shine. rollDice is a simple spell. attackRoll is a combo spell that uses rollDice multiple times. The key insight: you don't copy-paste the dice logic — you reuse it. This is the DRY principle (Don't Repeat Yourself). Ask students: how would you modify this to support different weapon damage dice?

---

## Slide 10: Live Demo
**Spell Crafting Workshop**

- Build a mini RPG combat system using functions:
  - `rollDice(sides)` — returns a random number
  - `createCharacter(name, hp)` — returns a character object
  - `attack(attacker, defender)` — calculates and applies damage
  - `battleRound(hero, monster)` — runs one round of combat
- Show how each function is small and focused
- Let students suggest modifications (critical hits? healing spells?)

> Speaker notes: This is the most ambitious demo yet. Build it piece by piece, starting with rollDice and layering on complexity. Each function should be 3-5 lines. The goal is to show how functions compose into a system. Don't worry about objects yet — just use simple variables or return values. Let students drive some decisions. Spend 8-10 minutes.

---

## Slide 11: Battle Time (Exercise)
**Quest: The Spellbook Challenge**

- **Exercise 1:** Write 5 utility functions (max of two numbers, is even, fahrenheit to celsius, etc.)
- **Exercise 2:** Build a calculator using functions (add, subtract, multiply, divide + a main function)
- **Exercise 3:** Create a "character builder" that uses multiple functions to generate a random RPG character
- **Bonus:** Build a simple turn-based combat game using only functions

> Speaker notes: Exercise 1 drills the basics — each function is standalone and simple. Exercise 2 practices composition — the main function calls the operation functions. Exercise 3 is creative and ties the RPG theme together. The bonus is a culmination of the entire week: variables, types, strings, conditionals, loops, AND functions. Give 20 minutes for this one.

---

## Slide 12: Quick Reference
**The Archmage's Spellbook**

| Concept | Syntax | Key Point |
|---|---|---|
| Declaration | `function name() {}` | Hoisted, callable anywhere |
| Expression | `const name = function() {}` | Not hoisted, must define first |
| Parameters | `function(a, b, c = 1)` | Inputs with optional defaults |
| Return | `return value;` | Sends result back, stops execution |
| Scope | Variables inside `{}` | Local vars invisible outside |
| Calling | `name(arg1, arg2)` | Executes the function |

**Golden rule:** Each function should do ONE thing well.

> Speaker notes: This is the Week 1 capstone reference. Walk through each row. Emphasize the golden rule — if a function is doing too much, split it into smaller functions. This table plus the cheat sheets from Days 1-6 give them a complete survival kit for JavaScript basics.

---

## Slide 13: Village Arc Complete!
**Week 1 Recap — You survived the Village!**

- Day 1: Treasure Chests — `var`, `let`, `const`, hoisting
- Day 2: Potions — data types, `typeof`, coercion
- Day 3: Blacksmith — operators (arithmetic, comparison, logical)
- Day 4: Scrolls — strings, methods, template literals
- Day 5: Crossroads — conditionals, truthy/falsy, switch
- Day 6: Training Grounds — loops, break, continue
- Day 7: Mage Tower — functions, parameters, return, scope

> Speaker notes: This is the celebration slide. Walk through each day and ask students what they remember. Give high-fives (virtual or real) for completing the Village arc. Announce final XP totals and award the Village Graduate badge. Make this feel like an achievement — they've built a real foundation.

---

## Slide 14: Next Quest Preview
**Week 2: "The Wilderness" — Arrays, Objects, and Beyond**

- You leave CodeVille's gates and enter the wider world
- Next up: arrays, objects, higher-order functions, and more
- The difficulty increases — but so does your power!

> Speaker notes: Build excitement for Week 2. "The Village taught you survival skills. The Wilderness will test them. You'll learn to manage collections of data (arrays), create complex items (objects), and wield higher-order functions — the advanced spells. Rest up this weekend, adventurers. The real quest begins Monday." End on a high note. Celebrate Week 1!
