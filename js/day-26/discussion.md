# Day 26: Local Storage & JSON

## Jira Ticket: NOVA-105 — Persist user settings

**Priority:** Medium | **Sprint:** 4 | **Assignee:** You | **Reporter:** Alex Chen (Tech Lead)

---

> **Description:**
>
> Users are complaining that their preferences (theme, language, sidebar
> state) reset every time they refresh the page. We need to persist these
> settings in the browser using localStorage so they survive page reloads.
>
> **Acceptance Criteria:**
> - Save user preferences to localStorage on change
> - Load preferences from localStorage on page load
> - Handle the case where no preferences exist yet (first visit)
> - Store complex objects (not just strings)
> - Provide a "Reset to defaults" option that clears stored preferences
>
> **Tech notes:** localStorage only stores strings. Use JSON.stringify()
> and JSON.parse() to handle objects and arrays.

---

## CONTEXT — Why This Matters (~3 min)

Web apps run in the browser, and by default the browser forgets everything
when the page refreshes. Cookies were the original solution, but they are
limited to 4KB and get sent with every HTTP request. localStorage gives you
~5MB of storage that stays on the client, persists across sessions, and is
simple to use.

Common use cases: saving user preferences (dark mode, language), caching
API responses, storing form drafts, keeping shopping cart state.

---

## CORE CONCEPTS (~15 min)

### 1. localStorage Basics

localStorage stores key-value pairs where both key and value are strings:

```js
// Set a value
localStorage.setItem('theme', 'dark');

// Get a value
const theme = localStorage.getItem('theme'); // "dark"

// Remove a specific item
localStorage.removeItem('theme');

// Clear everything
localStorage.clear();
```

Data persists even after the browser is closed and reopened.

### 2. The String-Only Problem

localStorage can only store strings. Numbers, booleans, arrays, and objects
all get converted to strings:

```js
localStorage.setItem('count', 42);
const count = localStorage.getItem('count');
console.log(count);        // "42" (string, not number!)
console.log(typeof count); // "string"

localStorage.setItem('active', true);
const active = localStorage.getItem('active');
console.log(active);        // "true" (string, not boolean!)
console.log(active === true); // false!
```

And objects are completely mangled:

```js
localStorage.setItem('user', { name: 'Alex' });
console.log(localStorage.getItem('user')); // "[object Object]" — useless!
```

### 3. JSON.stringify() — Converting to Storable Strings

`JSON.stringify()` converts any JavaScript value to a JSON string:

```js
JSON.stringify(42)                   // "42"
JSON.stringify(true)                 // "true"
JSON.stringify("hello")              // '"hello"'
JSON.stringify([1, 2, 3])            // "[1,2,3]"
JSON.stringify({ name: "Alex" })     // '{"name":"Alex"}'
```

### 4. JSON.parse() — Converting Back to JavaScript

`JSON.parse()` converts a JSON string back into a JavaScript value:

```js
JSON.parse("42")                  // 42 (number)
JSON.parse("true")                // true (boolean)
JSON.parse('[1,2,3]')             // [1, 2, 3] (array)
JSON.parse('{"name":"Alex"}')     // { name: "Alex" } (object)
```

### 5. The Pattern: Stringify on Save, Parse on Load

```js
// SAVE — convert to JSON string, then store
const settings = { theme: 'dark', language: 'en', fontSize: 16 };
localStorage.setItem('settings', JSON.stringify(settings));

// LOAD — get the string, then parse back to an object
const loaded = JSON.parse(localStorage.getItem('settings'));
console.log(loaded.theme); // "dark" — it's a real object again
```

### 6. Handling Missing Data

`getItem()` returns `null` if the key doesn't exist. Use a fallback:

```js
const settings = JSON.parse(localStorage.getItem('settings'));

if (settings === null) {
  // First visit — use defaults
  console.log('No settings found, using defaults');
}

// Or use a one-liner with nullish coalescing:
const theme = JSON.parse(localStorage.getItem('theme')) ?? 'light';
```

### 7. Storing Complex Data

You can store arrays of objects, nested structures, anything that is
JSON-serializable:

```js
const dashboardLayout = {
  widgets: [
    { id: 1, type: 'chart', position: { x: 0, y: 0 } },
    { id: 2, type: 'table', position: { x: 1, y: 0 } }
  ],
  theme: 'dark',
  lastModified: new Date().toISOString()
};

localStorage.setItem('dashboard', JSON.stringify(dashboardLayout));
```

**Warning:** Dates, functions, undefined, and class instances do NOT
survive JSON serialization properly.

### 8. The storage Event

When localStorage changes in one tab, other tabs of the same origin
receive a `storage` event:

```js
window.addEventListener('storage', (event) => {
  console.log('Key changed:', event.key);
  console.log('Old value:', event.oldValue);
  console.log('New value:', event.newValue);
});
```

This only fires in OTHER tabs, not the tab that made the change.

---

## COMPLETE THE TICKET (~10 min)

Build a UserPreferences manager for NovaTech:

1. Save preferences (theme, language, fontSize, sidebarOpen) to localStorage
2. Load preferences on startup, falling back to defaults
3. Update individual preferences without losing others
4. Reset all preferences to defaults
5. Handle JSON parse errors gracefully

---

## KEY TAKEAWAYS

- `localStorage.setItem(key, value)` stores strings in the browser
- `localStorage.getItem(key)` retrieves them (returns `null` if missing)
- localStorage only stores strings — objects become `"[object Object]"`
- `JSON.stringify()` converts JS values to JSON strings for storage
- `JSON.parse()` converts JSON strings back to JS values
- Always handle the `null` case (first visit, cleared storage)
- `localStorage.removeItem(key)` removes one item; `.clear()` removes all
- Data persists across page reloads and browser restarts (~5MB limit)
