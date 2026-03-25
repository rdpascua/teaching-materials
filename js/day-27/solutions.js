// ============================================
// Day 27 Solutions: Regular Expressions
// Ticket: NOVA-106 — Validate form inputs
// ============================================


// ------------------------------------------
// TASK 1: Employee ID validator
// ------------------------------------------

function isValidEmployeeId(id) {
  return /^NT-\d{5}$/.test(id);
}

console.log('=== Task 1: Employee ID Validator ===');
const idTests = ['NT-00042', 'NT-1', 'nt-00042', 'NT-123456', 'XX-00042', 'NT-12345'];
idTests.forEach(id => {
  console.log(`  "${id}": ${isValidEmployeeId(id)}`);
});
console.log();

// WHY: ^NT- anchors to the start and requires literal "NT-".
// \d{5} requires exactly 5 digits. $ anchors to the end.
// Without ^ and $, "NT-123456" would match because it contains 5 digits.
// The pattern is case-sensitive by default, so "nt-00042" fails.


// ------------------------------------------
// TASK 2: Data extractor
// ------------------------------------------

function extractTimestamp(log) {
  const match = log.match(/\[(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\]/);
  return match ? match[1] : null;
}

function extractLogLevel(log) {
  const match = log.match(/\[(ERROR|WARN|INFO|DEBUG)\]/);
  return match ? match[1] : null;
}

function extractUsername(log) {
  const match = log.match(/User (\S+)/);
  return match ? match[1] : null;
}

function extractIP(log) {
  const match = log.match(/(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/);
  return match ? match[1] : null;
}

console.log('=== Task 2: Log Data Extractor ===');
const logLine = '[2025-06-15 14:30:22] [ERROR] User alex.chen failed login from 192.168.1.42';
console.log('Log:', logLine);
console.log('  Timestamp:', extractTimestamp(logLine));
console.log('  Level:', extractLogLevel(logLine));
console.log('  Username:', extractUsername(logLine));
console.log('  IP:', extractIP(logLine));

const infoLog = '[2025-06-15 15:00:00] [INFO] System health check passed';
console.log('\nLog:', infoLog);
console.log('  Timestamp:', extractTimestamp(infoLog));
console.log('  Level:', extractLogLevel(infoLog));
console.log('  Username:', extractUsername(infoLog)); // null
console.log('  IP:', extractIP(infoLog));             // null
console.log();

// WHY: Each function uses a capturing group () to extract just the part
// we need. match() returns an array where [0] is the full match and [1]
// is the first capturing group. If there's no match, it returns null.


// ------------------------------------------
// TASK 3: Input sanitizer suite
// ------------------------------------------

const Sanitizer = {
  trimAndClean(str) {
    return str.trim().replace(/\s+/g, ' ');
  },

  stripHTML(str) {
    return str.replace(/<[^>]*>/g, '');
  },

  escapeSpecialChars(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  },

  normalizePhone(phone) {
    const digits = phone.replace(/\D/g, '');
    // Remove leading 1 for US country code
    const cleaned = digits.length === 11 && digits[0] === '1' ? digits.slice(1) : digits;
    if (cleaned.length !== 10) return null;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  },

  slugify(str) {
    return str
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')    // remove special chars (keep word chars, spaces, hyphens)
      .replace(/\s+/g, '-')        // replace spaces with hyphens
      .replace(/-+/g, '-')         // collapse multiple hyphens
      .replace(/^-|-$/g, '');      // remove leading/trailing hyphens
  }
};

console.log('=== Task 3: Sanitizer Suite ===');
console.log('trimAndClean:', `"${Sanitizer.trimAndClean('  hello    world  ')}"`);
console.log('stripHTML:', `"${Sanitizer.stripHTML('<b>Bold</b> and <em>italic</em>')}"`);
console.log('escapeSpecialChars:', `"${Sanitizer.escapeSpecialChars('<script>alert("xss")</script>')}"`);
console.log('normalizePhone:', Sanitizer.normalizePhone('+1 (555) 123-4567'));
console.log('normalizePhone:', Sanitizer.normalizePhone('5551234567'));
console.log('normalizePhone:', Sanitizer.normalizePhone('123'));
console.log('slugify:', Sanitizer.slugify('Hello World! This is NovaTech'));
console.log('slugify:', Sanitizer.slugify('  --Multiple   Spaces-- '));
console.log();

// WHY: Each method targets a specific sanitization need.
// \s+ with g flag replaces ALL multiple-space sequences.
// <[^>]*> matches HTML tags: starts with <, any non-> chars, ends with >.
// \D matches non-digits, so replace(\D/g, '') extracts only digits.
// The slugify chain converts progressively: lowercase, remove specials,
// spaces to hyphens, collapse multiples.


// ------------------------------------------
// TASK 4: Password strength meter
// ------------------------------------------

function getPasswordStrength(password) {
  const checks = [
    { test: /.{8,}/, label: '8+ characters' },
    { test: /[a-z]/, label: 'lowercase letter' },
    { test: /[A-Z]/, label: 'uppercase letter' },
    { test: /\d/, label: 'digit' },
    { test: /[!@#$%^&*()_+\-=]/, label: 'special character' }
  ];

  let score = 0;
  const feedback = [];

  checks.forEach(check => {
    if (check.test.test(password)) {
      score++;
    } else {
      feedback.push(`Missing: ${check.label}`);
    }
  });

  const labels = ['Very Weak', 'Very Weak', 'Weak', 'Fair', 'Strong', 'Very Strong'];

  return {
    score,
    label: labels[score],
    feedback
  };
}

console.log('=== Task 4: Password Strength ===');
const passwords = ['1234', 'password', 'Password1', 'P@ssw0rd', 'N0v@Tech!2025'];
passwords.forEach(pw => {
  const result = getPasswordStrength(pw);
  console.log(`  "${pw}": ${result.score}/5 (${result.label})`);
  if (result.feedback.length > 0) {
    result.feedback.forEach(f => console.log(`    - ${f}`));
  }
});
console.log();

// WHY: Each check is a simple regex test that returns true/false.
// We store the checks in an array of objects so we can loop through
// them uniformly. The feedback array collects all failing checks so
// the user knows exactly what to fix.


// ------------------------------------------
// TASK 5: URL parser
// ------------------------------------------

function parseURL(url) {
  const pattern = /^(?:(\w+):\/\/)?([^/:?#]+)?(?::(\d+))?(\/[^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/;
  const match = url.match(pattern);

  if (!match) return null;

  return {
    protocol: match[1] || null,
    domain: match[2] || null,
    port: match[3] || null,
    path: match[4] || null,
    query: match[5] || null,
    fragment: match[6] || null
  };
}

console.log('=== Task 5: URL Parser ===');

const urls = [
  'https://api.novatech.io:8080/v2/users?active=true&role=admin#section1',
  'http://localhost:3000/dashboard',
  'https://novatech.io/about',
  'https://api.novatech.io/search?q=hello',
];

urls.forEach(url => {
  console.log(`  URL: ${url}`);
  const parsed = parseURL(url);
  console.log('  Parsed:', parsed);
  console.log();
});

// WHY: The regex breaks the URL into named groups using capturing parentheses.
// (?: ) is a non-capturing group (for structure, not extraction).
// Each part is optional (using ?) because not all URLs have ports, queries, etc.
// [^/:?#]+ matches domain chars (anything that isn't a URL separator).


// ------------------------------------------
// BONUS: Template engine
// ------------------------------------------

function render(template, data) {
  return template.replace(/\{\{([^}]+)\}\}/g, (fullMatch, expression) => {
    // Split on | to check for filters
    const parts = expression.trim().split('|').map(p => p.trim());
    const path = parts[0];
    const filters = parts.slice(1);

    // Resolve the value from data (supports nested: "user.name")
    let value = path.split('.').reduce((obj, key) => {
      return obj && obj[key] !== undefined ? obj[key] : undefined;
    }, data);

    // Missing values become empty string
    if (value === undefined || value === null) return '';

    // Apply filters
    for (const filter of filters) {
      switch (filter) {
        case 'uppercase':
          value = String(value).toUpperCase();
          break;
        case 'lowercase':
          value = String(value).toLowerCase();
          break;
        case 'currency':
          value = `$${Number(value).toFixed(2)}`;
          break;
        default:
          // Unknown filter — skip
          break;
      }
    }

    return String(value);
  });
}

console.log('=== Bonus: Template Engine ===');

// Simple variables
console.log(render('Hello {{name}}!', { name: 'Alex' }));

// Nested properties
const data = {
  user: { name: 'Jordan Rivera', email: 'j.rivera@novatech.io' },
  order: { id: 'ORD-1234', total: 299.99 },
  company: 'NovaTech Inc.'
};

console.log(render('{{user.name}} placed order {{order.id}}', data));

// Filters
console.log(render('Company: {{company|uppercase}}', data));
console.log(render('Total: {{order.total|currency}}', data));
console.log(render('Email: {{user.email|uppercase}}', data));

// Missing values
console.log(render('Missing: "{{nonexistent}}"', data));

// Full email template
const emailTemplate = `
  Dear {{user.name}},

  Thank you for your order #{{order.id}} with {{company|uppercase}}.

  Your total is {{order.total|currency}}.

  Confirmation sent to: {{user.email|lowercase}}

  Best regards,
  {{company}}
`;

console.log(render(emailTemplate, data));

// WHY: The regex /\{\{([^}]+)\}\}/g matches everything between {{ and }}.
// The capturing group ([^}]+) grabs the expression inside.
// We split on | to separate the variable path from filters.
// The path is resolved using reduce to walk nested objects (user.name).
// Each filter transforms the value. The g flag ensures ALL placeholders
// are replaced, not just the first one.
