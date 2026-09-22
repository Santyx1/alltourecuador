// ==========================================
// ALL TOUR ECUADOR - Script principal
// ==========================================

// ==========================================
// 1. PRELOADER
// ==========================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hidden');
        }, 600);
    }
});

// ==========================================
// 2. HEADER SCROLLED
// ==========================================
const siteHeader = document.getElementById('siteHeader');

if (siteHeader) {
    const handleScroll = () => {
        if (window.scrollY > 60) {
            siteHeader.classList.add('scrolled');
        } else {
            // No quitamos la clase si ya viene con scrolled (páginas internas)
            if (!siteHeader.dataset.alwaysScrolled) {
                siteHeader.classList.remove('scrolled');
            }
        }
    };

    // Detectar si la página debe tener header siempre sólido
    if (siteHeader.classList.contains('scrolled')) {
        siteHeader.dataset.alwaysScrolled = 'true';
    } else {
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }
}

// ==========================================
// 3. MENÚ MÓVIL
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    });

    // Cerrar al hacer clic en un enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });

    // Cerrar con ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    });
}

// ==========================================
// 4. CARRUSEL HERO (Swiper)
// ==========================================
if (document.querySelector('.hero-swiper')) {
    new Swiper('.hero-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1000,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.hero-swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.hero-swiper-next',
            prevEl: '.hero-swiper-prev',
        },
    });
}

// ==========================================
// 5. BACK TO TOP
// ==========================================
const backToTop = document.getElementById('backToTop');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// 6. SCROLL REVEAL (animaciones)
// ==========================================
const revealElements = document.querySelectorAll(
    '.welcome-card, .history-card, .region-card, .tour-card, .service-card, .why-card, .testimonial-card, .quick-nav-item'
);

if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 80);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
        revealObserver.observe(el);
    });
}

// ==========================================
// 7. SMOOTH SCROLL para enlaces internos
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#' || href.length < 2) return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 90;
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// 8. FORMULARIO DE CONTACTO
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = contactForm.querySelector('input[name="nombre"]')?.value.trim();
        const email = contactForm.querySelector('input[name="email"]')?.value.trim();
        const destino = contactForm.querySelector('select[name="destino"]')?.value;
        const tour = contactForm.querySelector('select[name="tour"]')?.value || '';
        const personas = contactForm.querySelector('input[name="personas"]')?.value || '';
        const mensaje = contactForm.querySelector('textarea[name="mensaje"]')?.value.trim();

        if (!nombre || !email || !destino || !mensaje) {
            alert('⚠️ Por favor completa todos los campos obligatorios (*)');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('⚠️ Por favor ingresa un correo electrónico válido');
            return;
        }

        let resumen = `✅ ¡Gracias ${nombre}!\n\n`;
        resumen += `Región de interés: ${destino}\n`;
        if (tour) resumen += `Tour: ${tour}\n`;
        if (personas) resumen += `Personas: ${personas}\n`;
        resumen += `\nTe responderemos a ${email} en menos de 24 horas.\n\nAll Tour Ecuador`;

        alert(resumen);
        contactForm.reset();
    });
}

// ==========================================
// 9. MAPA INTERACTIVO DE REGIONES (index + destinos)
// ==========================================
const tourMapEl = document.getElementById('tourMap');

if (tourMapEl) {
    // 1. Crear mapa centrado en Ecuador
    const tourMap = L.map('tourMap', {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true
    }).setView([-1.8312, -78.1834], 6);

    // 2. Tiles de CARTO Voyager con API key
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_3syj_1_19da2f09472d3f015f43f8d9', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        detectRetina: true
    }).addTo(tourMap);

    // 3. Icono personalizado (pin naranja)
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

    // 4. Datos de las 4 REGIONES
    const regiones = [
        {
            nombre: 'Galápagos',
            tag: 'Región Insular',
            coords: [-0.9538, -90.9656],
            img: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
            desc: 'Un mundo único para descubrir y conservar. Fauna endémica, ecosistemas volcánicos y experiencias de conservación.',
            destinos: 'Santa Cruz · San Cristóbal · Isabela',
            experiencias: 'Snorkeling · Buceo · Kayak · Cruceros',
            precio: 'Desde $399'
        },
        {
            nombre: 'Costa',
            tag: 'Región Litoral',
            coords: [-1.5, -80.5],
            img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
            desc: 'Pacífico, naturaleza y sabores del Ecuador. Playas, manglares, gastronomía y cultura costera.',
            destinos: 'Guayaquil · Montañita · Puerto López · Manta',
            experiencias: 'Surf · Ballenas · Gastronomía · Manglares',
            precio: 'Desde $159'
        },
        {
            nombre: 'Sierra / Andes',
            tag: 'Región Interandina',
            coords: [-1.5, -78.5],
            img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
            desc: 'Montañas, cultura y tradiciones vivas. Volcanes, lagunas, páramos, ciudades patrimoniales y comunidades indígenas.',
            destinos: 'Otavalo · Cotacachi · Quito · Quilotoa · Cotopaxi · Cuenca',
            experiencias: 'Trekking · Comunidades · Gastronomía · Artesanías',
            precio: 'Desde $85'
        },
        {
            nombre: 'Amazonía',
            tag: 'Región Oriental',
            coords: [-0.7, -76.9],
            img: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80',
            desc: 'Naturaleza, biodiversidad y culturas ancestrales. Inmersión en bosques tropicales, ríos y territorios indígenas.',
            destinos: 'Tena · Yasuní · Cuyabeno · Papallacta',
            experiencias: 'Caminatas · Navegación · Aviturismo · Comunidades',
            precio: 'Desde $349'
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
    regiones.forEach(region => {
        const marker = L.marker(region.coords, { icon: customIcon }).addTo(tourMap);

        // Popup al hacer clic
        marker.bindPopup(`
            <h4>${region.nombre}</h4>
            <p>${region.tag}</p>
        `);

        // Actualizar panel al hacer clic
        marker.on('click', () => {
            if (panelImgOverlay) {
                panelImgOverlay.style.display = 'none';
            }

            panelImg.src = region.img;
            panelImg.alt = region.nombre;

            panelTag.textContent = region.tag;
            panelTitle.textContent = region.nombre;
            panelDesc.textContent = region.desc;

            panelInfo.innerHTML = `
                <li><strong>Destinos:</strong> <span>${region.destinos}</span></li>
                <li><strong>Experiencias:</strong> <span>${region.experiencias}</span></li>
                <li><strong>Precio:</strong> <span>${region.precio}</span></li>
            `;

            // Centrar el mapa en la región
            tourMap.flyTo(region.coords, 7, {
                duration: 1.2
            });
        });
    });

    // 7. Ajustar cuando la ventana cambia de tamaño
    window.addEventListener('resize', () => {
        tourMap.invalidateSize();
    });
}

// ==========================================
// 10. MAPA DE CONTACTO (contacto.html)
// ==========================================
const contactMapEl = document.getElementById('contactMap');

if (contactMapEl) {
    // Coordenadas exactas: Calle Bolívar, entre Neptalí Ordoñez y Av. Quito, Otavalo
    const officeCoords = [0.23072435180832726, -78.25970581792483];

    const contactMap = L.map('contactMap', {
        scrollWheelZoom: false,
        zoomControl: true
    }).setView(officeCoords, 18);

    // Tiles CARTO Voyager con API key
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_3syj_1_19da2f09472d3f015f43f8d9', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        detectRetina: true
    }).addTo(contactMap);

    // Icono naranja
    const contactIcon = L.divIcon({
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

    // Marcador de la oficina
const officeMarker = L.marker(officeCoords, { icon: contactIcon }).addTo(contactMap);

officeMarker.bindPopup(`
    <h4>All Tour Ecuador</h4>
    <p>Calle Bolívar, entre Neptalí Ordoñez y Av. Quito</p>
    <p style="margin-top:6px;font-size:0.8rem;color:#5A7A94;">Otavalo, Imbabura - Ecuador</p>
    <a href="https://www.google.com/maps/dir/?api=1&destination=0.23072435180832726,-78.25970581792483" 
       target="_blank" 
       rel="noopener"
       style="display:inline-block;margin-top:10px;padding:6px 14px;background:#C9A961;color:#fff;border-radius:999px;font-size:0.8rem;font-weight:600;text-decoration:none;">
        Cómo llegar →
    </a>
`).openPopup();

    // Ajustar cuando la ventana cambia de tamaño
    window.addEventListener('resize', () => {
        contactMap.invalidateSize();
    });
}

// ==========================================
// 11. CARRUSEL DE PAQUETES (si existe)
// ==========================================
if (document.querySelector('.packages-swiper')) {
    new Swiper('.packages-swiper', {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: false,
        grabCursor: true,
        pagination: {
            el: '.packages-swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.packages-swiper-next',
            prevEl: '.packages-swiper-prev',
        },
        breakpoints: {
            640: { slidesPerView: 1.2, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
            1280: { slidesPerView: 4, spaceBetween: 28 },
        }
    });
}

// ==========================================
// 12. CARRUSEL DE GALERÍA (si existe)
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
