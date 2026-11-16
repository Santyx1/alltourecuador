// ==========================================
// TOURS PAGE — Render dinámico desde tours.json
// ==========================================

let toursPageData = [];          // array de tours cargados
let toursCurrentLang = 'es';     // idioma actual

const TOURS_JSON_URL = 'data/tours.json';

// ------------------------------------------
// Utilidades
// ------------------------------------------
function tourPickLang(value, lang) {
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

// ------------------------------------------
// 1. Cargar tours.json
// ------------------------------------------
async function loadToursData() {
    try {
        const res = await fetch(TOURS_JSON_URL, { cache: 'no-store' });
        if (!res.ok) throw new Error('No se pudo cargar tours.json');
        toursPageData = await res.json();
        return toursPageData;
    } catch (err) {
        console.error('Error cargando tours.json:', err);
        toursPageData = [];
        return [];
    }
}

// ------------------------------------------
// 2. Render de tarjetas
// ------------------------------------------
function renderToursGrid(lang) {
    const grid = document.getElementById('toursGrid');
    if (!grid) return;

    if (!toursPageData.length) {
        grid.innerHTML = `<p class="no-results" style="display:block;grid-column:1/-1;text-align:center;color:var(--text-light);padding:40px 0;" data-i18n="toursMain.noResults">No hay tours disponibles.</p>`;
        return;
    }

    grid.innerHTML = toursPageData.map(tour => {
        const titulo  = escapeHtml(tourPickLang(tour.titulo, lang));
        const resumen = escapeHtml(tourPickLang(tour.resumen, lang));
        const nivelKey = tour.nivel || 'bajo';
        const nivelTxt = translateKey('filter.nivel.' + nivelKey) || nivelKey;
        const minPax   = tour.minPax || 4;
        const precio   = tour.precio || 0;
        const destino  = (tour.destino || []).join(' ');
        const tipo     = (tour.tipo || []).join(' ');

        return `
            <article class="tour-card-compact"
                     data-destino="${escapeHtml(destino)}"
                     data-tipo="${escapeHtml(tipo)}"
                     data-nivel="${escapeHtml(tour.nivel || '')}"
                     data-duracion="${escapeHtml(tour.duracion || '')}">
                <div class="tour-card-compact__image">
                    <img src="${escapeHtml(tour.imagen)}" alt="${escapeHtml(tour.imagenAlt || titulo)}" loading="lazy">
                    <span class="tour-badge-duration">${escapeHtml(translateKey('tour.duration.1day') || '1 día')}</span>
                </div>
                <div class="tour-card-compact__body">
                    <h3>${titulo}</h3>
                    <div class="tour-meta">
                        <span class="meta-pill"><i class="fa-solid fa-users"></i> ${escapeHtml(translateKey('tour.minPax') || 'Mín. 4 pax')}</span>
                        <span class="meta-pill"><i class="fa-solid fa-mountain"></i> ${escapeHtml(nivelTxt)}</span>
                    </div>
                    <div class="tour-card-compact__footer">
                        <div class="tour-price-compact">
                            <small>${escapeHtml(translateKey('tour.from') || 'Desde')}</small>
                            <strong>$${precio}</strong>
                        </div>
                        <button type="button" class="btn btn-accent btn-sm tour-open-modal" data-tour="${tour.id}">
                            ${escapeHtml(translateKey('tour.view') || 'Ver tour')} <i class="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                </div>
            </article>
        `;
    }).join('');
}

// ------------------------------------------
// 3. Render de modales
// ------------------------------------------
function renderToursModals(lang) {
    const container = document.getElementById('toursModals');
    if (!container) return;

    container.innerHTML = toursPageData.map(tour => {
        const titulo  = escapeHtml(tourPickLang(tour.titulo, lang));
        const eyebrow = escapeHtml(tourPickLang(tour.eyebrow, lang));
        const slogan  = escapeHtml(tourPickLang(tour.slogan, lang));
        const callout = escapeHtml(tourPickLang(tour.callout, lang));
        const desc    = escapeHtml(tourPickLang(tour.descripcion, lang));

        const itinerario = (tour.itinerario || []).map(it => `
            <li>
                <span class="itinerary-time">${escapeHtml(it.hora)}</span>
                <span class="itinerary-text">${escapeHtml(tourPickLang(it.texto, lang))}</span>
            </li>
        `).join('');

        const ficha = (tour.ficha || []).map(f => `
            <li>
                <strong>${escapeHtml(tourPickLang(f.label, lang))}</strong>
                <span>${escapeHtml(tourPickLang(f.valor, lang))}</span>
            </li>
        `).join('');

        const incluye = (tour.incluye || []).map(i =>
            `<li>${escapeHtml(tourPickLang(i, lang))}</li>`
        ).join('');

        const noIncluye = (tour.noIncluye || []).map(i =>
            `<li>${escapeHtml(tourPickLang(i, lang))}</li>`
        ).join('');

        return `
        <div class="tour-modal" id="modal-tour-${tour.id}" aria-hidden="true">
            <div class="tour-modal-overlay" data-close-modal></div>
            <div class="tour-modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title-${tour.id}">
                <button type="button" class="tour-modal-close" data-close-modal aria-label="Cerrar">
                    <i class="fa-solid fa-xmark"></i>
                </button>

                <div class="tour-modal-hero">
                    <img src="${escapeHtml(tour.imagen)}" alt="${escapeHtml(tour.imagenAlt || titulo)}">
                    <div class="tour-modal-hero-overlay"></div>
                    <div class="tour-modal-hero-text">
                        <span class="tour-modal-eyebrow">${eyebrow}</span>
                        <h2 id="modal-title-${tour.id}">${titulo}</h2>
                        <p>"${slogan}"</p>
                    </div>
                </div>

                <div class="tour-modal-body">
                    <div class="tour-modal-cols">
                        <div class="tour-modal-main">
                            <div class="tour-modal-callout">${callout}</div>

                            <h3 class="tour-modal-subtitle">${escapeHtml(translateKey('modal.description') || 'Descripción de la Experiencia')}</h3>
                            <p>${desc}</p>

                            <h3 class="tour-modal-subtitle">${escapeHtml(translateKey('modal.itinerary') || 'Itinerario')}</h3>
                            <ul class="tour-modal-itinerary">${itinerario}</ul>
                        </div>

                        <aside class="tour-modal-side">
                            <div class="tour-modal-facts">
                                <h3 class="tour-modal-subtitle">${escapeHtml(translateKey('modal.facts') || 'Ficha Técnica')}</h3>
                                <ul>${ficha}</ul>
                            </div>

                            <div class="tour-modal-includes">
                                <h4><i class="fa-solid fa-circle-check"></i> ${escapeHtml(translateKey('modal.includes') || 'Incluye')}</h4>
                                <ul>${incluye}</ul>
                            </div>

                            <div class="tour-modal-not-includes">
                                <h4><i class="fa-solid fa-circle-xmark"></i> ${escapeHtml(translateKey('modal.notIncludes') || 'No incluye')}</h4>
                                <ul>${noIncluye}</ul>
                            </div>

                            <a href="contacto.html" class="btn btn-accent">
                                ${escapeHtml(translateKey('modal.cta') || 'Cotizar este tour')} <i class="fa-solid fa-arrow-right"></i>
                            </a>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// ------------------------------------------
// 4. Traducciones: usar el dict global si existe
// ------------------------------------------
function translateKey(key) {
    if (typeof translations !== 'undefined' && translations[toursCurrentLang] && translations[toursCurrentLang][key]) {
        return translations[toursCurrentLang][key];
    }
    return '';
}

// ------------------------------------------
// 5. Filtros
// ------------------------------------------
function initFilters() {
    const filterInputs = document.querySelectorAll('.filter-list input[type="checkbox"]');
    const removeBtn    = document.getElementById('removeFilters');
    const noResults    = document.getElementById('noResults') || createNoResultsEl();

    function applyFilters() {
        const cards = document.querySelectorAll('.tour-card-compact');
        const active = { destino: [], tipo: [], nivel: [], duracion: [] };
        filterInputs.forEach(inp => {
            if (inp.checked) active[inp.dataset.filter].push(inp.value);
        });

        let visible = 0;
        cards.forEach(card => {
            const matchDestino  = active.destino.length === 0  || active.destino.some(d => (card.dataset.destino || '').includes(d));
            const matchTipo     = active.tipo.length === 0     || active.tipo.some(t => (card.dataset.tipo || '').includes(t));
            const matchNivel    = active.nivel.length === 0    || active.nivel.some(n => (card.dataset.nivel || '').includes(n));
            const matchDuracion = active.duracion.length === 0 || active.duracion.some(d => (card.dataset.duracion || '').includes(d));

            const show = matchDestino && matchTipo && matchNivel && matchDuracion;
            card.classList.toggle('is-hidden', !show);
            if (show) visible++;
        });

        if (noResults) noResults.style.display = visible === 0 ? 'block' : 'none';
    }

    filterInputs.forEach(inp => inp.addEventListener('change', applyFilters));

    if (removeBtn) {
        removeBtn.addEventListener('click', () => {
            filterInputs.forEach(inp => { inp.checked = false; });
            applyFilters();
        });
    }

    applyFilters();
}

function createNoResultsEl() {
    const grid = document.getElementById('toursGrid');
    if (!grid) return null;
    let el = document.getElementById('noResults');
    if (!el) {
        el = document.createElement('p');
        el.id = 'noResults';
        el.className = 'no-results';
        el.style.cssText = 'display:none;grid-column:1/-1;text-align:center;color:var(--text-light);padding:40px 0;';
        el.setAttribute('data-i18n', 'toursMain.noResults');
        el.textContent = translateKey('toursMain.noResults') || 'No hay tours que coincidan con los filtros seleccionados.';
        grid.appendChild(el);
    }
    return el;
}

// ------------------------------------------
// 6. Modales: apertura / cierre
// ------------------------------------------
function initModalListeners() {
    document.querySelectorAll('.tour-open-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.tour;
            const modal = document.getElementById('modal-tour-' + id);
            if (!modal) return;
            modal.classList.add('open');
            modal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('no-scroll');
        });
    });

    document.querySelectorAll('[data-close-modal]').forEach(el => {
        el.addEventListener('click', closeAllModals);
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeAllModals();
    });
}

function closeAllModals() {
    document.querySelectorAll('.tour-modal.open').forEach(m => {
        m.classList.remove('open');
        m.setAttribute('aria-hidden', 'true');
    });
    document.body.classList.remove('no-scroll');
}

// ------------------------------------------
// 7. Render completo
// ------------------------------------------
function renderToursPage(lang) {
    toursCurrentLang = lang || 'es';
    renderToursGrid(toursCurrentLang);
    renderToursModals(toursCurrentLang);
    initModalListeners();
    initFilters();
    if (typeof applyLanguage === 'function') {
        applyLanguage(toursCurrentLang);
    }
}

// ------------------------------------------
// 8. Arranque
// ------------------------------------------
document.addEventListener('DOMContentLoaded', async () => {
    const grid = document.getElementById('toursGrid');
    if (!grid) return;

    toursCurrentLang = localStorage.getItem('alltour_lang') || 'es';

    await loadToursData();
    renderToursPage(toursCurrentLang);

    const htmlEl = document.documentElement;
    const observer = new MutationObserver(mutations => {
        mutations.forEach(m => {
            if (m.attributeName === 'lang') {
                const newLang = htmlEl.getAttribute('lang') || 'es';
                if (newLang !== toursCurrentLang) {
                    renderToursPage(newLang);
                }
            }
        });
    });
    observer.observe(htmlEl, { attributes: true, attributeFilter: ['lang'] });
});
