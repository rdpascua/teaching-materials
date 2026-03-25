# Day 12: "The Monster Field Guide" — Objects

## The Forest Arc - Chapter 5

**Estimated Time: 25-30 minutes**

---

## Story Intro (2 minutes)

> *In a hollow tree, you discover a worn leather journal: **The Monster Field Guide**. Each page describes a different creature — its name, health, attack power, special abilities, and weaknesses. Some pages even have sub-sections with nested details.*
>
> *"Every monster is an **object**," the guide's author wrote. "A bundle of related data and actions, all wrapped together."*
>
> *Today we learn about **objects** — the fundamental way JavaScript organizes related data. If arrays are ordered lists, objects are labeled containers where every piece of data has a name.*

---

## Concept 1: Object Literals, Properties, Methods (7 minutes)

### Anatomy of a Monster

**Key points to cover:**

1. Object literal syntax: `{ key: value, key: value }`
2. Properties = data about the object (name, hp, attack)
3. Methods = functions attached to the object (abilities)
4. Keys are strings (quotes optional if valid identifier)
5. Values can be any type: numbers, strings, booleans, arrays, functions, other objects

### Live Demo Notes

```
Create a monster object with several properties
Add a method (attack function)
Show that methods are just properties whose values are functions
Show shorthand method syntax: { attack() { } }
```

---

## Concept 2: Dot Notation vs Bracket Notation (5 minutes)

### Two Ways to Read the Guide

**Dot notation:** `monster.name` — cleaner, most common
**Bracket notation:** `monster["name"]` — more flexible

**Key points:**
1. Dot notation works when you know the exact property name
2. Bracket notation is needed when:
   - The key is stored in a variable
   - The key has spaces or special characters
   - The key is computed dynamically
3. Both work for reading AND writing

### Live Demo Notes

```
Access properties both ways
Show a variable key: const stat = "hp"; monster[stat]
Show a key with spaces: monster["special attack"]
Show computed keys: monster["level" + num]
```

---

## Concept 3: Adding & Deleting Properties (3 minutes)

### Updating the Guide

**Key points:**
1. Add new properties anytime: `monster.newProp = value`
2. Delete properties: `delete monster.oldProp`
3. Check if a property exists: `"propName" in object` or `object.hasOwnProperty("propName")`
4. Accessing a non-existent property returns `undefined` (no error)

---

## Concept 4: The `this` Keyword (5 minutes)

### A Monster Knows Itself

When a method needs to reference its own object, it uses `this`.

**Key points:**
1. Inside a method, `this` refers to the object the method belongs to
2. Use `this.propertyName` to access other properties
3. Important: arrow functions do NOT have their own `this` (avoid for methods)
4. We'll go deeper into `this` in later lessons — for now, just the basics

### Live Demo Notes

```
Show a method that uses this.name and this.hp
Show what happens with an arrow function method (this is wrong)
Rule of thumb: use regular function syntax for methods
```

---

## Concept 5: Object.keys(), Object.values(), Object.entries() (4 minutes)

### Indexing the Guide

**Key points:**
1. `Object.keys(obj)` — returns array of property names
2. `Object.values(obj)` — returns array of property values
3. `Object.entries(obj)` — returns array of [key, value] pairs
4. These are great for iterating over objects

---

## Concept 6: Nested Objects (4 minutes)

### Detailed Monster Pages

Objects can contain other objects, creating rich data structures.

**Key points:**
1. Access nested properties: `monster.stats.attack`
2. Be careful with deeply nested access (intermediate might be undefined)
3. Optional chaining: `monster?.stats?.attack` (safe access)

---

## Exercises Handout (2 minutes)

- **Problem 1:** Create monster objects with properties and methods
- **Problem 2:** Use dot and bracket notation
- **Problem 3:** Add, modify, and delete properties
- **Problem 4:** Use Object.keys/values/entries to iterate
- **Problem 5:** Work with nested objects to build a full bestiary
- **Bonus:** Build a monster battle system using objects

---

## Key Takeaways

- Objects group related data as key-value pairs
- Dot notation (`obj.key`) for known keys; bracket notation (`obj["key"]`) for dynamic keys
- Methods are functions stored as object properties
- `this` inside a method refers to the object (use regular functions, not arrows)
- `Object.keys()`, `.values()`, `.entries()` convert objects to arrays for iteration
- Objects can be nested to represent complex data
