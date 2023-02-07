const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);    // llamamos a la funcion con el evento click


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive'); // classList.toggle quita o pone la clase inactive dependiendo si la tiene o no la tiene
}