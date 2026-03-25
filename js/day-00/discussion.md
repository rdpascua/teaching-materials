# Day 0: Before the Quest Begins

## A 10-Minute Briefer — The History of JavaScript & What You Need

**Time:** 10 minutes | **Goal:** Context before we write a single line of code

---

## A Very Short History (~4 min)

**1995 — Born in 10 days.**
Brendan Eich at Netscape created JavaScript in just 10 days. It was originally
called "Mocha," then "LiveScript," then renamed to "JavaScript" as a marketing
move to ride Java's hype. It has almost nothing to do with Java.

**1997 — Standardized.**
JavaScript was submitted to ECMA International and became **ECMAScript** (ES).
When you hear "ES6" or "ES2015," that's a version of the standard.

**2005 — AJAX changes everything.**
Google Maps and Gmail proved JavaScript could build real apps, not just
annoying pop-ups. The web got interactive.

**2009 — Node.js is born.**
Ryan Dahl took JavaScript out of the browser and put it on the server.
Suddenly JS could do everything — frontend, backend, mobile, desktop.

**2015 — ES6 / ES2015 (the big one).**
The largest update ever: `let`, `const`, arrow functions, classes, modules,
promises, template literals, destructuring. This is the "modern JavaScript"
we'll be learning.

**2016–Today — Yearly updates.**
Small annual releases. Optional chaining (`?.`), nullish coalescing (`??`),
top-level await, and more. The language keeps evolving.

### The timeline at a glance

```
1995  Created (10 days!)
1997  ECMAScript standard
2005  AJAX era (Google Maps)
2009  Node.js (JS on servers)
2015  ES6 — modern JS is born
2026  You're here. Let's go.
```

---

## Where JavaScript Runs (~2 min)

| Environment | What it does | Examples |
|-------------|-------------|---------|
| **Browser** | Makes websites interactive | Chrome, Firefox, Safari |
| **Server** | Runs backend APIs | Node.js, Deno, Bun |
| **Mobile** | Builds phone apps | React Native, Expo |
| **Desktop** | Builds desktop apps | Electron (VS Code, Discord) |

> JavaScript is the only language that runs natively in every web browser.
> That's why it's everywhere.

---

## What You Need to Start (~3 min)

### 1. A browser (you already have one)
- Open **Chrome** or **Firefox**
- Press `F12` or `Cmd+Option+J` (Mac) / `Ctrl+Shift+J` (Windows) to open the **Console**
- Type `console.log("Hello!")` and press Enter — you just ran JavaScript

### 2. Node.js (for running JS outside the browser)
- Download from **https://nodejs.org** (LTS version)
- Verify: open a terminal, type `node -v` — you should see a version number
- Type `node` to enter the REPL (interactive mode), or `node filename.js` to run a file

### 3. A code editor
- **VS Code** (free, recommended) — https://code.visualstudio.com
- Install these extensions:
  - **ESLint** — catches mistakes
  - **Prettier** — auto-formats your code
  - **Live Server** — preview HTML files in the browser (we'll need this from Day 15)

### 4. That's it.
No frameworks. No build tools. No complicated setup.
Just a browser, Node.js, and a text editor.

---

## Quick Vocabulary

| Term | Meaning |
|------|---------|
| **JS** | Short for JavaScript |
| **ES6 / ES2015** | The major 2015 update (what we teach) |
| **Node.js** | JavaScript runtime for servers/CLI |
| **Console** | The browser's built-in JS playground |
| **REPL** | Read-Eval-Print-Loop (interactive mode in Node) |
| **NPM** | Node Package Manager — installs libraries (we'll use this later) |

---

## One Last Thing

JavaScript is **quirky**. You'll see weird stuff like:

```js
typeof null        // "object"  — a famous 28-year-old bug
[] + []            // ""        — empty string??
"b" + "a" + +"a"  // "baNaN"   — yes, really
```

Don't worry about these. They're fun trivia, not things you'll hit daily.
The language is powerful, practical, and runs the modern web.

**Tomorrow, the real quest begins.**

---

> **Setup checklist before Day 1:**
> - [ ] Node.js installed (`node -v` works)
> - [ ] VS Code installed with ESLint + Prettier
> - [ ] Browser console opened at least once
> - [ ] Ready to earn XP
