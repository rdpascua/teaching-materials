# Day 23: ES Modules

## Jira Ticket: NOVA-102 — Refactor into modules

**Priority:** Medium | **Sprint:** 4 | **Assignee:** You | **Reporter:** Alex Chen (Tech Lead)

---

> **Description:**
>
> The codebase is one giant file. It's 2,000 lines and growing. We can't
> maintain this. Break it into modules using ES module syntax (import/export).
>
> **Acceptance Criteria:**
> - Split utility functions into separate files
> - Use named exports for utility functions
> - Use default export for main classes/components
> - No global variable leaks between modules
> - Document the file structure in comments
>
> **Tech notes:** We use ES modules (not CommonJS). Make sure files use
> `.mjs` extension or `"type": "module"` in package.json when testing in Node.

---

## CONTEXT — Why This Matters (~3 min)

Imagine working in a kitchen where every ingredient, every utensil, and every
recipe is piled on one counter. That is what a single-file codebase feels like.

Modules let you organize code into separate files, each with a clear purpose.
You explicitly choose what to share between files using `export` and `import`.
This keeps code maintainable, testable, and collision-free.

Before ES modules, JavaScript had no built-in module system. Developers used
workarounds (IIFEs, CommonJS with `require()`). ES modules (`import`/`export`)
are now the standard.

---

## CORE CONCEPTS (~15 min)

### 1. Named Exports

Export specific things by name. A file can have as many named exports as needed.

```js
// file: utils/formatters.js
export function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

export const TAX_RATE = 0.08;
```

Import them by name (must match exactly):

```js
// file: app.js
import { formatCurrency, formatDate, TAX_RATE } from './utils/formatters.js';

console.log(formatCurrency(29.99)); // "$29.99"
```

### 2. Default Exports

Each file can have one default export. This is typically used for the "main
thing" the file provides — a class, a component, a primary function.

```js
// file: models/User.js
export default class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}
```

Import with any name you want (no curly braces):

```js
// file: app.js
import User from './models/User.js';
// You could also write: import Employee from './models/User.js';
```

### 3. Mixing Named and Default

A file can have both:

```js
// file: services/api.js
export const BASE_URL = 'https://api.novatech.io';

export function buildUrl(path) {
  return `${BASE_URL}${path}`;
}

export default class ApiClient {
  async get(path) { /* ... */ }
  async post(path, data) { /* ... */ }
}
```

```js
// file: app.js
import ApiClient, { BASE_URL, buildUrl } from './services/api.js';
```

### 4. Renaming Imports

Use `as` to rename imports and avoid name collisions:

```js
import { formatDate as formatUserDate } from './utils/formatters.js';
import { formatDate as formatOrderDate } from './utils/orderFormatters.js';
```

### 5. Import Everything

Use `* as` to import all named exports as one object:

```js
import * as Formatters from './utils/formatters.js';

Formatters.formatCurrency(100);
Formatters.formatDate('2025-01-15');
```

### 6. Module Scope — No Global Leaks

Variables declared in a module are scoped to that module. They do not pollute
the global scope:

```js
// file: moduleA.js
const secret = 'only visible in moduleA';
export const shared = 'this is exported';

// file: moduleB.js
// console.log(secret);  // ReferenceError — can't see it
import { shared } from './moduleA.js';
console.log(shared);     // works
```

### 7. Organizing a Project

A typical NovaTech project structure:

```
novatech-dashboard/
  index.js              (entry point)
  models/
    User.js             (default export: User class)
    Product.js          (default export: Product class)
  services/
    api.js              (API client)
    auth.js             (authentication helpers)
  utils/
    formatters.js       (named exports: utility functions)
    validators.js       (named exports: validation functions)
  config/
    constants.js        (named exports: app-wide constants)
```

---

## COMPLETE THE TICKET (~10 min)

Refactor the "monolith" into modules. Given a file with User class, formatting
functions, API config, and validation helpers all in one place, split them into
separate files following the structure above. Show the import/export statements
for each file.

Since we cannot actually create multiple files in a single exercises.js, we will
simulate the refactor using clearly commented file boundaries.

---

## KEY TAKEAWAYS

- `export` makes values available to other files
- `import { name }` imports named exports (curly braces required)
- `import Name` imports the default export (no curly braces)
- Each file can have many named exports but only one default export
- Module variables are scoped — no global leaks
- Use `as` to rename imports and avoid collisions
- Organize files by purpose: models, services, utils, config
