// ==========================================
// PÁGINA DE DETALLE DE TOUR
// Lee ?tour=SLUG de la URL y renderiza desde data/tours.json
// ==========================================

(function () {
    'use strict';

    const params = new URLSearchParams(window.location.search);
    const tourParam = params.get('tour') || 'raices-de-otavalo';

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
    const galleryWrap = document.getElementById('tourGalleryWrapper');
    const galleryEl   = document.getElementById('tourGallery');

    function toArray(v) {
        if (Array.isArray(v)) return v.filter(x => x != null && x !== '');
        if (v == null || v === '') return [];
        return [v];
    }

    function safe(v, fallback = '') {
        return (v == null) ? fallback : v;
    }

    function findTour(tours, param) {
        if (!Array.isArray(tours)) return null;
        let t = tours.find(x => x && x.slug === param);
        if (t) return t;
        if (!isNaN(param)) {
            t = tours.find(x => x && String(x.id) === String(param));
            if (t) return t;
        }
        return null;
    }

    function renderTour(tour) {
        if (!tour) {
            if (titleEl)    titleEl.textContent = 'Tour no encontrado';
            if (slogan)     slogan.textContent = 'El tour que buscas no existe.';
            if (breadcrumb) breadcrumb.textContent = 'Tour no encontrado';
            document.title = 'Tour no encontrado | All Tour Ecuador';
            return;
        }

        const titulo = safe(tour.titulo, 'Tour');

        if (heroBg)     heroBg.style.backgroundImage = `url('${safe(tour.imagen, 'img/otavalo.jpg')}')`;
        if (breadcrumb) breadcrumb.textContent = titulo;
        if (eyebrow)    eyebrow.textContent = safe(tour.eyebrow, '');
        if (titleEl)    titleEl.textContent = titulo;
        if (slogan)     slogan.textContent = tour.slogan ? `"${tour.slogan}"` : '';

        if (callout)     callout.textContent = safe(tour.callout, '');
        if (description) description.textContent = safe(tour.descripcion, '');

        // Itinerario
        if (itinerary) {
            const items = toArray(tour.itinerario);
            itinerary.innerHTML = items.map(function (i) {
                const hora  = safe(i && i.hora, '');
                const texto = safe(i && i.texto, typeof i === 'string' ? i : '');
                return `<li>
                    <span class="itinerary-time">${hora}</span>
                    <span class="itinerary-text">${texto}</span>
                </li>`;
            }).join('');
        }

        // Ficha
        if (facts) {
            const items = toArray(tour.ficha);
            facts.innerHTML = items.map(function (f) {
                const label = safe(f && f.label, '');
                const valor = safe(f && f.valor, typeof f === 'string' ? f : '');
                return `<li>
                    <strong>${label}</strong>
                    <span>${valor}</span>
                </li>`;
            }).join('');
        }

        // Incluye
        if (includes) {
            const items = toArray(tour.incluye);
            includes.innerHTML = items.map(function (i) {
                const txt = (i && typeof i === 'object') ? safe(i.valor || i.texto, '') : i;
                return `<li>${txt}</li>`;
            }).join('');
        }

        // No incluye
        if (notIncludes) {
            const items = toArray(tour.noIncluye);
            notIncludes.innerHTML = items.map(function (i) {
                const txt = (i && typeof i === 'object') ? safe(i.valor || i.texto, '') : i;
                return `<li>${txt}</li>`;
            }).join('');
        }

        // Galería (solo si hay imágenes)
        if (galleryWrap && galleryEl) {
            const imgs = toArray(tour.galeria);
            if (imgs.length > 0) {
                galleryWrap.style.display = '';
                galleryEl.innerHTML = imgs.map(function (g) {
                    const src = (g && typeof g === 'object') ? safe(g.imagen || g.src, '') : g;
                    const alt = (g && typeof g === 'object') ? safe(g.alt, titulo) : titulo;
                    return `<a href="${src}" target="_blank" rel="noopener" class="tour-gallery-item">
                        <img src="${src}" alt="${alt}" loading="lazy">
                    </a>`;
                }).join('');
            } else {
                galleryWrap.style.display = 'none';
            }
        }

        // Precio sidebar
        const priceVal = document.querySelector('.tour-price-sidebar-value');
        if (priceVal && tour.precio != null) {
            priceVal.textContent = '$' + tour.precio;
        }

        document.title = `${titulo} | All Tour Ecuador`;
    }

    document.addEventListener('DOMContentLoaded', function () {
        fetch('data/tours.json')
            .then(function (r) {
                if (!r.ok) throw new Error('HTTP ' + r.status);
                return r.json();
            })
            .then(function (tours) {
                const tour = findTour(tours, tourParam);
                renderTour(tour);
            })
            .catch(function (err) {
                console.error('Error cargando tour:', err);
                renderTour(null);
            });
    });

})();
