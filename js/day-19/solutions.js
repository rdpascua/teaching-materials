// ============================================
// Day 19 Solutions: The Ticking Clock
// ============================================


// ------------------------------------------
// EXERCISE 1: Delayed Door
// ------------------------------------------

console.log("You pull the ancient lever...");

setTimeout(() => {
  console.log("The iron gate creaks open!");
}, 2000);

setTimeout(() => {
  console.log("You step through the gate.");
}, 4000);

console.log("Waiting...");

// OUTPUT:
// You pull the ancient lever...
// Waiting...                       ← immediate (setTimeout doesn't block!)
// The iron gate creaks open!       ← at 2 seconds
// You step through the gate.       ← at 4 seconds

// WHY: Both setTimeout calls are non-blocking. JavaScript schedules them
// and immediately moves to the next line. "Waiting..." prints before
// either timer fires because synchronous code always runs first.


// ------------------------------------------
// EXERCISE 2: Disarm the Bomb
// ------------------------------------------

const bombTimer = setTimeout(() => {
  console.log("BOOM! Game over!");
}, 5000);

setTimeout(() => {
  clearTimeout(bombTimer);
  console.log("Bomb disarmed with 2 seconds to spare!");
}, 3000);

// WHY: setTimeout returns a timer ID. We save it in bombTimer.
// The second timer fires at 3s, calling clearTimeout on the bomb
// before it reaches its 5s deadline. The "BOOM" never runs.


// ------------------------------------------
// EXERCISE 3: Heartbeat Monitor
// ------------------------------------------

let beatCount = 0;

const heartbeat = setInterval(() => {
  beatCount++;
  console.log(`♥ beat ${beatCount}`);

  if (beatCount >= 5) {
    clearInterval(heartbeat);
    console.log("Heart rate: stable.");
  }
}, 1000);

// WHY: setInterval fires repeatedly. We track the count and clear it
// when we hit 5. Always clear your intervals — if you forget,
// they run forever (memory leak / unwanted behavior).


// ------------------------------------------
// EXERCISE 4: Callback Practice
// ------------------------------------------

function searchForTreasure(location, callback) {
  console.log(`Searching ${location}...`);

  setTimeout(() => {
    const found = Math.random() > 0.5;

    if (found) {
      callback("Gold Crown");
    } else {
      callback(null);
    }
  }, 1500);
}

searchForTreasure("The Ancient Tomb", function (treasure) {
  if (treasure) {
    console.log("Found: " + treasure);
  } else {
    console.log("Nothing here...");
  }
});

// WHY: The callback pattern lets us say "do this LATER, when the
// result is ready." The caller passes a function (the callback),
// and searchForTreasure calls it when the search is done.
// This is the foundation of async JavaScript — functions that
// accept other functions to handle future results.


// ------------------------------------------
// EXERCISE 5: Predict the Output
// ------------------------------------------

console.log("A: Hero enters the room");

setTimeout(() => {
  console.log("B: Trap activates");
}, 0);

console.log("C: Hero looks around");

setTimeout(() => {
  console.log("D: Monster appears");
}, 1000);

console.log("E: Hero draws sword");

// ANSWER:
// 1st: A: Hero enters the room       (synchronous)
// 2nd: C: Hero looks around           (synchronous)
// 3rd: E: Hero draws sword            (synchronous)
// 4th: B: Trap activates              (setTimeout 0ms — still async!)
// 5th: D: Monster appears             (setTimeout 1000ms)

// WHY: ALL synchronous code runs first (A, C, E), in order.
// Then the event loop processes the queued timers.
// Even setTimeout with 0ms delay doesn't run immediately — it waits
// until the call stack is empty. This is a fundamental rule:
// synchronous code ALWAYS runs before async callbacks.


// ==========================================
// BONUS CHALLENGE SOLUTION: Dungeon Countdown
// ==========================================

function dungeonCountdown(seconds) {
  console.log("Countdown started!");

  let remaining = seconds;

  const intervalId = setInterval(() => {
    if (remaining > 0) {
      console.log(`T-${remaining}...`);
      remaining--;
    } else {
      console.log("T-0... TIME'S UP!");
      clearInterval(intervalId);

      // One final event, one second after TIME'S UP
      setTimeout(() => {
        console.log("The dungeon collapses!");
      }, 1000);
    }
  }, 1000);

  return intervalId; // so caller can cancel if needed
}

const countdownId = dungeonCountdown(10);

// To cancel early (e.g., puzzle solved in time):
// clearInterval(countdownId);

// OUTPUT:
// Countdown started!
// T-10...     (at 1s)
// T-9...      (at 2s)
// T-8...      (at 3s)
// ...
// T-1...      (at 10s)
// T-0... TIME'S UP!  (at 11s)
// The dungeon collapses!  (at 12s)

// WHY: We combine setInterval (for the repeating tick) with a condition
// to stop at 0. Returning the interval ID is good API design — it gives
// the caller the power to cancel the countdown (like if the player
// solves the puzzle before time runs out). The final setTimeout at the
// end adds a dramatic beat after the countdown finishes.
