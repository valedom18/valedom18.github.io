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
    }, {
        threshold: 0.3
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Multi idioma
    const translations = {
        es: {
            explora: "Explora los Ecosistemas",
            seresvivos: "Conoce a los Seres Vivos",
            acciones: "Cuida tu Mundo",
            zona: "Zona Interactiva",
            blog: "Blog y Actualidad",
            contacto: "Contacto",
            title: "Guardianes de la Tierra",
            description: "Explora, actúa y aprende a cuidar nuestro planeta."
        },
        en: {
            explora: "Explore Ecosystems",
            seresvivos: "Meet Living Beings",
            acciones: "Care for Your World",
            zona: "Interactive Zone",
            blog: "Blog and News",
            contacto: "Contact",
            title: "Guardians of the Earth",
            description: "Explore, act and learn to protect our planet."
        }
    };

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

        document.querySelector('.hero-content h1').textContent = translations[lang]['title'];
        document.querySelector('.hero-content p').textContent = translations[lang]['description'];

        languageToggle.textContent = (lang === 'es') ? 'EN' : 'ES';
    }

    // Mapa interactivo
    const map = L.map('map').setView([0, 0], 2);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const zonas = [
        {
            nombre: "Amazonas",
            coords: [-3.4653, -62.2159],
            descripcion: "Gran selva tropical en peligro por la deforestación."
        },
        {
            nombre: "Gran Barrera de Coral",
            coords: [-18.2871, 147.6992],
            descripcion: "El mayor arrecife de coral, afectado por el calentamiento global."
        },
        {
            nombre: "Ártico",
            coords: [70.0, -45.0],
            descripcion: "El hielo del Ártico se derrite rápidamente por el cambio climático."
        },
        {
            nombre: "Madagascar",
            coords: [-18.7669, 46.8691],
            descripcion: "Alto nivel de especies endémicas, amenazadas por la deforestación."
        }
    ];

    zonas.forEach(zona => {
        L.marker(zona.coords)
            .addTo(map)
            .bindPopup(`<b>${zona.nombre}</b><br>${zona.descripcion}`);
    });

});
