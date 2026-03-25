# Day 28: Functional Patterns

## Jira Ticket: NOVA-107 — Clean up the utils

**Priority:** Medium | **Sprint:** 4 | **Assignee:** You | **Reporter:** Alex Chen (Tech Lead)

---

> **Description:**
>
> Tech debt sprint. Our utility functions are a mess — they mutate inputs,
> depend on global state, and are impossible to test in isolation. Refactor
> them to be pure and composable. No side effects, no mutations, return new
> values instead.
>
> **Acceptance Criteria:**
> - All utility functions must be pure (same input = same output, no side effects)
> - Never mutate input data — always return new arrays/objects
> - Use function composition to build complex operations from simple ones
> - Apply currying where it improves reusability
> - Review and apply higher-order function patterns
>
> **Tech notes:** This is a refactor, not a rewrite. Keep the same
> functionality, just make it cleaner and more maintainable.

---

## CONTEXT — Why This Matters (~3 min)

Functional programming is not about replacing OOP — it is about writing
functions that are predictable, testable, and composable. When a function
always returns the same output for the same input and never changes anything
outside itself, it is easy to reason about, easy to test, and easy to reuse.

In a large codebase like NovaTech's, impure functions cause subtle bugs:
a utility that modifies the array you passed to it, a formatter that depends
on a global locale setting, a calculator that writes to a database. Cleaning
these up reduces bugs and makes the code easier to maintain.

---

## CORE CONCEPTS (~15 min)

### 1. Pure Functions — No Side Effects

A pure function:
- Given the same input, always returns the same output
- Does not modify anything outside itself (no side effects)

```js
// IMPURE — modifies the input array
function addEmployee(employees, name) {
  employees.push(name);  // mutates the original!
  return employees;
}

// PURE — returns a new array
function addEmployee(employees, name) {
  return [...employees, name];  // original is untouched
}
```

```js
// IMPURE — depends on external state
let taxRate = 0.08;
function calculateTax(amount) {
  return amount * taxRate;  // depends on global variable
}

// PURE — all dependencies are parameters
function calculateTax(amount, rate) {
  return amount * rate;  // everything comes from arguments
}
```

### 2. Immutability — Don't Mutate, Return New

Never modify the original data. Create new copies with changes:

```js
// Arrays
const original = [1, 2, 3];
const added = [...original, 4];          // new array with 4 appended
const removed = original.filter(x => x !== 2); // new array without 2
const updated = original.map(x => x * 2);      // new array with doubled values

// Objects
const user = { name: 'Alex', role: 'dev' };
const promoted = { ...user, role: 'senior' };   // new object with updated role
```

### 3. Function Composition

Build complex operations by combining simple functions:

```js
// Simple, focused functions
const trim = str => str.trim();
const lowercase = str => str.toLowerCase();
const slugify = str => str.replace(/\s+/g, '-');

// Compose them: apply right to left
function compose(...fns) {
  return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
}

const createSlug = compose(slugify, lowercase, trim);
createSlug('  Hello World  '); // "hello-world"
```

Or use `pipe` for left-to-right (reads more naturally):

```js
function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

const createSlug = pipe(trim, lowercase, slugify);
createSlug('  Hello World  '); // "hello-world"
```

### 4. Currying

Transform a function that takes multiple arguments into a sequence of
functions that each take one argument:

```js
// Normal function
function multiply(a, b) {
  return a * b;
}
multiply(3, 4); // 12

// Curried version
function multiply(a) {
  return function(b) {
    return a * b;
  };
}
// Arrow syntax
const multiply = a => b => a * b;

const double = multiply(2);
const triple = multiply(3);

double(5);  // 10
triple(5);  // 15
```

Currying is useful for creating specialized versions of generic functions.

### 5. Higher-Order Functions Review

Functions that take or return functions:

```js
// Takes a function — we know these from arrays
const numbers = [1, 2, 3, 4, 5];
numbers.filter(n => n > 3);   // [4, 5]
numbers.map(n => n * 2);      // [2, 4, 6, 8, 10]
numbers.reduce((sum, n) => sum + n, 0); // 15

// Returns a function — creating specialized behavior
function createFormatter(currency) {
  return function(amount) {
    return `${currency}${amount.toFixed(2)}`;
  };
}

const formatUSD = createFormatter('$');
const formatEUR = createFormatter('\u20AC');

formatUSD(29.99); // "$29.99"
formatEUR(29.99); // "\u20AC29.99"
```

---

## COMPLETE THE TICKET (~10 min)

Refactor NovaTech's utility functions:

1. Convert impure functions to pure equivalents
2. Build a data transformation pipeline using compose/pipe
3. Create curried helper functions for common operations
4. Process employee data using higher-order function chains

---

## KEY TAKEAWAYS

- Pure functions: same input always gives same output, no side effects
- Immutability: never modify inputs — spread, map, filter to create new values
- Composition: combine small functions into complex operations
- Currying: `f(a, b)` becomes `f(a)(b)` — creates reusable specialized functions
- Higher-order functions: functions that take or return other functions
- These patterns make code more predictable, testable, and maintainable
