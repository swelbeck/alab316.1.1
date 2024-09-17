// ALAB 316.1.1: DOM Manipulation (Part One)
// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

// ---------- Part 1: Getting Started ----------
// Select and cache the <main> element in a variable named mainEl.
let mainEl = document.querySelector(`main`);
console.log(mainEl);

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = `var(--main-bg)`;

// Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;

// Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
mainEl.classList.add(`flex-ctr`);

// ---------- Part 2: Creating a Menu Bar ----------
// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById(`top-menu`);

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = `100%`;

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = `var(--top-menu-bg)`;

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add(`flex-around`);

// ---------- Part 3: Adding Menu Buttons ----------
// console.log(menuLinks[0].text)
for (let link of menuLinks) {
  let anchor = document.createElement(`a`);
  //   console.log(link.text);
  anchor.setAttribute(`href`, link.href);
  anchor.textContent = link.text;
  topMenuEl.appendChild(anchor);
}

// ---------- Part 4: Adding Interactivity ----------
