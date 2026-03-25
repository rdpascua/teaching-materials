// ============================================
// Day 17 Solutions: Summoning & Banishing
// ============================================


// Helper
function arenaLog(msg) {
  const log = document.getElementById("log");
  log.textContent += "\n" + msg;
}


// ------------------------------------------
// EXERCISE 1: Summon a Hero
// ------------------------------------------

const rex = document.createElement("li");
rex.textContent = "Rex — Paladin (Lv.4)";
rex.classList.add("hero");
rex.setAttribute("data-level", "4");

document.getElementById("hero-roster").appendChild(rex);

// WHY: Three-step summoning ritual:
// 1. createElement creates the element in memory
// 2. We configure it (text, class, attributes)
// 3. appendChild places it into the live DOM at the end of the list


// ------------------------------------------
// EXERCISE 2: Summon the Boss
// ------------------------------------------

const boss = document.createElement("li");
boss.textContent = "DRAGON LORD (500 HP)";
boss.classList.add("boss");
boss.setAttribute("data-hp", "500");

document.getElementById("enemy-wave").prepend(boss);

// WHY: prepend() adds the element as the FIRST child, so the boss
// appears at the top of the enemy list. appendChild would put it last.


// ------------------------------------------
// EXERCISE 3: Banish the Fallen
// ------------------------------------------

const roster = document.getElementById("hero-roster");
const zane = roster.children[1]; // second child (index 1)
zane.classList.add("fallen");    // visually mark as fallen
zane.remove();                   // remove from the DOM
arenaLog("Zane has fallen!");

// WHY: .children gives us an HTMLCollection of child elements.
// Index 1 is the second element (0-based). classList.add applies the
// visual style, then .remove() takes it out of the DOM entirely.
// Note: after removal, roster.children[1] now points to what was [2].


// ------------------------------------------
// EXERCISE 4: Clone Army
// ------------------------------------------

const enemyWave = document.getElementById("enemy-wave");
const firstMinion = enemyWave.querySelector(".minion");
const slimeKing = firstMinion.cloneNode(true); // deep clone
slimeKing.textContent = "Slime King (50 HP)";
slimeKing.setAttribute("data-hp", "50");
enemyWave.appendChild(slimeKing);

// WHY: cloneNode(true) creates a perfect copy including classes,
// attributes, and child nodes. We then customize the clone before
// adding it. The original is untouched.


// ------------------------------------------
// EXERCISE 5: Traversal Challenge
// ------------------------------------------

const firstHero = document.getElementById("hero-roster").firstElementChild;

// a) First hero's name
console.log(firstHero.textContent);
// "Kira — Knight (Lv.5)"

// b) Navigate to next sibling
const secondHero = firstHero.nextElementSibling;
console.log(secondHero.textContent);
// "Zane — Archer (Lv.3)" (or Mira if Zane was already removed in Ex 3)

// c) Navigate UP to parent
const parent = firstHero.parentElement;
console.log(parent.id);
// "hero-roster"

// d) Parent's next sibling (the <h3> "Enemy Wave:")
const nextSection = parent.nextElementSibling;
console.log(nextSection.textContent);
// "Enemy Wave:"

// e) Parent's last child
const lastHero = parent.lastElementChild;
console.log(lastHero.textContent);
// The last hero in the roster

// WHY: DOM traversal lets you navigate without querySelector.
// parentElement goes up, nextElementSibling goes right,
// firstElementChild/lastElementChild go down.
// This is useful when you already have a reference to one element
// and need to find its neighbors.


// ==========================================
// BONUS CHALLENGE SOLUTION: Summon Army
// ==========================================

function summonArmy(count) {
  const enemyList = document.getElementById("enemy-wave");
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= count; i++) {
    const soldier = document.createElement("li");
    soldier.textContent = `Soldier #${i} (30 HP)`;
    soldier.classList.add("minion", "summoned");
    soldier.setAttribute("data-hp", "30");
    fragment.appendChild(soldier);
  }

  // One single DOM update — much faster than appending one at a time!
  enemyList.appendChild(fragment);
}

summonArmy(5);

// WHY: A DocumentFragment is a lightweight container that lives in memory.
// We add all our elements to it first, then attach the whole fragment to
// the DOM in one operation. This is a performance optimization:
//
//   Without fragment: 5 DOM updates (the browser reflows/repaints 5 times)
//   With fragment:    1 DOM update  (one reflow/repaint)
//
// For 5 elements the difference is tiny, but for hundreds it matters a lot.
// The fragment itself doesn't appear in the DOM — only its children do.
