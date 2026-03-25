// ============================================
// Day 25 Exercises: Classes Part 2
// Ticket: NOVA-104 — Extend the model layer
// ============================================
// Instructions: Build the class hierarchies described below.
// Run with: node day-25/exercises.js


// ------------------------------------------
// TASK 1: Vehicle fleet management
// NovaTech manages a company vehicle fleet. Build:
//   Base class: Vehicle
//     - constructor(make, model, year, mileage)
//     - method: drive(miles) — adds to mileage
//     - method: getInfo() — returns "YEAR Make Model (XX,XXX mi)"
//   Child class: ElectricVehicle extends Vehicle
//     - constructor adds: batteryLevel (0-100), range
//     - override drive(miles) — also reduces batteryLevel proportionally
//     - new method: charge() — sets batteryLevel to 100
//     - getter: canDrive — true if batteryLevel > 10
//   Child class: ServiceVan extends Vehicle
//     - constructor adds: capacity, currentLoad (starts at 0)
//     - new method: load(weight) — adds to currentLoad, throws if over capacity
//     - new method: unload(weight) — reduces currentLoad
//     - getter: available — true if currentLoad is 0
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 2: Notification system
// Build a notification class hierarchy:
//   Base class: Notification
//     - constructor(recipient, message)
//     - properties: id (auto-increment), timestamp, read (false)
//     - method: markAsRead()
//     - method: getSummary() — "[TYPE] To: recipient — message"
//   Child class: EmailNotification extends Notification
//     - constructor adds: subject
//     - override getSummary() to include subject
//   Child class: SlackNotification extends Notification
//     - constructor adds: channel
//     - override getSummary() to include channel
//   Add a static method Notification.createBatch(recipients, message)
//     that returns an array of notifications for multiple recipients.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 3: Private fields — Secure credentials store
// Build a CredentialStore class:
//   - Private fields: #credentials (a Map), #masterKey
//   - constructor(masterKey)
//   - method: addCredential(service, username, password) — stores it
//     only if unlock(masterKey) was called first
//   - method: getCredential(service) — returns the credential
//   - method: unlock(key) — compares to #masterKey, sets #unlocked
//   - method: lock() — sets #unlocked to false
//   - getter: isUnlocked
//   - Private method: #encrypt(value) — simple obfuscation for demo
// Demonstrate that #credentials cannot be accessed from outside.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 4: Shape calculator with static methods
// Build a shape hierarchy:
//   Base class: Shape
//     - constructor(name)
//     - method: area() — returns 0 (override in children)
//     - method: describe() — returns "ShapeName: area = X"
//     - static method: Shape.largest(shapes) — returns the shape with biggest area
//     - static method: Shape.totalArea(shapes) — returns sum of all areas
//   Child class: Rectangle extends Shape
//     - constructor(width, height)
//     - override area()
//   Child class: Circle extends Shape
//     - constructor(radius)
//     - override area()
//   Child class: Triangle extends Shape
//     - constructor(base, height)
//     - override area()
// Create an array of different shapes, find the largest, and get total area.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 5: Database model pattern
// Build a mini ORM (Object-Relational Mapping) pattern:
//   Base class: Model
//     - static #records = [] (private static — stores all instances)
//     - static #nextId = 1
//     - constructor(data) — assigns id, spreads data onto this
//     - static create(data) — creates and saves a new instance
//     - static findById(id) — returns the instance with that id
//     - static findAll() — returns all instances
//     - static count() — returns total count
//     - method: update(data) — merges new data into this
//     - method: destroy() — removes this instance from records
//
//   Note: Each child class needs its own records. Use a pattern where
//   each child class stores records separately. One approach: store
//   records as a Map on the class itself rather than using private static.
//
//   Child: EmployeeModel extends Model
//     - Adds validation: name and email are required
//   Child: ProjectModel extends Model
//     - Adds validation: title is required
//
// Test by creating, finding, updating, and destroying records.
// ------------------------------------------

// Your code here


// ------------------------------------------
// BONUS: Event system with inheritance
// Build an observable pattern:
//   Class: EventEmitter
//     - #listeners (private Map of event name -> callback arrays)
//     - on(event, callback) — registers a listener
//     - off(event, callback) — removes a listener
//     - emit(event, ...args) — calls all listeners for that event
//
//   Class: OrderTracker extends EventEmitter
//     - constructor(orderId)
//     - properties: orderId, status ('pending'), history []
//     - method: updateStatus(newStatus) — updates status, pushes to
//       history, emits 'statusChange' event with { orderId, oldStatus, newStatus }
//     - method: cancel() — sets status to 'cancelled', emits 'cancelled'
//
// Demonstrate:
//   const order = new OrderTracker('ORD-001');
//   order.on('statusChange', (data) => console.log('Status changed:', data));
//   order.updateStatus('processing');
//   order.updateStatus('shipped');
// ------------------------------------------

// Your code here
