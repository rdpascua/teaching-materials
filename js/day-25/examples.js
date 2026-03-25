// ============================================
// Day 25: Classes Part 2
// Ticket: NOVA-104 — Extend the model layer
// ============================================


// ------------------------------------------
// EXAMPLE 1: Basic inheritance with extends
// ------------------------------------------

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.role = 'user';
    this.createdAt = new Date();
  }

  getProfile() {
    return `[${this.role.toUpperCase()}] ${this.name} <${this.email}>`;
  }

  hasPermission(action) {
    const userPermissions = ['read', 'comment'];
    return userPermissions.includes(action);
  }
}

// AdminUser inherits everything from User
class AdminUser extends User {
  constructor(name, email, department) {
    super(name, email);     // MUST call super() first
    this.role = 'admin';    // override inherited property
    this.department = department;
    this.managedUsers = [];
  }

  // Override parent method
  hasPermission(action) {
    return true; // admins can do everything
  }

  // New method specific to admins
  addManagedUser(user) {
    this.managedUsers.push(user);
    console.log(`  ${this.name} now manages ${user.name}`);
  }
}

console.log('=== Example 1: extends & super() ===');
const regularUser = new User('Sam Park', 's.park@novatech.io');
const admin = new AdminUser('Alex Chen', 'a.chen@novatech.io', 'Engineering');

console.log(regularUser.getProfile()); // [USER] Sam Park <s.park@novatech.io>
console.log(admin.getProfile());       // [ADMIN] Alex Chen <a.chen@novatech.io>

console.log('User can delete?', regularUser.hasPermission('delete')); // false
console.log('Admin can delete?', admin.hasPermission('delete'));       // true

admin.addManagedUser(regularUser);
console.log();


// ------------------------------------------
// EXAMPLE 2: super.method() — calling parent methods
// ------------------------------------------

class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }

  describe() {
    return `${this.name} — ${this.department}`;
  }
}

class Manager extends Employee {
  constructor(name, department, teamSize) {
    super(name, department);
    this.teamSize = teamSize;
  }

  // Override but also USE the parent method
  describe() {
    const base = super.describe(); // call parent version
    return `${base} (manages ${this.teamSize} people)`;
  }
}

console.log('=== Example 2: super.method() ===');
const dev = new Employee('Jordan Rivera', 'Engineering');
const mgr = new Manager('Dana Lee', 'Engineering', 8);

console.log(dev.describe()); // "Jordan Rivera — Engineering"
console.log(mgr.describe()); // "Jordan Rivera — Engineering (manages 8 people)"
console.log();


// ------------------------------------------
// EXAMPLE 3: Static methods
// ------------------------------------------

class Product {
  constructor(name, price, sku) {
    this.name = name;
    this.price = price;
    this.sku = sku;
  }

  // Instance method — called on a product object
  getDisplayPrice() {
    return `$${this.price.toFixed(2)}`;
  }

  // Static method — called on the Product class itself
  static fromJSON(jsonString) {
    const data = JSON.parse(jsonString);
    return new Product(data.name, data.price, data.sku);
  }

  static comparePrices(productA, productB) {
    return productA.price - productB.price;
  }

  static generateSKU(category, id) {
    return `${category.toUpperCase().slice(0, 3)}-${String(id).padStart(5, '0')}`;
  }
}

console.log('=== Example 3: Static Methods ===');

// Create from JSON (factory method)
const product = Product.fromJSON('{"name":"NovaTech Hub","price":149.99,"sku":"HW-00001"}');
console.log(product.name, product.getDisplayPrice());

// Generate a SKU
console.log('New SKU:', Product.generateSKU('software', 42));

// Compare products
const p1 = new Product('Basic Plan', 9.99, 'SW-00001');
const p2 = new Product('Pro Plan', 29.99, 'SW-00002');
const products = [p2, p1].sort(Product.comparePrices);
console.log('Sorted:', products.map(p => `${p.name}: ${p.getDisplayPrice()}`));
console.log();


// ------------------------------------------
// EXAMPLE 4: Private fields (#)
// ------------------------------------------

class Account {
  #balance;
  #transactionHistory;

  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
    this.#transactionHistory = [];
  }

  get balance() {
    return this.#balance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error('Deposit must be positive');
    this.#balance += amount;
    this.#recordTransaction('deposit', amount);
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error('Withdrawal must be positive');
    if (amount > this.#balance) throw new Error('Insufficient funds');
    this.#balance -= amount;
    this.#recordTransaction('withdrawal', amount);
    return this.#balance;
  }

  // Private method — only callable inside the class
  #recordTransaction(type, amount) {
    this.#transactionHistory.push({
      type,
      amount,
      balance: this.#balance,
      timestamp: new Date()
    });
  }

  getStatement() {
    return this.#transactionHistory.map(t =>
      `  ${t.type}: $${t.amount.toFixed(2)} (balance: $${t.balance.toFixed(2)})`
    ).join('\n');
  }
}

console.log('=== Example 4: Private Fields ===');
const account = new Account('NovaTech Ops', 10000);
account.deposit(5000);
account.withdraw(2500);
account.deposit(1000);

console.log(`Owner: ${account.owner}`);
console.log(`Balance: $${account.balance.toFixed(2)}`);
console.log('Statement:');
console.log(account.getStatement());

// These would all cause errors:
// console.log(account.#balance);           // SyntaxError
// console.log(account.#transactionHistory); // SyntaxError
// account.#recordTransaction('hack', 999); // SyntaxError
console.log();


// ------------------------------------------
// EXAMPLE 5: instanceof — checking types
// ------------------------------------------

console.log('=== Example 5: instanceof ===');
console.log('admin instanceof AdminUser:', admin instanceof AdminUser); // true
console.log('admin instanceof User:', admin instanceof User);           // true
console.log('regularUser instanceof AdminUser:', regularUser instanceof AdminUser); // false
console.log('regularUser instanceof User:', regularUser instanceof User);           // true
console.log();


// ------------------------------------------
// EXAMPLE 6: Full NovaTech model hierarchy
// ------------------------------------------

class NovaTechUser {
  #passwordHash;

  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.role = 'user';
    this.active = true;
    this.#passwordHash = NovaTechUser.#simpleHash(password);
  }

  static #simpleHash(str) {
    // Simplified hash for demo — real apps use bcrypt
    let hash = 0;
    for (const char of str) {
      hash = ((hash << 5) - hash) + char.charCodeAt(0);
      hash = hash & hash; // Convert to 32-bit integer
    }
    return hash.toString(36);
  }

  static create(name, email, password) {
    return new NovaTechUser(name, email, password);
  }

  static validateEmail(email) {
    return /^[^\s@]+@novatech\.io$/.test(email);
  }

  authenticate(password) {
    return NovaTechUser.#simpleHash(password) === this.#passwordHash;
  }

  getProfile() {
    return {
      name: this.name,
      email: this.email,
      role: this.role,
      active: this.active
    };
  }

  toString() {
    return `[${this.role.toUpperCase()}] ${this.name}`;
  }
}

class NovaTechAdmin extends NovaTechUser {
  constructor(name, email, password, accessLevel = 'standard') {
    super(name, email, password);
    this.role = 'admin';
    this.accessLevel = accessLevel;
    this.auditLog = [];
  }

  // Override getProfile to include admin-specific data
  getProfile() {
    return {
      ...super.getProfile(), // spread the parent's profile
      accessLevel: this.accessLevel,
      auditLogEntries: this.auditLog.length
    };
  }

  performAction(action, target) {
    const entry = {
      action,
      target,
      timestamp: new Date().toISOString()
    };
    this.auditLog.push(entry);
    console.log(`  [AUDIT] ${this.name}: ${action} on ${target}`);
  }
}

class NovaTechGuest extends NovaTechUser {
  constructor(name) {
    super(name, 'guest@novatech.io', 'guest-no-password');
    this.role = 'guest';
    this.expiresAt = new Date(Date.now() + 30 * 60 * 1000); // 30 min
  }

  get isExpired() {
    return Date.now() > this.expiresAt.getTime();
  }

  get timeRemaining() {
    const ms = this.expiresAt.getTime() - Date.now();
    if (ms <= 0) return 'Expired';
    const minutes = Math.floor(ms / 60000);
    return `${minutes} minutes`;
  }

  getProfile() {
    return {
      ...super.getProfile(),
      expiresAt: this.expiresAt.toISOString(),
      timeRemaining: this.timeRemaining
    };
  }
}

console.log('=== Example 6: Full Hierarchy ===');

// Factory method
const ntUser = NovaTechUser.create('Sam Park', 's.park@novatech.io', 'pass123');
console.log(ntUser.toString());
console.log('Authenticated:', ntUser.authenticate('pass123'));
console.log('Wrong password:', ntUser.authenticate('wrong'));

// Admin
const ntAdmin = new NovaTechAdmin('Alex Chen', 'a.chen@novatech.io', 'admin-pass', 'superadmin');
console.log(ntAdmin.toString());
ntAdmin.performAction('DEPLOY', 'production-v2.5');
ntAdmin.performAction('GRANT_ACCESS', 'Sam Park');
console.log('Admin profile:', ntAdmin.getProfile());

// Guest
const guest = new NovaTechGuest('Visitor');
console.log(guest.toString());
console.log('Guest profile:', guest.getProfile());

// Static validation
console.log('Valid email?', NovaTechUser.validateEmail('test@novatech.io'));  // true
console.log('Valid email?', NovaTechUser.validateEmail('test@gmail.com'));    // false
