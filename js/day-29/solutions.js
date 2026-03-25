// ============================================
// Day 29: The Final Boss — NovaTech Employee Dashboard
// ============================================
// COMPLETE SOLUTION
// ============================================


// ------------------------------------------
// GLOBAL VARIABLES
// ------------------------------------------

let allEmployees = [];
let showingFavorites = false;


// ==================================================================
// PHASE 1: The Employee Class
// ==================================================================

class Employee {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.phone = data.phone;
    this.company = data.company.name;
    this.city = data.address.city;
    this.isFavorite = false;
  }

  toCard() {
    return `
      <div class="employee-card ${this.isFavorite ? "favorite" : ""}" data-id="${this.id}">
        <h3>${this.name}</h3>
        <p>📧 ${this.email}</p>
        <p>📞 ${this.phone}</p>
        <p>🏢 ${this.company}</p>
        <p>📍 ${this.city}</p>
        <button class="fav-btn">
          ${this.isFavorite ? "★ Unfavorite" : "☆ Favorite"}
        </button>
      </div>
    `;
  }

  matchesSearch(query) {
    const q = query.toLowerCase();
    return (
      this.name.toLowerCase().includes(q) ||
      this.email.toLowerCase().includes(q) ||
      this.company.toLowerCase().includes(q) ||
      this.city.toLowerCase().includes(q)
    );
  }
}


// ==================================================================
// PHASE 2: Fetch Employees from the API
// ==================================================================

async function fetchEmployees() {
  showStatus("Loading employees...");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    return data.map(user => new Employee(user));
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    showError("Could not load employees. Please try again later.");
    return [];
  }
}


// ==================================================================
// PHASE 3: Render Employees to the DOM
// ==================================================================

function renderEmployees(employees) {
  const container = document.getElementById("employee-list");
  const countDisplay = document.getElementById("employee-count");

  if (employees.length === 0) {
    container.innerHTML = "";
    showStatus("No employees found.");
    countDisplay.textContent = "";
    return;
  }

  hideStatus();

  const html = employees.map(emp => emp.toCard()).join("");
  container.innerHTML = html;

  countDisplay.textContent = `Showing ${employees.length} employee(s)`;
}


// ==================================================================
// PHASE 4: Search & Filter
// ==================================================================

function getFilteredEmployees() {
  const searchInput = document.getElementById("search-input");
  const query = searchInput.value.trim();

  let filtered = allEmployees;

  // Apply search filter
  if (query) {
    filtered = filtered.filter(emp => emp.matchesSearch(query));
  }

  // Apply favorites filter
  if (showingFavorites) {
    filtered = filtered.filter(emp => emp.isFavorite);
  }

  return filtered;
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", () => {
    const filtered = getFilteredEmployees();
    renderEmployees(filtered);
  });
}


// ==================================================================
// PHASE 5: Favorites with localStorage
// ==================================================================

function loadFavorites() {
  const favIds = JSON.parse(localStorage.getItem("novatech-favorites")) || [];
  allEmployees.forEach(emp => {
    emp.isFavorite = favIds.includes(emp.id);
  });
}

function saveFavorites() {
  const favIds = allEmployees
    .filter(emp => emp.isFavorite)
    .map(emp => emp.id);
  localStorage.setItem("novatech-favorites", JSON.stringify(favIds));
}

function setupFavoriteListeners() {
  const container = document.getElementById("employee-list");
  const filterBtn = document.getElementById("filter-favorites");

  // Event delegation for favorite buttons
  container.addEventListener("click", (e) => {
    if (!e.target.classList.contains("fav-btn")) return;

    const card = e.target.closest(".employee-card");
    const employeeId = Number(card.dataset.id);

    // Find the employee and toggle their favorite status
    const employee = allEmployees.find(emp => emp.id === employeeId);
    if (employee) {
      employee.isFavorite = !employee.isFavorite;
      saveFavorites();
      renderEmployees(getFilteredEmployees());
    }
  });

  // Toggle "Show Favorites" filter
  filterBtn.addEventListener("click", () => {
    showingFavorites = !showingFavorites;

    filterBtn.classList.toggle("active");
    filterBtn.textContent = showingFavorites
      ? "Show All"
      : "Show Favorites";

    renderEmployees(getFilteredEmployees());
  });
}


// ==================================================================
// PHASE 6: Error Handling & Status Messages
// ==================================================================

function showStatus(message) {
  const statusEl = document.getElementById("status-message");
  statusEl.textContent = message;
  statusEl.classList.remove("error-message");
}

function showError(message) {
  const statusEl = document.getElementById("status-message");
  statusEl.textContent = message;
  statusEl.classList.add("error-message");
}

function hideStatus() {
  const statusEl = document.getElementById("status-message");
  statusEl.textContent = "";
  statusEl.classList.remove("error-message");
}


// ==================================================================
// INITIALIZATION
// ==================================================================

async function init() {
  // 1. Fetch employees from the API
  allEmployees = await fetchEmployees();

  // 2. Load saved favorites from localStorage
  loadFavorites();

  // 3. Render all employees to the page
  renderEmployees(allEmployees);

  // 4. Set up search functionality
  setupSearch();

  // 5. Set up favorite button clicks and filter toggle
  setupFavoriteListeners();
}

// Start the app!
init();
