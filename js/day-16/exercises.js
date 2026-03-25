// ============================================
// Day 16 Exercises: Pulling the Levers
// ============================================
// NOTE: Run in a BROWSER. Save the HTML below, open it, then
// write your JS in the <script> tag at the bottom.
//
// SETUP HTML — save as day16-exercises.html:
/*
<!DOCTYPE html>
<html>
<head>
  <title>Day 16 Exercises</title>
  <style>
    .dungeon { background: #1a1a2e; color: #e0e0e0; padding: 20px; font-family: monospace; max-width: 500px; margin: 20px auto; }
    .btn { background: #4a2c6e; color: gold; border: 2px solid gold; padding: 10px 20px; margin: 5px; cursor: pointer; font-family: monospace; }
    .btn:hover { background: #6b3fa0; }
    #battle-log { background: #111; padding: 10px; min-height: 80px; margin-top: 10px; white-space: pre-line; font-size: 13px; }
    .monster { cursor: pointer; padding: 5px 0; }
    .monster:hover { color: red; }
    .defeated { text-decoration: line-through; color: gray; }
  </style>
</head>
<body>
  <div class="dungeon">
    <h1 id="room-name">The Arena</h1>
    <p id="hero-hp">Hero HP: <span id="hp">100</span></p>

    <button class="btn" id="attack-btn">Attack!</button>
    <button class="btn" id="heal-btn">Heal</button>
    <button class="btn" id="flee-btn">Flee</button>

    <h3>Monsters:</h3>
    <ul id="monster-list">
      <li class="monster" data-hp="30">Goblin (30 HP)</li>
      <li class="monster" data-hp="50">Skeleton (50 HP)</li>
      <li class="monster" data-hp="80">Dark Knight (80 HP)</li>
    </ul>

    <h3>Treasure Chest Password:</h3>
    <form id="chest-form">
      <input type="text" id="chest-input" placeholder="Speak the magic word..." />
      <button type="submit" class="btn">Open Chest</button>
    </form>

    <div id="battle-log">Battle begins...</div>
  </div>

  <script>
    // Write your exercise solutions here!
  </script>
</body>
</html>
*/


// ------------------------------------------
// EXERCISE 1: Attack Button
// Add a click event listener to the button with id "attack-btn".
// When clicked, it should:
//   a) Generate a random damage number between 10 and 30
//   b) Append a message to #battle-log: "You deal X damage!"
//   c) Log the event type and target id to the console
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 2: Heal Button
// Add a click listener to #heal-btn. When clicked:
//   a) Read the current HP from the #hp span (as a number)
//   b) Add 15 HP (but don't go above 100)
//   c) Update the span's textContent with the new value
//   d) Append to #battle-log: "Healed! HP is now X"
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 3: Monster Delegation
// Add ONE click listener to the #monster-list <ul> (not each <li>).
// When a monster <li> is clicked:
//   a) Log the monster's name (textContent) to the battle log
//   b) Add the "defeated" class to that monster
//   c) Change its data-hp attribute to "0"
// Use event delegation — check if e.target has class "monster".
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 4: Chest Form
// Add a submit listener to #chest-form. It should:
//   a) Prevent the default form submission (page reload)
//   b) Read the input value from #chest-input
//   c) If the value (lowercased, trimmed) is "opensesame",
//      append "The chest opens! You found a diamond sword!" to the log
//   d) Otherwise, append "Wrong password! The chest remains locked."
//   e) Clear the input field after submission
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 5: Flee with Keyboard
// Add a keydown listener to the document. When the user presses
// the Escape key (e.key === "Escape"):
//   a) Append "You fled the battle!" to #battle-log
//   b) Change #room-name text to "The Hallway (Safe)"
//   c) Disable all three buttons by setting their "disabled" attribute
//      (use setAttribute("disabled", "true") on each button)
// ------------------------------------------

// Your code here:


// ==========================================
// BONUS CHALLENGE (+15 XP): Rune Password
// ==========================================
// Create a "rune password" system using keydown events.
// The secret password is "FIRE" (case-insensitive).
//
// Track each keypress. When the last 4 keys typed spell "fire":
//   - Append "RUNE ACTIVATED! The walls glow with power!" to the log
//   - Change #room-name to "The Rune Chamber"
//   - Change #room-name color to "orangered"
//
// Hint: Keep an array of recent keys. Push each new key,
// and if the array is longer than 4, shift the oldest one out.
// Then join the array and check if it matches "fire".

// Your code here:
