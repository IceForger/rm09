/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

/*=============== LOGIN ===============*/
const login = document.getElementById('login'),
      loginBtn = document.getElementById('login-btn'),
      loginClose = document.getElementById('login-close')

/* Login show */
loginBtn.addEventListener('click', () =>{
   login.classList.add('show-login')
})

/* Login hidden */
loginClose.addEventListener('click', () =>{
   login.classList.remove('show-login')
})
// Script pour des interactions dynamiques
document.addEventListener('DOMContentLoaded', () => {
   // Animation sur les liens du menu
   const links = document.querySelectorAll('.nav-menu a');
   links.forEach(link => {
       link.addEventListener('mouseover', () => {
           link.style.transform = 'scale(1.1)';
       });
       link.addEventListener('mouseout', () => {
           link.style.transform = 'scale(1)';
       });
   });

   // Formulaire avec alerte
   const form = document.querySelector('.form');
   form.addEventListener('submit', (e) => {
       e.preventDefault();
       alert('Merci pour votre message !');
   });
});
document.addEventListener('DOMContentLoaded', () => {
 const track = document.querySelector('.carousel-track');
 const items = document.querySelectorAll('.carousel-item');
 const itemsPerView = 3; // Nombre d'éléments visibles
 let currentIndex = 0;

 function moveCarousel() {
   currentIndex = (currentIndex + 1) % Math.ceil(items.length / itemsPerView);
   const offset = -currentIndex * 100; // Décalage basé sur le nombre d'éléments visibles
   track.style.transform = `translateX(${offset}%)`;
 }

 // Démarrage automatique du carrousel
 setInterval(moveCarousel, 3000);
});

