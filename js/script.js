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


// ==========================================
// 5. Formulario de contacto (contacto.html)
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = contactForm.querySelector('input[name="nombre"]').value.trim();
        const email = contactForm.querySelector('input[name="email"]').value.trim();
        const destino = contactForm.querySelector('select[name="destino"]').value;
        const mensaje = contactForm.querySelector('textarea[name="mensaje"]').value.trim();

        // Validación básica
        if (!nombre || !email || !destino || !mensaje) {
            alert('⚠️ Por favor completa todos los campos obligatorios (*)');
            return;
        }

        // Validar email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('⚠️ Por favor ingresa un correo electrónico válido');
            return;
        }

        alert(`✅ ¡Gracias ${nombre}!\n\nHemos recibido tu mensaje sobre: ${destino}\nTe responderemos a ${email} en menos de 24 horas.`);
        contactForm.reset();
    });
}
