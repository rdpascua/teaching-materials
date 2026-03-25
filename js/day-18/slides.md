# NotebookLM Presentation Guide

This is a **gamified JavaScript bootcamp** called "JavaScript Quest: 0 to Hero in 30 Days."
Students progress through an RPG-style adventure. Days 15-21 are "The Dungeon" arc where
students descend into the browser dungeon, battling DOM monsters and async dragons.

Generate slides that are fun, visual, and engaging. Use game metaphors throughout.
Each slide should have a clear heading, concise bullet points, and speaker notes.
Think of this as a mix between a coding lesson and an RPG tutorial screen.

---

# Slide 1 — Title

## Day 18: "The Trap Room"
### Error Handling — try/catch/finally & throw

**Arc: The Dungeon (Days 15-21)**

*The floor collapses beneath you! But you grab the ledge just in time. Surviving the dungeon means expecting the unexpected.*

> Speaker Notes: After three days of DOM manipulation, we shift gears to error handling. This is a shorter, more conceptual day — a good pace change. Error handling isn't glamorous, but it's what separates hobby code from production code. Apps that don't handle errors just... break silently.

---

# Slide 2 — The Story

## The Trap Room

You enter a corridor that looks perfectly safe. But on your third step — CLICK — a pressure plate. Darts fly from the walls!

Luckily, you brought your shield. The darts bounce off harmlessly. You didn't avoid the trap, but you **handled** it.

In code, traps are errors. Without a shield (`try/catch`), one error crashes your entire program. With it, you catch the error, deal with it, and keep going.

> Speaker Notes: Errors happen in every program. User types wrong input, a network request fails, a file doesn't exist, you access a property on undefined. The question isn't whether errors will happen — it's whether your code is prepared for them. Today we build our error-handling shield.

---

# Slide 3 — Today's XP Rewards

## XP Rewards for Day 18

| Action | XP |
|---|---|
| Attend the quest | +10 XP |
| Complete the exercise | +20 XP |
| Bonus challenge | +15 XP |

**Skill unlocked:** Error Shield — the ability to catch and survive runtime errors.

> Speaker Notes: Today's bonus is about creating custom error types. It's a stretch goal for students who finish early. The main exercise focuses on practical try/catch usage.

---

# Slide 4 — Core Concept: try/catch

## Spell #1: The Error Shield

**Game Analogy:** `try` is stepping into the trap room. `catch` is your shield activating when a trap fires. Without catch, the trap kills you (crashes your program).

```js
try {
  const data = JSON.parse('not valid json');
} catch (error) {
  console.log('Trap caught:', error.message);
}
```

- `try` block — code that might fail goes here
- `catch` block — runs ONLY if an error occurs in try
- The `error` parameter contains details about what went wrong

> Speaker Notes: Show what happens WITHOUT try/catch first. Run JSON.parse('bad') in the console — it throws an Uncaught SyntaxError and stops execution. Now wrap it in try/catch — the error is caught, logged, and execution continues. The program doesn't crash. That's the whole point.

---

# Slide 5 — Core Concept: The Error Object

## Knowing Your Enemy

**Game Analogy:** Every trap has a type. Poison darts, pit traps, fire jets. Knowing the type helps you choose the right defense.

```js
catch (error) {
  console.log(error.name);    // 'TypeError'
  console.log(error.message); // 'Cannot read...'
  console.log(error.stack);   // full trace
}
```

- `ReferenceError` — using a variable that doesn't exist
- `TypeError` — wrong type (e.g., calling undefined as a function)
- `SyntaxError` — code structure is invalid
- `RangeError` — number out of valid range

> Speaker Notes: Walk through each error type with a quick example. ReferenceError: console.log(x) when x isn't declared. TypeError: null.toString(). SyntaxError: JSON.parse('{bad}'). RangeError: new Array(-1). Students should be able to read an error message and know what went wrong just from the type and message.

---

# Slide 6 — Core Concept: finally

## Spell #2: The Guaranteed Action

**Game Analogy:** `finally` is like the dungeon door closing behind you no matter what. Whether you survived the trap or got hit, finally always runs.

```js
try {
  riskyOperation();
} catch (error) {
  console.log('Error handled');
} finally {
  console.log('This ALWAYS runs');
}
```

- `finally` runs whether try succeeded OR catch fired
- Use it for cleanup: closing connections, hiding spinners, resetting state
- Optional — only add it when you have cleanup logic

> Speaker Notes: The classic example is a loading spinner. You show a spinner before a risky operation, and in finally you hide it — regardless of success or failure. Another example: closing a database connection. You want that to happen no matter what. Don't overuse finally — only when you have genuine cleanup needs.

---

# Slide 7 — Core Concept: throw

## Spell #3: Setting Your Own Traps

**Game Analogy:** You aren't just a trap survivor — you can SET traps too. `throw` lets you create errors on purpose when something invalid happens.

```js
function enterDungeon(level) {
  if (level < 1) {
    throw new Error('Level must be at least 1!');
  }
  console.log('Entering level ' + level);
}
```

- `throw new Error('message')` — create and throw a custom error
- Thrown errors can be caught by a `try/catch` higher up
- Use throw for input validation and enforcing rules

> Speaker Notes: throw is for situations where JavaScript wouldn't throw an error itself, but YOUR logic demands one. Passing a negative age to a function? JavaScript is fine with it. But your app isn't. throw lets you enforce your rules. Show the flow: call enterDungeon(-1) without try/catch — it crashes. Wrap the call in try/catch — it's caught gracefully.

---

# Slide 8 — Core Concept: Practical Patterns

## Common Error Handling Patterns

**Pattern 1: Safe JSON parsing**
```js
function safeParse(str) {
  try { return JSON.parse(str); }
  catch { return null; }
}
```

**Pattern 2: Validation with throw**
```js
function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero');
  return a / b;
}
```

- Parse user input safely — never trust external data
- Validate function arguments — fail fast with clear messages

> Speaker Notes: These two patterns cover 80% of error handling needs. Safe parsing is essential when dealing with localStorage, API responses, or any string-to-object conversion. Validation with throw is the professional way to handle bad arguments. Show both in the console.

---

# Slide 9 — Live Demo

## Live Demo: Trap Room Simulator

**What we'll build:**

1. A text input where users type JSON
2. A "Parse" button that tries to parse the input
3. If valid JSON: display the parsed object in a result div
4. If invalid: display the error message in red
5. A `finally` block that always clears the input field

*Real-world scenario: this is exactly how you'd handle API response parsing.*

> Speaker Notes: Build this from scratch. Start with the HTML, then wire up the button. Parse without try/catch first — show it crash. Then add try/catch — show the error displayed gracefully. Then add finally for cleanup. This bridges DOM skills (days 15-17) with today's error handling perfectly.

---

# Slide 10 — Battle Time

## Battle Time: The Trap Course

**Your quest:** Build a dungeon character validator:

1. Write a `createCharacter(name, level, hp)` function
2. Throw an error if name is empty, level < 1, or hp < 0
3. In your main code, call `createCharacter` with various inputs inside try/catch
4. Display either the character info or the error message on the page

**Bonus (+15 XP):** Create a custom `ValidationError` class that extends `Error` with a `field` property indicating which field was invalid.

> Speaker Notes: 15-20 minutes. The main exercise is straightforward — it's practice with throw and try/catch. The bonus introduces class inheritance (extending Error), which students may not have seen yet. Guide them with the pattern: class ValidationError extends Error { constructor(message, field) { super(message); this.field = field; } }

---

# Slide 11 — Quick Reference

## Quick Reference: Error Handling

| Syntax | Purpose |
|---|---|
| `try { ... }` | Wrap risky code |
| `catch (error) { ... }` | Handle the error |
| `finally { ... }` | Always runs (cleanup) |
| `throw new Error(msg)` | Create and throw an error |
| `error.name` | Error type (TypeError, etc.) |
| `error.message` | Human-readable description |
| `error.stack` | Full stack trace |

**Error Types:** ReferenceError, TypeError, SyntaxError, RangeError, URIError

> Speaker Notes: Quick tip: in production code, you'll often want to log errors to a monitoring service (like Sentry or LogRocket) inside your catch block, not just console.log them. Mention this as a professional practice.

---

# Slide 12 — Next Quest Preview

## Next Quest: Day 19 — "The Ticking Clock"

You hear a clock ticking in the darkness. Some dungeon mechanisms run on timers — doors that close after 5 seconds, traps that reset, alarms that repeat.

**You'll learn:**
- Callbacks — the dungeon's messaging system
- `setTimeout` — delayed actions
- `setInterval` — repeating actions
- The call stack — how JavaScript juggles tasks

*Time waits for no one in the dungeon. Tomorrow, you learn to control it.*

> Speaker Notes: Tomorrow begins the async journey. Days 19-21 form a mini-arc: callbacks, promises, async/await. Each builds on the last. Error handling from today will be crucial — async operations fail all the time, and we need to catch those errors too.
