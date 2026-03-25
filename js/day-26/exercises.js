// ============================================
// Day 26 Exercises: Local Storage & JSON
// Ticket: NOVA-105 — Persist user settings
// ============================================
// NOTE: These exercises use a simulated localStorage so they run in Node.
// In a browser, remove the simulation and use the built-in localStorage.

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
// The settings page lets employees customize their experience.
// Write two functions:
//   savePreferences(prefs) — saves the prefs object to localStorage
//                            under the key "employee_prefs"
//   loadPreferences() — loads and returns the prefs object,
//                       or returns these defaults if nothing is stored:
//                       { theme: 'light', language: 'en', timezone: 'UTC' }
// Test by saving, loading, then clearing and loading again (should get defaults).
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 2: Recent searches history
// The search bar should remember the last 5 searches.
// Write:
//   addSearch(query) — adds the query to the front of the recent list,
//                      removes duplicates, keeps max 5 items
//   getRecentSearches() — returns the array of recent searches
//   clearSearchHistory() — removes search history
// Store under the key "recent_searches".
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 3: Shopping cart persistence
// The e-commerce module needs a persistent cart.
// Write a CartStore with:
//   addItem(product) — product has { id, name, price, quantity }
//     If item with same id exists, increment quantity
//   removeItem(productId) — removes the item
//   getCart() — returns the cart array
//   getTotal() — returns the sum of price * quantity for all items
//   clearCart() — empties the cart
// Store under the key "nova_cart".
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 4: Session tracker
// Track user activity across page loads.
// Write a SessionTracker with:
//   startSession(userId) — stores session start time and userId
//   logPageView(page) — adds a page to the visited pages array
//   getSession() — returns { userId, startTime, pagesVisited, pageCount }
//   endSession() — clears the session data
// Store under the key "nova_session".
// Handle the case where no session exists.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 5: Cached API responses
// To reduce API calls, we cache responses in localStorage.
// Write a CacheManager with:
//   set(key, data, ttlMinutes) — stores data with an expiration timestamp
//     Store as: { data: ..., expiresAt: timestamp }
//   get(key) — returns the data if it exists AND hasn't expired,
//     otherwise returns null (and removes the expired entry)
//   has(key) — returns true if key exists and hasn't expired
//   invalidate(key) — removes a specific cache entry
//   clearAll() — removes all cache entries (use a prefix like "cache_")
// ------------------------------------------

// Your code here


// ------------------------------------------
// BONUS: Full settings manager with change history
// Build a SettingsManager class that:
//   - Stores settings under "nova_settings"
//   - Stores change history under "nova_settings_history"
//   - Has get(key), set(key, value), getAll(), reset()
//   - Every set() records { key, oldValue, newValue, timestamp } in history
//   - Has getHistory(key?) — returns history, optionally filtered by key
//   - Has undo() — reverts the most recent change using history
//   - Default settings: { theme: 'light', language: 'en',
//     notifications: true, autoSave: true, fontSize: 14 }
// ------------------------------------------

// Your code here
