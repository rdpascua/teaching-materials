# Day 22: Fetch API

## Jira Ticket: NOVA-101 — Fetch dashboard data

**Priority:** High | **Sprint:** 4 | **Assignee:** You | **Reporter:** Alex Chen (Tech Lead)

---

> **Description:**
>
> The dashboard page needs to pull user data from our REST API. Right now
> everything is hardcoded. We need to fetch real data from the server and
> display it. Use the Fetch API (no axios — we're keeping dependencies light).
>
> **Acceptance Criteria:**
> - Fetch user data from the REST endpoint
> - Handle loading and error states
> - Parse JSON responses correctly
> - Support GET and POST requests
>
> **Tech notes:** Our staging API follows the same pattern as
> jsonplaceholder.typicode.com. Use that for testing.

---

## CONTEXT — Why This Matters (~3 min)

Almost every web application needs to talk to a server. Whether you are loading
a user's profile, submitting a form, or pulling dashboard metrics, you need to
make HTTP requests. The Fetch API is the modern, built-in way to do this in
JavaScript. No libraries needed.

Before `fetch`, developers used `XMLHttpRequest` (ugly) or jQuery's `$.ajax`
(requires a library). The Fetch API is cleaner, Promise-based, and built right
into the browser.

---

## CORE CONCEPTS (~15 min)

### 1. Basic fetch() — Making a GET request

`fetch()` takes a URL and returns a Promise. That Promise resolves to a
Response object.

```js
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Request failed:', error));
```

Two steps every time:
1. `fetch(url)` returns a Response object
2. `response.json()` parses the body as JSON (also returns a Promise)

### 2. HTTP Methods Overview

HTTP defines several methods for different operations:

| Method   | Purpose              | Example                          |
|----------|----------------------|----------------------------------|
| `GET`    | Read / retrieve data | Get user profile                 |
| `POST`   | Create new data      | Create a new account             |
| `PUT`    | Replace existing     | Update entire user record        |
| `PATCH`  | Partial update       | Change just the user's email     |
| `DELETE` | Remove data          | Delete a user account            |

`fetch()` defaults to GET. For anything else, pass an options object:

```js
fetch(url, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'New User' })
});
```

### 3. Working with JSON

APIs almost always send and receive JSON. Two critical methods:

- `response.json()` — parse incoming JSON from the server
- `JSON.stringify(obj)` — convert a JS object to JSON string for sending

```js
// Receiving JSON
fetch('/api/users')
  .then(res => res.json())       // parse it
  .then(users => console.log(users));

// Sending JSON
fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Sara', role: 'engineer' })
});
```

### 4. Headers and Options

The second argument to `fetch()` is an options object:

```js
fetch(url, {
  method: 'POST',           // HTTP method
  headers: {                 // metadata about the request
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token123'
  },
  body: JSON.stringify(data) // the payload (not used in GET)
});
```

Common headers:
- `Content-Type` — tells the server what format the body is in
- `Authorization` — sends auth tokens
- `Accept` — tells the server what format you want back

### 5. Error Handling — The Fetch Gotcha

**Important:** `fetch()` does NOT reject on HTTP error codes like 404 or 500.
It only rejects on network failures (no internet, DNS issues, etc.).

You must check `response.ok` yourself:

```js
fetch('https://jsonplaceholder.typicode.com/users/9999')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => console.error('Failed:', error.message));
```

`response.ok` is `true` for status codes 200-299, `false` for everything else.

### 6. Using async/await with fetch

Since `fetch()` returns a Promise, you can use async/await for cleaner code:

```js
async function getUser(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) throw new Error(`Status: ${response.status}`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error.message);
  }
}
```

---

## COMPLETE THE TICKET (~10 min)

Build a function that fetches dashboard data for the NovaTech admin panel.
Requirements from the ticket:

1. Fetch a list of users from the API
2. Fetch a single user by ID
3. Create a new user via POST
4. Handle errors properly (check `response.ok`)
5. Use async/await syntax

Test against `https://jsonplaceholder.typicode.com`.

---

## KEY TAKEAWAYS

- `fetch(url)` makes HTTP requests and returns a Promise
- Always call `response.json()` to parse the response body
- `fetch()` does NOT throw on 404/500 — check `response.ok`
- Use the options object for method, headers, and body
- `JSON.stringify()` converts objects to JSON strings for sending
- async/await makes fetch code much cleaner than `.then()` chains
