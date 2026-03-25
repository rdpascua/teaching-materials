# NotebookLM Presentation Guide

This is a **gamified JavaScript bootcamp** called "JavaScript Quest: 0 to Hero in 30 Days."
Students progress through an RPG-style adventure. Days 1-7 are "The Village" arc where
students are beginners learning survival skills in CodeVille.

Generate slides that are fun, visual, and engaging. Use game metaphors throughout.
Each slide should have a clear heading, concise bullet points, and speaker notes.
Think of this as a mix between a coding lesson and an RPG tutorial screen.

---

## Slide 1: Title Slide
**"The Blacksmith's Math" — Day 3 of 30**

- Master the tools that shape and compare your items
- Arc: "The Village" — Forging Your Skills

> Speaker notes: Day 3 — they're settling into CodeVille. Recap quickly: Day 1 was chests (variables), Day 2 was potions (types). Today they visit the Blacksmith and learn to use the tools of the trade — operators. These are the hammers, tongs, and scales of JavaScript.

---

## Slide 2: The Story
**The Blacksmith's Forge**

- The village Blacksmith greets you at the forge with a grin
- "Every adventurer needs to know how to combine metals, weigh gold, and judge quality"
- She hands you four sets of tools: Arithmetic, Comparison, Logical, and Assignment
- "Master these, and you can craft anything."

> Speaker notes: The Blacksmith is a no-nonsense mentor character. She's practical and hands-on. Frame each operator category as a different set of forge tools. Keep the energy upbeat — operators can feel dry, so the game framing helps.

---

## Slide 3: Today's XP Rewards
**Forge your XP!**

| Action | XP |
|---|---|
| Attend class | +10 XP |
| Complete exercises | +20 XP |
| Bonus challenge | +15 XP |
| **Total possible** | **+45 XP** |

- Running total after Day 3: up to 135 XP

> Speaker notes: Quick XP check-in. If you're tracking a leaderboard, update it. Remind students that consistent attendance alone gets them 10 XP per day — showing up matters.

---

## Slide 4: Arithmetic Operators — The Hammer and Anvil
**Shaping numbers into new forms**

- `+` add, `-` subtract, `*` multiply, `/` divide
- `%` modulus (remainder) — essential for "every Nth" logic
- `**` exponentiation — power moves!

```js
let gold = 50 + 25;   // 75
let split = gold / 3;  // 25
let remainder = 10 % 3; // 1 (10 / 3 = 3 remainder 1)
let power = 2 ** 8;    // 256
```

> Speaker notes: These are the most intuitive operators. Spend extra time on modulus — students always struggle with it. Use the analogy: if you have 10 coins and divide among 3 adventurers, each gets 3 and there's 1 left over. Modulus gives you that leftover. It's great for checking even/odd numbers.

---

## Slide 5: Increment and Decrement — Quick Strikes
**Fast ways to add or subtract 1**

- `++` adds 1, `--` subtracts 1
- **Prefix** (`++x`): changes value THEN returns it
- **Postfix** (`x++`): returns value THEN changes it

```js
let hp = 10;
console.log(hp++); // 10 (returns, THEN increments)
console.log(hp);   // 11
console.log(++hp); // 12 (increments, THEN returns)
```

> Speaker notes: Use the quick-strike analogy: postfix is like swinging your sword and then stepping forward, prefix is stepping forward then swinging. The difference matters when the value is used in an expression. For beginners, recommend using them on their own line to avoid confusion.

---

## Slide 6: Comparison Operators — The Scales of Judgment
**Weighing values against each other**

- `===` strict equal, `!==` strict not equal (always use these!)
- `>` greater than, `<` less than
- `>=` greater or equal, `<=` less or equal
- All comparisons return a **boolean** (`true` or `false`)

```js
let myLevel = 5;
myLevel === 5;   // true
myLevel > 3;     // true
myLevel !== 10;  // true
myLevel <= 4;    // false
```

> Speaker notes: The Blacksmith's scales — you put one value on each side and the scale tips to true or false. Reinforce from Day 2: always use `===` over `==`. Ask students to predict each result before you reveal it. These operators are the foundation for tomorrow's conditionals, so they need to be solid here.

---

## Slide 7: Logical Operators — The Three Runes
**Combine conditions like combining enchantments**

- `&&` (AND) — both must be true
- `||` (OR) — at least one must be true
- `!` (NOT) — flips true to false, false to true

```js
let hasKey = true;
let hasMap = false;

hasKey && hasMap;  // false (need BOTH)
hasKey || hasMap;  // true (need ONE)
!hasMap;           // true (flipped)
```

> Speaker notes: These are enchantment runes. AND is like needing both a key AND a map to open a treasure room. OR is like needing either a sword OR an axe to fight. NOT flips the enchantment. Use real game scenarios to make it stick. Briefly mention short-circuit evaluation — && stops at the first false, || stops at the first true.

---

## Slide 8: Assignment Operators — Quick Forging
**Shorthand for updating values**

- `=` assign, `+=` add and assign, `-=` subtract and assign
- Also: `*=`, `/=`, `%=`, `**=`
- These are shortcuts — same result, less typing

```js
let gold = 100;
gold += 50;  // gold = gold + 50 → 150
gold -= 20;  // gold = gold - 20 → 130
gold *= 2;   // gold = gold * 2 → 260
```

> Speaker notes: These are quick-forge shortcuts. Instead of writing the long form, you combine the operation with assignment. Walk through each one and show the expanded version. Students find these easy once they see the pattern. Emphasize that += is especially common with strings too (concatenation).

---

## Slide 9: Operator Precedence — The Forging Order
**Which tool fires first?**

- JavaScript follows math rules: parentheses first, then `**`, then `*`/`/`, then `+`/`-`
- Logical: `!` first, then `&&`, then `||`
- When in doubt, use parentheses to be explicit!

```js
let result = 2 + 3 * 4;       // 14 (not 20)
let clear = (2 + 3) * 4;      // 20
let logic = true || false && false; // true (&& first)
```

> Speaker notes: Don't try to memorize the full precedence table — that's a trap. Teach the rule of thumb: use parentheses whenever the order isn't obvious. Show the first example and ask students what they expect. Many will say 20. Reveal 14 and explain multiplication happens first, just like in regular math.

---

## Slide 10: Live Demo
**The Blacksmith's Workshop**

- Build a "damage calculator" live in the console:
  - Base damage, critical hit multiplier, armor reduction
  - `let finalDamage = (baseDmg * critMultiplier) - armor;`
- Show operator precedence surprises
- Demonstrate `%` for even/odd checking: `number % 2 === 0`
- Ask students: "How would you calculate if a player can afford an item?"

> Speaker notes: Code along with students. Start with simple math, then build up to the damage formula. The even/odd check is a must-teach — they'll use modulus everywhere. End by posing a problem and letting students try to write the expression themselves. Spend 5-7 minutes.

---

## Slide 11: Battle Time (Exercise)
**Quest: The Blacksmith's Trials**

- **Exercise 1:** Evaluate 10 expressions by hand, then verify in console
- **Exercise 2:** Build a tip calculator using arithmetic and assignment operators
- **Exercise 3:** Write comparison expressions for a game shop (can afford? high enough level?)
- **Bonus:** Create a "loot splitter" that divides gold evenly and shows the remainder

> Speaker notes: The hand-evaluation exercise is critical — it builds operator intuition. The tip calculator is a classic real-world problem. The game shop exercise connects to tomorrow's conditionals. Give 15-20 minutes. Walk around and check on the modulus usage in the bonus.

---

## Slide 12: Quick Reference
**Blacksmith's Tool Rack**

| Category | Operators | Returns |
|---|---|---|
| Arithmetic | `+  -  *  /  %  **` | Number |
| Increment | `++  --` | Number |
| Comparison | `===  !==  >  <  >=  <=` | Boolean |
| Logical | `&&  \|\|  !` | Boolean* |
| Assignment | `=  +=  -=  *=  /=  %=` | Value |

*Logical operators actually return one of the operand values, not always a boolean.

> Speaker notes: Quick overview of all operator families. The asterisk on logical operators is a sneak peek at a more advanced concept (short-circuit returning the actual value). Don't go deep on it now — just plant the seed. Encourage students to bookmark this reference.

---

## Slide 13: Next Quest Preview
**Day 4: "The Scroll of Words" — Strings and Template Literals**

- Tomorrow you learn to read, write, and manipulate magical scrolls
- String methods, template literals, and text wizardry await

> Speaker notes: Tease tomorrow: "The Scribe's Guild is next door to the Blacksmith. Tomorrow, you learn the art of words — how to write on scrolls, combine messages, search for hidden text, and craft dynamic sentences. Bring your reading glasses!" End class with XP update.
