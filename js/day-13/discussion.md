# Day 13: "Unpacking the Treasure" — Destructuring & Spread

## The Forest Arc - Chapter 6

**Estimated Time: 25-30 minutes**

---

## Story Intro (2 minutes)

> *At the heart of The Forest, you discover an ancient treasure vault filled with ornate chests. Each chest is packed tightly with gold, gems, scrolls, and artifacts. You could reach in and pull items out one by one... or you could use the **Unpacking Spell** to extract exactly what you need in one swift motion.*
>
> *"Why grab items one at a time," your mentor says, "when you can unpack everything at once?"*
>
> *Today we learn **destructuring** — pulling values out of arrays and objects in a single elegant statement — and the **spread operator** — a way to unpack and recombine data effortlessly.*

---

## Concept 1: Array Destructuring (5 minutes)

### Unpacking a Chest in Order

Array destructuring lets you assign elements of an array to individual variables in one line.

**Key points to cover:**

1. Basic syntax: `const [first, second, third] = array`
2. Variables are assigned by POSITION (index 0, 1, 2...)
3. Skip elements with empty commas: `const [first, , third] = array`
4. Fewer variables than elements = remaining are ignored
5. More variables than elements = extras are `undefined`

### Live Demo Notes

```
Show the old way: const x = arr[0]; const y = arr[1];
Show the new way: const [x, y] = arr;
Show skipping elements
Show swapping variables: [a, b] = [b, a]
```

---

## Concept 2: Object Destructuring (7 minutes)

### Unpacking by Label

Object destructuring lets you pull specific properties into variables by NAME.

**Key points to cover:**

1. Basic syntax: `const { name, hp, attack } = monster`
2. Variables are matched by PROPERTY NAME (not position)
3. Rename variables: `const { name: monsterName } = monster`
4. Order doesn't matter (it's by name, not position)
5. Works with function parameters: `function greet({ name, level }) {}`

### Live Demo Notes

```
Show the old way: const name = obj.name; const hp = obj.hp;
Show the new way: const { name, hp } = obj;
Show renaming
Show destructuring in function parameters
Show only pulling what you need (ignore the rest)
```

---

## Concept 3: Default Values in Destructuring (3 minutes)

### Backup Loot

Defaults kick in when a value is `undefined` (missing from the array/object).

**Key points:**
1. Arrays: `const [a = 10, b = 20] = someArray`
2. Objects: `const { hp = 100, mp = 50 } = character`
3. Combine with renaming: `const { name: heroName = "Unknown" } = char`

---

## Concept 4: Spread Operator (7 minutes)

### Spreading the Treasure

The spread operator `...` "unpacks" an array or object into individual elements.

**Key points:**
1. Spread arrays: `[...arr1, ...arr2]` — combine arrays
2. Copy arrays: `const copy = [...original]`
3. Spread in function calls: `Math.max(...numbers)`
4. Spread objects: `{ ...obj1, ...obj2 }` — merge objects
5. Copy objects: `const copy = { ...original }`
6. Override properties: `{ ...defaults, ...userSettings }`

### Live Demo Notes

```
Combine two inventory arrays
Copy an array (independent copy)
Spread into function arguments
Merge two objects
Show property override order (last wins)
```

---

## Concept 5: Rest in Destructuring (4 minutes)

### "Keep the Rest"

The rest pattern `...rest` collects remaining elements into a new array/object.

**Key points:**
1. Arrays: `const [first, ...rest] = arr` — first is one item, rest is an array
2. Objects: `const { name, ...otherStats } = monster` — name is a string, otherStats is an object
3. Rest must be LAST
4. Different from spread: rest COLLECTS, spread EXPANDS

### Live Demo Notes

```
Show array rest: separate first item from remaining
Show object rest: pull out specific props, collect the rest
Show practical use: removing a property from an object
```

---

## Exercises Handout (2 minutes)

- **Problem 1:** Array destructuring — unpack loot from chests
- **Problem 2:** Object destructuring — extract monster stats
- **Problem 3:** Defaults — handle missing data gracefully
- **Problem 4:** Spread — combine and copy data
- **Problem 5:** Rest + destructuring — build a flexible party system
- **Bonus:** Build an equipment loadout system using all concepts

---

## Key Takeaways

- **Array destructuring** assigns by position: `const [a, b] = arr`
- **Object destructuring** assigns by name: `const { x, y } = obj`
- **Defaults** handle missing values: `const { hp = 100 } = char`
- **Spread** expands: `[...arr]` copies, `{...obj}` copies, combine with `[...a, ...b]`
- **Rest** collects: `const [first, ...remaining] = arr`
- Destructuring in function params makes code very clean
- Spread is your go-to for copying and merging arrays/objects
