// ============================================
// Day 22: Fetch API
// Ticket: NOVA-101 — Fetch dashboard data
// ============================================
// Run with: node day-22/examples.js
// (Requires Node 18+ for built-in fetch)


// ------------------------------------------
// EXAMPLE 1: Basic GET request
// Fetch a single user from the NovaTech API
// ------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(user => {
    console.log('=== Example 1: Basic GET ===');
    console.log('Employee:', user.name);
    console.log('Email:', user.email);
    console.log('Company:', user.company.name);
    console.log();
  });


// ------------------------------------------
// EXAMPLE 2: The two-step process
// fetch() returns a Response, not the data
// ------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users/2')
  .then(response => {
    console.log('=== Example 2: Response Object ===');
    console.log('Status:', response.status);       // 200
    console.log('OK?', response.ok);               // true
    console.log('Status Text:', response.statusText); // "OK"
    // response.json() returns ANOTHER promise
    return response.json();
  })
  .then(user => {
    console.log('Parsed user:', user.name);
    console.log();
  });


// ------------------------------------------
// EXAMPLE 3: Fetching a list of resources
// Get all users for the dashboard table
// ------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    console.log('=== Example 3: User List for Dashboard ===');
    console.log(`Total employees: ${users.length}`);

    // Display as a simple dashboard table
    users.slice(0, 5).forEach(user => {
      console.log(`  [${user.id}] ${user.name} — ${user.email}`);
    });
    console.log();
  });


// ------------------------------------------
// EXAMPLE 4: POST request — Create a new user
// Submit new employee data to the API
// ------------------------------------------

const newEmployee = {
  name: 'Jordan Rivera',
  email: 'j.rivera@novatech.io',
  department: 'Engineering',
  role: 'Frontend Developer'
};

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(newEmployee)
})
  .then(res => res.json())
  .then(created => {
    console.log('=== Example 4: POST — New Employee ===');
    console.log('Created employee:', created);
    console.log();
  });


// ------------------------------------------
// EXAMPLE 5: PUT request — Update a record
// Update an employee's information
// ------------------------------------------

const updatedData = {
  name: 'Leanne Graham',
  email: 'l.graham@novatech.io',
  department: 'Engineering',
  role: 'Senior Engineer'
};

fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updatedData)
})
  .then(res => res.json())
  .then(updated => {
    console.log('=== Example 5: PUT — Update Employee ===');
    console.log('Updated record:', updated);
    console.log();
  });


// ------------------------------------------
// EXAMPLE 6: DELETE request
// Remove an employee record
// ------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users/1', {
  method: 'DELETE'
})
  .then(res => {
    console.log('=== Example 6: DELETE ===');
    console.log('Delete status:', res.status);
    console.log('Success:', res.ok);
    console.log();
  });


// ------------------------------------------
// EXAMPLE 7: Error handling — The fetch gotcha
// fetch does NOT reject on 404!
// ------------------------------------------

fetch('https://jsonplaceholder.typicode.com/users/9999')
  .then(response => {
    console.log('=== Example 7: Error Handling ===');
    console.log('Status:', response.status);  // 404
    console.log('OK?', response.ok);          // false

    if (!response.ok) {
      throw new Error(`Employee not found! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(user => {
    console.log('User:', user);
  })
  .catch(error => {
    console.log('Caught error:', error.message);
    console.log();
  });


// ------------------------------------------
// EXAMPLE 8: async/await syntax
// Cleaner way to write fetch calls
// ------------------------------------------

async function fetchDashboardData() {
  console.log('=== Example 8: async/await ===');
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    const employees = await response.json();

    console.log('Dashboard loaded successfully');
    console.log(`Displaying ${employees.length} employees`);
    console.log('First employee:', employees[0].name);
    console.log();
  } catch (error) {
    console.error('Dashboard failed to load:', error.message);
  }
}

fetchDashboardData();


// ------------------------------------------
// EXAMPLE 9: Fetching related data
// Get a user's posts (like fetching an employee's activity)
// ------------------------------------------

async function getEmployeeActivity(userId) {
  console.log('=== Example 9: Related Data ===');
  try {
    // Fetch user and their posts in parallel
    const [userRes, postsRes] = await Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    ]);

    const user = await userRes.json();
    const posts = await postsRes.json();

    console.log(`Activity report for: ${user.name}`);
    console.log(`Total activity items: ${posts.length}`);
    posts.slice(0, 3).forEach(post => {
      console.log(`  - ${post.title.substring(0, 50)}...`);
    });
    console.log();
  } catch (error) {
    console.error('Failed to load activity:', error.message);
  }
}

getEmployeeActivity(1);


// ------------------------------------------
// EXAMPLE 10: Reusable API helper
// What a real project might look like
// ------------------------------------------

async function apiRequest(endpoint, options = {}) {
  const baseURL = 'https://jsonplaceholder.typicode.com';

  const config = {
    headers: {
      'Content-Type': 'application/json',
      // In a real app: 'Authorization': `Bearer ${getToken()}`
      ...options.headers
    },
    ...options
  };

  const response = await fetch(`${baseURL}${endpoint}`, config);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status} ${response.statusText}`);
  }

  // DELETE responses often have empty bodies
  if (response.status === 204) return null;

  return response.json();
}

// Usage of the helper
async function demo() {
  console.log('=== Example 10: API Helper ===');
  try {
    const users = await apiRequest('/users');
    console.log(`Loaded ${users.length} users via helper`);

    const newUser = await apiRequest('/users', {
      method: 'POST',
      body: JSON.stringify({ name: 'API Helper Test', email: 'test@novatech.io' })
    });
    console.log('Created via helper:', newUser);
  } catch (error) {
    console.error('Helper error:', error.message);
  }
}

demo();
