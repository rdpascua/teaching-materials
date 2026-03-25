# Day 25: Classes Part 2

## Jira Ticket: NOVA-104 — Extend the model layer

**Priority:** High | **Sprint:** 4 | **Assignee:** You | **Reporter:** Alex Chen (Tech Lead)

---

> **Description:**
>
> We need AdminUser and GuestUser classes that extend our base User class.
> Admins have extra permissions and elevated access. Guests have restricted
> access and session timeouts. Both should inherit the core User behavior.
>
> **Acceptance Criteria:**
> - AdminUser extends User with admin-specific methods
> - GuestUser extends User with restricted capabilities
> - super() is called correctly in constructors
> - Methods are overridden where needed
> - Add static utility methods to the base class
> - Use private fields for sensitive data (password hash, auth tokens)
>
> **Tech notes:** Follow the Open/Closed Principle — extend behavior
> without modifying the base User class.

---

## CONTEXT — Why This Matters (~3 min)

In any real application, you have variations of the same concept. Users are
not all the same: some are admins, some are guests, some are regular members.
Rather than duplicating code for each type, inheritance lets you define shared
behavior once in a base class and extend it for specialized types.

This is one of the core ideas in object-oriented programming: write it once
in the parent, customize it in the child.

---

## CORE CONCEPTS (~15 min)

### 1. extends — Creating a Subclass

The `extends` keyword creates a child class that inherits everything from the
parent:

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.role = 'user';
  }

  getProfile() {
    return `${this.name} (${this.role})`;
  }
}

class AdminUser extends User {
  // AdminUser inherits constructor, getProfile, and everything else
}

const admin = new AdminUser('Alex', 'a.chen@novatech.io');
console.log(admin.getProfile()); // "Alex (user)" — inherited method works
```

### 2. super() — Calling the Parent Constructor

If the child class has its own constructor, it MUST call `super()` before
using `this`:

```js
class AdminUser extends User {
  constructor(name, email, accessLevel) {
    super(name, email);       // calls User's constructor
    this.role = 'admin';      // override the role
    this.accessLevel = accessLevel; // add new property
  }
}

const admin = new AdminUser('Alex', 'a.chen@novatech.io', 'superadmin');
console.log(admin.name);        // "Alex" — set by super()
console.log(admin.role);        // "admin" — overridden
console.log(admin.accessLevel); // "superadmin" — new property
```

Rule: `super()` must be the first thing in a child constructor. You cannot
use `this` before calling `super()`.

### 3. Method Overriding

A child class can replace a parent method by defining one with the same name:

```js
class GuestUser extends User {
  constructor(name) {
    super(name, 'guest@novatech.io');
    this.role = 'guest';
    this.sessionTimeout = 30; // minutes
  }

  // Override the parent's getProfile method
  getProfile() {
    return `${this.name} (Guest — session expires in ${this.sessionTimeout}min)`;
  }
}
```

You can also call the parent's version using `super.methodName()`:

```js
getProfile() {
  const base = super.getProfile(); // call the parent version
  return `${base} — session: ${this.sessionTimeout}min`;
}
```

### 4. Static Methods

Static methods belong to the class itself, not to instances:

```js
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // Instance method — called on an instance
  getProfile() {
    return `${this.name} <${this.email}>`;
  }

  // Static method — called on the class
  static fromJSON(json) {
    const data = JSON.parse(json);
    return new User(data.name, data.email);
  }

  static validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

// Static methods are called on the CLASS, not on instances
const user = User.fromJSON('{"name":"Alex","email":"a@b.com"}');
console.log(User.validateEmail('test@test.com')); // true

// You CANNOT call static methods on instances:
// user.validateEmail('test@test.com'); // TypeError
```

### 5. Private Fields (#)

Prefix a field with `#` to make it truly private — inaccessible outside the
class:

```js
class User {
  #passwordHash;
  #authToken;

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.#passwordHash = this.#hashPassword(password);
    this.#authToken = null;
  }

  #hashPassword(password) {
    // simplified — real apps use bcrypt
    return btoa(password);
  }

  login(password) {
    if (this.#hashPassword(password) === this.#passwordHash) {
      this.#authToken = 'token_' + Math.random().toString(36).slice(2);
      return true;
    }
    return false;
  }

  get isAuthenticated() {
    return this.#authToken !== null;
  }
}

const user = new User('Alex', 'a@b.com', 'secret123');
// console.log(user.#passwordHash); // SyntaxError: Private field
// console.log(user.#authToken);    // SyntaxError: Private field
```

Private fields cannot be accessed or even detected from outside the class.
Private methods work the same way: `#methodName()`.

---

## COMPLETE THE TICKET (~10 min)

Implement the class hierarchy for NovaTech:

1. **User** (base class) — name, email, role, getProfile(), login()
2. **AdminUser extends User** — accessLevel, managedUsers[], grantAccess(), revokeAccess()
3. **GuestUser extends User** — sessionTimeout, restricted permissions, auto-expire
4. Add static methods: User.create(), User.validateEmail()
5. Use private fields for #passwordHash and #authToken

---

## KEY TAKEAWAYS

- `extends` creates a child class that inherits from a parent
- `super()` calls the parent constructor — must come before `this` in child constructors
- `super.method()` calls the parent's version of an overridden method
- Static methods belong to the class, not instances (`User.validate()`)
- Private fields (`#field`) are truly private — not accessible outside the class
- Override methods by redefining them in the child class
