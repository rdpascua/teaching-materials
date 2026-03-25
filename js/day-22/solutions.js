// ============================================
// Day 22 Solutions: Fetch API
// Ticket: NOVA-101 — Fetch dashboard data
// ============================================


// ------------------------------------------
// TASK 1: Fetch the employee directory
// ------------------------------------------

async function fetchEmployeeDirectory() {
  console.log('=== Task 1: Employee Directory ===');
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const employees = await response.json();

  employees.forEach(emp => {
    console.log(`  ${emp.name} — ${emp.email}`);
  });
  console.log(`Total: ${employees.length} employees\n`);
}

fetchEmployeeDirectory();

// WHY: We fetch /users which returns an array of user objects.
// response.json() parses the JSON body into a JS array.
// forEach iterates over each employee to display them.


// ------------------------------------------
// TASK 2: Fetch a single employee profile
// ------------------------------------------

async function getEmployeeProfile(id) {
  console.log(`=== Task 2: Employee Profile (ID: ${id}) ===`);
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (!response.ok) {
      throw new Error(`Employee not found (status: ${response.status})`);
    }

    const employee = await response.json();
    console.log(`  Name:    ${employee.name}`);
    console.log(`  Email:   ${employee.email}`);
    console.log(`  Phone:   ${employee.phone}`);
    console.log(`  Company: ${employee.company.name}`);
    console.log();
  } catch (error) {
    console.error(`  Error: ${error.message}\n`);
  }
}

// Test with valid and invalid IDs
getEmployeeProfile(3);
getEmployeeProfile(9999);

// WHY: We check response.ok before trying to parse. If the user doesn't
// exist, the API returns 404, and response.ok will be false. We throw
// an error that gets caught by the catch block.


// ------------------------------------------
// TASK 3: Create a new employee record
// ------------------------------------------

async function createEmployee() {
  console.log('=== Task 3: Create Employee ===');
  const newHire = {
    name: 'Casey Morgan',
    email: 'c.morgan@novatech.io',
    phone: '555-0199'
  };

  const response = await fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newHire)
  });

  const created = await response.json();
  console.log('  New employee created:', created);
  console.log(`  Assigned ID: ${created.id}\n`);
}

createEmployee();

// WHY: POST requests need three things in the options object:
// 1. method: 'POST' — tells the server we're creating data
// 2. headers with Content-Type — tells the server we're sending JSON
// 3. body with JSON.stringify() — converts our JS object to a JSON string


// ------------------------------------------
// TASK 4: Fetch with error handling
// ------------------------------------------

async function safeFetch(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`  safeFetch error for ${url}: ${error.message}`);
    return null;
  }
}

// Test it
async function testSafeFetch() {
  console.log('=== Task 4: Safe Fetch ===');

  const validResult = await safeFetch('https://jsonplaceholder.typicode.com/users/1');
  if (validResult) {
    console.log('  Valid request returned:', validResult.name);
  }

  const invalidResult = await safeFetch('https://jsonplaceholder.typicode.com/users/9999');
  console.log('  Invalid request returned:', invalidResult); // null
  console.log();
}

testSafeFetch();

// WHY: This pattern is extremely common in real codebases. A safeFetch
// wrapper handles the boilerplate of checking response.ok and catching
// errors so you don't repeat it everywhere.


// ------------------------------------------
// TASK 5: Dashboard data aggregator
// ------------------------------------------

async function getDashboardSummary() {
  console.log('=== Task 5: Dashboard Summary ===');
  try {
    // Fetch both endpoints in parallel with Promise.all
    const [usersResponse, postsResponse] = await Promise.all([
      fetch('https://jsonplaceholder.typicode.com/users'),
      fetch('https://jsonplaceholder.typicode.com/posts')
    ]);

    const employees = await usersResponse.json();
    const activities = await postsResponse.json();

    console.log(`  Employees: ${employees.length}, Activity items: ${activities.length}`);

    console.log('  Top 3 recent activities:');
    activities.slice(-3).reverse().forEach(activity => {
      console.log(`    - ${activity.title}`);
    });
    console.log();
  } catch (error) {
    console.error('  Dashboard failed to load:', error.message);
  }
}

getDashboardSummary();

// WHY: Promise.all fires both requests at the same time instead of
// waiting for one to finish before starting the next. This makes the
// dashboard load faster. We destructure the array of responses into
// named variables for clarity.


// ------------------------------------------
// BONUS: Mini API client
// ------------------------------------------

const NovatechAPI = {
  baseURL: 'https://jsonplaceholder.typicode.com',

  async _request(endpoint, options = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    // Some responses (like DELETE) may have empty bodies
    const text = await response.text();
    return text ? JSON.parse(text) : null;
  },

  async getEmployees() {
    return this._request('/users');
  },

  async getEmployee(id) {
    return this._request(`/users/${id}`);
  },

  async createEmployee(data) {
    return this._request('/users', {
      method: 'POST',
      body: JSON.stringify(data)
    });
  },

  async updateEmployee(id, data) {
    return this._request(`/users/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data)
    });
  },

  async deleteEmployee(id) {
    return this._request(`/users/${id}`, {
      method: 'DELETE'
    });
  }
};

// Test the API client
async function testAPIClient() {
  console.log('=== Bonus: NovaTech API Client ===');
  try {
    // GET all employees
    const employees = await NovatechAPI.getEmployees();
    console.log(`  Loaded ${employees.length} employees`);

    // GET single employee
    const emp = await NovatechAPI.getEmployee(1);
    console.log(`  Employee 1: ${emp.name}`);

    // POST new employee
    const newEmp = await NovatechAPI.createEmployee({
      name: 'Test User',
      email: 'test@novatech.io'
    });
    console.log(`  Created employee with ID: ${newEmp.id}`);

    // PUT update employee
    const updated = await NovatechAPI.updateEmployee(1, {
      name: 'Updated Name',
      email: 'updated@novatech.io'
    });
    console.log(`  Updated employee:`, updated.name);

    // DELETE employee
    const deleted = await NovatechAPI.deleteEmployee(1);
    console.log(`  Deleted employee: response =`, deleted);
  } catch (error) {
    console.error('  API Client error:', error.message);
  }
}

testAPIClient();

// WHY: A centralized API client is standard practice in production apps.
// The _request method handles the repetitive parts (headers, error checking,
// JSON parsing) so individual methods only specify what's unique (endpoint,
// method, body). The underscore prefix is a convention meaning "private /
// internal — don't call this directly."
