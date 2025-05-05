// script.js
document.addEventListener('DOMContentLoaded', () => {

    // Animaciones al hacer scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Multi idioma
    const translations = { /* ... traducciones ... */ };

    const languageToggle = document.getElementById('languageToggle');
    let currentLanguage = 'es';

    languageToggle.addEventListener('click', () => {
        currentLanguage = (currentLanguage === 'es') ? 'en' : 'es';
        changeLanguage(currentLanguage);
    });

    function changeLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = translations[lang][key];
        });
    }

    // Actividad interactiva: Quiz
    const startQuizButton = document.getElementById('startQuiz');
    const quizContainer = document.getElementById('quiz-container');
    
    startQuizButton.addEventListener('click', () => {
        quizContainer.classList.remove('hidden');
    });

    // Mapa interactivo
    const map = L.map('map').setView([0, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const zonas


      
