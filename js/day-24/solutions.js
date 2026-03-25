// ============================================
// Day 24 Solutions: Classes Part 1
// Ticket: NOVA-103 — Build the User model
// ============================================


// ------------------------------------------
// TASK 1: Basic Employee class
// ------------------------------------------

class Employee {
  constructor(name, email, department, salary) {
    this.name = name;
    this.email = email;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  getProfile() {
    return {
      name: this.name,
      email: this.email,
      department: this.department,
      monthlySalary: this.salary,
      annualSalary: this.getAnnualSalary()
    };
  }

  toString() {
    return `${this.name} <${this.email}> — ${this.department}`;
  }
}

const emp1 = new Employee('Jordan Rivera', 'j.rivera@novatech.io', 'Engineering', 8500);
const emp2 = new Employee('Sam Park', 's.park@novatech.io', 'Design', 7800);

console.log('=== Task 1: Employee Class ===');
console.log(emp1.toString());
console.log('Annual salary:', emp1.getAnnualSalary());
console.log(emp2.toString());
console.log('Profile:', emp2.getProfile());
console.log();

// WHY: The constructor initializes each instance with its own data.
// Methods like getAnnualSalary() use this.salary to access instance data.
// toString() provides a human-readable representation.


// ------------------------------------------
// TASK 2: Product class with getters
// ------------------------------------------

class Product {
  constructor(name, basePrice, category, stock) {
    this.name = name;
    this.basePrice = basePrice;
    this.category = category;
    this.stock = stock;
  }

  get priceWithTax() {
    return this.basePrice * 1.08;
  }

  get displayPrice() {
    return `$${this.priceWithTax.toFixed(2)}`;
  }

  get inStock() {
    return this.stock > 0;
  }

  get stockStatus() {
    if (this.stock === 0) return 'Out of Stock';
    if (this.stock < 5) return `Low Stock (${this.stock} units)`;
    return `In Stock (${this.stock} units)`;
  }

  sell(quantity) {
    if (quantity > this.stock) {
      throw new Error(`Cannot sell ${quantity} units. Only ${this.stock} in stock.`);
    }
    this.stock -= quantity;
    return `Sold ${quantity} x ${this.name}. ${this.stockStatus}`;
  }
}

console.log('=== Task 2: Product Class ===');
const laptop = new Product('NovaTech Laptop Pro', 1299.99, 'Hardware', 8);
console.log(`${laptop.name}: ${laptop.displayPrice}`);
console.log('Status:', laptop.stockStatus);
console.log(laptop.sell(5));
console.log('Status:', laptop.stockStatus);
console.log(laptop.sell(2));
console.log('Status:', laptop.stockStatus);

try {
  laptop.sell(10); // not enough stock
} catch (e) {
  console.log('Error:', e.message);
}
console.log();

// WHY: Getters like priceWithTax are computed on access — if basePrice
// changes, the getter automatically returns the updated value. The sell
// method modifies state and throws when the operation is invalid.


// ------------------------------------------
// TASK 3: Settings class with setters
// ------------------------------------------

class Settings {
  constructor(theme, language, itemsPerPage) {
    // Use setters for validation even in the constructor
    this._theme = null;
    this._language = null;
    this._itemsPerPage = null;

    this.theme = theme;
    this.language = language;
    this.itemsPerPage = itemsPerPage;
  }

  get theme() {
    return this._theme;
  }

  set theme(value) {
    const allowed = ['light', 'dark', 'auto'];
    if (!allowed.includes(value)) {
      throw new Error(`Invalid theme "${value}". Allowed: ${allowed.join(', ')}`);
    }
    this._theme = value;
  }

  get language() {
    return this._language;
  }

  set language(value) {
    const allowed = ['en', 'es', 'fr', 'de', 'ja'];
    if (!allowed.includes(value)) {
      throw new Error(`Invalid language "${value}". Allowed: ${allowed.join(', ')}`);
    }
    this._language = value;
  }

  get itemsPerPage() {
    return this._itemsPerPage;
  }

  set itemsPerPage(value) {
    const allowed = [10, 25, 50, 100];
    if (!allowed.includes(value)) {
      throw new Error(`Invalid itemsPerPage ${value}. Allowed: ${allowed.join(', ')}`);
    }
    this._itemsPerPage = value;
  }

  toJSON() {
    return {
      theme: this.theme,
      language: this.language,
      itemsPerPage: this.itemsPerPage
    };
  }
}

console.log('=== Task 3: Settings Class ===');
const settings = new Settings('dark', 'en', 25);
console.log('Settings:', settings.toJSON());

settings.theme = 'light';
settings.language = 'es';
settings.itemsPerPage = 50;
console.log('Updated:', settings.toJSON());

try {
  settings.theme = 'neon';
} catch (e) {
  console.log('Error:', e.message);
}

try {
  settings.itemsPerPage = 7;
} catch (e) {
  console.log('Error:', e.message);
}
console.log();

// WHY: Setters enforce validation at assignment time. Even the constructor
// calls the setters (this.theme = theme triggers set theme()), so invalid
// data is caught immediately. The _prefix stores the actual value privately.


// ------------------------------------------
// TASK 4: TaskTracker class
// ------------------------------------------

class TaskTracker {
  constructor(projectName) {
    this.projectName = projectName;
    this.tasks = [];
    this._nextId = 1;
  }

  addTask(title, assignee, priority = 'medium') {
    const task = {
      id: this._nextId++,
      title,
      assignee,
      priority,
      status: 'todo'
    };
    this.tasks.push(task);
    return task;
  }

  completeTask(id) {
    const task = this.tasks.find(t => t.id === id);
    if (!task) {
      throw new Error(`Task #${id} not found`);
    }
    task.status = 'done';
    return `Task #${id} "${task.title}" marked as done.`;
  }

  getTasksByAssignee(name) {
    return this.tasks.filter(t => t.assignee === name);
  }

  get progress() {
    const done = this.tasks.filter(t => t.status === 'done').length;
    return `${done}/${this.tasks.length} tasks complete`;
  }

  get summary() {
    let output = `\n  Project: ${this.projectName}\n  ${this.progress}\n`;
    this.tasks.forEach(t => {
      const icon = t.status === 'done' ? '[x]' : '[ ]';
      output += `  ${icon} #${t.id} ${t.title} (${t.assignee}) [${t.priority}]\n`;
    });
    return output;
  }
}

console.log('=== Task 4: TaskTracker ===');
const tracker = new TaskTracker('NOVA Dashboard Redesign');
tracker.addTask('Design new sidebar', 'Sam Park', 'high');
tracker.addTask('Implement user cards', 'Jordan Rivera', 'high');
tracker.addTask('Write unit tests', 'Jordan Rivera', 'medium');
tracker.addTask('Update documentation', 'Alex Chen', 'low');

console.log(tracker.completeTask(1));
console.log(tracker.completeTask(2));
console.log('Progress:', tracker.progress);
console.log("Jordan's tasks:", tracker.getTasksByAssignee('Jordan Rivera'));
console.log(tracker.summary);

// WHY: The auto-incrementing ID pattern (_nextId++) ensures each task
// gets a unique identifier. The progress getter computes the count
// dynamically every time it's accessed.


// ------------------------------------------
// TASK 5: Invoice class
// ------------------------------------------

class Invoice {
  constructor(invoiceNumber, client, items = []) {
    this.invoiceNumber = invoiceNumber;
    this.client = client;
    this.items = items.map(item => ({ ...item })); // copy items
  }

  get subtotal() {
    return this.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  }

  get tax() {
    return this.subtotal * 0.08;
  }

  get total() {
    return this.subtotal + this.tax;
  }

  addItem(description, quantity, unitPrice) {
    this.items.push({ description, quantity, unitPrice });
  }

  removeItem(description) {
    const index = this.items.findIndex(item => item.description === description);
    if (index === -1) {
      throw new Error(`Item "${description}" not found on invoice`);
    }
    this.items.splice(index, 1);
  }

  printInvoice() {
    console.log(`\n  ====================================`);
    console.log(`  INVOICE #${this.invoiceNumber}`);
    console.log(`  Client: ${this.client}`);
    console.log(`  ------------------------------------`);
    this.items.forEach(item => {
      const lineTotal = item.quantity * item.unitPrice;
      console.log(`  ${item.description}`);
      console.log(`    ${item.quantity} x $${item.unitPrice.toFixed(2)} = $${lineTotal.toFixed(2)}`);
    });
    console.log(`  ------------------------------------`);
    console.log(`  Subtotal: $${this.subtotal.toFixed(2)}`);
    console.log(`  Tax (8%): $${this.tax.toFixed(2)}`);
    console.log(`  TOTAL:    $${this.total.toFixed(2)}`);
    console.log(`  ====================================\n`);
  }
}

console.log('=== Task 5: Invoice Class ===');
const invoice = new Invoice('INV-2025-001', 'Acme Corp', [
  { description: 'NovaTech Pro License', quantity: 5, unitPrice: 299.99 },
  { description: 'Premium Support (1yr)', quantity: 1, unitPrice: 999.00 }
]);

invoice.addItem('Training Workshop', 2, 450.00);
invoice.printInvoice();

// WHY: Getters for subtotal/tax/total ensure the values are always
// up-to-date, even after adding or removing items. The printInvoice
// method produces a human-readable format for logging or display.


// ------------------------------------------
// BONUS: Dashboard Widget with chaining
// ------------------------------------------

class DashboardWidget {
  constructor(title) {
    this.title = title;
    this.width = 200;
    this.height = 150;
    this.x = 0;
    this.y = 0;
    this.color = '#333333';
    this.data = [];
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    return this; // enables chaining
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setData(data) {
    this.data = data;
    return this;
  }

  render() {
    console.log(`  Widget: "${this.title}"`);
    console.log(`  Size: ${this.width}x${this.height}`);
    console.log(`  Position: (${this.x}, ${this.y})`);
    console.log(`  Color: ${this.color}`);
    console.log(`  Data points: ${this.data.length}`);
    console.log(`  Data: [${this.data.join(', ')}]`);
    return this;
  }
}

console.log('=== Bonus: Method Chaining ===');
new DashboardWidget('Revenue Chart')
  .setSize(400, 300)
  .setPosition(0, 0)
  .setColor('#3498db')
  .setData([100, 200, 150, 300, 250])
  .render();

console.log();

new DashboardWidget('Active Users')
  .setSize(200, 200)
  .setPosition(420, 0)
  .setColor('#2ecc71')
  .setData([45, 52, 49, 60, 58, 71])
  .render();

// WHY: Method chaining works by returning `this` from each method.
// This lets you call multiple methods in sequence without repeating
// the variable name. It's a common pattern in builder-style APIs
// (jQuery, D3, query builders, etc.).
