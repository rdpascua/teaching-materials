# Day 24: Classes Part 1

## Jira Ticket: NOVA-103 — Build the User model

**Priority:** High | **Sprint:** 4 | **Assignee:** You | **Reporter:** Alex Chen (Tech Lead)

---

> **Description:**
>
> We need a User class for our data layer. Right now user data is just plain
> objects scattered everywhere. We need a proper model with validation,
> computed properties, and consistent behavior.
>
> **Acceptance Criteria:**
> - Create a User class with constructor
> - Add methods for common operations (getProfile, updateEmail, etc.)
> - Use getters for computed properties (fullName, isActive)
> - Use setters with validation (email must be valid, name can't be empty)
> - Consistent `this` usage throughout
>
> **Tech notes:** This is the foundation of our model layer. Other models
> (Product, Order) will follow the same pattern.

---

## CONTEXT — Why This Matters (~3 min)

When you work with data in a real app, you don't want raw objects floating
around with no structure. A class gives you a blueprint: every User has the
same shape, the same methods, and the same validation rules. If you need to
change how emails are stored, you change it in one place.

JavaScript classes are syntactic sugar over prototypes, but that is an
implementation detail. What matters is that classes let you define blueprints
for creating objects with shared behavior.

---

## CORE CONCEPTS (~15 min)

### 1. Class Declaration

A class is declared with the `class` keyword:

```js
class User {
  // class body
}

const user = new User(); // create an instance
```

The `new` keyword creates a new object from the class blueprint.

### 2. The Constructor

The `constructor` is a special method that runs when you create a new instance.
Use it to set up initial properties:

```js
class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.createdAt = new Date();
    this.active = true;
  }
}

const user = new User('Jordan', 'Rivera', 'j.rivera@novatech.io');
console.log(user.firstName); // "Jordan"
console.log(user.active);    // true
```

`this` refers to the new object being created.

### 3. Methods

Methods are functions that live on every instance of the class:

```js
class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.active = true;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  deactivate() {
    this.active = false;
    console.log(`${this.getFullName()} has been deactivated.`);
  }

  getProfile() {
    return {
      name: this.getFullName(),
      email: this.email,
      status: this.active ? 'Active' : 'Inactive'
    };
  }
}
```

Methods can call other methods on the same instance using `this`.

### 4. Understanding `this`

`this` always refers to the current instance — the specific object that was
created with `new`:

```js
const user1 = new User('Alex', 'Chen', 'a.chen@novatech.io');
const user2 = new User('Sam', 'Park', 's.park@novatech.io');

// Each instance has its own data
console.log(user1.getFullName()); // "Alex Chen"
console.log(user2.getFullName()); // "Sam Park"

// this.active refers to THAT instance's active property
user1.deactivate(); // Only deactivates user1, not user2
```

### 5. Getters — Computed Properties

Getters look like properties but are actually functions that compute a value:

```js
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.loginCount = 0;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get isFrequentUser() {
    return this.loginCount > 100;
  }
}

const user = new User('Jordan', 'Rivera');
console.log(user.fullName);       // "Jordan Rivera" — no parentheses!
console.log(user.isFrequentUser); // false
```

Access getters like properties (no `()`) even though they run code.

### 6. Setters — Validation on Assignment

Setters run code when you assign a value to a property:

```js
class User {
  constructor(name, email) {
    this._name = name;   // underscore = internal storage
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set email(newEmail) {
    if (!newEmail.includes('@')) {
      throw new Error('Invalid email address');
    }
    this._email = newEmail.toLowerCase();
  }
}

const user = new User('Jordan', 'J.Rivera@NovaTech.io');
console.log(user.email);         // "J.Rivera@NovaTech.io"
user.email = 'new@novatech.io';  // setter runs, converts to lowercase
// user.email = 'bad-email';     // throws Error!
```

The convention is to store the actual value in a property prefixed with `_`
(underscore) and use get/set for the public-facing name.

---

## COMPLETE THE TICKET (~10 min)

Build the User class for NovaTech's data layer:

1. Constructor: firstName, lastName, email, department, role
2. Methods: getProfile(), updateEmail(), promote(newRole), toString()
3. Getter: fullName, isAdmin (true if role is 'admin')
4. Setter: email (validate it contains @), role (validate against allowed roles)

---

## KEY TAKEAWAYS

- `class` creates a blueprint for objects
- `constructor()` sets up initial properties with `this`
- Methods are functions shared by all instances
- `this` refers to the specific instance calling the method
- `get` creates computed properties (accessed without `()`)
- `set` adds validation when assigning to properties
- Use `_property` convention for internal storage backing getters/setters
