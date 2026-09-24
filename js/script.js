// ==========================================
// ALL TOUR ECUADOR - Script principal
// ==========================================

// ==========================================
// 1. SISTEMA MULTI-IDIOMA (ES / EN / FR)
// ==========================================
const translations = {
    es: {
        // NAV
        "nav.inicio": "Inicio",
        "nav.nosotros": "Nosotros",
        "nav.destinos": "Destinos",
        "nav.tours": "Tours",
        "nav.servicios": "Servicios",
        "nav.experiencias": "Experiencias",
        "nav.contacto": "Contacto",
        "nav.cta": "Reservar",

        // HERO
        "hero.eyebrow": "Agencia de Viajes y Operador Turístico",
        "hero.title": "Ecuador, desde el corazón del planeta",
        "hero.subtitle": "Naturaleza, cultura y experiencias que nacen desde la tierra",
        "hero.btn1": "Explorar tours",
        "hero.btn2": "Conócenos",

        // CHAIN
        "chain.1": "CONOCER",
        "chain.2": "COMPARTIR",
        "chain.3": "CONSUMIR LOCAL",
        "chain.4": "GENERAR INGRESOS",
        "chain.5": "FORTALECER FAMILIAS",
        "chain.6": "CONSERVAR PATRIMONIO",

        // WELCOME
        "welcome.eyebrow": "Bienvenidos a",
        "welcome.title": "ALL TOUR ECUADOR",
        "welcome.text": "Tu puerta de entrada a un Ecuador auténtico, diverso y lleno de experiencias. Diseñamos y operamos viajes que conectan a nuestros viajeros con la naturaleza, las culturas, las comunidades y la esencia de cada territorio, ofreciendo experiencias personalizadas con calidad, seguridad y atención profesional.",
        "welcome.card1.title": "Experiencias auténticas",
        "welcome.card1.text": "Conectamos al viajero con el Ecuador real: sus gentes, sus paisajes y su cultura viva.",
        "welcome.card2.title": "Comunidades locales",
        "welcome.card2.text": "Trabajamos de la mano con familias, emprendimientos y prestadores de servicios locales.",
        "welcome.card3.title": "Operación profesional",
        "welcome.card3.text": "Calidad, seguridad y atención personalizada en cada experiencia que diseñamos.",

        // HISTORY
        "history.eyebrow": "Nuestra Historia",
        "history.title": "Raíces que inspiran",
        "history.1.title": "NUESTROS INICIOS",
        "history.1.text": "Nacimos con el propósito de mostrar un Ecuador que va más allá de los destinos. Un Ecuador de pueblos, culturas, naturaleza, sabores, historias y personas que hacen de cada territorio una experiencia única.",
        "history.2.title": "NUESTRO PROPÓSITO",
        "history.2.text": "Conectar al viajero con el Ecuador auténtico. Creamos experiencias que acercan a nuestros visitantes a las comunidades, sus tradiciones, su naturaleza y su forma de vivir, generando encuentros que trascienden el turismo.",
        "history.3.title": "HOY",
        "history.3.text": "Hoy transformamos esa visión en experiencias reales. Diseñamos y operamos viajes personalizados, combinando autenticidad, calidad, seguridad y profesionalismo para turistas, agencias y operadores que buscan descubrir un Ecuador diferente.",
        "history.4.title": "NUESTRA ESENCIA",
        "history.4.text": "No solo mostramos Ecuador, lo hacemos vivir. Creemos en un turismo que conecta personas, culturas y territorios; que genera recuerdos, crea vínculos y permite descubrir el país desde el corazón del planeta.",

        // ABOUT
        "about.eyebrow": "Quiénes somos",
        "about.title": "Más que un viaje,<br>una experiencia de vida",
        "about.text": "En All Tour Ecuador creemos en el turismo como una herramienta de conexión, aprendizaje y desarrollo. Somos un equipo de profesionales locales, guías nativos y amantes de nuestra tierra, que te acompañarán a vivir experiencias auténticas, seguras y memorables.",
        "about.btn": "Conoce nuestro equipo",
        "about.hero.title": "Más que un viaje,<br>una experiencia de vida",
        "about.hero.desc": "Conoce la historia, el equipo y la esencia que hacen posible vivir un Ecuador auténtico.",

        // REGIONS
        "regions.eyebrow": "Destinos Ecuador",
        "regions.title": "Cuatro regiones, un solo Ecuador,<br>infinitas experiencias.",
        "regions.lead": "Descubre, conecta y vive la diversidad de un país que tiene una historia en cada territorio.",
        "regions.btn": "Explorar todos los destinos",
        "region.costa.badge": "Costa",
        "region.costa.tagline": "Sabores, playas y cultura frente al Pacífico.",
        "region.costa.desc": "Vive la gastronomía, naturaleza y calidez de la Costa ecuatoriana.",
        "region.sierra.badge": "Sierra",
        "region.sierra.tagline": "Andes, culturas y experiencias que nacen de la tierra.",
        "region.sierra.desc": "Conecta con comunidades, tradiciones, montañas y paisajes andinos.",
        "region.amazonia.badge": "Amazonía",
        "region.amazonia.tagline": "Naturaleza viva, selva y sabiduría ancestral.",
        "region.amazonia.desc": "Explora la biodiversidad y descubre la conexión entre sus pueblos y la Amazonía.",
        "region.galapagos.badge": "Galápagos",
        "region.galapagos.tagline": "Un mundo único para descubrir y conservar.",
        "region.galapagos.desc": "Vive una experiencia extraordinaria entre fauna, océano y paisajes únicos.",

        // TOURS
        "tours.eyebrow": "Tours destacados",
        "tours.title": "Experiencias que nacen de la tierra",
        "tours.lead": "Vive lo mejor de Ecuador con nuestros paquetes personalizados. Naturaleza, cultura, aventura y más.",
        "tours.btn": "Ver todos los tours",
        "tour.btn": "Más información",
        "tour1.title": "RAÍCES DE OTAVALO",
        "tour1.desc": "Totora, textiles, sabores y melodías de la cultura Kichwa.",
        "tour2.title": "TIERRA, SABOR Y ESPÍRITU KICHWA COTACACHI",
        "tour2.desc": "Una experiencia Kichwa en La Calera.",
        "tour3.title": "PATRIMONIO ANCESTRAL KICHWA",
        "tour3.desc": "Mujeres, territorio y saberes vivos de Cotacachi.",
        "tour4.title": "SABORES Y RAÍCES DE IMBABURA",
        "tour4.desc": "De la chakra a la mesa y del territorio al paisaje.",
        "tour5.title": "AROMAS, SABORES Y AVENTURA DE INTAG",
        "tour5.desc": "Una experiencia entre café, caña, naturaleza y aventura.",
        "tour6.title": "ENTRE ALPACAS Y TEJIDOS ANDINOS",
        "tour6.desc": "Una experiencia de páramo, comunidad y tradición Kichwa.",

        // MAP
        "map.eyebrow": "Explora el mapa",
        "map.title": "Ecuador, un país. Cuatro mundos.",
        "map.lead": "Costa | Andes | Amazonía | Galápagos. Haz clic en cada región para descubrir sus destinos.",
        "map.select": "Selecciona una región en el mapa",
        "map.tag": "Ecuador",
        "map.welcome": "Bienvenido a Ecuador",
        "map.desc": "Haz clic en cualquier región del mapa para descubrir sus destinos y experiencias.",
        "map.info.regions": "Regiones:",
        "map.info.destinations": "Destinos:",
        "map.info.experiences": "Experiencias:",
        "map.info.custom": "Personalizadas",
        "map.btn": "Cotizar mi viaje",

        // CTA FINAL
        "cta.eyebrow": "Encuentra la aventura perfecta",
        "cta.title": "Ecuador no solo se conoce:<br>se siente, se comparte y se vive.",
        "cta.desc": "Te ayudamos a construir tu próxima experiencia.",
        "cta.btn1": "Comienza tu viaje",
        "cta.btn2": "Ver destinos",

        // FOOTER
        "footer.desc": "Agencia de Viajes y Operador Turístico. Ecuador, desde el corazón del planeta.",
        "footer.contact": "Contacto",
        "footer.address": "Calle Bolívar, entre Neptalí Ordoñez y Av. Quito",
        "footer.explore": "Explora",
        "footer.follow": "Síguenos",
        "footer.copy": "© 2026 All Tour Ecuador. Todos los derechos reservados.",
        "footer.privacy": "Política de privacidad",
        "footer.terms": "Términos y condiciones",

        // WHATSAPP
        "whatsapp.tooltip": "¿Necesitas ayuda?"
    },

    en: {
        "nav.inicio": "Home",
        "nav.nosotros": "About Us",
        "nav.destinos": "Destinations",
        "nav.tours": "Tours",
        "nav.servicios": "Services",
        "nav.experiencias": "Experiences",
        "nav.contacto": "Contact",
        "nav.cta": "Book Now",

        "hero.eyebrow": "Travel Agency & Tour Operator",
        "hero.title": "Ecuador, from the heart of the planet",
        "hero.subtitle": "Nature, culture and experiences born from the land",
        "hero.btn1": "Explore tours",
        "hero.btn2": "About us",

        "chain.1": "KNOW",
        "chain.2": "SHARE",
        "chain.3": "BUY LOCAL",
        "chain.4": "GENERATE INCOME",
        "chain.5": "STRENGTHEN FAMILIES",
        "chain.6": "PRESERVE HERITAGE",

        "welcome.eyebrow": "Welcome to",
        "welcome.title": "ALL TOUR ECUADOR",
        "welcome.text": "Your gateway to an authentic, diverse and experience-filled Ecuador. We design and operate trips that connect our travelers with nature, cultures, communities and the essence of each territory, offering personalized experiences with quality, safety and professional attention.",
        "welcome.card1.title": "Authentic experiences",
        "welcome.card1.text": "We connect travelers with the real Ecuador: its people, landscapes and living culture.",
        "welcome.card2.title": "Local communities",
        "welcome.card2.text": "We work hand in hand with local families, businesses and service providers.",
        "welcome.card3.title": "Professional operation",
        "welcome.card3.text": "Quality, safety and personalized attention in every experience we design.",

        "history.eyebrow": "Our History",
        "history.title": "Roots that inspire",
        "history.1.title": "OUR BEGINNINGS",
        "history.1.text": "We were born with the purpose of showing an Ecuador that goes beyond destinations. An Ecuador of villages, cultures, nature, flavors, stories and people who make each territory a unique experience.",
        "history.2.title": "OUR PURPOSE",
        "history.2.text": "Connecting travelers with authentic Ecuador. We create experiences that bring our visitors closer to communities, their traditions, their nature and their way of life, generating encounters that transcend tourism.",
        "history.3.title": "TODAY",
        "history.3.text": "Today we transform that vision into real experiences. We design and operate personalized trips, combining authenticity, quality, safety and professionalism for tourists, agencies and operators looking to discover a different Ecuador.",
        "history.4.title": "OUR ESSENCE",
        "history.4.text": "We don't just show Ecuador, we make it live. We believe in tourism that connects people, cultures and territories; that generates memories, creates bonds and allows discovering the country from the heart of the planet.",

        "about.eyebrow": "Who we are",
        "about.title": "More than a trip,<br>a life experience",
        "about.text": "At All Tour Ecuador we believe in tourism as a tool for connection, learning and development. We are a team of local professionals, native guides and lovers of our land, who will accompany you to live authentic, safe and memorable experiences.",
        "about.btn": "Meet our team",
        "about.hero.title": "More than a trip,<br>a life experience",
        "about.hero.desc": "Discover the history, team and essence that make it possible to live an authentic Ecuador.",

        "regions.eyebrow": "Ecuador Destinations",
        "regions.title": "Four regions, one Ecuador,<br>infinite experiences.",
        "regions.lead": "Discover, connect and live the diversity of a country that has a story in every territory.",
        "regions.btn": "Explore all destinations",
        "region.costa.badge": "Coast",
        "region.costa.tagline": "Flavors, beaches and culture facing the Pacific.",
        "region.costa.desc": "Experience the gastronomy, nature and warmth of the Ecuadorian Coast.",
        "region.sierra.badge": "Highlands",
        "region.sierra.tagline": "Andes, cultures and experiences born from the land.",
        "region.sierra.desc": "Connect with communities, traditions, mountains and Andean landscapes.",
        "region.amazonia.badge": "Amazon",
        "region.amazonia.tagline": "Living nature, jungle and ancestral wisdom.",
        "region.amazonia.desc": "Explore biodiversity and discover the connection between its peoples and the Amazon.",
        "region.galapagos.badge": "Galapagos",
        "region.galapagos.tagline": "A unique world to discover and preserve.",
        "region.galapagos.desc": "Live an extraordinary experience among wildlife, ocean and unique landscapes.",

        "tours.eyebrow": "Featured tours",
        "tours.title": "Experiences born from the land",
        "tours.lead": "Live the best of Ecuador with our personalized packages. Nature, culture, adventure and more.",
        "tours.btn": "See all tours",
        "tour.btn": "More info",
        "tour1.title": "ROOTS OF OTAVALO",
        "tour1.desc": "Totora, textiles, flavors and melodies of the Kichwa culture.",
        "tour2.title": "LAND, FLAVOR AND KICHWA SPIRIT COTACACHI",
        "tour2.desc": "A Kichwa experience in La Calera.",
        "tour3.title": "KICHWA ANCESTRAL HERITAGE",
        "tour3.desc": "Women, territory and living knowledge of Cotacachi.",
        "tour4.title": "FLAVORS AND ROOTS OF IMBABURA",
        "tour4.desc": "From the chakra to the table and from the territory to the landscape.",
        "tour5.title": "AROMAS, FLAVORS AND ADVENTURE OF INTAG",
        "tour5.desc": "An experience among coffee, cane, nature and adventure.",
        "tour6.title": "BETWEEN ALPACAS AND ANDEAN TEXTILES",
        "tour6.desc": "An experience of paramo, community and Kichwa tradition.",

        "map.eyebrow": "Explore the map",
        "map.title": "Ecuador, one country. Four worlds.",
        "map.lead": "Coast | Andes | Amazon | Galapagos. Click on each region to discover its destinations.",
        "map.select": "Select a region on the map",
        "map.tag": "Ecuador",
        "map.welcome": "Welcome to Ecuador",
        "map.desc": "Click on any region on the map to discover its destinations and experiences.",
        "map.info.regions": "Regions:",
        "map.info.destinations": "Destinations:",
        "map.info.experiences": "Experiences:",
        "map.info.custom": "Personalized",
        "map.btn": "Quote my trip",

        "cta.eyebrow": "Find the perfect adventure",
        "cta.title": "Ecuador is not just known:<br>it is felt, shared and lived.",
        "cta.desc": "We help you build your next experience.",
        "cta.btn1": "Start your trip",
        "cta.btn2": "See destinations",

        "footer.desc": "Travel Agency & Tour Operator. Ecuador, from the heart of the planet.",
        "footer.contact": "Contact",
        "footer.address": "Bolívar Street, between Neptalí Ordoñez and Av. Quito",
        "footer.explore": "Explore",
        "footer.follow": "Follow us",
        "footer.copy": "© 2026 All Tour Ecuador. All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms and Conditions",

        "whatsapp.tooltip": "Need help?"
    },

    fr: {
        "nav.inicio": "Accueil",
        "nav.nosotros": "À propos",
        "nav.destinos": "Destinations",
        "nav.tours": "Circuits",
        "nav.servicios": "Services",
        "nav.experiencias": "Expériences",
        "nav.contacto": "Contact",
        "nav.cta": "Réserver",

        "hero.eyebrow": "Agence de Voyage & Tour Opérateur",
        "hero.title": "L'Équateur, au cœur de la planète",
        "hero.subtitle": "Nature, culture et expériences nées de la terre",
        "hero.btn1": "Explorer les circuits",
        "hero.btn2": "À propos",

        "chain.1": "CONNAÎTRE",
        "chain.2": "PARTAGER",
        "chain.3": "CONSOMMER LOCAL",
        "chain.4": "GÉNÉRER DES REVENUS",
        "chain.5": "RENFORCER LES FAMILLES",
        "chain.6": "PRÉSERVER LE PATRIMOINE",

        "welcome.eyebrow": "Bienvenue à",
        "welcome.title": "ALL TOUR ECUADOR",
        "welcome.text": "Votre porte d'entrée vers un Équateur authentique, diversifié et riche en expériences. Nous concevons et opérons des voyages qui connectent nos voyageurs à la nature, aux cultures, aux communautés et à l'essence de chaque territoire, offrant des expériences personnalisées avec qualité, sécurité et attention professionnelle.",
        "welcome.card1.title": "Expériences authentiques",
        "welcome.card1.text": "Nous connectons le voyageur à l'Équateur réel : ses gens, ses paysages et sa culture vivante.",
        "welcome.card2.title": "Communautés locales",
        "welcome.card2.text": "Nous travaillons main dans la main avec les familles, entreprises et prestataires locaux.",
        "welcome.card3.title": "Opération professionnelle",
        "welcome.card3.text": "Qualité, sécurité et attention personnalisée dans chaque expérience que nous concevons.",

        "history.eyebrow": "Notre Histoire",
        "history.title": "Des racines qui inspirent",
        "history.1.title": "NOS DÉBUTS",
        "history.1.text": "Nous sommes nés avec le but de montrer un Équateur qui va au-delà des destinations. Un Équateur de villages, cultures, nature, saveurs, histoires et personnes qui font de chaque territoire une expérience unique.",
        "history.2.title": "NOTRE OBJECTIF",
        "history.2.text": "Connecter le voyageur à l'Équateur authentique. Nous créons des expériences qui rapprochent nos visiteurs des communautés, de leurs traditions, de leur nature et de leur mode de vie.",
        "history.3.title": "AUJOURD'HUI",
        "history.3.text": "Aujourd'hui, nous transformons cette vision en expériences réelles. Nous concevons et opérons des voyages personnalisés, combinant authenticité, qualité, sécurité et professionnalisme.",
        "history.4.title": "NOTRE ESSENCE",
        "history.4.text": "Nous ne montrons pas seulement l'Équateur, nous le faisons vivre. Nous croyons en un tourisme qui connecte les personnes, les cultures et les territoires.",

        "about.eyebrow": "Qui sommes-nous",
        "about.title": "Plus qu'un voyage,<br>une expérience de vie",
        "about.text": "Chez All Tour Ecuador, nous croyons au tourisme comme outil de connexion, d'apprentissage et de développement. Nous sommes une équipe de professionnels locaux, guides natifs et amoureux de notre terre.",
        "about.btn": "Rencontrer notre équipe",
        "about.hero.title": "Plus qu'un voyage,<br>une expérience de vie",
        "about.hero.desc": "Découvrez l'histoire, l'équipe et l'essence qui rendent possible de vivre un Équateur authentique.",

        "regions.eyebrow": "Destinations Équateur",
        "regions.title": "Quatre régions, un seul Équateur,<br>des expériences infinies.",
        "regions.lead": "Découvrez, connectez et vivez la diversité d'un pays qui a une histoire dans chaque territoire.",
        "regions.btn": "Explorer toutes les destinations",
        "region.costa.badge": "Côte",
        "region.costa.tagline": "Saveurs, plages et culture face au Pacifique.",
        "region.costa.desc": "Vivez la gastronomie, la nature et la chaleur de la côte équatorienne.",
        "region.sierra.badge": "Andes",
        "region.sierra.tagline": "Andes, cultures et expériences nées de la terre.",
        "region.sierra.desc": "Connectez-vous avec les communautés, traditions, montagnes et paysages andins.",
        "region.amazonia.badge": "Amazonie",
        "region.amazonia.tagline": "Nature vivante, jungle et sagesse ancestrale.",
        "region.amazonia.desc": "Explorez la biodiversité et découvrez le lien entre ses peuples et l'Amazonie.",
        "region.galapagos.badge": "Galápagos",
        "region.galapagos.tagline": "Un monde unique à découvrir et à préserver.",
        "region.galapagos.desc": "Vivez une expérience extraordinaire entre faune, océan et paysages uniques.",

        "tours.eyebrow": "Circuits en vedette",
        "tours.title": "Des expériences nées de la terre",
        "tours.lead": "Vivez le meilleur de l'Équateur avec nos forfaits personnalisés. Nature, culture, aventure et plus.",
        "tours.btn": "Voir tous les circuits",
        "tour.btn": "Plus d'infos",
        "tour1.title": "RACINES D'OTAVALO",
        "tour1.desc": "Totora, textiles, saveurs et mélodies de la culture Kichwa.",
        "tour2.title": "TERRE, SAVEUR ET ESPRIT KICHWA COTACACHI",
        "tour2.desc": "Une expérience Kichwa à La Calera.",
        "tour3.title": "PATRIMOINE ANCESTRAL KICHWA",
        "tour3.desc": "Femmes, territoire et savoirs vivants de Cotacachi.",
        "tour4.title": "SAVEURS ET RACINES D'IMBABURA",
        "tour4.desc": "De la chakra à la table et du territoire au paysage.",
        "tour5.title": "ARÔMES, SAVEURS ET AVENTURE D'INTAG",
        "tour5.desc": "Une expérience entre café, canne, nature et aventure.",
        "tour6.title": "ENTRE ALPAGAS ET TEXTILES ANDINS",
        "tour6.desc": "Une expérience de páramo, communauté et tradition Kichwa.",

        "map.eyebrow": "Explorer la carte",
        "map.title": "Équateur, un pays. Quatre mondes.",
        "map.lead": "Côte | Andes | Amazonie | Galápagos. Cliquez sur chaque région pour découvrir ses destinations.",
        "map.select": "Sélectionnez une région sur la carte",
        "map.tag": "Équateur",
        "map.welcome": "Bienvenue en Équateur",
        "map.desc": "Cliquez sur n'importe quelle région de la carte pour découvrir ses destinations et expériences.",
        "map.info.regions": "Régions :",
        "map.info.destinations": "Destinations :",
        "map.info.experiences": "Expériences :",
        "map.info.custom": "Personnalisées",
        "map.btn": "Demander un devis",

        "cta.eyebrow": "Trouvez l'aventure parfaite",
        "cta.title": "L'Équateur ne se connaît pas seulement :<br>il se ressent, se partage et se vit.",
        "cta.desc": "Nous vous aidons à construire votre prochaine expérience.",
        "cta.btn1": "Commencez votre voyage",
        "cta.btn2": "Voir les destinations",

        "footer.desc": "Agence de Voyage & Tour Opérateur. L'Équateur, au cœur de la planète.",
        "footer.contact": "Contact",
        "footer.address": "Rue Bolívar, entre Neptalí Ordoñez et Av. Quito",
        "footer.explore": "Explorer",
        "footer.follow": "Suivez-nous",
        "footer.copy": "© 2026 All Tour Ecuador. Tous droits réservés.",
        "footer.privacy": "Politique de confidentialité",
        "footer.terms": "Termes et conditions",

        "whatsapp.tooltip": "Besoin d'aide ?"
    }
};

// ==========================================
// 2. APLICAR IDIOMA
// ==========================================
function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    // Reemplazar textos
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = dict[key];
            } else {
                el.innerHTML = dict[key];
            }
        }
    });

    // Actualizar selector
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();

    // Guardar preferencia
    localStorage.setItem('alltour_lang', lang);

    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;
}

// Inicializar idioma
const savedLang = localStorage.getItem('alltour_lang') || 'es';
document.addEventListener('DOMContentLoaded', () => {
    applyLanguage(savedLang);
});

// Manejo del dropdown
const langBtn = document.getElementById('langBtn');
const langDropdown = document.getElementById('langDropdown');

if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
        if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
            langDropdown.classList.remove('open');
        }
    });

    langDropdown.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            applyLanguage(lang);
            langDropdown.classList.remove('open');
        });
    });
}

// ==========================================
// 3. PRELOADER
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
// 4. HEADER SCROLLED
// ==========================================
const siteHeader = document.getElementById('siteHeader');

if (siteHeader) {
    if (siteHeader.classList.contains('scrolled')) {
        // Página interna: header siempre sólido
        siteHeader.dataset.alwaysScrolled = 'true';
    } else {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                siteHeader.classList.add('scrolled');
            } else {
                siteHeader.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll);
        handleScroll();
    }
}

// ==========================================
// 5. MENÚ MÓVIL
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('open');
            document.body.classList.remove('no-scroll');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('open');
            document.body.classList.remove('no-scroll');
        }
    });
}

// ==========================================
// 6. CARRUSEL HERO
// ==========================================
if (document.querySelector('.hero-swiper')) {
    new Swiper('.hero-swiper', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        speed: 1000,
        effect: 'fade',
        fadeEffect: { crossFade: true },
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
// 7. BACK TO TOP
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==========================================
// 8. SCROLL REVEAL
// ==========================================
const revealElements = document.querySelectorAll(
    '.welcome-card, .history-card, .region-card, .tour-card, .service-card, .why-card, .testimonial-card, .quick-nav-item, .team-card, .extra-service-card, .service-detail-content, .region-detail-content, .story-content, .team-intro-content'
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
// 9. SMOOTH SCROLL
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
// 10. FORMULARIO DE CONTACTO
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
// 11. MAPA DE REGIONES
// ==========================================
const tourMapEl = document.getElementById('tourMap');

if (tourMapEl && typeof L !== 'undefined') {
    const tourMap = L.map('tourMap', {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true
    }).setView([-1.8312, -78.1834], 6);

    // Tiles CARTO Voyager con API key
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_3syj_1_19da2f09472d3f015f43f8d9', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        detectRetina: true
    }).addTo(tourMap);

    // Icono personalizado
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div class="marker-pin"><div class="marker-pin-inner"></div></div>',
        iconSize: [36, 44],
        iconAnchor: [18, 44],
        popupAnchor: [0, -40]
    });

    // Datos de las 4 regiones
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
            img: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80',
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

    // Referencias al panel
    const panelImg = document.getElementById('panelImg');
    const panelImgOverlay = document.getElementById('panelImgOverlay');
    const panelTag = document.getElementById('panelTag');
    const panelTitle = document.getElementById('panelTitle');
    const panelDesc = document.getElementById('panelDesc');
    const panelInfo = document.getElementById('panelInfo');

    // Agregar marcadores
    regiones.forEach(region => {
        const marker = L.marker(region.coords, { icon: customIcon }).addTo(tourMap);

        marker.bindPopup(`<h4>${region.nombre}</h4><p>${region.tag}</p>`);

        marker.on('click', () => {
            if (panelImgOverlay) panelImgOverlay.style.display = 'none';

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

            tourMap.flyTo(region.coords, 7, { duration: 1.2 });
        });
    });

    window.addEventListener('resize', () => {
        tourMap.invalidateSize();
    });
}

// ==========================================
// 12. MAPA DE CONTACTO
// ==========================================
const contactMapEl = document.getElementById('contactMap');

if (contactMapEl && typeof L !== 'undefined') {
    // Coordenadas exactas: Calle Bolívar, entre Neptalí Ordoñez y Av. Quito, Otavalo
    const officeCoords = [0.23072435180832726, -78.25970581792483];

    const contactMap = L.map('contactMap', {
        scrollWheelZoom: false,
        zoomControl: true
    }).setView(officeCoords, 18);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_3syj_1_19da2f09472d3f015f43f8d9', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        detectRetina: true
    }).addTo(contactMap);

    const contactIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div class="marker-pin"><div class="marker-pin-inner"></div></div>',
        iconSize: [36, 44],
        iconAnchor: [18, 44],
        popupAnchor: [0, -40]
    });

    const officeMarker = L.marker(officeCoords, { icon: contactIcon }).addTo(contactMap);

    officeMarker.bindPopup(`
        <h4>All Tour Ecuador</h4>
        <p>Calle Bolívar, entre Neptalí Ordoñez y Av. Quito</p>
        <p style="margin-top:6px;font-size:0.8rem;color:#5A7A94;">Otavalo, Imbabura - Ecuador</p>
        <a href="https://www.google.com/maps/dir/?api=1&destination=0.23072435180832726,-78.25970581792483" 
           target="_blank" 
           rel="noopener"
           style="display:inline-block;margin-top:10px;padding:6px 14px;background:#2BA8A0;color:#fff;border-radius:999px;font-size:0.8rem;font-weight:600;text-decoration:none;">
            Cómo llegar →
        </a>
    `).openPopup();

    window.addEventListener('resize', () => {
        contactMap.invalidateSize();
    });
}
