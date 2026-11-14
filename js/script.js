// ==========================================
// ALL TOUR ECUADOR — Script principal
// ==========================================

// ==========================================
// 1. SISTEMA MULTI-IDIOMA (ES / EN / FR)
// ==========================================
const translations = {
    es: {
        // NAV
        "nav.inicio": "Inicio",
        "nav.nosotros": "Nosotros",
        "nav.tours": "Tours",
        "nav.destinos": "Destinos",
        "nav.servicios": "Servicios",
        "nav.experiencias": "Experiencias",
        "nav.contacto": "Contacto",
        "nav.cta": "Reservar",

        // HERO
"hero.eyebrow": "Turismo que conecta con nuestras raíces",
        "hero.title": "Ecuador, desde el corazón del planeta",
        "hero.subtitle": "Naturaleza, cultura y experiencias que nacen desde la tierra",
        "hero.btn1": "Explorar tours",
        "hero.btn2": "Conócenos",
        "hero.slide2.eyebrow": "Alpacas & Tejidos Andinos",
        "hero.slide2.title": "Tradiciones que se tejen con el tiempo",
        "hero.slide2.subtitle": "Páramo, comunidad y cultura Kichwa",
        "hero.slide3.eyebrow": "Naturaleza Viva",
        "hero.slide3.title": "Cascadas, páramos y paisajes únicos",
        "hero.slide3.subtitle": "Experiencias que nacen desde la tierra",
        "hero.slide4.eyebrow": "Sabiduría Ancestral",
        "hero.slide4.title": "Rituales que conectan con la esencia",
        "hero.slide4.subtitle": "Culturas vivas que trascienden el turismo",

        // WELCOME
        "welcome.eyebrow": "Bienvenidos a",
        "welcome.title": "ALLTOURECUADOR",
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

        // ABOUT (parallax index)
        "about.eyebrow": "Quiénes somos",
        "about.title": "Más que un viaje,<br>una experiencia de vida",
        "about.text": "En AllTourEcuador creemos en el turismo como una herramienta de conexión, aprendizaje y desarrollo. Somos un equipo de profesionales locales, guías nativos y amantes de nuestra tierra, que te acompañarán a vivir experiencias auténticas, seguras y memorables.",
        "about.btn": "Conoce nuestro equipo",

        // REGIONS
        "regions.eyebrow": "Destinos Ecuador",
        "regions.title": "Cuatro regiones, un solo Ecuador,<br>infinitas experiencias.",
        "regions.lead": "Descubre, conecta y vive la diversidad de un país que tiene una historia en cada territorio.",
        "regions.btn": "Explorar todos los destinos",
        "region.costa.badge": "Costa",
        "region.costa.tagline": "Sabores, playas y cultura frente al Pacífico.",
        "region.costa.desc": "Vive la gastronomía, naturaleza y calidez de la Costa ecuatoriana.",
        "region.sierra.badge": "Andes",
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
        "tour4.title": "CUICOCHA NATURE TREK",
        "tour4.desc": "Naturaleza, trekking y cultura viva de Cotacachi.",
        "tour5.title": "SABERES ANCESTRALES DE LA TIERRA Y LA MUJER",
        "tour5.desc": "Yunta, tejido, plantas medicinales y conocimientos de partería.",
        "tour6.title": "AROMAS, SABORES Y AVENTURA DE INTAG",
        "tour6.desc": "Una experiencia entre café, caña, naturaleza y aventura.",
        "tour7.title": "ENTRE ALPACAS Y TEJIDOS ANDINOS",
        "tour7.desc": "Una experiencia de páramo, comunidad y tradición Kichwa.",

        // CTA FINAL
        "cta.eyebrow": "Encuentra la convivencia cultural perfecta",
        "cta.title": "Ecuador no solo se conoce:<br>se siente, se comparte y se vive.",
        "cta.desc": "Te ayudamos a construir tu próxima experiencia.",
        "cta.btn1": "Comienza tu viaje",
        "cta.btn2": "Ver tours",

        // FOOTER
        "footer.desc": "Agencia de Viajes y Operador Turístico. Ecuador, desde el corazón del planeta.",
        "footer.contact": "Contacto",
        "footer.address": "Calle Bolívar, entre Neptalí Ordoñez y Av. Quito",
        "footer.explore": "Explora",
        "footer.follow": "Síguenos",
        "footer.copy": "© 2026 AllTourEcuador. Todos los derechos reservados.",
        "footer.privacy": "Política de privacidad",
        "footer.terms": "Términos y condiciones",

        // WHATSAPP
        "whatsapp.tooltip": "¿Necesitas ayuda?",

        // MODAL TOURS
        "modal.description": "Descripción de la Experiencia",
        "modal.itinerary": "Itinerario Resumido",
        "modal.facts": "Ficha Técnica",
        "modal.includes": "Incluye",
        "modal.notIncludes": "No incluye",
        "modal.cta": "Cotizar este tour",

        // ===== NOSOTROS =====
        "nosotros.hero.eyebrow": "Quiénes somos",
        "nosotros.hero.title": "Más que un viaje,<br>una experiencia de vida",
        "nosotros.hero.desc": "Conoce la historia, el equipo y la esencia que hacen posible vivir un Ecuador auténtico.",
        "nosotros.story.eyebrow": "Our Story",
        "nosotros.story.title": "Nuestra historia",
        "nosotros.story.text1": "ALL TOUR ECUADOR nace con el propósito de mostrar un Ecuador que va más allá de sus destinos turísticos. Nacemos desde el conocimiento y la experiencia en territorio, convencidos de que viajar también significa conocer personas, compartir culturas, descubrir sabores, caminar por paisajes y acercarse a las historias que hacen único a cada lugar.",
        "nosotros.story.text2": "Con el tiempo, hemos construido una propuesta que combina autenticidad, atención personalizada, seguridad y profesionalismo, trabajando de manera cercana con comunidades, familias, emprendimientos y prestadores de servicios locales.",
        "nosotros.story.text3": "Hoy, ALL TOUR ECUADOR diseña y opera experiencias que buscan conectar al viajero con la verdadera esencia del país: un Ecuador diverso, cultural y natural, que no solo se visita, sino que se vive.",
        "nosotros.team.eyebrow": "About Our Team",
        "nosotros.team.title": "Un equipo que conoce y vive cada territorio",
        "nosotros.team.text1": "En ALL TOUR ECUADOR contamos con un equipo profesional y comprometido, integrado por guías especializados, personal de logística preparado y prestadores de servicios de calidad que trabajan de manera coordinada para garantizar experiencias seguras, auténticas y bien organizadas.",
        "nosotros.team.text2": "Nuestro equipo también está formado por quienes conocen y viven cada territorio: mujeres y hombres del campo, organizaciones comunitarias, feriantes, agricultores, artesanos, emprendedores y conocedores de la espiritualidad, la cultura y las prácticas de sostenibilidad.",
        "nosotros.team.text3": "Valoramos sus conocimientos y experiencias como parte fundamental de nuestros servicios, creando un vínculo entre el profesional del turismo y los verdaderos protagonistas de cada destino. Así construimos una propuesta donde la calidad del servicio se une con el conocimiento local, fortaleciendo a las familias y organizaciones que hacen posible vivir un Ecuador auténtico.",
        "nosotros.why.eyebrow": "Why Us?",
        "nosotros.why.title": "¿Por qué viajar con nosotros?",
        "nosotros.why.text1": "Viajar con ALL TOUR ECUADOR es elegir una manera diferente de conocer Ecuador: no solo visitamos destinos, sino que conectamos al viajero con la esencia de cada territorio, sus culturas, comunidades, familias, gastronomía, naturaleza y saberes ancestrales.",
        "nosotros.why.text2": "Diseñamos experiencias auténticas y personalizadas que combinan convivencia, aventura, cultura y naturaleza con una operación profesional, segura y responsable, generando además oportunidades para quienes hacen del turismo una forma de vida.",
        "nosotros.why.text3": "Queremos que cada viajero no se lleve únicamente fotografías, sino historias, emociones y vínculos que permanezcan en su memoria. Porque Ecuador no solo se conoce: se siente, se comparte y se vive.",
        "nosotros.meet.eyebrow": "Meet Our Team",
        "nosotros.meet.title": "Los protagonistas de cada experiencia",
        "nosotros.meet.lead": "Profesionales del turismo y conocedores locales unidos por un mismo propósito: hacer vivir un Ecuador auténtico.",
        "nosotros.team.emprendedores": "EMPRENDEDORES",
        "nosotros.team.emprendedores.text": "Como emprendedores del sector turístico, trabajamos con un profundo compromiso y constante preparación profesional, entregando en cada servicio la pasión, el detalle y la maestría artesanal de nuestra tierra para ofrecer vivencias auténticas e inolvidables.",
        "nosotros.team.guias": "GUÍAS LOCALES",
        "nosotros.team.guias.text": "Como conocedor de mi territorio, acompaño a nuestros visitantes compartiendo la historia, cultura, naturaleza y tradiciones que hacen único a cada destino.",
        "nosotros.team.agricultores": "AGRICULTORES",
        "nosotros.team.agricultores.text": "Desde la chakra y el trabajo de la tierra, compartimos nuestros productos, conocimientos y formas de vida, permitiendo al visitante conocer el origen de nuestros alimentos y nuestra cultura.",
        "nosotros.team.mujeres": "ASOCIACIÓN DE MUJERES",
        "nosotros.team.mujeres.text": "A través de nuestro trabajo asociativo, transformamos productos, conocimientos y tradiciones en experiencias que generan oportunidades para nuestras familias y fortalecen nuestra comunidad.",
        "nosotros.team.sostenibilidad": "SOSTENIBILIDAD",
        "nosotros.team.sostenibilidad.text": "Nuestro compromiso con la sostenibilidad asegura un futuro donde la riqueza de nuestra flora y fauna, y la belleza de este páramo sagrado, permanezcan intactos para las generaciones venideras.",
        "nosotros.team.chefs": "CHEFS",
        "nosotros.team.chefs.text": "Desde nuestra cocina llevamos a la mesa los sabores del territorio, utilizando productos locales para convertir cada plato en una forma de conocer nuestra cultura y nuestras tradiciones.",
        "nosotros.team.transportistas": "TRANSPORTISTAS",
        "nosotros.team.transportistas.text": "Con experiencia en las rutas y caminos del Ecuador, nuestro compromiso es brindar traslados seguros, responsables y puntuales, conectando cada destino con una operación turística de calidad.",

        // ===== TOURS PAGE =====
        "tourspage.hero.eyebrow": "Nuestros paquetes",
        "tourspage.hero.title": "Experiencias que nacen de la tierra",
        "tourspage.hero.desc": "Vive lo mejor de Ecuador con nuestros paquetes personalizados. Naturaleza, cultura, aventura y turismo vivencial Kichwa.",
        "tourspage.sidebar.title": "Encuentra tu viaje",
        "tourspage.sidebar.remove": "Quitar filtros",
        "tourspage.filter.destino": "Destino",
        "tourspage.filter.tipo": "Tipo de experiencia",
        "tourspage.filter.nivel": "Nivel de actividad",
        "tourspage.filter.duracion": "Por duración",
        "tourspage.main.title": "Paquetes disponibles",
        "tourspage.main.desc": "Todos nuestros paquetes incluyen guía nativo especializado, transporte y experiencias auténticas. Precios por persona con mínimo 4 pax.",
        "tourspage.contact.cta": "Contáctanos",
        "tourspage.contact.cta.heading": "Tu viaje ideal empieza con una conversación",
        "tourspage.contact.cta.eyebrow": "Estamos para ayudarte",
        "tourspage.contact.cta.title": "Descubre Ecuador con confianza",
        "tourspage.contact.cta.text": "Cuéntanos qué te gustaría vivir y diseñamos juntos una experiencia a tu medida. Expertos locales, atención personalizada y viajes que se sienten desde el corazón del planeta.",
        "tourspage.contact.cta.subtitle": "Llámanos",
        "tourspage.contact.cta.whatsapp": "Escríbenos por WhatsApp",

        // ===== DESTINOS PAGE =====
        "destinos.eyebrow": "Destinos Ecuador",
        "destinos.hero.title": "Cuatro regiones, infinitas experiencias",
        "destinos.hero.desc": "Ecuador reúne en un territorio compacto una extraordinaria diversidad de paisajes, culturas, ecosistemas y formas de vida. Desde las montañas y comunidades de los Andes hasta la biodiversidad de la Amazonía, las playas de la Costa y los ecosistemas únicos de Galápagos.",
        "destinos.intro.eyebrow": "Descubre el país",
        "destinos.intro.title": "Ecuador, un país. Cuatro mundos.",
        "destinos.intro.lead": "Costa | Andes | Amazonía | Galápagos. Explora diferentes paisajes, culturas y experiencias en un mismo viaje. ALL TOUR ECUADOR te permite descubrir el país mediante viajes organizados, experiencias culturales, turismo comunitario, naturaleza, aventura, gastronomía y recorridos diseñados de acuerdo con los intereses de cada viajero.",
        "destinos.andes.eyebrow": "Región Andes",
        "destinos.andes.title": "Montañas, cultura y tradiciones vivas",
        "destinos.andes.lead": "Los Andes ecuatorianos combinan volcanes, lagunas, páramos, ciudades patrimoniales y comunidades indígenas que mantienen vivas sus tradiciones. En esta región, ALL TOUR ECUADOR desarrolla experiencias relacionadas con:",
        "destinos.amazonia.eyebrow": "Región Amazonía",
        "destinos.amazonia.title": "Naturaleza, biodiversidad y culturas ancestrales",
        "destinos.amazonia.lead": "La Amazonía ecuatoriana ofrece una experiencia de inmersión en bosques tropicales, ríos, biodiversidad y territorios de pueblos y nacionalidades indígenas.",
        "destinos.galapagos.eyebrow": "Región Galápagos",
        "destinos.galapagos.title": "Naturaleza que no existe en ningún otro lugar",
        "destinos.galapagos.lead": "Las Islas Galápagos representan uno de los grandes destinos naturales del Ecuador, con ecosistemas volcánicos, fauna endémica y experiencias de conservación y contacto con la naturaleza.",
        "destinos.costa.eyebrow": "Región Costa",
        "destinos.costa.title": "Pacífico, naturaleza y sabores del Ecuador",
        "destinos.costa.lead": "La Costa ecuatoriana combina playas, manglares, bosques, gastronomía, comunidades pesqueras y experiencias vinculadas al océano Pacífico.",
        "destinos.experiencias": "Experiencias",
        "destinos.destinos": "Destinos destacados",
        "destinos.islas": "Islas destacadas",
        "destinos.verpaquetes": "Ver paquetes disponibles",

        // ===== EXPERIENCIAS PAGE =====
        "experiencias.hero.eyebrow": "Experiencias All Tour Ecuador",
        "experiencias.hero.title": "Historias que transforman vidas",
        "experiencias.hero.desc": "Cada viaje deja una huella: en los viajeros y en las comunidades que hacen posible vivir un Ecuador auténtico. Descubre sus voces.",
        "experiencias.reviews.eyebrow": "Lo que dicen nuestros viajeros",
        "experiencias.reviews.title": "Experiencias que se llevan en el corazón",
        "experiencias.reviews.lead": "Reseñas reales de quienes han vivido los Andes, la Amazonía, la Costa y Galápagos con nosotros.",
        "experiencias.value.eyebrow": "Voces de nuestra cadena de valor",
        "experiencias.value.title": "El cambio de vida detrás de cada viaje",
        "experiencias.value.lead": "El turismo que practicamos genera impacto real en las familias y organizaciones que son parte de cada experiencia. Estas son sus historias.",

        // ===== CONTACTO PAGE =====
        "contacto.hero.eyebrow": "Estamos aquí para ayudarte",
        "contacto.hero.title": "Contáctanos",
        "contacto.hero.desc": "Cuéntanos sobre tu viaje soñado y nuestro equipo te ayudará a planificarlo. Respondemos en menos de 24 horas.",
        "contacto.info.eyebrow": "Información de contacto",
        "contacto.info.title": "Hablemos de tu próximo viaje",
        "contacto.info.desc": "Puedes escribirnos, llamarnos o visitarnos. ¡Nos encantará conocerte!",
        "contacto.info.oficina": "Oficina principal",
        "contacto.info.telefono": "Teléfono / Celular",
        "contacto.info.whatsapp": "WhatsApp",
        "contacto.info.email": "Email",
        "contacto.info.horario": "Horario de atención",
        "contacto.info.siguenos": "Síguenos",
        "contacto.form.eyebrow": "Formulario de contacto",
        "contacto.form.title": "Envíanos un mensaje",
        "contacto.form.desc": "Los campos marcados con * son obligatorios.",
        "contacto.form.nombre": "Nombre completo *",
        "contacto.form.email": "Correo electrónico *",
        "contacto.form.telefono": "Teléfono",
        "contacto.form.region": "Región de interés *",
        "contacto.form.tour": "Tour de interés",
        "contacto.form.personas": "Número de personas",
        "contacto.form.fecha": "Fecha aproximada del viaje",
        "contacto.form.duracion": "Duración estimada",
        "contacto.form.mensaje": "Cuéntanos sobre tu viaje soñado *",
        "contacto.form.enviar": "Enviar mensaje",
        "contacto.form.nota": "Al enviar aceptas nuestra <a href=\"#\">política de privacidad</a>.",
        "contacto.form.nombre.ph": "Tu nombre",
"contacto.form.email.ph": "tu@email.com",
"contacto.form.telefono.ph": "+593 99 789 8745",
"contacto.form.personas.ph": "Ej: 4",
"contacto.form.mensaje.ph": "Escríbenos aquí...",
        "contacto.map.eyebrow": "Encuéntranos",
        "contacto.map.title": "Visítanos en nuestra oficina",
        "contacto.map.lead": "Estamos ubicados en el corazón de Otavalo, Imbabura. ¡Te esperamos!",
        "contacto.map.comollegar": "Cómo llegar",
        "contacto.cta.eyebrow": "Atención personalizada",
        "contacto.cta.title": "¿Prefieres hablar con nosotros directamente?",
        "contacto.cta.desc": "Llámanos o escríbenos por WhatsApp y te atendemos al instante.",
        "contacto.cta.llamar": "Llamar ahora",
        "contacto.cta.whatsapp": "WhatsApp"
    },

    en: {
        // NAV
        "nav.inicio": "Home",
        "nav.nosotros": "About Us",
        "nav.tours": "Tours",
        "nav.destinos": "Destinations",
        "nav.servicios": "Services",
        "nav.experiencias": "Experiences",
        "nav.contacto": "Contact",
        "nav.cta": "Book Now",

        // HERO
"hero.eyebrow": "Travel that connects with our roots",
        "hero.title": "Ecuador, from the heart of the planet",
        "hero.subtitle": "Nature, culture and experiences born from the land",
        "hero.btn1": "Explore tours",
        "hero.btn2": "About us",
        "hero.slide2.eyebrow": "Alpacas & Andean Textiles",
        "hero.slide2.title": "Traditions woven over time",
        "hero.slide2.subtitle": "Páramo, community and Kichwa culture",
        "hero.slide3.eyebrow": "Living Nature",
        "hero.slide3.title": "Waterfalls, páramos and unique landscapes",
        "hero.slide3.subtitle": "Experiences born from the land",
        "hero.slide4.eyebrow": "Ancestral Wisdom",
        "hero.slide4.title": "Rituals that connect with the essence",
        "hero.slide4.subtitle": "Living cultures that go beyond tourism",

        // WELCOME
        "welcome.eyebrow": "Welcome to",
        "welcome.title": "ALLTOURECUADOR",
        "welcome.text": "Your gateway to an authentic, diverse and experience-filled Ecuador. We design and operate trips that connect our travelers with nature, cultures, communities and the essence of each territory, offering personalized experiences with quality, safety and professional attention.",
        "welcome.card1.title": "Authentic experiences",
        "welcome.card1.text": "We connect travelers with the real Ecuador: its people, landscapes and living culture.",
        "welcome.card2.title": "Local communities",
        "welcome.card2.text": "We work hand in hand with local families, businesses and service providers.",
        "welcome.card3.title": "Professional operation",
        "welcome.card3.text": "Quality, safety and personalized attention in every experience we design.",

        // HISTORY
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

        // ABOUT
        "about.eyebrow": "Who we are",
        "about.title": "More than a trip,<br>a life experience",
        "about.text": "At AllTourEcuador we believe in tourism as a tool for connection, learning and development. We are a team of local professionals, native guides and lovers of our land, who will accompany you to live authentic, safe and memorable experiences.",
        "about.btn": "Meet our team",

        // REGIONS
        "regions.eyebrow": "Ecuador Destinations",
        "regions.title": "Four regions, one Ecuador,<br>infinite experiences.",
        "regions.lead": "Discover, connect and live the diversity of a country that has a story in every territory.",
        "regions.btn": "Explore all destinations",
        "region.costa.badge": "Coast",
        "region.costa.tagline": "Flavors, beaches and culture facing the Pacific.",
        "region.costa.desc": "Experience the gastronomy, nature and warmth of the Ecuadorian Coast.",
        "region.sierra.badge": "Andes",
        "region.sierra.tagline": "Andes, cultures and experiences born from the land.",
        "region.sierra.desc": "Connect with communities, traditions, mountains and Andean landscapes.",
        "region.amazonia.badge": "Amazon",
        "region.amazonia.tagline": "Living nature, jungle and ancestral wisdom.",
        "region.amazonia.desc": "Explore biodiversity and discover the connection between its peoples and the Amazon.",
        "region.galapagos.badge": "Galapagos",
        "region.galapagos.tagline": "A unique world to discover and preserve.",
        "region.galapagos.desc": "Live an extraordinary experience among wildlife, ocean and unique landscapes.",

        // TOURS
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
        "tour4.title": "CUICOCHA NATURE TREK",
        "tour4.desc": "Nature, trekking and living culture of Cotacachi.",
        "tour5.title": "ANCESTRAL KNOWLEDGE OF LAND AND WOMAN",
        "tour5.desc": "Yoke, weaving, medicinal plants and midwifery knowledge.",
        "tour6.title": "AROMAS, FLAVORS AND ADVENTURE OF INTAG",
        "tour6.desc": "An experience among coffee, cane, nature and adventure.",
        "tour7.title": "BETWEEN ALPACAS AND ANDEAN TEXTILES",
        "tour7.desc": "An experience of paramo, community and Kichwa tradition.",

        // CTA FINAL
        "cta.eyebrow": "Find the perfect adventure",
        "cta.title": "Ecuador is not just known:<br>it is felt, shared and lived.",
        "cta.desc": "We help you build your next experience.",
        "cta.btn1": "Start your trip",
        "cta.btn2": "See tours",

        // FOOTER
        "footer.desc": "Travel Agency & Tour Operator. Ecuador, from the heart of the planet.",
        "footer.contact": "Contact",
        "footer.address": "Bolívar Street, between Neptalí Ordoñez and Av. Quito",
        "footer.explore": "Explore",
        "footer.follow": "Follow us",
        "footer.copy": "© 2026 AllTourEcuador. All rights reserved.",
        "footer.privacy": "Privacy Policy",
        "footer.terms": "Terms and Conditions",

        // WHATSAPP
        "whatsapp.tooltip": "Need help?",

        // MODAL TOURS
        "modal.description": "Experience Description",
        "modal.itinerary": "Summary Itinerary",
        "modal.facts": "Key Facts",
        "modal.includes": "Includes",
        "modal.notIncludes": "Does not include",
        "modal.cta": "Quote this tour",

        // NOSOTROS
        "nosotros.hero.eyebrow": "Who we are",
        "nosotros.hero.title": "More than a trip,<br>a life experience",
        "nosotros.hero.desc": "Discover the history, team and essence that make it possible to live an authentic Ecuador.",
        "nosotros.story.eyebrow": "Our Story",
        "nosotros.story.title": "Our history",
        "nosotros.story.text1": "ALL TOUR ECUADOR was born with the purpose of showing an Ecuador that goes beyond its tourist destinations. We come from knowledge and experience in the territory, convinced that traveling also means meeting people, sharing cultures, discovering flavors, walking through landscapes and getting closer to the stories that make each place unique.",
        "nosotros.story.text2": "Over time, we have built a proposal that combines authenticity, personalized attention, safety and professionalism, working closely with communities, families, businesses and local service providers.",
        "nosotros.story.text3": "Today, ALL TOUR ECUADOR designs and operates experiences that seek to connect travelers with the true essence of the country: a diverse, cultural and natural Ecuador, which is not only visited, but lived.",
        "nosotros.team.eyebrow": "About Our Team",
        "nosotros.team.title": "A team that knows and lives each territory",
        "nosotros.team.text1": "At ALL TOUR ECUADOR we have a professional and committed team, made up of specialized guides, prepared logistics staff and quality service providers who work in a coordinated manner to guarantee safe, authentic and well-organized experiences.",
        "nosotros.team.text2": "Our team is also formed by those who know and live each territory: rural women and men, community organizations, market vendors, farmers, artisans, entrepreneurs and connoisseurs of spirituality, culture and sustainability practices.",
        "nosotros.team.text3": "We value their knowledge and experiences as a fundamental part of our services, creating a link between the tourism professional and the true protagonists of each destination. This is how we build a proposal where service quality meets local knowledge, strengthening the families and organizations that make it possible to live an authentic Ecuador.",
        "nosotros.why.eyebrow": "Why Us?",
        "nosotros.why.title": "Why travel with us?",
        "nosotros.why.text1": "Traveling with ALL TOUR ECUADOR means choosing a different way of knowing Ecuador: we don't just visit destinations, we connect the traveler with the essence of each territory, its cultures, communities, families, gastronomy, nature and ancestral knowledge.",
        "nosotros.why.text2": "We design authentic and personalized experiences that combine coexistence, adventure, culture and nature with a professional, safe and responsible operation, also generating opportunities for those who make tourism a way of life.",
        "nosotros.why.text3": "We want each traveler to take home not only photographs, but stories, emotions and bonds that remain in their memory. Because Ecuador is not only known: it is felt, shared and lived.",
        "nosotros.meet.eyebrow": "Meet Our Team",
        "nosotros.meet.title": "The protagonists of each experience",
        "nosotros.meet.lead": "Tourism professionals and local connoisseurs united by the same purpose: to make an authentic Ecuador come alive.",
        "nosotros.team.emprendedores": "ENTREPRENEURS",
        "nosotros.team.emprendedores.text": "As entrepreneurs in the tourism sector, we work with deep commitment and constant professional preparation, delivering in each service the passion, detail and artisanal mastery of our land to offer authentic and unforgettable experiences.",
        "nosotros.team.guias": "LOCAL GUIDES",
        "nosotros.team.guias.text": "As a connoisseur of my territory, I accompany our visitors by sharing the history, culture, nature and traditions that make each destination unique.",
        "nosotros.team.agricultores": "FARMERS",
        "nosotros.team.agricultores.text": "From the chakra and the work of the land, we share our products, knowledge and ways of life, allowing visitors to know the origin of our food and our culture.",
        "nosotros.team.mujeres": "WOMEN'S ASSOCIATION",
        "nosotros.team.mujeres.text": "Through our associative work, we transform products, knowledge and traditions into experiences that create opportunities for our families and strengthen our community.",
        "nosotros.team.sostenibilidad": "SUSTAINABILITY",
        "nosotros.team.sostenibilidad.text": "Our commitment to sustainability ensures a future where the richness of our flora and fauna, and the beauty of this sacred páramo, remain intact for future generations.",
        "nosotros.team.chefs": "CHEFS",
        "nosotros.team.chefs.text": "From our kitchen we bring the flavors of the territory to the table, using local products to turn each dish into a way of knowing our culture and traditions.",
        "nosotros.team.transportistas": "TRANSPORT PROVIDERS",
        "nosotros.team.transportistas.text": "With experience on the roads and routes of Ecuador, our commitment is to provide safe, responsible and punctual transfers, connecting each destination with a quality tourism operation.",

        // TOURS PAGE
        "tourspage.hero.eyebrow": "Our packages",
        "tourspage.hero.title": "Experiences born from the land",
        "tourspage.hero.desc": "Live the best of Ecuador with our personalized packages. Nature, culture, adventure and Kichwa experiential tourism.",
        "tourspage.sidebar.title": "Find your trip",
        "tourspage.sidebar.remove": "Remove filters",
        "tourspage.filter.destino": "Destination",
        "tourspage.filter.tipo": "Experience type",
        "tourspage.filter.nivel": "Activity level",
        "tourspage.filter.duracion": "By duration",
        "tourspage.main.title": "Available packages",
        "tourspage.main.desc": "All our packages include a specialized native guide, transport and authentic experiences. Prices per person with a minimum of 4 pax.",
        "tourspage.contact.cta": "Contact us",
        "tourspage.contact.cta.heading": "Your ideal trip starts with a conversation",
        "tourspage.contact.cta.eyebrow": "We are here to help you",
        "tourspage.contact.cta.title": "Discover Ecuador with confidence",
        "tourspage.contact.cta.text": "Tell us what you would like to experience and we will design an experience tailored to you. Local experts, personalized attention and trips that are felt from the heart of the planet.",
        "tourspage.contact.cta.subtitle": "Call us",
        "tourspage.contact.cta.whatsapp": "Write to us on WhatsApp",

        // DESTINOS PAGE
        "destinos.eyebrow": "Ecuador Destinations",
        "destinos.hero.title": "Four regions, infinite experiences",
        "destinos.hero.desc": "Ecuador brings together in a compact territory an extraordinary diversity of landscapes, cultures, ecosystems and ways of life. From the mountains and communities of the Andes to the biodiversity of the Amazon, the beaches of the Coast and the unique ecosystems of Galapagos.",
        "destinos.intro.eyebrow": "Discover the country",
        "destinos.intro.title": "Ecuador, one country. Four worlds.",
        "destinos.intro.lead": "Coast | Andes | Amazon | Galapagos. Explore different landscapes, cultures and experiences in a single trip. ALL TOUR ECUADOR allows you to discover the country through organized trips, cultural experiences, community tourism, nature, adventure, gastronomy and routes designed according to the interests of each traveler.",
        "destinos.andes.eyebrow": "Andes Region",
        "destinos.andes.title": "Mountains, culture and living traditions",
        "destinos.andes.lead": "The Ecuadorian Andes combine volcanoes, lagoons, páramos, heritage cities and indigenous communities that keep their traditions alive. In this region, ALL TOUR ECUADOR develops experiences related to:",
        "destinos.amazonia.eyebrow": "Amazon Region",
        "destinos.amazonia.title": "Nature, biodiversity and ancestral cultures",
        "destinos.amazonia.lead": "The Ecuadorian Amazon offers an immersion experience in tropical forests, rivers, biodiversity and territories of indigenous peoples and nationalities.",
        "destinos.galapagos.eyebrow": "Galapagos Region",
        "destinos.galapagos.title": "Nature that exists nowhere else",
        "destinos.galapagos.lead": "The Galapagos Islands represent one of Ecuador's great natural destinations, with volcanic ecosystems, endemic fauna and experiences of conservation and contact with nature.",
        "destinos.costa.eyebrow": "Coast Region",
        "destinos.costa.title": "Pacific, nature and flavors of Ecuador",
        "destinos.costa.lead": "The Ecuadorian Coast combines beaches, mangroves, forests, gastronomy, fishing communities and experiences linked to the Pacific Ocean.",
        "destinos.experiencias": "Experiences",
        "destinos.destinos": "Featured destinations",
        "destinos.islas": "Featured islands",
        "destinos.verpaquetes": "See available packages",

        // EXPERIENCIAS PAGE
        "experiencias.hero.eyebrow": "All Tour Ecuador Experiences",
        "experiencias.hero.title": "Stories that transform lives",
        "experiencias.hero.desc": "Every trip leaves a mark: on travelers and on the communities that make it possible to live an authentic Ecuador. Discover their voices.",
        "experiencias.reviews.eyebrow": "What our travelers say",
        "experiencias.reviews.title": "Experiences carried in the heart",
        "experiencias.reviews.lead": "Real reviews from those who have lived the Andes, the Amazon, the Coast and Galapagos with us.",
        "experiencias.value.eyebrow": "Voices from our value chain",
        "experiencias.value.title": "The life change behind every trip",
        "experiencias.value.lead": "The tourism we practice generates real impact on the families and organizations that are part of each experience. These are their stories.",

        // CONTACTO PAGE
        "contacto.hero.eyebrow": "We are here to help you",
        "contacto.hero.title": "Contact us",
        "contacto.hero.desc": "Tell us about your dream trip and our team will help you plan it. We respond in less than 24 hours.",
        "contacto.info.eyebrow": "Contact information",
        "contacto.info.title": "Let's talk about your next trip",
        "contacto.info.desc": "You can write to us, call us or visit us. We would love to meet you!",
        "contacto.info.oficina": "Main office",
        "contacto.info.telefono": "Phone / Mobile",
        "contacto.info.whatsapp": "WhatsApp",
        "contacto.info.email": "Email",
        "contacto.info.horario": "Office hours",
        "contacto.info.siguenos": "Follow us",
        "contacto.form.eyebrow": "Contact form",
        "contacto.form.title": "Send us a message",
        "contacto.form.desc": "Fields marked with * are required.",
        "contacto.form.nombre": "Full name *",
        "contacto.form.email": "Email address *",
        "contacto.form.telefono": "Phone",
        "contacto.form.region": "Region of interest *",
        "contacto.form.tour": "Tour of interest",
        "contacto.form.personas": "Number of people",
        "contacto.form.fecha": "Approximate travel date",
        "contacto.form.duracion": "Estimated duration",
        "contacto.form.mensaje": "Tell us about your dream trip *",
        "contacto.form.enviar": "Send message",
        "contacto.form.nota": "By submitting you accept our <a href=\"#\">privacy policy</a>.",
        "contacto.form.nombre.ph": "Your name",
"contacto.form.email.ph": "you@email.com",
"contacto.form.telefono.ph": "+593 99 789 8745",
"contacto.form.personas.ph": "E.g.: 4",
"contacto.form.mensaje.ph": "Write to us here...",
        "contacto.map.eyebrow": "Find us",
        "contacto.map.title": "Visit our office",
        "contacto.map.lead": "We are located in the heart of Otavalo, Imbabura. We are waiting for you!",
        "contacto.map.comollegar": "Get directions",
        "contacto.cta.eyebrow": "Personalized attention",
        "contacto.cta.title": "Do you prefer to talk to us directly?",
        "contacto.cta.desc": "Call us or write to us on WhatsApp and we will assist you instantly.",
        "contacto.cta.llamar": "Call now",
        "contacto.cta.whatsapp": "WhatsApp"
    },

    fr: {
        // NAV
        "nav.inicio": "Accueil",
        "nav.nosotros": "À propos",
        "nav.tours": "Circuits",
        "nav.destinos": "Destinations",
        "nav.servicios": "Services",
        "nav.experiencias": "Expériences",
        "nav.contacto": "Contact",
        "nav.cta": "Réserver",

        // HERO
"hero.eyebrow": "Un tourisme qui connecte à nos racines",
        "hero.title": "L'Équateur, au cœur de la planète",
        "hero.subtitle": "Nature, culture et expériences nées de la terre",
        "hero.btn1": "Explorer les circuits",
        "hero.btn2": "À propos",
        "hero.slide2.eyebrow": "Alpagas & Textiles Andins",
        "hero.slide2.title": "Des traditions tissées avec le temps",
        "hero.slide2.subtitle": "Páramo, communauté et culture Kichwa",
        "hero.slide3.eyebrow": "Nature Vivante",
        "hero.slide3.title": "Cascades, páramos et paysages uniques",
        "hero.slide3.subtitle": "Des expériences nées de la terre",
        "hero.slide4.eyebrow": "Sagesse Ancestrale",
        "hero.slide4.title": "Des rituels qui connectent à l'essence",
        "hero.slide4.subtitle": "Des cultures vivantes qui transcendent le tourisme",

        // WELCOME
        "welcome.eyebrow": "Bienvenue à",
        "welcome.title": "ALLTOURECUADOR",
        "welcome.text": "Votre porte d'entrée vers un Équateur authentique, diversifié et riche en expériences. Nous concevons et opérons des voyages qui connectent nos voyageurs à la nature, aux cultures, aux communautés et à l'essence de chaque territoire, offrant des expériences personnalisées avec qualité, sécurité et attention professionnelle.",
        "welcome.card1.title": "Expériences authentiques",
        "welcome.card1.text": "Nous connectons le voyageur à l'Équateur réel : ses gens, ses paysages et sa culture vivante.",
        "welcome.card2.title": "Communautés locales",
        "welcome.card2.text": "Nous travaillons main dans la main avec les familles, entreprises et prestataires locaux.",
        "welcome.card3.title": "Opération professionnelle",
        "welcome.card3.text": "Qualité, sécurité et attention personnalisée dans chaque expérience que nous concevons.",

        // HISTORY
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

        // ABOUT
        "about.eyebrow": "Qui sommes-nous",
        "about.title": "Plus qu'un voyage,<br>une expérience de vie",
        "about.text": "Chez AllTourEcuador, nous croyons au tourisme comme outil de connexion, d'apprentissage et de développement. Nous sommes une équipe de professionnels locaux, guides natifs et amoureux de notre terre.",
        "about.btn": "Rencontrer notre équipe",

        // REGIONS
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

        // TOURS
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
        "tour4.title": "CUICOCHA NATURE TREK",
        "tour4.desc": "Nature, trekking et culture vivante de Cotacachi.",
        "tour5.title": "SAVOIRS ANCESTRAUX DE LA TERRE ET DE LA FEMME",
        "tour5.desc": "Joug, tissage, plantes médicinales et connaissances de sage-femme.",
        "tour6.title": "ARÔMES, SAVEURS ET AVENTURE D'INTAG",
        "tour6.desc": "Une expérience entre café, canne, nature et aventure.",
        "tour7.title": "ENTRE ALPAGAS ET TEXTILES ANDINS",
        "tour7.desc": "Une expérience de páramo, communauté et tradition Kichwa.",

        // CTA
        "cta.eyebrow": "Trouvez l'aventure parfaite",
        "cta.title": "L'Équateur ne se connaît pas seulement :<br>il se ressent, se partage et se vit.",
        "cta.desc": "Nous vous aidons à construire votre prochaine expérience.",
        "cta.btn1": "Commencez votre voyage",
        "cta.btn2": "Voir les circuits",

        // FOOTER
        "footer.desc": "Agence de Voyage & Tour Opérateur. L'Équateur, au cœur de la planète.",
        "footer.contact": "Contact",
        "footer.address": "Rue Bolívar, entre Neptalí Ordoñez et Av. Quito",
        "footer.explore": "Explorer",
        "footer.follow": "Suivez-nous",
        "footer.copy": "© 2026 AllTourEcuador. Tous droits réservés.",
        "footer.privacy": "Politique de confidentialité",
        "footer.terms": "Termes et conditions",

        // WHATSAPP
        "whatsapp.tooltip": "Besoin d'aide ?",

        // MODAL
        "modal.description": "Description de l'Expérience",
        "modal.itinerary": "Itinéraire Résumé",
        "modal.facts": "Fiche Technique",
        "modal.includes": "Comprend",
        "modal.notIncludes": "Ne comprend pas",
        "modal.cta": "Demander un devis",

        // NOSOTROS
        "nosotros.hero.eyebrow": "Qui sommes-nous",
        "nosotros.hero.title": "Plus qu'un voyage,<br>une expérience de vie",
        "nosotros.hero.desc": "Découvrez l'histoire, l'équipe et l'essence qui rendent possible de vivre un Équateur authentique.",
        "nosotros.story.eyebrow": "Notre histoire",
        "nosotros.story.title": "Notre histoire",
        "nosotros.story.text1": "ALL TOUR ECUADOR est né dans le but de montrer un Équateur qui va au-delà de ses destinations touristiques. Nous sommes nés de la connaissance et de l'expérience du territoire, convaincus que voyager signifie aussi rencontrer des gens, partager des cultures, découvrir des saveurs, parcourir des paysages et s'approcher des histoires qui rendent chaque lieu unique.",
        "nosotros.story.text2": "Au fil du temps, nous avons construit une proposition qui combine authenticité, attention personnalisée, sécurité et professionnalisme, en travaillant en étroite collaboration avec les communautés, les familles, les entreprises et les prestataires locaux.",
        "nosotros.story.text3": "Aujourd'hui, ALL TOUR ECUADOR conçoit et opère des expériences qui cherchent à connecter le voyageur à la véritable essence du pays : un Équateur diversifié, culturel et naturel, qui ne se visite pas seulement, mais qui se vit.",
        "nosotros.team.eyebrow": "À propos de notre équipe",
        "nosotros.team.title": "Une équipe qui connaît et vit chaque territoire",
        "nosotros.team.text1": "Chez ALL TOUR ECUADOR, nous avons une équipe professionnelle et engagée, composée de guides spécialisés, de personnel logistique préparé et de prestataires de services de qualité qui travaillent de manière coordonnée pour garantir des expériences sûres, authentiques et bien organisées.",
        "nosotros.team.text2": "Notre équipe est également composée de ceux qui connaissent et vivent chaque territoire : femmes et hommes de la campagne, organisations communautaires, vendeurs de marché, agriculteurs, artisans, entrepreneurs et connaisseurs de la spiritualité, de la culture et des pratiques de durabilité.",
        "nosotros.team.text3": "Nous valorisons leurs connaissances et leurs expériences comme partie fondamentale de nos services, en créant un lien entre le professionnel du tourisme et les véritables protagonistes de chaque destination. C'est ainsi que nous construisons une proposition où la qualité du service rencontre le savoir local, en renforçant les familles et les organisations qui rendent possible de vivre un Équateur authentique.",
        "nosotros.why.eyebrow": "Pourquoi nous ?",
        "nosotros.why.title": "Pourquoi voyager avec nous ?",
        "nosotros.why.text1": "Voyager avec ALL TOUR ECUADOR, c'est choisir une autre façon de connaître l'Équateur : nous ne visitons pas seulement des destinations, nous connectons le voyageur à l'essence de chaque territoire, à ses cultures, communautés, familles, gastronomie, nature et savoirs ancestraux.",
        "nosotros.why.text2": "Nous concevons des expériences authentiques et personnalisées qui combinent convivialité, aventure, culture et nature avec une opération professionnelle, sûre et responsable, en générant également des opportunités pour ceux qui font du tourisme un mode de vie.",
        "nosotros.why.text3": "Nous voulons que chaque voyageur n'emporte pas seulement des photographies, mais des histoires, des émotions et des liens qui restent dans sa mémoire. Parce que l'Équateur ne se connaît pas seulement : il se ressent, se partage et se vit.",
        "nosotros.meet.eyebrow": "Rencontrer notre équipe",
        "nosotros.meet.title": "Les protagonistes de chaque expérience",
        "nosotros.meet.lead": "Professionnels du tourisme et connaisseurs locaux unis par un même but : faire vivre un Équateur authentique.",
        "nosotros.team.emprendedores": "ENTREPRENEURS",
        "nosotros.team.emprendedores.text": "En tant qu'entrepreneurs du secteur touristique, nous travaillons avec un engagement profond et une préparation professionnelle constante, en offrant dans chaque service la passion, le détail et la maîtrise artisanale de notre terre pour offrir des expériences authentiques et inoubliables.",
        "nosotros.team.guias": "GUIDES LOCAUX",
        "nosotros.team.guias.text": "En tant que connaisseur de mon territoire, j'accompagne nos visiteurs en partageant l'histoire, la culture, la nature et les traditions qui rendent chaque destination unique.",
        "nosotros.team.agricultores": "AGRICULTEURS",
        "nosotros.team.agricultores.text": "Depuis la chakra et le travail de la terre, nous partageons nos produits, nos connaissances et nos modes de vie, permettant au visiteur de connaître l'origine de nos aliments et de notre culture.",
        "nosotros.team.mujeres": "ASSOCIATION DE FEMMES",
        "nosotros.team.mujeres.text": "À travers notre travail associatif, nous transformons produits, connaissances et traditions en expériences qui créent des opportunités pour nos familles et renforcent notre communauté.",
        "nosotros.team.sostenibilidad": "DURABILITÉ",
        "nosotros.team.sostenibilidad.text": "Notre engagement envers la durabilité assure un avenir où la richesse de notre flore et de notre faune, et la beauté de ce páramo sacré, restent intacts pour les générations futures.",
        "nosotros.team.chefs": "CHEFS",
        "nosotros.team.chefs.text": "Depuis notre cuisine, nous apportons à table les saveurs du territoire, en utilisant des produits locaux pour transformer chaque plat en un moyen de connaître notre culture et nos traditions.",
        "nosotros.team.transportistas": "TRANSPORTEURS",
        "nosotros.team.transportistas.text": "Forts de notre expérience sur les routes et chemins de l'Équateur, notre engagement est d'offrir des transferts sûrs, responsables et ponctuels, en reliant chaque destination à une opération touristique de qualité.",

        // TOURS PAGE
        "tourspage.hero.eyebrow": "Nos forfaits",
        "tourspage.hero.title": "Des expériences nées de la terre",
        "tourspage.hero.desc": "Vivez le meilleur de l'Équateur avec nos forfaits personnalisés. Nature, culture, aventure et tourisme expérientiel Kichwa.",
        "tourspage.sidebar.title": "Trouvez votre voyage",
        "tourspage.sidebar.remove": "Supprimer les filtres",
        "tourspage.filter.destino": "Destination",
        "tourspage.filter.tipo": "Type d'expérience",
        "tourspage.filter.nivel": "Niveau d'activité",
        "tourspage.filter.duracion": "Par durée",
        "tourspage.main.title": "Forfaits disponibles",
        "tourspage.main.desc": "Tous nos forfaits incluent un guide natif spécialisé, le transport et des expériences authentiques. Prix par personne avec un minimum de 4 pax.",
        "tourspage.contact.cta": "Contactez-nous",
        "tourspage.contact.cta.heading": "Votre voyage idéal commence par une conversation",
        "tourspage.contact.cta.eyebrow": "Nous sommes là pour vous aider",
        "tourspage.contact.cta.title": "Découvrez l'Équateur en toute confiance",
        "tourspage.contact.cta.text": "Dites-nous ce que vous aimeriez vivre et nous concevons ensemble une expérience à votre mesure. Experts locaux, attention personnalisée et voyages qui se ressentent depuis le cœur de la planète.",
        "tourspage.contact.cta.subtitle": "Appelez-nous",
        "tourspage.contact.cta.whatsapp": "Écrivez-nous sur WhatsApp",

        // DESTINOS PAGE
        "destinos.eyebrow": "Destinations Équateur",
        "destinos.hero.title": "Quatre régions, des expériences infinies",
        "destinos.hero.desc": "L'Équateur réunit sur un territoire compact une extraordinaire diversité de paysages, cultures, écosystèmes et modes de vie. Des montagnes et communautés des Andes à la biodiversité de l'Amazonie, aux plages de la Côte et aux écosystèmes uniques des Galápagos.",
        "destinos.intro.eyebrow": "Découvrez le pays",
        "destinos.intro.title": "L'Équateur, un pays. Quatre mondes.",
        "destinos.intro.lead": "Côte | Andes | Amazonie | Galápagos. Explorez différents paysages, cultures et expériences dans un même voyage. ALL TOUR ECUADOR vous permet de découvrir le pays à travers des voyages organisés, des expériences culturelles, du tourisme communautaire, de la nature, de l'aventure, de la gastronomie et des itinéraires conçus selon les intérêts de chaque voyageur.",
        "destinos.andes.eyebrow": "Région Andes",
        "destinos.andes.title": "Montagnes, culture et traditions vivantes",
        "destinos.andes.lead": "Les Andes équatoriennes combinent volcans, lagunes, páramos, villes patrimoniales et communautés autochtones qui maintiennent leurs traditions vivantes. Dans cette région, ALL TOUR ECUADOR développe des expériences liées à :",
        "destinos.amazonia.eyebrow": "Région Amazonie",
        "destinos.amazonia.title": "Nature, biodiversité et cultures ancestrales",
        "destinos.amazonia.lead": "L'Amazonie équatorienne offre une expérience d'immersion dans les forêts tropicales, les rivières, la biodiversité et les territoires des peuples et nationalités autochtones.",
        "destinos.galapagos.eyebrow": "Région Galápagos",
        "destinos.galapagos.title": "Une nature qui n'existe nulle part ailleurs",
        "destinos.galapagos.lead": "Les îles Galápagos représentent l'une des grandes destinations naturelles de l'Équateur, avec des écosystèmes volcaniques, une faune endémique et des expériences de conservation et de contact avec la nature.",
        "destinos.costa.eyebrow": "Région Côte",
        "destinos.costa.title": "Pacifique, nature et saveurs de l'Équateur",
        "destinos.costa.lead": "La côte équatorienne combine plages, mangroves, forêts, gastronomie, communautés de pêcheurs et expériences liées à l'océan Pacifique.",
        "destinos.experiencias": "Expériences",
        "destinos.destinos": "Destinations en vedette",
        "destinos.islas": "Îles en vedette",
        "destinos.verpaquetes": "Voir les forfaits disponibles",

        // EXPERIENCIAS PAGE
        "experiencias.hero.eyebrow": "Expériences All Tour Ecuador",
        "experiencias.hero.title": "Des histoires qui transforment des vies",
        "experiencias.hero.desc": "Chaque voyage laisse une empreinte : sur les voyageurs et sur les communautés qui rendent possible de vivre un Équateur authentique. Découvrez leurs voix.",
        "experiencias.reviews.eyebrow": "Ce que disent nos voyageurs",
        "experiencias.reviews.title": "Des expériences portées dans le cœur",
        "experiencias.reviews.lead": "Avis réels de ceux qui ont vécu les Andes, l'Amazonie, la Côte et les Galápagos avec nous.",
        "experiencias.value.eyebrow": "Voix de notre chaîne de valeur",
        "experiencias.value.title": "Le changement de vie derrière chaque voyage",
        "experiencias.value.lead": "Le tourisme que nous pratiquons génère un impact réel sur les familles et les organisations qui font partie de chaque expérience. Voici leurs histoires.",

        // CONTACTO PAGE
        "contacto.hero.eyebrow": "Nous sommes là pour vous aider",
        "contacto.hero.title": "Contactez-nous",
        "contacto.hero.desc": "Parlez-nous de votre voyage de rêve et notre équipe vous aidera à le planifier. Nous répondons en moins de 24 heures.",
        "contacto.info.eyebrow": "Informations de contact",
        "contacto.info.title": "Parlons de votre prochain voyage",
        "contacto.info.desc": "Vous pouvez nous écrire, nous appeler ou nous rendre visite. Nous serons ravis de vous rencontrer !",
        "contacto.info.oficina": "Bureau principal",
        "contacto.info.telefono": "Téléphone / Mobile",
        "contacto.info.whatsapp": "WhatsApp",
        "contacto.info.email": "Email",
        "contacto.info.horario": "Heures d'ouverture",
        "contacto.info.siguenos": "Suivez-nous",
        "contacto.form.eyebrow": "Formulaire de contact",
        "contacto.form.title": "Envoyez-nous un message",
        "contacto.form.desc": "Les champs marqués d'un * sont obligatoires.",
        "contacto.form.nombre": "Nom complet *",
        "contacto.form.email": "Adresse e-mail *",
        "contacto.form.telefono": "Téléphone",
        "contacto.form.region": "Région d'intérêt *",
        "contacto.form.tour": "Circuit d'intérêt",
        "contacto.form.personas": "Nombre de personnes",
        "contacto.form.fecha": "Date approximative du voyage",
        "contacto.form.duracion": "Durée estimée",
        "contacto.form.mensaje": "Parlez-nous de votre voyage de rêve *",
        "contacto.form.enviar": "Envoyer le message",
        "contacto.form.nota": "En envoyant, vous acceptez notre <a href=\"#\">politique de confidentialité</a>.",
        "contacto.form.nombre.ph": "Votre nom",
"contacto.form.email.ph": "vous@email.com",
"contacto.form.telefono.ph": "+593 99 789 8745",
"contacto.form.personas.ph": "Ex : 4",
"contacto.form.mensaje.ph": "Écrivez-nous ici...",
        "contacto.map.eyebrow": "Trouvez-nous",
        "contacto.map.title": "Visitez notre bureau",
        "contacto.map.lead": "Nous sommes situés au cœur d'Otavalo, Imbabura. Nous vous attendons !",
        "contacto.map.comollegar": "Obtenir l'itinéraire",
        "contacto.cta.eyebrow": "Attention personnalisée",
        "contacto.cta.title": "Préférez-vous nous parler directement ?",
        "contacto.cta.desc": "Appelez-nous ou écrivez-nous sur WhatsApp et nous vous répondrons instantanément.",
        "contacto.cta.llamar": "Appeler maintenant",
        "contacto.cta.whatsapp": "WhatsApp"
    }
};

// ==========================================
// 2. APLICAR IDIOMA
// ==========================================
function applyLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

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

    // Atributos opcionales traducibles
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key]) el.placeholder = dict[key];
    });

    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        if (dict[key]) el.title = dict[key];
    });

    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    const langCurrent = document.getElementById('langCurrent');
    if (langCurrent) langCurrent.textContent = lang.toUpperCase();

    localStorage.setItem('alltour_lang', lang);
    document.documentElement.lang = lang;

    const modal = document.getElementById('tourModal');
    if (modal && modal.classList.contains('open')) {
        const currentTour = modal.dataset.currentTour;
        if (currentTour && typeof renderTourModal === 'function') {
            renderTourModal(currentTour);
        }
    }
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
// 3. PRELOADER — tiempo mínimo para ver los logos
// ==========================================
(function () {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    const MIN_DURATION = 3000;
    const startTime = Date.now();

    function hidePreloader() {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, MIN_DURATION - elapsed);
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => {
                preloader.remove();
            }, 700);
        }, remaining);
    }

    if (document.readyState === 'complete') {
        hidePreloader();
    } else {
        window.addEventListener('load', hidePreloader);
    }
})();

// ==========================================
// 4. HEADER SCROLLED
// ==========================================
const siteHeader = document.getElementById('siteHeader');

if (siteHeader) {
    if (siteHeader.classList.contains('scrolled')) {
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
    '.welcome-card, .history-card, .region-card, .tour-card, .service-card, .why-card, .testimonial-card, .quick-nav-item, .team-card, .extra-service-card, .service-detail-content, .story-content, .team-intro-content, .review-card, .value-testimonial-card, .tour-detail-block'
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
            const headerOffset = 110;
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
// 10. FORMULARIO DE CONTACTO (Google Apps Script)
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbww3oxqPuW8S9Mlk91rYfDM7ss_DmGniipeKY03J6v2Bq0v30wNrwgj447z8hEtsiLK/exec";

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const nombre = contactForm.querySelector('input[name="nombre"]')?.value.trim();
        const email = contactForm.querySelector('input[name="email"]')?.value.trim();
        const telefono = contactForm.querySelector('input[name="telefono"]')?.value.trim() || "";
        const destino = contactForm.querySelector('select[name="destino"]')?.value || "";
        const tour = contactForm.querySelector('select[name="tour"]')?.value || "";
        const personas = contactForm.querySelector('input[name="personas"]')?.value || "";
        const fecha = contactForm.querySelector('input[name="fecha"]')?.value || "";
        const duracion = contactForm.querySelector('select[name="duracion"]')?.value || "";
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

        const submitBtn = contactForm.querySelector('.form-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';

        try {
            const formData = new FormData();
            formData.append('nombre', nombre);
            formData.append('email', email);
            formData.append('telefono', telefono);
            formData.append('destino', destino);
            formData.append('tour', tour);
            formData.append('personas', personas);
            formData.append('fecha', fecha);
            formData.append('duracion', duracion);
            formData.append('mensaje', mensaje);

            await fetch(APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                body: formData
            });

            alert(`✅ ¡Gracias ${nombre}!\n\nTu mensaje fue enviado correctamente.\nTe responderemos a ${email} en menos de 24 horas.\n\nAllTourEcuador`);
            contactForm.reset();

        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert('⚠️ Hubo un problema al enviar el mensaje.\n\nPor favor intenta de nuevo o escríbenos directamente por WhatsApp.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });
}

// ==========================================
// 11. MAPA DE REGIONES (index.html)
// ==========================================
const tourMapEl = document.getElementById('tourMap');

if (tourMapEl && typeof L !== 'undefined') {
    const tourMap = L.map('tourMap', {
        scrollWheelZoom: false,
        zoomControl: true,
        attributionControl: true
    }).setView([-1.8312, -78.1834], 6);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png?key=cb1_3syj_1_19da2f09472d3f015f43f8d9', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        detectRetina: true
    }).addTo(tourMap);

    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: '<div class="marker-pin"><div class="marker-pin-inner"></div></div>',
        iconSize: [36, 44],
        iconAnchor: [18, 44],
        popupAnchor: [0, -40]
    });

    const regiones = [
        {
            nombre: 'Galápagos',
            tag: 'Región Insular',
            coords: [-0.9538, -90.9656],
            img: 'img/galapagos.jpg',
            desc: 'Un mundo único para descubrir y conservar. Fauna endémica, ecosistemas volcánicos y experiencias de conservación.',
            destinos: 'Santa Cruz · San Cristóbal · Isabela',
            experiencias: 'Snorkeling · Buceo · Kayak · Cruceros',
            precio: 'Desde $399'
        },
        {
            nombre: 'Costa',
            tag: 'Región Litoral',
            coords: [-1.5, -80.5],
            img: 'img/costa.jpg',
            desc: 'Pacífico, naturaleza y sabores del Ecuador. Playas, manglares, gastronomía y cultura costera.',
            destinos: 'Guayaquil · Montañita · Puerto López · Manta',
            experiencias: 'Surf · Ballenas · Gastronomía · Manglares',
            precio: 'Desde $159'
        },
        {
            nombre: 'Andes',
            tag: 'Región Interandina',
            coords: [-1.5, -78.5],
            img: 'img/sierra.jpg',
            desc: 'Montañas, cultura y tradiciones vivas. Volcanes, lagunas, páramos, ciudades patrimoniales y comunidades indígenas.',
            destinos: 'Otavalo · Cotacachi · Quito · Quilotoa · Cotopaxi · Cuenca',
            experiencias: 'Trekking · Comunidades · Gastronomía · Artesanías',
            precio: 'Desde $85'
        },
        {
            nombre: 'Amazonía',
            tag: 'Región Oriental',
            coords: [-0.7, -76.9],
            img: 'img/amazonia.jpg',
            desc: 'Naturaleza, biodiversidad y culturas ancestrales. Inmersión en bosques tropicales, ríos y territorios indígenas.',
            destinos: 'Tena · Yasuní · Cuyabeno · Papallacta',
            experiencias: 'Caminatas · Navegación · Aviturismo · Comunidades',
            precio: 'Desde $349'
        }
    ];

    const panelImg = document.getElementById('panelImg');
    const panelImgOverlay = document.getElementById('panelImgOverlay');
    const panelTag = document.getElementById('panelTag');
    const panelTitle = document.getElementById('panelTitle');
    const panelDesc = document.getElementById('panelDesc');
    const panelInfo = document.getElementById('panelInfo');

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
// 12. MAPA DE CONTACTO (contacto.html)
// ==========================================
const contactMapEl = document.getElementById('contactMap');

if (contactMapEl && typeof L !== 'undefined') {
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
        <h4>AllTourEcuador</h4>
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

// ==========================================
// 13. MODAL DE TOURS (index.html + tours.html)
// ==========================================
const toursData = {
    1: {
        es: {
            eyebrow: "Full Day · Cultural · Vivencial",
            slogan: "Conoce a la gente, comparte las tradiciones, vive los Andes.",
            callout: "Una inmersión auténtica en el corazón de las comunidades Kichwa de Otavalo, donde el arte ancestral del tejido, la música viva, la gastronomía andina y la artesanía en totora se entrelazan para brindarte un encuentro humano inolvidable.",
            description: "Invita al viajero a salir de los circuitos convencionales para entrar en la vida cotidiana de las familias Kichwa. A través de talleres prácticos con artesanos, músicos y familias locales (muchas de ellas impulsadas por mujeres emprendedoras), el visitante descubre una cultura viva que preserva su identidad, tradiciones y cosmovisión en cada tejido, sabor y melodía.",
            facts: [
                ["Duración", "Full Day / 1 día (08:00 – 17:30)"],
                ["Destino", "Otavalo, San Rafael de la Laguna, Agato y Peguche"],
                ["Dificultad", "Bajo (apto para familias y adultos mayores)"],
                ["Estilo", "Artesanal, cultural, vivencial y naturaleza"],
                ["Salida / Retorno", "Otavalo"],
                ["Destacados", "Taller de totora, telar de cintura, almuerzo tradicional, cascada de Peguche, música Kichwa"]
            ],
            itinerary: [
                ["08:00 – 08:30", "Bienvenida en Otavalo e introducción cultural."],
                ["08:30 – 10:30", "Viviendo la Totora (Totora Wasi): historia, cosecha y elaboración de tu propia artesanía en San Rafael de la Laguna."],
                ["10:30 – 12:15", "Entre Hilos y Memoria: taller participativo de hilado y telar de cintura en la Comuna de Agato (Tahuantinsuyo Weaving Workshop)."],
                ["12:30 – 14:00", "Almuerzo Comunitario: gastronomía local compartida en Peguche (Restaurante Ñanda Mañachi)."],
                ["14:15 – 16:00", "Cascada de Peguche: caminata interpretativa de naturaleza y espiritualidad andina."],
                ["16:15 – 17:30", "Música que Vive: taller interactivo de instrumentos ancestrales y ritmos andinos con músicos de Ñanda Mañachi."]
            ],
            includes: [
                "Transporte turístico privado",
                "Guía nativo especializado (español/inglés)",
                "Almuerzo tradicional completo",
                "Entradas a todos los atractivos",
                "Taller interactivo y materiales artesanales (Totora Wasi)",
                "Acompañamiento permanente y tiempo para compras directas a productores"
            ],
            notIncludes: [
                "Bebidas o consumos adicionales",
                "Compras personales",
                "Propinas",
                "Seguro personal de viaje"
            ]
        },
        en: {
            eyebrow: "Full Day · Cultural · Experiential",
            slogan: "Meet the people, share the traditions, live the Andes.",
            callout: "An authentic immersion into the heart of the Kichwa communities of Otavalo, where the ancestral art of weaving, living music, Andean gastronomy and totora craftsmanship intertwine to offer you an unforgettable human encounter.",
            description: "It invites travelers to step out of conventional circuits and enter the daily life of Kichwa families. Through practical workshops with artisans, musicians and local families (many of them led by women entrepreneurs), visitors discover a living culture that preserves its identity, traditions and worldview in every weave, flavor and melody.",
            facts: [
                ["Duration", "Full Day / 1 day (08:00 – 17:30)"],
                ["Destination", "Otavalo, San Rafael de la Laguna, Agato and Peguche"],
                ["Difficulty", "Low (suitable for families and seniors)"],
                ["Style", "Artisanal, cultural, experiential and nature"],
                ["Departure / Return", "Otavalo"],
                ["Highlights", "Totora workshop, backstrap loom, traditional lunch, Peguche waterfall, Kichwa music"]
            ],
            itinerary: [
                ["08:00 – 08:30", "Welcome in Otavalo and cultural introduction."],
                ["08:30 – 10:30", "Living Totora (Totora Wasi): history, harvest and making your own craft in San Rafael de la Laguna."],
                ["10:30 – 12:15", "Between Threads and Memory: participatory spinning and backstrap loom workshop in the Community of Agato (Tahuantinsuyo Weaving Workshop)."],
                ["12:30 – 14:00", "Community Lunch: local gastronomy shared in Peguche (Ñanda Mañachi Restaurant)."],
                ["14:15 – 16:00", "Peguche Waterfall: interpretive walk of nature and Andean spirituality."],
                ["16:15 – 17:30", "Living Music: interactive workshop on ancestral instruments and Andean rhythms with Ñanda Mañachi musicians."]
            ],
            includes: [
                "Private tourist transport",
                "Specialized native guide (Spanish/English)",
                "Full traditional lunch",
                "Entrance fees to all attractions",
                "Interactive workshop and craft materials (Totora Wasi)",
                "Permanent assistance and time for direct purchases from producers"
            ],
            notIncludes: [
                "Drinks or additional consumption",
                "Personal purchases",
                "Tips",
                "Personal travel insurance"
            ]
        },
        fr: {
            eyebrow: "Journée complète · Culturel · Expérientiel",
            slogan: "Rencontrez les gens, partagez les traditions, vivez les Andes.",
            callout: "Une immersion authentique au cœur des communautés Kichwa d'Otavalo, où l'art ancestral du tissage, la musique vivante, la gastronomie andine et l'artisanat en totora s'entremêlent pour vous offrir une rencontre humaine inoubliable.",
            description: "Il invite le voyageur à sortir des circuits conventionnels pour entrer dans la vie quotidienne des familles Kichwa. À travers des ateliers pratiques avec des artisans, musiciens et familles locales (dont beaucoup sont dirigées par des femmes entrepreneures), le visiteur découvre une culture vivante qui préserve son identité, ses traditions et sa vision du monde dans chaque tissage, saveur et mélodie.",
            facts: [
                ["Durée", "Journée complète / 1 jour (08:00 – 17:30)"],
                ["Destination", "Otavalo, San Rafael de la Laguna, Agato et Peguche"],
                ["Difficulté", "Faible (adapté aux familles et seniors)"],
                ["Style", "Artisanal, culturel, expérientiel et nature"],
                ["Départ / Retour", "Otavalo"],
                ["Points forts", "Atelier totora, métier à tisser, déjeuner traditionnel, cascade de Peguche, musique Kichwa"]
            ],
            itinerary: [
                ["08:00 – 08:30", "Accueil à Otavalo et introduction culturelle."],
                ["08:30 – 10:30", "Vivre la Totora (Totora Wasi) : histoire, récolte et fabrication de votre propre artisanat à San Rafael de la Laguna."],
                ["10:30 – 12:15", "Entre Fils et Mémoire : atelier participatif de filage et métier à tisser à la Communauté d'Agato (Tahuantinsuyo Weaving Workshop)."],
                ["12:30 – 14:00", "Déjeuner Communautaire : gastronomie locale partagée à Peguche (Restaurant Ñanda Mañachi)."],
                ["14:15 – 16:00", "Cascade de Peguche : promenade interprétative de nature et spiritualité andine."],
                ["16:15 – 17:30", "Musique Vivante : atelier interactif d'instruments ancestraux et rythmes andins avec les musiciens de Ñanda Mañachi."]
            ],
            includes: [
                "Transport touristique privé",
                "Guide natif spécialisé (espagnol/anglais)",
                "Déjeuner traditionnel complet",
                "Entrées à toutes les attractions",
                "Atelier interactif et matériel artisanal (Totora Wasi)",
                "Accompagnement permanent et temps pour achats directs aux producteurs"
            ],
            notIncludes: [
                "Boissons ou consommations supplémentaires",
                "Achats personnels",
                "Pourboires",
                "Assurance voyage personnelle"
            ]
        }
    },
    2: {
        es: {
            eyebrow: "Full Day · Gastronómico · Espiritual",
            slogan: "Prueba los Andes, comparte las tradiciones, conéctate con la Pachamama.",
            callout: "Siente la energía ancestral de La Calera: moldea el barro con tus manos, descubre el secreto ancestral de la Pachamanka cocida bajo tierra y renueva tu espíritu en las vertientes sagradas de Cotacachi.",
            description: "Una experiencia de convivencia rural que entrelaza la tierra, la gastronomía, el arte y la espiritualidad Kichwa. El visitante trabaja el barro, cosecha en la chakra, participa en la preparación ritual de la Pachamanka, conoce la artesanía en semillas elaborada por mujeres locales y experimenta una conexión tranquila con la naturaleza en las vertientes sagradas.",
            facts: [
                ["Duración", "Full Day / 1 día (08:00 – 18:00)"],
                ["Destino", "Comunidad La Calera y zonas rurales de Cotacachi"],
                ["Dificultad", "Bajo a Moderado"],
                ["Estilo", "Gastronómico ancestral, cultural, artesanal y bienestar/espiritual"],
                ["Salida / Retorno", "Cotacachi / Otavalo"],
                ["Destacados", "Cerámica Rumy Allpa, Pachamanka, bisutería en semillas, ritual de purificación"]
            ],
            itinerary: [
                ["08:00 – 08:30", "Bienvenida y traslado hacia la comunidad La Calera."],
                ["08:30 – 10:30", "Barro, Manos y Memoria: taller artesanal de moldeado y pintura en cerámica en Rumy Allpa (te llevas tu recuerdo)."],
                ["10:45 – 12:30", "De la Chakra a la Pachamanka: cosecha de productos andinos, taller de bisutería en semillas con mujeres emprendedoras y ritual de siembra del alimento bajo tierra."],
                ["13:00 – 14:30", "Pachamanka – Sabores de la Tierra: apertura de la Pachamanka y almuerzo buffet comunitario en La Casa del Kachipukru."],
                ["15:00 – 17:00", "Ritual y Baño de Purificación (TUN-DUN): caminata interpretativa hacia las vertientes de agua y espacio ceremonial de limpieza espiritual."],
                ["17:30 – 18:00", "Cierre y reflexión con los anfitriones comunitarios."]
            ],
            includes: [
                "Transporte turístico privado",
                "Guía nativo especializado",
                "Almuerzo tipo Pachamanka completo",
                "Materiales para taller de barro y bisutería en semillas",
                "Guía comunitario para el ritual de agua",
                "Entradas a los sitios visitados"
            ],
            notIncludes: [
                "Ropa de baño / toallas personales",
                "Consumos o compras adicionales",
                "Propinas",
                "Seguro de viaje"
            ]
        },
        en: {
            eyebrow: "Full Day · Gastronomic · Spiritual",
            slogan: "Taste the Andes, share the traditions, connect with Pachamama.",
            callout: "Feel the ancestral energy of La Calera: shape clay with your hands, discover the ancestral secret of Pachamanka cooked underground, and renew your spirit in the sacred springs of Cotacachi.",
            description: "A rural coexistence experience that intertwines the land, gastronomy, art and Kichwa spirituality. Visitors work with clay, harvest in the chakra, participate in the ritual preparation of Pachamanka, learn about seed jewelry made by local women, and experience a peaceful connection with nature in the sacred springs.",
            facts: [
                ["Duration", "Full Day / 1 day (08:00 – 18:00)"],
                ["Destination", "La Calera community and rural areas of Cotacachi"],
                ["Difficulty", "Low to Moderate"],
                ["Style", "Ancestral gastronomic, cultural, artisanal and wellness/spiritual"],
                ["Departure / Return", "Cotacachi / Otavalo"],
                ["Highlights", "Rumy Allpa ceramics, Pachamanka, seed jewelry, purification ritual"]
            ],
            itinerary: [
                ["08:00 – 08:30", "Welcome and transfer to the La Calera community."],
                ["08:30 – 10:30", "Clay, Hands and Memory: artisanal workshop of molding and painting ceramics at Rumy Allpa (you take your souvenir)."],
                ["10:45 – 12:30", "From the Chakra to the Pachamanka: harvest of Andean products, seed jewelry workshop with women entrepreneurs and ritual planting of food underground."],
                ["13:00 – 14:30", "Pachamanka – Flavors of the Earth: opening of the Pachamanka and community buffet lunch at La Casa del Kachipukru."],
                ["15:00 – 17:00", "Ritual and Purification Bath (TUN-DUN): interpretive walk to the water springs and ceremonial space for spiritual cleansing."],
                ["17:30 – 18:00", "Closing and reflection with the community hosts."]
            ],
            includes: [
                "Private tourist transport",
                "Specialized native guide",
                "Full Pachamanka-style lunch",
                "Materials for clay and seed jewelry workshop",
                "Community guide for the water ritual",
                "Entrance fees to the visited sites"
            ],
            notIncludes: [
                "Swimwear / personal towels",
                "Additional consumption or purchases",
                "Tips",
                "Travel insurance"
            ]
        },
        fr: {
            eyebrow: "Journée complète · Gastronomique · Spirituel",
            slogan: "Goûtez les Andes, partagez les traditions, connectez-vous à la Pachamama.",
            callout: "Ressentez l'énergie ancestrale de La Calera : façonnez l'argile de vos mains, découvrez le secret ancestral de la Pachamanka cuite sous terre et renouvelez votre esprit dans les sources sacrées de Cotacachi.",
            description: "Une expérience de convivialité rurale qui entremêle la terre, la gastronomie, l'art et la spiritualité Kichwa. Le visiteur travaille l'argile, récolte dans la chakra, participe à la préparation rituelle de la Pachamanka, découvre la bijouterie en graines fabriquée par des femmes locales et vit une connexion paisible avec la nature dans les sources sacrées.",
            facts: [
                ["Durée", "Journée complète / 1 jour (08:00 – 18:00)"],
                ["Destination", "Communauté La Calera et zones rurales de Cotacachi"],
                ["Difficulté", "Faible à modérée"],
                ["Style", "Gastronomique ancestral, culturel, artisanal et bien-être/spirituel"],
                ["Départ / Retour", "Cotacachi / Otavalo"],
                ["Points forts", "Céramique Rumy Allpa, Pachamanka, bijoux en graines, rituel de purification"]
            ],
            itinerary: [
                ["08:00 – 08:30", "Accueil et transfert vers la communauté de La Calera."],
                ["08:30 – 10:30", "Argile, Mains et Mémoire : atelier artisanal de moulage et peinture de céramique à Rumy Allpa (vous emportez votre souvenir)."],
                ["10:45 – 12:30", "De la Chakra à la Pachamanka : récolte de produits andins, atelier de bijoux en graines avec femmes entrepreneures et rituel de plantation d'aliments sous terre."],
                ["13:00 – 14:30", "Pachamanka – Saveurs de la Terre : ouverture de la Pachamanka et déjeuner buffet communautaire à La Casa del Kachipukru."],
                ["15:00 – 17:00", "Rituel et Bain de Purification (TUN-DUN) : promenade interprétative vers les sources d'eau et espace cérémoniel de nettoyage spirituel."],
                ["17:30 – 18:00", "Clôture et réflexion avec les hôtes communautaires."]
            ],
            includes: [
                "Transport touristique privé",
                "Guide natif spécialisé",
                "Déjeuner complet type Pachamanka",
                "Matériaux pour atelier d'argile et bijoux en graines",
                "Guide communautaire pour le rituel de l'eau",
                "Entrées aux sites visités"
            ],
            notIncludes: [
                "Maillot de bain / serviettes personnelles",
                "Consommations ou achats supplémentaires",
                "Pourboires",
                "Assurance voyage"
            ]
        }
    },
    3: {
        es: {
            eyebrow: "Full Day · Agroturismo · SIPAM UNESCO",
            slogan: "Conoce a las mujeres detrás del patrimonio vivo de Cotacachi.",
            callout: "Explora el patrimonio agrícola mundial reconocido por la UNESCO/FAO: un viaje conmovedor al corazón de la Chakra Andina, las abejas nativas, la mística chicha SARA MAMA y las mujeres guardianas de semillas.",
            description: "Este tour conecta directamente al visitante con el Sistema Importante del Patrimonio Agrícola Mundial (SIPAM) de Cotacachi. El eje central son las mujeres rurales y familias campesinas que preservan la agrobiodiversidad, las semillas ancestrales y las tradiciones culinarias, convirtiendo su herencia en un motor de desarrollo comunitario sustentable.",
            facts: [
                ["Duración", "Full Day / 1 día (08:00 – 17:30)"],
                ["Destino", "Jambi Mascari, Piava Chupa, Turuco y Cumbas Conde"],
                ["Dificultad", "Bajo"],
                ["Estilo", "Agroturismo, comunitario, gastronómico y patrimonio vivo"],
                ["Salida / Retorno", "Cotacachi / Otavalo"],
                ["Destacados", "Centro Jambi Mascari, ruta del polen, chicha SARA MAMA, guardianas de semillas"]
            ],
            itinerary: [
                ["08:00 – 10:00", "Centro de Interpretación Jambi Mascari: exposición interactiva sobre la historia y estructura de la Chakra Andina (SIPAM)."],
                ["10:15 – 12:00", "Chakra y Mundo de las Abejas (Comuna Piava Chupa): recorrido entre cultivos, polinización y producción apícola."],
                ["12:15 – 13:30", "Almuerzo Andino: menú elaborado con insumos agroecológicos de las chakras locales."],
                ["13:45 – 15:00", "SARA MAMA (Comuna Turuco): encuentro con la asociación de mujeres procesadoras de la ancestral chicha de jora (incluye degustación)."],
                ["15:30 – 17:00", "Guardianas de Semillas (Comuna Cumbas Conde): vivencia con familias dedicadas al rescate y conservación de semillas nativas."]
            ],
            includes: [
                "Transporte turístico",
                "Guía especializado en agrobiodiversidad",
                "Entrada al Centro Jambi Mascari",
                "Almuerzo andino completo",
                "Degustación y botella de chicha en SARA MAMA",
                "Aportes a familias guardianas de semillas"
            ],
            notIncludes: [
                "Compras directas de miel, semillas o artesanías",
                "Bebidas extra",
                "Propinas",
                "Seguro individual"
            ]
        },
        en: {
            eyebrow: "Full Day · Agrotourism · UNESCO SIPAM",
            slogan: "Meet the women behind the living heritage of Cotacachi.",
            callout: "Explore the world agricultural heritage recognized by UNESCO/FAO: a moving journey to the heart of the Andean Chakra, native bees, the mystical chicha SARA MAMA and the women seed guardians.",
            description: "This tour directly connects visitors with the Globally Important Agricultural Heritage System (GIAHS/SIPAM) of Cotacachi. The central axis is rural women and farming families who preserve agrobiodiversity, ancestral seeds and culinary traditions, turning their heritage into an engine of sustainable community development.",
            facts: [
                ["Duration", "Full Day / 1 day (08:00 – 17:30)"],
                ["Destination", "Jambi Mascari, Piava Chupa, Turuco and Cumbas Conde"],
                ["Difficulty", "Low"],
                ["Style", "Agrotourism, community, gastronomic and living heritage"],
                ["Departure / Return", "Cotacachi / Otavalo"],
                ["Highlights", "Jambi Mascari Center, pollen route, SARA MAMA chicha, seed guardians"]
            ],
            itinerary: [
                ["08:00 – 10:00", "Jambi Mascari Interpretation Center: interactive exhibition on the history and structure of the Andean Chakra (SIPAM)."],
                ["10:15 – 12:00", "Chakra and the World of Bees (Piava Chupa Community): tour through crops, pollination and beekeeping production."],
                ["12:15 – 13:30", "Andean Lunch: menu made with agroecological inputs from local chakras."],
                ["13:45 – 15:00", "SARA MAMA (Turuco Community): meeting with the association of women processors of the ancestral chicha de jora (includes tasting)."],
                ["15:30 – 17:00", "Seed Guardians (Cumbas Conde Community): experience with families dedicated to the rescue and conservation of native seeds."]
            ],
            includes: [
                "Tourist transport",
                "Guide specialized in agrobiodiversity",
                "Entrance to the Jambi Mascari Center",
                "Full Andean lunch",
                "Tasting and bottle of chicha at SARA MAMA",
                "Contributions to seed guardian families"
            ],
            notIncludes: [
                "Direct purchases of honey, seeds or crafts",
                "Extra drinks",
                "Tips",
                "Individual insurance"
            ]
        },
        fr: {
            eyebrow: "Journée complète · Agrotourisme · SIPAM UNESCO",
            slogan: "Rencontrez les femmes derrière le patrimoine vivant de Cotacachi.",
            callout: "Explorez le patrimoine agricole mondial reconnu par l'UNESCO/FAO : un voyage émouvant au cœur de la Chakra andine, des abeilles natives, de la mystique chicha SARA MAMA et des femmes gardiennes de semences.",
            description: "Ce circuit connecte directement le visiteur au Système Important du Patrimoine Agricole Mondial (SIPAM) de Cotacachi. L'axe central est constitué par les femmes rurales et les familles paysannes qui préservent l'agrobiodiversité, les semences ancestrales et les traditions culinaires, transformant leur héritage en moteur de développement communautaire durable.",
            facts: [
                ["Durée", "Journée complète / 1 jour (08:00 – 17:30)"],
                ["Destination", "Jambi Mascari, Piava Chupa, Turuco et Cumbas Conde"],
                ["Difficulté", "Faible"],
                ["Style", "Agrotourisme, communautaire, gastronomique et patrimoine vivant"],
                ["Départ / Retour", "Cotacachi / Otavalo"],
                ["Points forts", "Centre Jambi Mascari, route du pollen, chicha SARA MAMA, gardiennes de semences"]
            ],
            itinerary: [
                ["08:00 – 10:00", "Centre d'Interprétation Jambi Mascari : exposition interactive sur l'histoire et la structure de la Chakra andine (SIPAM)."],
                ["10:15 – 12:00", "Chakra et Monde des Abeilles (Communauté Piava Chupa) : parcours entre cultures, pollinisation et production apicole."],
                ["12:15 – 13:30", "Déjeuner Andin : menu élaboré avec des intrants agroécologiques des chakras locales."],
                ["13:45 – 15:00", "SARA MAMA (Communauté Turuco) : rencontre avec l'association de femmes transformatrices de l'ancestrale chicha de jora (dégustation incluse)."],
                ["15:30 – 17:00", "Gardiennes de Semences (Communauté Cumbas Conde) : expérience avec des familles dédiées au sauvetage et à la conservation des semences natives."]
            ],
            includes: [
                "Transport touristique",
                "Guide spécialisé en agrobiodiversité",
                "Entrée au Centre Jambi Mascari",
                "Déjeuner andin complet",
                "Dégustation et bouteille de chicha à SARA MAMA",
                "Contributions aux familles gardiennes de semences"
            ],
            notIncludes: [
                "Achats directs de miel, semences ou artisanat",
                "Boissons supplémentaires",
                "Pourboires",
                "Assurance individuelle"
            ]
        }
    },
    4: {
        es: {
            eyebrow: "Full Day · Trekking · Volcán",
            slogan: "Camina por el paisaje volcánico, descubre la naturaleza andina y vive Cotacachi.",
            callout: "Acepta el desafío y bordea la caldera de un volcán activo: 14 kilómetros de trekking interpretativo rodeado de orquídeas, aves altoandinas, vistas majestuosas de la Laguna de Cuicocha y el encanto artesanal de Cotacachi.",
            description: "Una travesía inolvidable diseñada para los amantes del senderismo y la fotografía. El recorrido bordea la cresta del cráter volcánico de Cuicocha, ofreciendo vistas panorámicas impresionantes del volcán Cotacachi y los valles andinos, complementado con guianza especializada en geología, botánica y un tiempo reconfortante en la ciudad del cuero.",
            facts: [
                ["Duración", "Full Day / 1 día (08:00 – 16:30)"],
                ["Destino", "Reserva Cotacachi-Cayapas (Cuicocha) y zona de cuero de Cotacachi"],
                ["Distancia", "12 a 14 km (Sendero Gorky Campuzano)"],
                ["Altitud", "3.100 a 3.500 m s. n. m."],
                ["Dificultad", "Moderado a Medio/Alto"],
                ["Estilo", "Ecoturismo, trekking, aventura y naturaleza"]
            ],
            itinerary: [
                ["08:00 – 09:00", "Salida e inducción en el Centro de Interpretación de la Reserva Ecológica."],
                ["09:00 – 13:00", "Cuicocha Nature Trek: caminata de 4 a 5 horas por el sendero Gorky Campuzano con paradas interpretativas de flora, fauna y vulcanología."],
                ["13:30 – 14:30", "Almuerzo Energético: comida reconfortante con sabores típicos de Cotacachi."],
                ["15:00 – 16:30", "Cotacachi a tu Ritmo: recorrido libre por el centro comercial de cuero, con opción libre de café local."]
            ],
            includes: [
                "Transporte turístico ida y vuelta",
                "Guía nacional de turismo especializado en trekking y montaña",
                "Registro / asistencia en Reserva Ecológica",
                "Almuerzo local completo",
                "Tiempo de exploración en Cotacachi"
            ],
            notIncludes: [
                "Equipamiento personal de trekking (calzado especial, bastones, chaqueta impermeable)",
                "Patente / pago de ingreso a la laguna si aplicase",
                "Consumos en cafeterías",
                "Propinas",
                "Seguro personal"
            ]
        },
        en: {
            eyebrow: "Full Day · Trekking · Volcano",
            slogan: "Walk the volcanic landscape, discover Andean nature, and experience Cotacachi.",
            callout: "Accept the challenge and skirt the caldera of an active volcano: 14 kilometers of interpretive trekking surrounded by orchids, high-Andean birds, majestic views of Cuicocha Lagoon and the artisanal charm of Cotacachi.",
            description: "An unforgettable journey designed for lovers of hiking and photography. The route skirts the crest of the Cuicocha volcanic crater, offering impressive panoramic views of the Cotacachi volcano and the Andean valleys, complemented by specialized guidance in geology, botany and a comforting time in the leather city.",
            facts: [
                ["Duration", "Full Day / 1 day (08:00 – 16:30)"],
                ["Destination", "Cotacachi-Cayapas Reserve (Cuicocha) and leather area of Cotacachi"],
                ["Distance", "12 to 14 km (Gorky Campuzano Trail)"],
                ["Altitude", "3,100 to 3,500 m a.s.l."],
                ["Difficulty", "Moderate to Medium/High"],
                ["Style", "Ecotourism, trekking, adventure and nature"]
            ],
            itinerary: [
                ["08:00 – 09:00", "Departure and briefing at the Interpretation Center of the Ecological Reserve."],
                ["09:00 – 13:00", "Cuicocha Nature Trek: 4 to 5-hour hike along the Gorky Campuzano trail with interpretive stops on flora, fauna and volcanology."],
                ["13:30 – 14:30", "Energetic Lunch: comforting food with typical flavors of Cotacachi."],
                ["15:00 – 16:30", "Cotacachi at your Pace: free tour of the leather commercial center, with optional local coffee."]
            ],
            includes: [
                "Round-trip tourist transport",
                "National tourism guide specialized in trekking and mountain",
                "Registration / assistance at the Ecological Reserve",
                "Full local lunch",
                "Exploration time in Cotacachi"
            ],
            notIncludes: [
                "Personal trekking equipment (special footwear, poles, rain jacket)",
                "Lagoon entrance fee if applicable",
                "Cafeteria consumption",
                "Tips",
                "Personal insurance"
            ]
        },
        fr: {
            eyebrow: "Journée complète · Trekking · Volcan",
            slogan: "Parcourez le paysage volcanique, découvrez la nature andine et vivez Cotacachi.",
            callout: "Acceptez le défi et longez la caldeira d'un volcan actif : 14 kilomètres de trekking interprétatif entouré d'orchidées, d'oiseaux alto-andins, de vues majestueuses sur la lagune de Cuicocha et du charme artisanal de Cotacachi.",
            description: "Un voyage inoubliable conçu pour les amoureux de la randonnée et de la photographie. Le parcours longe la crête du cratère volcanique de Cuicocha, offrant des vues panoramiques impressionnantes sur le volcan Cotacachi et les vallées andines, complété par un guidage spécialisé en géologie, botanique et un moment réconfortant dans la ville du cuir.",
            facts: [
                ["Durée", "Journée complète / 1 jour (08:00 – 16:30)"],
                ["Destination", "Réserve Cotacachi-Cayapas (Cuicocha) et zone du cuir de Cotacachi"],
                ["Distance", "12 à 14 km (Sentier Gorky Campuzano)"],
                ["Altitude", "3 100 à 3 500 m d'altitude"],
                ["Difficulté", "Modérée à Moyenne/Élevée"],
                ["Style", "Écotourisme, trekking, aventure et nature"]
            ],
            itinerary: [
                ["08:00 – 09:00", "Départ et briefing au Centre d'Interprétation de la Réserve Écologique."],
                ["09:00 – 13:00", "Cuicocha Nature Trek : randonnée de 4 à 5 heures sur le sentier Gorky Campuzano avec arrêts interprétatifs sur la flore, la faune et la vulcanologie."],
                ["13:30 – 14:30", "Déjeuner Énergétique : nourriture réconfortante aux saveurs typiques de Cotacachi."],
                ["15:00 – 16:30", "Cotacachi à votre Rythme : visite libre du centre commercial du cuir, avec café local en option."]
            ],
            includes: [
                "Transport touristique aller-retour",
                "Guide national de tourisme spécialisé en trekking et montagne",
                "Enregistrement / assistance à la Réserve Écologique",
                "Déjeuner local complet",
                "Temps d'exploration à Cotacachi"
            ],
            notIncludes: [
                "Équipement personnel de trekking (chaussures spéciales, bâtons, veste imperméable)",
                "Frais d'entrée à la lagune si applicable",
                "Consommations en cafétérias",
                "Pourboires",
                "Assurance personnelle"
            ]
        }
    },
    5: {
        es: {
            eyebrow: "Full Day · Vivencial · Etnobotánico",
            slogan: "Donde la tierra, las manos de las mujeres y los saberes ancestrales cuentan una historia.",
            callout: "Una experiencia transformadora que conecta el arado tradicional con yunta, la sabiduría médica de las parteras andinas, los hilos de las tejedoras Alli Maki y el poder curativo de las plantas medicinales.",
            description: "Un homenaje a la memoria comunitaria a través de tres pilares: la tierra que alimenta (agronomía con yunta), las mujeres que crean (asociación de tejedoras) y la sabiduría que cuida la vida (medicina etnobotánica y partería tradicional). El viajero participa activamente en el trabajo del campo y escucha los saberes transmitidos de generación en generación.",
            facts: [
                ["Duración", "Full Day / 1 día (07:00 – 18:30)"],
                ["Destino", "Comunidad La Calera (Cotacachi)"],
                ["Dificultad", "Bajo a Moderado"],
                ["Estilo", "Vivencial comunitario, etnobotánico, agropecuario y de género"],
                ["Salida / Retorno", "Otavalo / Cotacachi"],
                ["Destacados", "Arado con yunta, taller Alli Maki, jardín etnobotánico, partería tradicional"]
            ],
            itinerary: [
                ["07:00 – 08:00", "Traslado hacia la comunidad anfitriona."],
                ["08:00 – 09:30", "La Tierra y la Yunta: explicación y práctica participativa de arado agrícola tradicional con bueyes."],
                ["09:30 – 11:30", "Las Manos de las Mujeres: taller práctico de tejido y costura con la Asociación de Mujeres Alli Maki."],
                ["12:30 – 13:30", "Almuerzo Comunitario: menú andino con insumos locales."],
                ["13:30 – 15:00", "El Jardín de la Vida: recorrido interpretativo por el Jardín Etnobotánico de plantas medicinales."],
                ["15:00 – 17:30", "La Sabiduría de la Partera: encuentro y simulación cultural sobre el cuidado ancestral de la mujer con la partera tradicional Sra. Inés Bonilla."]
            ],
            includes: [
                "Transporte turístico privado",
                "Guía nacional especializado (español/inglés)",
                "Experiencia participativa con yunta",
                "Taller y recuerdo artesanal con Asociación Alli Maki",
                "Almuerzo comunitario",
                "Ingreso al Jardín Etnobotánico y sesión de demostración cultural de partería"
            ],
            notIncludes: [
                "Compras de artesanías o remedios naturales",
                "Atenciones médicas o consultas de salud",
                "Propinas",
                "Seguro individual"
            ]
        },
        en: {
            eyebrow: "Full Day · Experiential · Ethnobotanical",
            slogan: "Where the land, women's hands and ancestral knowledge tell a story.",
            callout: "A transformative experience that connects traditional yoke plowing, the medical wisdom of Andean midwives, the threads of the Alli Maki weavers and the healing power of medicinal plants.",
            description: "A tribute to community memory through three pillars: the land that feeds (yoke agronomy), the women who create (weavers' association) and the wisdom that cares for life (ethnobotanical medicine and traditional midwifery). Travelers actively participate in field work and listen to knowledge passed down from generation to generation.",
            facts: [
                ["Duration", "Full Day / 1 day (07:00 – 18:30)"],
                ["Destination", "La Calera Community (Cotacachi)"],
                ["Difficulty", "Low to Moderate"],
                ["Style", "Community experiential, ethnobotanical, agricultural and gender"],
                ["Departure / Return", "Otavalo / Cotacachi"],
                ["Highlights", "Yoke plowing, Alli Maki workshop, ethnobotanical garden, traditional midwifery"]
            ],
            itinerary: [
                ["07:00 – 08:00", "Transfer to the host community."],
                ["08:00 – 09:30", "The Land and the Yoke: explanation and participatory practice of traditional agricultural plowing with oxen."],
                ["09:30 – 11:30", "Women's Hands: practical weaving and sewing workshop with the Alli Maki Women's Association."],
                ["12:30 – 13:30", "Community Lunch: Andean menu with local ingredients."],
                ["13:30 – 15:00", "The Garden of Life: interpretive tour of the Ethnobotanical Garden of medicinal plants."],
                ["15:00 – 17:30", "The Wisdom of the Midwife: encounter and cultural simulation on ancestral care of women with traditional midwife Mrs. Inés Bonilla."]
            ],
            includes: [
                "Private tourist transport",
                "Specialized national guide (Spanish/English)",
                "Participatory experience with yoke",
                "Workshop and artisanal souvenir with Alli Maki Association",
                "Community lunch",
                "Entrance to the Ethnobotanical Garden and midwifery cultural demonstration"
            ],
            notIncludes: [
                "Purchases of crafts or natural remedies",
                "Medical care or health consultations",
                "Tips",
                "Individual insurance"
            ]
        },
        fr: {
            eyebrow: "Journée complète · Expérientiel · Ethnobotanique",
            slogan: "Où la terre, les mains des femmes et les savoirs ancestraux racontent une histoire.",
            callout: "Une expérience transformatrice qui relie le labour traditionnel au joug, la sagesse médicale des sages-femmes andines, les fils des tisserandes Alli Maki et le pouvoir curatif des plantes médicinales.",
            description: "Un hommage à la mémoire communautaire à travers trois piliers : la terre qui nourrit (agronomie au joug), les femmes qui créent (association de tisserandes) et la sagesse qui prend soin de la vie (médecine ethnobotanique et sage-femme traditionnelle). Le voyageur participe activement au travail des champs et écoute les savoirs transmis de génération en génération.",
            facts: [
                ["Durée", "Journée complète / 1 jour (07:00 – 18:30)"],
                ["Destination", "Communauté La Calera (Cotacachi)"],
                ["Difficulté", "Faible à modérée"],
                ["Style", "Expérientiel communautaire, ethnobotanique, agricole et de genre"],
                ["Départ / Retour", "Otavalo / Cotacachi"],
                ["Points forts", "Labour au joug, atelier Alli Maki, jardin ethnobotanique, sage-femme traditionnelle"]
            ],
            itinerary: [
                ["07:00 – 08:00", "Transfert vers la communauté d'accueil."],
                ["08:00 – 09:30", "La Terre et le Joug : explication et pratique participative du labour agricole traditionnel avec des bœufs."],
                ["09:30 – 11:30", "Les Mains des Femmes : atelier pratique de tissage et couture avec l'Association des Femmes Alli Maki."],
                ["12:30 – 13:30", "Déjeuner Communautaire : menu andin avec des produits locaux."],
                ["13:30 – 15:00", "Le Jardin de la Vie : visite interprétative du Jardin Ethnobotanique de plantes médicinales."],
                ["15:00 – 17:30", "La Sagesse de la Sage-femme : rencontre et simulation culturelle sur les soins ancestraux de la femme avec la sage-femme traditionnelle Mme Inés Bonilla."]
            ],
            includes: [
                "Transport touristique privé",
                "Guide national spécialisé (espagnol/anglais)",
                "Expérience participative avec joug",
                "Atelier et souvenir artisanal avec l'Association Alli Maki",
                "Déjeuner communautaire",
                "Entrée au Jardin Ethnobotanique et démonstration culturelle de sage-femme"
            ],
            notIncludes: [
                "Achats d'artisanat ou de remèdes naturels",
                "Soins médicaux ou consultations de santé",
                "Pourboires",
                "Assurance individuelle"
            ]
        }
    },
    6: {
        es: {
            eyebrow: "Full Day · Aventura · Café de Especialidad",
            slogan: "Vuela sobre el bosque, saborea la tierra y descubre el alma de Intag.",
            callout: "Desciende de los Andes al exuberante bosque subtropical de Intag: siente el dulce aroma del trapiche de caña, camina entre fincas ecológicas, saborea café orgánico de especialidad y vuela en 580 metros de canopy sobre las copas de los árboles.",
            description: "Un recorrido progresivo que muestra el drástico cambio de paisaje desde el páramo andino hacia el bosque nublado subtropical de Intag. Combina la tradición de la panela, la agricultura sustentable, la degustación de uno de los mejores cafés orgánicos del país y la dosis perfecta de adrenalina rodeado de biodiversidad.",
            facts: [
                ["Duración", "Full Day / 1 día (07:00 – 18:30)"],
                ["Destino", "Zona subtropical de Intag (Comunidad de Pucará / Apuela)"],
                ["Dificultad", "Bajo a Moderado"],
                ["Estilo", "Aventura, agroturismo, naturaleza y café de especialidad"],
                ["Salida / Retorno", "Otavalo"],
                ["Destacados", "Trapiche, Finca La Rizaralda, Café El Carmelo, Canopy 580 m"]
            ],
            itinerary: [
                ["07:00 – 08:30", "Viaje panorámico e interpretación del cambio de piso climático hacia Intag."],
                ["08:30 – 10:00", "El Trapiche: molienda artesanal de caña de azúcar y degustación de panela fresca en Pucará."],
                ["10:30 – 13:00", "Finca La Rizaralda y Almuerzo: caminata por cultivos ecológicos hacia el mirador Balcón de Intag y almuerzo de la chakra a la mesa."],
                ["13:30 – 15:00", "Del Grano a la Taza (Café El Carmelo): proceso completo del café orgánico (cultivo, tueste, molienda y cata)."],
                ["15:30 – 17:30", "Campo Colibrí: vuelo en Canopy (3 tramos / 580 metros) sobre el bosque subtropical."]
            ],
            includes: [
                "Transporte turístico privado adaptado a la zona",
                "Guía bilingüe especializado",
                "Entrada a la molienda",
                "Ingreso a finca agroecológica",
                "Almuerzo en Finca La Rizaralda",
                "Experiencia y cata en Café El Carmelo",
                "Circuito completo de equipo/instrucción de Canopy en Campo Colibrí"
            ],
            notIncludes: [
                "Compras de café o panela para llevar",
                "Bebidas alcohólicas",
                "Propinas",
                "Seguro personal"
            ]
        },
        en: {
            eyebrow: "Full Day · Adventure · Specialty Coffee",
            slogan: "Fly through the forest, taste the land, discover the soul of Intag.",
            callout: "Descend from the Andes to the lush subtropical forest of Intag: feel the sweet aroma of the cane trapiche, walk among ecological farms, taste organic specialty coffee and fly 580 meters of canopy over the treetops.",
            description: "A progressive journey that shows the drastic change of landscape from the Andean páramo to the subtropical cloud forest of Intag. It combines the tradition of panela, sustainable agriculture, tasting one of the best organic coffees in the country and the perfect dose of adrenaline surrounded by biodiversity.",
            facts: [
                ["Duration", "Full Day / 1 day (07:00 – 18:30)"],
                ["Destination", "Subtropical zone of Intag (Pucará / Apuela Community)"],
                ["Difficulty", "Low to Moderate"],
                ["Style", "Adventure, agrotourism, nature and specialty coffee"],
                ["Departure / Return", "Otavalo"],
                ["Highlights", "Trapiche, La Rizaralda Farm, El Carmelo Coffee, 580 m Canopy"]
            ],
            itinerary: [
                ["07:00 – 08:30", "Panoramic trip and interpretation of the climate zone change towards Intag."],
                ["08:30 – 10:00", "The Trapiche: artisanal sugar cane milling and tasting of fresh panela in Pucará."],
                ["10:30 – 13:00", "La Rizaralda Farm and Lunch: walk through ecological crops to the Balcón de Intag viewpoint and farm-to-table lunch."],
                ["13:30 – 15:00", "From Bean to Cup (El Carmelo Coffee): complete organic coffee process (cultivation, roasting, grinding and tasting)."],
                ["15:30 – 17:30", "Campo Colibrí: Canopy flight (3 sections / 580 meters) over the subtropical forest."]
            ],
            includes: [
                "Private tourist transport adapted to the area",
                "Specialized bilingual guide",
                "Entrance to the mill",
                "Entrance to agroecological farm",
                "Lunch at La Rizaralda Farm",
                "Experience and tasting at El Carmelo Coffee",
                "Complete Canopy equipment/instruction circuit at Campo Colibrí"
            ],
            notIncludes: [
                "Purchases of coffee or panela to take away",
                "Alcoholic beverages",
                "Tips",
                "Personal insurance"
            ]
        },
        fr: {
            eyebrow: "Journée complète · Aventure · Café de Spécialité",
            slogan: "Survolez la forêt, savourez la terre et découvrez l'âme d'Intag.",
            callout: "Descendez des Andes vers la luxuriante forêt subtropicale d'Intag : sentez le doux arôme du trapiche de canne, promenez-vous parmi les fermes écologiques, savourez un café biologique de spécialité et volez 580 mètres de canopy au-dessus de la cime des arbres.",
            description: "Un parcours progressif qui montre le changement radical de paysage du páramo andin vers la forêt nuageuse subtropicale d'Intag. Il combine la tradition de la panela, l'agriculture durable, la dégustation de l'un des meilleurs cafés biologiques du pays et la dose parfaite d'adrénaline entourée de biodiversité.",
            facts: [
                ["Durée", "Journée complète / 1 jour (07:00 – 18:30)"],
                ["Destination", "Zone subtropicale d'Intag (Communauté de Pucará / Apuela)"],
                ["Difficulté", "Faible à modérée"],
                ["Style", "Aventure, agrotourisme, nature et café de spécialité"],
                ["Départ / Retour", "Otavalo"],
                ["Points forts", "Trapiche, Finca La Rizaralda, Café El Carmelo, Canopy 580 m"]
            ],
            itinerary: [
                ["07:00 – 08:30", "Voyage panoramique et interprétation du changement de zone climatique vers Intag."],
                ["08:30 – 10:00", "Le Trapiche : broyage artisanal de canne à sucre et dégustation de panela fraîche à Pucará."],
                ["10:30 – 13:00", "Finca La Rizaralda et Déjeuner : promenade à travers les cultures écologiques jusqu'au mirador Balcón de Intag et déjeuner de la chakra à la table."],
                ["13:30 – 15:00", "Du Grain à la Tasse (Café El Carmelo) : processus complet du café biologique (culture, torréfaction, mouture et dégustation)."],
                ["15:30 – 17:30", "Campo Colibrí : vol en Canopy (3 sections / 580 mètres) au-dessus de la forêt subtropicale."]
            ],
            includes: [
                "Transport touristique privé adapté à la zone",
                "Guide bilingue spécialisé",
                "Entrée au moulin",
                "Entrée à la ferme agroécologique",
                "Déjeuner à la Finca La Rizaralda",
                "Expérience et dégustation au Café El Carmelo",
                "Circuit complet d'équipement/instruction de Canopy"
            ],
            notIncludes: [
                "Achats de café ou panela à emporter",
                "Boissons alcoolisées",
                "Pourboires",
                "Assurance personnelle"
            ]
        }
    },
    7: {
        es: {
            eyebrow: "Full Day · 4x4 · Textil Ancestral",
            slogan: "Desde las tierras altas de Cotacachi hasta las manos que tejen la identidad andina.",
            callout: "Una aventura en 4x4 hacia las faldas del volcán Cotacachi: conoce el criadero comunitario de alpacas en el páramo, camina por el Sendero Sagrado de Cuicocha y descubre el secreto del tinturado natural y tejido ancestral en telar.",
            description: "Sigue el viaje completo de la fibra andina desde su origen en las alturas hasta la obra de arte terminada. Conecta la majestuosidad del páramo y la convivencia con alpacas, la espiritualidad de la laguna sagrada y el dominio técnico de los maestros tejedores de Agato.",
            facts: [
                ["Duración", "Full Day / 1 día (08:00 – 18:00)"],
                ["Destino", "Morochos, Volcán Cotacachi, Cuicocha y Agato"],
                ["Dificultad", "Bajo a Moderado"],
                ["Estilo", "Cultural, comunitario, agropecuario, textil y páramo"],
                ["Salida / Retorno", "Otavalo / Cotacachi"],
                ["Destacados", "Criadero de alpacas en 4x4, trasquilado, Sendero Sagrado de Cuicocha, Tahuantinsuyo Weaving Workshop"]
            ],
            itinerary: [
                ["08:00 – 09:15", "Traslado e ingreso a la Comuna de Morochos para abordaje de vehículos 4x4."],
                ["09:15 – 11:15", "Criadero Comunitario de Alpacas: ascenso en 4x4 a las faldas del Volcán Cotacachi, convivencia con alpacas y demostración del trasquilado / cuidado del animal."],
                ["11:45 – 13:00", "Laguna de Cuicocha: interpretación de la cosmovisión andina en el Sendero Sagrado."],
                ["13:00 – 14:00", "Almuerzo Comunitario: gastronomía local."],
                ["14:30 – 17:30", "Tahuantinsuyo Weaving Workshop (Agato): museo textil, fibras de alpaca/lana, tintes vegetales y demostración en telares ancestrales."]
            ],
            includes: [
                "Transporte turístico privado",
                "Expedición en vehículo 4x4 hacia el criadero de alpacas",
                "Guía profesional de turismo",
                "Entradas a la Comuna Morochos y taller de trasquilado",
                "Almuerzo local completo",
                "Visita guiada al taller textil con maestros artesanos"
            ],
            notIncludes: [
                "Compras de prendas o artesanías en lana de alpaca",
                "Consumos adicionales",
                "Propinas",
                "Seguro individual"
            ]
        },
        en: {
            eyebrow: "Full Day · 4x4 · Ancestral Textile",
            slogan: "From the highlands of Cotacachi to the hands that weave Andean identity.",
            callout: "A 4x4 adventure to the slopes of the Cotacachi volcano: meet the community alpaca farm in the páramo, walk the Sacred Path of Cuicocha and discover the secret of natural dyeing and ancestral loom weaving.",
            description: "Follow the complete journey of Andean fiber from its origin in the heights to the finished work of art. It connects the majesty of the páramo and coexistence with alpacas, the spirituality of the sacred lagoon and the technical mastery of the master weavers of Agato.",
            facts: [
                ["Duration", "Full Day / 1 day (08:00 – 18:00)"],
                ["Destination", "Morochos, Cotacachi Volcano, Cuicocha and Agato"],
                ["Difficulty", "Low to Moderate"],
                ["Style", "Cultural, community, agricultural, textile and páramo"],
                ["Departure / Return", "Otavalo / Cotacachi"],
                ["Highlights", "Alpaca farm in 4x4, shearing, Cuicocha Sacred Path, Tahuantinsuyo Weaving Workshop"]
            ],
            itinerary: [
                ["08:00 – 09:15", "Transfer and entry to the Morochos Community for boarding 4x4 vehicles."],
                ["09:15 – 11:15", "Community Alpaca Farm: 4x4 ascent to the slopes of the Cotacachi Volcano, coexistence with alpacas and shearing demonstration / animal care."],
                ["11:45 – 13:00", "Cuicocha Lagoon: interpretation of the Andean worldview on the Sacred Path."],
                ["13:00 – 14:00", "Community Lunch: local gastronomy."],
                ["14:30 – 17:30", "Tahuantinsuyo Weaving Workshop (Agato): textile museum, alpaca/wool fibers, vegetable dyes and demonstration on ancestral looms."]
            ],
            includes: [
                "Private tourist transport",
                "4x4 vehicle expedition to the alpaca farm",
                "Professional tourism guide",
                "Entrances to Morochos Community and shearing workshop",
                "Full local lunch",
                "Guided visit to the textile workshop with master artisans"
            ],
            notIncludes: [
                "Purchases of alpaca wool garments or crafts",
                "Additional consumption",
                "Tips",
                "Individual insurance"
            ]
        },
        fr: {
            eyebrow: "Journée complète · 4x4 · Textile Ancestral",
            slogan: "Des hauteurs de Cotacachi aux mains qui tissent l'identité andine.",
            callout: "Une aventure en 4x4 vers les pentes du volcan Cotacachi : découvrez l'élevage communautaire d'alpagas dans le páramo, parcourez le Sentier Sacré de Cuicocha et découvrez le secret de la teinture naturelle et du tissage ancestral sur métier.",
            description: "Suivez le parcours complet de la fibre andine depuis son origine dans les hauteurs jusqu'à l'œuvre d'art terminée. Il relie la majesté du páramo et la cohabitation avec les alpagas, la spiritualité de la lagune sacrée et la maîtrise technique des maîtres tisserands d'Agato.",
            facts: [
                ["Durée", "Journée complète / 1 jour (08:00 – 18:00)"],
                ["Destination", "Morochos, Volcan Cotacachi, Cuicocha et Agato"],
                ["Difficulté", "Faible à modérée"],
                ["Style", "Culturel, communautaire, agricole, textile et páramo"],
                ["Départ / Retour", "Otavalo / Cotacachi"],
                ["Points forts", "Ferme d'alpagas en 4x4, tonte, Sentier Sacré de Cuicocha, Tahuantinsuyo Weaving Workshop"]
            ],
            itinerary: [
                ["08:00 – 09:15", "Transfert et entrée dans la Commune de Morochos pour embarquer dans les véhicules 4x4."],
                ["09:15 – 11:15", "Ferme Communautaire d'Alpagas : ascension en 4x4 vers les pentes du Volcan Cotacachi, cohabitation avec les alpagas et démonstration de tonte / soins des animaux."],
                ["11:45 – 13:00", "Lagune de Cuicocha : interprétation de la vision andine du monde sur le Sentier Sacré."],
                ["13:00 – 14:00", "Déjeuner Communautaire : gastronomie locale."],
                ["14:30 – 17:30", "Tahuantinsuyo Weaving Workshop (Agato) : musée textile, fibres d'alpaga/laine, teintures végétales et démonstration sur métiers ancestraux."]
            ],
            includes: [
                "Transport touristique privé",
                "Expédition en véhicule 4x4 vers la ferme d'alpagas",
                "Guide professionnel de tourisme",
                "Entrées à la Commune Morochos et atelier de tonte",
                "Déjeuner local complet",
                "Visite guidée de l'atelier textile avec maîtres artisans"
            ],
            notIncludes: [
                "Achats de vêtements ou artisanat en laine d'alpaga",
                "Consommations supplémentaires",
                "Pourboires",
                "Assurance individuelle"
            ]
        }
    }
};

// --- Referencias al modal ---
const tourModal = document.getElementById('tourModal');
const modalHeroImg = document.getElementById('modalHeroImg');
const modalEyebrow = document.getElementById('modalEyebrow');
const modalTitle = document.getElementById('modalTitle');
const modalSlogan = document.getElementById('modalSlogan');
const modalCallout = document.getElementById('modalCallout');
const modalDescription = document.getElementById('modalDescription');
const modalItinerary = document.getElementById('modalItinerary');
const modalFacts = document.getElementById('modalFacts');
const modalIncludes = document.getElementById('modalIncludes');
const modalNotIncludes = document.getElementById('modalNotIncludes');

// --- Renderizar contenido del modal según tour + idioma ---
function renderTourModal(tourId) {
    const tour = toursData[tourId];
    if (!tour) return;

    const lang = localStorage.getItem('alltour_lang') || 'es';
    const data = tour[lang] || tour.es;

    const card = document.querySelector(`.tour-btn[data-tour="${tourId}"]`)?.closest('.tour-card');
    const imgSrc = card?.querySelector('.tour-image img')?.src || '';
    const imgAlt = card?.querySelector('.tour-image img')?.alt || '';
    const cardTitle = card?.querySelector('h3')?.textContent || '';

    if (modalHeroImg) {
        modalHeroImg.src = imgSrc;
        modalHeroImg.alt = imgAlt;
    }
    if (modalEyebrow) modalEyebrow.textContent = data.eyebrow;
    if (modalTitle) modalTitle.textContent = cardTitle;
    if (modalSlogan) modalSlogan.textContent = data.slogan;

    if (modalCallout) modalCallout.textContent = data.callout;
    if (modalDescription) modalDescription.textContent = data.description;

    if (modalItinerary) {
        modalItinerary.innerHTML = data.itinerary.map(([time, text]) => `
            <li>
                <span class="itinerary-time">${time}</span>
                <span class="itinerary-text">${text}</span>
            </li>
        `).join('');
    }

    if (modalFacts) {
        modalFacts.innerHTML = data.facts.map(([k, v]) => `
            <li>
                <strong>${k}</strong>
                <span>${v}</span>
            </li>
        `).join('');
    }

    if (modalIncludes) {
        modalIncludes.innerHTML = data.includes.map(item => `<li>${item}</li>`).join('');
    }

    if (modalNotIncludes) {
        modalNotIncludes.innerHTML = data.notIncludes.map(item => `<li>${item}</li>`).join('');
    }
}

// --- Abrir modal ---
function openTourModal(tourId) {
    if (!tourModal) return;
    tourModal.dataset.currentTour = tourId;
    renderTourModal(tourId);
    tourModal.classList.add('open');
    tourModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('no-scroll');
}

// --- Cerrar modal ---
function closeTourModal() {
    if (!tourModal) return;
    tourModal.classList.remove('open');
    tourModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('no-scroll');
    tourModal.dataset.currentTour = '';
}

// --- Eventos ---
document.querySelectorAll('.tour-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const tourId = btn.dataset.tour;
        if (tourId) openTourModal(tourId);
    });
});

document.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', closeTourModal);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && tourModal?.classList.contains('open')) {
        closeTourModal();
    }
});

// ==========================================
// 14. FILTRO DE CATEGORÍAS (tours.html)
// ==========================================
const toursCatItems = document.querySelectorAll('.tours-cat-item');
const tourDetailBlocks = document.querySelectorAll('.tour-detail-block');

if (toursCatItems.length > 0 && tourDetailBlocks.length > 0) {
    toursCatItems.forEach(btn => {
        btn.addEventListener('click', () => {
            toursCatItems.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.dataset.cat;
            tourDetailBlocks.forEach(block => {
                if (cat === 'all' || cat === 'vivencial') {
                    block.style.display = '';
                } else {
                    block.style.display = 'none';
                }
            });
        });
    });
}


