# Day 9: "The Hidden Caves" — Scope & Closures

## The Forest Arc - Chapter 2

**Estimated Time: 25-30 minutes**

---

## Story Intro (2 minutes)

> *Deeper in The Forest, you discover a network of hidden caves. Each cave has its own chambers, and some chambers are nested inside others. The treasures inside each chamber can only be seen from within that chamber or from deeper chambers — but never from the outside.*
>
> *"Be careful," your guide warns. "These caves have rules. What's inside stays inside. But if you're deep enough, you can still reach back to where you came from."*
>
> *Today we explore **scope** — the rules that determine where variables can be accessed — and **closures** — magical functions that remember the cave they were born in, even after they leave.*

---

## Concept 1: Global, Function, and Block Scope (8 minutes)

### The Three Levels of the Caves

**Global scope** = the entrance hall. Everyone can see what's here.
**Function scope** = a private chamber. Only code inside the function can see its variables.
**Block scope** = a locked chest inside a chamber. Only the code inside `{ }` can see `let`/`const` variables.

**Key points to cover:**

1. Variables declared outside any function are **global** — accessible everywhere
2. Variables declared inside a function with `var`, `let`, or `const` are **function-scoped**
3. `let` and `const` are also **block-scoped** (inside `if`, `for`, `while` blocks)
4. `var` is NOT block-scoped — it leaks out of blocks (but not functions)
5. This is why we prefer `let` and `const` over `var`

### Live Demo Notes

```
Show a global variable accessed inside a function
Show a function variable that can't be accessed outside
Show let vs var inside an if-block
Emphasize: var leaks out of blocks, let/const don't
```

---

## Concept 2: Lexical Scoping & The Scope Chain (7 minutes)

### Looking Back Toward the Entrance

When JavaScript encounters a variable, it looks for it in the current scope. If it doesn't find it, it looks in the outer scope, then the outer-outer scope, all the way to global scope. This is the **scope chain**.

**Lexical scoping** means the scope is determined by WHERE the function is written in the code, not where it's called.

**Key points to cover:**

1. Inner functions can access variables from outer functions
2. The lookup goes outward, never inward
3. Scope is determined at write-time (lexical), not at call-time
4. Each function creates a new scope

### Live Demo Notes

```
Show a nested function accessing a variable from its parent
Show a 3-level nesting (global -> outer -> inner)
Show that a parent CANNOT access a child's variables
Diagram it: draw concentric circles or nested boxes
```

---

## Concept 3: Closures (10 minutes)

### Functions That Remember

A **closure** is a function that remembers the variables from the scope where it was created, even after that outer function has finished running.

Analogy: A treasure map drawn inside a cave still works even after you leave the cave. The map "closes over" the location of the treasure.

**Key points to cover:**

1. A closure is created whenever a function is defined inside another function
2. The inner function retains access to the outer function's variables
3. This works even after the outer function has returned
4. Each call to the outer function creates a NEW closure with its own variables
5. Closures are not a special syntax — they happen automatically

### Live Demo Notes

```
Start simple: function that returns a function
Show that the returned function still accesses the outer variable
Show a counter that maintains state between calls
Show that two counters from the same factory are independent
```

---

## Concept 4: Practical Closure Patterns (5 minutes)

### Using Closures in the Wild

1. **Counter / State** — maintain a count without global variables
2. **Private data** — hide variables that shouldn't be directly accessed
3. **Function factories** — create customized functions
4. **Memoization** — cache expensive computations

### Live Demo Notes

```
Show a makeCounter() function
Show a createPlayer() with private HP (can't be set directly)
Show a damageMultiplier factory
```

---

## Exercises Handout (2 minutes)

Hand out `exercises.js`. Students should work through problems 1-5, with a bonus challenge.

- **Problem 1:** Identify scope — predict what logs and why
- **Problem 2:** Fix scope bugs in broken code
- **Problem 3:** Create a basic closure (counter)
- **Problem 4:** Build a function factory using closures
- **Problem 5:** Create a player with private data using closures
- **Bonus:** Build a treasure vault with closure-based access control

---

## Key Takeaways

- **Global scope**: accessible everywhere (avoid overusing it)
- **Function scope**: variables inside a function stay inside
- **Block scope**: `let`/`const` inside `{}` stay inside (but `var` leaks)
- **Scope chain**: JS looks outward through scopes to find variables
- **Closures**: inner functions remember their outer scope, even after the outer function returns
- Closures enable private state, function factories, and more
