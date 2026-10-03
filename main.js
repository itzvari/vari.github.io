// JS/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Автоматичне виділення активного пункту меню за посиланням
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    console.log('Головна сторінка завантажена.');
});