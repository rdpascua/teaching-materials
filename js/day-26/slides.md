# NotebookLM Presentation Guide

This is a **gamified JavaScript bootcamp** called "JavaScript Quest: 0 to Hero in 30 Days."
Students progress through an RPG-style adventure. Days 22-28 are "The Corporation" arc.
The tone shifts — students have been "hired" at NovaTech Inc., a fictional tech company.
Each lesson is framed as a Jira ticket from the tech lead. The vibe is professional but
still engaging, like your first week at a cool startup.

Generate slides that are professional yet engaging. Use corporate metaphors (tickets,
PRs, standups, code reviews). Each slide should have a clear heading, concise bullet
points, and speaker notes. Think onboarding deck meets coding tutorial.

---

# Slide 1 — Title Slide

## NOVA-105: Persist User Settings
### Day 26 — The Corporation Arc

**JavaScript Quest: 0 to Hero in 30 Days**

*"Users keep losing their preferences on refresh. Fix it."*

> Speaker Notes: Day 26. A bug report came in — every time users refresh the dashboard, their theme and settings reset. The fix? localStorage. Today you learn how to save data in the browser that persists even after the tab is closed.

---

# Slide 2 — The Ticket

## Your Jira Ticket

```
NOVA-105: Persist user settings
Priority: High
Assignee: You (Junior Dev)
Reporter: Alex Chen (Tech Lead)

Description:
Users are complaining that their dashboard preferences
(theme, layout, filters) reset on every page load.
Use localStorage to persist settings between sessions.

Acceptance Criteria:
- [ ] Save user preferences to localStorage
- [ ] Load preferences on page init
- [ ] Handle missing/corrupted data gracefully
- [ ] Provide a "Reset to defaults" option
```

> Speaker Notes: This is a real bug you'd fix at any company. Users expect their settings to stick. localStorage is the simplest client-side storage solution — it's synchronous, string-based, and available in every browser. Let's learn how to use it properly.

---

# Slide 3 — Today's XP Rewards

## XP Available Today

| Activity | XP |
|---|---|
| Attend the lesson | +10 XP |
| Complete the exercise | +20 XP |
| Bonus challenge | +15 XP |

> Speaker Notes: 45 XP. The bonus today involves building a complete settings manager class that wraps localStorage with validation and defaults. Very practical, very reusable.

---

# Slide 4 — Core Concept: localStorage Basics

## localStorage — Your Browser's Filing Cabinet

- Key-value storage built into every browser
- Data persists after page refresh, even after closing the browser
- **Strings only** — everything stored as text
- ~5MB limit per origin

```js
// Save
localStorage.setItem('theme', 'dark');

// Read
const theme = localStorage.getItem('theme'); // "dark"

// Remove
localStorage.removeItem('theme');

// Clear everything
localStorage.clear();
```

> Speaker Notes: localStorage is like a filing cabinet in the browser. You put things in with setItem, get them out with getItem, and remove them with removeItem. The critical thing to remember is that it ONLY stores strings. If you put in a number, you get back a string. If you put in an object, you get back "[object Object]" — which is useless. That's where JSON comes in.

---

# Slide 5 — Core Concept: Storing Objects with JSON

## JSON.stringify & JSON.parse — The Translators

- `JSON.stringify()` converts objects to strings (for storage)
- `JSON.parse()` converts strings back to objects (for use)

```js
const settings = { theme: 'dark', fontSize: 16 };

// Save object
localStorage.setItem('settings', JSON.stringify(settings));

// Load object
const loaded = JSON.parse(localStorage.getItem('settings'));
console.log(loaded.theme); // "dark"
```

**This is the pattern you'll use 99% of the time.**

> Speaker Notes: This is the core pattern. Stringify to save, parse to load. JSON.stringify turns your JavaScript object into a JSON string that localStorage can store. JSON.parse turns it back into a real object you can work with. You'll write this pattern so many times it'll become muscle memory. Just remember — always stringify before setItem, always parse after getItem.

---

# Slide 6 — Core Concept: Error Handling

## Defensive Storage — Things Go Wrong

- `JSON.parse()` throws if the string isn't valid JSON
- localStorage might be full or disabled
- Always wrap in try/catch

```js
function loadSettings() {
  try {
    const data = localStorage.getItem('settings');
    return data ? JSON.parse(data) : getDefaults();
  } catch (error) {
    console.warn('Corrupted settings, using defaults');
    return getDefaults();
  }
}
```

**Common issues:** corrupted data, user cleared storage, private browsing mode.

> Speaker Notes: What if someone manually edits localStorage in DevTools and puts in garbage? JSON.parse will throw. What if localStorage is disabled in private browsing mode? setItem will throw. What if the key doesn't exist? getItem returns null, and JSON.parse(null) returns null — which might cause issues downstream. Always have a fallback. Always use try/catch. The function here checks if data exists, tries to parse it, and falls back to defaults if anything goes wrong.

---

# Slide 7 — Core Concept: The Settings Manager Pattern

## Building a Reusable Storage Wrapper

```js
class SettingsManager {
  #defaults;
  #key;
  constructor(key, defaults) {
    this.#key = key;
    this.#defaults = defaults;
  }
  load() {
    try {
      const data = localStorage.getItem(this.#key);
      return { ...this.#defaults, ...JSON.parse(data) };
    } catch { return { ...this.#defaults }; }
  }
  save(settings) {
    localStorage.setItem(this.#key, JSON.stringify(settings));
  }
  reset() {
    localStorage.removeItem(this.#key);
  }
}
```

> Speaker Notes: This is a production-quality pattern. We wrap localStorage in a class that handles defaults, error recovery, and serialization. The spread operator in load() merges defaults with saved data — so if you add new settings later, they automatically get default values. This uses private fields from yesterday and the class patterns from Day 24. Everything is building on itself.

---

# Slide 8 — Live Demo

## Let's Build: Persistent Dashboard Settings

**What we'll code together:**
1. Create a settings object (theme, fontSize, sidebar)
2. Save to localStorage with JSON.stringify
3. Load on page init with JSON.parse
4. Add error handling with try/catch
5. Build a "Reset to defaults" button
6. Inspect localStorage in DevTools (Application tab)

> Speaker Notes: We'll build this step by step, then I'll show you how to inspect localStorage in Chrome DevTools. Go to Application tab, expand Local Storage, and you'll see your data. You can even edit it there to test error handling. Try putting in invalid JSON and watch our try/catch handle it gracefully.

---

# Slide 9 — Task Completion

## Your Ticket Tasks

**Required (20 XP):**
- Save a settings object to localStorage (theme, fontSize, language)
- Load settings on page init — use defaults if nothing saved
- Add a "Reset to defaults" function that clears and reloads
- Wrap JSON.parse in try/catch

**Bonus Challenge (15 XP):**
- Build a `SettingsManager` class (like the pattern shown)
- Add a `update(partial)` method that merges partial changes
- Store and retrieve an array of recent searches
- Add an expiration mechanism (save a timestamp, check on load)

> Speaker Notes: The expiration bonus is advanced — you save a timestamp alongside your data, and on load you check if it's older than, say, 24 hours. If so, treat it as expired and return defaults. This pattern is used in caching. The update method that merges partial changes is also very practical — you want to update just the theme without overwriting fontSize.

---

# Slide 10 — Quick Reference

## localStorage Cheat Sheet

| Operation | Code |
|-----------|------|
| Save string | `localStorage.setItem('key', 'value')` |
| Load string | `localStorage.getItem('key')` |
| Save object | `localStorage.setItem('key', JSON.stringify(obj))` |
| Load object | `JSON.parse(localStorage.getItem('key'))` |
| Remove item | `localStorage.removeItem('key')` |
| Clear all | `localStorage.clear()` |
| Check exists | `localStorage.getItem('key') !== null` |

**Remember:** Always stringify before saving, always parse after loading, always try/catch around parse.

> Speaker Notes: localStorage is one of the simplest browser APIs but one of the most useful. Combined with JSON methods, it gives you persistent client-side storage for settings, preferences, cached data, and more. The key gotcha is that everything is strings — never forget to stringify and parse.

---

# Slide 11 — Next Sprint

## Up Next: NOVA-106 — Validate Form Inputs

**Tomorrow's ticket:** The QA team found that users can submit invalid data. Time to learn regular expressions.

- Regex patterns for email, phone, passwords
- `test()`, `match()`, `replace()`
- Input validation patterns

*"Never trust user input. Validate everything."* — Alex Chen, Tech Lead

> Speaker Notes: Tomorrow gets spicy — regular expressions. They look like hieroglyphics at first but they're incredibly powerful for validating and transforming text. We'll use them to validate form inputs, which is a core requirement for any web application. See you at standup.
