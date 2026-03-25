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

## NOVA-102: Refactor into Modules
### Day 23 — The Corporation Arc

**JavaScript Quest: 0 to Hero in 30 Days**

*The tech lead flagged your PR: "This file is too long. Split it up."*

> Speaker Notes: Day 23. You submitted your first PR yesterday and got a comment: "This works, but it's all in one file. Let's refactor this into modules." Today you learn ES modules — the way every modern JavaScript project organizes its code.

---

# Slide 2 — The Ticket

## Your Jira Ticket

```
NOVA-102: Refactor into modules
Priority: Medium
Assignee: You (Junior Dev)
Reporter: Alex Chen (Tech Lead)

Description:
The dashboard code is getting messy. Refactor into
ES modules. Separate utility functions, API calls,
and UI logic into their own files.

Acceptance Criteria:
- [ ] Use import/export (no global scripts)
- [ ] At least 3 separate module files
- [ ] No circular dependencies
```

> Speaker Notes: This is a classic tech debt ticket. Your code works, but it doesn't scale. As the codebase grows, having everything in one file becomes unmaintainable. Modules solve this by letting each file focus on one responsibility.

---

# Slide 3 — Today's XP Rewards

## XP Available Today

| Activity | XP |
|---|---|
| Attend the lesson | +10 XP |
| Complete the exercise | +20 XP |
| Bonus challenge | +15 XP |

> Speaker Notes: 45 XP up for grabs. The bonus challenge involves reorganizing a messy codebase into clean modules — exactly the kind of task you'd get during your first month at a company.

---

# Slide 4 — Core Concept: Why Modules?

## The Problem with One Big File

- **Without modules:** everything is global, names collide, files grow forever
- **With modules:** each file has its own scope, explicit dependencies, clear structure

**Before (chaos):**
```
app.js         → 500 lines, 20 functions, everything tangled
```

**After (clean):**
```
api.js         → fetch functions
utils.js       → helper functions
ui.js          → DOM manipulation
app.js         → ties it all together
```

> Speaker Notes: Imagine joining a company and opening a single 2,000-line JavaScript file. Where do you even start? Modules let you split code into logical pieces. Each file does one thing. When something breaks, you know exactly where to look.

---

# Slide 5 — Core Concept: Named Exports

## Named Exports — Multiple Items per File

- Use `export` in front of declarations
- Import with curly braces — names must match

```js
// utils.js
export function formatName(name) {
  return name.trim().toUpperCase();
}
export const TAX_RATE = 0.08;
```

```js
// app.js
import { formatName, TAX_RATE } from './utils.js';
```

> Speaker Notes: Named exports are the bread and butter of modules. You export specific things by name, and import them by the same name. The curly braces are required — they're destructuring the module's exports. You can export as many things as you want from one file.

---

# Slide 6 — Core Concept: Default Exports

## Default Exports — One Main Thing per File

- Each file gets **one** default export
- Import without curly braces — you choose the name

```js
// Employee.js
export default class Employee {
  constructor(name) { this.name = name; }
}
```

```js
// app.js
import Employee from './Employee.js';
```

**Rule of thumb:** Use default for the "main" thing (a class, a component). Use named for utilities and constants.

> Speaker Notes: Default exports are for when a file has one primary export — like a class or a main function. The importer can name it whatever they want. Most style guides say: one class per file, use default export. Utilities and constants get named exports. You'll see both patterns in real codebases.

---

# Slide 7 — Core Concept: Combining & Renaming

## Mixing Exports and Renaming

- You can have **both** default and named exports in one file
- Rename on import with `as`

```js
// api.js
export default async function fetchEmployees() { ... }
export async function fetchDepartments() { ... }
```

```js
// app.js
import fetchEmployees, { fetchDepartments as getDepts } from './api.js';
```

- Use `as` to avoid naming conflicts between modules

> Speaker Notes: Sometimes you import from two different files and they both export something called "format" or "create." The as keyword lets you rename on import to avoid collisions. You can also rename on the export side if needed. It's flexible.

---

# Slide 8 — Core Concept: Module Mechanics

## How Modules Work Under the Hood

- Modules run in **strict mode** automatically
- Each module has its **own scope** (no global pollution)
- Modules are loaded **once** and cached — even if imported in multiple files
- In the browser, use `<script type="module">`

```html
<script type="module" src="app.js"></script>
```

- Module scripts are **deferred** by default (run after HTML parses)

> Speaker Notes: A few important details. First, modules are always in strict mode — no need for "use strict." Second, if three files all import utils.js, the code in utils.js only runs once. The result is cached and shared. Third, in the browser you must use type="module" on your script tag or it won't work. Module scripts also defer automatically, so they don't block page rendering.

---

# Slide 9 — Live Demo

## Let's Refactor: Dashboard Code Split

**What we'll do together:**
1. Take yesterday's fetch code (one big file)
2. Create `api.js` — all fetch functions
3. Create `utils.js` — helper/formatting functions
4. Create `app.js` — main entry point that imports from both
5. Wire it up in HTML with `type="module"`

**Goal:** Same functionality, better architecture.

> Speaker Notes: We'll take the employee fetcher from yesterday and split it into three files. The key insight is that the code does the exact same thing — we're just organizing it so each file has a single responsibility. This is refactoring 101.

---

# Slide 10 — Task Completion

## Your Ticket Tasks

**Required (20 XP):**
- Create 3 module files: `api.js`, `utils.js`, `app.js`
- Move fetch logic into `api.js` with named exports
- Move helper functions into `utils.js`
- Import everything into `app.js` and wire it up

**Bonus Challenge (15 XP):**
- Add a `constants.js` module for config values (API URL, etc.)
- Use both default and named exports in at least one file
- Create a barrel file (`index.js`) that re-exports from multiple modules

> Speaker Notes: The bonus challenge introduces barrel files — a pattern where you have an index.js that re-exports everything from a folder. It's common in React projects and Node.js libraries. Example: import { fetchEmployees, formatName } from './modules/index.js' instead of importing from three separate files.

---

# Slide 11 — Quick Reference

## ES Modules Cheat Sheet

| Pattern | Syntax |
|---------|--------|
| Named export | `export function foo() {}` |
| Named import | `import { foo } from './file.js'` |
| Default export | `export default class Bar {}` |
| Default import | `import Bar from './file.js'` |
| Rename import | `import { foo as bar } from './file.js'` |
| Import all | `import * as utils from './utils.js'` |
| Re-export | `export { foo } from './other.js'` |
| HTML module | `<script type="module" src="app.js">` |

> Speaker Notes: This is your import/export reference card. The most common patterns are named exports for utilities and default exports for classes. The import-all pattern with the asterisk is useful when a module exports many things and you want them namespaced.

---

# Slide 12 — Next Sprint

## Up Next: NOVA-103 — Build the User Model

**Tomorrow's ticket:** Time to build a proper User class with constructors, methods, and getters/setters.

- ES6 classes
- Constructor pattern
- Methods and computed properties

*"Now that the code is organized, let's build something real with it."* — Alex Chen, Tech Lead

> Speaker Notes: Great work refactoring. Tomorrow we start building architecture — classes. You'll create a User model that represents employee data in a structured, reusable way. This is how real applications manage data. See you tomorrow.
