// ============================================
// Day 25 Solutions: Classes Part 2
// Ticket: NOVA-104 — Extend the model layer
// ============================================


// ------------------------------------------
// TASK 1: Vehicle fleet management
// ------------------------------------------

class Vehicle {
  constructor(make, model, year, mileage = 0) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  drive(miles) {
    this.mileage += miles;
    return `Drove ${miles} miles. Odometer: ${this.mileage.toLocaleString()} mi`;
  }

  getInfo() {
    return `${this.year} ${this.make} ${this.model} (${this.mileage.toLocaleString()} mi)`;
  }
}

class ElectricVehicle extends Vehicle {
  constructor(make, model, year, mileage, batteryLevel = 100, range = 300) {
    super(make, model, year, mileage);
    this.batteryLevel = batteryLevel;
    this.range = range;
  }

  drive(miles) {
    if (!this.canDrive) {
      throw new Error('Battery too low to drive. Please charge.');
    }
    const batteryUsed = (miles / this.range) * 100;
    this.batteryLevel = Math.max(0, this.batteryLevel - batteryUsed);
    return super.drive(miles) + ` (Battery: ${this.batteryLevel.toFixed(1)}%)`;
  }

  charge() {
    this.batteryLevel = 100;
    return `${this.getInfo()} — Fully charged.`;
  }

  get canDrive() {
    return this.batteryLevel > 10;
  }
}

class ServiceVan extends Vehicle {
  constructor(make, model, year, mileage, capacity) {
    super(make, model, year, mileage);
    this.capacity = capacity;
    this.currentLoad = 0;
  }

  load(weight) {
    if (this.currentLoad + weight > this.capacity) {
      throw new Error(`Cannot load ${weight}lbs. Capacity: ${this.capacity}lbs, Current: ${this.currentLoad}lbs`);
    }
    this.currentLoad += weight;
    return `Loaded ${weight}lbs. Current load: ${this.currentLoad}/${this.capacity}lbs`;
  }

  unload(weight) {
    this.currentLoad = Math.max(0, this.currentLoad - weight);
    return `Unloaded ${weight}lbs. Current load: ${this.currentLoad}/${this.capacity}lbs`;
  }

  get available() {
    return this.currentLoad === 0;
  }
}

console.log('=== Task 1: Vehicle Fleet ===');
const tesla = new ElectricVehicle('Tesla', 'Model 3', 2024, 5000, 85, 350);
console.log(tesla.getInfo());
console.log(tesla.drive(50));
console.log('Can drive?', tesla.canDrive);
console.log(tesla.charge());

const van = new ServiceVan('Ford', 'Transit', 2023, 20000, 2000);
console.log(van.getInfo());
console.log(van.load(500));
console.log(van.load(800));
console.log('Available?', van.available);
console.log(van.unload(1300));
console.log('Available?', van.available);
console.log();

// WHY: ElectricVehicle overrides drive() to add battery tracking, but still
// calls super.drive(miles) to keep the mileage tracking from the parent.
// ServiceVan adds completely new behavior without needing to override drive().


// ------------------------------------------
// TASK 2: Notification system
// ------------------------------------------

class Notification {
  static #nextId = 1;

  constructor(recipient, message) {
    this.id = Notification.#nextId++;
    this.recipient = recipient;
    this.message = message;
    this.timestamp = new Date();
    this.read = false;
    this.type = 'general';
  }

  markAsRead() {
    this.read = true;
  }

  getSummary() {
    const status = this.read ? 'READ' : 'UNREAD';
    return `[${this.type.toUpperCase()}] (${status}) To: ${this.recipient} — ${this.message}`;
  }

  static createBatch(recipients, message) {
    return recipients.map(r => new Notification(r, message));
  }
}

class EmailNotification extends Notification {
  constructor(recipient, message, subject) {
    super(recipient, message);
    this.type = 'email';
    this.subject = subject;
  }

  getSummary() {
    const status = this.read ? 'READ' : 'UNREAD';
    return `[EMAIL] (${status}) To: ${this.recipient} — Subject: "${this.subject}" — ${this.message}`;
  }
}

class SlackNotification extends Notification {
  constructor(recipient, message, channel) {
    super(recipient, message);
    this.type = 'slack';
    this.channel = channel;
  }

  getSummary() {
    const status = this.read ? 'READ' : 'UNREAD';
    return `[SLACK] (${status}) #${this.channel} @${this.recipient} — ${this.message}`;
  }
}

console.log('=== Task 2: Notifications ===');
const email = new EmailNotification('j.rivera@novatech.io', 'Please review PR #42', 'Code Review Request');
const slack = new SlackNotification('jordan', 'Build passed on main', 'ci-alerts');
console.log(email.getSummary());
console.log(slack.getSummary());

email.markAsRead();
console.log(email.getSummary());

const batch = Notification.createBatch(['alex', 'sam', 'dana'], 'Team meeting at 3pm');
batch.forEach(n => console.log(n.getSummary()));
console.log();

// WHY: Each notification type overrides getSummary() to include type-specific
// data (subject for email, channel for Slack). The static createBatch method
// is a factory that creates multiple instances at once.


// ------------------------------------------
// TASK 3: Secure credentials store
// ------------------------------------------

class CredentialStore {
  #credentials;
  #masterKey;
  #unlocked;

  constructor(masterKey) {
    this.#credentials = new Map();
    this.#masterKey = masterKey;
    this.#unlocked = false;
  }

  unlock(key) {
    if (key === this.#masterKey) {
      this.#unlocked = true;
      return 'Credential store unlocked.';
    }
    throw new Error('Invalid master key.');
  }

  lock() {
    this.#unlocked = false;
    return 'Credential store locked.';
  }

  get isUnlocked() {
    return this.#unlocked;
  }

  #encrypt(value) {
    // Simple demo obfuscation — NOT real encryption!
    return value.split('').map(c =>
      String.fromCharCode(c.charCodeAt(0) + 3)
    ).join('');
  }

  #decrypt(value) {
    return value.split('').map(c =>
      String.fromCharCode(c.charCodeAt(0) - 3)
    ).join('');
  }

  addCredential(service, username, password) {
    if (!this.#unlocked) {
      throw new Error('Store is locked. Call unlock() first.');
    }
    this.#credentials.set(service, {
      username,
      password: this.#encrypt(password)
    });
    return `Credential for "${service}" stored.`;
  }

  getCredential(service) {
    if (!this.#unlocked) {
      throw new Error('Store is locked. Call unlock() first.');
    }
    const cred = this.#credentials.get(service);
    if (!cred) {
      throw new Error(`No credential found for "${service}".`);
    }
    return {
      username: cred.username,
      password: this.#decrypt(cred.password)
    };
  }
}

console.log('=== Task 3: Credential Store ===');
const store = new CredentialStore('master-secret-123');

// Locked — should fail
try {
  store.addCredential('github', 'novatech-bot', 'gh-token-abc');
} catch (e) {
  console.log('Locked error:', e.message);
}

// Unlock and use
console.log(store.unlock('master-secret-123'));
console.log(store.addCredential('github', 'novatech-bot', 'gh-token-abc'));
console.log(store.addCredential('aws', 'deploy-user', 'aws-secret-xyz'));

const ghCred = store.getCredential('github');
console.log('GitHub credential:', ghCred);

console.log(store.lock());
console.log('Is unlocked?', store.isUnlocked);

// Cannot access private fields from outside:
// console.log(store.#credentials); // SyntaxError
// console.log(store.#masterKey);   // SyntaxError
console.log();

// WHY: Private fields make it impossible to access credentials or the
// master key from outside the class. The unlock/lock pattern adds a
// layer of access control beyond just field privacy.


// ------------------------------------------
// TASK 4: Shape calculator with static methods
// ------------------------------------------

class Shape {
  constructor(name) {
    this.name = name;
  }

  area() {
    return 0;
  }

  describe() {
    return `${this.name}: area = ${this.area().toFixed(2)}`;
  }

  static largest(shapes) {
    return shapes.reduce((max, shape) =>
      shape.area() > max.area() ? shape : max
    );
  }

  static totalArea(shapes) {
    return shapes.reduce((sum, shape) => sum + shape.area(), 0);
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super('Rectangle');
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('Circle');
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super('Triangle');
    this.base = base;
    this.height = height;
  }

  area() {
    return 0.5 * this.base * this.height;
  }
}

console.log('=== Task 4: Shapes ===');
const shapes = [
  new Rectangle(10, 5),
  new Circle(7),
  new Triangle(8, 12)
];

shapes.forEach(s => console.log(s.describe()));
console.log('Largest:', Shape.largest(shapes).describe());
console.log('Total area:', Shape.totalArea(shapes).toFixed(2));
console.log();

// WHY: Each child class overrides area() with its own formula. Static
// methods on Shape work with any array of shapes, regardless of type.
// This is polymorphism — same method name, different behavior per type.


// ------------------------------------------
// TASK 5: Database model pattern
// ------------------------------------------

class Model {
  constructor(data) {
    // Each class gets its own records store
    const Ctor = this.constructor;
    if (!Ctor._records) {
      Ctor._records = [];
      Ctor._nextId = 1;
    }
    this.id = Ctor._nextId++;
    Object.assign(this, data);
  }

  static create(data) {
    const instance = new this(data);
    this._records.push(instance);
    return instance;
  }

  static findById(id) {
    return (this._records || []).find(r => r.id === id) || null;
  }

  static findAll() {
    return [...(this._records || [])];
  }

  static count() {
    return (this._records || []).length;
  }

  update(data) {
    Object.assign(this, data);
    return this;
  }

  destroy() {
    const Ctor = this.constructor;
    const index = Ctor._records.indexOf(this);
    if (index !== -1) {
      Ctor._records.splice(index, 1);
    }
    return true;
  }
}

class EmployeeModel extends Model {
  static create(data) {
    if (!data.name) throw new Error('Employee name is required');
    if (!data.email) throw new Error('Employee email is required');
    return super.create(data);
  }
}

class ProjectModel extends Model {
  static create(data) {
    if (!data.title) throw new Error('Project title is required');
    return super.create(data);
  }
}

console.log('=== Task 5: Mini ORM ===');

// Create employees
const e1 = EmployeeModel.create({ name: 'Jordan Rivera', email: 'j.rivera@novatech.io', department: 'Engineering' });
const e2 = EmployeeModel.create({ name: 'Sam Park', email: 's.park@novatech.io', department: 'Design' });
const e3 = EmployeeModel.create({ name: 'Dana Lee', email: 'd.lee@novatech.io', department: 'Engineering' });

console.log('Employees:', EmployeeModel.count());
console.log('Find #2:', EmployeeModel.findById(2));

// Create projects (separate records from employees!)
const p1 = ProjectModel.create({ title: 'Dashboard Redesign', status: 'active' });
const p2 = ProjectModel.create({ title: 'API Migration', status: 'planning' });

console.log('Projects:', ProjectModel.count());
console.log('Employees (still):', EmployeeModel.count()); // unchanged

// Update
e1.update({ department: 'Platform Engineering', role: 'Senior' });
console.log('Updated:', EmployeeModel.findById(1));

// Destroy
e3.destroy();
console.log('After delete:', EmployeeModel.count());
console.log('All employees:', EmployeeModel.findAll().map(e => e.name));

// Validation
try {
  EmployeeModel.create({ name: 'No Email' });
} catch (e) {
  console.log('Validation error:', e.message);
}
console.log();

// WHY: The base Model class provides CRUD (Create, Read, Update, Delete)
// operations. Each child class gets its own _records array (checked via
// this.constructor). Child classes add validation by overriding create()
// and calling super.create() after validating.


// ------------------------------------------
// BONUS: Event system with inheritance
// ------------------------------------------

class EventEmitter {
  #listeners;

  constructor() {
    this.#listeners = new Map();
  }

  on(event, callback) {
    if (!this.#listeners.has(event)) {
      this.#listeners.set(event, []);
    }
    this.#listeners.get(event).push(callback);
    return this; // allow chaining
  }

  off(event, callback) {
    if (!this.#listeners.has(event)) return this;
    const callbacks = this.#listeners.get(event);
    const index = callbacks.indexOf(callback);
    if (index !== -1) {
      callbacks.splice(index, 1);
    }
    return this;
  }

  emit(event, ...args) {
    if (!this.#listeners.has(event)) return;
    for (const callback of this.#listeners.get(event)) {
      callback(...args);
    }
  }
}

class OrderTracker extends EventEmitter {
  constructor(orderId) {
    super();
    this.orderId = orderId;
    this.status = 'pending';
    this.history = [{ status: 'pending', timestamp: new Date() }];
  }

  updateStatus(newStatus) {
    const oldStatus = this.status;
    this.status = newStatus;
    this.history.push({ status: newStatus, timestamp: new Date() });
    this.emit('statusChange', {
      orderId: this.orderId,
      oldStatus,
      newStatus,
      timestamp: new Date()
    });
  }

  cancel() {
    this.status = 'cancelled';
    this.history.push({ status: 'cancelled', timestamp: new Date() });
    this.emit('cancelled', { orderId: this.orderId });
  }
}

console.log('=== Bonus: Event System ===');

const order = new OrderTracker('ORD-001');

// Register event listeners
order.on('statusChange', (data) => {
  console.log(`  Status changed: ${data.oldStatus} -> ${data.newStatus}`);
});

order.on('statusChange', (data) => {
  console.log(`  [LOG] Order ${data.orderId} updated at ${data.timestamp.toISOString()}`);
});

order.on('cancelled', (data) => {
  console.log(`  Order ${data.orderId} has been CANCELLED.`);
});

// Trigger events
order.updateStatus('processing');
order.updateStatus('shipped');
order.cancel();

console.log('History:', order.history.map(h => h.status));

// WHY: The EventEmitter pattern (also called Observer/Pub-Sub) decouples
// components. OrderTracker doesn't need to know WHO cares about status
// changes — it just emits events. Listeners register themselves. This is
// the same pattern Node.js uses for streams, HTTP servers, etc.
