# Day 14: "BOSS FIGHT" — Review & Mini Project

## The Forest Arc - FINALE

**Estimated Time: 25-30 minutes**

---

## Story Intro (3 minutes)

> *You've journeyed through The Forest, upgraded your arrows, explored hidden caves, filled your inventory bag, sorted your loot, studied the Monster Field Guide, and unpacked ancient treasures. Now, the trees part to reveal a dark clearing. The ground trembles.*
>
> *The Act 2 Boss has arrived.*
>
> *To defeat it, you'll need EVERYTHING you've learned: variables, conditionals, loops, functions, arrays, objects, destructuring, and more. This is not a drill — this is the real thing.*
>
> *Today, you build a **CLI Dungeon Crawler** — a text-based adventure game that tests every concept from Days 1-13.*

---

## Quick Review (12 minutes)

Run through each concept with a one-liner reminder and quick example. Students should follow along and call out the answers.

### Days 1-3: Variables, Operators, Strings

```
let hp = 100;              // let for things that change
const MAX_HP = 100;        // const for things that don't
hp -= 25;                  // operators
`HP: ${hp}/${MAX_HP}`;     // template literals
```

### Day 4: Conditionals

```
if (hp <= 0) { ... }
else if (hp < 25) { ... }
else { ... }
// Ternary: const status = hp > 0 ? "alive" : "dead";
```

### Days 5-6: Loops

```
for (let i = 0; i < enemies.length; i++) { ... }
for (const enemy of enemies) { ... }
while (boss.isAlive()) { ... }
```

### Day 7: Functions

```
function attack(target, damage) { return `${target} takes ${damage}!`; }
const heal = (amount = 25) => hp = Math.min(MAX_HP, hp + amount);
```

### Day 8: Arrow Functions, Rest, Callbacks

```
const roll = () => Math.floor(Math.random() * 20) + 1;
const sumAll = (...nums) => nums.reduce((a, b) => a + b, 0);
```

### Day 9: Scope & Closures

```
// Variables declared in a function stay in that function.
// Closures remember their outer scope.
const makeCounter = () => { let n = 0; return () => ++n; };
```

### Days 10-11: Arrays

```
inventory.push("Sword");        // Add
inventory.splice(idx, 1);       // Remove at index
inventory.filter(i => i.value > 10);  // Filter
inventory.reduce((sum, i) => sum + i.value, 0);  // Sum
```

### Day 12: Objects

```
const hero = { name: "Aria", hp: 100, attack() { return this.name + " attacks!"; } };
Object.keys(hero);  // ["name", "hp", "attack"]
```

### Day 13: Destructuring & Spread

```
const { name, hp } = hero;            // Object destructuring
const [first, ...rest] = inventory;    // Array rest
const merged = { ...defaults, ...overrides };  // Spread merge
```

---

## Mini Project Introduction (5 minutes)

### The Dungeon Crawler

Today's exercise IS the project. Students will build a text-based dungeon crawler game that runs in the terminal.

**Game features to implement:**

1. **Character creation** — name, class selection (with stat differences)
2. **Room exploration** — move between rooms, discover items, encounter enemies
3. **Combat system** — turn-based fighting with attack/defend/use item options
4. **Inventory management** — pick up items, use potions, equip weapons
5. **Win/lose conditions** — defeat the boss or run out of HP

**Concepts used:**
- Variables & operators (stats, damage calculation)
- Conditionals (combat logic, room checks)
- Loops (game loop, combat loop)
- Functions (actions, damage calculation)
- Arrays (inventory, room list)
- Objects (player, enemies, rooms)
- Destructuring & spread (clean data handling)
- Closures (state management)

### How to approach it:

1. Start with the data structures (player object, rooms, enemies)
2. Build the game functions one at a time
3. Connect them with a game loop
4. Test frequently with `node exercises.js`

---

## Work Time (10-15 minutes)

Students work on the dungeon crawler. Instructor circulates to help.

**Milestones to aim for:**
1. Player object with stats -- (5 min)
2. At least 3 rooms with descriptions -- (3 min)
3. A working combat function -- (5 min)
4. A game loop that ties it together -- (5 min)

---

## Exercises Handout

The `exercises.js` file IS the mini project scaffold. It has:
- Data structures pre-defined
- Function stubs with clear instructions
- A game loop outline
- Comments guiding each step

The `solutions.js` file has the completed game.

---

## Key Takeaways

- Every concept from Days 1-13 has a real use in building software
- Games are a great way to practice because they need ALL these concepts
- Breaking a big project into small functions makes it manageable
- Test each piece as you build it — don't write everything then test
