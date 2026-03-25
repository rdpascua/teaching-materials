# Day 11: "Sorting the Loot" — Arrays (Part 2)

## The Forest Arc - Chapter 4

**Estimated Time: 25-30 minutes**

---

## Story Intro (2 minutes)

> *Your inventory bag is overflowing with loot from the forest. You've got rusty daggers mixed with legendary swords, worthless pebbles next to rare gems, and potions buried under piles of goblin teeth.*
>
> *"You can't just THROW things in the bag," your mentor sighs. "You need to **sort** the loot, **filter** out the junk, **transform** items for sale, and **reduce** everything to a total value. Let me teach you the advanced bag techniques."*
>
> *Today we learn the powerful array methods that let you iterate, transform, filter, and combine data.*

---

## Concept 1: forEach — Iterate Through Items (3 minutes)

### Looking at Every Item

`.forEach()` calls a function once for each element. It doesn't return anything — it's for performing actions (logging, updating external state).

**Key points:**
1. `array.forEach((item, index, array) => { ... })`
2. Does NOT return a new array (returns `undefined`)
3. Good for side effects (logging, updating DOM, etc.)
4. Cannot `break` out early (use a `for` loop if you need to break)

### Live Demo Notes
```
Show forEach to log each item with its index
Compare to a for loop — forEach is cleaner when you don't need break
```

---

## Concept 2: map — Transform Each Item (5 minutes)

### Upgrading Your Loot

`.map()` creates a NEW array by transforming each element.

**Key points:**
1. `const newArray = array.map((item, index) => transformedItem)`
2. Returns a NEW array (original unchanged)
3. The new array is always the SAME LENGTH as the original
4. Use map when you want to transform data, not when you want side effects

### Live Demo Notes
```
Map item names to uppercase
Map numbers to doubled values
Map objects — add a new property to each
Emphasize: map returns a new array, doesn't modify the original
```

---

## Concept 3: filter — Keep What Matters (5 minutes)

### Separating Treasure from Junk

`.filter()` creates a new array with only the elements that pass a test.

**Key points:**
1. `const filtered = array.filter((item) => condition)`
2. The callback must return `true` or `false`
3. Returns a new array (possibly shorter, possibly empty)
4. Original array unchanged

### Live Demo Notes
```
Filter items by value (keep only valuable loot)
Filter by type (only potions)
Show that filter can return an empty array
Chain: filter then map
```

---

## Concept 4: reduce — Combine Everything (7 minutes)

### Appraising Total Value

`.reduce()` takes all elements and combines them into a single value.

**Key points:**
1. `array.reduce((accumulator, current) => newAccumulator, initialValue)`
2. The accumulator carries the running result
3. ALWAYS provide an initial value (second argument)
4. Can reduce to any type: number, string, object, array

### Live Demo Notes
```
Sum an array of numbers (total gold)
Reduce to find the max value item
Reduce to build an object (count item types)
Walk through each step: show accumulator at each iteration
```

---

## Concept 5: find, findIndex, some, every (5 minutes)

### Quick Searches and Checks

- `.find(fn)` — returns the FIRST element that matches (or `undefined`)
- `.findIndex(fn)` — returns the INDEX of the first match (or `-1`)
- `.some(fn)` — returns `true` if ANY element passes the test
- `.every(fn)` — returns `true` if ALL elements pass the test

### Live Demo Notes
```
find: locate the first legendary item
findIndex: where is the first potion?
some: do we have any healing items?
every: are all items identified?
```

---

## Concept 6: sort (3 minutes)

### Organizing the Loot

`.sort()` sorts the array IN PLACE (mutates it!).

**Key points:**
1. Default sort is ALPHABETICAL (even for numbers!)
2. `[10, 2, 30].sort()` gives `[10, 2, 30]` — WRONG! (sorts as strings)
3. For numbers: `.sort((a, b) => a - b)` for ascending
4. For numbers: `.sort((a, b) => b - a)` for descending
5. Mutates the original array

### Live Demo Notes
```
Show the default sort gotcha with numbers
Show (a, b) => a - b pattern
Sort objects by a property
```

---

## Exercises Handout (2 minutes)

- **Problem 1:** forEach — display a formatted loot list
- **Problem 2:** map — transform loot data
- **Problem 3:** filter — select items by criteria
- **Problem 4:** reduce — calculate totals
- **Problem 5:** Combine methods to analyze a loot table
- **Bonus:** Build a full loot management pipeline

---

## Key Takeaways

- `.forEach()` — iterate (no return value)
- `.map()` — transform (returns new array, same length)
- `.filter()` — select (returns new array, possibly shorter)
- `.reduce()` — combine into single value (the Swiss army knife)
- `.find()` / `.findIndex()` — locate first match
- `.some()` / `.every()` — boolean checks
- `.sort()` — order items (mutates! use `a - b` for numbers)
- These methods can be CHAINED: `array.filter(...).map(...).sort(...)`
