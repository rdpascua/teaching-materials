# Day 8: "The Arrow Upgrade" — Arrow Functions, Default/Rest Params, Callbacks

## The Forest Arc - Chapter 1

**Estimated Time: 25-30 minutes**

---

## Story Intro (2 minutes)

> *You've made it past the village gates and entered The Forest. The trees are thick, the paths are winding, and danger lurks behind every shadow. Before you venture deeper, the village blacksmith offers you an upgrade — sleeker, sharper arrow tips for your bow.*
>
> *"These aren't just any arrows," the blacksmith says. "They're lighter, faster, and hit just as hard. Once you switch, you'll never go back to the old clunky ones."*
>
> *Today, we upgrade our functions with **arrow functions** — a modern, sleeker syntax. We'll also learn about **default parameters** (backup gear), **rest parameters** (carrying unlimited items), and **callbacks** (giving orders to your party members).*

---

## Concept 1: Arrow Function Syntax (8 minutes)

### The Old Way vs. The New Way

Arrow functions (`=>`) were introduced in ES6 as a shorter way to write functions. Think of them as the upgraded arrow tips — same damage, lighter weight.

**Key points to cover:**

1. **Basic conversion** — remove the `function` keyword, add `=>` after the parameters
2. **Single parameter** — parentheses are optional
3. **Single expression** — curly braces are optional, return is implicit
4. **No parameters** — empty parentheses required
5. **Multi-line body** — needs curly braces and explicit `return`

### Live Demo Notes

```
Show side-by-side: traditional function vs arrow function
Start with a full arrow function, then simplify step by step
Emphasize: implicit return only works WITHOUT curly braces
```

**Common gotcha:** Returning an object literal inline requires wrapping in parentheses:
```js
const makeHero = (name) => ({ name, hp: 100 });
```

---

## Concept 2: Default Parameters (5 minutes)

### Backup Gear

Sometimes adventurers forget to bring supplies. Default parameters are your backup gear — if nothing is provided, the default kicks in.

**Key points to cover:**

1. Syntax: `function attack(weapon = "fists")`
2. Defaults only activate when the argument is `undefined` (not `null`, not `0`)
3. Defaults can reference earlier parameters
4. Works with both traditional and arrow functions

### Live Demo Notes

```
Show what happens when you call a function without arguments (undefined)
Show that passing null does NOT trigger the default
Show a default that references another parameter
```

---

## Concept 3: Rest Parameters (5 minutes)

### The Bottomless Bag

Rest parameters (`...args`) let a function accept any number of arguments and bundle them into an array. It's like having a bottomless bag — throw in as many items as you want.

**Key points to cover:**

1. Syntax: `...paramName` — must be the last parameter
2. Collects "the rest" of the arguments into an array
3. Replaces the old `arguments` object (which wasn't a real array)
4. Can be combined with regular parameters

### Live Demo Notes

```
Show a function that takes unlimited damage values and sums them
Show rest param after named params: function party(leader, ...members)
Show that ...rest must be last (it errors otherwise)
```

---

## Concept 4: Callbacks (8 minutes)

### Giving Orders to Party Members

A **callback** is a function you pass as an argument to another function. The receiving function "calls back" your function at the right time. Think of it as giving orders to a party member: "When you see a monster, USE THIS ATTACK."

**Key points to cover:**

1. Functions are values — they can be stored in variables, passed around
2. A callback is just a function passed as an argument
3. The receiving function decides when to call it
4. Common pattern: `doSomething(data, callback)`
5. Arrow functions make callbacks very clean

### Live Demo Notes

```
Start with a named function passed as callback
Then show the same thing with an anonymous function
Then show the same thing with an arrow function
Show a practical example: a "forEachItem" function that takes a callback
```

---

## Exercises Handout (2 minutes)

Hand out `exercises.js`. Students should work through problems 1-5, with a bonus challenge for fast finishers.

- **Problem 1:** Convert traditional functions to arrow functions
- **Problem 2:** Add default parameters to a character creator
- **Problem 3:** Use rest parameters to build a party
- **Problem 4:** Write a function that takes a callback
- **Problem 5:** Combine all concepts in a battle simulator
- **Bonus:** Build a quest system using callbacks

**Remind students:** Arrow functions are not just shorter — they also behave differently with `this` (we'll cover that later). For now, focus on the syntax.

---

## Key Takeaways

- Arrow functions are a shorter syntax for functions: `(params) => expression`
- Single expressions get an implicit return (no curly braces needed)
- Default parameters provide fallback values: `(x = 10)`
- Rest parameters collect extra arguments into an array: `(...args)`
- Callbacks are functions passed to other functions — a core JS pattern
- Arrow functions + callbacks = clean, readable code
