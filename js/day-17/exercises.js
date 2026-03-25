// ============================================
// Day 17 Exercises: Summoning & Banishing
// ============================================
// NOTE: Run in a BROWSER. Save the HTML below, open it, then
// write your JS in the <script> tag at the bottom.
//
// SETUP HTML — save as day17-exercises.html:
/*
<!DOCTYPE html>
<html>
<head>
  <title>Day 17 Exercises</title>
  <style>
    .dungeon { background: #1a1a2e; color: #e0e0e0; padding: 20px; font-family: monospace; max-width: 500px; margin: 20px auto; }
    .hero { color: limegreen; padding: 4px 0; }
    .fallen { color: gray; text-decoration: line-through; }
    .boss { color: crimson; font-weight: bold; font-size: 18px; }
    .minion { color: orange; }
    .summoned { animation: fadeIn 0.5s; }
    @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
    #log { background: #111; padding: 10px; min-height: 60px; margin-top: 10px; white-space: pre-line; font-size: 12px; }
  </style>
</head>
<body>
  <div class="dungeon">
    <h1 id="arena-title">The Summoner's Arena</h1>

    <h3>Hero Roster:</h3>
    <ul id="hero-roster">
      <li class="hero" data-level="5">Kira — Knight (Lv.5)</li>
      <li class="hero" data-level="3">Zane — Archer (Lv.3)</li>
      <li class="hero" data-level="7">Mira — Sorceress (Lv.7)</li>
    </ul>

    <h3>Enemy Wave:</h3>
    <ul id="enemy-wave">
      <li class="minion" data-hp="25">Slime (25 HP)</li>
      <li class="minion" data-hp="25">Slime (25 HP)</li>
    </ul>

    <div id="log">The arena awaits...</div>
  </div>

  <script>
    // Write your exercise solutions here!
  </script>
</body>
</html>
*/


// ------------------------------------------
// EXERCISE 1: Summon a Hero
// Create a new <li> element with:
//   - textContent: "Rex — Paladin (Lv.4)"
//   - class: "hero"
//   - data-level attribute: "4"
// Append it to the #hero-roster list.
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 2: Summon the Boss
// Create a new <li> element with:
//   - textContent: "DRAGON LORD (500 HP)"
//   - classes: "boss"
//   - data-hp attribute: "500"
// PREPEND it to the #enemy-wave list (it should appear first).
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 3: Banish the Fallen
// a) Select the second hero in #hero-roster (Zane, index 1)
//    using parentElement.children[1]
// b) Add the "fallen" class to Zane
// c) After adding the class, remove Zane from the DOM entirely
// d) Log "Zane has fallen!" to the #log div
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 4: Clone Army
// a) Select the first .minion element in #enemy-wave
// b) Clone it (deep clone)
// c) Change the clone's textContent to "Slime King (50 HP)"
// d) Change the clone's data-hp to "50"
// e) Append the clone to #enemy-wave
// ------------------------------------------

// Your code here:


// ------------------------------------------
// EXERCISE 5: Traversal Challenge
// Starting from the FIRST hero in #hero-roster, use ONLY
// DOM traversal properties to:
// a) Log the first hero's name (textContent)
// b) Navigate to the next sibling and log its name
// c) Navigate UP to the parent and log its id
// d) Navigate to the parent's nextElementSibling (the <h3>)
//    and log its textContent
// e) Navigate DOWN to the parent's lastElementChild and log its name
//
// Do NOT use getElementById or querySelector for this exercise!
// Only use: .nextElementSibling, .parentElement, .children,
//           .firstElementChild, .lastElementChild
// ------------------------------------------

// Your code here:


// ==========================================
// BONUS CHALLENGE (+15 XP): Summon Army
// ==========================================
// Write a function called summonArmy(count) that:
//   - Creates 'count' number of <li> elements
//   - Each one should have class "minion" and "summoned"
//   - Each one's text should be "Soldier #N (30 HP)" where N
//     starts at 1
//   - Each one's data-hp should be "30"
//   - All are appended to #enemy-wave
//
// Use a DocumentFragment for efficiency:
//   const fragment = document.createDocumentFragment();
//   // add elements to fragment in a loop
//   parent.appendChild(fragment); // one DOM update instead of many
//
// Call summonArmy(5) to test.

// Your code here:
