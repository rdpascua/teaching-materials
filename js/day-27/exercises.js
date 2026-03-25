// ============================================
// Day 27 Exercises: Regular Expressions
// Ticket: NOVA-106 — Validate form inputs
// ============================================
// Instructions: Build each validator/function using regex.
// Run with: node day-27/exercises.js


// ------------------------------------------
// TASK 1: Employee ID validator
// NovaTech employee IDs follow the format: NT-XXXXX
// where X is a digit (e.g., NT-00042, NT-12345).
// Write a function isValidEmployeeId(id) that:
//   - Returns true if the ID matches the format exactly
//   - Returns false otherwise
// Test with: "NT-00042", "NT-1", "nt-00042", "NT-123456", "XX-00042"
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 2: Data extractor
// Parse NovaTech log entries to extract useful data.
// Given a log line like:
//   "[2025-06-15 14:30:22] [ERROR] User alex.chen failed login from 192.168.1.42"
// Write functions:
//   extractTimestamp(log) — returns the timestamp string
//   extractLogLevel(log) — returns "ERROR", "WARN", "INFO", etc.
//   extractUsername(log) — returns the username after "User "
//   extractIP(log) — returns the IP address
// Return null if the pattern isn't found.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 3: Input sanitizer suite
// Build a sanitizer object with these methods:
//   trimAndClean(str) — trim whitespace, collapse multiple spaces to one
//   stripHTML(str) — remove all HTML tags
//   escapeSpecialChars(str) — replace <, >, &, " with HTML entities
//   normalizePhone(phone) — extract just digits from a phone string,
//     then format as (XXX) XXX-XXXX
//   slugify(str) — convert "Hello World!" to "hello-world"
//     (lowercase, replace spaces/special chars with hyphens, remove
//      consecutive hyphens)
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 4: Password strength meter
// Write a function getPasswordStrength(password) that returns:
//   { score: 0-5, label: string, feedback: string[] }
// Scoring:
//   +1 for length >= 8
//   +1 for containing lowercase letter
//   +1 for containing uppercase letter
//   +1 for containing a digit
//   +1 for containing a special character (!@#$%^&*()_+-=)
// Labels:
//   0-1: "Very Weak"
//   2: "Weak"
//   3: "Fair"
//   4: "Strong"
//   5: "Very Strong"
// feedback should list what's missing.
// Test with several passwords.
// ------------------------------------------

// Your code here


// ------------------------------------------
// TASK 5: URL parser
// Write a function parseURL(url) that extracts:
//   { protocol, domain, port, path, query, fragment }
// Example: "https://api.novatech.io:8080/v2/users?active=true&role=admin#section1"
//   protocol: "https"
//   domain: "api.novatech.io"
//   port: "8080"
//   path: "/v2/users"
//   query: "active=true&role=admin"
//   fragment: "section1"
// Missing parts should be null.
// Test with several URLs (with/without port, query, fragment).
// ------------------------------------------

// Your code here


// ------------------------------------------
// BONUS: Template engine
// Build a simple template engine using regex:
//   function render(template, data)
// It should replace {{variableName}} placeholders with values from data.
// Support:
//   - Simple variables: "Hello {{name}}" + {name: "Alex"} = "Hello Alex"
//   - Nested properties: "{{user.name}}" + {user: {name: "Alex"}} = "Alex"
//   - Filters: "{{name|uppercase}}" = "ALEX", "{{price|currency}}" = "$29.99"
//     Support filters: uppercase, lowercase, currency
//   - Missing values should render as empty string
//
// Test with a NovaTech email template.
// ------------------------------------------

// Your code here
