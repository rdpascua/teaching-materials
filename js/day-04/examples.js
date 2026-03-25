// ============================================
// Day 4: The Scroll of Words
// Topic: Strings & String Methods
// ============================================

// ------------------------------------------
// EXAMPLE 1: Creating strings — three ways
// ------------------------------------------

const single = 'Healing Potion';
const double = "Fire Scroll";
const backtick = `Ice Shard`;

console.log("--- Creating Strings ---");
console.log(single);    // "Healing Potion"
console.log(double);    // "Fire Scroll"
console.log(backtick);  // "Ice Shard"

// All three are the same type:
console.log(typeof single === typeof backtick);  // true


// ------------------------------------------
// EXAMPLE 2: String length
// ------------------------------------------

console.log("\n--- String Length ---");

const spell = "Fireball";
console.log(spell.length);  // 8

const empty = "";
console.log(empty.length);  // 0

const spaces = "  hi  ";
console.log(spaces.length);  // 6 — spaces count!


// ------------------------------------------
// EXAMPLE 3: Changing case
// ------------------------------------------

console.log("\n--- Case Methods ---");

const whisper = "help me, hero";
console.log(whisper.toUpperCase());  // "HELP ME, HERO"

const yell = "STOP RIGHT THERE";
console.log(yell.toLowerCase());     // "stop right there"

// Useful for case-insensitive comparison:
const userInput = "FireBall";
const spellName = "fireball";
console.log(userInput.toLowerCase() === spellName.toLowerCase()); // true


// ------------------------------------------
// EXAMPLE 4: Searching in strings
// ------------------------------------------

console.log("\n--- Searching ---");

const questLog = "Defeat the dragon in the dark dungeon";

// .includes() — does it contain this text?
console.log(questLog.includes("dragon"));    // true
console.log(questLog.includes("unicorn"));   // false
console.log(questLog.includes("Dragon"));    // false — case sensitive!

// .indexOf() — WHERE is the text? (-1 if not found)
console.log(questLog.indexOf("dragon"));     // 11
console.log(questLog.indexOf("the"));        // 7 (first occurrence)
console.log(questLog.indexOf("unicorn"));    // -1

// .startsWith() and .endsWith()
console.log(questLog.startsWith("Defeat"));  // true
console.log(questLog.endsWith("dungeon"));   // true


// ------------------------------------------
// EXAMPLE 5: Extracting with .slice()
// ------------------------------------------

console.log("\n--- Slice (The Scissors) ---");

const scroll = "The ancient code of heroes";
//              0123456789...

console.log(scroll.slice(4, 11));    // "ancient"
console.log(scroll.slice(4));        // "ancient code of heroes"
console.log(scroll.slice(-6));       // "heroes" (last 6)
console.log(scroll.slice(0, 3));     // "The"

// Slice does NOT change the original:
console.log(scroll);  // "The ancient code of heroes" — unchanged!


// ------------------------------------------
// EXAMPLE 6: Splitting and joining
// ------------------------------------------

console.log("\n--- Split & Join ---");

const lootDrop = "sword,shield,potion,gold,gem";
const items = lootDrop.split(",");
console.log(items);          // ["sword", "shield", "potion", "gold", "gem"]
console.log(items.length);   // 5
console.log(items[0]);       // "sword"

// Split on spaces:
const battleCry = "For the village!";
const words = battleCry.split(" ");
console.log(words);  // ["For", "the", "village!"]

// Split every character:
const code = "HERO";
const letters = code.split("");
console.log(letters);  // ["H", "E", "R", "O"]


// ------------------------------------------
// EXAMPLE 7: Trim, replace, repeat
// ------------------------------------------

console.log("\n--- Trim, Replace, Repeat ---");

// .trim() — clean up messy input
const messy = "   Aria the Brave   ";
console.log(messy.trim());       // "Aria the Brave"
console.log(messy.trimStart());  // "Aria the Brave   "
console.log(messy.trimEnd());    // "   Aria the Brave"

// .replace() — swap text (first match only!)
const prophecy = "The hero will defeat the hero's nemesis";
console.log(prophecy.replace("hero", "warrior"));
// "The warrior will defeat the hero's nemesis" — only first "hero" changed!

// .replaceAll() — swap ALL matches
console.log(prophecy.replaceAll("hero", "warrior"));
// "The warrior will defeat the warrior's nemesis"

// .repeat() — say it again!
const cheer = "Huzzah! ";
console.log(cheer.repeat(3));  // "Huzzah! Huzzah! Huzzah! "


// ------------------------------------------
// EXAMPLE 8: Template literals — the modern way
// ------------------------------------------

console.log("\n--- Template Literals ---");

const hero = "Aria";
const level = 7;
const weapon = "Flame Sword";

// Old way — string concatenation (messy)
const oldWay = "Hero: " + hero + " | Level: " + level + " | Weapon: " + weapon;
console.log(oldWay);

// New way — template literals (clean)
const newWay = `Hero: ${hero} | Level: ${level} | Weapon: ${weapon}`;
console.log(newWay);

// Expressions inside ${}
console.log(`Next level: ${level + 1}`);
console.log(`Shout: ${hero.toUpperCase()}!!!`);
console.log(`Has sword? ${weapon.includes("Sword")}`);

// Multi-line strings:
const statusCard = `
╔══════════════════════╗
║  Hero: ${hero.padEnd(13)}║
║  Level: ${String(level).padEnd(12)}║
║  Weapon: ${weapon.padEnd(11)}║
╚══════════════════════╝`;

console.log(statusCard);


// ------------------------------------------
// EXAMPLE 9: Escape characters
// ------------------------------------------

console.log("\n--- Escape Characters ---");

console.log("The wizard said \"Use the force\"");  // escaped quotes
console.log('It\'s dangerous to go alone!');         // escaped apostrophe
console.log("Line 1\nLine 2");                       // newline
console.log("Name:\tAria");                           // tab
console.log("Backslash: \\");                         // literal backslash


// ------------------------------------------
// EXAMPLE 10: Chaining methods
// ------------------------------------------

console.log("\n--- Method Chaining ---");

const rawInput = "   FIRE ball   ";
const cleaned = rawInput.trim().toLowerCase().replace("fire ball", "fireball");
console.log(cleaned);  // "fireball"

// Each method returns a new string, so you can call the next method on it.
// Read left to right:
// "   FIRE ball   "  →  trim()  →  "FIRE ball"
//                     →  toLowerCase()  →  "fire ball"
//                     →  replace(...)  →  "fireball"
