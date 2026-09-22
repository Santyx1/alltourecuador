// ==========================================
// ALL TOUR ECUADOR - Script principal
// ==========================================

// ==========================================
// 1. Formulario de reserva (hero del index)
// ==========================================
const bookingForm = document.querySelector('.booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = bookingForm.querySelector('input[type="text"]').value.trim();
        const destino = bookingForm.querySelector('select').value;
        const fecha = bookingForm.querySelector('input[type="date"]').value;
        const personas = bookingForm.querySelector('input[type="number"]').value;

        // Validación
        if (!nombre || destino === '' || !fecha || !personas) {
            alert('⚠️ Por favor completa todos los campos');
            return;
        }

        alert(`✅ ¡Gracias ${nombre}!\n\nDestino: ${destino}\nFecha: ${fecha}\nPersonas: ${personas}\n\nTe contactaremos pronto.`);
        bookingForm.reset();
    });
}

// ==========================================
// 2. Animación fade-in al hacer scroll
// ==========================================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.destination-card, .feature, .testimonial').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
});

// ==========================================
// 3. Sombra en el header al hacer scroll
// ==========================================
const header = document.querySelector('header');

if (header) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
        } else {
            header.style.boxShadow = 'none';
        }
    });
}

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

// ==========================================
// 6. MAPA INTERACTIVO (Leaflet + CARTO Voyager)
// ==========================================
const mapEl = document.getElementById('tourMap');

if (mapEl) {
    // 1. Crear el mapa centrado en Ecuador
    const map = L.map('tourMap', {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true
    }).setView([-1.8312, -78.1834], 6);

    // 2. Capa de tiles CARTO Voyager (con API key)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_3syj_1_19da2f09472d3f015f43f8d9', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        detectRetina: true
    }).addTo(map);

    // 3. Icono personalizado (pin verde)
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
            <div class="marker-pin">
                <div class="marker-pin-inner"></div>
            </div>
        `,
        iconSize: [36, 44],
        iconAnchor: [18, 44],
        popupAnchor: [0, -40]
    });

    // 4. Datos de los destinos
    const destinos = [
        {
            nombre: 'Galápagos',
            tag: 'Archipiélago',
            coords: [-0.9538, -90.9656],
            img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
            desc: 'Un paraíso natural con especies únicas en el mundo: tortugas gigantes, iguanas marinas y lobos marinos.',
            precio: 'Desde $399',
            duracion: '5 días / 4 noches',
            temporada: 'Junio a Septiembre'
        },
        {
            nombre: 'Quito',
            tag: 'Capital',
            coords: [-0.1807, -78.4678],
            img: 'https://images.unsplash.com/photo-1580654712603-eb43273aff33?auto=format&fit=crop&w=900&q=80',
            desc: 'Centro histórico declarado Patrimonio de la Humanidad, con iglesias coloniales y vistas desde el Panecillo.',
            precio: 'Desde $249',
            duracion: '3 días / 2 noches',
            temporada: 'Todo el año'
        },
        {
            nombre: 'Baños',
            tag: 'Andes',
            coords: [-1.3928, -78.4269],
            img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
            desc: 'Aventura, aguas termales, cascadas y la famosa "Casa del Árbol" con vista al volcán Tungurahua.',
            precio: 'Desde $289',
            duracion: '4 días / 3 noches',
            temporada: 'Marzo a Octubre'
        },
        {
            nombre: 'Cuenca',
            tag: 'Patrimonio',
            coords: [-2.9006, -79.0045],
            img: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?auto=format&fit=crop&w=900&q=80',
            desc: 'Ciudad colonial rodeada de ríos, catedrales y artesanías. Un destino cultural imperdible.',
            precio: 'Desde $279',
            duracion: '3 días / 2 noches',
            temporada: 'Todo el año'
        },
        {
            nombre: 'Montañita',
            tag: 'Playa',
            coords: [-1.8253, -80.7528],
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
            desc: 'Olas perfectas para surf, ambiente bohemio y atardeceres inolvidables en la costa ecuatoriana.',
            precio: 'Desde $199',
            duracion: '4 días / 3 noches',
            temporada: 'Diciembre a Abril'
        },
        {
            nombre: 'Amazonía',
            tag: 'Selva',
            coords: [-0.4667, -76.9833],
            img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80',
            desc: 'Navega el río Napo, descubre comunidades ancestrales y observa fauna exótica en la selva tropical.',
            precio: 'Desde $349',
            duracion: '5 días / 4 noches',
            temporada: 'Todo el año'
        },
        {
            nombre: 'Cotopaxi',
            tag: 'Volcán',
            coords: [-0.6806, -78.4378],
            img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
            desc: 'Uno de los volcanes activos más altos del mundo. Caminatas, refugio y paisajes andinos únicos.',
            precio: 'Desde $229',
            duracion: '2 días / 1 noche',
            temporada: 'Junio a Septiembre'
        },
        {
            nombre: 'Cuyabeno',
            tag: 'Reserva',
            coords: [-0.1167, -76.3167],
            img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80',
            desc: 'Reserva de producción faunística con lagunas, delfines rosados y una biodiversidad impresionante.',
            precio: 'Desde $389',
            duracion: '4 días / 3 noches',
            temporada: 'Todo el año'
        }
    ];

    // 5. Referencias al panel
    const panelImg = document.getElementById('panelImg');
    const panelImgOverlay = document.getElementById('panelImgOverlay');
    const panelTag = document.getElementById('panelTag');
    const panelTitle = document.getElementById('panelTitle');
    const panelDesc = document.getElementById('panelDesc');
    const panelInfo = document.getElementById('panelInfo');

    // 6. Agregar marcadores
    destinos.forEach(destino => {
        const marker = L.marker(destino.coords, { icon: customIcon }).addTo(map);

        // Popup al hacer clic
        marker.bindPopup(`
            <h4>${destino.nombre}</h4>
            <p>${destino.tag} · ${destino.precio}</p>
        `);

        // Actualizar panel al hacer clic
        marker.on('click', () => {
            // Ocultar el overlay
            if (panelImgOverlay) {
                panelImgOverlay.style.display = 'none';
            }

            // Actualizar imagen
            panelImg.src = destino.img;
            panelImg.alt = destino.nombre;

            // Actualizar contenido
            panelTag.textContent = destino.tag;
            panelTitle.textContent = destino.nombre;
            panelDesc.textContent = destino.desc;

            // Actualizar info
            panelInfo.innerHTML = `
                <li><strong>Precio:</strong> <span>${destino.precio}</span></li>
                <li><strong>Duración:</strong> <span>${destino.duracion}</span></li>
                <li><strong>Mejor época:</strong> <span>${destino.temporada}</span></li>
            `;
        });
    });
}

// ==========================================
// 7. CARRUSEL DE GALERÍA (Swiper)
// ==========================================
if (document.querySelector('.gallery-swiper')) {
    new Swiper('.gallery-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.gallery-swiper .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.gallery-swiper .swiper-button-next',
            prevEl: '.gallery-swiper .swiper-button-prev',
        },
        breakpoints: {
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
        }
    });
}
