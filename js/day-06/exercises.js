// ============================================
// Day 6 Exercises: The Training Grounds
// ============================================
// Instructions: Read each problem, write your answer, then run the file.


// ------------------------------------------
// EXERCISE 1: Warmup Reps
// Use a for loop to print "Push-up #X" for reps 1 through 10.
// ------------------------------------------

// Expected output:
// Push-up #1
// Push-up #2
// ... (all the way to 10)
// Push-up #10

// Write your code here:



// ------------------------------------------
// EXERCISE 2: Countdown Timer
// Use a while loop to count down from 10 to 1, then print "GO!"
// ------------------------------------------

// Expected output:
// 10...
// 9...
// 8...
// ... (all the way down)
// 1...
// GO!

// Write your code here:



// ------------------------------------------
// EXERCISE 3: XP Grinder
// The hero gains XP each battle. Use a loop to figure out how many
// battles it takes to go from level 1 to level 5.
// ------------------------------------------

// Rules:
// - Start at level 1 with 0 XP
// - Each battle gives 15 XP
// - Level up at every 50 XP (50 for level 2, 100 for level 3, etc.)
// - Print each level up: "Level X reached after Y battles!"
// - Stop when you reach level 5

// Hints:
// - Use a while loop (while level < 5)
// - Track: xp, level, battles
// - Level up when xp >= level * 50

// Write your code here:



// ------------------------------------------
// EXERCISE 4: Skip the Cursed Number
// Loop from 1 to 15. Print each number, BUT:
// - Skip the number 7 (use continue)
// - Stop completely at 13 (use break)
// ------------------------------------------

// Expected output:
// 1
// 2
// 3
// 4
// 5
// 6
// (7 skipped)
// 8
// 9
// 10
// 11
// 12
// Stopped at 13! Too unlucky!

// Write your code here:



// ------------------------------------------
// EXERCISE 5: Battle Simulator
// Use a do...while loop to simulate a battle between
// a hero and a monster. Each round they both deal damage.
// ------------------------------------------

// Starting stats:
// Hero: 100 HP, deals 18-25 damage per round (random)
// Monster: 80 HP, deals 10-20 damage per round (random)
//
// Each round:
// 1. Hero attacks monster
// 2. If monster HP <= 0, hero wins (stop here)
// 3. Monster attacks hero
// 4. If hero HP <= 0, monster wins (stop here)
// 5. Print both HP values
//
// At the end, print who won.
//
// Hint for random damage: Math.floor(Math.random() * (max - min + 1)) + min

// Write your code here:



// ==========================================
// BONUS CHALLENGE (+15 XP)
// Dungeon Floor Generator
// ==========================================

// Use nested loops to print a 5x5 dungeon floor grid.
// Rules:
// - The borders are walls: "#"
// - Corners are walls: "#"
// - The center (row 2, col 2 — zero-indexed) is the hero: "H"
// - Everything else inside is empty: "."
//
// Expected output:
// # # # # #
// # . . . #
// # . H . #
// # . . . #
// # # # # #
//
// Hint: Use nested for loops. Check if you're on the border,
// at the center, or somewhere else.

// Write your code here:
