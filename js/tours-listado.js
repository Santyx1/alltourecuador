// ==========================================
// LISTADO DE TOURS — carga desde data/tours.json
// Blindado para tolerar campos null / string / array
// ==========================================
document.addEventListener('DOMContentLoaded', function () {

    const grid = document.getElementById('toursGrid');
    const noResults = document.getElementById('noResults');
    const filterInputs = document.querySelectorAll('.filter-list input[type="checkbox"]');
    const removeBtn = document.getElementById('removeFilters');

    // --- Utilidades defensivas ---
    function toArray(v) {
        if (Array.isArray(v)) return v.filter(x => x != null && x !== '');
        if (v == null || v === '') return [];
        return [String(v)];
    }

    function safe(v, fallback = '') {
        return (v == null) ? fallback : v;
    }

    function capitalize(s) {
        return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
    }

    // --- Renderizar una tarjeta ---
    function renderCard(t) {
        const destinos = toArray(t.destino);
        const tipos = toArray(t.tipo);
        const titulo = safe(t.titulo, 'Tour');
        const imagen = safe(t.imagen, 'img/otavalo.jpg');
        const imagenAlt = safe(t.imagenAlt, titulo);
        const duracionTexto = safe(t.duracionTexto, '');
        const nivel = safe(t.nivel, '');
        const minPax = safe(t.minPax, 4);
        const precio = safe(t.precio, 0);
        const link = `tour-detalle.html?tour=${encodeURIComponent(t.slug || t.id || '')}`;

        return `
            <article class="tour-card-compact"
                     data-destino="${destinos.join(' ')}"
                     data-tipo="${tipos.join(' ')}"
                     data-nivel="${nivel}"
                     data-duracion="${safe(t.duracion, '')}">
                <div class="tour-card-compact__image">
                    <img src="${imagen}" alt="${imagenAlt}" loading="lazy">
                    <span class="tour-badge-duration">${duracionTexto}</span>
                </div>
                <div class="tour-card-compact__body">
                    <h3>${titulo}</h3>
                    <div class="tour-meta">
                        <span class="meta-pill"><i class="fa-solid fa-users"></i> Mín. ${minPax} pax</span>
                        <span class="meta-pill"><i class="fa-solid fa-mountain"></i> ${capitalize(nivel)}</span>
                    </div>
                    <div class="tour-card-compact__footer">
                        <div class="tour-price-compact">
                            <small>Desde</small>
                            <strong>$${precio}</strong>
                        </div>
                        <a href="${link}" class="btn btn-accent btn-sm">
                            Ver tour <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </article>
        `;
    }

    // --- Cargar y renderizar todos ---
    fetch('data/tours.json')
        .then(function (r) {
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.json();
        })
        .then(function (data) {
            if (!Array.isArray(data)) throw new Error('El JSON no es un array');
            grid.innerHTML = data.map(renderCard).join('');
        })
        .catch(function (err) {
            console.error('Error cargando tours:', err);
            grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-light);padding:40px 0;">
                No se pudieron cargar los tours. Intenta más tarde.
            </p>`;
        });

    // --- Filtros ---
    function applyFilters() {
        const active = { destino: [], tipo: [], nivel: [], duracion: [] };
        filterInputs.forEach(function (inp) {
            if (inp.checked) {
                const key = inp.dataset.filter;
                if (active[key]) active[key].push(inp.value);
            }
        });

        const cards = document.querySelectorAll('.tour-card-compact');
        let visible = 0;

        cards.forEach(function (card) {
            const matchDestino = active.destino.length === 0 ||
                active.destino.some(d => (card.dataset.destino || '').includes(d));
            const matchTipo = active.tipo.length === 0 ||
                active.tipo.some(t => (card.dataset.tipo || '').includes(t));
            const matchNivel = active.nivel.length === 0 ||
                active.nivel.some(n => (card.dataset.nivel || '').includes(n));
            const matchDuracion = active.duracion.length === 0 ||
                active.duracion.some(d => (card.dataset.duracion || '').includes(d));

            const show = matchDestino && matchTipo && matchNivel && matchDuracion;
            card.classList.toggle('is-hidden', !show);
            if (show) visible++;
        });

        if (noResults) {
            noResults.style.display = visible === 0 ? 'block' : 'none';
        }
    }

    filterInputs.forEach(function (inp) {
        inp.addEventListener('change', applyFilters);
    });

    if (removeBtn) {
        removeBtn.addEventListener('click', function () {
            filterInputs.forEach(function (inp) { inp.checked = false; });
            applyFilters();
        });
    }
});
