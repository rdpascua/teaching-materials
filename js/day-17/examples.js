// ============================================
// Day 17: Summoning & Banishing
// Topic: DOM Part 3 — Create/Remove Elements
// ============================================
// NOTE: These examples run in a BROWSER, not Node.js.
// Save the HTML below, open it, and use the console.

// ------------------------------------------
// SAMPLE HTML — Save this as day17.html
// ------------------------------------------
/*
<!DOCTYPE html>
<html>
<head>
  <title>Summoning & Banishing</title>
  <style>
    .dungeon { background: #1a1a2e; color: #e0e0e0; padding: 20px; font-family: monospace; max-width: 500px; margin: 20px auto; }
    .ally { color: limegreen; padding: 4px 0; }
    .enemy { color: crimson; padding: 4px 0; }
    .elite { color: gold; font-weight: bold; }
    .summoned { border-left: 3px solid cyan; padding-left: 8px; }
    #log { background: #111; padding: 10px; min-height: 40px; margin-top: 10px; white-space: pre-line; font-size: 12px; }
  </style>
</head>
<body>
  <div class="dungeon">
    <h1 id="chamber-title">The Summoning Chamber</h1>

    <h3>Your Party:</h3>
    <ul id="party">
      <li class="ally" data-role="warrior">Aldric — Warrior</li>
      <li class="ally" data-role="mage">Elara — Mage</li>
    </ul>

    <h3>Enemies:</h3>
    <ul id="enemies">
      <li class="enemy" data-hp="40">Goblin Scout</li>
      <li class="enemy" data-hp="65">Skeleton Archer</li>
      <li class="enemy" data-hp="90">Dark Sorcerer</li>
    </ul>

    <div id="log">Ready for summoning...</div>
  </div>
</body>
</html>
*/


// ------------------------------------------
// EXAMPLE 1: Creating and appending an element
// ------------------------------------------

// Step 1: Create a new <li> element (it's floating in limbo — not on page yet)
const newAlly = document.createElement("li");

// Step 2: Configure it
newAlly.textContent = "Shadow — Rogue";
newAlly.classList.add("ally");
newAlly.setAttribute("data-role", "rogue");

// Step 3: Add it to the party list
const partyList = document.getElementById("party");
partyList.appendChild(newAlly);
// Shadow now appears at the bottom of the party list!


// ------------------------------------------
// EXAMPLE 2: prepend — add at the beginning
// ------------------------------------------

const tankAlly = document.createElement("li");
tankAlly.textContent = "Gorath — Tank";
tankAlly.classList.add("ally", "elite");
tankAlly.setAttribute("data-role", "tank");

partyList.prepend(tankAlly);
// Gorath now appears at the TOP of the party list!


// ------------------------------------------
// EXAMPLE 3: append — flexible addition
// ------------------------------------------

// append can take multiple items AND plain strings
const healerAlly = document.createElement("li");
healerAlly.textContent = "Luna — Healer";
healerAlly.classList.add("ally");

// Unlike appendChild, append can handle strings and multiple args
partyList.append(healerAlly);


// ------------------------------------------
// EXAMPLE 4: insertBefore — precise placement
// ------------------------------------------

const bardAlly = document.createElement("li");
bardAlly.textContent = "Finn — Bard";
bardAlly.classList.add("ally");

// Insert Finn BEFORE Elara (the second original member)
const elara = partyList.children[2]; // Gorath(0), Aldric(1), Elara(2)
partyList.insertBefore(bardAlly, elara);
// Finn now appears right before Elara


// ------------------------------------------
// EXAMPLE 5: Removing an element — .remove()
// ------------------------------------------

const enemies = document.getElementById("enemies");
const goblin = enemies.querySelector(".enemy"); // first enemy

goblin.remove();
// The Goblin Scout vanishes from the page!


// ------------------------------------------
// EXAMPLE 6: removeChild — the old way
// ------------------------------------------

const skeleton = enemies.querySelector(".enemy"); // now first enemy (skeleton)
enemies.removeChild(skeleton);
// Skeleton Archer is banished!


// ------------------------------------------
// EXAMPLE 7: Cloning elements
// ------------------------------------------

// Clone the Dark Sorcerer (the only enemy left)
const sorcerer = enemies.querySelector(".enemy");

const sorcererClone = sorcerer.cloneNode(true); // deep clone
sorcererClone.textContent = "Dark Sorcerer's Shadow";

enemies.appendChild(sorcererClone);
// Now there are two sorcerers! The clone has the same classes and attributes.


// ------------------------------------------
// EXAMPLE 8: DOM Traversal — walking the tree
// ------------------------------------------

const elara2 = document.querySelectorAll("#party .ally")[2];

// Go UP to parent
console.log(elara2.parentElement);           // <ul id="party">

// Go to SIBLINGS
console.log(elara2.previousElementSibling);  // the element before Elara
console.log(elara2.nextElementSibling);      // the element after Elara

// Go DOWN from parent to children
console.log(partyList.children);             // HTMLCollection of all <li>s
console.log(partyList.firstElementChild);    // first <li>
console.log(partyList.lastElementChild);     // last <li>
console.log(partyList.children.length);      // total number of party members


// ------------------------------------------
// EXAMPLE 9: Building a complex element
// ------------------------------------------

function summonEnemyCard(name, hp, type) {
  // Create outer container
  const card = document.createElement("li");
  card.classList.add("enemy", "summoned");
  card.setAttribute("data-hp", hp);

  // Build inner HTML (safe here since we control the data)
  card.innerHTML = `<strong>${name}</strong> — HP: ${hp} [${type}]`;

  return card;
}

const dragonMinion = summonEnemyCard("Dragon Whelp", 120, "fire");
enemies.appendChild(dragonMinion);

const iceGolem = summonEnemyCard("Ice Golem", 200, "ice");
enemies.appendChild(iceGolem);


// ------------------------------------------
// EXAMPLE 10: Removing all children — clearing the room
// ------------------------------------------

function banishAll(parentElement) {
  while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
  }
}

// To clear all enemies: banishAll(enemies);
// To clear all allies:  banishAll(partyList);
// (Uncomment one to try it — everything in that list disappears!)


// ------------------------------------------
// EXAMPLE 11: Replacing an element
// ------------------------------------------

const currentTitle = document.getElementById("chamber-title");
const newTitle = document.createElement("h1");
newTitle.id = "chamber-title";
newTitle.textContent = "The War Room";
newTitle.style.color = "crimson";

currentTitle.replaceWith(newTitle);
// The old title is gone, replaced by the new one
