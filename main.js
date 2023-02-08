const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


menuEmail.addEventListener('click', toggleDesktopMenu);    // llamamos a la funcion con el evento click
menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive'); // classList.toggle quita o pone la clase inactive dependiendo si la tiene o no la tiene
}

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive'); 
}