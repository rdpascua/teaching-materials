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

## NOVA-103: Build the User Model
### Day 24 — The Corporation Arc

**JavaScript Quest: 0 to Hero in 30 Days**

*Time to architect. Your tech lead wants a proper data model.*

> Speaker Notes: Day 24. You've been fetching data and organizing files. Now the tech lead wants structured data — not just raw objects floating around. Today you learn ES6 classes. Think of them as blueprints for creating consistent, well-structured objects.

---

# Slide 2 — The Ticket

## Your Jira Ticket

```
NOVA-103: Build the User model
Priority: High
Assignee: You (Junior Dev)
Reporter: Alex Chen (Tech Lead)

Description:
We need a User class to represent employees in the
dashboard. Raw objects are getting messy — we need
constructors, validation, and computed properties.

Acceptance Criteria:
- [ ] User class with constructor (name, email, role)
- [ ] Method: getDisplayName()
- [ ] Getter: fullTitle (combines role + name)
- [ ] Setter: email (with basic validation)
```

> Speaker Notes: The tech lead is tired of seeing raw objects like { name: "Sam", email: "sam@nova.dev" } scattered everywhere. A class gives us a single source of truth for what a User looks like, with built-in methods and validation. This is real software architecture.

---

# Slide 3 — Today's XP Rewards

## XP Available Today

| Activity | XP |
|---|---|
| Attend the lesson | +10 XP |
| Complete the exercise | +20 XP |
| Bonus challenge | +15 XP |

> Speaker Notes: 45 XP available. By now you could be at Knight or Wizard rank. The bonus today involves adding validation logic inside your class — very practical, very employable skill.

---

# Slide 4 — Core Concept: Class Basics

## Classes — Blueprints for Objects

- A class is a **template** for creating objects with shared structure
- Like a form template at NovaTech — every employee record has the same fields

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const sam = new User('Sam', 'sam@nova.dev');
```

- `constructor` runs automatically when you call `new`
- `this` refers to the instance being created

> Speaker Notes: If you remember Day 12, we built objects by hand. Classes automate that. The constructor is like an onboarding form — every new User gets the same fields filled in. The "new" keyword creates a fresh instance and calls the constructor. Under the hood, classes are just syntactic sugar over JavaScript's prototype system, but the syntax is much cleaner.

---

# Slide 5 — Core Concept: Methods

## Class Methods — Built-in Behaviors

- Methods are functions that live on the class
- Every instance shares the same methods

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  getDisplayName() {
    return `${this.name} <${this.email}>`;
  }
}
```

```js
const sam = new User('Sam', 'sam@nova.dev');
sam.getDisplayName(); // "Sam <sam@nova.dev>"
```

> Speaker Notes: Methods defined inside the class are available on every instance. You don't use the "function" keyword — just write the name, parentheses, and the body. Think of methods as the actions an employee can perform. A User can display their name. A Manager could approve requests. The object knows what it can do.

---

# Slide 6 — Core Concept: Getters & Setters

## Getters & Setters — Smart Properties

- **Getter:** computed property that looks like a regular property access
- **Setter:** runs logic when you assign a value

```js
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  get fullTitle() {
    return `${this.role}: ${this.name}`;
  }
  set email(value) {
    if (!value.includes('@')) throw new Error('Invalid');
    this._email = value;
  }
}
```

```js
user.fullTitle;        // "Developer: Sam" (no parentheses!)
user.email = 'bad';    // Error: Invalid
```

> Speaker Notes: Getters let you compute a value on the fly but access it like a normal property — no parentheses needed. Setters let you intercept assignments and add validation. Notice the underscore convention on _email — it signals "this is the internal storage, don't touch it directly." Getters and setters are great for computed fields and input validation.

---

# Slide 7 — Core Concept: Class Patterns

## Real-World Class Patterns

**Adding a toString method:**
```js
toString() {
  return `User(${this.name})`;
}
```

**Using a method to return formatted data:**
```js
toJSON() {
  return { name: this.name, email: this._email };
}
```

**Pattern: validate in the constructor**
```js
constructor(name, email) {
  if (!name) throw new Error('Name required');
  this.name = name;
  this.email = email;
}
```

> Speaker Notes: These are patterns you'll see in production code. toString() is useful for debugging — when you console.log an object, having a clean string representation helps. toJSON() controls what gets sent when you serialize the object. And validating in the constructor means you can never create an invalid User — it fails fast. This is defensive programming.

---

# Slide 8 — Live Demo

## Let's Build: The User Model

**What we'll code together:**
1. Create a `User` class with name, email, role
2. Add `getDisplayName()` method
3. Add a `fullTitle` getter
4. Add an `email` setter with validation
5. Create several User instances and test them
6. Wire it up with yesterday's fetch — parse API data into User objects

> Speaker Notes: We'll build the User class from scratch, then connect it to our fetch code from Day 22. Instead of working with raw JSON objects, we'll map the API response into User instances. This is a very common pattern — fetch raw data, then wrap it in model classes for structure and behavior.

---

# Slide 9 — Task Completion

## Your Ticket Tasks

**Required (20 XP):**
- Create a `User` class with constructor (name, email, role)
- Add a `getDisplayName()` method
- Add a `fullTitle` getter
- Create at least 3 User instances and log their display names

**Bonus Challenge (15 XP):**
- Add an `email` setter that validates the format
- Add a `toJSON()` method for serialization
- Map fetch API results into User instances using `data.map(u => new User(...))`

> Speaker Notes: The bonus challenge connects classes to fetch — map raw API data into proper class instances. This is exactly how production apps work. You fetch JSON, then transform it into typed model objects with methods and validation. It's the bridge between raw data and structured code.

---

# Slide 10 — Quick Reference

## Classes Cheat Sheet

| Pattern | Syntax |
|---------|--------|
| Define class | `class User { }` |
| Constructor | `constructor(name) { this.name = name; }` |
| Method | `greet() { return 'Hi'; }` |
| Getter | `get fullName() { return ...; }` |
| Setter | `set email(v) { this._email = v; }` |
| Create instance | `const u = new User('Sam');` |
| Check type | `u instanceof User // true` |

> Speaker Notes: Classes are everywhere in modern JavaScript — React class components, Node.js libraries, data models. Even if you mostly use functions, you need to read and understand class syntax. This cheat sheet covers the patterns you'll use 90% of the time.

---

# Slide 11 — Next Sprint

## Up Next: NOVA-104 — Extend the Model Layer

**Tomorrow's ticket:** Build an Admin class that extends User with extra powers.

- Inheritance with `extends`
- The `super` keyword
- Static methods and private fields

*"Good architecture means you write the base once and extend it forever."* — Alex Chen, Tech Lead

> Speaker Notes: Tomorrow we take classes further with inheritance. You'll create an Admin class that inherits everything from User but adds extra capabilities. This is object-oriented programming in action — build a foundation, then extend it without rewriting code. See you at standup.
