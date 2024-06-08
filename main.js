document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.querySelector('.dark-mode');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode-active');
    });

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
