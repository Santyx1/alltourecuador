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
            siteHeader.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Ejecutar al cargar
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
            delay: 6000,
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
// 5. FORMULARIO DE RESERVA (hero)
// ==========================================
const bookingForm = document.querySelector('.booking-form');

if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = bookingForm.querySelector('input[type="text"]')?.value.trim();
        const destino = bookingForm.querySelector('select')?.value;
        const fecha = bookingForm.querySelector('input[type="date"]')?.value;
        const personas = bookingForm.querySelector('input[type="number"]')?.value;

        if (!nombre || !destino || !fecha || !personas) {
            alert('⚠️ Por favor completa todos los campos');
            return;
        }

        alert(`✅ ¡Gracias ${nombre}!\n\nDestino: ${destino}\nFecha: ${fecha}\nPersonas: ${personas}\n\nTe contactaremos pronto.`);
        bookingForm.reset();
    });
}

// ==========================================
// 6. BACK TO TOP
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
// 7. SCROLL REVEAL (animaciones al scroll)
// ==========================================
const revealElements = document.querySelectorAll(
    '.welcome-card, .about-image, .about-content, .style-card, .tour-card, .why-card, .blog-card, .testimonial-card'
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
// 8. FORMULARIO DE CONTACTO (contacto.html)
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = contactForm.querySelector('input[name="nombre"]')?.value.trim();
        const email = contactForm.querySelector('input[name="email"]')?.value.trim();
        const destino = contactForm.querySelector('select[name="destino"]')?.value;
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

        alert(`✅ ¡Gracias ${nombre}!\n\nHemos recibido tu mensaje sobre: ${destino}\nTe responderemos a ${email} en menos de 24 horas.`);
        contactForm.reset();
    });
}

// ==========================================
// 9. FILTROS DE DESTINOS (destinos.html)
// ==========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const destinationCards = document.querySelectorAll('#destinationsGrid .destination-card');

if (filterButtons.length > 0) {
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
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
// 10. SMOOTH SCROLL para enlaces internos
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#' || href.length < 2) return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 80;
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
// 12. CARRUSEL GALERÍA (si existe)
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
