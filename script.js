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
const error = document.getElementById('mail-error');
const form = document.getElementById('form');
const images = ['./images/capstone.png', './images/math-magic.png', './images/bdget.png', './images/houserental.png'];
const links = ['https://gersonhiggins.github.io/', 'https://gersonhiggins.github.io/awesome-books/', 'https://budgetapp-gh.onrender.com/', 'https://houses-booking-8105175e8e55.herokuapp.com/  '];
const linksgit = ['https://github.com/gersonhiggins/gersonhiggins.github.io', 'https://github.com/gersonhiggins/awsomebooks', 'https://github.com/gersonhiggins/budget-app', 'https://github.com/ahmedeid6842/book_an_appointment_frontend'];
const descriptions = ['Overall, the website serves as a virtual marketplace for food enthusiasts, connecting them with a diverse range of culinary experiences and fostering a community around food appreciation, exploration, and enjoyment.',
  'Calculators can be used for a wide range of applications, from simple calculations in everyday life to complex calculations in fields such as engineering, finance, and science. They provide a convenient and efficient way to perform mathematical operations quickly and accurately.',
  'Overall, the Budget App aims to simplify expense tracking, budget management, and financial decision-making for users. It leverages Ruby on Rails for the backend functionality and CSS for styling, providing an efficient and visually appealing user experience.',
  'Overall, the House Rental app aims to simplify the process of finding and renting a home by providing users with a wide selection of houses tailored to their preferences. It leverages Ruby on Rails for the backend functionality, React and Redux for the frontend interactivity, and CSS for visual styling, resulting in a seamless and visually appealing user experience.'];
const section = document.querySelectorAll('.g2');

window.onscroll = () => {
  section.forEach(sec => {
    if(screen.width > 1400) {
      let top = window.scrollY;
      let offset = sec.offsetTop - 800;
      let height = sec.offsetHeight;

      if(top >= offset && top < offset + height) {
        sec.classList.add('show-animate')
      }
    }

    if(screen.width > 1200 && screen.width < 1400) {
      let top = window.scrollY;
      let offset = sec.offsetTop - 1300;
      let height = sec.offsetHeight;

      if(top >= offset && top < offset + height) {
        sec.classList.add('show-animate')
      }
    }
  })
}

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

document.querySelectorAll('.popupbutton').forEach((n, index) => n.addEventListener('click', () => {
  const node1 = document.createElement('DIV');
  node1.setAttribute('class', 'popup pop-1');
  popupSection.appendChild(node1);

  const node5 = document.createElement('DIV');
  node5.setAttribute('class', 'boxpop');
  node1.appendChild(node5);

  const node6 = document.createElement('H1');
  node5.appendChild(node6);

  const node7 = document.createTextNode('Project');
  node6.appendChild(node7);

  const node8 = document.createElement('DIV');
  node8.setAttribute('class', 'canopypop');
  node5.appendChild(node8);

  const node9 = document.createElement('P');
  node9.setAttribute('class', 'p1');
  node8.appendChild(node9);

  const node10 = document.createTextNode('WEBSITE');
  node9.appendChild(node10);

  const node11 = document.createElement('P');
  node11.setAttribute('class', 'p2');
  node8.appendChild(node11);

  const node12 = document.createTextNode('FullStack Dev');
  node11.appendChild(node12);

  const node13 = document.createElement('P');
  node13.setAttribute('class', 'p3');
  node8.appendChild(node13);

  const node14 = document.createTextNode('2023');
  node13.appendChild(node14);

  const node15 = document.createElement('IMG');
  node15.setAttribute('class', 'image1');
  node15.setAttribute('src', `${images[index]}`);
  node15.setAttribute('alt', 'Tonic');
  node5.appendChild(node15);

  const node16 = document.createElement('DIV');
  node16.setAttribute('class', 'boxpop1');
  node5.appendChild(node16);

  const node17 = document.createElement('DIV');
  node17.setAttribute('class', 'textSpace');
  node16.appendChild(node17);

  const node18 = document.createElement('H2');
  node17.appendChild(node18);

  const node19 = document.createTextNode(`${descriptions[index]}`);
  node18.appendChild(node19);

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
  node42.setAttribute('href', `${links[index]}`);
  node42.setAttribute('target', '_blank');
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
  node45.setAttribute('href', `${linksgit[index]}`);
  node45.setAttribute('target', '_blank');
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
let bool;

getinButton.addEventListener('click', () => {
  bool = false;
  const mail = emailInput.value;
  if (mail.toLowerCase() !== mail && bool === false) {
    error.hidden = false;
  } else if (mail.toLowerCase() === mail) {
    bool = true;
  }
});
form.addEventListener('change', () => {
  localStorage.setItem('form', JSON.stringify({
    name: nameInput.value,
    email: emailInput.value,
    textarea: textArea.value,
  }));
});
const oldform = JSON.parse(localStorage.getItem('form'));
nameInput.value = oldform.name;
emailInput.value = oldform.email;
textArea.value = oldform.textarea;