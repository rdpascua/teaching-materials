// ============================================
// Day 23 Exercises: ES Modules
// Ticket: NOVA-102 — Refactor into modules
// ============================================
// Instructions: Since we can't create multiple files in one exercise,
// write the export/import statements as if each section were its own file.
// Focus on getting the syntax right — this is about understanding the
// module system, not running multi-file code.


// ------------------------------------------
// TASK 1: Export utility functions
// Imagine this is FILE: utils/math.js
// Write named export statements for these three functions.
// Then write the import statement you'd use in app.js.
// ------------------------------------------

function calculateTax(amount, rate = 0.08) {
  return amount * rate;
}

function calculateDiscount(price, percent) {
  return price - (price * percent / 100);
}

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Write your export statement(s) here:
// ???

// Write the import you'd use in app.js:
// ???


// ------------------------------------------
// TASK 2: Default export a class
// Imagine this is FILE: models/Order.js
// Create an Order class and make it the default export.
// The class should have:
//   - constructor(orderId, customer, items)
//   - getTotal() — sums up item prices
//   - getSummary() — returns "Order #[id] for [customer]: $[total]"
// Write the import statement you'd use in app.js.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 3: Mixed exports
// Imagine this is FILE: services/employeeService.js
// Create:
//   - A named export constant ROLES = ['admin', 'manager', 'developer', 'designer', 'intern']
//   - A named export function getActiveEmployees(employees) that filters for active ones
//   - A default export class EmployeeService with methods:
//       - constructor() that sets this.employees = []
//       - add(employee) — pushes to this.employees
//       - findByDepartment(dept) — filters by department
// Write the import statement that grabs both default and named exports.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 4: Barrel file
// Given these existing module files:
//   models/User.js       (default export: User class)
//   models/Product.js    (default export: Product class)
//   models/Order.js      (default export: Order class)
//
// Write a barrel file (models/index.js) that re-exports all three.
// Then write the single import statement for app.js to get all models.
// ------------------------------------------

// Write models/index.js content here:
// ???

// Write the single import for app.js:
// ???


// ------------------------------------------
// TASK 5: Fix the broken imports
// Each import statement below has a bug. Fix them.
// ------------------------------------------

// Given this file structure:
//   utils/formatters.js has named exports: formatCurrency, formatDate
//   models/User.js has a default export: User class
//   config/constants.js has named exports: APP_NAME, VERSION

// Bug 1: Wrong syntax for named imports
// import User from './utils/formatters.js';
// Fix: ???

// Bug 2: Wrong syntax for default import
// import { User } from './models/User.js';
// Fix: ???

// Bug 3: Wrong path
// import { APP_NAME } from './constants.js';
// Fix: ???

// Bug 4: Missing file extension
// import { formatDate } from './utils/formatters';
// Fix: ???

// Bug 5: Trying to use named export syntax for default
// import { default } from './models/User.js';
// Fix: ???


// ------------------------------------------
// BONUS: Full project refactor
// Take this monolith and split it into modules.
// Write out each file with proper exports and a final
// index.js that imports and uses everything.
// ------------------------------------------

// === THE MONOLITH (imagine this is one giant file) ===

/*
const COMPANY = 'NovaTech Inc.';
const TAX_RATE = 0.08;

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

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

class PayrollService {
  calculatePay(employee, hoursWorked, hourlyRate) {
    const gross = hoursWorked * hourlyRate;
    const tax = gross * TAX_RATE;
    return { gross, tax, net: gross - tax };
  }
}

// Usage
const emp = new Employee('Dana Lee', 'd.lee@novatech.io', 'Engineering');
console.log(emp.toString());
const payroll = new PayrollService();
console.log(payroll.calculatePay(emp, 40, 75));
*/

// Split the monolith above into:
//   config/constants.js
//   utils/formatters.js
//   utils/validators.js
//   models/Employee.js
//   services/PayrollService.js
//   index.js
//
// Write out each file's contents with proper import/export statements.
// Your code here
