const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const intro = document.querySelector('.introbox');
const grid = document.querySelector('.grid-layout');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact_form');
const brand = document.querySelector('.nav-brand');
const popupSection = document.getElementById('popup-section');
const exit = document.querySelector('.exit');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const textArea = document.getElementById('text-area');
const getinButton = document.querySelector('.getin');
const mail = document.forms['contact-form'].email.value;
const error = document.getElementById('mail-error');

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
  intro.classList.toggle('blur');
  grid.classList.toggle('blur');
  about.classList.toggle('blur');
  contact.classList.toggle('blur');
  brand.classList.toggle('blur');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburguer.classList.remove('active');
  navMenu.classList.remove('active');
  intro.classList.remove('blur');
  grid.classList.remove('blur');
  about.classList.remove('blur');
  contact.classList.remove('blur');
  brand.classList.remove('blur');
}));

document.querySelectorAll('.popupbutton').forEach((n) => n.addEventListener('click', () => {
  const node1 = document.createElement('DIV');
  node1.setAttribute('class', 'grid g2 popup pop-1');
  popupSection.appendChild(node1);

  const node5 = document.createElement('DIV');
  node5.setAttribute('class', 'box2');
  node1.appendChild(node5);

  const node6 = document.createElement('H1');
  node5.appendChild(node6);

  const node7 = document.createTextNode('Tonic');
  node6.appendChild(node7);

  const node8 = document.createElement('DIV');
  node8.setAttribute('class', 'canopy');
  node5.appendChild(node8);

  const node9 = document.createElement('P');
  node9.setAttribute('class', 'p1');
  node8.appendChild(node9);

  const node10 = document.createTextNode('CANOPY');
  node9.appendChild(node10);

  const node11 = document.createElement('P');
  node11.setAttribute('class', 'p2');
  node8.appendChild(node11);

  const node12 = document.createTextNode('Back End Dev');
  node11.appendChild(node12);

  const node13 = document.createElement('P');
  node13.setAttribute('class', 'p3');
  node8.appendChild(node13);

  const node14 = document.createTextNode('2015');
  node13.appendChild(node14);

  const node15 = document.createElement('IMG');
  node15.setAttribute('class', 'image1');
  node15.setAttribute('src', './images/Snapshoot-Portfolio.png');
  node15.setAttribute('alt', 'Tonic');
  node5.appendChild(node15);

  const node16 = document.createElement('DIV');
  node16.setAttribute('class', 'box1');
  node5.appendChild(node16);

  const node17 = document.createElement('DIV');
  node17.setAttribute('class', 'textSpace');
  node16.appendChild(node17);

  const node18 = document.createElement('H2');
  node17.appendChild(node18);

  const node19 = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloribus, porro repellendus autem ducimus aut quos vero officia ut, eligendi consequuntur quam? Aut quae animi maxime modi! Perspiciatis, dolorum laboriosam.');
  node18.appendChild(node19);

  const node20 = document.createElement('H2');
  node17.appendChild(node20);

  const node21 = document.createTextNode('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloribus, porro repellendus autem ducimus aut quos vero officia ut, eligendi consequuntur quam? Aut quae animi maxime modi! Perspiciatis, dolorum laboriosam.');
  node20.appendChild(node21);

  const node22 = document.createElement('DIV');
  node22.setAttribute('class', 'buttons button-splash');
  node16.appendChild(node22);

  const node23 = document.createElement('UL');
  node23.setAttribute('class', 'list500');
  node22.appendChild(node23);

  const node24 = document.createElement('LI');
  node23.appendChild(node24);

  const node25 = document.createElement('BUTTON');
  node24.appendChild(node25);

  const node26 = document.createTextNode('html');
  node25.appendChild(node26);

  const node27 = document.createElement('LI');
  node23.appendChild(node27);

  const node28 = document.createElement('BUTTON');
  node27.appendChild(node28);

  const node29 = document.createTextNode('css');
  node28.appendChild(node29);

  const node30 = document.createElement('LI');
  node23.appendChild(node30);

  const node31 = document.createElement('BUTTON');
  node30.appendChild(node31);

  const node32 = document.createTextNode('javascript');
  node31.appendChild(node32);

  const node33 = document.createElement('LI');
  node23.appendChild(node33);

  const node34 = document.createElement('BUTTON');
  node33.appendChild(node34);

  const node35 = document.createTextNode('ruby');
  node34.appendChild(node35);

  const node36 = document.createElement('LI');
  node23.appendChild(node36);

  const node37 = document.createElement('BUTTON');
  node36.appendChild(node37);

  const node38 = document.createTextNode('bootstrap');
  node37.appendChild(node38);

  const node39 = document.createElement('SPAN');
  node39.setAttribute('class', 'raya500');
  node22.appendChild(node39);

  const node40 = document.createElement('DIV');
  node40.setAttribute('class', 'a500');
  node22.appendChild(node40);

  const node41 = document.createElement('DIV');
  node41.setAttribute('class', 'boton500');
  node40.appendChild(node41);

  const node42 = document.createElement('A');
  node41.appendChild(node42);
  const node3 = document.createTextNode('See Live ');
  node42.appendChild(node3);
  const node43 = document.createElement('I');
  node43.setAttribute('class', 'fa-solid fa-arrow-up-right-from-square');
  node42.appendChild(node43);

  const node44 = document.createElement('DIV');
  node44.setAttribute('class', 'boton500');
  node40.appendChild(node44);

  const node45 = document.createElement('A');
  node44.appendChild(node45);
  const node2 = document.createTextNode('See Source ');
  node45.appendChild(node2);
  const node46 = document.createElement('I');
  node46.setAttribute('class', 'fa-brands fa-github');
  node45.appendChild(node46);
  const window = document.querySelector('.pop-1');
  window.classList.toggle('splash');
  intro.classList.toggle('blur');
  grid.classList.toggle('blur');
  about.classList.toggle('blur');
  contact.classList.toggle('blur');
  brand.classList.toggle('blur');
  exit.classList.toggle('active');
}));

exit.addEventListener('click', () => {
  const window = document.querySelector('.splash');
  window.remove();
  exit.classList.remove('active');
  intro.classList.remove('blur');
  grid.classList.remove('blur');
  about.classList.remove('blur');
  contact.classList.remove('blur');
  brand.classList.remove('blur');
});

getinButton.addEventListener('click', () => {
  let bool = true;
  if (mail.toLowerCase() !== mail) {
    error.hidden = false;
    bool = false;
  } else {

  }
});


