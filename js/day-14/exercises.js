// ============================================
// Day 14: "BOSS FIGHT" — Mini Project
// CLI Dungeon Crawler
// ============================================
//
// YOUR MISSION: Build a text-based dungeon crawler game!
// Fill in each section below. When complete, run with: node exercises.js
//
// The game should:
// 1. Create a hero character
// 2. Move through rooms
// 3. Fight enemies
// 4. Collect loot
// 5. Face and defeat the boss
//
// CONCEPTS USED: variables, conditionals, loops, functions, arrays,
// objects, destructuring, spread, closures, callbacks
// ============================================

// -----------------------------------------------
// STEP 1: GAME DATA — Define your world
// -----------------------------------------------

// 1a. Create a `hero` object with:
//   name: pick a name
//   hp: 100
//   maxHp: 100
//   attack: 15
//   defense: 5
//   gold: 0
//   xp: 0
//   inventory: [] (empty array)

// YOUR CODE:
// const hero = { ... };


// 1b. Create an `enemies` object where each key is an enemy ID and the
//     value is an object with: name, hp, attack, defense, xp, gold, loot (string)
//     Include at least 3 enemies + 1 boss.
//     Example:
//     goblin: { name: "Goblin", hp: 30, attack: 8, defense: 2, xp: 10, gold: 5, loot: "Goblin Tooth" }

// YOUR CODE:
// const enemies = { ... };


// 1c. Create a `rooms` array. Each room is an object with:
//     name: string, description: string, enemy: enemy ID string or null, item: string or null
//     Include at least 5 rooms. The last room should have the boss.

// YOUR CODE:
// const rooms = [ ... ];


// 1d. Create an `items` object that defines usable items:
//     Each key is an item name, value is an object with: type, effect (number), description
//     Types: "healing" (restores hp), "weapon" (boosts attack), "armor" (boosts defense)
//     Include at least 3 items.

// YOUR CODE:
// const items = { ... };


// -----------------------------------------------
// STEP 2: HELPER FUNCTIONS
// -----------------------------------------------

// 2a. `rollDice(sides = 20)` — returns a random number from 1 to `sides`

// YOUR CODE:
// const rollDice = ...


// 2b. `displayStatus(hero)` — logs the hero's current stats in a nice format.
//     Use destructuring in the parameter.
//     Format:
//     "=== [name] ==="
//     "HP: [hp]/[maxHp] | ATK: [attack] | DEF: [defense]"
//     "Gold: [gold] | XP: [xp]"
//     "Inventory: [list items or 'empty']"

// YOUR CODE:
// const displayStatus = ...


// 2c. `calculateDamage(attacker, defender)` — returns the damage dealt.
//     Formula: attacker.attack - defender.defense + rollDice(6) - 3
//     Minimum damage should be 1.
//     Use destructuring to pull attack/defense from the objects.

// YOUR CODE:
// const calculateDamage = ...


// -----------------------------------------------
// STEP 3: GAME ACTIONS
// -----------------------------------------------

// 3a. `useItem(hero, itemName)` — uses an item from the hero's inventory.
//     - Find the item in hero.inventory
//     - If not found, log "[itemName] not in inventory!" and return
//     - Remove it from inventory (splice)
//     - Look up the item in the `items` object for its effect
//     - If type is "healing": increase hero.hp (cap at maxHp)
//     - If type is "weapon": increase hero.attack
//     - If type is "armor": increase hero.defense
//     - Log what happened
//     - Return the hero (modified)

// YOUR CODE:
// const useItem = ...


// 3b. `createEnemyInstance(enemyId)` — creates a fresh copy of an enemy.
//     Use spread to copy the enemy data from the `enemies` object.
//     This way, the original enemy template isn't modified when we
//     deal damage during combat.
//     Return the new enemy object, or null if enemyId not found.

// YOUR CODE:
// const createEnemyInstance = ...


// 3c. `combat(hero, enemy)` — simulates a turn-based battle.
//     Use a while loop that continues while both hero and enemy have hp > 0.
//     Each turn:
//       1. Hero attacks enemy (calculate damage, reduce enemy hp)
//       2. Log: "[hero.name] hits [enemy.name] for [damage] damage! ([enemy.hp] HP left)"
//       3. If enemy hp <= 0, break and log victory
//       4. Enemy attacks hero (calculate damage, reduce hero hp)
//       5. Log: "[enemy.name] hits [hero.name] for [damage] damage! ([hero.hp] HP left)"
//       6. If hero hp <= 0, log defeat
//     After combat:
//       If hero won: add enemy's xp and gold to hero, add loot to inventory
//       Return true if hero won, false if hero lost.

// YOUR CODE:
// const combat = ...


// -----------------------------------------------
// STEP 4: ROOM EXPLORATION
// -----------------------------------------------

// 4a. `exploreRoom(hero, room)` — handles everything in a room.
//     1. Log room name and description
//     2. If room has an item:
//        - Log "You found: [item]!"
//        - Add item to hero's inventory
//     3. If room has an enemy:
//        - Create an enemy instance using createEnemyInstance
//        - Log "A [enemy.name] appears!"
//        - Run combat
//        - If hero lost, return false
//     4. If no enemy, log "The room is empty. You rest a moment."
//     5. Return true (hero survived)

// YOUR CODE:
// const exploreRoom = ...


// -----------------------------------------------
// STEP 5: THE GAME LOOP
// -----------------------------------------------

// 5a. `playGame()` — the main game function.
//     1. Log a welcome message / title screen
//     2. Display the hero's starting status
//     3. Loop through each room:
//        - Call exploreRoom
//        - If hero didn't survive, log "GAME OVER" and break
//        - Otherwise, display hero's status after each room
//     4. If hero survived all rooms, log "YOU WIN!" with final stats

// YOUR CODE:
// const playGame = ...


// -----------------------------------------------
// STEP 6: RUN THE GAME!
// -----------------------------------------------

// Uncomment this to play:
// playGame();


// -----------------------------------------------
// BONUS ENHANCEMENTS (if you finish early):
// -----------------------------------------------
// - Add a dodge mechanic (chance to avoid damage based on a dice roll)
// - Add multiple loot drops per enemy
// - Add a shop between rooms where you can buy items with gold
// - Add a leveling system (gain a level every 30 XP, increase stats)
// - Add critical hits (roll a d20, on 18+ deal double damage)
// - Use closures to create a battle log that tracks all events
