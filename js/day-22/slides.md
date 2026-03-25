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

## NOVA-101: Fetch Dashboard Data
### Day 22 — The Corporation Arc

**JavaScript Quest: 0 to Hero in 30 Days**

*Welcome to NovaTech Inc. Your first ticket just dropped.*

> Speaker Notes: Welcome to Act 4. The tone shifts today — no more dungeons and dragons. You've been hired at NovaTech Inc., a fictional tech startup. Every lesson from here on is a Jira ticket assigned to you by your tech lead. Today's ticket: fetch data from an API and display it. Let's go.

---

# Slide 2 — The Ticket

## Your First Jira Ticket

```
NOVA-101: Fetch dashboard data
Priority: High
Assignee: You (Junior Dev)
Reporter: Alex Chen (Tech Lead)

Description:
The dashboard needs to pull employee data from our
REST API endpoint. Use the Fetch API — no external
libraries. Parse the JSON response and log results.

Acceptance Criteria:
- [ ] Use fetch() to GET /api/employees
- [ ] Parse JSON response
- [ ] Handle errors gracefully
```

> Speaker Notes: This is how real work looks. You get a ticket with clear acceptance criteria. Your job is to figure out how to implement it. Let's break down what you need to know — the Fetch API, HTTP methods, JSON, and REST.

---

# Slide 3 — Today's XP Rewards

## XP Available Today

| Activity | XP |
|---|---|
| Attend the lesson | +10 XP |
| Complete the exercise | +20 XP |
| Bonus challenge | +15 XP |

**Running total possible after today: 1,000 XP (Wizard rank!)**

> Speaker Notes: You're in Wizard territory now. 45 XP available today. The bonus challenge involves error handling with fetch — very real-world, very resume-worthy.

---

# Slide 4 — Core Concept: What is a REST API?

## REST APIs — The Company's Data Pipeline

- **REST** = Representational State Transfer — a convention for URLs
- APIs are like a company's front desk — you ask, they respond
- Common HTTP methods:
  - `GET` — read data
  - `POST` — create data
  - `PUT` / `PATCH` — update data
  - `DELETE` — remove data

```
GET    /api/employees       → list all employees
GET    /api/employees/42    → get employee #42
POST   /api/employees       → create new employee
DELETE /api/employees/42    → remove employee #42
```

> Speaker Notes: Think of REST like the company directory. The URL is the desk you walk up to, and the HTTP method is what you're asking — "show me the list," "add this person," "fire that guy." The API responds with JSON data.

---

# Slide 5 — Core Concept: The Fetch API

## fetch() — Your HTTP Client

- Built into every modern browser — no installs needed
- Returns a **Promise** (remember Day 20?)
- Two-step process: get the response, then parse the body

```js
fetch('https://api.novatech.dev/employees')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Failed:', error));
```

**Key insight:** `response.json()` also returns a Promise — that's why we chain `.then()` twice.

> Speaker Notes: fetch() is the modern replacement for XMLHttpRequest. It returns a Promise — which we learned on Day 20. The first .then() gives us the Response object. We call .json() on it to parse the body, and THAT also returns a Promise. So we chain a second .then() to get the actual data.

---

# Slide 6 — Core Concept: Fetch with async/await

## async/await — The Cleaner Syntax

- Same thing as `.then()` chains, but reads like synchronous code
- Always wrap in `try/catch` for error handling

```js
async function getEmployees() {
  try {
    const response = await fetch('/api/employees');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Request failed:', error);
  }
}
```

> Speaker Notes: This is the version your tech lead would prefer in a code review. async/await is cleaner and easier to debug. Notice the two awaits — one for the fetch itself, one for parsing the JSON body. And we wrap it in try/catch because network requests can fail.

---

# Slide 7 — Core Concept: HTTP Response & Status Codes

## Reading the Response

- `response.ok` — `true` if status is 200-299
- `response.status` — the numeric code
- **fetch() does NOT throw on 404 or 500** — you must check manually

```js
const response = await fetch('/api/employees');
if (!response.ok) {
  throw new Error(`HTTP ${response.status}`);
}
const data = await response.json();
```

| Code | Meaning |
|------|---------|
| 200 | OK |
| 404 | Not Found |
| 500 | Server Error |

> Speaker Notes: This trips up every junior dev. fetch() only rejects the promise on network failures — like if the server is completely unreachable. A 404 or 500 response is still a "successful" fetch. You MUST check response.ok or response.status yourself. This will come up in code reviews.

---

# Slide 8 — Core Concept: Sending Data with POST

## POST Requests — Creating Resources

- Pass an options object as the second argument
- Set `method`, `headers`, and `body`

```js
const res = await fetch('/api/employees', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Sam', role: 'Dev' })
});
```

- `JSON.stringify()` converts a JS object to a JSON string
- Always set `Content-Type` header so the server knows the format

> Speaker Notes: GET is the default, but to create data you send a POST. The body must be a string — that's why we use JSON.stringify. And we set the Content-Type header so the server knows we're sending JSON, not form data or plain text. Forgetting the header is a super common bug.

---

# Slide 9 — Live Demo

## Let's Build: Employee Data Fetcher

**What we'll code together:**
1. Fetch employee data from a public API (JSONPlaceholder)
2. Parse the JSON response
3. Display names in the console
4. Handle errors if the API is down
5. POST a new employee record

**API:** `https://jsonplaceholder.typicode.com/users`

> Speaker Notes: We'll use JSONPlaceholder since it's free and always available. We'll start with a simple GET, then add error handling, then do a POST. I'll show both the .then() version and the async/await version so you can see the difference side by side.

---

# Slide 10 — Task Completion

## Your Ticket Tasks

**Required (20 XP):**
- Fetch user data from `jsonplaceholder.typicode.com/users`
- Display each user's name and email in the console
- Handle errors with try/catch

**Bonus Challenge (15 XP):**
- Create a `POST` request to add a new user
- Check `response.ok` before processing data
- Build a `fetchJSON` helper function that handles the response check automatically

**Acceptance criteria from the ticket must be met!**

> Speaker Notes: Work through these like a real ticket. Start with the basic GET, make sure error handling works by testing with a bad URL, then tackle the bonus. The fetchJSON helper function is something you'd actually build at a real company — reusable utility functions save everyone time.

---

# Slide 11 — Quick Reference

## Fetch API Cheat Sheet

| Pattern | Code |
|---------|------|
| Basic GET | `await fetch(url)` |
| Parse JSON | `await response.json()` |
| Check status | `if (!response.ok) throw ...` |
| POST data | `fetch(url, { method: 'POST', body: ... })` |
| Set headers | `headers: { 'Content-Type': 'application/json' }` |
| Stringify body | `JSON.stringify(obj)` |

**Remember:** fetch does NOT throw on 404/500 — always check `response.ok`!

> Speaker Notes: Pin this cheat sheet. The fetch API pattern is something you'll use every single day as a professional developer. The most important thing to remember is the response.ok check — it's the number one mistake juniors make.

---

# Slide 12 — Next Sprint

## Up Next: NOVA-102 — Refactor into Modules

**Tomorrow's ticket:** Your tech lead wants you to split that messy single-file code into clean ES modules.

- `import` and `export`
- Named vs. default exports
- Organizing code like a real project

*"Good code isn't just code that works. It's code your teammates can read."* — Alex Chen, Tech Lead

> Speaker Notes: Now that you can fetch data, tomorrow we'll learn how to organize our growing codebase. ES modules are how every modern JavaScript project is structured. No more 500-line single files. See you at the next standup.
