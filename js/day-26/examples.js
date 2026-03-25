// ============================================
// Day 26: Local Storage & JSON
// Ticket: NOVA-105 — Persist user settings
// ============================================
// NOTE: localStorage is a browser API. These examples show the patterns
// and logic. To run in Node, we simulate localStorage with a simple object.
// In a real browser, just use localStorage directly.


// --- Simulated localStorage for Node.js ---
const localStorage = (() => {
  const store = {};
  return {
    getItem(key) { return store[key] ?? null; },
    setItem(key, value) { store[key] = String(value); },
    removeItem(key) { delete store[key]; },
    clear() { Object.keys(store).forEach(k => delete store[k]); },
    get length() { return Object.keys(store).length; },
    key(index) { return Object.keys(store)[index] ?? null; }
  };
})();
// In a browser, remove the above and use the built-in localStorage.


// ------------------------------------------
// EXAMPLE 1: Basic setItem / getItem
// ------------------------------------------

console.log('=== Example 1: Basic localStorage ===');

localStorage.setItem('company', 'NovaTech Inc.');
localStorage.setItem('version', '2.5.0');

console.log(localStorage.getItem('company'));  // "NovaTech Inc."
console.log(localStorage.getItem('version'));  // "2.5.0"
console.log(localStorage.getItem('missing'));  // null (doesn't exist)
console.log();


// ------------------------------------------
// EXAMPLE 2: The string-only problem
// ------------------------------------------

console.log('=== Example 2: Everything Becomes a String ===');

localStorage.setItem('count', 42);
localStorage.setItem('active', true);
localStorage.setItem('scores', [90, 85, 92]);

const count = localStorage.getItem('count');
const active = localStorage.getItem('active');
const scores = localStorage.getItem('scores');

console.log('count:', count, '| type:', typeof count);     // "42" string
console.log('active:', active, '| type:', typeof active);   // "true" string
console.log('scores:', scores, '| type:', typeof scores);   // "90,85,92" string (mangled!)
console.log('active === true?', active === true);            // false!
console.log();


// ------------------------------------------
// EXAMPLE 3: JSON.stringify and JSON.parse
// ------------------------------------------

console.log('=== Example 3: JSON to the Rescue ===');

// Stringify converts JS values to JSON strings
console.log('Number:', JSON.stringify(42));                    // "42"
console.log('Boolean:', JSON.stringify(true));                  // "true"
console.log('Array:', JSON.stringify([1, 2, 3]));              // "[1,2,3]"
console.log('Object:', JSON.stringify({ name: 'Alex' }));      // '{"name":"Alex"}'

// Parse converts JSON strings back to JS values
console.log('Parse number:', JSON.parse('42'), typeof JSON.parse('42'));
console.log('Parse boolean:', JSON.parse('true'), typeof JSON.parse('true'));
console.log('Parse array:', JSON.parse('[1,2,3]'));
console.log('Parse object:', JSON.parse('{"name":"Alex"}'));
console.log();


// ------------------------------------------
// EXAMPLE 4: Storing and retrieving objects
// ------------------------------------------

console.log('=== Example 4: Store Objects Properly ===');

const userSettings = {
  theme: 'dark',
  language: 'en',
  fontSize: 14,
  sidebarOpen: true,
  recentPages: ['/dashboard', '/users', '/settings']
};

// SAVE: stringify first, then store
localStorage.setItem('userSettings', JSON.stringify(userSettings));

// LOAD: get the string, then parse
const loaded = JSON.parse(localStorage.getItem('userSettings'));

console.log('Theme:', loaded.theme);
console.log('Font size:', loaded.fontSize);
console.log('Sidebar open?', loaded.sidebarOpen);
console.log('Recent pages:', loaded.recentPages);
console.log('Is real object?', typeof loaded === 'object'); // true!
console.log();


// ------------------------------------------
// EXAMPLE 5: Handling missing data (first visit)
// ------------------------------------------

console.log('=== Example 5: Handling Missing Data ===');

const DEFAULTS = {
  theme: 'light',
  language: 'en',
  fontSize: 16,
  notifications: true
};

// Approach 1: Check for null
function loadSettings() {
  const stored = localStorage.getItem('appSettings');
  if (stored === null) {
    console.log('  No settings found — using defaults');
    return { ...DEFAULTS };
  }
  return JSON.parse(stored);
}

// Approach 2: Merge with defaults (handles partial data)
function loadSettingsWithDefaults() {
  const stored = JSON.parse(localStorage.getItem('appSettings'));
  return { ...DEFAULTS, ...stored }; // stored values override defaults
}

// Approach 3: Nullish coalescing for individual values
function getTheme() {
  return JSON.parse(localStorage.getItem('theme')) ?? 'light';
}

const settings = loadSettings();
console.log('Settings:', settings);
console.log('Theme:', getTheme());
console.log();


// ------------------------------------------
// EXAMPLE 6: Updating without losing data
// ------------------------------------------

console.log('=== Example 6: Partial Updates ===');

// Save initial settings
const initial = { theme: 'dark', language: 'en', fontSize: 14 };
localStorage.setItem('prefs', JSON.stringify(initial));

// Later, update just the theme without losing other settings
function updatePreference(key, value) {
  const current = JSON.parse(localStorage.getItem('prefs')) || {};
  current[key] = value;
  localStorage.setItem('prefs', JSON.stringify(current));
  return current;
}

console.log('Before:', JSON.parse(localStorage.getItem('prefs')));
updatePreference('theme', 'light');
console.log('After theme change:', JSON.parse(localStorage.getItem('prefs')));
updatePreference('fontSize', 18);
console.log('After font change:', JSON.parse(localStorage.getItem('prefs')));
console.log();


// ------------------------------------------
// EXAMPLE 7: Storing arrays of objects
// ------------------------------------------

console.log('=== Example 7: Arrays of Objects ===');

const recentOrders = [
  { id: 'ORD-001', customer: 'Acme Corp', total: 1299.99, date: '2025-06-10' },
  { id: 'ORD-002', customer: 'Globex Inc', total: 549.50, date: '2025-06-11' },
  { id: 'ORD-003', customer: 'Initech', total: 2100.00, date: '2025-06-12' }
];

localStorage.setItem('recentOrders', JSON.stringify(recentOrders));

const orders = JSON.parse(localStorage.getItem('recentOrders'));
console.log(`Loaded ${orders.length} orders:`);
orders.forEach(o => {
  console.log(`  ${o.id} — ${o.customer}: $${o.total.toFixed(2)}`);
});
console.log();


// ------------------------------------------
// EXAMPLE 8: Safe JSON parsing (error handling)
// ------------------------------------------

console.log('=== Example 8: Safe Parsing ===');

function safeParseJSON(jsonString, fallback = null) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.log('  Parse error:', error.message);
    return fallback;
  }
}

// Good JSON
console.log(safeParseJSON('{"name":"Alex"}'));   // { name: "Alex" }

// Bad JSON — won't crash!
console.log(safeParseJSON('not valid json', {})); // {} (fallback)

// null from missing localStorage key
console.log(safeParseJSON(null, []));              // [] (fallback)
console.log();


// ------------------------------------------
// EXAMPLE 9: Remove and clear
// ------------------------------------------

console.log('=== Example 9: Remove & Clear ===');

localStorage.setItem('keep', 'I stay');
localStorage.setItem('delete-me', 'I go away');

console.log('Before remove:', localStorage.getItem('delete-me'));
localStorage.removeItem('delete-me');
console.log('After remove:', localStorage.getItem('delete-me')); // null

console.log('Items before clear:', localStorage.length);
localStorage.clear();
console.log('Items after clear:', localStorage.length); // 0
console.log();


// ------------------------------------------
// EXAMPLE 10: Complete UserPreferences manager
// ------------------------------------------

console.log('=== Example 10: UserPreferences Manager ===');

class UserPreferences {
  static STORAGE_KEY = 'nova_user_prefs';

  static DEFAULTS = {
    theme: 'light',
    language: 'en',
    fontSize: 14,
    sidebarOpen: true,
    dashboardLayout: 'grid',
    notifications: {
      email: true,
      slack: true,
      inApp: true
    }
  };

  static load() {
    try {
      const stored = localStorage.getItem(UserPreferences.STORAGE_KEY);
      if (stored === null) return { ...UserPreferences.DEFAULTS };
      const parsed = JSON.parse(stored);
      // Merge with defaults to handle any new preferences added in updates
      return { ...UserPreferences.DEFAULTS, ...parsed };
    } catch {
      console.log('  Corrupted preferences — resetting to defaults');
      return { ...UserPreferences.DEFAULTS };
    }
  }

  static save(prefs) {
    localStorage.setItem(UserPreferences.STORAGE_KEY, JSON.stringify(prefs));
  }

  static update(key, value) {
    const prefs = UserPreferences.load();
    prefs[key] = value;
    UserPreferences.save(prefs);
    return prefs;
  }

  static reset() {
    localStorage.removeItem(UserPreferences.STORAGE_KEY);
    return { ...UserPreferences.DEFAULTS };
  }

  static export() {
    return JSON.stringify(UserPreferences.load(), null, 2);
  }
}

// Simulate user actions
console.log('Initial load:', UserPreferences.load());
UserPreferences.update('theme', 'dark');
UserPreferences.update('fontSize', 18);
console.log('After updates:', UserPreferences.load());
console.log('Exported:\n' + UserPreferences.export());
UserPreferences.reset();
console.log('After reset:', UserPreferences.load());
