// ============================================
// Day 29: The Final Boss — NovaTech Employee Dashboard
// Topic: Capstone Project — Code Examples
// ============================================
// These examples demonstrate each building block
// used in the capstone project, shown in isolation.


// ------------------------------------------
// EXAMPLE 1: Using a class to model data
// ------------------------------------------

class Animal {
  constructor(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  // Method that returns an HTML string
  toCard() {
    return `
      <div class="animal-card">
        <h3>${this.name}</h3>
        <p>Species: ${this.species}</p>
        <p>Sound: ${this.sound}</p>
      </div>
    `;
  }

  // Method that checks if this animal matches a search query
  matchesSearch(query) {
    const q = query.toLowerCase();
    return (
      this.name.toLowerCase().includes(q) ||
      this.species.toLowerCase().includes(q)
    );
  }
}

const dog = new Animal("Rex", "Dog", "Woof!");
console.log(dog.toCard());
console.log(dog.matchesSearch("rex"));  // true
console.log(dog.matchesSearch("cat"));  // false


// ------------------------------------------
// EXAMPLE 2: Fetching data with async/await + error handling
// ------------------------------------------

async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");

    // Always check response.ok — fetch does NOT throw on 404!
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();
    console.log("Fetched posts:", posts);
    return posts;
  } catch (error) {
    console.error("Fetch failed:", error.message);
    return [];
  }
}

// fetchPosts();  // Uncomment to run (requires network/browser)


// ------------------------------------------
// EXAMPLE 3: Rendering an array of objects to the DOM
// ------------------------------------------

// Imagine we have this array:
const fruits = [
  { name: "Apple", color: "Red", emoji: "🍎" },
  { name: "Banana", color: "Yellow", emoji: "🍌" },
  { name: "Grape", color: "Purple", emoji: "🍇" },
];

// Convert each to an HTML string, then join them:
function renderFruits(fruitArray) {
  const html = fruitArray
    .map(fruit => `
      <div class="fruit-card">
        <span>${fruit.emoji}</span>
        <strong>${fruit.name}</strong>
        <small>(${fruit.color})</small>
      </div>
    `)
    .join("");

  // In a browser, you'd do:
  // document.getElementById("fruit-list").innerHTML = html;
  console.log("Generated HTML:\n", html);
}

renderFruits(fruits);


// ------------------------------------------
// EXAMPLE 4: Filtering an array with .filter()
// ------------------------------------------

const numbers = [12, 5, 8, 130, 44, 3, 99];

// Filter to only numbers greater than 10
const big = numbers.filter(n => n > 10);
console.log("Big numbers:", big); // [12, 130, 44, 99]

// Filter with a search string
const names = ["Alice", "Bob", "Charlie", "Alicia", "Dave"];
const query = "ali";
const matches = names.filter(name =>
  name.toLowerCase().includes(query.toLowerCase())
);
console.log("Search results for 'ali':", matches); // ["Alice", "Alicia"]


// ------------------------------------------
// EXAMPLE 5: localStorage — save and load data
// ------------------------------------------

// Save an array of IDs
const favoriteIds = [1, 4, 7];
// localStorage.setItem("favorites", JSON.stringify(favoriteIds));

// Load them back
// const loaded = JSON.parse(localStorage.getItem("favorites")) || [];
// console.log("Loaded favorites:", loaded);

// Why the || [] ? Because if "favorites" doesn't exist in localStorage,
// getItem returns null, and JSON.parse(null) returns null.
// The || [] gives us a safe empty array as a fallback.

// Simulating without a browser:
const stored = null; // pretend localStorage returned null
const safeFavorites = JSON.parse(stored) || [];
console.log("Safe favorites:", safeFavorites); // []


// ------------------------------------------
// EXAMPLE 6: Event delegation — handling clicks on dynamic elements
// ------------------------------------------

// Instead of adding a listener to EACH button (which might not exist yet),
// we add ONE listener to the parent container:

// document.getElementById("employee-list").addEventListener("click", (e) => {
//   // Check if the clicked thing was a favorite button
//   if (e.target.classList.contains("fav-btn")) {
//     // Walk up to the card to get the employee ID
//     const card = e.target.closest(".employee-card");
//     const employeeId = Number(card.dataset.id);
//     console.log("Toggling favorite for employee:", employeeId);
//   }
// });

// Why event delegation?
// 1. The cards are created AFTER page load (dynamic content)
// 2. It's more efficient — 1 listener instead of 10
// 3. New cards automatically work without re-attaching listeners
console.log("Event delegation example — see comments for browser code");


// ------------------------------------------
// EXAMPLE 7: Showing loading / error / empty states
// ------------------------------------------

function showStatus(message) {
  // In a browser:
  // document.getElementById("status-message").textContent = message;
  console.log("[STATUS]", message);
}

function hideStatus() {
  // document.getElementById("status-message").textContent = "";
  console.log("[STATUS] (cleared)");
}

// Usage pattern:
// showStatus("Loading employees...");
// const employees = await fetchEmployees();
// hideStatus();
// if (employees.length === 0) {
//   showStatus("No employees found.");
// }


// ------------------------------------------
// EXAMPLE 8: Putting it all together — the init pattern
// ------------------------------------------

// Most apps have an "init" or "main" function that kicks everything off:

async function init() {
  console.log("1. Show loading state");
  // showStatus("Loading...");

  console.log("2. Fetch data");
  // const employees = await fetchEmployees();

  console.log("3. Load favorites from localStorage");
  // const favIds = JSON.parse(localStorage.getItem("favorites")) || [];
  // employees.forEach(emp => { emp.isFavorite = favIds.includes(emp.id); });

  console.log("4. Render to DOM");
  // renderEmployees(employees);

  console.log("5. Set up event listeners");
  // setupSearchListener(employees);
  // setupFavoriteListener(employees);

  console.log("6. Hide loading state");
  // hideStatus();
}

// Kick it off when the page loads:
// init();
console.log("\n--- App initialization pattern demonstrated ---");
