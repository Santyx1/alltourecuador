// ==========================================
// PÁGINA DE DETALLE DE TOUR
// Lee ?tour=X de la URL, carga tours.json y renderiza.
// ==========================================

(function () {
    'use strict';

    const TOURS_JSON_URL = 'data/tours.json';
    let tourData = null;
    let currentLang = 'es';

    // --- Referencias al DOM ---
    const heroBg       = document.getElementById('tourHeroBg');
    const breadcrumb   = document.getElementById('tourBreadcrumb');
    const eyebrow      = document.getElementById('tourEyebrow');
    const title        = document.getElementById('tourTitle');
    const slogan       = document.getElementById('tourSlogan');
    const callout      = document.getElementById('tourCallout');
    const description  = document.getElementById('tourDescription');
    const itinerary    = document.getElementById('tourItinerary');
    const facts        = document.getElementById('tourFacts');
    const includes     = document.getElementById('tourIncludes');
    const notIncludes  = document.getElementById('tourNotIncludes');

    // --- Utilidades ---
    function pickLang(value, lang) {
        if (value == null) return '';
        if (typeof value === 'string') return value;
        return value[lang] || value.es || '';
    }

    function escapeHtml(str) {
        return String(str ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function getLang() {
        return localStorage.getItem('alltour_lang') || 'es';
    }

    function translateKey(key) {
        if (typeof translations !== 'undefined' && translations[currentLang] && translations[currentLang][key]) {
            return translations[currentLang][key];
        }
        return '';
    }

    // --- Cargar tours.json ---
    async function loadToursJson() {
        const res = await fetch(TOURS_JSON_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error('No se pudo cargar tours.json');
        return await res.json();
    }

    // --- Renderizar contenido ---
    function renderTour(tour) {
        const lang = currentLang;

        const data = {
            titulo:      pickLang(tour.titulo, lang),
            eyebrow:     pickLang(tour.eyebrow, lang),
            slogan:      pickLang(tour.slogan, lang),
            callout:     pickLang(tour.callout, lang),
            descripcion: pickLang(tour.descripcion, lang)
        };

        // Hero
        if (heroBg) heroBg.style.backgroundImage = `url('${tour.imagen || 'img/otavalo.jpg'}')`;
        if (breadcrumb) breadcrumb.textContent = data.titulo || 'Tour';
        if (eyebrow) eyebrow.textContent = data.eyebrow;
        if (title) title.textContent = data.titulo || 'Tour';
        if (slogan) slogan.textContent = `"${data.slogan}"`;

        // Callout y descripción
        if (callout) callout.textContent = data.callout;
        if (description) description.textContent = data.descripcion;

        // Itinerario
        if (itinerary) {
            itinerary.innerHTML = (tour.itinerario || []).map(it => `
                <li>
                    <span class="itinerary-time">${escapeHtml(it.hora)}</span>
                    <span class="itinerary-text">${escapeHtml(pickLang(it.texto, lang))}</span>
                </li>
            `).join('');
        }

        // Ficha técnica
        if (facts) {
            facts.innerHTML = (tour.ficha || []).map(f => `
                <li>
                    <strong>${escapeHtml(pickLang(f.label, lang))}</strong>
                    <span>${escapeHtml(pickLang(f.valor, lang))}</span>
                </li>
            `).join('');
        }

        // Incluye
        if (includes) {
            includes.innerHTML = (tour.incluye || [])
                .map(i => `<li>${escapeHtml(pickLang(i, lang))}</li>`)
                .join('');
        }

        // No incluye
        if (notIncludes) {
            notIncludes.innerHTML = (tour.noIncluye || [])
                .map(i => `<li>${escapeHtml(pickLang(i, lang))}</li>`)
                .join('');
        }

        // Precio en el sidebar
        const priceEl    = document.querySelector('.tour-price-sidebar-value');
        const priceLabel = document.querySelector('.tour-price-sidebar-label');
        const priceNote  = document.querySelector('.tour-price-sidebar-note');

        if (priceEl)    priceEl.textContent    = `$${tour.precio || 0}`;
        if (priceLabel) priceLabel.textContent = translateKey('tour.from') || 'Desde';
        if (priceNote)  priceNote.textContent  = translateKey('tour.person') || 'por persona';

        // Título del documento
        document.title = `${data.titulo || 'Tour'} | All Tour Ecuador`;
    }

    // --- Inicializar ---
    document.addEventListener('DOMContentLoaded', async () => {
        currentLang = getLang();

        const params = new URLSearchParams(window.location.search);
        const tourId = params.get('tour') || '1';

        try {
            const tours = await loadToursJson();
            tourData = tours.find(t => String(t.id) === String(tourId)) || tours[0];

            if (!tourData) {
                if (title) title.textContent = 'Tour no encontrado';
                if (slogan) slogan.textContent = 'El tour que buscas no existe.';
                return;
            }

            renderTour(tourData);

            // Re-renderizar al cambiar idioma
            const htmlEl = document.documentElement;
            const observer = new MutationObserver(mutations => {
                mutations.forEach(m => {
                    if (m.attributeName === 'lang') {
                        const newLang = htmlEl.getAttribute('lang') || 'es';
                        if (newLang !== currentLang) {
                            currentLang = newLang;
                            renderTour(tourData);
                        }
                    }
                });
            });
            observer.observe(htmlEl, { attributes: true, attributeFilter: ['lang'] });

        } catch (err) {
            console.error('Error cargando el tour:', err);
            if (title) title.textContent = 'Error al cargar el tour';
        }
    });

})();
