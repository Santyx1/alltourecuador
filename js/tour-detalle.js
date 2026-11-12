// ==========================================
// PÁGINA DE DETALLE DE TOUR
// Lee ?tour=SLUG de la URL y renderiza desde data/tours.json
// ==========================================

(function () {
    'use strict';

    // --- Parámetros de la URL ---
    const params = new URLSearchParams(window.location.search);
    // Acepta tanto ?tour=raices-de-otavalo (slug) como ?tour=1 (id, compatibilidad)
    const tourParam = params.get('tour') || 'raices-de-otavalo';

    // --- Referencias al DOM ---
    const heroBg      = document.getElementById('tourHeroBg');
    const breadcrumb  = document.getElementById('tourBreadcrumb');
    const eyebrow     = document.getElementById('tourEyebrow');
    const titleEl     = document.getElementById('tourTitle');
    const slogan      = document.getElementById('tourSlogan');
    const callout     = document.getElementById('tourCallout');
    const description = document.getElementById('tourDescription');
    const itinerary   = document.getElementById('tourItinerary');
    const facts       = document.getElementById('tourFacts');
    const includes    = document.getElementById('tourIncludes');
    const notIncludes = document.getElementById('tourNotIncludes');

    // --- Buscar tour por slug o por id ---
    function findTour(tours, param) {
        if (!tours) return null;
        // Primero por slug
        let t = tours.find(x => x.slug === param);
        if (t) return t;
        // Fallback: por id numérico
        if (!isNaN(param)) {
            t = tours.find(x => String(x.id) === String(param));
            if (t) return t;
        }
        return null;
    }

    // --- Renderizar ---
    function renderTour(tour) {
        if (!tour) {
            if (titleEl)    titleEl.textContent = 'Tour no encontrado';
            if (slogan)     slogan.textContent = 'El tour que buscas no existe.';
            if (breadcrumb) breadcrumb.textContent = 'Tour no encontrado';
            document.title = 'Tour no encontrado | All Tour Ecuador';
            return;
        }

        // Hero
        if (heroBg)     heroBg.style.backgroundImage = `url('${tour.imagen}')`;
        if (breadcrumb) breadcrumb.textContent = tour.titulo;
        if (eyebrow)    eyebrow.textContent = tour.eyebrow || '';
        if (titleEl)    titleEl.textContent = tour.titulo;
        if (slogan)     slogan.textContent = tour.slogan ? `"${tour.slogan}"` : '';

        // Callout y descripción
        if (callout)     callout.textContent = tour.callout || '';
        if (description) description.textContent = tour.descripcion || '';

        // Itinerario
        if (itinerary) {
            const items = tour.itinerario || [];
            itinerary.innerHTML = items.map(function (i) {
                return `
                    <li>
                        <span class="itinerary-time">${i.hora}</span>
                        <span class="itinerary-text">${i.texto}</span>
                    </li>
                `;
            }).join('');
        }

        // Ficha técnica
        if (facts) {
            const items = tour.ficha || [];
            facts.innerHTML = items.map(function (f) {
                return `
                    <li>
                        <strong>${f.label}</strong>
                        <span>${f.valor}</span>
                    </li>
                `;
            }).join('');
        }

        // Incluye
        if (includes) {
            const items = tour.incluye || [];
            includes.innerHTML = items.map(function (i) {
                return `<li>${i}</li>`;
            }).join('');
        }

        // No incluye
        if (notIncludes) {
            const items = tour.noIncluye || [];
            notIncludes.innerHTML = items.map(function (i) {
                return `<li>${i}</li>`;
            }).join('');
        }

        // Precio del sidebar (si existe el bloque)
        const priceVal = document.querySelector('.tour-price-sidebar-value');
        if (priceVal && tour.precio != null) {
            priceVal.textContent = '$' + tour.precio;
        }

        // Título de la pestaña
        document.title = `${tour.titulo} | All Tour Ecuador`;
    }

    // --- Carga inicial ---
    document.addEventListener('DOMContentLoaded', function () {
        fetch('data/tours.json')
            .then(function (r) {
                if (!r.ok) throw new Error('No se pudo cargar tours.json');
                return r.json();
            })
            .then(function (tours) {
                const tour = findTour(tours, tourParam);
                renderTour(tour);
            })
            .catch(function (err) {
                console.error('Error cargando tours:', err);
                renderTour(null);
            });
    });

})();
