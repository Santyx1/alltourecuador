// ==========================================
// LISTADO DE TOURS — carga desde data/tours.json
// ==========================================
document.addEventListener('DOMContentLoaded', function () {

    const grid = document.getElementById('toursGrid');
    const noResults = document.getElementById('noResults');
    const filterInputs = document.querySelectorAll('.filter-list input[type="checkbox"]');
    const removeBtn = document.getElementById('removeFilters');

    let toursData = [];

    // --- Renderizar una tarjeta ---
    function renderCard(t) {
        return `
            <article class="tour-card-compact"
                     data-destino="${t.destino.join(' ')}"
                     data-tipo="${t.tipo.join(' ')}"
                     data-nivel="${t.nivel}"
                     data-duracion="${t.duracion}">
                <div class="tour-card-compact__image">
                    <img src="${t.imagen}" alt="${t.imagenAlt}" loading="lazy">
                    <span class="tour-badge-duration">${t.duracionTexto}</span>
                </div>
                <div class="tour-card-compact__body">
                    <h3>${t.titulo}</h3>
                    <div class="tour-meta">
                        <span class="meta-pill"><i class="fa-solid fa-users"></i> Mín. ${t.minPax} pax</span>
                        <span class="meta-pill"><i class="fa-solid fa-mountain"></i> ${capitalize(t.nivel)}</span>
                    </div>
                    <div class="tour-card-compact__footer">
                        <div class="tour-price-compact">
                            <small>Desde</small>
                            <strong>$${t.precio}</strong>
                        </div>
                        <a href="tour-detalle.html?tour=${t.slug}" class="btn btn-accent btn-sm">
                            Ver tour <i class="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </article>
        `;
    }

    function capitalize(s) {
        return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
    }

    // --- Cargar y renderizar todos ---
    fetch('data/tours.json')
        .then(r => r.json())
        .then(data => {
            toursData = data;
            grid.innerHTML = data.map(renderCard).join('');
        })
        .catch(err => {
            console.error('Error cargando tours:', err);
            grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-light);padding:40px 0;">
                No se pudieron cargar los tours. Intenta más tarde.
            </p>`;
        });

    // --- Filtros ---
    function applyFilters() {
        const active = { destino: [], tipo: [], nivel: [], duracion: [] };
        filterInputs.forEach(inp => {
            if (inp.checked) active[inp.dataset.filter].push(inp.value);
        });

        const cards = document.querySelectorAll('.tour-card-compact');
        let visible = 0;

        cards.forEach(card => {
            const matchDestino = active.destino.length === 0 ||
                active.destino.some(d => card.dataset.destino.includes(d));
            const matchTipo = active.tipo.length === 0 ||
                active.tipo.some(t => card.dataset.tipo.includes(t));
            const matchNivel = active.nivel.length === 0 ||
                active.nivel.some(n => card.dataset.nivel.includes(n));
            const matchDuracion = active.duracion.length === 0 ||
                active.duracion.some(d => (card.dataset.duracion || '').includes(d));

            const show = matchDestino && matchTipo && matchNivel && matchDuracion;
            card.classList.toggle('is-hidden', !show);
            if (show) visible++;
        });

        noResults.style.display = visible === 0 ? 'block' : 'none';
    }

    filterInputs.forEach(inp => inp.addEventListener('change', applyFilters));

    if (removeBtn) {
        removeBtn.addEventListener('click', function () {
            filterInputs.forEach(inp => { inp.checked = false; });
            applyFilters();
        });
    }
});
