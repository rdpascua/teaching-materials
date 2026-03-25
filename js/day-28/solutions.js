// ============================================
// Day 28 Solutions: Functional Patterns
// Ticket: NOVA-107 — Clean up the utils
// ============================================


// ------------------------------------------
// TASK 1: Convert impure to pure
// ------------------------------------------

console.log('=== Task 1: Pure Functions ===');

// PURE 1: No mutation, id passed in
function addProductPure(catalog, id, name, price) {
  return [...catalog, { id, name, price }];
}

const catalog = [{ id: 1, name: 'Widget', price: 9.99 }];
const newCatalog = addProductPure(catalog, 2, 'Gadget', 19.99);
console.log('Original:', catalog);     // unchanged
console.log('New:', newCatalog);       // has both items

// PURE 2: Rate is a parameter, not external state
function applyDiscountPure(price, rate) {
  return price * (1 - rate);
}

console.log('Discount:', applyDiscountPure(100, 0.1)); // 90

// PURE 3: Returns new object, original unchanged
function deactivateUserPure(user) {
  return {
    ...user,
    active: false,
    deactivatedAt: new Date().toISOString()
  };
}

const user = { name: 'Alex', active: true };
const deactivated = deactivateUserPure(user);
console.log('Original user:', user);           // still active
console.log('Deactivated:', deactivated);      // new object

// PURE 4: Returns data instead of logging
function calculateTotalPure(items) {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

const items = [
  { name: 'License', price: 299.99, quantity: 2 },
  { name: 'Support', price: 99.99, quantity: 1 }
];
console.log('Total:', calculateTotalPure(items)); // 699.97
console.log();

// WHY: Each pure version takes ALL its inputs as parameters (no globals),
// returns a NEW value (no mutations), and has no side effects (no logging,
// no writing to external state). The caller decides what to do with the result.


// ------------------------------------------
// TASK 2: Immutable data transformations
// ------------------------------------------

console.log('=== Task 2: Immutable Transforms ===');

const employees = [
  { id: 1, name: 'Alex Chen', department: 'Engineering', salary: 130000, active: true },
  { id: 2, name: 'Sam Park', department: 'Design', salary: 110000, active: true },
  { id: 3, name: 'Jordan Rivera', department: 'Engineering', salary: 95000, active: true },
  { id: 4, name: 'Dana Lee', department: 'Marketing', salary: 88000, active: false },
  { id: 5, name: 'Casey Morgan', department: 'Engineering', salary: 72000, active: true }
];

function giveRaise(employees, id, amount) {
  return employees.map(emp =>
    emp.id === id ? { ...emp, salary: emp.salary + amount } : emp
  );
}

function transferDepartment(employees, id, newDept) {
  return employees.map(emp =>
    emp.id === id ? { ...emp, department: newDept } : emp
  );
}

function getPayrollByDepartment(employees) {
  return employees
    .filter(emp => emp.active)
    .reduce((payroll, emp) => ({
      ...payroll,
      [emp.department]: (payroll[emp.department] || 0) + emp.salary
    }), {});
}

function getAverageSalary(employees) {
  const active = employees.filter(emp => emp.active);
  if (active.length === 0) return 0;
  const total = active.reduce((sum, emp) => sum + emp.salary, 0);
  return total / active.length;
}

const afterRaise = giveRaise(employees, 3, 10000);
console.log('After raise for Jordan:', afterRaise.find(e => e.id === 3).salary); // 105000
console.log('Original Jordan salary:', employees.find(e => e.id === 3).salary); // 95000

const afterTransfer = transferDepartment(employees, 2, 'Engineering');
console.log('Sam transferred:', afterTransfer.find(e => e.id === 2).department);

console.log('Payroll by dept:', getPayrollByDepartment(employees));
console.log('Average salary:', '$' + getAverageSalary(employees).toLocaleString());
console.log();

// WHY: map() returns a new array. For the matching employee, we spread
// their properties into a new object with the updated field. Non-matching
// employees are returned as-is (same reference, but that's fine since
// we're not modifying them).


// ------------------------------------------
// TASK 3: Pipe function and data pipeline
// ------------------------------------------

console.log('=== Task 3: Pipe & Pipeline ===');

function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

const filterActive = (emps) => emps.filter(e => e.active);
const sortBySalary = (emps) => [...emps].sort((a, b) => b.salary - a.salary);
const formatForDisplay = (emps) => emps.map(e => ({
  name: e.name,
  salary: `$${e.salary.toLocaleString()}`
}));
const takeTop = (n) => (arr) => arr.slice(0, n);

const getTopPaidActive = pipe(
  filterActive,
  sortBySalary,
  takeTop(3),
  formatForDisplay
);

const topPaid = getTopPaidActive(employees);
console.log('Top 3 paid active employees:');
topPaid.forEach(e => console.log(`  ${e.name}: ${e.salary}`));
console.log();

// WHY: pipe passes the output of each function as input to the next.
// Each function is small, focused, and reusable. takeTop is curried —
// takeTop(3) returns a function that takes an array and returns the
// first 3 elements. sortBySalary uses [...emps] to avoid mutating.


// ------------------------------------------
// TASK 4: Curried utility functions
// ------------------------------------------

console.log('=== Task 4: Curried Utilities ===');

const multiply = a => b => a * b;
const add = a => b => a + b;
const prop = key => obj => obj[key];
const filterWhere = key => value => array => array.filter(item => item[key] === value);
const mapWith = fn => array => array.map(fn);

// Double all salaries
const salaries = employees.map(e => e.salary);
const doubled = mapWith(multiply(2))(salaries);
console.log('Doubled salaries:', doubled);

// Get all names
const names = mapWith(prop('name'))(employees);
console.log('Names:', names);

// Get engineering employees
const engineers = filterWhere('department')('Engineering')(employees);
console.log('Engineering:', engineers.map(e => e.name));

// Compose curried functions
const addTax = multiply(1.08);
const addShipping = add(9.99);

const prices = [29.99, 49.99, 99.99];
const withTaxAndShipping = mapWith(pipe(addTax, addShipping))(prices);
// Wait — pipe isn't quite right here since these are single-value transforms.
// Let's apply them correctly:
const finalPrices = prices.map(p => addShipping(addTax(p)));
console.log('Prices with tax + shipping:', finalPrices.map(p => `$${p.toFixed(2)}`));
console.log();

// WHY: Curried functions let you create specialized versions.
// multiply(2) creates a "double" function. prop('name') creates a
// "getName" function. filterWhere('department')('Engineering') creates
// a reusable "getEngineers" function. Each piece is composable.


// ------------------------------------------
// TASK 5: Order processing pipeline
// ------------------------------------------

console.log('=== Task 5: Order Pipeline ===');

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

// 1. Calculate order total
function calculateOrderTotal(order) {
  return order.items.reduce((sum, item) => sum + item.price * item.qty, 0);
}

// 2. Enrich order with computed fields
function enrichOrder(order) {
  return {
    ...order,
    total: calculateOrderTotal(order),
    itemCount: order.items.reduce((sum, item) => sum + item.qty, 0)
  };
}

// 3. Filter completed orders
function getCompletedOrders(orders) {
  return orders.filter(o => o.status === 'completed');
}

// 4. Revenue report
function getRevenueReport(orders) {
  const completed = getCompletedOrders(orders).map(enrichOrder);
  const totalRevenue = completed.reduce((sum, o) => sum + o.total, 0);
  return {
    totalRevenue,
    orderCount: completed.length,
    avgOrderValue: completed.length > 0 ? totalRevenue / completed.length : 0
  };
}

// 5. Product sales summary
function getProductSales(orders) {
  return getCompletedOrders(orders)
    .flatMap(order => order.items)
    .reduce((sales, item) => {
      const existing = sales[item.product] || { totalQty: 0, totalRevenue: 0 };
      return {
        ...sales,
        [item.product]: {
          totalQty: existing.totalQty + item.qty,
          totalRevenue: existing.totalRevenue + (item.price * item.qty)
        }
      };
    }, {});
}

console.log('Order totals:');
orders.map(enrichOrder).forEach(o => {
  console.log(`  ${o.id}: $${o.total.toFixed(2)} (${o.itemCount} items) [${o.status}]`);
});

const report = getRevenueReport(orders);
console.log('\nRevenue Report:');
console.log(`  Total Revenue: $${report.totalRevenue.toFixed(2)}`);
console.log(`  Completed Orders: ${report.orderCount}`);
console.log(`  Avg Order Value: $${report.avgOrderValue.toFixed(2)}`);

const productSales = getProductSales(orders);
console.log('\nProduct Sales:');
Object.entries(productSales).forEach(([product, data]) => {
  console.log(`  ${product}: ${data.totalQty} units, $${data.totalRevenue.toFixed(2)}`);
});
console.log();

// WHY: Each function does one thing and is independently testable.
// enrichOrder doesn't modify the original — it returns a new object.
// getProductSales uses flatMap to flatten all items from all orders
// into one array, then reduce to build the summary object. The reduce
// uses spread to return new objects instead of mutating.


// ------------------------------------------
// BONUS: Functional query builder
// ------------------------------------------

console.log('=== Bonus: Query Builder ===');

function query(data) {
  // Return a query object with chaining methods
  // Each method returns a NEW query object (immutable)
  return {
    _data: data,
    _filters: [],
    _fields: null,
    _sort: null,
    _limit: null,

    where(predicate) {
      return {
        ...this,
        _filters: [...this._filters, predicate]
      };
    },

    select(fields) {
      return {
        ...this,
        _fields: fields
      };
    },

    orderBy(field, direction = 'asc') {
      return {
        ...this,
        _sort: { field, direction }
      };
    },

    limit(n) {
      return {
        ...this,
        _limit: n
      };
    },

    execute() {
      let result = [...this._data];

      // Apply filters
      for (const filter of this._filters) {
        result = result.filter(filter);
      }

      // Apply sort
      if (this._sort) {
        const { field, direction } = this._sort;
        result = [...result].sort((a, b) => {
          if (a[field] < b[field]) return direction === 'asc' ? -1 : 1;
          if (a[field] > b[field]) return direction === 'asc' ? 1 : -1;
          return 0;
        });
      }

      // Apply limit
      if (this._limit !== null) {
        result = result.slice(0, this._limit);
      }

      // Apply field selection
      if (this._fields) {
        result = result.map(item => {
          const selected = {};
          for (const field of this._fields) {
            selected[field] = item[field];
          }
          return selected;
        });
      }

      return result;
    }
  };
}

// Test the query builder
const topEngineers = query(employees)
  .where(e => e.active)
  .where(e => e.department === 'Engineering')
  .select(['name', 'salary'])
  .orderBy('salary', 'desc')
  .limit(3)
  .execute();

console.log('Top active engineers:');
topEngineers.forEach(e => console.log(`  ${e.name}: $${e.salary.toLocaleString()}`));

const highEarners = query(employees)
  .where(e => e.salary > 100000)
  .select(['name', 'department', 'salary'])
  .orderBy('name', 'asc')
  .execute();

console.log('\nHigh earners (>$100k):');
highEarners.forEach(e => console.log(`  ${e.name} (${e.department}): $${e.salary.toLocaleString()}`));

// Reusable base query
const activeQuery = query(employees).where(e => e.active);
const activeNames = activeQuery.select(['name']).execute();
const activeSalaries = activeQuery.select(['name', 'salary']).orderBy('salary', 'desc').execute();

console.log('\nActive names:', activeNames);
console.log('Active by salary:', activeSalaries);

// WHY: Each method returns a new query object using spread, so the
// original query is never modified. This means activeQuery can be
// reused as a base for different variations without side effects.
// The execute() method applies all the accumulated operations in order:
// filter -> sort -> limit -> select. This is the builder pattern
// implemented functionally.
