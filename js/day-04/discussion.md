# Day 4: The Scroll of Words

## Quest: Learn to read, decode, and manipulate text with string methods

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> While exploring the dusty back room of Madame Vex's shop, you knock over a
> stack of crates and discover a bundle of **ancient scrolls**. The ink is
> faded, words are scrambled, some letters are missing.
>
> "Ah, the **Scroll of Words**," Madame Vex says, peering over your shoulder.
> "Left behind by the scribes who built this village. Every message, every
> spell incantation, every quest description — they're all **strings**."
>
> She hands you a magnifying glass (`.toUpperCase()`), a pair of scissors
> (`.slice()`), and a decoder ring (`.replace()`).
>
> "If you can read these scrolls, you can read anything in this world."

---

## THE SPELL — Core Concepts (~10 min)

### Creating Strings — Three Ways

```js
const single = 'Healing Potion';        // single quotes
const double = "Fire Scroll";           // double quotes
const backtick = `Ice Shard`;           // template literal (backticks)
```

All three create strings. Backticks have superpowers (template literals).

---

### String Length

```js
const spell = "Fireball";
console.log(spell.length);  // 8 — counts every character
```

> Note: `.length` is a **property**, not a method — no parentheses!

---

### Essential String Methods

**Changing case:**

```js
const shout = "help me";
console.log(shout.toUpperCase());  // "HELP ME"
console.log(shout.toLowerCase());  // "help me"

const mixed = "ArIa ThE bRaVe";
console.log(mixed.toLowerCase());  // "aria the brave"
```

**Searching inside strings:**

```js
const quest = "Defeat the dragon in the dark dungeon";

console.log(quest.includes("dragon"));   // true
console.log(quest.includes("unicorn"));  // false

console.log(quest.indexOf("dragon"));    // 11 (starts at index 11)
console.log(quest.indexOf("unicorn"));   // -1 (not found)
```

**Extracting parts:**

```js
const scroll = "The ancient code of heroes";

console.log(scroll.slice(4, 11));   // "ancient"  (from index 4 to 10)
console.log(scroll.slice(4));       // "ancient code of heroes" (4 to end)
console.log(scroll.slice(-6));      // "heroes" (last 6 characters)
```

**Splitting and trimming:**

```js
const inventory = "sword,shield,potion,bow";
const items = inventory.split(",");
console.log(items);  // ["sword", "shield", "potion", "bow"]

const messy = "   Aria   ";
console.log(messy.trim());  // "Aria" — removes whitespace from both ends
```

**Replacing:**

```js
const prophecy = "The chosen one will save the village";
const updated = prophecy.replace("chosen one", "brave coder");
console.log(updated);  // "The brave coder will save the village"
```

**Repeating:**

```js
const chant = "Ha";
console.log(chant.repeat(3));  // "HaHaHa"
```

---

### Template Literals — "The Scribe's Best Tool"

Backtick strings let you **embed expressions** inside `${}`:

```js
const hero = "Aria";
const level = 7;

// Old way — concatenation (ugly)
const old = "Hero: " + hero + " | Level: " + level;

// New way — template literals (clean)
const modern = `Hero: ${hero} | Level: ${level}`;

// You can put ANY expression inside ${}
console.log(`Damage: ${10 + 5 * 2}`);  // "Damage: 20"
console.log(`Shout: ${hero.toUpperCase()}!`);  // "Shout: ARIA!"
```

Template literals also support **multi-line strings**:

```js
const sign = `
  Welcome to CodeVille!
  Population: 237
  Danger Level: Mild
`;
```

---

### Escape Characters

When you need special characters inside a string:

```js
const quote = "The wizard said \"Use the force\"";  // escaped quotes
const path = "C:\\Users\\Hero";                      // escaped backslash
const multiLine = "Line 1\nLine 2";                  // newline
const tabbed = "Name:\tAria";                        // tab
```

---

### Strings are Immutable

**Important:** String methods return a NEW string — they never change the
original.

```js
const name = "aria";
name.toUpperCase();       // returns "ARIA" but doesn't change name
console.log(name);        // still "aria"

const upper = name.toUpperCase();  // save the result!
console.log(upper);       // "ARIA"
```

---

## THE BATTLE — Live Demo (~10 min)

Walk through `examples.js` together. Key demo moments:

1. Show `.length` on different strings including emoji (they can be weird!)
2. Chain methods: `"  hello  ".trim().toUpperCase()`
3. Use `.split()` to break a comma-separated string into an array
4. Build a formatted message with template literals
5. Show that strings are immutable — methods return new strings

---

## THE LOOT — Exercises (~5 min)

Hand out `exercises.js`. Students work through 5 bite-sized problems.

**Bonus Challenge (+15 XP):**
Build a scroll decoder that applies multiple string transformations.

---

## Quick Reference

| Method | What it does | Returns |
|--------|-------------|---------|
| `.length` | Character count | Number |
| `.toUpperCase()` | ALL CAPS | New string |
| `.toLowerCase()` | all lowercase | New string |
| `.includes(str)` | Contains substring? | Boolean |
| `.indexOf(str)` | Position of substring | Number (-1 if not found) |
| `.slice(start, end)` | Extract portion | New string |
| `.split(separator)` | Break into array | Array |
| `.trim()` | Remove edge whitespace | New string |
| `.replace(old, new)` | Swap first match | New string |
| `.repeat(n)` | Repeat n times | New string |
