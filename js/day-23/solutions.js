// ============================================
// Day 23 Solutions: ES Modules
// Ticket: NOVA-102 — Refactor into modules
// ============================================


// ------------------------------------------
// TASK 1: Export utility functions
// ------------------------------------------

// FILE: utils/math.js

// export function calculateTax(amount, rate = 0.08) {  // ← how it looks in the module file
function calculateTax(amount, rate = 0.08) {
  return amount * rate;
}

function calculateDiscount(price, percent) {
  return price - (price * percent / 100);
}

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Alternative: export at the bottom
// export { calculateTax, calculateDiscount, calculateTotal };

// FILE: app.js
// import { calculateTax, calculateDiscount, calculateTotal } from './utils/math.js';

// WHY: Named exports use the export keyword before each function declaration.
// When importing, you use curly braces and the exact function names.


// ------------------------------------------
// TASK 2: Default export a class
// ------------------------------------------

// FILE: models/Order.js

// export default class Order {  // ← how it looks in the module file
class Order {
  constructor(orderId, customer, items) {
    this.orderId = orderId;
    this.customer = customer;
    this.items = items; // [{ name, price }]
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  getSummary() {
    return `Order #${this.orderId} for ${this.customer}: $${this.getTotal().toFixed(2)}`;
  }
}

// FILE: app.js
// import Order from './models/Order.js';

// Test it (runnable in this file):
const order = new Order(1001, 'Acme Corp', [
  { name: 'NovaTech Pro License', price: 299.99 },
  { name: 'Support Plan', price: 49.99 }
]);

console.log('=== Task 2: Order Class ===');
console.log(order.getSummary());
// "Order #1001 for Acme Corp: $349.98"
console.log();

// WHY: Default exports are used for the "main thing" a file provides.
// No curly braces when importing, and you can name it anything.


// ------------------------------------------
// TASK 3: Mixed exports
// ------------------------------------------

// FILE: services/employeeService.js

// Named exports
const ROLES = ['admin', 'manager', 'developer', 'designer', 'intern'];

function getActiveEmployees(employees) {
  return employees.filter(emp => emp.active);
}

// Default export
// export default class EmployeeService {  // ← how it looks in the module file
class EmployeeService {
  constructor() {
    this.employees = [];
  }

  add(employee) {
    this.employees.push(employee);
  }

  findByDepartment(dept) {
    return this.employees.filter(emp => emp.department === dept);
  }
}

// FILE: app.js
// import EmployeeService, { ROLES, getActiveEmployees } from './services/employeeService.js';

// Test it:
console.log('=== Task 3: Mixed Exports ===');
const service = new EmployeeService();
service.add({ name: 'Alice', department: 'Engineering', active: true });
service.add({ name: 'Bob', department: 'Design', active: true });
service.add({ name: 'Carol', department: 'Engineering', active: false });

console.log('All roles:', ROLES);
console.log('Engineering team:', service.findByDepartment('Engineering'));
console.log('Active only:', getActiveEmployees(service.employees));
console.log();

// WHY: When importing both default and named exports from the same file,
// the default comes first (no braces), then named exports in curly braces.


// ------------------------------------------
// TASK 4: Barrel file
// ------------------------------------------

// FILE: models/index.js (the barrel file)
//
// export { default as User } from './User.js';
// export { default as Product } from './Product.js';
// export { default as Order } from './Order.js';

// FILE: app.js
// import { User, Product, Order } from './models/index.js';
// or simply:
// import { User, Product, Order } from './models';  // if bundler supports index resolution

console.log('=== Task 4: Barrel File ===');
console.log('Barrel files re-export from multiple modules in one place.');
console.log('This turns three import lines into one.');
console.log();

// WHY: Barrel files (index.js that re-exports) simplify imports for
// consumers. Instead of remembering exact file paths, you import from
// the folder. This is a very common pattern in React and Node projects.


// ------------------------------------------
// TASK 5: Fix the broken imports
// ------------------------------------------

console.log('=== Task 5: Fixed Imports ===');

// Bug 1: Trying to default-import from a file with only named exports
// WRONG:  import User from './utils/formatters.js';
// FIXED:  import { formatCurrency, formatDate } from './utils/formatters.js';
console.log('Bug 1: Use { } for named exports');

// Bug 2: Using named import syntax for a default export
// WRONG:  import { User } from './models/User.js';
// FIXED:  import User from './models/User.js';
console.log('Bug 2: Drop { } for default exports');

// Bug 3: Wrong file path (missing config/ directory)
// WRONG:  import { APP_NAME } from './constants.js';
// FIXED:  import { APP_NAME } from './config/constants.js';
console.log('Bug 3: Include the full path (config/constants.js)');

// Bug 4: Missing .js extension (required in ES modules)
// WRONG:  import { formatDate } from './utils/formatters';
// FIXED:  import { formatDate } from './utils/formatters.js';
console.log('Bug 4: Add .js extension (required in ES modules)');

// Bug 5: Can't use { default } as an import name
// WRONG:  import { default } from './models/User.js';
// FIXED:  import User from './models/User.js';
// (or)    import { default as User } from './models/User.js';
console.log('Bug 5: Use plain import or { default as Name }');
console.log();


// ------------------------------------------
// BONUS: Full project refactor
// ------------------------------------------

console.log('=== Bonus: Full Refactor ===');
console.log('');

// ---- FILE: config/constants.js ----
// export const COMPANY = 'NovaTech Inc.';
// export const TAX_RATE = 0.08;

const COMPANY = 'NovaTech Inc.';
const TAX_RATE = 0.08;

// ---- FILE: utils/formatters.js ----
// export function formatCurrency(amount) {
//   return `$${amount.toFixed(2)}`;
// }

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

// ---- FILE: utils/validators.js ----
// export function validateEmail(email) {
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ---- FILE: models/Employee.js ----
// export default class Employee {
//   constructor(name, email, department) {
//     this.name = name;
//     this.email = email;
//     this.department = department;
//   }
//
//   toString() {
//     return `${this.name} <${this.email}> — ${this.department}`;
//   }
// }

class Employee {
  constructor(name, email, department) {
    this.name = name;
    this.email = email;
    this.department = department;
  }

  toString() {
    return `${this.name} <${this.email}> — ${this.department}`;
  }
}

// ---- FILE: services/PayrollService.js ----
// import { TAX_RATE } from '../config/constants.js';
//
// export default class PayrollService {
//   calculatePay(employee, hoursWorked, hourlyRate) {
//     const gross = hoursWorked * hourlyRate;
//     const tax = gross * TAX_RATE;
//     return { gross, tax, net: gross - tax };
//   }
// }

class PayrollService {
  calculatePay(employee, hoursWorked, hourlyRate) {
    const gross = hoursWorked * hourlyRate;
    const tax = gross * TAX_RATE;
    return { gross, tax, net: gross - tax };
  }
}

// ---- FILE: index.js (entry point) ----
// import Employee from './models/Employee.js';
// import PayrollService from './services/PayrollService.js';
// import { formatCurrency } from './utils/formatters.js';
// import { validateEmail } from './utils/validators.js';
// import { COMPANY } from './config/constants.js';

const emp = new Employee('Dana Lee', 'd.lee@novatech.io', 'Engineering');
console.log(`Company: ${COMPANY}`);
console.log(`Employee: ${emp.toString()}`);
console.log(`Valid email? ${validateEmail(emp.email)}`);

const payroll = new PayrollService();
const pay = payroll.calculatePay(emp, 40, 75);
console.log(`Gross: ${formatCurrency(pay.gross)}`);
console.log(`Tax: ${formatCurrency(pay.tax)}`);
console.log(`Net: ${formatCurrency(pay.net)}`);

// WHY: The monolith had everything in one file with no boundaries.
// After refactoring:
//   - constants.js holds config values (easy to find and change)
//   - formatters.js and validators.js hold reusable utilities
//   - Employee.js holds the data model
//   - PayrollService.js holds business logic (and imports what it needs)
//   - index.js is the thin entry point that wires everything together
//
// Each file has a single, clear responsibility. Changes to formatting
// don't risk breaking payroll logic. New developers can find code fast.
