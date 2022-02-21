const myLinks = document.querySelector('.myLinks');
// const links = document.querySelector('.myLinks a');
const menu = document.querySelector('.mobileMenu');

// toggleMenu = () => {
//   if (myLinks.style.display === 'block') {
//     myLinks.style.display = 'none';
//   } else {
//     myLinks.style.display = 'block';
//   }
// }

const toggleMenu = () => {
  if (myLinks.style.display === 'block') {
    myLinks.style.display = 'none';
  } else {
    myLinks.style.display = 'block';
    // links.classList.add('overlay');
  }
}

menu.addEventListener('click', () => {
  toggleMenu();
});