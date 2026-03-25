# Day 27: Regular Expressions

## Jira Ticket: NOVA-106 — Validate form inputs

**Priority:** High | **Sprint:** 4 | **Assignee:** You | **Reporter:** Alex Chen (Tech Lead)

---

> **Description:**
>
> QA flagged a critical issue: users can submit empty or invalid form data.
> The registration form accepts "asdf" as an email, "x" as a phone number,
> and "1" as a password. We need client-side validation using regular
> expressions before data hits the API.
>
> **Acceptance Criteria:**
> - Validate email format (must have @ and domain)
> - Validate phone numbers (US format)
> - Validate password strength (min 8 chars, uppercase, lowercase, number)
> - Sanitize user input (trim whitespace, strip HTML tags)
> - Provide clear error messages for each validation failure
>
> **Tech notes:** This is client-side validation. The API already validates
> on the backend, but we need to catch errors early for better UX.

---

## CONTEXT — Why This Matters (~3 min)

Regular expressions (regex) are patterns that match text. They are used
everywhere: form validation, search functionality, data parsing, log
analysis, and text processing. Every programming language supports them.

They look intimidating at first (`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`)
but once you learn the building blocks, you can read and write them fluently.

---

## CORE CONCEPTS (~15 min)

### 1. Creating Regex Patterns

Two ways to create a regex:

```js
// Literal notation (most common)
const pattern = /hello/;

// Constructor (useful when pattern is dynamic)
const dynamic = new RegExp('hello');
```

### 2. Testing Patterns

The most common method — does the string match?

```js
const emailPattern = /@/;

emailPattern.test('user@novatech.io');  // true
emailPattern.test('not-an-email');      // false
```

### 3. Character Classes

Match specific types of characters:

```
.       Any character (except newline)
\d      Any digit (0-9)
\D      Any non-digit
\w      Any word character (a-z, A-Z, 0-9, _)
\W      Any non-word character
\s      Any whitespace (space, tab, newline)
\S      Any non-whitespace
[abc]   Any of a, b, or c
[a-z]   Any lowercase letter
[^abc]  Any character EXCEPT a, b, or c
```

```js
/\d{3}/.test('abc');     // false
/\d{3}/.test('123');     // true
/[A-Z]/.test('hello');   // false (no uppercase)
/[A-Z]/.test('Hello');   // true
```

### 4. Quantifiers

How many times should a character appear?

```
*       0 or more
+       1 or more
?       0 or 1 (optional)
{3}     Exactly 3
{2,5}   Between 2 and 5
{3,}    3 or more
```

```js
/\d+/.test('abc');     // false (no digits)
/\d+/.test('a1b');     // true (at least 1 digit)
/\d{5}/.test('12345'); // true (exactly 5 digits)
```

### 5. Anchors

Match a position, not a character:

```
^       Start of string
$       End of string
\b      Word boundary
```

```js
/^hello/.test('hello world');  // true (starts with hello)
/^hello/.test('say hello');    // false (doesn't start with hello)
/world$/.test('hello world');  // true (ends with world)
/^hello$/.test('hello');       // true (exact match)
```

### 6. Flags

Modify how the pattern matches:

```js
/hello/i    // i = case insensitive
/hello/g    // g = global (find all matches, not just first)
/hello/m    // m = multiline (^ and $ match line boundaries)
/hello/gi   // combine flags
```

### 7. Key Methods

```js
const str = 'Contact: alex@novatech.io or sam@novatech.io';

// .test() — returns true/false
/novatech/.test(str);                    // true

// .match() — returns matches
str.match(/\w+@\w+\.\w+/g);             // ['alex@novatech.io', 'sam@novatech.io']

// .replace() — replace matches
str.replace(/novatech/g, 'acme');        // replaces all occurrences

// .search() — returns index of first match
str.search(/@/);                          // 13
```

### 8. Common Validation Patterns

```js
// Email (simplified)
/^[^\s@]+@[^\s@]+\.[^\s@]+$/

// US Phone: (555) 123-4567 or 555-123-4567
/^(\(\d{3}\)\s?|\d{3}[-.])\d{3}[-.]?\d{4}$/

// Strong password: 8+ chars, uppercase, lowercase, number
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

// URL
/^https?:\/\/.+\..+$/
```

The `(?=...)` syntax is a "lookahead" — it checks that something exists
ahead without consuming characters.

---

## COMPLETE THE TICKET (~10 min)

Build a FormValidator for NovaTech's registration form:

1. `validateEmail(email)` — checks for valid email format
2. `validatePhone(phone)` — checks for US phone format
3. `validatePassword(password)` — checks strength (8+ chars, upper, lower, digit)
4. `sanitizeInput(text)` — trims whitespace, strips HTML tags
5. Each function returns `{ valid: boolean, error: string | null }`

---

## KEY TAKEAWAYS

- Regex patterns match text using special syntax: `/pattern/flags`
- `.test()` returns true/false; `.match()` returns the matches
- `\d` = digit, `\w` = word char, `\s` = whitespace
- `+` = one or more, `*` = zero or more, `?` = optional
- `^` = start, `$` = end — use both for exact matching
- `i` flag = case insensitive, `g` flag = find all matches
- Use character classes `[abc]` and ranges `[a-z]` for flexible matching
- Regex is powerful but can be hard to read — comment complex patterns
