// Toggle navbar when hamburger is clicked
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar ul');
hamburger.addEventListener('click', function () {
    navbar.classList.toggle('show');
});
