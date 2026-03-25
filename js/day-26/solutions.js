// ============================================
// Day 26 Solutions: Local Storage & JSON
// Ticket: NOVA-105 — Persist user settings
// ============================================

// --- Simulated localStorage for Node.js ---
const localStorage = (() => {
  const store = {};
  return {
    getItem(key) { return store[key] ?? null; },
    setItem(key, value) { store[key] = String(value); },
    removeItem(key) { delete store[key]; },
    clear() { Object.keys(store).forEach(k => delete store[k]); },
    get length() { return Object.keys(store).length; }
  };
})();


// ------------------------------------------
// TASK 1: Save and load employee preferences
// ------------------------------------------

const PREF_DEFAULTS = { theme: 'light', language: 'en', timezone: 'UTC' };

function savePreferences(prefs) {
  localStorage.setItem('employee_prefs', JSON.stringify(prefs));
}

function loadPreferences() {
  const stored = localStorage.getItem('employee_prefs');
  if (stored === null) {
    return { ...PREF_DEFAULTS };
  }
  try {
    return { ...PREF_DEFAULTS, ...JSON.parse(stored) };
  } catch {
    return { ...PREF_DEFAULTS };
  }
}

console.log('=== Task 1: Employee Preferences ===');
console.log('Initial load:', loadPreferences()); // defaults

savePreferences({ theme: 'dark', language: 'es', timezone: 'PST' });
console.log('After save:', loadPreferences());    // saved values

localStorage.removeItem('employee_prefs');
console.log('After clear:', loadPreferences());   // defaults again
console.log();

// WHY: We spread PREF_DEFAULTS first, then the stored values. This means
// stored values override defaults, but any NEW default keys added later
// are automatically included. The try/catch handles corrupted JSON.


// ------------------------------------------
// TASK 2: Recent searches history
// ------------------------------------------

function addSearch(query) {
  const searches = getRecentSearches();

  // Remove duplicate if it exists
  const filtered = searches.filter(s => s !== query);

  // Add to front
  filtered.unshift(query);

  // Keep only 5
  const trimmed = filtered.slice(0, 5);

  localStorage.setItem('recent_searches', JSON.stringify(trimmed));
  return trimmed;
}

function getRecentSearches() {
  const stored = localStorage.getItem('recent_searches');
  return stored ? JSON.parse(stored) : [];
}

function clearSearchHistory() {
  localStorage.removeItem('recent_searches');
}

console.log('=== Task 2: Recent Searches ===');
addSearch('dashboard performance');
addSearch('user analytics');
addSearch('quarterly report');
addSearch('API documentation');
addSearch('deployment guide');
console.log('Searches:', getRecentSearches());

addSearch('user analytics'); // duplicate moves to front
console.log('After re-search:', getRecentSearches());

addSearch('new search');     // pushes oldest off
console.log('After 6th search:', getRecentSearches());

clearSearchHistory();
console.log('After clear:', getRecentSearches());
console.log();

// WHY: We filter out duplicates before unshifting to prevent the same
// query appearing twice. slice(0, 5) enforces the max length. unshift
// adds to the front so the most recent search is always first.


// ------------------------------------------
// TASK 3: Shopping cart persistence
// ------------------------------------------

const CartStore = {
  STORAGE_KEY: 'nova_cart',

  addItem(product) {
    const cart = this.getCart();
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
      existing.quantity += (product.quantity || 1);
    } else {
      cart.push({ ...product, quantity: product.quantity || 1 });
    }

    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
    return cart;
  },

  removeItem(productId) {
    const cart = this.getCart().filter(item => item.id !== productId);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(cart));
    return cart;
  },

  getCart() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  getTotal() {
    return this.getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  clearCart() {
    localStorage.removeItem(this.STORAGE_KEY);
  }
};

console.log('=== Task 3: Shopping Cart ===');
CartStore.addItem({ id: 'PROD-001', name: 'NovaTech Pro License', price: 299.99, quantity: 2 });
CartStore.addItem({ id: 'PROD-002', name: 'Support Plan', price: 99.99, quantity: 1 });
CartStore.addItem({ id: 'PROD-001', name: 'NovaTech Pro License', price: 299.99, quantity: 1 });
// Should increment quantity to 3

console.log('Cart:', CartStore.getCart());
console.log('Total: $' + CartStore.getTotal().toFixed(2));

CartStore.removeItem('PROD-002');
console.log('After remove:', CartStore.getCart());
console.log('New total: $' + CartStore.getTotal().toFixed(2));

CartStore.clearCart();
console.log('After clear:', CartStore.getCart());
console.log();

// WHY: When adding an item that already exists, we find it by ID and
// increment its quantity instead of adding a duplicate. The spread
// { ...product } avoids mutating the original product object.


// ------------------------------------------
// TASK 4: Session tracker
// ------------------------------------------

const SessionTracker = {
  STORAGE_KEY: 'nova_session',

  startSession(userId) {
    const session = {
      userId,
      startTime: new Date().toISOString(),
      pagesVisited: []
    };
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(session));
    return session;
  },

  logPageView(page) {
    const session = this._getRawSession();
    if (!session) {
      console.log('  No active session. Call startSession() first.');
      return null;
    }
    session.pagesVisited.push({
      page,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(session));
    return session;
  },

  getSession() {
    const session = this._getRawSession();
    if (!session) return null;
    return {
      userId: session.userId,
      startTime: session.startTime,
      pagesVisited: session.pagesVisited.map(p => p.page),
      pageCount: session.pagesVisited.length
    };
  },

  endSession() {
    const session = this.getSession();
    localStorage.removeItem(this.STORAGE_KEY);
    return session; // return final session data for logging
  },

  _getRawSession() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  }
};

console.log('=== Task 4: Session Tracker ===');
console.log('No session:', SessionTracker.getSession());

SessionTracker.startSession('user-jordan-42');
SessionTracker.logPageView('/dashboard');
SessionTracker.logPageView('/users');
SessionTracker.logPageView('/settings');
SessionTracker.logPageView('/dashboard');

console.log('Active session:', SessionTracker.getSession());

const finalSession = SessionTracker.endSession();
console.log('Ended session:', finalSession);
console.log('After end:', SessionTracker.getSession());
console.log();

// WHY: The session stores timestamps for each page view, but getSession()
// returns a simplified view (just page names + count). endSession() returns
// the session data before clearing it, so it can be sent to analytics.


// ------------------------------------------
// TASK 5: Cached API responses
// ------------------------------------------

const CacheManager = {
  PREFIX: 'cache_',

  set(key, data, ttlMinutes = 5) {
    const entry = {
      data,
      expiresAt: Date.now() + (ttlMinutes * 60 * 1000)
    };
    localStorage.setItem(this.PREFIX + key, JSON.stringify(entry));
  },

  get(key) {
    const stored = localStorage.getItem(this.PREFIX + key);
    if (!stored) return null;

    try {
      const entry = JSON.parse(stored);
      if (Date.now() > entry.expiresAt) {
        // Expired — clean up and return null
        this.invalidate(key);
        return null;
      }
      return entry.data;
    } catch {
      this.invalidate(key);
      return null;
    }
  },

  has(key) {
    return this.get(key) !== null;
  },

  invalidate(key) {
    localStorage.removeItem(this.PREFIX + key);
  },

  clearAll() {
    // We can't iterate localStorage easily in our simulation,
    // so we'll track keys. In a real browser you'd iterate localStorage.
    // For this exercise, clear everything (simplified).
    localStorage.clear();
  }
};

console.log('=== Task 5: Cache Manager ===');

// Cache some API responses
CacheManager.set('users', [{ id: 1, name: 'Alex' }, { id: 2, name: 'Sam' }], 10);
CacheManager.set('products', [{ id: 1, name: 'Pro License' }], 0.001); // Expires almost instantly

console.log('Users cached?', CacheManager.has('users'));
console.log('Users:', CacheManager.get('users'));

// Wait a tiny bit and check expired cache
setTimeout(() => {
  console.log('Products (expired?):', CacheManager.get('products'));
}, 100);

CacheManager.invalidate('users');
console.log('Users after invalidate:', CacheManager.get('users'));
console.log();

// WHY: Each cache entry stores an expiresAt timestamp. On get(), we
// check if the current time is past the expiration. If so, we clean up
// the entry and return null. The PREFIX avoids conflicts with other
// localStorage keys.


// ------------------------------------------
// BONUS: Settings manager with change history
// ------------------------------------------

class SettingsManager {
  static SETTINGS_KEY = 'nova_settings';
  static HISTORY_KEY = 'nova_settings_history';

  static DEFAULTS = {
    theme: 'light',
    language: 'en',
    notifications: true,
    autoSave: true,
    fontSize: 14
  };

  static getAll() {
    const stored = localStorage.getItem(SettingsManager.SETTINGS_KEY);
    if (!stored) return { ...SettingsManager.DEFAULTS };
    try {
      return { ...SettingsManager.DEFAULTS, ...JSON.parse(stored) };
    } catch {
      return { ...SettingsManager.DEFAULTS };
    }
  }

  static get(key) {
    const all = SettingsManager.getAll();
    return all[key];
  }

  static set(key, value) {
    const all = SettingsManager.getAll();
    const oldValue = all[key];

    // Record in history
    const history = SettingsManager.getHistory();
    history.push({
      key,
      oldValue,
      newValue: value,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem(SettingsManager.HISTORY_KEY, JSON.stringify(history));

    // Update setting
    all[key] = value;
    localStorage.setItem(SettingsManager.SETTINGS_KEY, JSON.stringify(all));

    return all;
  }

  static reset() {
    // Record all changes in history
    const current = SettingsManager.getAll();
    const history = SettingsManager.getHistory();

    for (const [key, value] of Object.entries(current)) {
      if (value !== SettingsManager.DEFAULTS[key]) {
        history.push({
          key,
          oldValue: value,
          newValue: SettingsManager.DEFAULTS[key],
          timestamp: new Date().toISOString()
        });
      }
    }
    localStorage.setItem(SettingsManager.HISTORY_KEY, JSON.stringify(history));
    localStorage.removeItem(SettingsManager.SETTINGS_KEY);

    return { ...SettingsManager.DEFAULTS };
  }

  static getHistory(key = null) {
    const stored = localStorage.getItem(SettingsManager.HISTORY_KEY);
    const history = stored ? JSON.parse(stored) : [];
    if (key) {
      return history.filter(entry => entry.key === key);
    }
    return history;
  }

  static undo() {
    const history = SettingsManager.getHistory();
    if (history.length === 0) {
      console.log('  Nothing to undo.');
      return null;
    }

    const lastChange = history.pop();
    localStorage.setItem(SettingsManager.HISTORY_KEY, JSON.stringify(history));

    // Revert the setting (don't record this in history)
    const all = SettingsManager.getAll();
    all[lastChange.key] = lastChange.oldValue;
    localStorage.setItem(SettingsManager.SETTINGS_KEY, JSON.stringify(all));

    console.log(`  Undid: ${lastChange.key} "${lastChange.newValue}" -> "${lastChange.oldValue}"`);
    return all;
  }
}

// Clear any leftover data
localStorage.clear();

console.log('=== Bonus: Settings Manager ===');
console.log('Initial:', SettingsManager.getAll());

SettingsManager.set('theme', 'dark');
SettingsManager.set('fontSize', 18);
SettingsManager.set('language', 'es');
console.log('After changes:', SettingsManager.getAll());

console.log('Theme history:', SettingsManager.getHistory('theme'));
console.log('All history:', SettingsManager.getHistory());

SettingsManager.undo(); // undoes language change
console.log('After undo:', SettingsManager.getAll());

SettingsManager.undo(); // undoes fontSize change
console.log('After 2nd undo:', SettingsManager.getAll());

console.log('Reset:', SettingsManager.reset());

// WHY: The history array tracks every change with old and new values.
// undo() pops the last entry and reverts the setting to its old value.
// The reset() method records all the changes it's about to make before
// clearing. This gives you a full audit trail of all settings changes.
