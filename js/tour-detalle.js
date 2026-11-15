// ==========================================
// PÁGINA DE DETALLE DE TOUR
// Lee el parámetro ?tour=X de la URL y renderiza el contenido.
// ==========================================

(function () {
    'use strict';

    // --- Obtener ID del tour desde la URL ---
    const params = new URLSearchParams(window.location.search);
    const tourId = params.get('tour') || '1'; // Por defecto el 1

    // --- Referencias al DOM ---
    const heroBg = document.getElementById('tourHeroBg');
    const breadcrumb = document.getElementById('tourBreadcrumb');
    const eyebrow = document.getElementById('tourEyebrow');
    const title = document.getElementById('tourTitle');
    const slogan = document.getElementById('tourSlogan');
    const callout = document.getElementById('tourCallout');
    const description = document.getElementById('tourDescription');
    const itinerary = document.getElementById('tourItinerary');
    const facts = document.getElementById('tourFacts');
    const includes = document.getElementById('tourIncludes');
    const notIncludes = document.getElementById('tourNotIncludes');

    // --- Función para obtener el idioma actual ---
    function getLang() {
        return localStorage.getItem('alltour_lang') || 'es';
    }

    // --- Imágenes por tour (mapeo tentativo) ---
    // SUGERENCIA: Ajusta los nombres de archivo a tus imágenes reales.
    const tourImages = {
        '1': 'img/otavalo.jpg',
        '2': 'img/cotacachi.jpg',
        '3': 'img/kichwa.jpg',
        '4': 'img/cuicocha.jpg',
        '5': 'img/ancestrales.jpg',
        '6': 'img/intag.jpg',
        '7': 'img/tejidos.jpg'
    };

    // --- Títulos por tour (para breadcrumb, ya que el título viene del HTML de la card) ---
    const tourTitles = {
        '1': 'Raíces de Otavalo',
        '2': 'Tierra, Sabor y Espíritu Kichwa Cotacachi',
        '3': 'Patrimonio Ancestral Kichwa',
        '4': 'Cuicocha Nature Trek',
        '5': 'Saberes Ancestrales de la Tierra y la Mujer',
        '6': 'Aromas, Sabores y Aventura de Intag',
        '7': 'Entre Alpacas y Tejidos Andinos'
    };

    // --- Renderizar contenido ---
    function renderTour() {
        const lang = getLang();
        const tour = toursData[tourId];

        if (!tour) {
            // Tour no encontrado
            title.textContent = 'Tour no encontrado';
            slogan.textContent = 'El tour que buscas no existe.';
            return;
        }

        const data = tour[lang] || tour.es;

        // Hero
        if (heroBg) heroBg.style.backgroundImage = `url('${tourImages[tourId] || 'img/otavalo.jpg'}')`;
        if (breadcrumb) breadcrumb.textContent = tourTitles[tourId] || 'Tour';
        if (eyebrow) eyebrow.textContent = data.eyebrow;
        if (title) title.textContent = tourTitles[tourId] || 'Tour';
        if (slogan) slogan.textContent = data.slogan;

        // Callout
        if (callout) callout.textContent = data.callout;

        // Descripción
        if (description) description.textContent = data.description;

        // Itinerario
        if (itinerary) {
            itinerary.innerHTML = data.itinerary.map(([time, text]) => `
                <li>
                    <span class="itinerary-time">${time}</span>
                    <span class="itinerary-text">${text}</span>
                </li>
            `).join('');
        }

        // Ficha técnica
        if (facts) {
            facts.innerHTML = data.facts.map(([k, v]) => `
                <li>
                    <strong>${k}</strong>
                    <span>${v}</span>
                </li>
            `).join('');
        }

        // Incluye
        if (includes) {
            includes.innerHTML = data.includes.map(item => `<li>${item}</li>`).join('');
        }

        // No incluye
        if (notIncludes) {
            notIncludes.innerHTML = data.notIncludes.map(item => `<li>${item}</li>`).join('');
        }

        // Título del documento
        document.title = `${tourTitles[tourId] || 'Tour'} | All Tour Ecuador`;
    }

    // --- Inicializar ---
    document.addEventListener('DOMContentLoaded', () => {
        renderTour();

        // Re-renderizar cuando cambie el idioma
        // (El script principal ya maneja el cambio de idioma con applyLanguage,
        //  pero necesitamos re-renderizar el contenido dinámico)
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(btn => {
            btn.addEventListener('click', () => {
                // Pequeño delay para que se actualice localStorage
                setTimeout(renderTour, 50);
            });
        });
    });

})();
