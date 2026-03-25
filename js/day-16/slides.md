# NotebookLM Presentation Guide

This is a **gamified JavaScript bootcamp** called "JavaScript Quest: 0 to Hero in 30 Days."
Students progress through an RPG-style adventure. Days 15-21 are "The Dungeon" arc where
students descend into the browser dungeon, battling DOM monsters and async dragons.

Generate slides that are fun, visual, and engaging. Use game metaphors throughout.
Each slide should have a clear heading, concise bullet points, and speaker notes.
Think of this as a mix between a coding lesson and an RPG tutorial screen.

---

# Slide 1 — Title

## Day 16: "Pulling the Levers"
### DOM Part 2 — Events & Interaction

**Arc: The Dungeon (Days 15-21)**

*A room full of levers, buttons, and pressure plates. Each one wired to something... but what?*

> Speaker Notes: Yesterday we learned to find and modify DOM elements. But everything was manual — we typed into the console. Today we learn how to make the page respond to users. This is the day JavaScript truly comes alive.

---

# Slide 2 — The Story

## The Lever Room

You enter a chamber lined with levers on every wall. Some are brass, some iron, some crystal. A sign reads: *"Each lever is wired to an action. Pull wisely."*

You grab the first lever and pull. A torch ignites. You press a floor tile and a trapdoor opens. Every surface in this room is interactive — waiting for your input.

The DOM isn't just a mirror you stare at. It **listens**.

> Speaker Notes: Events are the nervous system of the web. Every click, keystroke, hover, scroll — they're all events. The browser fires them constantly. Today we learn to listen for them and respond. This is what separates a static page from a web application.

---

# Slide 3 — Today's XP Rewards

## XP Rewards for Day 16

| Action | XP |
|---|---|
| Attend the quest | +10 XP |
| Complete the exercise | +20 XP |
| Bonus challenge | +15 XP |

**Skill unlocked:** Event Binding — the ability to make the dungeon react to your commands.

> Speaker Notes: Today's bonus XP is for implementing event delegation. It's a tricky concept but incredibly useful. Hint at it now so students are listening for it.

---

# Slide 4 — The HTML Lever Room

## Your Lever Room HTML

```html
<div id="lever-room">
  <h1>The Lever Room</h1>
  <button id="torch-lever">Torch Lever</button>
  <button id="trap-lever">Trap Lever</button>
  <input id="spell-input" placeholder="Type a spell" />
  <ul id="spell-log"></ul>
</div>
```

Every lever (button) and input is waiting for an event listener. Without one, pulling the lever does nothing.

> Speaker Notes: Have students set up this HTML. Point out that right now clicking the buttons does absolutely nothing. That's because no one is listening. We need to attach event listeners — think of them as wires connecting the lever to an action.

---

# Slide 5 — Core Concept: addEventListener

## Spell #1: Wiring Up a Lever

**Game Analogy:** `addEventListener` connects a wire from a lever to a trap mechanism. You choose which lever (element), which action (event type), and what happens (callback).

```js
const btn = document.getElementById('torch-lever');
btn.addEventListener('click', function() {
  alert('The torch ignites!');
});
```

- First argument: the event type (`'click'`, `'keyup'`, `'submit'`)
- Second argument: the callback function to run
- The callback runs every time the event fires

> Speaker Notes: Walk through the syntax carefully. The function we pass is a callback — it doesn't run now, it runs later when the event fires. This is students' first real encounter with callbacks in a practical setting. Common event types: click, dblclick, mouseenter, mouseleave, keydown, keyup, submit, change, input.

---

# Slide 6 — Core Concept: The Event Object

## Spell #2: Reading the Lever's Data

**Game Analogy:** When you pull a lever, it sends back a scroll of information — which lever, where it was pulled, how hard. That's the event object.

```js
btn.addEventListener('click', function(event) {
  console.log(event.type);    // 'click'
  console.log(event.target);  // the button element
});
```

- `event.target` — the exact element that was interacted with
- `event.type` — what kind of event fired
- `event.preventDefault()` — stop default behavior (e.g., form submit)

> Speaker Notes: The event object is automatically passed to your callback by the browser. You just need to declare a parameter to receive it. event.target is the most important property — it tells you exactly which element was clicked/typed/hovered. Show this in the console with a click event.

---

# Slide 7 — Core Concept: Common Events

## The Dungeon's Many Triggers

| Event Type | When It Fires | Common Use |
|---|---|---|
| `click` | Element is clicked | Buttons, links |
| `input` | Input value changes | Live search, validation |
| `keydown` | Key is pressed down | Keyboard shortcuts |
| `submit` | Form is submitted | Form handling |
| `mouseenter` | Mouse enters element | Hover effects |
| `mouseleave` | Mouse leaves element | Hover effects |

- Pair `mouseenter`/`mouseleave` for hover interactions
- Use `input` instead of `keyup` for text fields — it catches paste too

> Speaker Notes: Don't overwhelm with all possible events. Focus on click and input for today. Mention that MDN has a full list of hundreds of events. The key insight: the browser is constantly firing events. You just choose which ones to listen for.

---

# Slide 8 — Core Concept: Event Delegation

## Spell #3: One Listener to Rule Them All

**Game Analogy:** Instead of wiring each lever individually, you enchant the entire wall. When any lever is pulled, the wall tells you which one.

```js
const room = document.getElementById('lever-room');
room.addEventListener('click', function(event) {
  if (event.target.matches('button')) {
    console.log('Lever pulled:', event.target.id);
  }
});
```

- Attach ONE listener to a parent element
- Use `event.target` to identify which child was clicked
- Works even for elements added later (dynamically created)

> Speaker Notes: Event delegation is a pattern, not a built-in feature. It works because of event bubbling — when you click a button, the click event bubbles up through every parent element. So the parent's listener catches it. The matches() method checks if the target is a specific selector. This is essential when you have many similar elements or when elements are added dynamically.

---

# Slide 9 — Live Demo

## Live Demo: The Interactive Lever Room

**What we'll build:**

1. Click "Torch Lever" — toggle a `lit` class on the room (changes background)
2. Click "Trap Lever" — show/hide a hidden message
3. Type in the spell input — display what you type in real time below it
4. Use event delegation on the `lever-room` div to log all button clicks

*Follow along in your browser!*

> Speaker Notes: Build this step by step. Start with the torch lever click handler. Then add the trap lever. Then do the input event. Finally, refactor the two button listeners into one delegated listener on the parent. Show students why delegation is cleaner — fewer listeners, works for future elements too.

---

# Slide 10 — Battle Time

## Battle Time: Wire the Dungeon

**Your quest:** Build an interactive control panel:

1. Create 3 buttons: "Red", "Green", "Blue"
2. Clicking a button changes the page background to that color
3. Add an input field — typing updates a live preview heading
4. Use event delegation: one listener on the button container handles all 3 buttons

**Bonus (+15 XP):** Add a keydown listener to the document — pressing "R", "G", or "B" also changes the color (keyboard shortcuts!).

> Speaker Notes: Give 15-20 minutes. The delegation part is the trickiest. Help students who are attaching 3 separate listeners refactor to one. For the bonus, remind them that event.key gives the pressed key as a string. Common gotcha: event.key is case-sensitive, so "r" !== "R" — they'll need to handle that.

---

# Slide 11 — Quick Reference

## Quick Reference: Events

| Method / Property | What It Does |
|---|---|
| `el.addEventListener(type, fn)` | Listen for an event |
| `el.removeEventListener(type, fn)` | Stop listening |
| `event.target` | Element that fired the event |
| `event.type` | Event type string |
| `event.preventDefault()` | Cancel default behavior |
| `event.target.matches(css)` | Check if target matches selector |
| `event.key` | Key that was pressed |

> Speaker Notes: removeEventListener requires passing the exact same function reference — anonymous functions can't be removed. This is a common gotcha. If students need to remove a listener, they should define the function with a name first.

---

# Slide 12 — Next Quest Preview

## Next Quest: Day 17 — "Summoning & Banishing"

Tomorrow you learn to summon new elements into existence and banish them from the page. The dungeon is no longer fixed — you can reshape it at will.

**You'll learn:**
- `createElement` — summoning new elements from nothing
- `appendChild` / `remove` — placing and destroying elements
- DOM traversal — navigating parent, child, and sibling nodes

*The mirror doesn't just reflect reality. You can add to it.*

> Speaker Notes: Day 17 completes the DOM trilogy. Selection, events, creation — with these three skills combined, students can build any interactive web interface. Tomorrow is where things click together.
