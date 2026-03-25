# Day 29: The Final Boss — NovaTech Employee Dashboard

## The Capstone Quest

**Estimated Time: 30 minutes discussion + project work time**

---

## Story Intro (3 minutes)

> *You've trained for 28 days. You've mastered variables, functions, arrays, objects, classes, DOM manipulation, async code, and everything in between. Now it's time to face the Final Boss.*
>
> *NovaTech Corp — a fictional tech company — needs a new **Employee Dashboard**. Their old system is broken. They need someone who knows JavaScript to build a clean, interactive dashboard that:*
>
> - *Fetches employee data from a remote API*
> - *Displays it beautifully in the browser*
> - *Lets users search and filter employees*
> - *Saves favorite employees to localStorage*
> - *Handles errors gracefully*
>
> *This is everything you've learned, combined into one project. Let's architect it, then build it.*

---

## Architecture Overview (10 minutes)

### The Big Picture

Every real-world app has **layers**. Here's how ours breaks down:

```
┌─────────────────────────────────────────────┐
│              index.html                      │
│  (The skeleton — structure of the page)      │
├─────────────────────────────────────────────┤
│              app.js                          │
│  ┌────────────┐  ┌──────────────────────┐   │
│  │  Employee   │  │   API Layer          │   │
│  │  Class      │  │   (fetch data)       │   │
│  └────────────┘  └──────────────────────┘   │
│  ┌────────────┐  ┌──────────────────────┐   │
│  │  DOM        │  │   Storage Layer      │   │
│  │  Rendering  │  │   (localStorage)     │   │
│  └────────────┘  └──────────────────────┘   │
│  ┌──────────────────────────────────────┐   │
│  │  Event Listeners (search, favorite)   │   │
│  └──────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

### Step-by-Step Plan

We'll build this in **6 phases**:

1. **Phase 1: The Employee Class** — Model our data
2. **Phase 2: Fetch the Data** — Get employees from the API
3. **Phase 3: Render to the DOM** — Display employee cards
4. **Phase 4: Search & Filter** — Let users find employees
5. **Phase 5: Favorites with localStorage** — Save/load favorites
6. **Phase 6: Error Handling & Polish** — Handle failures gracefully

---

## Phase 1: The Employee Class (3 minutes)

We'll use a **class** to give structure to the raw API data. The API returns objects with fields like `name`, `email`, `phone`, `company.name`, and `address.city`. Our class will:

- Accept the raw API object in the constructor
- Pull out the fields we need
- Have a method to generate its own HTML card
- Have a method to check if it matches a search query

```js
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
}
```

**Why a class?** Because when you have 10 employees, you want each one to carry its own behavior (like `toCard()` or `matchesSearch()`). That's the power of OOP.

---

## Phase 2: Fetch the Data (5 minutes)

We'll use `fetch()` with `async/await` to grab data from:

```
https://jsonplaceholder.typicode.com/users
```

This returns an array of 10 user objects. Key concepts:

- **`async/await`** keeps our code readable
- **`try/catch`** handles network errors
- **Convert raw data to Employee instances** using `.map()`

```js
async function fetchEmployees() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
    const data = await response.json();
    return data.map(user => new Employee(user));
  } catch (error) {
    console.error("Failed to fetch employees:", error);
    showError("Could not load employees. Please try again.");
    return [];
  }
}
```

**Key pattern:** Always check `response.ok`! A 404 doesn't throw an error — `fetch` only throws on network failures.

---

## Phase 3: Render to the DOM (4 minutes)

Each employee becomes an HTML card using **template literals**. The `Employee` class has a `toCard()` method that returns HTML:

```js
toCard() {
  return `
    <div class="employee-card ${this.isFavorite ? 'favorite' : ''}" data-id="${this.id}">
      <h3>${this.name}</h3>
      <p>📧 ${this.email}</p>
      <p>📞 ${this.phone}</p>
      <p>🏢 ${this.company}</p>
      <p>📍 ${this.city}</p>
      <button class="fav-btn">${this.isFavorite ? '★ Unfavorite' : '☆ Favorite'}</button>
    </div>
  `;
}
```

Then we join all cards and inject them into the container:

```js
function renderEmployees(employees) {
  const container = document.getElementById("employee-list");
  container.innerHTML = employees.map(emp => emp.toCard()).join("");
}
```

---

## Phase 4: Search & Filter (3 minutes)

We add an **input event listener** on the search box. Every keystroke filters the displayed employees:

```js
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = allEmployees.filter(emp => emp.matchesSearch(query));
  renderEmployees(filtered);
});
```

The `matchesSearch()` method on the Employee class checks the name, email, company, and city fields.

---

## Phase 5: Favorites with localStorage (3 minutes)

We save an array of favorite employee IDs to `localStorage`:

```js
// Save
localStorage.setItem("favorites", JSON.stringify([1, 3, 7]));

// Load
const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
```

When the page loads, we check localStorage and mark any saved favorites. When a user clicks the favorite button, we toggle the ID in/out of the array and save again.

---

## Phase 6: Error Handling & Polish (2 minutes)

- **Loading state:** Show "Loading employees..." while fetching
- **Error state:** Show a friendly message if the fetch fails
- **Empty state:** Show "No employees match your search" when filtering returns nothing
- **Defensive coding:** Always provide fallback values

---

## Battle Plan Summary

| Phase | Concepts Used |
|-------|--------------|
| Employee Class | Classes, constructors, methods |
| Fetch Data | Fetch API, async/await, try/catch |
| Render DOM | Template literals, DOM manipulation, innerHTML |
| Search/Filter | Event listeners, array .filter(), string methods |
| Favorites | localStorage, JSON.parse/stringify |
| Error Handling | try/catch, conditional rendering |

---

## Your Mission

Open `exercises.js` — it has the full scaffold with TODO comments. Fill in each section. If you get stuck, peek at `solutions.js` but try each phase on your own first.

The `index.html` file is ready to go — just open it in your browser and link your JS file.

**Good luck, hero. This is your Final Boss. You've got this.**
