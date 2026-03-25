// ============================================
// Day 30: Graduation & Career Launch
// Topic: Pro Tips — Advanced Patterns You'll See in the Wild
// ============================================
// These are patterns used by experienced JavaScript developers.
// You don't need to memorize them now — just know they exist
// so you recognize them when you see them.


// ------------------------------------------
// PRO TIP 1: Optional Chaining (?.)
// ------------------------------------------
// Problem: Accessing nested properties on objects that might be null/undefined
// crashes your app with "Cannot read property of undefined".

const user1 = {
  name: "Aria",
  address: {
    city: "CodeVille",
    zip: "12345",
  },
};

const user2 = {
  name: "Bob",
  // no address property!
};

// The OLD way — lots of manual checking:
const city1Old = user2.address && user2.address.city;
console.log("Old way:", city1Old); // undefined (no crash)

// The NEW way — optional chaining:
const city1New = user2?.address?.city;
console.log("Optional chaining:", city1New); // undefined (no crash)

// It works with methods too:
const length = user2?.address?.city?.toUpperCase();
console.log("Chained method:", length); // undefined (doesn't crash)

// And with arrays:
const users = [{ name: "Aria" }];
console.log(users?.[0]?.name);  // "Aria"
console.log(users?.[5]?.name);  // undefined (index 5 doesn't exist)


// ------------------------------------------
// PRO TIP 2: Nullish Coalescing (??)
// ------------------------------------------
// Problem: You want a default value, but || treats 0, "", and false as falsy.

const score = 0;
const displayScore1 = score || "No score"; // "No score" — WRONG! 0 is a valid score!
const displayScore2 = score ?? "No score"; // 0 — CORRECT! ?? only checks null/undefined

console.log("|| result:", displayScore1);  // "No score"
console.log("?? result:", displayScore2);  // 0

// ?? says: "Use the right side ONLY if the left side is null or undefined."
// || says: "Use the right side if the left side is ANY falsy value."

const username = "";
console.log(username || "Anonymous");  // "Anonymous" (empty string is falsy)
console.log(username ?? "Anonymous");  // "" (empty string is NOT null/undefined)

const settings = null;
console.log(settings ?? { theme: "dark" }); // { theme: "dark" }


// ------------------------------------------
// PRO TIP 3: Short-Circuit Evaluation
// ------------------------------------------
// Experienced devs use && and || as shortcuts.

// && returns the first falsy value, or the last value if all are truthy:
const isLoggedIn = true;
const greeting = isLoggedIn && "Welcome back!";
console.log(greeting); // "Welcome back!"

const isAdmin = false;
const adminPanel = isAdmin && "You have admin access";
console.log(adminPanel); // false (short-circuits, never reaches the string)

// This is commonly used in React/UI code:
// {isLoggedIn && <UserProfile />}  — only renders if logged in

// || returns the first truthy value:
const name = "" || "Guest" || "Default";
console.log(name); // "Guest" (first truthy value)

// Common pattern for defaults:
function greet(userName) {
  const displayName = userName || "Stranger";
  console.log(`Hello, ${displayName}!`);
}
greet("Aria");   // "Hello, Aria!"
greet("");       // "Hello, Stranger!"
greet();         // "Hello, Stranger!"


// ------------------------------------------
// PRO TIP 4: Tagged Template Literals
// ------------------------------------------
// You can put a function name in front of a template literal.
// The function receives the string parts and the values separately.

function highlight(strings, ...values) {
  // strings = ["My name is ", " and I'm ", " years old."]
  // values = ["Aria", 25]
  let result = "";
  strings.forEach((str, i) => {
    result += str;
    if (i < values.length) {
      result += `**${values[i]}**`; // Wrap values in bold markers
    }
  });
  return result;
}

const playerName = "Aria";
const playerAge = 25;
const bio = highlight`My name is ${playerName} and I'm ${playerAge} years old.`;
console.log(bio);
// "My name is **Aria** and I'm **25** years old."

// Real-world uses:
// - styled-components in React uses tagged templates for CSS
// - SQL query builders use them to prevent injection attacks
// - Internationalization (i18n) libraries use them for translations


// ------------------------------------------
// PRO TIP 5: Proxy — Intercepting Object Operations
// ------------------------------------------
// A Proxy lets you intercept and customize operations on an object.
// Think of it as a "middleman" that monitors everything.

const employee = {
  name: "Aria",
  salary: 75000,
  department: "Engineering",
};

const protectedEmployee = new Proxy(employee, {
  // Intercept property reads
  get(target, property) {
    if (property === "salary") {
      return "ACCESS DENIED — salary is private";
    }
    return target[property];
  },

  // Intercept property writes
  set(target, property, value) {
    if (property === "salary" && typeof value !== "number") {
      throw new Error("Salary must be a number!");
    }
    if (property === "salary" && value < 0) {
      throw new Error("Salary cannot be negative!");
    }
    target[property] = value;
    console.log(`Updated ${property} to ${value}`);
    return true;
  },
});

console.log(protectedEmployee.name);     // "Aria"
console.log(protectedEmployee.salary);   // "ACCESS DENIED — salary is private"
protectedEmployee.department = "Design"; // "Updated department to Design"

// Uncommenting the next line would throw an error:
// protectedEmployee.salary = "one million";

// Real-world uses:
// - Vue.js 3 uses Proxies for reactivity (auto-updating the UI)
// - Validation libraries use them to enforce rules
// - Logging/debugging tools use them to track property access


// ------------------------------------------
// PRO TIP 6: Generators — Functions That Pause
// ------------------------------------------
// A generator function can pause and resume, yielding values one at a time.
// Note the * after "function".

function* idGenerator() {
  let id = 1;
  while (true) {
    yield id;  // Pause here and return the current id
    id++;
  }
}

const gen = idGenerator();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
// Each call to .next() runs until the next "yield", then pauses.

// Practical example: Generate a sequence of colors
function* colorCycle() {
  const colors = ["red", "green", "blue", "yellow"];
  let index = 0;
  while (true) {
    yield colors[index];
    index = (index + 1) % colors.length; // Wraps around
  }
}

const colors = colorCycle();
console.log(colors.next().value); // "red"
console.log(colors.next().value); // "green"
console.log(colors.next().value); // "blue"
console.log(colors.next().value); // "yellow"
console.log(colors.next().value); // "red" — it loops!

// A finite generator:
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// You can use for...of with generators:
for (const num of range(1, 5)) {
  console.log("Range:", num); // 1, 2, 3, 4, 5
}

// Real-world uses:
// - Redux-Saga (state management side effects)
// - Lazy evaluation of large datasets
// - Custom iterators


// ------------------------------------------
// BONUS: Combining Pro Tips
// ------------------------------------------

// Here's what "real" JavaScript often looks like — combining multiple patterns:

const apiResponse = {
  data: {
    users: [
      { id: 1, name: "Aria", role: "admin", settings: { theme: "dark" } },
      { id: 2, name: "Bob", role: null, settings: null },
      { id: 3, name: "Charlie", role: "user", settings: { theme: "" } },
    ],
  },
};

// Using optional chaining + nullish coalescing + destructuring + map:
const userSummaries = apiResponse?.data?.users?.map(user => {
  const { name, role, settings } = user;
  return {
    name,
    role: role ?? "viewer",                      // null becomes "viewer"
    theme: settings?.theme || "light",           // empty string becomes "light"
  };
}) ?? [];

console.log("\nCombined pro tips result:");
console.table(userSummaries);
// [
//   { name: "Aria",    role: "admin",  theme: "dark"  },
//   { name: "Bob",     role: "viewer", theme: "light" },
//   { name: "Charlie", role: "user",   theme: "light" },
// ]

console.log("\n--- These are patterns you'll grow into. No need to memorize now! ---");
