document.querySelectorAll('.nav-item .dropdown-container a').forEach(function(item) {
    if (item.classList.contains('active')) {
        item.closest(".dropdown-container").style.display = 'block';
    }
});
