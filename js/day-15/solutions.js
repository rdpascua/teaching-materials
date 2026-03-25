// ============================================
// Day 15 Solutions: The Magic Mirror
// ============================================


// ------------------------------------------
// EXERCISE 1: Rename the Dungeon
// ------------------------------------------

const dungeonName = document.getElementById("dungeon-name");
dungeonName.textContent = "The Dragon's Domain";
dungeonName.style.color = "crimson";

// WHY: getElementById is the fastest way to grab a single element by ID.
// .textContent sets plain text, .style.color sets an inline CSS property.


// ------------------------------------------
// EXERCISE 2: Roll Call
// ------------------------------------------

const heroes = document.querySelectorAll(".hero");
heroes.forEach(hero => {
  const name = hero.textContent;
  const hp = hero.getAttribute("data-hp");
  console.log(`${name} — HP: ${hp}`);
});

// OUTPUT:
// Aldric the Brave — HP: 120
// Elara the Wise — HP: 80
// Shadow the Swift — HP: 95
//
// WHY: querySelectorAll returns a NodeList of all matching elements.
// getAttribute reads the value of any HTML attribute, including data-* ones.


// ------------------------------------------
// EXERCISE 3: Curse and Bless
// ------------------------------------------

const aldric = document.querySelector(".hero");          // first .hero
aldric.classList.add("cursed");

const shadow = document.querySelectorAll(".hero")[2];     // third .hero (index 2)
shadow.classList.add("blessed");

console.log(aldric.classList.contains("cursed")); // true

// WHY: querySelector returns the FIRST match. To get a specific one from
// multiple matches, use querySelectorAll and access by index.
// classList.add adds a CSS class, classList.contains checks if one exists.


// ------------------------------------------
// EXERCISE 4: Reveal the Treasure
// ------------------------------------------

const chest = document.getElementById("treasure-chest");
chest.classList.remove("hidden");
chest.classList.add("revealed");

const treasureItem = document.getElementById("treasure-item");
treasureItem.textContent = "Enchanted Amulet of Wisdom";
treasureItem.setAttribute("data-value", "500");

// WHY: Removing "hidden" and adding "revealed" swaps the CSS.
// setAttribute creates or updates any attribute on the element.
// The div goes from display:none to a visible styled box.


// ------------------------------------------
// EXERCISE 5: Update the Scoreboard
// ------------------------------------------

const scoreEl = document.getElementById("score");
let currentScore = Number(scoreEl.textContent); // convert "0" to 0
currentScore += 250;
scoreEl.textContent = currentScore;             // shows "250"

if (currentScore > 200) {
  scoreEl.style.color = "gold";
}

// WHY: textContent always returns a string, so we use Number() to convert
// before doing math. After adding, we set textContent back to the new number
// (JS auto-converts it to a string). The color changes because 250 > 200.


// ==========================================
// BONUS CHALLENGE SOLUTION: Potion Mixer
// ==========================================

function mixPotion(type) {
  const status = document.getElementById("dungeon-status");

  if (type === "fire") {
    status.style.backgroundColor = "darkred";
    status.textContent = "The room erupts in flames!";
  } else if (type === "ice") {
    status.style.backgroundColor = "darkblue";
    status.textContent = "Frost coats every surface!";
  } else if (type === "shadow") {
    status.style.backgroundColor = "black";
    status.textContent = "Darkness consumes the room...";
  } else {
    status.textContent = "Nothing happens.";
    status.style.backgroundColor = "";  // reset to default
  }
}

// Test it:
mixPotion("fire");

// WHY: This combines everything from today — selecting an element,
// changing its text content, and modifying its inline style.
// Setting backgroundColor to "" removes the inline style, letting
// any CSS stylesheet rule take over again.
