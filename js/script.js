// ==========================================
// 4. Filtros de destinos (destinos.html)
// ==========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const destinationCards = document.querySelectorAll('#destinationsGrid .destination-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Cambiar botón activo
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            destinationCards.forEach(card => {
                if (filter === 'all' || card.dataset.category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}
