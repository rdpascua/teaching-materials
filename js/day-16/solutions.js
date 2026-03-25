// ============================================
// Day 16 Solutions: Pulling the Levers
// ============================================


// Helper to append messages to the battle log
function battleLog(msg) {
  const log = document.getElementById("battle-log");
  log.textContent += "\n" + msg;
}


// ------------------------------------------
// EXERCISE 1: Attack Button
// ------------------------------------------

const attackBtn = document.getElementById("attack-btn");

attackBtn.addEventListener("click", function (e) {
  const damage = Math.floor(Math.random() * 21) + 10; // 10–30
  battleLog(`You deal ${damage} damage!`);
  console.log("Event type:", e.type);       // "click"
  console.log("Target id:", e.target.id);   // "attack-btn"
});

// WHY: Math.random() gives 0–0.999..., multiply by 21 gives 0–20.999...,
// Math.floor makes it 0–20, then +10 shifts range to 10–30.
// e.type and e.target are properties on the event object the browser passes.


// ------------------------------------------
// EXERCISE 2: Heal Button
// ------------------------------------------

const healBtn = document.getElementById("heal-btn");

healBtn.addEventListener("click", function () {
  const hpSpan = document.getElementById("hp");
  let currentHp = Number(hpSpan.textContent);
  currentHp = Math.min(currentHp + 15, 100); // cap at 100
  hpSpan.textContent = currentHp;
  battleLog(`Healed! HP is now ${currentHp}`);
});

// WHY: Math.min(value, 100) ensures we never exceed 100.
// If currentHp + 15 = 115, Math.min picks 100 instead.
// textContent is always a string, so we convert with Number() first.


// ------------------------------------------
// EXERCISE 3: Monster Delegation
// ------------------------------------------

const monsterList = document.getElementById("monster-list");

monsterList.addEventListener("click", function (e) {
  if (e.target.classList.contains("monster")) {
    const name = e.target.textContent;
    battleLog(`You defeated the ${name}!`);
    e.target.classList.add("defeated");
    e.target.setAttribute("data-hp", "0");
  }
});

// WHY: We attach ONE listener to the parent <ul> instead of three
// listeners on each <li>. When any <li> is clicked, the event bubbles
// up to the <ul>. We check e.target to see which specific child was
// clicked. This is event delegation — efficient and works for
// dynamically added elements too.


// ------------------------------------------
// EXERCISE 4: Chest Form
// ------------------------------------------

const chestForm = document.getElementById("chest-form");

chestForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Stop the page from reloading!

  const input = document.getElementById("chest-input");
  const guess = input.value.trim().toLowerCase();

  if (guess === "opensesame") {
    battleLog("The chest opens! You found a diamond sword!");
  } else {
    battleLog("Wrong password! The chest remains locked.");
  }

  input.value = ""; // Clear the input field
});

// WHY: Forms reload the page by default when submitted.
// e.preventDefault() stops this, letting us handle it with JS instead.
// trim() removes whitespace, toLowerCase() makes comparison case-insensitive.


// ------------------------------------------
// EXERCISE 5: Flee with Keyboard
// ------------------------------------------

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    battleLog("You fled the battle!");
    document.getElementById("room-name").textContent = "The Hallway (Safe)";

    document.getElementById("attack-btn").setAttribute("disabled", "true");
    document.getElementById("heal-btn").setAttribute("disabled", "true");
    document.getElementById("flee-btn").setAttribute("disabled", "true");
  }
});

// WHY: keydown fires on ANY key press. We check e.key to see which key.
// "Escape" is the standard key name for the Esc key.
// setAttribute("disabled", "true") disables buttons so they can't be clicked.


// ==========================================
// BONUS CHALLENGE SOLUTION: Rune Password
// ==========================================

const recentKeys = [];

document.addEventListener("keydown", function (e) {
  // Only track single-character keys (ignore Shift, Escape, etc.)
  if (e.key.length === 1) {
    recentKeys.push(e.key.toLowerCase());

    // Keep only the last 4 keys
    if (recentKeys.length > 4) {
      recentKeys.shift(); // remove the oldest key
    }

    // Check if the last 4 keys spell "fire"
    if (recentKeys.join("") === "fire") {
      battleLog("RUNE ACTIVATED! The walls glow with power!");
      const roomName = document.getElementById("room-name");
      roomName.textContent = "The Rune Chamber";
      roomName.style.color = "orangered";
    }
  }
});

// WHY: We use an array as a sliding window of the last 4 keys.
// push() adds to the end, shift() removes from the start.
// join("") combines ["f","i","r","e"] into "fire".
// e.key.length === 1 filters out modifier keys like "Shift" or "Escape".
// This pattern is commonly used for cheat codes and easter eggs!
