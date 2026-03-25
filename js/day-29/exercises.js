// ============================================
// Day 29: The Final Boss — NovaTech Employee Dashboard
// ============================================
// CAPSTONE PROJECT SCAFFOLD
//
// Instructions:
//   1. Open index.html in your browser
//   2. Complete each TODO section below (Phases 1-6)
//   3. Test in the browser after each phase
//   4. If stuck, check solutions.js — but try first!
//
// API endpoint: https://jsonplaceholder.typicode.com/users
// ============================================


// ------------------------------------------
// GLOBAL VARIABLES
// ------------------------------------------

// These will hold our app state
let allEmployees = [];       // All employees fetched from API
let showingFavorites = false; // Toggle for favorites filter


// ==================================================================
// PHASE 1: The Employee Class
// ==================================================================
// Create a class called Employee that:
//   - Takes a raw API user object in the constructor
//   - Stores: id, name, email, phone, company, city, isFavorite
//   - Has a toCard() method that returns an HTML string
//   - Has a matchesSearch(query) method that returns true/false
// ==================================================================

class Employee {
  constructor(data) {
    // TODO: Extract these properties from the raw API data:
    // this.id       = ???
    // this.name     = ???
    // this.email    = ???
    // this.phone    = ???
    // this.company  = ???   (hint: data.company.name)
    // this.city     = ???   (hint: data.address.city)
    // this.isFavorite = false;
  }

  // TODO: Create a toCard() method that returns an HTML string.
  // It should return a div with class "employee-card" and a data-id attribute.
  // Include: name (h3), email, phone, company, city (all in <p> tags),
  // and a button with class "fav-btn".
  // If this.isFavorite is true, add the class "favorite" to the card
  // and show "★ Unfavorite" on the button. Otherwise show "☆ Favorite".
  //
  // Hint: Use a template literal with ${} expressions.
  // Hint: For the class, use a ternary: ${this.isFavorite ? 'favorite' : ''}

  toCard() {
    // TODO: Return the HTML string
  }

  // TODO: Create a matchesSearch(query) method.
  // It should return true if the query (lowercase) is found in
  // the name, email, company, or city (all lowercased).
  //
  // Hint: Use .toLowerCase() and .includes()

  matchesSearch(query) {
    // TODO: Return true or false
  }
}


// ==================================================================
// PHASE 2: Fetch Employees from the API
// ==================================================================
// Create an async function that:
//   - Shows a loading message
//   - Fetches data from the API
//   - Checks response.ok (throw an error if not)
//   - Converts the JSON to an array of Employee instances
//   - Returns the array (or empty array on error)
// ==================================================================

async function fetchEmployees() {
  // TODO: Show loading status
  // Hint: showStatus("Loading employees...");

  try {
    // TODO: Fetch from "https://jsonplaceholder.typicode.com/users"

    // TODO: Check if response.ok — if not, throw an error

    // TODO: Parse the JSON response

    // TODO: Convert each raw user object to an Employee instance
    // Hint: data.map(user => new Employee(user))

    // TODO: Return the array of Employee instances

  } catch (error) {
    // TODO: Log the error and show an error message to the user
    // Hint: showError("Could not load employees. Please try again later.");

    return [];
  }
}


// ==================================================================
// PHASE 3: Render Employees to the DOM
// ==================================================================
// Create a function that:
//   - Takes an array of Employee instances
//   - Generates HTML for each one using .toCard()
//   - Injects the HTML into the #employee-list container
//   - Updates the employee count display
//   - Shows a message if the array is empty
// ==================================================================

function renderEmployees(employees) {
  const container = document.getElementById("employee-list");
  const countDisplay = document.getElementById("employee-count");

  // TODO: If employees array is empty, show a "No employees found" message
  // and clear the container. Then return early.

  // TODO: Clear any status messages
  // Hint: hideStatus();

  // TODO: Map each employee to its card HTML and join them
  // Hint: employees.map(emp => emp.toCard()).join("")

  // TODO: Set container.innerHTML to the generated HTML

  // TODO: Update the count display
  // Hint: countDisplay.textContent = `Showing ${employees.length} employee(s)`;
}


// ==================================================================
// PHASE 4: Search & Filter
// ==================================================================
// Set up the search input so that typing filters employees in real time.
// ==================================================================

function setupSearch() {
  const searchInput = document.getElementById("search-input");

  // TODO: Add an "input" event listener to searchInput.
  // Inside the listener:
  //   1. Get the current search query from e.target.value
  //   2. Filter allEmployees using .filter() and .matchesSearch()
  //   3. If showingFavorites is true, also filter to only favorites
  //   4. Call renderEmployees() with the filtered array
}


// ==================================================================
// PHASE 5: Favorites with localStorage
// ==================================================================
// Three things to build:
//   a) loadFavorites() — Read favorite IDs from localStorage
//   b) saveFavorites() — Write favorite IDs to localStorage
//   c) setupFavoriteListeners() — Handle clicks and the filter toggle
// ==================================================================

// --- 5a: Load favorites from localStorage ---
function loadFavorites() {
  // TODO: Get "novatech-favorites" from localStorage
  // TODO: JSON.parse it (with a fallback of [])
  // TODO: Loop through allEmployees and set isFavorite = true
  //       if their ID is in the favorites array
  //
  // Hint:
  //   const favIds = JSON.parse(localStorage.getItem("novatech-favorites")) || [];
  //   allEmployees.forEach(emp => { emp.isFavorite = favIds.includes(emp.id); });
}

// --- 5b: Save favorites to localStorage ---
function saveFavorites() {
  // TODO: Filter allEmployees to only those where isFavorite === true
  // TODO: Map them to just their IDs
  // TODO: Save to localStorage under "novatech-favorites"
  //
  // Hint:
  //   const favIds = allEmployees.filter(e => e.isFavorite).map(e => e.id);
  //   localStorage.setItem("novatech-favorites", JSON.stringify(favIds));
}

// --- 5c: Set up favorite button clicks (event delegation) ---
function setupFavoriteListeners() {
  const container = document.getElementById("employee-list");

  // TODO: Add a "click" event listener to the container (event delegation).
  // Inside:
  //   1. Check if e.target has the class "fav-btn" — if not, return
  //   2. Find the parent .employee-card using e.target.closest(".employee-card")
  //   3. Get the employee ID from card.dataset.id (convert to Number)
  //   4. Find that employee in allEmployees
  //   5. Toggle their isFavorite property
  //   6. Call saveFavorites()
  //   7. Call renderEmployees() with the current filtered list


  // TODO: Set up the "Show Favorites" toggle button.
  // Add a "click" listener to #filter-favorites that:
  //   1. Toggles showingFavorites between true and false
  //   2. Toggles the "active" class on the button
  //   3. Updates the button text
  //   4. Re-renders with the appropriate filter
}


// ==================================================================
// PHASE 6: Error Handling & Status Messages
// ==================================================================
// Helper functions for showing/hiding loading, error, and empty states.
// ==================================================================

function showStatus(message) {
  // TODO: Set the textContent of #status-message to the message
  // TODO: Remove any "error-message" class from #status-message
}

function showError(message) {
  // TODO: Set the textContent of #status-message to the message
  // TODO: Add the "error-message" class to #status-message
}

function hideStatus() {
  // TODO: Clear the textContent of #status-message
  // TODO: Remove the "error-message" class from #status-message
}


// ==================================================================
// INITIALIZATION — Tie it all together!
// ==================================================================
// Create an init() function that:
//   1. Fetches employees
//   2. Stores them in allEmployees
//   3. Loads favorites from localStorage
//   4. Renders employees
//   5. Sets up search and favorite listeners
// Then call init().
// ==================================================================

async function init() {
  // TODO: Fetch employees and store in allEmployees

  // TODO: Load favorites from localStorage

  // TODO: Render all employees

  // TODO: Set up search

  // TODO: Set up favorite listeners
}

// TODO: Call init() to start the app!
// init();
