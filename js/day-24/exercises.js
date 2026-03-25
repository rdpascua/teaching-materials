// ============================================
// Day 24 Exercises: Classes Part 1
// Ticket: NOVA-103 — Build the User model
// ============================================
// Instructions: Build each class as described. Test by creating instances
// and calling methods. Run with: node day-24/exercises.js


// ------------------------------------------
// TASK 1: Basic Employee class
// HR needs an Employee class with:
//   - constructor(name, email, department, salary)
//   - method: getAnnualSalary() — returns salary * 12
//   - method: getProfile() — returns an object with all properties
//   - method: toString() — returns "Name <email> — Department"
// Create 2 employees and log their profiles.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 2: Product class with getters
// The product catalog needs a Product class with:
//   - constructor(name, basePrice, category, stock)
//   - getter: priceWithTax — basePrice * 1.08
//   - getter: displayPrice — "$XX.XX" format
//   - getter: inStock — true if stock > 0
//   - getter: stockStatus — "In Stock (XX units)", "Low Stock (XX units)" if < 5, or "Out of Stock"
//   - method: sell(quantity) — reduces stock, throws if not enough
// Create a product and test all getters and the sell method.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 3: Settings class with setters
// User settings need validation. Build a class with:
//   - constructor(theme, language, itemsPerPage)
//   - getter/setter for theme (allowed: 'light', 'dark', 'auto')
//   - getter/setter for language (allowed: 'en', 'es', 'fr', 'de', 'ja')
//   - getter/setter for itemsPerPage (must be 10, 25, 50, or 100)
//   - method: toJSON() — returns a plain object of all settings
// Test that valid values work and invalid values throw errors.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 4: TaskTracker class
// The project management tool needs a class to track tasks:
//   - constructor(projectName)
//   - properties: tasks (empty array), projectName
//   - method: addTask(title, assignee, priority) — adds a task object with
//     id (auto-increment), title, assignee, priority, status: 'todo'
//   - method: completeTask(id) — sets task status to 'done'
//   - method: getTasksByAssignee(name) — returns that person's tasks
//   - getter: progress — returns "X/Y tasks complete"
//   - getter: summary — returns a formatted string of all tasks
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 5: Invoice class
// Finance needs an Invoice class:
//   - constructor(invoiceNumber, client, items)
//     items is an array of { description, quantity, unitPrice }
//   - getter: subtotal — sum of quantity * unitPrice for all items
//   - getter: tax — subtotal * 0.08
//   - getter: total — subtotal + tax
//   - method: addItem(description, quantity, unitPrice)
//   - method: removeItem(description)
//   - method: printInvoice() — logs a formatted invoice to the console
//     showing invoice number, client, each line item, subtotal, tax, total
// ------------------------------------------

// Your code here


// ------------------------------------------
// BONUS: Dashboard Widget class
// Build a DashboardWidget class that demonstrates method chaining:
//   - constructor(title)
//   - setSize(width, height) — returns this
//   - setPosition(x, y) — returns this
//   - setColor(color) — returns this
//   - setData(data) — returns this (data is an array of numbers)
//   - render() — logs the widget configuration
//
// Usage should look like:
//   new DashboardWidget('Revenue Chart')
//     .setSize(400, 300)
//     .setPosition(0, 0)
//     .setColor('#3498db')
//     .setData([100, 200, 150, 300, 250])
//     .render();
// ------------------------------------------

// Your code here
