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

## NOVA-104: Extend the Model Layer
### Day 25 — The Corporation Arc

**JavaScript Quest: 0 to Hero in 30 Days**

*Not all employees are equal. Some have admin access.*

> Speaker Notes: Day 25. Yesterday you built a User class. Today the tech lead wants an Admin class with elevated permissions — but you shouldn't rewrite everything from scratch. Enter inheritance. Build on what exists.

---

# Slide 2 — The Ticket

## Your Jira Ticket

```
NOVA-104: Extend the model layer
Priority: Medium
Assignee: You (Junior Dev)
Reporter: Alex Chen (Tech Lead)

Description:
We need Admin and Manager classes that extend User.
Admins can delete records. Managers can approve requests.
Use inheritance — do NOT duplicate User code.

Acceptance Criteria:
- [ ] Admin extends User with deleteUser() method
- [ ] Use super() to call parent constructor
- [ ] Add at least one static method
- [ ] Use private fields where appropriate
```

> Speaker Notes: The ticket is clear — don't copy-paste from User. Extend it. This is the DRY principle in action: Don't Repeat Yourself. Inheritance lets you share code between related classes while adding specialized behavior.

---

# Slide 3 — Today's XP Rewards

## XP Available Today

| Activity | XP |
|---|---|
| Attend the lesson | +10 XP |
| Complete the exercise | +20 XP |
| Bonus challenge | +15 XP |

> Speaker Notes: 45 more XP on the table. The bonus involves private fields — a newer JavaScript feature that's becoming standard in production code.

---

# Slide 4 — Core Concept: Inheritance with extends

## extends — Building on Existing Classes

- `extends` creates a child class that inherits everything from the parent
- The child gets all parent methods and properties automatically

```js
class Admin extends User {
  deleteUser(userId) {
    console.log(`Admin ${this.name} deleted user ${userId}`);
  }
}
```

```js
const admin = new Admin('Alex', 'alex@nova.dev', 'Admin');
admin.getDisplayName(); // inherited from User!
admin.deleteUser(42);   // Admin-only method
```

> Speaker Notes: extends is the keyword that creates an inheritance chain. Admin gets everything User has — the constructor, getDisplayName(), the fullTitle getter — all for free. Then we add deleteUser() which only Admin has. A regular User can't call deleteUser. This is how you model real-world hierarchies — users, admins, managers, all sharing a common base.

---

# Slide 5 — Core Concept: super()

## super — Calling the Parent

- `super()` calls the parent's constructor — **required** in child constructors
- `super.method()` calls a parent method from the child

```js
class Admin extends User {
  constructor(name, email, level) {
    super(name, email, 'Admin');  // calls User constructor
    this.level = level;           // Admin-only property
  }
  getDisplayName() {
    return `[ADMIN] ${super.getDisplayName()}`;
  }
}
```

- Must call `super()` **before** using `this` in the constructor

> Speaker Notes: Two uses of super. First: super() in the constructor calls the parent constructor. You MUST do this before using "this" — JavaScript enforces this rule. Second: super.method() lets you call the parent's version of a method. Here we override getDisplayName but still use the parent's version as a base, adding "[ADMIN]" in front. This is called method overriding.

---

# Slide 6 — Core Concept: Static Methods

## static — Methods on the Class Itself

- Static methods belong to the **class**, not instances
- Used for utility functions related to the class

```js
class User {
  static fromJSON(json) {
    const data = JSON.parse(json);
    return new User(data.name, data.email, data.role);
  }
  static isValid(user) {
    return user.name && user.email;
  }
}
```

```js
const user = User.fromJSON('{"name":"Sam",...}');
User.isValid(user);  // true
// user.fromJSON()   // Error! Not on instances
```

> Speaker Notes: Static methods are called on the class itself, not on instances. You can't call sam.fromJSON() — you call User.fromJSON(). The most common pattern is factory methods — static methods that create instances in special ways. fromJSON is a classic example. Another common one is validation methods that check if data is valid before creating an instance.

---

# Slide 7 — Core Concept: Private Fields

## Private Fields — True Encapsulation

- Prefix with `#` to make a field truly private
- Cannot be accessed outside the class — not even by children

```js
class User {
  #password;

  constructor(name, password) {
    this.name = name;
    this.#password = password;
  }
  checkPassword(input) {
    return input === this.#password;
  }
}
```

```js
const u = new User('Sam', 'secret123');
u.#password;          // SyntaxError!
u.checkPassword('secret123');  // true
```

> Speaker Notes: The hash prefix makes a field truly private — not just a convention like the underscore. You literally cannot access it outside the class. JavaScript throws a SyntaxError if you try. This is great for sensitive data like passwords, API keys, or internal state you don't want other code to mess with. Note that private fields are NOT inherited — child classes can't access them either. You provide public methods to interact with private data.

---

# Slide 8 — Live Demo

## Let's Build: The Model Layer

**What we'll code together:**
1. Review our `User` class from yesterday
2. Create `Admin extends User` with elevated methods
3. Add `static fromJSON()` factory method
4. Add `#accessLevel` private field to Admin
5. Override `getDisplayName()` using `super`
6. Test the inheritance chain with `instanceof`

> Speaker Notes: We'll build a complete model hierarchy. User is the base, Admin extends it. We'll use every concept — super, static, private fields. Then we'll test with instanceof to verify the inheritance chain: an Admin is also a User. This pattern scales to any number of specialized classes.

---

# Slide 9 — Task Completion

## Your Ticket Tasks

**Required (20 XP):**
- Create an `Admin` class that extends `User`
- Use `super()` in the Admin constructor
- Add a `deleteUser(id)` method to Admin
- Override `getDisplayName()` to show "[ADMIN]" prefix

**Bonus Challenge (15 XP):**
- Add a `static fromJSON()` method to User
- Add a `#permissions` private field to Admin
- Create a `Manager` class that extends User with an `approve()` method
- Verify: `admin instanceof User === true`

> Speaker Notes: Build the hierarchy step by step. Start with Admin extending User, get super() working, then add the static method and private fields. The Manager class in the bonus is a second child class — showing that multiple classes can extend the same parent. This is polymorphism in practice.

---

# Slide 10 — Quick Reference

## Inheritance Cheat Sheet

| Pattern | Syntax |
|---------|--------|
| Extend class | `class Admin extends User { }` |
| Call parent constructor | `super(name, email)` |
| Call parent method | `super.getDisplayName()` |
| Static method | `static fromJSON(data) { }` |
| Private field | `#password` |
| Check inheritance | `obj instanceof ClassName` |

**Rules:**
- Must call `super()` before `this` in child constructor
- Private fields use `#` prefix — truly private, not just convention
- Static methods are called on the class: `User.fromJSON()`

> Speaker Notes: Inheritance, static methods, and private fields round out your class knowledge. You now know enough OOP to read and write class-based code in any JavaScript project. Most frameworks use these patterns heavily.

---

# Slide 11 — Next Sprint

## Up Next: NOVA-105 — Persist User Settings

**Tomorrow's ticket:** Users want their preferences saved between sessions. Time to learn localStorage.

- `localStorage.setItem()` / `getItem()`
- `JSON.parse()` / `JSON.stringify()`
- Persisting structured data in the browser

*"Ship it and the data stays. Close the tab and it's still there."* — Alex Chen, Tech Lead

> Speaker Notes: Tomorrow you learn browser storage. localStorage lets you save data that survives page refreshes and browser restarts. Combined with your User class and JSON methods, you'll be able to persist real application state. See you at standup.
