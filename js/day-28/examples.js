// ============================================
// Day 28: Functional Patterns
// Ticket: NOVA-107 — Clean up the utils
// ============================================


// ------------------------------------------
// EXAMPLE 1: Pure vs Impure functions
// ------------------------------------------

console.log('=== Example 1: Pure vs Impure ===');

// IMPURE: mutates the original array
function addEmployeeImpure(employees, name) {
  employees.push(name);
  return employees;
}

// PURE: returns a new array, original untouched
function addEmployeePure(employees, name) {
  return [...employees, name];
}

const team = ['Alex', 'Sam'];

const resultImpure = addEmployeeImpure([...team], 'Jordan'); // had to copy manually
console.log('Impure result:', resultImpure);

const resultPure = addEmployeePure(team, 'Jordan');
console.log('Pure result:', resultPure);
console.log('Original unchanged:', team); // ['Alex', 'Sam']
console.log();


// ------------------------------------------
// EXAMPLE 2: Immutable object updates
// ------------------------------------------

console.log('=== Example 2: Immutable Updates ===');

const employee = {
  id: 42,
  name: 'Jordan Rivera',
  department: 'Engineering',
  role: 'developer',
  salary: 95000
};

// IMPURE: modifies the original
// employee.role = 'senior'; // DON'T DO THIS

// PURE: create a new object with the change
const promoted = { ...employee, role: 'senior', salary: 110000 };

console.log('Original:', employee);
console.log('Promoted:', promoted);
console.log('Same object?', employee === promoted); // false
console.log();

// Nested updates (need to spread each level)
const settings = {
  user: { name: 'Alex', email: 'alex@novatech.io' },
  preferences: { theme: 'dark', language: 'en' }
};

const updatedSettings = {
  ...settings,
  preferences: {
    ...settings.preferences,
    theme: 'light'  // only change theme
  }
};

console.log('Original settings:', settings.preferences.theme); // "dark"
console.log('Updated settings:', updatedSettings.preferences.theme); // "light"
console.log();


// ------------------------------------------
// EXAMPLE 3: Immutable array operations
// ------------------------------------------

console.log('=== Example 3: Immutable Array Ops ===');

const products = [
  { id: 1, name: 'Pro License', price: 299.99 },
  { id: 2, name: 'Team License', price: 899.99 },
  { id: 3, name: 'Enterprise License', price: 2499.99 }
];

// Add without mutation
const withNewProduct = [...products, { id: 4, name: 'Starter Plan', price: 49.99 }];

// Remove without mutation
const withoutProduct = products.filter(p => p.id !== 2);

// Update one item without mutation
const withUpdatedPrice = products.map(p =>
  p.id === 1 ? { ...p, price: 349.99 } : p
);

console.log('Original length:', products.length);      // 3
console.log('After add:', withNewProduct.length);       // 4
console.log('After remove:', withoutProduct.length);    // 2
console.log('After update:', withUpdatedPrice[0].price); // 349.99
console.log('Original price:', products[0].price);       // 299.99 (unchanged)
console.log();


// ------------------------------------------
// EXAMPLE 4: Function composition
// ------------------------------------------

console.log('=== Example 4: Composition ===');

// Simple utility functions (each does ONE thing)
const trim = str => str.trim();
const lowercase = str => str.toLowerCase();
const replaceSpaces = str => str.replace(/\s+/g, '-');
const removeSpecial = str => str.replace(/[^a-z0-9-]/g, '');

// Compose: apply functions right to left
function compose(...fns) {
  return (value) => fns.reduceRight((acc, fn) => fn(acc), value);
}

// Pipe: apply functions left to right (more natural reading)
function pipe(...fns) {
  return (value) => fns.reduce((acc, fn) => fn(acc), value);
}

// Build a slug creator by piping simple functions
const createSlug = pipe(trim, lowercase, replaceSpaces, removeSpecial);

console.log(createSlug('  Hello World!  '));           // "hello-world"
console.log(createSlug('NovaTech Product Launch!!!'));  // "novatech-product-launch"
console.log(createSlug('  API v2.0 Release Notes '));   // "api-v20-release-notes"
console.log();


// ------------------------------------------
// EXAMPLE 5: Currying
// ------------------------------------------

console.log('=== Example 5: Currying ===');

// Curried formatter: configure once, use many times
const formatCurrency = currencySymbol => amount =>
  `${currencySymbol}${amount.toFixed(2)}`;

const formatUSD = formatCurrency('$');
const formatEUR = formatCurrency('\u20AC');
const formatGBP = formatCurrency('\u00A3');

console.log(formatUSD(29.99));  // "$29.99"
console.log(formatEUR(29.99));  // "\u20AC29.99"
console.log(formatGBP(29.99));  // "\u00A329.99"

// Curried filter: create reusable filters
const filterBy = key => value => array =>
  array.filter(item => item[key] === value);

const employees = [
  { name: 'Alex', department: 'Engineering', active: true },
  { name: 'Sam', department: 'Design', active: true },
  { name: 'Jordan', department: 'Engineering', active: false },
  { name: 'Dana', department: 'Marketing', active: true }
];

const filterByDepartment = filterBy('department');
const getEngineers = filterByDepartment('Engineering');
const getDesigners = filterByDepartment('Design');
const getActive = filterBy('active')(true);

console.log('Engineers:', getEngineers(employees).map(e => e.name));
console.log('Designers:', getDesigners(employees).map(e => e.name));
console.log('Active:', getActive(employees).map(e => e.name));
console.log();


// ------------------------------------------
// EXAMPLE 6: Higher-order functions for data processing
// ------------------------------------------

console.log('=== Example 6: Data Processing Pipeline ===');

const orders = [
  { id: 'ORD-001', customer: 'Acme Corp', items: 3, total: 1500, status: 'completed' },
  { id: 'ORD-002', customer: 'Globex Inc', items: 1, total: 299, status: 'pending' },
  { id: 'ORD-003', customer: 'Initech', items: 5, total: 4200, status: 'completed' },
  { id: 'ORD-004', customer: 'Umbrella Co', items: 2, total: 850, status: 'cancelled' },
  { id: 'ORD-005', customer: 'Stark Ind', items: 8, total: 12000, status: 'completed' },
  { id: 'ORD-006', customer: 'Wayne Ent', items: 1, total: 150, status: 'pending' }
];

// Pipeline: filter -> transform -> aggregate
const completedRevenue = orders
  .filter(order => order.status === 'completed')
  .map(order => order.total)
  .reduce((sum, total) => sum + total, 0);

console.log('Completed revenue: $' + completedRevenue.toLocaleString());

// Build a report using pure transformations
const report = orders
  .filter(o => o.status !== 'cancelled')
  .map(o => ({
    ...o,
    avgItemPrice: (o.total / o.items).toFixed(2),
    tier: o.total > 5000 ? 'Enterprise' : o.total > 1000 ? 'Business' : 'Starter'
  }))
  .sort((a, b) => b.total - a.total);

console.log('Revenue report:');
report.forEach(o => {
  console.log(`  ${o.id} | ${o.customer} | $${o.total} | ${o.tier} | avg: $${o.avgItemPrice}/item`);
});
console.log();


// ------------------------------------------
// EXAMPLE 7: Creating utility factories
// ------------------------------------------

console.log('=== Example 7: Utility Factories ===');

// Factory: create validators
function createValidator(fieldName, testFn, errorMessage) {
  return (value) => ({
    field: fieldName,
    value,
    valid: testFn(value),
    error: testFn(value) ? null : errorMessage
  });
}

const validateEmail = createValidator(
  'email',
  v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
  'Invalid email format'
);

const validateRequired = createValidator(
  'name',
  v => v !== null && v !== undefined && v.trim() !== '',
  'This field is required'
);

const validateMinLength = (field, min) => createValidator(
  field,
  v => v.length >= min,
  `Must be at least ${min} characters`
);

console.log(validateEmail('alex@novatech.io'));
console.log(validateEmail('bad'));
console.log(validateRequired(''));
console.log(validateMinLength('password', 8)('short'));
console.log(validateMinLength('password', 8)('longEnough!'));
console.log();


// ------------------------------------------
// EXAMPLE 8: Putting it all together
// Refactored employee data processor
// ------------------------------------------

console.log('=== Example 8: Refactored Data Processor ===');

// Pure utility functions
const prop = key => obj => obj[key];
const not = fn => (...args) => !fn(...args);
const isActive = emp => emp.active;
const isInDepartment = dept => emp => emp.department === dept;
const formatName = emp => `${emp.name} (${emp.role})`;
const calculateBonus = rate => emp => ({
  ...emp,
  bonus: emp.salary * rate
});

const employeeData = [
  { name: 'Alex Chen', department: 'Engineering', role: 'lead', salary: 130000, active: true },
  { name: 'Sam Park', department: 'Design', role: 'senior', salary: 110000, active: true },
  { name: 'Jordan Rivera', department: 'Engineering', role: 'developer', salary: 95000, active: true },
  { name: 'Dana Lee', department: 'Engineering', role: 'intern', salary: 55000, active: false },
  { name: 'Casey Morgan', department: 'Marketing', role: 'manager', salary: 105000, active: true }
];

// Compose a report using pure functions
const engineeringBonusReport = employeeData
  .filter(isActive)
  .filter(isInDepartment('Engineering'))
  .map(calculateBonus(0.15))
  .map(emp => ({
    name: emp.name,
    role: emp.role,
    salary: formatCurrency('$')(emp.salary),
    bonus: formatCurrency('$')(emp.bonus)
  }));

console.log('Engineering Bonus Report:');
engineeringBonusReport.forEach(emp => {
  console.log(`  ${emp.name} [${emp.role}]: ${emp.salary} + ${emp.bonus} bonus`);
});

// Get inactive count
const inactiveCount = employeeData.filter(not(isActive)).length;
console.log(`\nInactive employees: ${inactiveCount}`);

// Get all departments (unique)
const departments = [...new Set(employeeData.map(prop('department')))];
console.log('Departments:', departments);

// Total payroll
const totalPayroll = employeeData
  .filter(isActive)
  .map(prop('salary'))
  .reduce((sum, s) => sum + s, 0);
console.log('Active payroll: $' + totalPayroll.toLocaleString());
