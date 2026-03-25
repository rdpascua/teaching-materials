// ============================================
// Day 24: Classes Part 1
// Ticket: NOVA-103 — Build the User model
// ============================================


// ------------------------------------------
// EXAMPLE 1: Basic class declaration
// ------------------------------------------

class Employee {
  constructor(name, email, department) {
    this.name = name;
    this.email = email;
    this.department = department;
    this.hireDate = new Date();
    this.active = true;
  }
}

const emp1 = new Employee('Jordan Rivera', 'j.rivera@novatech.io', 'Engineering');

console.log('=== Example 1: Basic Class ===');
console.log(emp1);
console.log('Name:', emp1.name);
console.log('Department:', emp1.department);
console.log();


// ------------------------------------------
// EXAMPLE 2: Adding methods
// ------------------------------------------

class User {
  constructor(firstName, lastName, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.active = true;
    this.permissions = [];
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getProfile() {
    return {
      name: this.getFullName(),
      email: this.email,
      status: this.active ? 'Active' : 'Inactive',
      permissions: this.permissions
    };
  }

  deactivate() {
    this.active = false;
    return `Account for ${this.getFullName()} has been deactivated.`;
  }

  addPermission(permission) {
    if (!this.permissions.includes(permission)) {
      this.permissions.push(permission);
    }
    return this.permissions;
  }
}

const user1 = new User('Alex', 'Chen', 'a.chen@novatech.io');
user1.addPermission('read');
user1.addPermission('write');

console.log('=== Example 2: Methods ===');
console.log('Full name:', user1.getFullName());
console.log('Profile:', user1.getProfile());
console.log(user1.deactivate());
console.log('Profile after deactivation:', user1.getProfile());
console.log();


// ------------------------------------------
// EXAMPLE 3: `this` refers to the instance
// ------------------------------------------

const userA = new User('Sam', 'Park', 's.park@novatech.io');
const userB = new User('Dana', 'Lee', 'd.lee@novatech.io');

userA.addPermission('admin');
userB.addPermission('read');

console.log('=== Example 3: `this` Per Instance ===');
console.log('User A permissions:', userA.permissions); // ['admin']
console.log('User B permissions:', userB.permissions); // ['read']
// Each instance maintains its own data
console.log();


// ------------------------------------------
// EXAMPLE 4: Getters — computed properties
// ------------------------------------------

class Product {
  constructor(name, basePrice, taxRate = 0.08) {
    this.name = name;
    this.basePrice = basePrice;
    this.taxRate = taxRate;
    this.discontinued = false;
  }

  // Getter: access like a property, runs like a function
  get price() {
    return this.basePrice * (1 + this.taxRate);
  }

  get displayPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  get status() {
    return this.discontinued ? 'Discontinued' : 'Available';
  }

  get summary() {
    return `${this.name} — ${this.displayPrice} (${this.status})`;
  }
}

const product = new Product('NovaTech Pro License', 299.99);

console.log('=== Example 4: Getters ===');
console.log('Base price:', product.basePrice);    // 299.99
console.log('With tax:', product.price);           // 323.9892 (computed!)
console.log('Display:', product.displayPrice);     // "$323.99"
console.log('Status:', product.status);            // "Available"
console.log('Summary:', product.summary);          // full summary
// Note: no parentheses () when accessing getters
console.log();


// ------------------------------------------
// EXAMPLE 5: Setters — validation on assignment
// ------------------------------------------

class Settings {
  constructor(theme, language, fontSize) {
    this._theme = theme;
    this._language = language;
    this._fontSize = fontSize;
  }

  get theme() {
    return this._theme;
  }

  set theme(value) {
    const allowed = ['light', 'dark', 'system'];
    if (!allowed.includes(value)) {
      throw new Error(`Invalid theme: "${value}". Must be one of: ${allowed.join(', ')}`);
    }
    this._theme = value;
  }

  get fontSize() {
    return this._fontSize;
  }

  set fontSize(value) {
    if (value < 10 || value > 32) {
      throw new Error('Font size must be between 10 and 32');
    }
    this._fontSize = value;
  }

  get language() {
    return this._language;
  }

  set language(value) {
    this._language = value.toLowerCase();
  }
}

const settings = new Settings('dark', 'EN', 16);

console.log('=== Example 5: Setters ===');
console.log('Theme:', settings.theme);       // "dark"
console.log('Language:', settings.language);  // "EN" (set via constructor, not setter)

settings.language = 'FR';                    // setter converts to lowercase
console.log('Language after set:', settings.language); // "fr"

settings.theme = 'light';                   // valid, works fine
console.log('Theme after set:', settings.theme);

try {
  settings.theme = 'neon';                  // invalid! throws error
} catch (e) {
  console.log('Caught error:', e.message);
}

try {
  settings.fontSize = 100;                  // invalid! throws error
} catch (e) {
  console.log('Caught error:', e.message);
}
console.log();


// ------------------------------------------
// EXAMPLE 6: Methods that return `this` (chaining)
// ------------------------------------------

class QueryBuilder {
  constructor(table) {
    this.table = table;
    this.conditions = [];
    this.sortField = null;
    this.limitCount = null;
  }

  where(condition) {
    this.conditions.push(condition);
    return this; // enables chaining
  }

  orderBy(field) {
    this.sortField = field;
    return this;
  }

  limit(count) {
    this.limitCount = count;
    return this;
  }

  build() {
    let query = `SELECT * FROM ${this.table}`;
    if (this.conditions.length > 0) {
      query += ` WHERE ${this.conditions.join(' AND ')}`;
    }
    if (this.sortField) {
      query += ` ORDER BY ${this.sortField}`;
    }
    if (this.limitCount) {
      query += ` LIMIT ${this.limitCount}`;
    }
    return query;
  }
}

console.log('=== Example 6: Method Chaining ===');
const query = new QueryBuilder('employees')
  .where('department = "Engineering"')
  .where('active = true')
  .orderBy('hire_date')
  .limit(10)
  .build();

console.log(query);
// SELECT * FROM employees WHERE department = "Engineering" AND active = true ORDER BY hire_date LIMIT 10
console.log();


// ------------------------------------------
// EXAMPLE 7: Practical User model
// What the finished ticket might look like
// ------------------------------------------

class NovaTechUser {
  constructor(firstName, lastName, email, department, role = 'developer') {
    this.firstName = firstName;
    this.lastName = lastName;
    this._email = email.toLowerCase();
    this.department = department;
    this._role = role;
    this.createdAt = new Date();
    this.active = true;
    this.loginCount = 0;
  }

  // --- Getters ---
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  get email() {
    return this._email;
  }

  get role() {
    return this._role;
  }

  get isAdmin() {
    return this._role === 'admin';
  }

  get accountAge() {
    const days = Math.floor((Date.now() - this.createdAt) / (1000 * 60 * 60 * 24));
    return `${days} days`;
  }

  // --- Setters ---
  set email(value) {
    if (!value.includes('@')) {
      throw new Error('Invalid email: must contain @');
    }
    this._email = value.toLowerCase();
  }

  set role(value) {
    const validRoles = ['intern', 'developer', 'senior', 'lead', 'manager', 'admin'];
    if (!validRoles.includes(value)) {
      throw new Error(`Invalid role: "${value}"`);
    }
    this._role = value;
  }

  // --- Methods ---
  getProfile() {
    return {
      name: this.fullName,
      email: this.email,
      department: this.department,
      role: this.role,
      isAdmin: this.isAdmin,
      active: this.active,
      loginCount: this.loginCount
    };
  }

  login() {
    if (!this.active) {
      return `Account for ${this.fullName} is deactivated.`;
    }
    this.loginCount++;
    return `Welcome back, ${this.firstName}! (Login #${this.loginCount})`;
  }

  promote(newRole) {
    const oldRole = this.role;
    this.role = newRole; // uses the setter for validation
    return `${this.fullName} promoted from ${oldRole} to ${newRole}`;
  }

  toString() {
    return `[${this.role.toUpperCase()}] ${this.fullName} <${this.email}> — ${this.department}`;
  }
}

console.log('=== Example 7: Complete User Model ===');
const novaTechUser = new NovaTechUser('Jordan', 'Rivera', 'J.Rivera@NovaTech.io', 'Engineering');

console.log(novaTechUser.toString());
console.log('Full name:', novaTechUser.fullName);
console.log('Is admin?', novaTechUser.isAdmin);
console.log(novaTechUser.login());
console.log(novaTechUser.login());
console.log(novaTechUser.promote('senior'));
console.log('Profile:', novaTechUser.getProfile());
