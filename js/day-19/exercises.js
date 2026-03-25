// ============================================
// Day 19 Exercises: The Ticking Clock
// ============================================
// Run in Node.js or a browser console.


// ------------------------------------------
// EXERCISE 1: Delayed Door
// Use setTimeout to:
//   a) Log "You pull the ancient lever..."
//   b) After 2 seconds, log "The iron gate creaks open!"
//   c) After 4 seconds (from the start), log "You step through the gate."
//   d) Immediately after setting both timers, log "Waiting..."
//
// Expected output order:
//   You pull the ancient lever...
//   Waiting...
//   The iron gate creaks open!       (at 2s)
//   You step through the gate.       (at 4s)
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 2: Disarm the Bomb
// a) Create a setTimeout that logs "BOOM! Game over!" after 5 seconds.
//    Store the timer ID in a variable called bombTimer.
// b) Create another setTimeout that runs after 3 seconds.
//    Inside it, clear the bomb timer and log "Bomb disarmed with 2 seconds to spare!"
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 3: Heartbeat Monitor
// Use setInterval to simulate a heartbeat:
//   - Every 1 second, log "♥ beat" followed by the beat number (1, 2, 3...)
//   - After 5 beats, clear the interval and log "Heart rate: stable."
//
// Expected output:
//   ♥ beat 1
//   ♥ beat 2
//   ♥ beat 3
//   ♥ beat 4
//   ♥ beat 5
//   Heart rate: stable.
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 4: Callback Practice
// Write a function called searchForTreasure(location, callback) that:
//   - Logs "Searching <location>..."
//   - After 1.5 seconds, randomly decides if treasure is found
//     (use Math.random() > 0.5)
//   - If found, call callback("Gold Crown")
//   - If not found, call callback(null)
//
// Then call it like this:
//   searchForTreasure("The Ancient Tomb", function(treasure) {
//     if (treasure) {
//       console.log("Found: " + treasure);
//     } else {
//       console.log("Nothing here...");
//     }
//   });
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 5: Predict the Output
// WITHOUT running this code, predict the order of the console.log outputs.
// Write your predictions in comments, THEN run it to check.
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

// Your prediction (order of A, B, C, D, E):
//   1st: ???
//   2nd: ???
//   3rd: ???
//   4th: ???
//   5th: ???


// ==========================================
// BONUS CHALLENGE (+15 XP): Dungeon Countdown
// ==========================================
// Build a function called dungeonCountdown(seconds) that:
//   - Logs "Countdown started!" immediately
//   - Every second, logs the remaining time: "T-10...", "T-9...", etc.
//   - When it reaches 0, logs "T-0... TIME'S UP!"
//   - After reaching 0, logs "The dungeon collapses!" (one more second later)
//   - Cleans up the interval properly
//
// Call dungeonCountdown(10) to test.
//
// EXTRA: Make it return the interval ID so the caller can cancel
// the countdown early if needed.

// Your code here:
