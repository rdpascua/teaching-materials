// ============================================
// Day 15 Exercises: The Magic Mirror
// ============================================
// NOTE: Run these in a BROWSER. Save the HTML below as a file,
// open it, then write your JS in the <script> tag or console.
//
// SETUP HTML — save as day15-exercises.html:
/*
<!DOCTYPE html>
<html>
<head>
  <title>Day 15 Exercises</title>
  <style>
    .dungeon { background: #1a1a2e; color: #e0e0e0; padding: 20px; font-family: monospace; max-width: 500px; margin: 20px auto; }
    .cursed { color: red; text-decoration: line-through; }
    .blessed { color: gold; font-weight: bold; }
    .hidden { display: none; }
    .revealed { display: block; background: #2d2d5e; padding: 10px; border: 1px dashed gold; margin-top: 10px; }
  </style>
</head>
<body>
  <div class="dungeon">
    <h1 id="dungeon-name">The Forgotten Crypt</h1>
    <p id="dungeon-status">You stand at the entrance. Torches flicker on the walls.</p>

    <h2>Your Party:</h2>
    <ul id="party-list">
      <li class="hero" data-class="warrior" data-hp="120">Aldric the Brave</li>
      <li class="hero" data-class="mage" data-hp="80">Elara the Wise</li>
      <li class="hero" data-class="rogue" data-hp="95">Shadow the Swift</li>
    </ul>

    <div id="treasure-chest" class="hidden">
      <p>You found: <span id="treasure-item">???</span></p>
    </div>

    <p id="score-display">Score: <span id="score">0</span></p>
  </div>

  <script>
    // Write your exercise solutions here!
  </script>
</body>
</html>
*/


// ------------------------------------------
// EXERCISE 1: Rename the Dungeon
// Select the h1 with id "dungeon-name" and change its
// text to "The Dragon's Domain".
// Then change its color to "crimson" using .style.
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 2: Roll Call
// Select ALL elements with class "hero" using querySelectorAll.
// Loop through them and log each hero's name and their data-hp
// attribute in this format: "Aldric the Brave — HP: 120"
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 3: Curse and Bless
// a) Select the first hero (Aldric) and add the class "cursed"
//    (this should make the text red and crossed out)
// b) Select the last hero (Shadow) and add the class "blessed"
//    (this should make the text gold and bold)
// c) Log whether Aldric has the "cursed" class (should be true)
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 4: Reveal the Treasure
// a) Select the div with id "treasure-chest"
// b) Remove the "hidden" class from it
// c) Add the "revealed" class to it
// d) Select the span with id "treasure-item" and set its
//    textContent to "Enchanted Amulet of Wisdom"
// e) Set a data attribute "data-value" to "500" on that span
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 5: Update the Scoreboard
// a) Select the span with id "score"
// b) Read its current textContent and convert it to a number
// c) Add 250 to it
// d) Set the textContent back to the new value
// e) If the score is over 200, change the score's color to "gold"
// ------------------------------------------

// Your code here:


// ==========================================
// BONUS CHALLENGE (+15 XP): Potion Mixer
// ==========================================
// Write a function called mixPotion(type) that:
//   - Accepts a type: "fire", "ice", or "shadow"
//   - Selects the #dungeon-status element
//   - If type is "fire":
//       set background to "darkred", text to "The room erupts in flames!"
//   - If type is "ice":
//       set background to "darkblue", text to "Frost coats every surface!"
//   - If type is "shadow":
//       set background to "black", text to "Darkness consumes the room..."
//   - For any other value:
//       set text to "Nothing happens." and reset background to ""
//
// Then call mixPotion("fire") to test it.

// Your code here:
