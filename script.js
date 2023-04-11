const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');
const intro = document.querySelector('.introbox');
const grid = document.querySelector('.grid-layout');
const about = document.querySelector('.about');
const contact = document.querySelector('.contact_form');
const brand = document.querySelector('.nav-brand');

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

function showPopUp(id) {      
  const popup = document.querySelector('.pop-'+id);
  const exit = document.querySelector('.exit');
  popup.classList.toggle('splash');
  intro.classList.toggle('blur');
  grid.classList.toggle('blur');
  about.classList.toggle('blur');
  contact.classList.toggle('blur');
  brand.classList.toggle('blur');
  exit.addEventListener('click', () => {
    popup.classList.remove('splash');
    intro.classList.remove('blur');
    grid.classList.remove('blur');
    about.classList.remove('blur');
    contact.classList.remove('blur');
    brand.classList.remove('blur');

  });
}
