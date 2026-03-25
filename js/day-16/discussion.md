# Day 16: Pulling the Levers

## Quest: Learn to listen for and respond to events in the DOM

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> You've pushed deeper into the dungeon and found yourself in a room full
> of levers, pressure plates, and trip wires. Each mechanism is connected
> to something -- a door, a trap, a hidden treasure. But nothing happens
> until you **interact** with them.
>
> Pull a lever? A gate opens. Step on a plate? Arrows fly from the wall.
> Type the wrong password on the rune panel? The floor drops out.
>
> These are **events** -- things that happen when a user (that's you)
> interacts with the page. A click. A keystroke. A mouse hover. A form
> submission. The browser is constantly watching, waiting for something
> to happen. Your job is to **listen** for these events and decide what
> to do when they fire.
>
> Today you learn to wire up the levers.

---

## THE SPELL -- Core Concepts (~10 min)

### addEventListener -- Wiring up a lever

The core method for handling events:

```js
element.addEventListener("eventName", handlerFunction);
```

Three parts:
1. **The element** -- which lever are we wiring?
2. **The event name** -- what triggers it? (`"click"`, `"keydown"`, etc.)
3. **The handler** -- what function runs when it fires?

```js
const lever = document.getElementById("lever-1");

lever.addEventListener("click", function() {
  console.log("The gate opens!");
});
```

Or with an arrow function:

```js
lever.addEventListener("click", () => {
  console.log("The gate opens!");
});
```

Or with a named function (useful if you want to remove it later):

```js
function openGate() {
  console.log("The gate opens!");
}

lever.addEventListener("click", openGate);

// Later, to disconnect the lever:
lever.removeEventListener("click", openGate);
```

---

### The Event Object -- Intel from the trap

When an event fires, the browser passes an **event object** to your handler.
It contains details about what happened:

```js
lever.addEventListener("click", function(e) {
  console.log(e.type);    // "click"
  console.log(e.target);  // the element that was clicked
  console.log(e.clientX); // mouse X position
  console.log(e.clientY); // mouse Y position
});
```

**Key properties:**
| Property | What it tells you |
|----------|------------------|
| `e.type` | The event type (`"click"`, `"keydown"`, etc.) |
| `e.target` | The actual element that triggered the event |
| `e.currentTarget` | The element the listener is attached to |
| `e.preventDefault()` | Stop the default browser behavior |
| `e.stopPropagation()` | Stop the event from bubbling up |

---

### Common Events

```
Mouse:      click, dblclick, mouseover, mouseout, mousedown, mouseup
Keyboard:   keydown, keyup, keypress (deprecated)
Form:       submit, input, change, focus, blur
Window:     load, resize, scroll
```

### preventDefault -- Disarming the trap

Some elements have default behavior. Forms submit and reload the page.
Links navigate away. `preventDefault()` stops that:

```js
form.addEventListener("submit", function(e) {
  e.preventDefault();  // Stop the page from reloading!
  console.log("Form captured, not submitted.");
});
```

---

### Event Delegation -- One lever to rule them all

Instead of attaching a listener to every single item, attach ONE listener
to the parent and check which child was clicked:

```js
const inventory = document.getElementById("inventory");

inventory.addEventListener("click", function(e) {
  if (e.target.classList.contains("item")) {
    console.log("You selected:", e.target.textContent);
  }
});
```

**Why use delegation?**
- Fewer listeners = better performance
- Works for elements added later (dynamically created)
- Cleaner code

> **Analogy:** Instead of wiring every single floor tile to detect footsteps,
> you wire the entire floor once. When someone steps on any tile, you check
> WHICH tile they hit. One wire, infinite tiles.

---

## THE BATTLE -- Live Demo (~10 min)

Walk through `examples.js` together. Open the sample HTML in a browser
and paste snippets into the console.

Key demo moments:
1. Add a click listener to a button and watch it fire
2. Log the event object and explore its properties
3. Show `e.preventDefault()` on a form submit
4. Demonstrate event delegation on a list
5. Show `keydown` -- build a mini "type the password" demo

---

## THE LOOT -- Exercises (~5 min)

Hand out `exercises.js`. Students build interactive dungeon controls using
event listeners.

**Bonus Challenge (+15 XP):**
Build a rune panel -- listen for keydown events and check if the player
types a secret password one letter at a time.

---

## Quick Reference

| Pattern | Code |
|---------|------|
| Add listener | `el.addEventListener("click", fn)` |
| Remove listener | `el.removeEventListener("click", fn)` |
| Prevent default | `e.preventDefault()` |
| Get clicked element | `e.target` |
| Get event type | `e.type` |
| Get key pressed | `e.key` |
| Delegation pattern | Listen on parent, check `e.target` |
