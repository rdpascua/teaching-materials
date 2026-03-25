// ============================================
// Day 30: Graduation — Final Exam Solutions
// ============================================
// Detailed solutions with explanations for all 10 questions.


// ------------------------------------------
// QUESTION 1: Variables & Scope
// ------------------------------------------

function testScope() {
  let x = 10;
  if (true) {
    let x = 20;   // This is a NEW x, scoped to this if-block
    var y = 30;    // var ignores block scope — y belongs to the function
    console.log("Inside:", x, y);
  }
  console.log("Outside:", x, y);
}

testScope();
// Inside:  20, 30   ← the block's own x (20) and y (30)
// Outside: 10, 30   ← the outer x (10, unchanged!) and y (30, var leaked out)

// KEY TAKEAWAY:
// - let creates a new variable inside the block — the outer x is untouched
// - var ignores the block — y is accessible outside the if statement


// ------------------------------------------
// QUESTION 2: Array Methods
// ------------------------------------------

const inventory = [
  { name: "Sword", price: 100, inStock: true },
  { name: "Shield", price: 80, inStock: false },
  { name: "Potion", price: 25, inStock: true },
  { name: "Armor", price: 200, inStock: true },
  { name: "Ring", price: 50, inStock: false },
];

// a) Array of names — use .map() to transform each object to just its name
const names = inventory.map(item => item.name);
console.log("Names:", names);
// ["Sword", "Shield", "Potion", "Armor", "Ring"]

// b) In-stock items — use .filter() to keep only items where inStock is true
const available = inventory.filter(item => item.inStock);
console.log("Available:", available);
// [{ name: "Sword"... }, { name: "Potion"... }, { name: "Armor"... }]

// c) Total price — use .reduce() to accumulate the sum
const totalPrice = inventory.reduce((sum, item) => sum + item.price, 0);
console.log("Total price:", totalPrice);
// 455


// ------------------------------------------
// QUESTION 3: Destructuring & Spread
// ------------------------------------------

const colors = ["red", "blue", "green", "yellow"];
const person = { name: "Aria", email: "aria@example.com" };

// a) Array destructuring — grab the first two elements
const [first, second] = colors;
console.log(first, second); // "red", "blue"

// b) Spread to create a new array with "orange" at the end
const newColors = [...colors, "orange"];
console.log(newColors); // ["red", "blue", "green", "yellow", "orange"]

// c) Object destructuring with a default value and rename
const { name: personName, age = 25 } = person;
console.log(personName, age); // "Aria", 25

// EXPLANATION:
// - { name: personName } renames "name" to "personName" (avoids conflict)
// - { age = 25 } gives age a default of 25 since person has no age property


// ------------------------------------------
// QUESTION 4: Classes & Inheritance
// ------------------------------------------

class BankAccount {
  constructor(owner, balance = 0) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds!");
      return this.balance; // Return unchanged balance
    }
    this.balance -= amount;
    return this.balance;
  }

  toString() {
    return `${this.owner}: $${this.balance}`;
  }
}

class SavingsAccount extends BankAccount {
  constructor(owner, balance, interestRate) {
    super(owner, balance);         // Call parent constructor
    this.interestRate = interestRate;
  }

  addInterest() {
    const interest = this.balance * this.interestRate / 100;
    this.deposit(interest);        // Reuse the parent's deposit method!
  }
}

const checking = new BankAccount("Alice", 1000);
console.log(checking.deposit(500));     // 1500
console.log(checking.withdraw(200));    // 1300
console.log(checking.withdraw(9999));   // 1300 (not enough funds)
console.log(checking.toString());       // "Alice: $1300"

const savings = new SavingsAccount("Bob", 5000, 5);
savings.addInterest();
console.log(savings.toString());        // "Bob: $5250"

// EXPLANATION:
// - BankAccount handles basic deposit/withdraw logic
// - SavingsAccount extends it, adding interest rate functionality
// - super(owner, balance) calls the parent constructor
// - addInterest() reuses the inherited deposit() method — that's DRY code!


// ------------------------------------------
// QUESTION 5: Error Handling
// ------------------------------------------

function safeDivide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// Test with try/catch:
try {
  console.log(safeDivide(10, 2));
} catch (e) {
  console.error(e.message);
}
// 5

try {
  console.log(safeDivide(10, 0));
} catch (e) {
  console.error(e.message);
}
// "Cannot divide by zero"

try {
  console.log(safeDivide("a", 2));
} catch (e) {
  console.error(e.message);
}
// "Both arguments must be numbers"

// EXPLANATION:
// - Check typeof BEFORE checking for zero (order matters!)
// - throw new Error() stops the function and sends the error to catch
// - The try/catch prevents the error from crashing the whole program


// ------------------------------------------
// QUESTION 6: DOM Manipulation
// ------------------------------------------
// NOTE: This is browser-only code. It won't run in Node.

/*
// a) Select elements
const todoList = document.getElementById("todo-list");
const newTodoInput = document.getElementById("new-todo");
const addBtn = document.getElementById("add-btn");

// b) Add new todo on button click
addBtn.addEventListener("click", () => {
  const text = newTodoInput.value.trim();
  if (text === "") return; // Don't add empty todos

  const li = document.createElement("li");
  li.textContent = text;
  todoList.appendChild(li);
  newTodoInput.value = ""; // Clear the input
  newTodoInput.focus();    // Put cursor back in the input
});

// c) Event delegation — click any <li> to remove it
todoList.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.remove();
  }
});
*/

console.log("Q6: DOM code — see comments (browser-only)");

// EXPLANATION:
// - We use event delegation on the <ul> instead of adding listeners to each <li>
// - This handles dynamically added <li> elements automatically
// - .trim() prevents adding whitespace-only todos
// - .focus() is a nice UX touch — cursor goes back to the input


// ------------------------------------------
// QUESTION 7: Promises & Async/Await
// ------------------------------------------

async function getUserData(userId) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const user = await response.json();

    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);

    return user;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// getUserData(1); // Uncomment to test (requires network)

// EXPLANATION:
// - Add "async" before the function keyword
// - Replace .then(response => ...) with: const response = await fetch(...)
// - Replace .then(user => ...) with: const user = await response.json()
// - Replace .catch(error => ...) with: try/catch wrapping everything
// - The code reads top-to-bottom, like synchronous code — much easier!


// ------------------------------------------
// QUESTION 8: Working with JSON & localStorage
// ------------------------------------------
// NOTE: localStorage only works in the browser.

/*
function saveHighScores(scores) {
  localStorage.setItem("highScores", JSON.stringify(scores));
}

function loadHighScores() {
  return JSON.parse(localStorage.getItem("highScores")) || [];
}

function addHighScore(name, score) {
  const scores = loadHighScores();

  scores.push({ name, score });

  // Sort by score descending (highest first)
  scores.sort((a, b) => b.score - a.score);

  // Keep only top 5
  const top5 = scores.slice(0, 5);

  saveHighScores(top5);
}

// Test:
addHighScore("Alice", 950);
addHighScore("Bob", 1200);
addHighScore("Charlie", 800);
console.log(loadHighScores());
// [{ name: "Bob", score: 1200 }, { name: "Alice", score: 950 }, { name: "Charlie", score: 800 }]
*/

console.log("Q8: localStorage code — see comments (browser-only)");

// EXPLANATION:
// - JSON.stringify converts JS objects to a string for storage
// - JSON.parse converts the string back to JS objects
// - The || [] fallback handles the case where nothing is saved yet
// - .sort() with (a, b) => b.score - a.score gives descending order
// - .slice(0, 5) takes only the first 5 elements (non-destructive)


// ------------------------------------------
// QUESTION 9: Closures & Higher-Order Functions
// ------------------------------------------

// a) createCounter — uses closure to keep count private
function createCounter() {
  let count = 0; // This variable is "closed over" — private!

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.getCount()); // 3
// console.log(counter.count);   // undefined — count is private!

// EXPLANATION:
// - "count" lives inside createCounter but is accessed by increment/getCount
// - Even after createCounter finishes, count survives because the returned
//   methods still reference it — that's a closure!
// - You can't do counter.count = 999 to cheat — it's truly private.


// b) multiplier — a function that returns a function (higher-order function)
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15
console.log(double(100)); // 200

// EXPLANATION:
// - multiplier(2) returns a function that remembers factor = 2
// - That returned function multiplies any number by 2
// - Each call to multiplier creates a NEW closure with its own factor


// ------------------------------------------
// QUESTION 10: Putting It All Together
// ------------------------------------------

function processStudents(students) {
  // Helper: determine letter grade
  function getLetterGrade(avg) {
    if (avg >= 90) return "A";
    if (avg >= 80) return "B";
    if (avg >= 70) return "C";
    if (avg >= 60) return "D";
    return "F";
  }

  return students
    // Step 1: Transform each student into a result object
    .map(({ name, grades }) => {
      // Calculate average using reduce
      const sum = grades.reduce((total, grade) => total + grade, 0);
      const average = Math.round((sum / grades.length) * 10) / 10;

      return {
        name,
        average,
        status: average >= 70 ? "Pass" : "Fail",
        letterGrade: getLetterGrade(average),
      };
    })
    // Step 2: Filter to only passing students
    .filter(student => student.status === "Pass")
    // Step 3: Sort by average descending
    .sort((a, b) => b.average - a.average);
}

const students = [
  { name: "Aria", grades: [90, 85, 92] },
  { name: "Bob", grades: [70, 65, 80] },
  { name: "Charlie", grades: [95, 98, 100] },
  { name: "Diana", grades: [50, 55, 60] },
];

console.log("\nFinal results:");
console.table(processStudents(students));
// ┌─────────┬───────────┬─────────┬────────┬─────────────┐
// │ (index) │   name    │ average │ status │ letterGrade  │
// ├─────────┼───────────┼─────────┼────────┼─────────────┤
// │    0    │ "Charlie" │  97.7   │ "Pass" │     "A"      │
// │    1    │  "Aria"   │  89.0   │ "Pass" │     "B"      │
// │    2    │  "Bob"    │  71.7   │ "Pass" │     "C"      │
// └─────────┴───────────┴─────────┴────────┴─────────────┘

// Diana is excluded (average 55.0 = Fail)

// EXPLANATION:
// This question combines:
// - Destructuring: ({ name, grades }) in the .map() callback
// - reduce: to calculate the sum of grades
// - map: to transform students into result objects
// - Ternary: average >= 70 ? "Pass" : "Fail"
// - filter: to keep only passing students
// - sort: to order by average descending
// - Method chaining: .map().filter().sort() — clean and readable
// - Helper function: getLetterGrade keeps the logic organized

console.log("\n=== CONGRATULATIONS! You completed the Final Exam! ===");
console.log("If you got 7+ correct, you're ready for the real world.");
console.log("If you got less, review the days listed in each question header.\n");
