# Day 3: The Blacksmith's Math

## Quest: Master operators to calculate damage, compare weapons, and make decisions

**XP Reward:** +10 attend | +20 exercise | +15 bonus

---

## THE STORY (~5 min)

> After identifying your potions, you wander to the far end of CodeVille where
> hammer strikes ring against hot metal. **Gorrik the Blacksmith** stands at his
> forge, sweat dripping, muscles like boulders.
>
> "Every weapon I craft is mathematics," he growls. "Damage per second?
> Arithmetic. Which sword is stronger? Comparison. Should you dual-wield or
> use a shield? Logic."
>
> He drops three scrolls on the anvil:
>
> - **The Red Scroll** — Arithmetic operators (+, -, *, /, %, **)
> - **The Blue Scroll** — Comparison operators (==, ===, <, >, etc.)
> - **The Green Scroll** — Logical operators (&&, ||, !)
>
> "Master these," Gorrik says, "and you'll know exactly how much damage your
> blade deals before it ever touches a monster."

---

## THE SPELL — Core Concepts (~10 min)

### Arithmetic Operators — "The Damage Calculator"

These do math. Just like a calculator, but with code.

```js
const baseDamage = 25;
const critBonus = 10;

console.log(baseDamage + critBonus);  // 35  — Addition
console.log(baseDamage - critBonus);  // 15  — Subtraction
console.log(baseDamage * 2);          // 50  — Multiplication
console.log(baseDamage / 5);          // 5   — Division
console.log(baseDamage % 10);         // 5   — Modulo (remainder)
console.log(baseDamage ** 2);         // 625 — Exponentiation (power)
```

**Modulo (`%`)** is the "remainder" operator. Think of it as: "If I divide
evenly, what's left over?"

```js
10 % 3  // 1   (10 / 3 = 3 remainder 1)
15 % 5  // 0   (15 / 5 = 3 remainder 0 — divides evenly!)
7 % 2   // 1   (odd number — useful for checking even/odd!)
```

---

### Comparison Operators — "The Weapon Appraiser"

These compare two values and return `true` or `false`.

```js
const swordPower = 30;
const axePower = 45;

swordPower > axePower    // false — sword is weaker
swordPower < axePower    // true  — sword is less than axe
swordPower >= 30         // true  — greater than OR equal to
axePower <= 44           // false — not less than or equal to 44
swordPower !== axePower  // true  — they're not equal
```

**Remember from Day 2:**
- `==` coerces types (loose) — avoid this
- `===` checks type AND value (strict) — always use this
- `!=` vs `!==` — same idea

---

### Logical Operators — "The Battle Strategist"

These combine boolean conditions to make complex decisions.

**AND (`&&`)** — Both sides must be true:

```js
const hasWeapon = true;
const hasArmor = true;

hasWeapon && hasArmor    // true — you have BOTH, ready to fight!
hasWeapon && false       // false — missing one, not ready
```

**OR (`||`)** — At least one side must be true:

```js
const hasPotion = false;
const hasSpell = true;

hasPotion || hasSpell    // true — you have at least one healing option
false || false           // false — nothing at all, you're in trouble
```

**NOT (`!`)** — Flips true to false, false to true:

```js
const isTrapped = true;
!isTrapped               // false — NOT trapped
!!isTrapped              // true  — double NOT = back to original
```

---

### Assignment Operators — "The Quick Shortcuts"

Instead of writing `health = health + 10`, you can use shortcuts:

```js
let gold = 100;

gold += 50;   // gold = gold + 50   → 150
gold -= 20;   // gold = gold - 20   → 130
gold *= 2;    // gold = gold * 2    → 260
gold /= 4;    // gold = gold / 4    → 65
gold %= 10;   // gold = gold % 10   → 5
gold **= 3;   // gold = gold ** 3   → 125
```

> **Pro tip:** These shortcuts are called "compound assignment operators."
> You'll use `+=` and `-=` constantly in real code.

---

### Increment & Decrement

```js
let arrows = 10;

arrows++;     // arrows = arrows + 1 → 11
arrows--;     // arrows = arrows - 1 → 10

// Prefix vs Postfix (tricky edge case):
let a = 5;
console.log(a++);  // prints 5, THEN increments to 6
console.log(++a);  // increments to 7 FIRST, then prints 7
```

---

### Operator Precedence — "Order of Operations"

Just like math class: `* / %` happen before `+ -`.

```js
const totalDamage = 10 + 5 * 3;    // 25, not 45! (* goes first)
const forced = (10 + 5) * 3;       // 45 — parentheses override
```

> **Rule of thumb:** When in doubt, use parentheses to make your
> intention clear. Future-you will thank present-you.

---

## THE BATTLE — Live Demo (~10 min)

Walk through `examples.js` together. Run each snippet in the console or
Node.js and predict the output before hitting Enter.

Key demo moments:
1. Build a damage calculator: base + weapon bonus * crit multiplier
2. Show modulo for even/odd checking
3. Chain comparisons to rank weapons
4. Combine logical operators: "Can the hero fight?"
5. Show `+=` and `-=` in a simulated battle turn

---

## THE LOOT — Exercises (~5 min)

Hand out `exercises.js`. Students work through 5 bite-sized problems.

**Bonus Challenge (+15 XP):**
Build a mini damage calculator using all operator types.

---

## Quick Reference

| Category | Operators |
|----------|-----------|
| Arithmetic | `+`, `-`, `*`, `/`, `%`, `**` |
| Comparison | `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=` |
| Logical | `&&`, `\|\|`, `!` |
| Assignment | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=` |
| Increment/Decrement | `++`, `--` |
