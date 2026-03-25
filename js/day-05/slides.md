# NotebookLM Presentation Guide

This is a **gamified JavaScript bootcamp** called "JavaScript Quest: 0 to Hero in 30 Days."
Students progress through an RPG-style adventure. Days 1-7 are "The Village" arc where
students are beginners learning survival skills in CodeVille.

Generate slides that are fun, visual, and engaging. Use game metaphors throughout.
Each slide should have a clear heading, concise bullet points, and speaker notes.
Think of this as a mix between a coding lesson and an RPG tutorial screen.

---

## Slide 1: Title Slide
**"The Crossroads" — Day 5 of 30**

- Teach your code to make decisions
- Arc: "The Village" — Choosing Your Path

> Speaker notes: Day 5, the halfway mark of Week 1! Recap the journey: chests, potions, forge tools, scrolls. Now comes the big shift — up to now, code ran straight down. Today, code learns to THINK. Conditionals are where programs go from calculators to decision-makers.

---

## Slide 2: The Story
**The Crossroads Outside CodeVille**

- You've outgrown the village basics and reached the crossroads at the edge of town
- Three paths diverge: the Forest Trail, the Mountain Pass, and the River Road
- A signpost reads: "Your choices shape your destiny"
- Today you learn how to make your code choose the right path

> Speaker notes: This is a pivotal story moment — the adventurer is about to leave the safety of basic concepts. The crossroads metaphor is perfect for conditionals: your code looks at a condition and chooses which path to take. Every interesting program makes decisions.

---

## Slide 3: Today's XP Rewards
**Decision-making XP!**

| Action | XP |
|---|---|
| Attend class | +10 XP |
| Complete exercises | +20 XP |
| Bonus challenge | +15 XP |
| **Total possible** | **+45 XP** |

- Running total after Day 5: up to 225 XP

> Speaker notes: Over 200 XP possible by now. Celebrate anyone who has been consistent. Today's exercises are particularly important because conditionals are a foundational skill used in every program going forward.

---

## Slide 4: Truthy and Falsy — Reading the Signs
**Not everything is strictly true or false**

- JavaScript has only **6 falsy values** — everything else is truthy
- Falsy: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`
- Truthy: everything else, including `"0"`, `[]`, `{}`

```js
Boolean(0);        // false
Boolean("");       // false
Boolean("hello");  // true
Boolean(42);       // true
Boolean([]);       // true (surprise!)
```

> Speaker notes: Start here before if/else — students need this foundation. Use the sign analogy: at the crossroads, some signs are blank (falsy) and give you no direction. Only signs with real content (truthy) point the way. The biggest surprise is that empty arrays and objects are truthy. Walk through each falsy value and explain why it makes sense.

---

## Slide 5: if/else — The Basic Fork in the Road
**Choose path A or path B**

- `if` checks a condition — if truthy, run the block
- `else` is the fallback — runs when the condition is falsy
- `else if` adds more paths to check

```js
let hp = 30;

if (hp > 50) {
  console.log("You're healthy!");
} else if (hp > 0) {
  console.log("You're wounded!"); // This runs
} else {
  console.log("Game over!");
}
```

> Speaker notes: This is the bread and butter of programming. Walk through the flow: JavaScript checks the first condition. If true, it runs that block and skips the rest. If false, it moves to the next condition. The else is the "everything else" catch-all. Draw a flowchart on the board if possible. Emphasize the curly braces.

---

## Slide 6: Comparison in Conditions
**Combining Day 3 operators with Day 5 conditionals**

- Use comparison operators (`===`, `>`, `<`, etc.) to create conditions
- Use logical operators (`&&`, `||`, `!`) to combine conditions
- Always use `===` in conditions, never `==`

```js
let level = 10;
let hasKey = true;

if (level >= 10 && hasKey) {
  console.log("Door opens!"); // This runs
}

if (!hasKey || level < 5) {
  console.log("Access denied!");
}
```

> Speaker notes: This connects Days 3 and 5 together. Show how the operators they already know plug right into if statements. The && example is a classic game gate: you need BOTH a high enough level AND the key. Walk through the logic step by step. Ask students to trace through with different values.

---

## Slide 7: The Ternary Operator — Quick Decision
**A one-line if/else for simple choices**

- Syntax: `condition ? valueIfTrue : valueIfFalse`
- Best for simple assignments or returns
- Don't nest them — it gets unreadable fast

```js
let hp = 30;
let status = hp > 50 ? "healthy" : "wounded";
console.log(status); // "wounded"

// Great in template literals:
console.log(`You are ${hp > 0 ? "alive" : "dead"}`);
```

> Speaker notes: The ternary is a shortcut for simple decisions — like a quick glance at the signpost. Show the if/else equivalent so students see it's the same logic, just shorter. The template literal example is a common real-world use case. Warn against nesting ternaries — if you need more than one condition, use if/else.

---

## Slide 8: switch — The Multi-Path Junction
**When you have many specific paths to check**

- Compares one value against many cases using strict equality
- Don't forget `break` — or execution "falls through" to the next case
- `default` is the catch-all (like `else`)

```js
let weapon = "bow";
switch (weapon) {
  case "sword":
    console.log("+10 melee"); break;
  case "bow":
    console.log("+10 range"); break; // This runs
  case "staff":
    console.log("+10 magic"); break;
  default:
    console.log("No bonus");
}
```

> Speaker notes: Switch is the multi-path junction — when you have 3+ specific values to check, switch is cleaner than a chain of if/else if. CRITICAL: emphasize break. Without it, execution falls through to the next case. Demo the fall-through bug live — remove a break and show what happens. Some students will prefer if/else and that's fine.

---

## Slide 9: Guard Clauses — The Gatekeeper Pattern
**Handle edge cases first, keep the main path clean**

- Check for bad conditions early and return/exit
- Avoids deeply nested if/else blocks
- Makes code easier to read top-to-bottom

```js
function enterDungeon(level, hasKey) {
  if (level < 5) return "Too low level!";
  if (!hasKey) return "You need a key!";

  // Main logic here — clean and un-nested
  return "Welcome to the dungeon!";
}
```

> Speaker notes: This is a best-practice pattern, not a new syntax. Show the ugly nested version first, then refactor to guard clauses. The gatekeeper checks your credentials at the dungeon entrance — if you fail any check, you're turned away immediately. This pattern is used everywhere in production code.

---

## Slide 10: Live Demo
**Choose Your Own Adventure**

- Build a mini text adventure in the console:
  - Use `prompt()` to ask the player which path to take
  - Use if/else to handle each choice
  - Add nested decisions (choose path, then choose action)
- Show switch for handling multiple weapon types
- Demonstrate truthy/falsy with user input (empty string from prompt is falsy!)

> Speaker notes: This is the most fun demo so far. Build it interactively — ask students what should happen at each choice. The prompt() function returns a string (or null if cancelled), so you can show truthy/falsy naturally. Keep the adventure to 2-3 decision points. Spend 7-10 minutes.

---

## Slide 11: Battle Time (Exercise)
**Quest: The Crossroads Challenge**

- **Exercise 1:** Write a grade calculator (score to letter grade using if/else)
- **Exercise 2:** Build a "can I enter this dungeon?" checker with multiple conditions
- **Exercise 3:** Rewrite an if/else chain as a switch statement (and vice versa)
- **Bonus:** Create a rock-paper-scissors game using prompt() and conditionals

> Speaker notes: The grade calculator is a classic that tests else-if chaining. The dungeon checker practices combining conditions with && and ||. Exercise 3 builds flexibility. The rock-paper-scissors bonus is the crowd favorite — it combines everything from this week. Give 15-20 minutes.

---

## Slide 12: Quick Reference
**Crossroads Cheat Sheet**

| Pattern | Use When | Example |
|---|---|---|
| `if/else` | 1-3 conditions | Check HP levels |
| `else if` chain | Multiple ranges | Grade boundaries |
| `ternary` | Simple A/B choice | Assign status text |
| `switch` | Many exact matches | Menu options |
| Guard clause | Early exit needed | Input validation |

**Falsy values:** `false`, `0`, `""`, `null`, `undefined`, `NaN` — everything else is truthy.

> Speaker notes: This is the decision-making toolkit. Help students understand WHEN to use each pattern — that's more important than syntax. If/else is the default. Ternary for one-liners. Switch for many cases. Guard clauses for clean functions. The falsy list is worth memorizing — there are only 6.

---

## Slide 13: Next Quest Preview
**Day 6: "The Training Grounds" — Loops**

- Tomorrow you learn to repeat actions — the power of automation
- for, while, do...while — training until you're strong enough

> Speaker notes: Tease tomorrow: "What if you need to swing your sword 100 times for training? You don't write 100 lines of code. Tomorrow you learn loops — the secret to making the computer do the repetitive work for you. See you at the Training Grounds!" Update XP totals.
