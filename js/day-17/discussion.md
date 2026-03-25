# Day 17: Summoning & Banishing

## Quest: Learn to create, remove, and traverse DOM elements

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> In the deepest chamber of the dungeon, you discover an ancient spellbook.
> It teaches two forbidden arts:
>
> **Summoning** -- conjuring allies out of thin air. Need a warrior?
> Speak the incantation, and one appears. Need a whole squad? Summon them
> one by one and place them exactly where you want.
>
> **Banishing** -- destroying enemies with a word. Point at a creature,
> speak the spell, and it vanishes from existence.
>
> In DOM terms, summoning means **creating new HTML elements** with JavaScript
> and adding them to the page. Banishing means **removing elements** from the
> page. And to know WHERE to place or remove things, you need to **traverse**
> the DOM tree -- walking from parent to child to sibling.
>
> Today you become a summoner.

---

## THE SPELL -- Core Concepts (~10 min)

### Creating Elements -- The Summoning Ritual

Three steps to summon an element into existence:

```js
// Step 1: Create the element (it exists, but is floating in limbo)
const newEnemy = document.createElement("li");

// Step 2: Configure it (give it content, classes, attributes)
newEnemy.textContent = "Shadow Wraith";
newEnemy.classList.add("enemy");
newEnemy.setAttribute("data-hp", "60");

// Step 3: Attach it to the DOM (now it appears on the page!)
document.getElementById("enemy-list").appendChild(newEnemy);
```

> **Analogy:** `createElement` writes the summoning circle on the floor.
> Setting properties fills the circle with power. `appendChild` completes
> the ritual and brings the creature into the world.

---

### Placement Methods -- Where to summon

```js
parent.appendChild(child);    // Add at the END of parent's children
parent.prepend(child);        // Add at the BEGINNING
parent.append(child);         // Like appendChild, but can take strings too
parent.insertBefore(new, ref); // Insert 'new' before 'ref' element
```

**append vs appendChild:**
```js
// append can take multiple items and raw strings
container.append("Hello ", boldEl, " world!");

// appendChild only takes one Node, and returns it
const added = container.appendChild(newEl);
```

---

### Removing Elements -- The Banishing Spell

```js
// Modern way: element removes itself
enemy.remove();

// Old way: parent removes child
parent.removeChild(enemy);
```

Both achieve the same result. Use `.remove()` in modern code.

---

### Cloning -- Duplicating allies

```js
const clone = original.cloneNode(true);  // true = deep clone (includes children)
const shallow = original.cloneNode(false); // false = just the element, no children
```

> Cloning is useful when you have a "template" element and want to make
> copies of it with slight variations.

---

### DOM Traversal -- Navigating the dungeon map

Every element knows its neighbors:

```
             parentElement
                  |
    previousElementSibling -- [element] -- nextElementSibling
                                |
                            children
                          /     |     \
                     [first] [middle] [last]
                      child           child
```

```js
element.parentElement          // go up to parent
element.children               // HTMLCollection of child elements
element.firstElementChild      // first child element
element.lastElementChild       // last child element
element.nextElementSibling     // next sibling element
element.previousElementSibling // previous sibling element
```

> **Note:** Use the `Element` versions (e.g., `nextElementSibling`), not
> `nextSibling`. The non-Element versions include text nodes and whitespace,
> which is almost never what you want.

---

## THE BATTLE -- Live Demo (~10 min)

Walk through `examples.js` together. Open the sample HTML in a browser
and paste snippets into the console.

Key demo moments:
1. Create a new `<li>` and append it to a list -- watch it appear
2. Prepend an element -- show it appears at the top
3. Remove an element -- watch it vanish
4. Clone an element and modify the clone
5. Traverse: start at one element and walk to its parent, siblings, children

---

## THE LOOT -- Exercises (~5 min)

Hand out `exercises.js`. Students build a party management system --
summoning heroes, banishing defeated ones, and navigating the roster.

**Bonus Challenge (+15 XP):**
Build a "Summon Army" function that creates N warriors at once, each
with unique names and stats.

---

## Quick Reference

| Action | Method |
|--------|--------|
| Create element | `document.createElement("tag")` |
| Add at end | `parent.appendChild(child)` |
| Add at start | `parent.prepend(child)` |
| Add flexible | `parent.append(child, "text", ...)` |
| Remove self | `element.remove()` |
| Remove child | `parent.removeChild(child)` |
| Clone | `element.cloneNode(true/false)` |
| Go up | `element.parentElement` |
| Go down | `element.children` / `element.firstElementChild` |
| Go sideways | `element.nextElementSibling` / `element.previousElementSibling` |
