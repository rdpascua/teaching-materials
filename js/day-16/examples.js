// ============================================
// Day 16: Pulling the Levers
// Topic: DOM Part 2 — Events
// ============================================
// NOTE: These examples run in a BROWSER, not Node.js.
// Save the HTML below, open it, and use the console.

// ------------------------------------------
// SAMPLE HTML — Save this as day16.html
// ------------------------------------------
/*
<!DOCTYPE html>
<html>
<head>
  <title>Pulling the Levers</title>
  <style>
    .dungeon { background: #1a1a2e; color: #e0e0e0; padding: 20px; font-family: monospace; max-width: 500px; margin: 20px auto; }
    .lever-btn { background: #4a2c6e; color: gold; border: 2px solid gold; padding: 10px 20px; margin: 5px; cursor: pointer; font-family: monospace; font-size: 14px; }
    .lever-btn:hover { background: #6b3fa0; }
    .trap-active { background: darkred !important; }
    .gate-open { border-left: 5px solid limegreen; padding-left: 15px; }
    #log { background: #111; padding: 10px; min-height: 60px; margin-top: 10px; white-space: pre-line; font-size: 12px; }
    .loot-item { cursor: pointer; padding: 4px 0; }
    .loot-item:hover { color: gold; }
  </style>
</head>
<body>
  <div class="dungeon">
    <h1 id="room-title">The Lever Room</h1>
    <p id="room-status">Three levers await your hand...</p>

    <button class="lever-btn" id="lever-1">Lever 1: Gate</button>
    <button class="lever-btn" id="lever-2">Lever 2: Trap</button>
    <button class="lever-btn" id="lever-3">Lever 3: Light</button>

    <h3>Loot Pile:</h3>
    <ul id="loot-pile">
      <li class="loot-item">Golden Chalice</li>
      <li class="loot-item">Silver Dagger</li>
      <li class="loot-item">Ruby Amulet</li>
    </ul>

    <h3>Password Gate:</h3>
    <form id="password-form">
      <input type="text" id="password-input" placeholder="Enter the password..." />
      <button type="submit" class="lever-btn">Submit</button>
    </form>

    <div id="log">Waiting for adventurer input...</div>
  </div>
</body>
</html>
*/


// ------------------------------------------
// HELPER: Log messages to the #log div
// ------------------------------------------

function dungeonLog(message) {
  const log = document.getElementById("log");
  log.textContent += "\n" + message;
}


// ------------------------------------------
// EXAMPLE 1: Basic click event
// ------------------------------------------

const lever1 = document.getElementById("lever-1");

lever1.addEventListener("click", function () {
  const status = document.getElementById("room-status");
  status.textContent = "The gate creaks open!";
  status.classList.add("gate-open");
  dungeonLog(">> Lever 1 pulled — gate opened.");
});


// ------------------------------------------
// EXAMPLE 2: The event object
// ------------------------------------------

const lever2 = document.getElementById("lever-2");

lever2.addEventListener("click", function (e) {
  // The event object 'e' has tons of useful info
  console.log("Event type:", e.type);           // "click"
  console.log("Target element:", e.target);     // the button itself
  console.log("Target id:", e.target.id);       // "lever-2"
  console.log("Mouse X:", e.clientX);           // X position of click
  console.log("Mouse Y:", e.clientY);           // Y position of click

  const room = document.querySelector(".dungeon");
  room.classList.toggle("trap-active");
  dungeonLog(">> Lever 2 pulled — trap toggled!");
});


// ------------------------------------------
// EXAMPLE 3: Arrow function listener
// ------------------------------------------

const lever3 = document.getElementById("lever-3");

lever3.addEventListener("click", () => {
  const room = document.querySelector(".dungeon");
  const isDark = room.style.backgroundColor === "black";

  if (isDark) {
    room.style.backgroundColor = "";
    dungeonLog(">> Lights ON.");
  } else {
    room.style.backgroundColor = "black";
    dungeonLog(">> Lights OFF. You're in the dark!");
  }
});


// ------------------------------------------
// EXAMPLE 4: preventDefault on form submit
// ------------------------------------------

const form = document.getElementById("password-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the page from reloading!

  const input = document.getElementById("password-input");
  const guess = input.value.trim().toLowerCase();

  if (guess === "dragon") {
    dungeonLog(">> Correct! The gate swings open!");
  } else {
    dungeonLog(`>> Wrong password: "${guess}" — try again.`);
  }

  input.value = ""; // Clear the input
});


// ------------------------------------------
// EXAMPLE 5: input event — fires on every keystroke
// ------------------------------------------

const passwordInput = document.getElementById("password-input");

passwordInput.addEventListener("input", function (e) {
  console.log("Current value:", e.target.value);
  // This fires every time a character is typed or deleted
});


// ------------------------------------------
// EXAMPLE 6: Event delegation — one listener for many items
// ------------------------------------------

const lootPile = document.getElementById("loot-pile");

// Instead of adding a listener to EACH <li>, we add ONE to the <ul>
lootPile.addEventListener("click", function (e) {
  // Check if the clicked element is a loot item
  if (e.target.classList.contains("loot-item")) {
    const itemName = e.target.textContent;
    dungeonLog(`>> You picked up: ${itemName}`);
    e.target.style.textDecoration = "line-through";
    e.target.style.color = "gray";
  }
});

// This works even for items added AFTER the listener is set up!
// That's the magic of delegation.


// ------------------------------------------
// EXAMPLE 7: keydown event on the document
// ------------------------------------------

document.addEventListener("keydown", function (e) {
  console.log(`Key pressed: ${e.key}, Code: ${e.code}`);

  // Arrow key movement
  if (e.key === "ArrowUp")    dungeonLog(">> You moved NORTH");
  if (e.key === "ArrowDown")  dungeonLog(">> You moved SOUTH");
  if (e.key === "ArrowLeft")  dungeonLog(">> You moved WEST");
  if (e.key === "ArrowRight") dungeonLog(">> You moved EAST");
});


// ------------------------------------------
// EXAMPLE 8: mouseover and mouseout
// ------------------------------------------

const title = document.getElementById("room-title");

title.addEventListener("mouseover", function () {
  title.style.color = "gold";
  title.style.cursor = "pointer";
});

title.addEventListener("mouseout", function () {
  title.style.color = "";
});


// ------------------------------------------
// EXAMPLE 9: removeEventListener — disconnecting a lever
// ------------------------------------------

function oneTimeAlert() {
  dungeonLog(">> This lever only works ONCE!");
  // Remove itself after firing
  lever1.removeEventListener("click", oneTimeAlert);
}

// Add a second listener to lever 1 (elements can have multiple!)
lever1.addEventListener("click", oneTimeAlert);
// First click on lever 1 triggers both handlers.
// After that, only the original handler remains.
