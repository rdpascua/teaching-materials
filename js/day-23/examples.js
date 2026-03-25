// ============================================
// Day 23: ES Modules
// Ticket: NOVA-102 — Refactor into modules
// ============================================
// NOTE: Since we can't demonstrate multi-file imports in a single file,
// each example shows the file boundary with comments. In a real project,
// each section marked "FILE:" would be its own .js file.
//
// To actually run multi-file modules in Node, you need either:
//   - Files with .mjs extension, OR
//   - "type": "module" in your package.json


// ============================================================
// FILE: config/constants.js
// Purpose: App-wide configuration values
// ============================================================

// Named exports — each value is exported individually
const APP_NAME = 'NovaTech Dashboard';
const API_BASE_URL = 'https://api.novatech.io/v2';
const MAX_LOGIN_ATTEMPTS = 5;
const DEPARTMENTS = ['Engineering', 'Design', 'Marketing', 'Sales', 'HR'];

// export { APP_NAME, API_BASE_URL, MAX_LOGIN_ATTEMPTS, DEPARTMENTS };

console.log('=== Example 1: Named Exports (constants.js) ===');
console.log('APP_NAME:', APP_NAME);
console.log('DEPARTMENTS:', DEPARTMENTS);
console.log();


// ============================================================
// FILE: utils/formatters.js
// Purpose: Reusable formatting functions
// ============================================================

// Each function is exported individually with the export keyword
// export function formatCurrency(amount) { ... }
// export function formatDate(dateString) { ... }

function formatCurrency(amount) {
  return `$${amount.toFixed(2)}`;
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function formatEmployeeId(id) {
  return `NT-${String(id).padStart(5, '0')}`;
}

// Could also export at the bottom:
// export { formatCurrency, formatDate, formatEmployeeId };

console.log('=== Example 2: Named Export Functions (formatters.js) ===');
console.log('Currency:', formatCurrency(1499.9));
console.log('Date:', formatDate('2025-06-15'));
console.log('Employee ID:', formatEmployeeId(42));
console.log();


// ============================================================
// FILE: models/User.js
// Purpose: User class — the "main thing" this file provides
// ============================================================

// Default export — one per file, represents the primary purpose
// export default class User { ... }

class User {
  constructor(name, email, department) {
    this.name = name;
    this.email = email;
    this.department = department;
    this.active = true;
  }

  getProfile() {
    return `${this.name} (${this.email}) — ${this.department}`;
  }
}

// export default User;

console.log('=== Example 3: Default Export (User.js) ===');
const user1 = new User('Jordan Rivera', 'j.rivera@novatech.io', 'Engineering');
console.log(user1.getProfile());
console.log();


// ============================================================
// FILE: models/Product.js
// Purpose: Product class with some helper constants
// ============================================================

// Mixing default export (the class) with named exports (helpers)

const PRODUCT_CATEGORIES = ['Software', 'Hardware', 'Services', 'Support'];

class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  getDisplayPrice() {
    return formatCurrency(this.price);
  }
}

// export default Product;
// export { PRODUCT_CATEGORIES };

console.log('=== Example 4: Mixed Exports (Product.js) ===');
const product = new Product('NovaTech Pro License', 299.99, 'Software');
console.log(`${product.name}: ${product.getDisplayPrice()}`);
console.log('Categories:', PRODUCT_CATEGORIES);
console.log();


// ============================================================
// FILE: services/api.js
// Purpose: API client for making requests
// ============================================================

const ApiClient = {
  baseURL: 'https://api.novatech.io/v2',

  async get(endpoint) {
    console.log(`  [GET] ${this.baseURL}${endpoint}`);
    // In real code: return fetch(...).then(res => res.json());
    return { data: 'mock response' };
  },

  async post(endpoint, body) {
    console.log(`  [POST] ${this.baseURL}${endpoint}`, body);
    return { data: 'created', id: 101 };
  }
};

// export default ApiClient;

console.log('=== Example 5: Default Export Object (api.js) ===');
ApiClient.get('/users');
ApiClient.post('/users', { name: 'Test' });
console.log();


// ============================================================
// FILE: utils/validators.js
// Purpose: Input validation functions
// ============================================================

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidEmployeeId(id) {
  return /^NT-\d{5}$/.test(id);
}

function isNotEmpty(value) {
  return value !== null && value !== undefined && String(value).trim() !== '';
}

// export { isValidEmail, isValidEmployeeId, isNotEmpty };

console.log('=== Example 6: Validation Utilities (validators.js) ===');
console.log('Valid email?', isValidEmail('j.rivera@novatech.io'));    // true
console.log('Valid email?', isValidEmail('not-an-email'));             // false
console.log('Valid ID?', isValidEmployeeId('NT-00042'));               // true
console.log('Not empty?', isNotEmpty('hello'));                        // true
console.log('Not empty?', isNotEmpty(''));                             // false
console.log();


// ============================================================
// HOW IMPORTS WOULD LOOK IN THE ENTRY POINT
// FILE: index.js (entry point)
// ============================================================

console.log('=== Example 7: Import Syntax Summary ===');
console.log(`
  // Default imports (no curly braces, any name you want):
  import User from './models/User.js';
  import Product from './models/Product.js';
  import ApiClient from './services/api.js';

  // Named imports (curly braces, must match export name):
  import { formatCurrency, formatDate } from './utils/formatters.js';
  import { isValidEmail, isNotEmpty } from './utils/validators.js';
  import { APP_NAME, API_BASE_URL } from './config/constants.js';

  // Mixed import (default + named from same file):
  import Product, { PRODUCT_CATEGORIES } from './models/Product.js';

  // Rename to avoid conflicts:
  import { formatDate as fmt } from './utils/formatters.js';

  // Import everything as a namespace:
  import * as Validators from './utils/validators.js';
  Validators.isValidEmail('test@test.com');
`);


// ============================================================
// Example 8: Re-exporting (barrel file pattern)
// FILE: models/index.js — re-exports everything from models/
// ============================================================

console.log('=== Example 8: Barrel File Pattern ===');
console.log(`
  // FILE: models/index.js
  export { default as User } from './User.js';
  export { default as Product } from './Product.js';

  // Now other files can do:
  import { User, Product } from './models/index.js';
  // instead of two separate imports
`);


// ============================================================
// Example 9: Module scope demonstration
// ============================================================

console.log('=== Example 9: Module Scope ===');

// In modules, each file has its own scope.
// Variables do NOT leak into the global scope.

// FILE: moduleA.js
const internalSecret = 'only visible inside moduleA';
const sharedValue = 'this one is exported';
// export { sharedValue };

// FILE: moduleB.js
// import { sharedValue } from './moduleA.js';
// console.log(sharedValue);     // works: "this one is exported"
// console.log(internalSecret);  // ReferenceError: not exported!

console.log('  Module scope keeps non-exported values private.');
console.log('  Only what you explicitly export is visible outside.');
console.log();
