# NotebookLM Presentation Guide

This is a **gamified JavaScript bootcamp** called "JavaScript Quest: 0 to Hero in 30 Days."
Students progress through an RPG-style adventure. Days 22-28 are "The Corporation" arc.
The tone shifts — students have been "hired" at NovaTech Inc., a fictional tech company.
Each lesson is framed as a Jira ticket from the tech lead. The vibe is professional but
still engaging, like your first week at a cool startup.

Generate slides that are professional yet engaging. Use corporate metaphors (tickets,
PRs, standups, code reviews). Each slide should have a clear heading, concise bullet
points, and speaker notes. Think onboarding deck meets coding tutorial.

---

# Slide 1 — Title Slide

## NOVA-106: Validate Form Inputs
### Day 27 — The Corporation Arc

**JavaScript Quest: 0 to Hero in 30 Days**

*QA found 14 bugs. All of them? Missing input validation.*

> Speaker Notes: Day 27. The QA team just filed a batch of bugs — users are submitting empty emails, passwords like "123", and phone numbers with letters in them. The fix? Regular expressions. They look intimidating but they're the standard tool for text validation.

---

# Slide 2 — The Ticket

## Your Jira Ticket

```
NOVA-106: Validate form inputs
Priority: Critical
Assignee: You (Junior Dev)
Reporter: QA Team / Alex Chen (Tech Lead)

Description:
Multiple form fields accept invalid data. Add regex
validation for email, phone, and password fields.
Show user-friendly error messages.

Acceptance Criteria:
- [ ] Email validation with regex
- [ ] Password: min 8 chars, 1 number, 1 uppercase
- [ ] Phone: digits only, 10-11 characters
- [ ] Show inline error messages
```

> Speaker Notes: This is marked Critical — invalid data in the database causes downstream bugs everywhere. Validation is not glamorous work, but it's essential. Every form you'll ever build needs it. Let's learn the tool that makes it possible.

---

# Slide 3 — Today's XP Rewards

## XP Available Today

| Activity | XP |
|---|---|
| Attend the lesson | +10 XP |
| Complete the exercise | +20 XP |
| Bonus challenge | +15 XP |

> Speaker Notes: 45 XP. Regex can feel tough at first but the exercises are very practical — you'll validate real form fields. The bonus challenge builds a reusable validator function you could drop into any project.

---

# Slide 4 — Core Concept: Regex Basics

## Regular Expressions — Pattern Matching

- A regex is a **pattern** that matches text
- Written between forward slashes: `/pattern/`
- Used to test, find, or replace text

```js
const pattern = /hello/;
pattern.test('hello world');  // true
pattern.test('goodbye');      // false
```

**Common characters:**
| Symbol | Meaning |
|--------|---------|
| `.` | Any single character |
| `\d` | Any digit (0-9) |
| `\w` | Any word character (letter, digit, underscore) |
| `\s` | Any whitespace |

> Speaker Notes: Think of regex like a search filter on steroids. The simplest regex is just a literal string between slashes — /hello/ matches the word "hello" anywhere in the text. The special characters let you match categories: \d for any digit, \w for any word character, \s for spaces and tabs. The dot matches literally anything except a newline.

---

# Slide 5 — Core Concept: Quantifiers & Anchors

## How Many? And Where?

**Quantifiers — how many times to match:**
| Symbol | Meaning |
|--------|---------|
| `+` | One or more |
| `*` | Zero or more |
| `?` | Zero or one |
| `{3}` | Exactly 3 |
| `{3,8}` | Between 3 and 8 |

**Anchors — where to match:**
| Symbol | Meaning |
|--------|---------|
| `^` | Start of string |
| `$` | End of string |

```js
/^\d{10,11}$/.test('5551234567');   // true (10 digits)
/^\d{10,11}$/.test('555-123-4567'); // false (has dashes)
```

> Speaker Notes: Quantifiers say "how many" of the previous character to match. Plus means one or more, star means zero or more, question mark means optional. Curly braces let you be specific — {3} means exactly 3, {3,8} means between 3 and 8. Anchors are crucial — the caret anchors to the start, the dollar sign to the end. Without anchors, /\d{3}/ would match "abc123xyz" because there ARE three digits in there. With anchors, /^\d{3}$/ means "the ENTIRE string must be exactly 3 digits."

---

# Slide 6 — Core Concept: Character Classes & Groups

## Custom Patterns

**Character classes — match one from a set:**
```js
/[aeiou]/    // any vowel
/[A-Z]/      // any uppercase letter
/[^0-9]/     // NOT a digit (^ inside [] means NOT)
```

**Groups and alternation:**
```js
/(cat|dog)/           // "cat" or "dog"
/^(Mr|Ms|Dr)\.\s/     // title at start of string
```

**Flags:**
```js
/hello/i    // i = case insensitive
/hello/g    // g = global (find all matches)
```

> Speaker Notes: Square brackets define a character class — match any ONE character from the set. [A-Z] matches any uppercase letter. The caret inside brackets means NOT — [^0-9] matches anything that isn't a digit. Parentheses create groups, and the pipe is alternation — like an OR. Flags go after the closing slash: i makes it case-insensitive, g finds all matches instead of just the first.

---

# Slide 7 — Core Concept: Practical Validation Patterns

## Real-World Regex for Forms

**Email (simplified):**
```js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
emailRegex.test('sam@nova.dev');  // true
```

**Password (min 8, 1 uppercase, 1 digit):**
```js
const hasUpper = /[A-Z]/;
const hasDigit = /\d/;
const isLong = /.{8,}/;
```

**Phone (10-11 digits only):**
```js
const phoneRegex = /^\d{10,11}$/;
```

> Speaker Notes: For email, the pattern says: one or more non-space non-@ characters, then @, then more non-space non-@ characters, then a dot, then more non-space non-@ characters. It's a simplified email regex — production email validation is incredibly complex, but this catches 95% of bad inputs. For passwords, I recommend separate checks instead of one monster regex — it's easier to show specific error messages like "needs an uppercase letter" vs "needs a number."

---

# Slide 8 — Core Concept: test, match, replace

## The Three Regex Methods

```js
// test() — returns true/false (validation)
/\d/.test('abc123');       // true

// match() — returns the matches (extraction)
'Call 555-1234'.match(/\d+/g);  // ["555", "1234"]

// replace() — swap matches (transformation)
'555-123-4567'.replace(/\D/g, '');  // "5551234567"
```

**When to use each:**
- `test()` for validation (yes/no)
- `match()` for extracting data from strings
- `replace()` for cleaning or transforming input

> Speaker Notes: Three methods, three use cases. test() is for validation — does this string match the pattern? Returns boolean. match() is for extraction — pull out the parts that match. Returns an array of matches. replace() is for transformation — swap matched parts with something else. The phone number example is great — replace all non-digits with empty string to clean the input. \D (capital D) means NOT a digit.

---

# Slide 9 — Live Demo

## Let's Build: Form Validator

**What we'll code together:**
1. Create regex patterns for email, password, phone
2. Build a `validate()` function that returns error messages
3. Wire it up to form inputs with event listeners
4. Show inline error messages in the DOM
5. Use `replace()` to auto-format phone numbers

> Speaker Notes: We'll build a complete form validator. The key insight is separating validation logic from display logic. The validate function takes a value and returns either null (valid) or an error message string. Then we wire that to input events and display the result. This is how real form libraries work under the hood.

---

# Slide 10 — Task Completion

## Your Ticket Tasks

**Required (20 XP):**
- Write regex for email validation
- Write regex for password (min 8 chars, 1 digit, 1 uppercase)
- Write regex for phone (10-11 digits)
- Create a `validateField(type, value)` function that returns error messages

**Bonus Challenge (15 XP):**
- Use `replace()` to strip non-digits from phone input automatically
- Add a username validator (alphanumeric, 3-20 chars)
- Build a password strength meter (weak/medium/strong based on regex checks)
- Create a reusable `FormValidator` class

> Speaker Notes: Start with the three regex patterns and test them in the console. Then build the validateField function. The bonus password strength meter is fun — weak if just lowercase, medium if letters + numbers, strong if letters + numbers + special characters. Each level is a regex check.

---

# Slide 11 — Quick Reference

## Regex Cheat Sheet

| Pattern | Matches |
|---------|---------|
| `/\d/` | Any digit |
| `/\w/` | Any word character |
| `/\s/` | Any whitespace |
| `/[A-Z]/` | Uppercase letter |
| `/[^abc]/` | NOT a, b, or c |
| `/a+/` | One or more "a" |
| `/a{3,8}/` | 3 to 8 "a"s |
| `/^..$/` | Anchored (full string) |
| `/.../i` | Case insensitive |
| `/.../g` | Global (all matches) |

| Method | Use |
|--------|-----|
| `regex.test(str)` | Validate (boolean) |
| `str.match(regex)` | Extract (array) |
| `str.replace(regex, sub)` | Transform (string) |

> Speaker Notes: Regex takes practice. Don't try to memorize everything — use this cheat sheet and test patterns at regex101.com. The more you use regex, the more natural the syntax becomes. Start simple, build up complexity gradually.

---

# Slide 12 — Next Sprint

## Up Next: NOVA-107 — Clean Up the Utils

**Tomorrow's ticket:** Tech debt sprint. Time to refactor your utility functions into clean, pure, composable code.

- Pure functions and immutability
- Function composition
- Currying

*"The best code is code that does one thing, does it well, and surprises no one."* — Alex Chen, Tech Lead

> Speaker Notes: Tomorrow is all about code quality. Pure functions, immutability, composition — these are the principles that separate junior code from senior code. It's the last corporate ticket before the capstone project. Make it count. See you at standup.
