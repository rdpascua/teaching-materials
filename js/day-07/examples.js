// ============================================
// Day 7: Learning Your First Spell
// Topic: Functions (Part 1)
// ============================================

// ------------------------------------------
// EXAMPLE 1: Basic function — no parameters
// ------------------------------------------

console.log("--- Basic Function ---");

function battleCry() {
  console.log("FOR CODEVILLE!");
  console.log("The hero charges forward!");
}

// Call the function — "cast the spell"
battleCry();
battleCry();  // reusable! Call it as many times as you want.


// ------------------------------------------
// EXAMPLE 2: Function with parameters
// ------------------------------------------

console.log("\n--- Parameters ---");

function greetHero(name, title) {
  console.log(`Welcome, ${name} the ${title}!`);
}

greetHero("Aria", "Brave");      // "Welcome, Aria the Brave!"
greetHero("Kael", "Wise");       // "Welcome, Kael the Wise!"
greetHero("Zara", "Swift");      // "Welcome, Zara the Swift!"

// Parameters are like fill-in-the-blanks in a spell scroll.
// Each call fills them with different values (arguments).


// ------------------------------------------
// EXAMPLE 3: Return values
// ------------------------------------------

console.log("\n--- Return Values ---");

function calculateDamage(baseDamage, weaponBonus) {
  const total = baseDamage + weaponBonus;
  return total;
}

const hit1 = calculateDamage(20, 10);  // 30
const hit2 = calculateDamage(35, 5);   // 40
const hit3 = calculateDamage(15, 25);  // 40

console.log("Hit 1:", hit1);  // 30
console.log("Hit 2:", hit2);  // 40
console.log("Hit 3:", hit3);  // 40
console.log("Total damage:", hit1 + hit2 + hit3);  // 110

// Without return, the result would be lost inside the function.
// return sends it BACK to where the function was called.


// ------------------------------------------
// EXAMPLE 4: Return exits the function
// ------------------------------------------

console.log("\n--- Return Exits Early ---");

function getStatus(hp) {
  if (hp <= 0) return "Dead";
  if (hp < 30) return "Critical";
  if (hp < 60) return "Wounded";
  return "Healthy";
  // Only ONE of these returns will execute.
  // Once return runs, the function is done.
}

console.log(getStatus(100));  // "Healthy"
console.log(getStatus(45));   // "Wounded"
console.log(getStatus(15));   // "Critical"
console.log(getStatus(0));    // "Dead"


// ------------------------------------------
// EXAMPLE 5: Default parameters
// ------------------------------------------

console.log("\n--- Default Parameters ---");

function heal(target, amount = 25) {
  console.log(`${target} is healed for ${amount} HP!`);
}

heal("Aria", 50);   // "Aria is healed for 50 HP!" — uses provided value
heal("Kael");        // "Kael is healed for 25 HP!" — uses default (25)


function createCharacter(name, hp = 100, role = "villager") {
  console.log(`${name} | HP: ${hp} | Role: ${role}`);
}

createCharacter("Zara", 120, "warrior");  // all provided
createCharacter("Finn", 80);             // role defaults to "villager"
createCharacter("Pip");                   // hp and role use defaults


// ------------------------------------------
// EXAMPLE 6: Function declaration vs expression
// ------------------------------------------

console.log("\n--- Declaration vs Expression ---");

// DECLARATION — hoisted (can be called before it's defined)
console.log(add(2, 3));  // 5 — works even though function is below!

function add(a, b) {
  return a + b;
}

// EXPRESSION — NOT hoisted (must be defined before calling)
// console.log(multiply(2, 3));  // Would crash! ReferenceError

const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(2, 3));  // 6 — works because it's after the definition


// ------------------------------------------
// EXAMPLE 7: Function scope
// ------------------------------------------

console.log("\n--- Function Scope ---");

const heroName = "Aria";  // outer variable

function castSpell() {
  const spellName = "Fireball";  // inner variable — only exists here
  console.log(`${heroName} casts ${spellName}!`);
  // Can see heroName (outer) AND spellName (inner)
}

castSpell();
console.log(`Hero is: ${heroName}`);  // Can see heroName (outer)
// console.log(spellName);  // ReferenceError! spellName doesn't exist out here.

// Think of a function like a one-way mirror:
// Inside can see out. Outside cannot see in.


// ------------------------------------------
// EXAMPLE 8: Functions calling functions
// ------------------------------------------

console.log("\n--- Functions Calling Functions ---");

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function attackRoll(attackerName, baseDamage) {
  const roll = rollDice(6);           // call another function!
  const totalDamage = baseDamage + roll;
  console.log(`${attackerName} rolls a ${roll}, dealing ${totalDamage} total damage!`);
  return totalDamage;
}

const damage1 = attackRoll("Aria", 20);
const damage2 = attackRoll("Kael", 15);
console.log(`Combined damage: ${damage1 + damage2}`);


// ------------------------------------------
// EXAMPLE 9: Functions without return
// ------------------------------------------

console.log("\n--- No Return = undefined ---");

function announce(message) {
  console.log(`*** ${message} ***`);
  // no return statement
}

const result = announce("The quest begins!");
console.log("Return value:", result);  // undefined

// If a function has no return, it returns undefined.
// That's fine for functions that just DO things (like printing).


// ------------------------------------------
// EXAMPLE 10: Building a reusable toolkit
// ------------------------------------------

console.log("\n--- Reusable Toolkit ---");

function formatHP(current, max) {
  const bar = `[${"#".repeat(Math.floor(current / max * 10))}${".".repeat(10 - Math.floor(current / max * 10))}]`;
  return `${bar} ${current}/${max} HP`;
}

function battleReport(heroName, heroHP, heroMax, monsterName, monsterHP, monsterMax) {
  console.log(`  ${heroName}: ${formatHP(heroHP, heroMax)}`);
  console.log(`  ${monsterName}: ${formatHP(monsterHP, monsterMax)}`);
}

console.log("Battle Status:");
battleReport("Aria", 80, 100, "Goblin", 30, 50);
console.log("");
battleReport("Kael", 45, 120, "Dragon", 180, 200);

// formatHP is called INSIDE battleReport — functions are building blocks.
// Write small, focused functions and combine them!
