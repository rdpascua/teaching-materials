// ============================================
// Day 27: Regular Expressions
// Ticket: NOVA-106 — Validate form inputs
// ============================================


// ------------------------------------------
// EXAMPLE 1: Creating and testing patterns
// ------------------------------------------

console.log('=== Example 1: Basic Pattern Matching ===');

// Literal syntax
const hasAt = /@/;
console.log('Has @:', hasAt.test('alex@novatech.io'));  // true
console.log('Has @:', hasAt.test('not an email'));       // false

// Constructor syntax (useful for dynamic patterns)
const searchTerm = 'NovaTech';
const dynamicPattern = new RegExp(searchTerm, 'i'); // case insensitive
console.log('Dynamic:', dynamicPattern.test('Welcome to novatech'));  // true
console.log();


// ------------------------------------------
// EXAMPLE 2: Character classes
// ------------------------------------------

console.log('=== Example 2: Character Classes ===');

const hasDigit = /\d/;        // any digit
const hasLetter = /[a-zA-Z]/; // any letter
const hasSpecial = /[!@#$%^&*]/;

const password = 'Nov@Tech2025';
console.log(`"${password}" contains:`);
console.log('  Digit?', hasDigit.test(password));      // true
console.log('  Letter?', hasLetter.test(password));    // true
console.log('  Special?', hasSpecial.test(password));  // true

const employeeId = 'NT-00042';
console.log(`"${employeeId}" matches ID format?`, /^NT-\d{5}$/.test(employeeId)); // true
console.log(`"NT-42" matches?`, /^NT-\d{5}$/.test('NT-42'));                       // false (only 2 digits)
console.log();


// ------------------------------------------
// EXAMPLE 3: Quantifiers
// ------------------------------------------

console.log('=== Example 3: Quantifiers ===');

console.log('/\\d+/ on "abc":', /\d+/.test('abc'));       // false (0 digits)
console.log('/\\d+/ on "a1b":', /\d+/.test('a1b'));       // true (1+ digits)
console.log('/\\d{3}/ on "12":', /\d{3}/.test('12'));     // false (need 3)
console.log('/\\d{3}/ on "123":', /\d{3}/.test('123'));   // true
console.log('/\\d{2,4}/ on "1":', /\d{2,4}/.test('1'));   // false
console.log('/\\d{2,4}/ on "12":', /\d{2,4}/.test('12')); // true

// Optional: ? means 0 or 1
const colorPattern = /colou?r/;  // "color" or "colour"
console.log('color:', colorPattern.test('color'));   // true
console.log('colour:', colorPattern.test('colour')); // true
console.log();


// ------------------------------------------
// EXAMPLE 4: Anchors — start and end
// ------------------------------------------

console.log('=== Example 4: Anchors ===');

// Without anchors: matches ANYWHERE in the string
console.log('/\\d{5}/ on "ZIP: 90210 here":', /\d{5}/.test('ZIP: 90210 here')); // true

// With anchors: must match the ENTIRE string
console.log('/^\\d{5}$/ on "90210":', /^\d{5}$/.test('90210'));         // true
console.log('/^\\d{5}$/ on "ZIP: 90210":', /^\d{5}$/.test('ZIP: 90210')); // false

// Word boundaries
const wordBoundary = /\btech\b/i;
console.log('"NovaTech" has word "tech"?', wordBoundary.test('NovaTech'));        // false
console.log('"Nova Tech" has word "tech"?', wordBoundary.test('Nova Tech'));      // true
console.log('"tech lead" has word "tech"?', wordBoundary.test('tech lead'));      // true
console.log();


// ------------------------------------------
// EXAMPLE 5: Flags
// ------------------------------------------

console.log('=== Example 5: Flags ===');

// Case insensitive
console.log('/novatech/ on "NovaTech":', /novatech/.test('NovaTech'));    // false
console.log('/novatech/i on "NovaTech":', /novatech/i.test('NovaTech')); // true

// Global — find ALL matches
const text = 'Email alex@nova.io or sam@nova.io for info';
console.log('First match:', text.match(/\w+@\w+\.\w+/));    // first only
console.log('All matches:', text.match(/\w+@\w+\.\w+/g));   // both
console.log();


// ------------------------------------------
// EXAMPLE 6: .match(), .replace(), .search()
// ------------------------------------------

console.log('=== Example 6: String Methods ===');

const logLine = '[2025-06-15 14:30:22] ERROR: User "admin" failed login (IP: 192.168.1.42)';

// .match() — extract data
const timestamp = logLine.match(/\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/);
console.log('Timestamp:', timestamp[0]);

const ip = logLine.match(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/);
console.log('IP Address:', ip[0]);

const username = logLine.match(/"(\w+)"/);
console.log('Username:', username[1]); // capturing group

// .replace() — transform text
const masked = logLine.replace(/\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/, 'xxx.xxx.xxx.xxx');
console.log('Masked:', masked);

// .search() — find position
console.log('ERROR at position:', logLine.search(/ERROR/));  // index
console.log('WARNING at position:', logLine.search(/WARNING/)); // -1 (not found)
console.log();


// ------------------------------------------
// EXAMPLE 7: Common validation patterns
// ------------------------------------------

console.log('=== Example 7: Validation Patterns ===');

// Email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log('Email validation:');
console.log('  alex@novatech.io:', emailPattern.test('alex@novatech.io'));  // true
console.log('  user@domain.co.uk:', emailPattern.test('user@domain.co.uk')); // true
console.log('  bad-email:', emailPattern.test('bad-email'));                  // false
console.log('  @missing.com:', emailPattern.test('@missing.com'));            // false

// Phone validation (US formats)
const phonePattern = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
console.log('\nPhone validation:');
console.log('  (555) 123-4567:', phonePattern.test('(555) 123-4567'));     // true
console.log('  555-123-4567:', phonePattern.test('555-123-4567'));         // true
console.log('  5551234567:', phonePattern.test('5551234567'));             // true
console.log('  +1 555-123-4567:', phonePattern.test('+1 555-123-4567')); // true
console.log('  123:', phonePattern.test('123'));                           // false

// Password strength
const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
console.log('\nPassword strength:');
console.log('  Nov@Tech2025:', strongPassword.test('Nov@Tech2025'));    // true
console.log('  weakpass:', strongPassword.test('weakpass'));             // false
console.log('  Short1!:', strongPassword.test('Short1!'));              // false (< 8 chars)
console.log();


// ------------------------------------------
// EXAMPLE 8: Replace with functions
// ------------------------------------------

console.log('=== Example 8: Dynamic Replace ===');

// Mask sensitive data in logs
const apiLog = 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xyz';
const maskedLog = apiLog.replace(/Bearer \S+/, 'Bearer [REDACTED]');
console.log('Masked log:', maskedLog);

// Format employee IDs
const rawIds = 'Employees: 42, 7, 156, 3';
const formatted = rawIds.replace(/\d+/g, match => `NT-${match.padStart(5, '0')}`);
console.log('Formatted:', formatted);

// Censor profanity (simplified)
const message = 'This is a darn bad heck of a situation';
const censored = message.replace(/\b(darn|heck|bad)\b/gi, match => '*'.repeat(match.length));
console.log('Censored:', censored);
console.log();


// ------------------------------------------
// EXAMPLE 9: Capturing groups
// ------------------------------------------

console.log('=== Example 9: Capturing Groups ===');

// Extract parts of a date
const dateStr = '2025-06-15';
const dateMatch = dateStr.match(/^(\d{4})-(\d{2})-(\d{2})$/);
if (dateMatch) {
  console.log('Full match:', dateMatch[0]);
  console.log('Year:', dateMatch[1]);
  console.log('Month:', dateMatch[2]);
  console.log('Day:', dateMatch[3]);
}

// Named capturing groups
const logEntry = '192.168.1.42 - alex [15/Jun/2025] "GET /api/users"';
const logPattern = /^(?<ip>\S+) - (?<user>\S+) \[(?<date>[^\]]+)\] "(?<request>[^"]+)"/;
const parsed = logEntry.match(logPattern);
if (parsed) {
  console.log('IP:', parsed.groups.ip);
  console.log('User:', parsed.groups.user);
  console.log('Date:', parsed.groups.date);
  console.log('Request:', parsed.groups.request);
}
console.log();


// ------------------------------------------
// EXAMPLE 10: Complete form validator
// ------------------------------------------

console.log('=== Example 10: NovaTech Form Validator ===');

const FormValidator = {
  validateEmail(email) {
    if (!email || email.trim() === '') {
      return { valid: false, error: 'Email is required' };
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return { valid: false, error: 'Invalid email format' };
    }
    return { valid: true, error: null };
  },

  validatePhone(phone) {
    if (!phone || phone.trim() === '') {
      return { valid: false, error: 'Phone is required' };
    }
    const cleaned = phone.replace(/[\s.-]/g, '');
    if (!/^\+?1?\d{10}$/.test(cleaned.replace(/[()]/g, ''))) {
      return { valid: false, error: 'Invalid phone format. Use: (555) 123-4567' };
    }
    return { valid: true, error: null };
  },

  validatePassword(password) {
    const errors = [];
    if (!password || password.length < 8) errors.push('Must be at least 8 characters');
    if (!/[a-z]/.test(password)) errors.push('Must contain a lowercase letter');
    if (!/[A-Z]/.test(password)) errors.push('Must contain an uppercase letter');
    if (!/\d/.test(password)) errors.push('Must contain a number');

    return {
      valid: errors.length === 0,
      error: errors.length > 0 ? errors.join('; ') : null
    };
  },

  sanitize(input) {
    return input
      .trim()                          // remove leading/trailing whitespace
      .replace(/<[^>]*>/g, '')         // strip HTML tags
      .replace(/\s+/g, ' ');          // collapse multiple spaces
  }
};

// Test the validator
const tests = [
  { field: 'email', value: 'alex@novatech.io' },
  { field: 'email', value: 'not-an-email' },
  { field: 'phone', value: '(555) 123-4567' },
  { field: 'phone', value: '123' },
  { field: 'password', value: 'Nov@Tech2025' },
  { field: 'password', value: 'weak' }
];

tests.forEach(({ field, value }) => {
  const method = `validate${field.charAt(0).toUpperCase() + field.slice(1)}`;
  const result = FormValidator[method](value);
  const icon = result.valid ? 'PASS' : 'FAIL';
  console.log(`  [${icon}] ${field}: "${value}" ${result.error ? '— ' + result.error : ''}`);
});

console.log('\nSanitize:');
console.log('  Input:  "  <b>Hello</b>   world   "');
console.log('  Output:', `"${FormValidator.sanitize('  <b>Hello</b>   world   ')}"`);
