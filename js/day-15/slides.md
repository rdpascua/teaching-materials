# NotebookLM Presentation Guide

This is a **gamified JavaScript bootcamp** called "JavaScript Quest: 0 to Hero in 30 Days."
Students progress through an RPG-style adventure. Days 15-21 are "The Dungeon" arc where
students descend into the browser dungeon, battling DOM monsters and async dragons.

Generate slides that are fun, visual, and engaging. Use game metaphors throughout.
Each slide should have a clear heading, concise bullet points, and speaker notes.
Think of this as a mix between a coding lesson and an RPG tutorial screen.

---

# Slide 1 — Title

## Day 15: "The Magic Mirror"
### DOM Part 1 — Selecting & Modifying Elements

**Arc: The Dungeon (Days 15-21)**

*You stand before a shimmering mirror that reflects the web page. Touch the mirror... and reality changes.*

> Speaker Notes: Welcome to The Dungeon arc! This is where JavaScript gets truly powerful — we start controlling what users actually see on screen. The DOM is the bridge between your code and the browser. Today we learn to reach through the mirror.

---

# Slide 2 — The Story

## The Magic Mirror

You descend the stone steps into the dungeon and discover a vast mirror covering an entire wall. But this is no ordinary mirror — it reflects the structure of the web page itself. Every heading, paragraph, and button has a reflection in the mirror world.

The ancient inscription reads: *"He who controls the reflection... controls reality."*

You reach out and touch a word in the mirror. On the other side of the wall, you hear it change. The DOM is yours to command.

> Speaker Notes: The DOM (Document Object Model) is literally a mirror of your HTML. The browser reads your HTML and builds a tree of objects — that's the DOM. When you change those objects with JavaScript, the page updates instantly. It's the most satisfying thing in web development.

---

# Slide 3 — Today's XP Rewards

## XP Rewards for Day 15

| Action | XP |
|---|---|
| Attend the quest | +10 XP |
| Complete the exercise | +20 XP |
| Bonus challenge | +15 XP |

**Skill unlocked:** DOM Selection — the ability to find any element in the mirror world.

> Speaker Notes: Remind students of the leaderboard. Bonus XP today goes to anyone who can select and modify 3 different elements without looking at notes.

---

# Slide 4 — The HTML Dungeon Map

## Your Dungeon HTML

This is the HTML you'll be working with today — the "real world" that the mirror reflects:

```html
<div id="dungeon">
  <h1 class="title">The Dungeon</h1>
  <p class="description">A dark room.</p>
  <button id="torch-btn">Light Torch</button>
</div>
```

Think of each HTML element as a creature in the dungeon. The DOM mirror lets you find them, inspect them, and change them.

> Speaker Notes: Have students open this HTML in their browser. Walk through how each tag becomes a node in the DOM tree. Draw the tree on the whiteboard if possible — div at top, h1/p/button as children.

---

# Slide 5 — Core Concept: Finding Elements

## Spell #1: Finding Elements in the Mirror

**Game Analogy:** `getElementById` is like calling a monster by its true name — it must answer. `querySelector` is a search spell that finds the first match.

```js
const btn = document.getElementById('torch-btn');
const title = document.querySelector('.title');
const allP = document.querySelectorAll('p');
```

- `getElementById` — finds one element by ID (fastest spell)
- `querySelector` — finds first match using CSS selectors
- `querySelectorAll` — finds ALL matches, returns a NodeList

> Speaker Notes: Emphasize that getElementById returns a single element or null. querySelector uses CSS selector syntax they already know. querySelectorAll returns a NodeList, not an array — we'll deal with that distinction later. For now, you can loop over it with forEach.

---

# Slide 6 — Core Concept: Changing Text

## Spell #2: Rewriting the Mirror

**Game Analogy:** Changing `textContent` is like erasing a monster's name tag and writing a new one. The monster transforms instantly.

```js
const title = document.querySelector('.title');
title.textContent = 'The Bright Chamber';
```

- `textContent` — gets or sets the plain text inside an element
- `innerHTML` — gets or sets HTML content (use with caution!)
- Changes appear instantly on screen — the mirror obeys

> Speaker Notes: Show the difference between textContent and innerHTML. textContent is safer because it treats everything as plain text. innerHTML can parse HTML tags but opens the door to XSS attacks. For now, stick with textContent. Show this live in the browser — change the title and watch it update.

---

# Slide 7 — Core Concept: classList

## Spell #3: Changing an Element's Armor

**Game Analogy:** `classList` is like swapping armor on a character. Add a class = equip new armor. Remove = unequip. Toggle = swap on/off.

```js
const room = document.getElementById('dungeon');
room.classList.add('lit');
room.classList.remove('dark');
room.classList.toggle('hidden');
```

- `.add('class')` — equip a CSS class
- `.remove('class')` — unequip a CSS class
- `.toggle('class')` — flip on/off (great for show/hide)

> Speaker Notes: This is incredibly powerful because all the styling is handled by CSS. Your JavaScript just adds and removes classes. Show a live example where adding a 'lit' class changes the background from black to gold. This separation of concerns is key.

---

# Slide 8 — Core Concept: setAttribute

## Spell #4: Enchanting Attributes

**Game Analogy:** `setAttribute` is like enchanting an item with a magical property. You can add, change, or read any attribute on an element.

```js
const btn = document.getElementById('torch-btn');
btn.setAttribute('disabled', 'true');
btn.getAttribute('id'); // 'torch-btn'
btn.removeAttribute('disabled');
```

- `setAttribute(name, value)` — add or change an attribute
- `getAttribute(name)` — read an attribute's value
- `removeAttribute(name)` — remove an attribute entirely

> Speaker Notes: Common use cases: disabling buttons, changing image sources, updating href links, adding data attributes. Mention that for common properties like id, className, src, href, you can also set them directly as properties (btn.disabled = true). Both approaches work.

---

# Slide 9 — Live Demo

## Live Demo: Light the Torch

**What we'll build:** A button that, when clicked, changes the dungeon from dark to light.

Steps:
1. Select the dungeon `div` and the button
2. On button click, toggle the `lit` class on the dungeon
3. Change the button text from "Light Torch" to "Douse Torch"
4. Change the description text to "A warm, glowing room."

*Open your browser DevTools console and follow along!*

> Speaker Notes: Code this live. Start by just selecting elements in the console and logging them. Then modify textContent. Then show classList.toggle. Build it up step by step. Let students try each line in their own console before moving on.

---

# Slide 10 — Battle Time

## Battle Time: Mirror Manipulation

**Your quest:** Create an HTML page with a character card. Use JavaScript to:

1. Select the character name and change it to your name
2. Add a "highlight" class to the card
3. Change the character's level text to "Level 15"
4. Disable the "Delete Character" button using setAttribute

**Bonus (+15 XP):** Add a "Toggle Dark Mode" button that swaps a `dark-mode` class on the `<body>`.

> Speaker Notes: Give students 15-20 minutes. Walk around and help. Common mistakes: forgetting to wrap querySelector selectors in quotes, misspelling class names, trying to use querySelector without a dot for classes or hash for IDs. The bonus challenge requires addEventListener which they haven't learned yet — but let them try to figure it out or just use an inline onclick.

---

# Slide 11 — Quick Reference

## Quick Reference: DOM Selection & Modification

| Spell | What It Does | Returns |
|---|---|---|
| `getElementById(id)` | Find by ID | Element or null |
| `querySelector(css)` | Find first match | Element or null |
| `querySelectorAll(css)` | Find all matches | NodeList |
| `.textContent` | Get/set text | String |
| `.classList.add()` | Add CSS class | undefined |
| `.classList.remove()` | Remove CSS class | undefined |
| `.classList.toggle()` | Toggle CSS class | Boolean |
| `.setAttribute(n, v)` | Set attribute | undefined |
| `.getAttribute(n)` | Get attribute | String or null |

> Speaker Notes: Encourage students to screenshot this or bookmark the MDN docs for these methods. These are the bread and butter of DOM manipulation — they'll use them every single day as web developers.

---

# Slide 12 — Next Quest Preview

## Next Quest: Day 16 — "Pulling the Levers"

Tomorrow you discover a room full of levers, buttons, and pressure plates. Each one triggers a different trap or treasure.

**You'll learn:**
- `addEventListener` — wiring up interactions
- The event object — data about what happened
- Event delegation — one listener to rule them all

*The dungeon is interactive now. Nothing happens until you pull the lever.*

> Speaker Notes: Tease that tomorrow is when things get truly interactive. Today we learned to find and change elements. Tomorrow we learn to REACT to user actions. That's the missing piece — combining selection + events = interactive web apps.
