# Day 10: "The Inventory Bag" — Arrays (Part 1)

## The Forest Arc - Chapter 3

**Estimated Time: 25-30 minutes**

---

## Story Intro (2 minutes)

> *After navigating the caves, you stumble upon an old merchant's camp. Among the abandoned supplies, you find a magical **Inventory Bag** — it can hold as many items as you want, and each item has a numbered slot.*
>
> *"Arrays!" the merchant's ghost whispers. "The most useful tool an adventurer can have. You can add items, remove items, search through them, and rearrange them at will."*
>
> *Today we learn to use **arrays** — ordered lists of values — the inventory system of JavaScript.*

---

## Concept 1: Creating Arrays & Accessing Elements (5 minutes)

### Your First Inventory Bag

An array is an ordered list. Each item has an index (position number), starting at 0.

**Key points to cover:**

1. Array literal syntax: `const bag = ["Sword", "Shield", "Potion"]`
2. Index starts at **0**, not 1
3. Access with bracket notation: `bag[0]` gives "Sword"
4. Assign to an index: `bag[1] = "Iron Shield"`
5. Arrays can hold mixed types: `[42, "text", true, null]`
6. `.length` tells you how many items are in the array

### Live Demo Notes

```
Create an inventory array
Access items by index
Show that index starts at 0 (off-by-one is a classic bug)
Show .length
Show accessing an index that doesn't exist (returns undefined)
```

---

## Concept 2: Adding & Removing Items (8 minutes)

### Managing Your Inventory

**Key points to cover:**

1. `.push(item)` — add to the END (most common)
2. `.pop()` — remove from the END (returns the removed item)
3. `.unshift(item)` — add to the BEGINNING
4. `.shift()` — remove from the BEGINNING (returns the removed item)

**Memory trick:**
- push/pop = back of the bag
- shift/unshift = front of the bag
- The "un-" methods add, the short names remove

### Live Demo Notes

```
Start with an inventory: ["Sword", "Shield"]
push a potion, show the array
pop it off, show what was returned
unshift a helmet, show the array
shift it off, show what was returned
Emphasize: push/pop are fast, shift/unshift are slow (re-indexing)
```

---

## Concept 3: Splice & Slice (8 minutes)

### Surgery on Your Inventory

These two are often confused. Use this distinction:
- **splice** = MODIFIES the original array (it "splices" things in/out)
- **slice** = COPIES a portion (like slicing a piece of cake — cake is still there)

**splice(startIndex, deleteCount, ...newItems)**
- Removes `deleteCount` items starting at `startIndex`
- Optionally inserts `newItems` at that position
- Returns the removed items
- MUTATES the original array

**slice(startIndex, endIndex)**
- Returns a new array from `startIndex` up to (but NOT including) `endIndex`
- Does NOT mutate the original
- Negative indices count from the end

### Live Demo Notes

```
Show splice to remove an item from the middle
Show splice to insert an item at a specific position
Show splice to replace an item
Show slice to grab a sub-section
Show slice with negative indices
Emphasize: splice changes the original, slice does not
```

---

## Concept 4: Searching Your Inventory (5 minutes)

### Finding Items in the Bag

**Key points to cover:**

1. `.indexOf(item)` — returns the first index where item is found, or -1
2. `.includes(item)` — returns true/false (cleaner for just checking existence)
3. `.lastIndexOf(item)` — like indexOf but searches from the end

### Live Demo Notes

```
Search for an item that exists
Search for an item that doesn't exist (-1 from indexOf, false from includes)
Show the common pattern: if (bag.indexOf(item) !== -1) vs if (bag.includes(item))
```

---

## Exercises Handout (2 minutes)

- **Problem 1:** Create and manipulate an inventory array
- **Problem 2:** Use push, pop, shift, unshift to manage a queue
- **Problem 3:** Use splice to modify an array in specific ways
- **Problem 4:** Use slice to extract sub-arrays
- **Problem 5:** Build an inventory manager with search functionality
- **Bonus:** Implement a "crafting" system that combines items

---

## Key Takeaways

- Arrays are ordered lists with zero-based indexing
- `.push()` / `.pop()` work on the end; `.shift()` / `.unshift()` on the start
- `.splice()` modifies the original array; `.slice()` creates a copy
- `.includes()` for existence checks; `.indexOf()` when you need the position
- Arrays can hold any type of value, including other arrays
