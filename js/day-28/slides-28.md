# NotebookLM Presentation Guide

This is a **gamified JavaScript bootcamp** called "JavaScript Quest: 0 to Hero in 30 Days."
Students progress through an RPG-style adventure. Days 22-28 are "The Corporation" arc.
The tone shifts — students have been "hired" at NovaTech Inc., a fictional tech company.
Each lesson is framed as a Jira ticket from the tech lead. The vibe is professional but
still engaging, like your first week at a cool startup.

Generate slides that are professional yet engaging. Use corporate metaphors (tickets,
PRs, standups, code reviews). Each slide should have a clear heading, concise bullet
points, and speaker notes. Think onboarding deck meets coding tutorial.

---

# Slide 1 — Title Slide

## NOVA-107: Clean Up the Utils
### Day 28 — The Corporation Arc

**JavaScript Quest: 0 to Hero in 30 Days**

*Tech debt sprint. Time to write code your future self will thank you for.*

> Speaker Notes: Day 28 — the last ticket in the Corporation arc. This is a tech debt sprint. Your tech lead carved out time to refactor the utility functions. Today you learn the principles that separate clean code from messy code: pure functions, immutability, composition, and currying.

---

# Slide 2 — The Ticket

## Your Jira Ticket

```
NOVA-107: Clean up the utils
Priority: Medium (Tech Debt)
Assignee: You (Junior Dev)
Reporter: Alex Chen (Tech Lead)
Sprint: Tech Debt Sprint

Description:
Our utils.js is a mess — functions with side effects,
mutating arguments, and tangled dependencies. Refactor
to use pure functions, immutable patterns, and
composition. This is how we write maintainable code.

Acceptance Criteria:
- [ ] All util functions are pure (no side effects)
- [ ] No direct mutation of input arguments
- [ ] At least one composed pipeline
- [ ] Code review approval from tech lead
```

> Speaker Notes: Tech debt sprints are sacred. Most companies skip them and pay the price later. Today we learn the functional programming principles that make code predictable, testable, and maintainable. These aren't theoretical — they're the difference between code that works and code that works AND can be trusted.

---

# Slide 3 — Today's XP Rewards

## XP Available Today

| Activity | XP |
|---|---|
| Attend the lesson | +10 XP |
| Complete the exercise | +20 XP |
| Bonus challenge | +15 XP |

**This is your last Corporate ticket. Finish strong.**

> Speaker Notes: Last ticket in the Corporation arc. After today, you've completed all of NovaTech's onboarding. Tomorrow is the capstone — you'll need every skill you've learned. 45 XP available.

---

# Slide 4 — Core Concept: Pure Functions

## Pure Functions — Predictable by Design

A pure function:
1. **Same input = same output** (always)
2. **No side effects** (doesn't change anything outside itself)

```js
// PURE — predictable, testable
function add(a, b) {
  return a + b;
}

// IMPURE — depends on external state
let tax = 0.08;
function addTax(price) {
  return price * (1 + tax); // depends on outer variable
}
```

**Why care?** Pure functions are easy to test, debug, and reuse.

> Speaker Notes: A pure function is like a calculator — same buttons, same answer, every time. It doesn't read from global variables, doesn't write to the DOM, doesn't log to the console. Given the same arguments, it always returns the same result. Impure functions are unpredictable — addTax depends on an external variable that could change at any time. In a code review, your tech lead will flag impure utilities immediately.

---

# Slide 5 — Core Concept: Immutability

## Immutability — Never Mutate, Always Copy

- **Mutation** = changing existing data in place
- **Immutability** = creating new data instead of changing the original

```js
// BAD — mutates the original array
function addUser(users, user) {
  users.push(user);     // modifies input!
  return users;
}

// GOOD — returns a new array
function addUser(users, user) {
  return [...users, user]; // original untouched
}
```

**Tools:** spread operator (`...`), `Object.assign()`, `map/filter` (return new arrays)

> Speaker Notes: Mutation is one of the most common sources of bugs. You pass an array to a function, and it modifies your original array without you knowing. With immutable patterns, the original data is never touched — you always get a fresh copy with the changes applied. The spread operator is your best friend here. For objects: { ...obj, key: newValue }. For arrays: [...arr, newItem]. The array methods map, filter, and reduce already return new arrays — they're inherently immutable.

---

# Slide 6 — Core Concept: Function Composition

## Composition — Building Pipelines

- **Composition** = combining simple functions into complex operations
- Each function does one thing, the output feeds into the next

```js
const trim = str => str.trim();
const lower = str => str.toLowerCase();
const slug = str => str.replace(/\s+/g, '-');

// Manual composition
const toSlug = str => slug(lower(trim(str)));
toSlug('  Hello World  '); // "hello-world"
```

```js
// compose helper (right to left)
const compose = (...fns) =>
  x => fns.reduceRight((acc, fn) => fn(acc), x);
const toSlug = compose(slug, lower, trim);
```

> Speaker Notes: Composition is about building complex behavior from small, focused pieces. Each function does exactly one thing. trim removes whitespace, lower converts to lowercase, slug replaces spaces with dashes. Individually they're trivial. Together they're a URL slug generator. The compose helper automates the nesting — instead of slug(lower(trim(x))), you create a pipeline. This is how functional programmers think — small bricks, big buildings.

---

# Slide 7 — Core Concept: Currying

## Currying — Functions That Return Functions

- **Currying** = transforming a function so it takes arguments one at a time
- Creates reusable, partially-applied functions

```js
// Regular function
const multiply = (a, b) => a * b;

// Curried version
const multiply = a => b => a * b;
const double = multiply(2);  // returns: b => 2 * b
const triple = multiply(3);  // returns: b => 3 * b

double(5);  // 10
triple(5);  // 15
```

**Use case:** creating specialized versions of general functions.

> Speaker Notes: Currying lets you "pre-load" a function with some arguments. multiply(2) returns a new function that always multiplies by 2. It's like creating a specialized tool from a general one. The practical use case: you have a formatCurrency function that takes a locale and an amount. Curry it, create formatUSD = formatCurrency('USD'), and now you have a reusable single-purpose formatter. This pattern shows up constantly in functional programming and in frameworks like Redux.

---

# Slide 8 — Core Concept: Putting It Together

## Refactoring Utils — Before & After

**Before (messy):**
```js
function processUsers(users) {
  users.sort((a, b) => a.name.localeCompare(b.name)); // mutates!
  for (let u of users) {
    u.name = u.name.trim().toLowerCase(); // mutates!
  }
  return users;
}
```

**After (clean):**
```js
const cleanName = name => name.trim().toLowerCase();
const sortByName = users =>
  [...users].sort((a, b) => a.name.localeCompare(b.name));
const processUsers = users =>
  sortByName(users.map(u => ({ ...u, name: cleanName(u.name) })));
```

> Speaker Notes: Look at the before — it mutates the input array AND mutates each user object. If anyone else was using that array or those objects, their data just changed without warning. The after version: cleanName is a pure function. sortByName copies the array before sorting. processUsers maps into new objects with spread. The original data is completely untouched. Same result, zero side effects. This is what your tech lead wants to see in a code review.

---

# Slide 9 — Live Demo

## Let's Refactor: The Utils File

**What we'll refactor together:**
1. Identify impure functions in a sample utils file
2. Refactor each one to be pure (no side effects)
3. Replace mutations with spread/map patterns
4. Build a data processing pipeline with composition
5. Create a curried formatter utility

> Speaker Notes: I'll show you a "before" utils file with common problems — mutation, side effects, tangled logic. We'll refactor each function step by step. By the end, every function will be pure, composable, and easy to test. This is the kind of refactoring that earns you respect in code reviews.

---

# Slide 10 — Task Completion

## Your Ticket Tasks

**Required (20 XP):**
- Refactor 3 impure functions to be pure
- Replace all array/object mutations with immutable patterns
- Build a `toSlug` pipeline using composition
- Verify: original data is never modified

**Bonus Challenge (15 XP):**
- Write a `compose()` helper function
- Create a curried `formatCurrency(locale)(amount)` function
- Build a `pipe()` helper (like compose but left-to-right)
- Refactor a real utility from your previous exercises

> Speaker Notes: The difference between compose and pipe is just the direction. Compose reads right-to-left (mathematical convention). Pipe reads left-to-right (more intuitive for most people). Build both and decide which you prefer. The real test — go back to a utility function you wrote earlier in the bootcamp and refactor it using today's principles.

---

# Slide 11 — Quick Reference

## Functional Programming Cheat Sheet

| Concept | Rule |
|---------|------|
| Pure function | Same input, same output, no side effects |
| Immutability | Never mutate, always copy |
| Composition | Combine small functions into pipelines |
| Currying | One argument at a time, return specialized functions |

| Immutable Pattern | Code |
|-------------------|------|
| Copy array | `[...arr]` |
| Add to array | `[...arr, newItem]` |
| Copy object | `{ ...obj }` |
| Update object | `{ ...obj, key: newVal }` |
| Sort without mutating | `[...arr].sort(fn)` |

> Speaker Notes: These principles aren't just academic — they're how modern JavaScript libraries are built. React's state management is built entirely on immutability. Redux uses pure functions everywhere. Understanding these patterns makes you a better developer across any framework.

---

# Slide 12 — Next Sprint

## Up Next: The Final Boss

**Tomorrow: NovaTech Employee Dashboard (Capstone Project)**

You'll combine EVERYTHING:
- Fetch API (Day 22) + Modules (Day 23)
- Classes (Day 24-25) + localStorage (Day 26)
- Validation (Day 27) + Clean code (Day 28)

*"You've completed onboarding. Now prove you belong here."* — Alex Chen, Tech Lead

> Speaker Notes: Tomorrow is the capstone. Everything you've learned across 28 days comes together into one real application. The NovaTech Employee Dashboard. You'll fetch data, display it in the DOM, validate inputs, persist settings, use classes, and organize it all into modules. Rest up. The Final Boss awaits.
