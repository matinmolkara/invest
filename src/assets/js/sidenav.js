const menu = document.querySelector('.side-navbar');

document.addEventListener('mouseup', function(e) {
    if (!menu.contains(e.target)) {
        menu.classList.remove('is-active');
    }
});

document.querySelector('.toggle-hamburger').addEventListener('click', function() {
    menu.classList.toggle('is-active');
});