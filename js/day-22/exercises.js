// ============================================
// Day 22 Exercises: Fetch API
// Ticket: NOVA-101 — Fetch dashboard data
// ============================================
// Instructions: Complete each task as if it were a subtask on the Jira ticket.
// Test your code by running this file with: node day-22/exercises.js
// API Base URL: https://jsonplaceholder.typicode.com


// ------------------------------------------
// TASK 1: Fetch the employee directory
// The dashboard needs a list of all employees.
// Fetch all users and log each person's name and email.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 2: Fetch a single employee profile
// When someone clicks an employee card, we show their full profile.
// Write a function getEmployeeProfile(id) that:
//   - Fetches the user with that ID
//   - Logs their name, email, phone, and company name
//   - Handles the case where the employee doesn't exist (check response.ok)
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 3: Create a new employee record
// HR submitted a request to add a new hire via the API.
// Send a POST request to /users with this data:
//   { name: "Casey Morgan", email: "c.morgan@novatech.io", phone: "555-0199" }
// Log the response (the created record with its new ID).
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 4: Fetch with error handling
// Write an async function safeFetch(url) that:
//   - Fetches the given URL
//   - Checks response.ok and throws if not OK
//   - Returns the parsed JSON
//   - Catches and logs any errors
// Then test it with a valid URL and an invalid one.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 5: Dashboard data aggregator
// The dashboard summary widget needs data from multiple endpoints.
// Write an async function getDashboardSummary() that:
//   - Fetches /users AND /posts at the same time (use Promise.all)
//   - Logs: "Employees: [count], Activity items: [count]"
//   - Logs the top 3 most recent activity titles
// ------------------------------------------

// Your code here


// ------------------------------------------
// BONUS: Build a mini API client
// Create an object called NovatechAPI with these methods:
//   - getEmployees() — GET /users
//   - getEmployee(id) — GET /users/:id
//   - createEmployee(data) — POST /users
//   - updateEmployee(id, data) — PUT /users/:id
//   - deleteEmployee(id) — DELETE /users/:id
// Each method should handle errors and return parsed JSON.
// Test at least 3 of the methods.
// ------------------------------------------

// Your code here
