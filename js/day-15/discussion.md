# Day 15: The Magic Mirror

## Quest: Learn to see and change the HTML world through the DOM

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> Deep in the dungeon, you find a shimmering mirror mounted on a stone wall.
> But this is no ordinary mirror -- it doesn't reflect your face. It reflects
> **the structure of the entire room.**
>
> Every torch, every door, every inscription on the wall -- the mirror shows
> them all as a glowing tree of connected nodes. And here's the wild part:
> **if you reach into the mirror and change something, the room changes too.**
>
> Move a torch in the mirror? The real torch moves. Change an inscription?
> The stone letters rearrange themselves. This is the **Magic Mirror** --
> and in the world of web development, we call it the **DOM.**
>
> Today you'll learn to peer into the mirror, find specific elements, and
> change them with your bare hands.

---

## THE SPELL -- Core Concepts (~10 min)

### What is the DOM?

DOM stands for **Document Object Model**. When a browser loads an HTML page,
it builds a tree-like structure in memory that represents every element.

```
document
  └── html
       ├── head
       │    └── title
       └── body
            ├── h1
            ├── p
            └── div
                 └── span
```

JavaScript can read and modify this tree. That's how web pages become
interactive -- JS talks to the DOM, and the DOM updates what you see.

> **Analogy:** The HTML file is the architect's blueprint. The DOM is the
> actual building. JavaScript is the construction crew that can remodel
> the building while people are living in it.

---

### Selecting Elements -- Finding things in the mirror

**By ID (fastest, returns one element):**

```js
const boss = document.getElementById("boss-name");
```

**By CSS selector (returns first match):**

```js
const firstTrap = document.querySelector(".trap");
const title = document.querySelector("h1");
const special = document.querySelector("#boss-name .title");
```

**By CSS selector (returns ALL matches):**

```js
const allTraps = document.querySelectorAll(".trap");
// Returns a NodeList (array-like). Use forEach or spread to loop.
```

> **Rule of thumb:** Use `querySelector` and `querySelectorAll` for almost
> everything. They accept any CSS selector, so they're the most flexible.
> Use `getElementById` when you want raw speed on a known ID.

---

### Modifying Content -- Changing the inscriptions

```js
element.textContent = "New text";   // Sets plain text (safe, no HTML parsing)
element.innerHTML = "<b>Bold!</b>"; // Sets HTML (parses tags -- be careful!)
element.innerText = "Visible text"; // Like textContent but respects CSS visibility
```

> **Security note:** Never put user input directly into `.innerHTML`.
> An attacker could inject `<script>` tags. Use `.textContent` for user data.

---

### Modifying Styles -- Repainting the walls

**Inline styles (one property at a time):**

```js
element.style.color = "crimson";
element.style.backgroundColor = "black";  // camelCase, not kebab-case!
element.style.fontSize = "24px";
```

**Class manipulation (preferred for multiple style changes):**

```js
element.classList.add("poisoned");
element.classList.remove("poisoned");
element.classList.toggle("hidden");       // adds if missing, removes if present
element.classList.contains("active");     // returns true or false
```

> **Best practice:** Keep your styles in CSS classes. Use JS only to
> add/remove those classes. This keeps style and logic separated.

---

### Attributes -- Reading the runes

```js
element.setAttribute("data-damage", "50");
element.getAttribute("data-damage");        // "50"
element.removeAttribute("disabled");
element.hasAttribute("hidden");             // true or false
```

---

## THE BATTLE -- Live Demo (~10 min)

Walk through `examples.js` together. These examples are designed to run in
a browser console. Open the sample HTML (shown in comments in the file)
in a browser, then paste the JS snippets into the DevTools console.

Key demo moments:
1. Open DevTools, show the Elements tab -- "This is the Magic Mirror!"
2. Use `getElementById` and `querySelector` to grab elements
3. Change `.textContent` and watch the page update live
4. Toggle a CSS class on/off and watch styles change
5. Read and set a `data-*` attribute

---

## THE LOOT -- Exercises (~5 min)

Hand out `exercises.js`. Students create a simple HTML file (provided in
comments) and write JS to manipulate it.

**Bonus Challenge (+15 XP):**
Build a "potion mixer" that changes a div's background color and text
based on which potion class is toggled.

---

## Quick Reference

| Method | Returns | Use When |
|--------|---------|----------|
| `getElementById("id")` | Single element | You know the exact ID |
| `querySelector(".css")` | First match | You want one element by any selector |
| `querySelectorAll(".css")` | NodeList (all) | You want multiple elements |
| `.textContent` | String | Safe text read/write |
| `.innerHTML` | String | Need to read/write HTML tags |
| `.classList.add/remove/toggle` | void/boolean | Toggle CSS classes |
| `.setAttribute(k, v)` | void | Set any HTML attribute |
