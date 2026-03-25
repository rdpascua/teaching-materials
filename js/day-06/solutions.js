// ============================================
// Day 6 Solutions: The Training Grounds
// ============================================


// ------------------------------------------
// EXERCISE 1: Warmup Reps
// ------------------------------------------

console.log("--- Exercise 1: Warmup Reps ---");

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Push-up #${rep}`);
}

// KEY LESSON: The classic for loop pattern — start at 1, go while <= max,
// increment by 1 each time. This is the loop you'll use most often.


// ------------------------------------------
// EXERCISE 2: Countdown Timer
// ------------------------------------------

console.log("\n--- Exercise 2: Countdown ---");

let count = 10;

while (count >= 1) {
  console.log(`${count}...`);
  count--;
}
console.log("GO!");

// KEY LESSON: while loops are great when counting down or when the
// number of iterations depends on a changing condition.
// Don't forget count-- or you'll get an infinite loop!


// ------------------------------------------
// EXERCISE 3: XP Grinder
// ------------------------------------------

console.log("\n--- Exercise 3: XP Grinder ---");

let xp = 0;
let level = 1;
let battles = 0;

while (level < 5) {
  xp += 15;
  battles++;

  if (xp >= level * 50) {
    level++;
    console.log(`Level ${level} reached after ${battles} battles!`);
  }
}

console.log(`Total battles to reach level 5: ${battles}`);

// Output:
// Level 2 reached after 4 battles!    (60 XP >= 50)
// Level 3 reached after 7 battles!    (105 XP >= 100)
// Level 4 reached after 10 battles!   (150 XP >= 150)
// Level 5 reached after 14 battles!   (210 XP >= 200)
// Total battles: 14

// KEY LESSON: The while condition checks level, but the loop body
// modifies xp and checks for level-up. Multiple variables can
// interact within a single loop.


// ------------------------------------------
// EXERCISE 4: Skip the Cursed Number
// ------------------------------------------

console.log("\n--- Exercise 4: Cursed Numbers ---");

for (let i = 1; i <= 15; i++) {
  if (i === 13) {
    console.log("Stopped at 13! Too unlucky!");
    break;
  }
  if (i === 7) {
    console.log("(7 skipped)");
    continue;
  }
  console.log(i);
}

// KEY LESSON: break exits the entire loop. continue skips to the
// next iteration. The order of checks matters — we check for break
// (13) before continue (7), though in this case the order doesn't
// affect the result since they're different numbers.


// ------------------------------------------
// EXERCISE 5: Battle Simulator
// ------------------------------------------

console.log("\n--- Exercise 5: Battle Simulator ---");

let heroHP = 100;
let monsterHP = 80;
let round = 0;

do {
  round++;
  console.log(`\n--- Round ${round} ---`);

  // Hero attacks
  const heroDamage = Math.floor(Math.random() * (25 - 18 + 1)) + 18;
  monsterHP -= heroDamage;
  console.log(`Hero strikes for ${heroDamage} damage!`);

  if (monsterHP <= 0) {
    console.log("Monster defeated!");
    break;
  }

  // Monster attacks
  const monsterDamage = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  heroHP -= monsterDamage;
  console.log(`Monster strikes for ${monsterDamage} damage!`);

  if (heroHP <= 0) {
    console.log("Hero has fallen!");
    break;
  }

  console.log(`Hero HP: ${heroHP} | Monster HP: ${monsterHP}`);
} while (heroHP > 0 && monsterHP > 0);

console.log(`\nBattle ended after ${round} rounds.`);
console.log(`Hero HP: ${Math.max(0, heroHP)} | Monster HP: ${Math.max(0, monsterHP)}`);

if (heroHP > 0) {
  console.log("VICTORY! The hero wins!");
} else {
  console.log("DEFEAT... The monster prevails.");
}

// KEY LESSON: do...while ensures at least one round happens.
// We use break to exit early when someone's HP drops to 0 mid-round.
// Math.floor(Math.random() * (max - min + 1)) + min gives a random
// integer between min and max (inclusive).


// ==========================================
// BONUS CHALLENGE SOLUTION
// ==========================================

console.log("\n--- Bonus: Dungeon Floor ---");

for (let row = 0; row < 5; row++) {
  let line = "";
  for (let col = 0; col < 5; col++) {
    // Check if we're on the border
    if (row === 0 || row === 4 || col === 0 || col === 4) {
      line += "# ";
    }
    // Check if we're at the center
    else if (row === 2 && col === 2) {
      line += "H ";
    }
    // Everything else is empty floor
    else {
      line += ". ";
    }
  }
  console.log(line);
}

// Output:
// # # # # #
// # . . . #
// # . H . #
// # . . . #
// # # # # #

// KEY LESSON: Nested loops are perfect for grids. The outer loop
// handles rows, the inner loop handles columns. We build each row
// as a string and print it at the end of the inner loop.
// Border check: row 0 or 4 is top/bottom border. col 0 or 4 is
// left/right border. The || means "if ANY of these are true."
