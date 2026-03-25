// ============================================
// Day 28 Exercises: Functional Patterns
// Ticket: NOVA-107 — Clean up the utils
// ============================================
// Instructions: Refactor each function to be pure and functional.
// Run with: node day-28/exercises.js


// ------------------------------------------
// TASK 1: Convert impure to pure
// Each function below is impure. Rewrite it as a pure function.
// The pure version should NOT mutate any inputs or depend on
// external state.
// ------------------------------------------

// IMPURE 1: Mutates the input array
let nextId = 1;
function addProduct(catalog, name, price) {
  catalog.push({ id: nextId++, name, price });
  return catalog;
}

// Rewrite as pure:
// function addProductPure(catalog, id, name, price) { ... }

// IMPURE 2: Depends on external state
let discountRate = 0.1;
function applyDiscount(price) {
  return price * (1 - discountRate);
}

// Rewrite as pure:
// function applyDiscountPure(price, rate) { ... }

// IMPURE 3: Mutates the input object
function deactivateUser(user) {
  user.active = false;
  user.deactivatedAt = new Date().toISOString();
  return user;
}

// Rewrite as pure:
// function deactivateUserPure(user) { ... }

// IMPURE 4: Side effect (logs to console)
function calculateTotal(items) {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
    console.log(`Added ${item.name}: $${item.price * item.quantity}`);
  }
  return total;
}

// Rewrite as pure (return the data, don't log):
// function calculateTotalPure(items) { ... }


// ------------------------------------------
// TASK 2: Immutable data transformations
// Given this employee dataset, write pure functions for each operation.
// NONE of these should modify the original array.
// ------------------------------------------

const employees = [
  { id: 1, name: 'Alex Chen', department: 'Engineering', salary: 130000, active: true },
  { id: 2, name: 'Sam Park', department: 'Design', salary: 110000, active: true },
  { id: 3, name: 'Jordan Rivera', department: 'Engineering', salary: 95000, active: true },
  { id: 4, name: 'Dana Lee', department: 'Marketing', salary: 88000, active: false },
  { id: 5, name: 'Casey Morgan', department: 'Engineering', salary: 72000, active: true }
];

// Write these pure functions:
// giveRaise(employees, id, amount) — returns new array with updated salary
// transferDepartment(employees, id, newDept) — returns new array
// getPayrollByDepartment(employees) — returns { Engineering: total, Design: total, ... }
// getAverageSalary(employees) — returns the average salary of active employees

// Your code here


// ------------------------------------------
// TASK 3: Build a pipe function and use it
// 1. Write a pipe function: pipe(...fns) => value => result
// 2. Create these small utility functions:
//    - filterActive(employees) — returns only active employees
//    - sortBySalary(employees) — returns sorted by salary (descending)
//    - formatForDisplay(employees) — maps to { name, salary: "$XXX,XXX" }
//    - takeTop(n) — returns a function that takes first n items
// 3. Use pipe to create: getTopPaidActive = pipe(filterActive, sortBySalary, takeTop(3), formatForDisplay)
// 4. Run it on the employees data above
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 4: Curried utility functions
// Create curried versions of these common operations:
//   multiply(a)(b) — returns a * b
//   add(a)(b) — returns a + b
//   prop(key)(obj) — returns obj[key]
//   filterWhere(key)(value)(array) — filters array where item[key] === value
//   mapWith(fn)(array) — maps array with fn
//
// Then use them to:
//   - Double all salaries: mapWith(multiply(2))(salaries)
//   - Get all names: mapWith(prop('name'))(employees)
//   - Get engineering employees: filterWhere('department')('Engineering')(employees)
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 5: Order processing pipeline
// Given this order data, build a pure processing pipeline:
// ------------------------------------------

const orders = [
  { id: 'ORD-001', customer: 'Acme Corp', items: [
    { product: 'Pro License', price: 299.99, qty: 5 },
    { product: 'Support Plan', price: 99.99, qty: 5 }
  ], status: 'completed', date: '2025-06-01' },
  { id: 'ORD-002', customer: 'Globex Inc', items: [
    { product: 'Team License', price: 899.99, qty: 1 }
  ], status: 'completed', date: '2025-06-05' },
  { id: 'ORD-003', customer: 'Initech', items: [
    { product: 'Enterprise License', price: 2499.99, qty: 2 },
    { product: 'Training', price: 450.00, qty: 3 }
  ], status: 'pending', date: '2025-06-10' },
  { id: 'ORD-004', customer: 'Umbrella Co', items: [
    { product: 'Pro License', price: 299.99, qty: 1 }
  ], status: 'cancelled', date: '2025-06-12' },
  { id: 'ORD-005', customer: 'Stark Ind', items: [
    { product: 'Enterprise License', price: 2499.99, qty: 5 },
    { product: 'Support Plan', price: 99.99, qty: 5 }
  ], status: 'completed', date: '2025-06-15' }
];

// Write pure functions to:
// 1. calculateOrderTotal(order) — sum of price * qty for all items
// 2. enrichOrder(order) — returns new order with 'total' and 'itemCount' added
// 3. getCompletedOrders(orders) — filter for completed
// 4. getRevenueReport(orders) — returns { totalRevenue, orderCount, avgOrderValue }
//    for completed orders only
// 5. getProductSales(orders) — returns a summary of each product:
//    { 'Pro License': { totalQty: X, totalRevenue: Y }, ... }
//    across all completed orders

// Your code here


// ------------------------------------------
// BONUS: Functional data query builder
// Build a functional query system:
//   query(data)
//     .where(predicate)
//     .select(fields)
//     .orderBy(field, direction)
//     .limit(n)
//     .execute()
//
// Each method returns a new query object (immutable).
// execute() returns the final result array.
//
// Example:
//   query(employees)
//     .where(e => e.active)
//     .where(e => e.salary > 90000)
//     .select(['name', 'salary'])
//     .orderBy('salary', 'desc')
//     .limit(3)
//     .execute()
// ------------------------------------------

// Your code here
