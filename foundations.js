window.MathJax = { tex: { inlineMath: [['$','$'], ['\\(','\\)']] } };
// JS/foundations.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('Сторінка "Основи квантових обчислень" успішно завантажена.');
    
    // Переініціалізація MathJax для формул
    if (window.MathJax) {
        window.MathJax.typesetPromise();
    }
});