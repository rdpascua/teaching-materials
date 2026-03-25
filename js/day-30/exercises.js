// ============================================
// Day 30: Graduation — Final Exam
// ============================================
// 10 mixed questions covering all 30 days.
// Write your answers below each question, then run the file to check.
// No peeking at solutions.js until you've tried them all!
// ============================================


// ------------------------------------------
// QUESTION 1: Variables & Scope (Days 1, 13)
// ------------------------------------------
// What will this code print? Write your prediction, then uncomment to check.

function testScope() {
  let x = 10;
  if (true) {
    let x = 20;
    var y = 30;
    console.log("Inside:", x, y);
  }
  console.log("Outside:", x, y);
}

// Your prediction:
// Inside:  ???, ???
// Outside: ???, ???

// Uncomment to check:
// testScope();


// ------------------------------------------
// QUESTION 2: Array Methods (Days 7, 9)
// ------------------------------------------
// Given this array of objects, use array methods to:
// a) Get an array of just the names
// b) Get only the items where inStock is true
// c) Calculate the total price of all items

const inventory = [
  { name: "Sword", price: 100, inStock: true },
  { name: "Shield", price: 80, inStock: false },
  { name: "Potion", price: 25, inStock: true },
  { name: "Armor", price: 200, inStock: true },
  { name: "Ring", price: 50, inStock: false },
];

// a) Array of names:
// const names = ???

// b) In-stock items only:
// const available = ???

// c) Total price of all items:
// const totalPrice = ???

// console.log("Names:", names);
// console.log("Available:", available);
// console.log("Total price:", totalPrice);


// ------------------------------------------
// QUESTION 3: Destructuring & Spread (Day 11)
// ------------------------------------------
// a) Use destructuring to extract the first two colors into variables.
// b) Use spread to create a new array with "orange" added at the end.
// c) Use object destructuring to extract name and give age a default of 25.

const colors = ["red", "blue", "green", "yellow"];
const person = { name: "Aria", email: "aria@example.com" };

// a) const [???, ???] = colors;
// b) const newColors = ???;
// c) const { ???, ??? } = person;

// console.log(first, second);       // "red", "blue"
// console.log(newColors);           // ["red", "blue", "green", "yellow", "orange"]
// console.log(personName, age);     // "Aria", 25


// ------------------------------------------
// QUESTION 4: Classes & Inheritance (Days 14, 15)
// ------------------------------------------
// Create a class called BankAccount with:
// - constructor(owner, balance) — balance defaults to 0
// - deposit(amount) — adds to balance, returns new balance
// - withdraw(amount) — subtracts from balance (only if enough funds), returns new balance
// - toString() — returns "owner: $balance"
//
// Then create a SavingsAccount that extends BankAccount:
// - constructor(owner, balance, interestRate)
// - addInterest() — increases balance by (balance * interestRate / 100)

// Write your classes here:


// Test them:
// const checking = new BankAccount("Alice", 1000);
// console.log(checking.deposit(500));     // 1500
// console.log(checking.withdraw(200));    // 1300
// console.log(checking.withdraw(9999));   // 1300 (not enough funds)
// console.log(checking.toString());       // "Alice: $1300"

// const savings = new SavingsAccount("Bob", 5000, 5);
// savings.addInterest();
// console.log(savings.toString());        // "Bob: $5250"


// ------------------------------------------
// QUESTION 5: Error Handling (Day 16)
// ------------------------------------------
// Write a function called safeDivide(a, b) that:
// - Throws an error if b is 0 ("Cannot divide by zero")
// - Throws an error if either argument is not a number ("Both arguments must be numbers")
// - Returns a / b otherwise
// Then call it inside a try/catch and log the result or error.

// Write your function here:


// Test cases:
// try { console.log(safeDivide(10, 2)); } catch(e) { console.error(e.message); }  // 5
// try { console.log(safeDivide(10, 0)); } catch(e) { console.error(e.message); }  // "Cannot divide by zero"
// try { console.log(safeDivide("a", 2)); } catch(e) { console.error(e.message); } // "Both arguments must be numbers"


// ------------------------------------------
// QUESTION 6: DOM Manipulation (Days 17, 18, 19)
// ------------------------------------------
// This question is conceptual — write the code as if running in a browser.
// Don't run this file expecting DOM code to work in Node.
//
// Given this HTML:
//   <ul id="todo-list">
//     <li>Buy groceries</li>
//     <li>Walk the dog</li>
//   </ul>
//   <input id="new-todo" type="text">
//   <button id="add-btn">Add</button>
//
// Write JavaScript that:
// a) Selects the <ul>, input, and button
// b) When the button is clicked, reads the input value,
//    creates a new <li>, appends it to the list, and clears the input.
// c) Uses event delegation on the <ul> so clicking any <li> removes it.

// Write your code here (it won't run in Node, that's OK):


// ------------------------------------------
// QUESTION 7: Promises & Async/Await (Days 24, 25)
// ------------------------------------------
// Convert this .then() chain into async/await syntax.
// Handle errors with try/catch instead of .catch().

// Original .then() version:
// function getUserData(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
//     .then(response => {
//       if (!response.ok) throw new Error("User not found");
//       return response.json();
//     })
//     .then(user => {
//       console.log(`Name: ${user.name}`);
//       console.log(`Email: ${user.email}`);
//       return user;
//     })
//     .catch(error => {
//       console.error("Error:", error.message);
//     });
// }

// Rewrite as async/await here:


// ------------------------------------------
// QUESTION 8: Working with JSON & localStorage (Days 22, 23)
// ------------------------------------------
// Write two functions:
// a) saveHighScores(scores) — takes an array of { name, score } objects
//    and saves it to localStorage under the key "highScores"
// b) loadHighScores() — reads from localStorage and returns the array
//    (return an empty array if nothing is saved)
// c) addHighScore(name, score) — loads existing scores, adds the new one,
//    sorts by score descending, keeps only top 5, and saves.

// Write your functions here:


// Test (conceptual — localStorage won't work in Node):
// addHighScore("Alice", 950);
// addHighScore("Bob", 1200);
// addHighScore("Charlie", 800);
// console.log(loadHighScores());


// ------------------------------------------
// QUESTION 9: Closures & Higher-Order Functions (Days 8, 13)
// ------------------------------------------
// a) Write a function called createCounter() that returns an object with
//    two methods: increment() and getCount(). The count should start at 0
//    and be private (not directly accessible from outside).
//
// b) Write a function called multiplier(factor) that returns a new function.
//    The returned function takes a number and returns it multiplied by the factor.

// Write your functions here:


// Test:
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.getCount()); // 3

// const double = multiplier(2);
// const triple = multiplier(3);
// console.log(double(5));  // 10
// console.log(triple(5));  // 15


// ------------------------------------------
// QUESTION 10: Putting It All Together
// ------------------------------------------
// Write a function called processStudents(students) that takes an array like:
//
// const students = [
//   { name: "Aria", grades: [90, 85, 92] },
//   { name: "Bob", grades: [70, 65, 80] },
//   { name: "Charlie", grades: [95, 98, 100] },
//   { name: "Diana", grades: [50, 55, 60] },
// ];
//
// And returns an array of objects with:
//   - name: the student's name
//   - average: their average grade (rounded to 1 decimal)
//   - status: "Pass" if average >= 70, "Fail" otherwise
//   - letterGrade: "A" (>=90), "B" (>=80), "C" (>=70), "D" (>=60), "F" (<60)
//
// Then filter to only passing students, and sort by average descending.
//
// Use: map, filter, sort, reduce (for average), ternary, destructuring —
// as many concepts as you can!

// Write your function here:


// Test:
// const students = [
//   { name: "Aria", grades: [90, 85, 92] },
//   { name: "Bob", grades: [70, 65, 80] },
//   { name: "Charlie", grades: [95, 98, 100] },
//   { name: "Diana", grades: [50, 55, 60] },
// ];
// console.table(processStudents(students));
// Expected output (passing students sorted by average):
// Charlie — avg: 97.7 — Pass — A
// Aria    — avg: 89.0 — Pass — B
// Bob     — avg: 71.7 — Pass — C
