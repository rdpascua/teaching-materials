// ============================================
// Day 15: The Magic Mirror
// Topic: DOM Part 1 — Selecting & Modifying
// ============================================
// NOTE: These examples run in a BROWSER, not Node.js.
// Open the HTML below in a browser, then paste snippets
// into the DevTools console (F12 → Console tab).

// ------------------------------------------
// SAMPLE HTML — Save this as day15.html
// ------------------------------------------
/*
<!DOCTYPE html>
<html>
<head>
  <title>The Magic Mirror</title>
  <style>
    .poisoned { color: green; font-style: italic; }
    .shielded { border: 3px solid gold; padding: 8px; }
    .hidden   { display: none; }
    .dungeon-room {
      background: #1a1a2e; color: #e0e0e0;
      padding: 20px; font-family: monospace;
      max-width: 500px; margin: 20px auto;
    }
    .health-bar { color: crimson; font-weight: bold; }
  </style>
</head>
<body>
  <div class="dungeon-room">
    <h1 id="room-title">The Entrance Hall</h1>
    <p id="room-description">A cold wind blows through the stone corridor.</p>
    <p class="health-bar">HP: <span id="hp-display">100</span></p>
    <ul id="inventory">
      <li class="item">Rusty Sword</li>
      <li class="item">Wooden Shield</li>
      <li class="item">Health Potion</li>
    </ul>
    <button id="drink-potion">Drink Potion</button>
    <div id="secret-message" class="hidden" data-code="DUNGEON42">
      You found a secret passage!
    </div>
  </div>
</body>
</html>
*/


// ------------------------------------------
// EXAMPLE 1: Selecting elements by ID
// ------------------------------------------

const roomTitle = document.getElementById("room-title");
console.log(roomTitle);             // <h1 id="room-title">The Entrance Hall</h1>
console.log(roomTitle.textContent); // "The Entrance Hall"


// ------------------------------------------
// EXAMPLE 2: Selecting with querySelector
// ------------------------------------------

// First element matching the CSS selector
const description = document.querySelector("#room-description");
console.log(description.textContent);
// "A cold wind blows through the stone corridor."

// You can use ANY CSS selector — just like in a stylesheet
const firstItem = document.querySelector(".item");
console.log(firstItem.textContent); // "Rusty Sword"

const button = document.querySelector("button");
console.log(button.textContent);    // "Drink Potion"


// ------------------------------------------
// EXAMPLE 3: Selecting ALL matches
// ------------------------------------------

const allItems = document.querySelectorAll(".item");
console.log(allItems);        // NodeList(3) [li.item, li.item, li.item]
console.log(allItems.length); // 3

// Loop through them like an array
allItems.forEach((item, index) => {
  console.log(`Item ${index + 1}: ${item.textContent}`);
});
// Item 1: Rusty Sword
// Item 2: Wooden Shield
// Item 3: Health Potion


// ------------------------------------------
// EXAMPLE 4: Changing text content
// ------------------------------------------

// Change the room title — the page updates instantly!
roomTitle.textContent = "The Dragon's Lair";
// The h1 on the page now says "The Dragon's Lair"

// Change HP display
const hpDisplay = document.getElementById("hp-display");
hpDisplay.textContent = "75";


// ------------------------------------------
// EXAMPLE 5: innerHTML vs textContent
// ------------------------------------------

// textContent treats everything as plain text
description.textContent = "<b>Watch out!</b>";
// Shows literally: <b>Watch out!</b>  (tags visible as text)

// innerHTML parses HTML tags
description.innerHTML = "<b>Watch out!</b> A trap is nearby.";
// Shows: Watch out! (bold) A trap is nearby.


// ------------------------------------------
// EXAMPLE 6: Changing inline styles
// ------------------------------------------

// Change one style at a time — property names are camelCase
roomTitle.style.color = "gold";
roomTitle.style.textShadow = "0 0 10px orange";
roomTitle.style.fontSize = "32px";

// Note: CSS "background-color" becomes JS "backgroundColor"
const room = document.querySelector(".dungeon-room");
room.style.backgroundColor = "#0f3460";


// ------------------------------------------
// EXAMPLE 7: classList — add, remove, toggle
// ------------------------------------------

// Add the "poisoned" class to the description
description.classList.add("poisoned");
// Now the text is green and italic (from our CSS)

// Remove it
description.classList.remove("poisoned");

// Toggle — adds if missing, removes if present
description.classList.toggle("shielded");
// First call: adds "shielded" → golden border appears
description.classList.toggle("shielded");
// Second call: removes "shielded" → border disappears

// Check if an element has a class
console.log(description.classList.contains("poisoned")); // false


// ------------------------------------------
// EXAMPLE 8: getAttribute / setAttribute
// ------------------------------------------

const secretDiv = document.getElementById("secret-message");

// Read a data attribute
const code = secretDiv.getAttribute("data-code");
console.log(code); // "DUNGEON42"

// Set a new attribute
secretDiv.setAttribute("data-unlocked", "true");

// Check if it has an attribute
console.log(secretDiv.hasAttribute("data-code")); // true

// Remove an attribute
secretDiv.removeAttribute("data-code");
console.log(secretDiv.hasAttribute("data-code")); // false


// ------------------------------------------
// EXAMPLE 9: Revealing the secret message
// ------------------------------------------

// The secret message has class "hidden" (display: none).
// Let's reveal it by removing that class:
secretDiv.classList.remove("hidden");
// The message appears on the page!

// Hide it again:
secretDiv.classList.add("hidden");


// ------------------------------------------
// EXAMPLE 10: Putting it together — a mini scene
// ------------------------------------------

function enterNewRoom(name, desc, hp) {
  document.getElementById("room-title").textContent = name;
  document.getElementById("room-description").textContent = desc;

  const hpEl = document.getElementById("hp-display");
  hpEl.textContent = hp;

  // Change HP color based on value
  if (hp <= 25) {
    hpEl.style.color = "red";
  } else if (hp <= 50) {
    hpEl.style.color = "orange";
  } else {
    hpEl.style.color = "limegreen";
  }
}

// Try calling this in the console:
enterNewRoom("The Skeleton Crypt", "Bones crunch under your feet...", 42);
